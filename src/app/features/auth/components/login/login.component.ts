import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CookieService } from 'ngx-cookie-service';
import { EncryptionService } from '../../../../core/helpers/Encryption.service';
import { CookiesConstants } from '../../../../core/constants/CookiesConstants';
import { ApiBaseService } from '../../../../core/Base/ApiBaseService.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [ReactiveFormsModule, NgIf]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isBusy: boolean = false;
  message!: string;
  inputType: string = 'password';
  showIcon = false;


  get form() {
    return this.loginForm.controls;
  }


  constructor(
    private fb: FormBuilder,
    private apiBaseService: ApiBaseService,
    public router: Router,
    private cookiService: CookieService,
    private encryptionService: EncryptionService
  ) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }


  ngOnInit() { 
    this.cookiService.deleteAll();
  }
  login() {
    if (this.loginForm.valid) {
      this.isBusy = true;
      this.apiBaseService.apiClient.accountLoginCreate(this.loginForm.value)
        .then((response) => {
          if (!response.data?.isSuccess) {
            this.message = response.data.errors![0]?.message ?? '';
            Swal.fire({
              title: 'حدث خطأ',
              text: this.message ?? 'اسم المستخدم او كلمة المرور خطأ حاول مرة أخري',
              icon: 'error',
            });
          }
          else {
            this.cookiService.set(CookiesConstants.password, this.encryptionService.xorEncrypt(this.loginForm.value.password , CookiesConstants.password), undefined, "/", undefined, false, "Lax");
            this.cookiService.set(CookiesConstants.authUserEmail, this.encryptionService.xorEncrypt(this.loginForm.value.email , CookiesConstants.authUserEmail), undefined, "/", undefined, false, "Lax"); 
            if (response.data.data != null) {
              this.cookiService.set(CookiesConstants.authCode, response.data.data!, undefined, "/", undefined, false, "Lax");
            }
            this.router.navigate(['/auth/otp-verify']);
          }

        })
        .catch(() => {
          Swal.fire({
            title: 'حدث خطأ',
            text: this.message ?? 'اسم المستخدم او كلمة المرور خطأ حاول مرة أخري',
            icon: 'error',
          });
        })
        .finally(() => {
          this.isBusy = false;
        });
    }
  }



  resetPasswordRouting() {
    this.router.navigate(['/auth/reset-password']);
  }
}
