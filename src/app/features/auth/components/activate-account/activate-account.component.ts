import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiBaseService } from '../../../../core/Base/ApiBaseService.service';
import { AuthService } from '../../../../core/auth/Auth.service';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss',
  imports: [ NgIf , ReactiveFormsModule],
})
export class ActivateAccountComponent implements OnInit {
  hashedEmail: string | null | undefined;
  resetForm!: FormGroup;
  isBusy = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiBaseService: ApiBaseService,
    private fb: FormBuilder,
    private _Router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.resetForm = this.fb.group({
      email: [null, [Validators.required]], 
      password: [null,[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$/)]], 
      repassword: [null, Validators.required],
    },
      { validator: this.passwordMatchValidator },
    );
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['email']) {
        this.hashedEmail = params['email'];
        this.resetForm.patchValue({ email: this.hashedEmail });
      }
      else {
        this._Router.navigateByUrl('/auth/login', { replaceUrl: true });
      }
    });
  }
  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value === frm.controls['repassword'].value ? null : { mismatch: true };
  }

  async activateAccount() {
    if (this.isBusy) {
      return;
    }
    this.isBusy = true;
    if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched();
      return;
    }
    try {
      let res = await this.apiBaseService.apiClient.accountActiveUserCreate(
        this.resetForm.value,
      );
      if (res.data.isSuccess) {
        await Swal.fire({
          title: `تم  تعيين كلمة المرور  بنجاح`,
          icon: 'success',
        });
        this._Router.navigateByUrl('/auth/login', {
          replaceUrl: true,
          skipLocationChange: false,
        });
      } else {
        Swal.fire({
          title: `${res.data.errors?.[0].message}`,
          icon: 'error',
        });
      }
    } catch (error) {
    } finally {
      this.isBusy = false;
    }
  }
}
