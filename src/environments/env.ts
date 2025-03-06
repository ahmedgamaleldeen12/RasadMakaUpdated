
import { CustomMenuItem } from "../app/core/components/SideNav/custom_menu_item";
import { UserTypesEnum } from "../app/core/enums/enums";

export interface Environment {
  menu?: CustomMenuItem[];
  apiUrl?: string;
  smartApiUrl?: string;
  authHeader?: string;
  isProduction?: boolean;
  client_name?: string;
  project_name?: string;
}
export const defaultMenu: CustomMenuItem[] = [
  {
    name: 'الرئيسية',
    url: '/Dashboard',
    iconUrl: './assets/icons/fi-rr-apps.svg',
    
  },
  {
    name: 'اقسام البلاغات',
    url: '/incidents-sections',
    iconUrl: './assets/icons/fi-rr-chart-tree.svg',
    roleIds: [UserTypesEnum.Admin],
  },
  {
    name: 'المبادرات',
    url: '/mobadara',
    iconUrl: './assets/icons/fi-rr-flag.svg',
    roleIds: [UserTypesEnum.Admin],
  },
  {
    name: 'البلاغات',
    url: '/incident/list',
    iconUrl: './assets/icons/fi-rr-folder.svg',
  },
  {
    name: 'حوكمة العمليات',
    iconUrl: './assets/icons/fi-rr-bank.svg',
    roleIds: [UserTypesEnum.Admin],
    children: [
      {
        name: 'درجه الخطوره',
        url: '/prioretylevel',
        iconUrl: './assets/icons/7.svg',
        roleIds: [UserTypesEnum.Admin],
      },
      {
        name: 'إعدادات التصعيد',
        url: '/overdueSettings',
        iconUrl: './assets/icons/12.svg',
        roleIds: [UserTypesEnum.Admin],
      },
    ],
  },
  {
    roleIds: [
      UserTypesEnum.Admin,
      UserTypesEnum.AdminEmployee,
      UserTypesEnum.Supervisor,
    ],
    name: 'الرصد الذكي',
    url: '/smart',
    iconUrl: './assets/icons/Simplification.svg',
    children: [
      {
        name: 'ضبط الجودة',
        url: 'smart-quality',
        iconUrl: './assets/icons/Group 1171275769.svg',
      },
      {
        name: 'ضبط الجودة - الخريطة',
        url: 'smart-map',
        iconUrl: './assets/icons/Group 1171275769.svg',
      },
    ],
  },
  {
    roleIds: [UserTypesEnum.Admin],
    name: 'دعم اتخاذ القرار',
    url: '/decision',
    iconUrl: './assets/icons/fi-rr-shield-check.svg',
  },
  {
    name: 'الخريطة الحرارية',
    url: '/heat-map',
    iconUrl: './assets/icons/Simplification2.svg',
    roleIds: [UserTypesEnum.Admin],
  },
  {
    name: 'الاعدادات',
    iconUrl: './assets/icons/fi-rr-settings.svg',
    roleIds: [UserTypesEnum.Admin],
    children: [
      {
        name: 'البلديات',
        url: '/center',
        iconUrl: './assets/icons/9.svg',
        roleIds: [UserTypesEnum.Admin],
      },
      {
        name: 'الاحياء',
        url: '/neighborhood',
        iconUrl: './assets/icons/11.svg',
        roleIds: [UserTypesEnum.Admin],
      },
      {
        name: 'الطرق',
        url: '/roads',
        iconUrl: './assets/icons/10.svg',
        roleIds: [UserTypesEnum.Admin],
      },
      {
        name: ' الادارات',
        url: '/department',
        iconUrl: './assets/icons/6.svg',
        roleIds: [UserTypesEnum.Admin],
      },
      {
        name: ' المستخدمين',
        url: '/users',
        iconUrl: './assets/icons/5.svg',
        roleIds: [
          UserTypesEnum.Admin,
          UserTypesEnum.CenterBoss,
          UserTypesEnum.DepartmentBoss,
        ],
      },
    ],
  },
  {
    name: 'المتابعة الخرائطية',
    url: '/cartographic-follow-up',
    iconUrl: './assets/icons/Component 36.svg',
    roleIds: [UserTypesEnum.Admin],
  },
  {
    name: ' فرص التحسين',
    iconUrl: './assets/icons/opportunities-improvement.svg',
    children: [
      {
        name: ' فرص التحسين ',
        url: '/opportunities-improvement',
        iconUrl: './assets/icons/9.svg',
      },
      {
        name: 'فرص التحسين - الخريطة',
        url: '/opportunities-improvement/OpportunitiesImprovementMap',
        iconUrl: './assets/icons/9.svg',
      },
    ],
  },
  {
    name: 'خريطة تجريبية',
    url: '/test',
    iconUrl: './assets/icons/camira.svg',
    roleIds: [
      UserTypesEnum.Admin,
      UserTypesEnum.CenterBoss,
      UserTypesEnum.DepartmentBoss,
    ],
  },
    {
    name: 'التحليل الإحصائي',
    url: '/StatisticalAnalysis',
    iconUrl: './assets/icons/StatisticalAnalysisIcon.svg',
    roleIds: [UserTypesEnum.Admin],
  },
  {
    name: 'المسح التصويري',
    url: '/photo-scanning',
    iconUrl: './assets/icons/camira.svg',
    roleIds: [
      UserTypesEnum.Admin,
      UserTypesEnum.CenterBoss,
      UserTypesEnum.DepartmentBoss,
    ],
  },
  {
    name: 'تقرير البلاغات',
    url: '/incident/report',
    iconUrl: './assets/icons/Vector09.svg',
  },
];
