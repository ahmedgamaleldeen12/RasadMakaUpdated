import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CookieService } from 'ngx-cookie-service';
import { ApiBaseService } from '../../../../core/Base/ApiBaseService.service';
import { CookiesConstants } from '../../../../core/constants/CookiesConstants';
import { EncryptionService } from '../../../../core/helpers/Encryption.service';
import { InputOtpModule } from 'primeng/inputotp';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrl: './otp-verify.component.scss',
  imports: [ReactiveFormsModule,RouterModule,InputOtpModule , FormsModule],
})
export class OtpVerifyComponent implements OnInit {
  otpForm!: FormGroup;
  isBusy = false;
  email!: string;
  password!: string;
  code :FormControl = new FormControl('');
  onInputChange(e :any){
    this.otpForm.patchValue({'code': e})
  }
  constructor(
    private apiBaseService: ApiBaseService,
    private fb: FormBuilder,
    public router: Router,
    private cookieService: CookieService,
    private encryptionService: EncryptionService,
    private cdRef: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.otpForm = this.fb.group({
      email: [null],
      code: [null],
      password: [null]
    });
  
    const email = this.getEmailFromCookie();
    const password = this.getPasswordFromCookie();
  
    if (!email || !password) {
      this.router.navigateByUrl('/auth/login', { replaceUrl: true });
      return;
    }
  
    this.code.setValue(this.cookieService.get(CookiesConstants.authCode));
  
    // Defer form update to avoid ExpressionChangedAfterItHasBeenCheckedError
    Promise.resolve().then(() => {
      this.otpForm.patchValue({
        email: email,
        password: password,
        code: this.cookieService.get(CookiesConstants.authCode),
      });
    })
    // force change detection to let angular read late changes in otpForm
    this.cdRef.detectChanges();

  }
  

  getPasswordFromCookie(): string {
    let encryptedPassword = this.cookieService.get(CookiesConstants.password);
    return encryptedPassword ? this.encryptionService.xorDecrypt(encryptedPassword, CookiesConstants.password) : '';
  }

  getEmailFromCookie(): string {
    let encryptedEmail = this.cookieService.get(CookiesConstants.authUserEmail);
    return encryptedEmail ? this.encryptionService.xorDecrypt(encryptedEmail, CookiesConstants.authUserEmail) : '';
  }

  async save() {
    this.isBusy = true;
    try {
      this.apiBaseService.apiClient.accountVerifyCodeCreate(this.otpForm.value).then((res) => {
        if (res.data.isSuccess) { 
          this.cookieService.set(CookiesConstants.authUserRole, res?.data?.data!.toString(), undefined, "/", undefined, false, "Lax");
          this.router.navigate(['/']);
          [CookiesConstants.password, CookiesConstants.authUserEmail, CookiesConstants.authCode].forEach(cookie => {
            this.cookieService.delete(cookie, '/', undefined, false);
          });
          if(res.headers["http-token"] && res.headers["http-rtoken"] ){
            this.cookieService.set('http-token', res.headers["http-token"], undefined, "/", undefined, false, "Lax");
            this.cookieService.set('http-rtoken', res.headers["http-rtoken"], undefined, "/", undefined, false, "Lax");
          }
        } else {
          Swal.fire({
            title: 'حدث خطأ',
            text: res.data.errors?.[0]?.message || 'حدث خطأ غير متوقع، يرجى المحاولة لاحقًا',
            icon: 'error',
          }).then(() => {
            if (res.data.errors?.[0]?.code == '7062') {
              this.router.navigateByUrl('/auth/login', { replaceUrl: true });
            }
          });
        }
      }).catch((error) => {
        console.error(error);
      }).finally(() => {
        this.isBusy = false;
      });

    } catch (error) {
      console.error('Error during password decryption or patching', error);
      this.isBusy = false;
    }
  }
}
