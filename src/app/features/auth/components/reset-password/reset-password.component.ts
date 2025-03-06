import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiBaseService } from '../../../../core/Base/ApiBaseService.service';
import { AuthService } from '../../../../core/auth/Auth.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
  imports:[ReactiveFormsModule,NgIf]
})
export class ResetPasswordComponent implements OnInit {
  step: 'InsertEmail' | 'ResetPassword' = 'InsertEmail';
  resetForm!: FormGroup;
  emailForm!: FormGroup;
  hashedEmail: string | null | undefined;

  message: string | null = null;
  isBusy = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiBaseService: ApiBaseService,
    private fb: FormBuilder,
    private _Router: Router,
    private authService: AuthService,
    public router: Router,
  ) {}

  ngOnInit() {
    this.resetForm = this.fb.group(
      {
        email: [null, [Validators.required]],
        password: [null, Validators.required],
        repassword: [null, Validators.required],
      },
      { validator: this.passwordMatchValidator },
    );
    this.emailForm = this.fb.group({email: [null, [Validators.required]],});
    this.activatedRoute.queryParams.subscribe((params) => {
      this.hashedEmail = params['email'];
      if (this.hashedEmail) {
        this.resetForm.patchValue({ email: this.hashedEmail });
        this.step = 'ResetPassword';
      }
    });
  }
  async sendResetEmail(email: string | null) {
    if (!email) {
      return;
    }
    this.isBusy = true;
    try {
      let res = await this.apiBaseService.apiClient.accountForgotPasswordCreate(
        { email: email },
      );
      console.log(res)
      if (!res?.data?.isSuccess) {
        this.message = res.data.errors![0]?.message??'';
        return;
      } else {
        this.message = '';
        await Swal.fire({
          title: res.data.data!,
          icon: 'success',
        });
        this.router.navigate(['/auth/login']);
      }
    } catch (error) {
    } finally {
      this.isBusy = false;
    }
  }
  async resetPassword(email: any, password: any) {
    if (!password || !email) {
      return;
    }
    this.isBusy = true;
    try {
      let res = await this.apiBaseService.apiClient.accountResetPasswordCreate({ email: email, newPassword: password },);
      if (!res?.data?.isSuccess) {
        this.message = res.data.errors![0]?.message??"حدث خطأ ما حاول مرة أخري";
        return;
      }  else {
        this.message = '';
        await Swal.fire({
          title: res.data.data!,
          icon: 'success',
        });
        this.router.navigate(['/auth/login']);
      }
    } catch (error) {
      Swal.fire({
        title: 'حدث خطأ',
        text: this.message ?? ' حدث خطأ ما حاول مرة أخري',
        icon: 'error',
      });
    } finally {
      this.isBusy = false;
    }
  }
  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value === frm.controls['repassword'].value? null: { mismatch: true };
  }
}
