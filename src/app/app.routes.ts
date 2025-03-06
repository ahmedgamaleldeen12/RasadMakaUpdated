import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { ActivateAccountComponent } from './features/auth/components/activate-account/activate-account.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { OtpVerifyComponent } from './features/auth/components/otp-verify/otp-verify.component';
import { ResetPasswordComponent } from './features/auth/components/reset-password/reset-password.component';
import { HomeComponent } from './features/home/home.component';
import { AuthGuardService } from './core/auth/AuthGuard.service';
import { RoleGuardService } from './core/auth/RoleGuard.service';
import { DashboardComponent } from './features/Dashboard/Dashboard.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            { path: 'login', component: LoginComponent, title: 'تسجيل الدخول' },
            { path: 'otp-verify', component: OtpVerifyComponent, title: ' كود تحقيق الدخول', },
            { path: 'active', component: ActivateAccountComponent, title: 'تفعيل الحساب' },
            { path: 'reset-password', component: ResetPasswordComponent, title: 'اعادة تعيين كلمة السر' },
        ],

    },
    {
        path: '',
        component: HomeComponent,
        canActivateChild: [AuthGuardService, RoleGuardService],
        children: [
            {
                path: 'Dashboard',
                title: 'لوحة التحكم',
                component: DashboardComponent
            },
        ]
    }
];
