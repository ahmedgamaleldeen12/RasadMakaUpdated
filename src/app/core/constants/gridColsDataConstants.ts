// import { gridColData } from 'src/app/shared/components/genericGrid/gridColData';
// import {
//   CenterDto,
//   DecisionSupportDTO,
//   DepartmentDto,
//   ImprovementOpportunityViewModel,
//   ImprovementSuggestionCreateDto,
//   ImprovementSuggestionViewModel,
//   IncidentDtoPagedList,
//   MainCategorySummaryDto,
//   MobadaraDto,
//   NeighborhoodDto,
//   OverdueSettingsDto,
//   PhotoScanningDto,
//   PrioretyLevelDto,
//   RoadDto,
//   SubCategorySummaryDto,
//   TempIncidentDTO,
//   UpdatePhotoScanningDto,
//   UserDto,
// } from '../../data/data-contracts';
// import { MenuItem } from 'primeng/api/menuitem';
// import { convertHex } from '../helpers/colorHelper';
// import { IncidentProcessStatus } from '../enums';

// export class GridColsDataConstants {
//   static getIncidentsGridData(): gridColData<IncidentDtoPagedList>[] {
//     let globalCellCss = () => 'cursor: pointer';
//     return [
//       { header: '#', getCellValue: (v) => v.id, getCellStyle: globalCellCss },
//       {
//         header: 'التصنيف',
//         getCellValue: (v) => v.mainCategoryName,
//         getCellStyle: globalCellCss,
//       },
//       {
//         header: 'التصنيف-الفرعي',
//         getCellValue: (v) => v.subCategoryName,
//         getCellStyle: globalCellCss,
//       },
//       {
//         header: 'تاريخ الانشاء',
//         getCellValue: (v) => v.createdAt,
//         getCellStyle: globalCellCss,
//       },
//       {
//         header: 'الحي-البلديه',
//         getCellValue: (v) => v.centerName,
//         getCellStyle: globalCellCss,
//       },
//       {
//         header: 'الطريق',
//         getCellValue: (v) => v.roadName,
//         getCellStyle: globalCellCss,
//       },
//       {
//         header: 'الحاله',
//         getCellClass(data) {
//           switch (data.incidentStatusTypeId) {
//             case 1:
//               return 'under-review'; // تحت المراجعة
//             case 2:
//               return 'new';
//             case 3:
//               return 'custom';
//             case 4:
//               return 'initially'; // تمت المعالجة المبدأية
//             case 5:
//               return 'solved'; //تمت المعالجة
//             case 6:
//               return 'reopened'; //معادة الفتح
//             case 7:
//               return 'upgraded';
//             case 8:
//               return 'canseled';
//             case 9:
//               return 'automatically';
//           }
//           return '';
//         },
//         getCellValue: (v) => v.incidentStatusTypeName,
//         getCellStyle: globalCellCss,
//       },
//     ];
//   }
//   static getMainCategoryIncidentsGridData(
//     deleteMainCategory: (v: MainCategorySummaryDto) => void,
//     editMainCategory: (v: MainCategorySummaryDto) => void,
//   ): gridColData<MainCategorySummaryDto>[] {
//     return [
//       { header: '#', getCellValue: (v, i) => i },
//       { header: 'التصنيف', getCellValue: (v) => v.name },
//       { header: 'عدد التصنيفات الفرعي', getCellValue: (v) => v.subCatCount },
//       { header: 'عدد البلاغات', getCellValue: (v) => v.incidantCount },
//       {
//         header: 'إعدادات',
//         getCellValue: (v) => v.id,
//         getMenuOptions(data) {
//           let options: MenuItem[] = [
//             {
//               label: 'تعديل',
//               icon: 'fa-regular fa-pen-to-square',
//               tabindex: undefined,
//               command: () => {
//                 editMainCategory(data);
//               },
//             },
//             {
//               routerLink: '/incidents-sections/sub-incidents-sections',
//               queryParams: { id: data.id, name: data.name },
//               label: 'التصنيفات الفرعية',
//               icon: 'fa-solid fa-network-wired',
//               tabindex: undefined,
//             },
//             {
//               label: 'حذف',
//               icon: 'fa-solid fa-delete-left',
//               tabindex: undefined,
//               command: () => {
//                 deleteMainCategory(data);
//               },
//             },
//           ];

//           return options;
//         },
//       },
//     ];
//   }
//   static getSubCategoryIncidentsGridData(
//     editSubIncidentCategory: (v: SubCategorySummaryDto) => void,
//     deleteSubIncidentCategory: (v: SubCategorySummaryDto) => void,
//   ): gridColData<SubCategorySummaryDto>[] {
//     return [
//       { header: '#', getCellValue: (v, i) => i },
//       { header: 'اسم التصنيف الفرعي', getCellValue: (v) => v.name },
//       { header: 'عدد البلاغات', getCellValue: (v) => v.incedantCount },
//       {
//         header: 'الإعدادات',
//         getCellValue: (v) => v.id,
//         getMenuOptions(data) {
//           let options: MenuItem[] = [
//             {
//               label: 'تعديل',
//               icon: 'fa-regular fa-pen-to-square',
//               tabindex: undefined,
//               command: () => {
//                 editSubIncidentCategory(data);
//               },
//             },
//             {
//               label: 'حذف',
//               icon: 'fa-solid fa-delete-left',
//               tabindex: undefined,
//               command: () => {
//                 deleteSubIncidentCategory(data);
//               },
//             },
//           ];
//           return options;
//         },
//       },
//     ];
//   }
//   static getOverdueSettingsGridData(
//     editoverdueSetting: (v: OverdueSettingsDto) => void,
//     deleteOverdueSetting: (v: SubCategorySummaryDto) => void,
//   ): gridColData<OverdueSettingsDto>[] {
//     return [
//       { header: '#', getCellValue: (v, i) => i },
//       {
//         header: 'حالة البلاغ',
//         getCellClass(data) {
//           switch (data.incidentStatusId) {
//             case 1:
//               return 'under-review'; // تحت المراجعة
//             case 2:
//               return 'new';
//             case 3:
//               return 'custom';
//             case 4:
//               return 'initially'; // تمت المعالجة المبدأية
//             case 5:
//               return 'solved'; //تمت المعالجة
//             case 6:
//               return 'reopened'; //معادة الفتح
//             case 7:
//               return 'upgraded';
//             case 8:
//               return 'canseled';
//             case 9:
//               return 'automatically';
//           }
//           return '';
//         },
//         getCellValue: (v) => v.incidentStatusName,
//       },

//       { header: 'عدد الأيام', getCellValue: (v) => v.days },
//       { header: 'المجموعة', getCellValue: (v) => v.userTypeName },
//       {
//         header: 'الإعدادات',
//         getCellValue: (v) => v.id,
//         getMenuOptions(data) {
//           let options: MenuItem[] = [
//             {
//               label: 'تعديل',
//               icon: 'fa-regular fa-pen-to-square',
//               tabindex: undefined,
//               command: () => {
//                 editoverdueSetting(data);
//               },
//             },
//             {
//               label: 'حذف',
//               icon: 'fa-solid fa-delete-left',
//               tabindex: undefined,
//               command: () => {
//                 deleteOverdueSetting(data);
//               },
//             },
//           ];
//           return options;
//         },
//       },
//     ];
//   }
//   static getDecisionSupportGridData(): gridColData<DecisionSupportDTO>[] {
//     return [
//       { header: '#', getCellValue: (v, i) => i },
//       { header: 'التصنيف الرئيسي', getCellValue: (v) => v.mainName },
//       { header: 'التصنيف-الفرعي', getCellValue: (v) => v.subName },
//       {
//         header: 'درجة الخطورة',
//         getSpanStyle(data) {
//           return `
//               background-color: ${convertHex(data.priorityColor, 0.2)} ;
//     color:  ${convertHex(data.priorityColor)} ;
//     padding: 5px 10px;
//     border-radius: 10px;
//              `;
//         },

//         getCellValue: (v) => v.priortyname,
//       },
//       { header: 'عدد البلاغات', getCellValue: (v) => v.totalCount },
//       { header: 'التكلفة ر.س', getCellValue: (v) => v.totalCost ?? 0 },
//     ];
//   }
//   static getSmartIncidentsGridData(
//     reject: (incident: TempIncidentDTO) => void,
//     view: (incident: TempIncidentDTO, index?: number) => void,
//     showAssigned: boolean,
//   ): gridColData<TempIncidentDTO>[] {
//     let globalCellCss = () => 'cursor: pointer';

//     return showAssigned
//       ? [
//           {
//             header: '#',
//             getCellValue: (v, i) => i,
//             getCellStyle: globalCellCss,
//           },
//           {
//             header: 'رقم البلاغ',
//             getCellValue: (v) => v.referenceId,
//             getCellStyle: globalCellCss,
//           },
//           {
//             header: 'التصنيف',
//             getCellValue: (v) => v.categoryName,
//             getCellStyle: globalCellCss,
//           },
//           {
//             header: 'خط الطول',
//             getCellValue: (v) => v.longitude?.toFixed(3),
//             getCellStyle: globalCellCss,
//           },
//           {
//             header: 'خط العرض',
//             getCellValue: (v) => v.latitude?.toFixed(3),
//             getCellStyle: globalCellCss,
//           },
//           {
//             header: 'حالة البلاغ',
//             getCellClass(data) {
//               switch (data.statusId) {
//                 case IncidentProcessStatus.Value0:
//                   return 'new';
//                 case IncidentProcessStatus.Value1:
//                   return 'custom';
//                 case IncidentProcessStatus.Value2:
//                   return 'canseled';
//               }
//               return '';
//             },
//             getCellValue: (v) => {
//               switch (v.statusId) {
//                 case IncidentProcessStatus.Value0:
//                   return 'جديد';
//                 case IncidentProcessStatus.Value1:
//                   return 'مقبول';
//                 case IncidentProcessStatus.Value2:
//                   return 'مرفوض';
//               }
//               return '...';
//             },
//             getCellStyle: () => 'cursor: pointer',
//           },
//           // {
//           //   header: 'إعدادات',
//           //   getCellValue: (v) => v.id,
//           //   getMenuOptions(data , i) {
//           //     let options: MenuItem[] = [
//           //       {
//           //         label: 'عرض',
//           //         icon: 'fa-solid fa-network-wired',
//           //         tabindex: undefined,
//           //         command: () => {
//           //           view(data , i);
//           //         },
//           //       },
//           //     ];
//           //     if (data.statusId === IncidentProcessStatus.Value0) {
//           //       options = [
//           //         ...options,
//           //         {
//           //           routerLink: ['/',{ outlets: { primary: 'incident/create', aux: null } }, ],queryParams: { smartRasid: data?.id },
//           //           label: 'قبول',
//           //           icon: 'fa-solid fa-check',
//           //           tabindex: undefined,
//           //         },
//           //         {
//           //           label: 'رفض',
//           //           icon: 'fa-solid fa-close',
//           //           tabindex: undefined,
//           //           command: () => {reject(data);},
//           //         },
//           //       ];
//           //     }
//           //     return options;
//           //   },
//           // },
//         ]
//       : [
//           { header: '#', getCellValue: (v, i) => i },
//           { header: 'رقم البلاغ', getCellValue: (v) => v.referenceId },
//           { header: 'التصنيف', getCellValue: (v) => v.categoryName },
//           { header: 'خط الطول', getCellValue: (v) => v.longitude?.toFixed(3) },
//           { header: 'خط العرض', getCellValue: (v) => v.latitude?.toFixed(3) },
//           {
//             header: 'حالة البلاغ',
//             getCellClass(data) {
//               switch (data.statusId) {
//                 case IncidentProcessStatus.Value0:
//                   return 'blue-title';
//                 case IncidentProcessStatus.Value1:
//                   return 'green-title';
//                 case IncidentProcessStatus.Value2:
//                   return 'orange-title';
//               }
//               return 'blue-title';
//             },
//             getCellValue: (v) => {
//               switch (v.statusId) {
//                 case IncidentProcessStatus.Value0:
//                   return 'جديد';
//                 case IncidentProcessStatus.Value1:
//                   return 'مقبول';
//                 case IncidentProcessStatus.Value2:
//                   return 'مرفوض';
//               }
//               return '...';
//             },
//           },
//           // {
//           //   header: 'إعدادات',
//           //   getCellValue: (v) => v.id,
//           //   getMenuOptions(data , i) {
//           //     let options: MenuItem[] = [
//           //       {
//           //         label: 'عرض',
//           //         icon: 'fa-solid fa-eye',
//           //         tabindex: undefined,
//           //         command: () => {
//           //           view(data , i);
//           //         },
//           //       },
//           //     ];
//           //     if (data.statusId === IncidentProcessStatus.Value0) {
//           //       options = [
//           //         ...options,
//           //         {
//           //           routerLink: [
//           //             '/',
//           //             { outlets: { primary: 'incident/create', aux: null } },
//           //           ],
//           //           queryParams: { smartRasid: data?.id },

//           //           label: 'قبول',
//           //           icon: 'fa-solid fa-check',
//           //           tabindex: undefined,
//           //         },
//           //         {
//           //           label: 'رفض',
//           //           icon: 'fa-solid fa-close',
//           //           tabindex: undefined,
//           //           command: () => {
//           //             reject(data);
//           //           },
//           //         },
//           //       ];
//           //     }
//           //     return options;
//           //   },
//           // },
//         ];
//   }
//   static getCentersGridData(
//     deleteCenter: (center: CenterDto) => void,
//     editCenter: (center: CenterDto) => void,
//     openMap: (center: CenterDto) => void,
//   ): gridColData<CenterDto>[] {
//     return [
//       { header: '#', getCellValue: (v) => v.id },
//       { header: 'الاسم باللغة العربية', getCellValue: (v) => v.name },
//       { header: 'نوع البلديه', getCellValue: (v) => v.typeName },
//       {
//         header: 'اعدادات',
//         getCellValue: (v) => v.id,
//         getMenuOptions(data) {
//           return [
//             {
//               label: 'تعديل',
//               icon: 'fa-regular fa-pen-to-square',
//               tabindex: undefined,
//               command: () => {
//                 editCenter(data);
//               },
//             },
//             {
//               label: 'حذف',
//               icon: 'fa-solid fa-delete-left',
//               tabindex: undefined,
//               command: () => {
//                 deleteCenter(data);
//               },
//             },
//             {
//               label: 'النطاق الجغرافي',
//               icon: 'fa-solid fa-location-crosshairs',
//               tabindex: undefined,
//               command: () => {
//                 openMap(data);
//               },
//             },
//           ];
//         },
//       },
//     ];
//   }
//   static getDepartmentsGridData(
//     deleteDepartment: (center: DepartmentDto) => void,
//     editDepartment: (center: DepartmentDto) => void,
//   ): gridColData<any>[] {
//     return [
//       { header: '#', getCellValue: (v) => v.id },
//       { header: 'الإدارة', getCellValue: (v) => v.name },
//       { header: 'نوع الادارة', getCellValue: (v) => v.typeName },
//       {
//         header: 'تخصص الإدارة',
//         getCellValue: (v) => {
//           const subCategoriesNames =
//             v.subCategories?.map((c: any) => c.name) ?? [];
//           if (subCategoriesNames.length > 2) {
//             const displayedSubCategoriesNames = subCategoriesNames
//               .slice(0, 2)
//               .join(' ، ');
//             const remainingCount = subCategoriesNames.length - 2;
//             return `${displayedSubCategoriesNames} ... (+${remainingCount})`;
//           } else {
//             return subCategoriesNames.join(' ، ');
//           }
//         },
//       },
//       {
//         header: 'اعدادات',
//         getCellValue: (v) => v.id,
//         getMenuOptions(data) {
//           return [
//             {
//               label: 'تعديل',
//               icon: 'fa-regular fa-pen-to-square',
//               tabindex: undefined,
//               command: () => {
//                 editDepartment(data);
//               },
//             },
//             {
//               label: 'حذف',
//               icon: 'fa-solid fa-delete-left',
//               tabindex: undefined,
//               command: () => {
//                 deleteDepartment(data);
//               },
//             },
//           ];
//         },
//       },
//     ];
//   }
//   static getMobadraGridData(
//     deleteMobadra: (center: MobadaraDto) => void,
//   ): gridColData<MobadaraDto>[] {
//     return [
//       { header: '#', getCellValue: (v) => v.id },
//       {
//         header: 'الاسم',
//         getCellValue: (v) => {
//           return v.name?.length! > 45 ? `${v.name?.slice(0, 45)}...` : v.name;
//         },
//       },
//       {
//         header: 'تاريخ البدايه',
//         getCellValue: (v) => new Date(v.startDate!).toDateString(),
//       },
//       {
//         header: 'تاريخ النهايه',
//         getCellValue: (v) => new Date(v.endDate!).toDateString(),
//       },
//       {
//         header: 'البلديات',
//         getCellValue: (v) => {
//           const categories = v.mobadaraCenters?.map((c) => c.centerName) ?? [];
//           if (categories.length > 1) {
//             const displayedCategories = categories.slice(0, 1).join(', ');
//             const remainingCount = categories.length - 1;
//             return `${displayedCategories} ... (+${remainingCount})`;
//           } else {
//             return categories.join(', ');
//           }
//         },
//       },
//       {
//         header: 'التصنيفات',
//         getCellValue: (v) => {
//           const categories =
//             v.mobadaraSubCategories?.map((c) => c.subCategoryName) ?? [];
//           if (categories.length > 1) {
//             const displayedCategories = categories.slice(0, 1).join(', ');
//             const remainingCount = categories.length - 1;
//             return `${displayedCategories} ... (+${remainingCount})`;
//           } else {
//             return categories.join(', ');
//           }
//         },
//       },
//       {
//         header: 'اعدادات',
//         getCellValue: (v) => v.id,
//         getMenuOptions(data) {
//           return [
//             {
//               label: 'الإحصائيات',
//               icon: 'fa-regular fa-chart-bar',
//               tabindex: undefined,
//               routerLink: [
//                 '/',
//                 { outlets: { primary: 'Dashboard', aux: null } },
//               ],
//               queryParams: { mobadaraId: data?.id, name: data.name },
//             },
//             {
//               label: 'البلاغات',
//               icon: 'fa-regular fa-folder-closed',
//               tabindex: undefined,
//               routerLink: [
//                 '/',
//                 { outlets: { primary: 'incident/list', aux: null } },
//               ],
//               queryParams: { mobadaraId: data?.id, name: data.name },
//             },
//             {
//               label: 'تعديل',
//               icon: 'fa-regular fa-pen-to-square',
//               tabindex: undefined,
//               routerLink: `/mobadara/update/${data.id}`,
//             },

//             {
//               label: 'حذف',
//               icon: 'fa-solid fa-delete-left',
//               tabindex: undefined,
//               command: () => {
//                 deleteMobadra(data);
//               },
//             },
//           ];
//         },
//       },
//     ];
//   }
//   static getNeighborhoodsGridData(
//     deleteNeighborhood: (Neighborhood: NeighborhoodDto) => void,
//     editNeighborhood: (Neighborhood: NeighborhoodDto) => void,
//     openMap: (Neighborhood: NeighborhoodDto) => void,
//   ): gridColData<NeighborhoodDto>[] {
//     return [
//       { header: '#', getCellValue: (v) => v.id },
//       { header: 'اسم الحي', getCellValue: (v) => v.name },
//       { header: 'البلديه', getCellValue: (v) => v.centerName },
//       {
//         header: 'اعدادات',
//         getCellValue: (v) => v.id,
//         getMenuOptions(data) {
//           return [
//             {
//               label: 'تعديل',
//               icon: 'fa-regular fa-pen-to-square',
//               tabindex: undefined,
//               command: () => {
//                 editNeighborhood(data);
//               },
//             },
//             {
//               label: 'حذف',
//               icon: 'fa-solid fa-delete-left',
//               tabindex: undefined,
//               command: () => {
//                 deleteNeighborhood(data);
//               },
//             },
//             {
//               label: 'النطاق الجغرافي',
//               icon: 'fa-solid fa-location-crosshairs',
//               tabindex: undefined,
//               command: () => {
//                 openMap(data);
//               },
//             },
//           ];
//         },
//       },
//     ];
//   }
//   static getRoadsGridData(
//     deleteRoad: (Road: RoadDto) => void,
//     editRoad: (Road: RoadDto) => void,
//     openMap: (Road: RoadDto) => void,
//   ): gridColData<RoadDto>[] {
//     return [
//       { header: '#', getCellValue: (v) => v.id },
//       { header: 'اسم الطريق', getCellValue: (v) => v.name },
//       {
//         header: 'البلدية',
//         getCellValue: (v) => v.centers?.map((c) => c.name)?.join(', ') ?? '',
//       },
//       {
//         header: 'اعدادات',
//         getCellValue: (v) => v.id,
//         getMenuOptions(data) {
//           return [
//             {
//               label: 'تعديل',
//               icon: 'fa-regular fa-pen-to-square',
//               tabindex: undefined,
//               command: () => {
//                 editRoad(data);
//               },
//             },
//             {
//               label: 'حذف',
//               icon: 'fa-solid fa-delete-left',
//               tabindex: undefined,
//               command: () => {
//                 deleteRoad(data);
//               },
//             },
//             {
//               label: 'النطاق الجغرافي',
//               icon: 'fa-solid fa-location-crosshairs',
//               tabindex: undefined,
//               command: () => {
//                 openMap(data);
//               },
//             },
//           ];
//         },
//       },
//     ];
//   }
//   static getPrioretyLevelsGridData(
//     deletePrioretyLevel: (center: PrioretyLevelDto) => void,
//     editPrioretyLevel: (center: PrioretyLevelDto) => void,
//   ): gridColData<PrioretyLevelDto>[] {
//     return [
//       { header: '#', getCellValue: (v) => v.id },
//       { header: 'الاسم', getCellValue: (v) => v.name },
//       {
//         header: 'اللون',
//         getRawHTMLStyle: (v) =>
//           `height:15px;border-radius: 5px;margin:auto;background-color:${v.color}; width:65px`,
//         getRawHTML: (v) => `<div></div>`,
//       },
//       {
//         header: 'اعدادات',
//         getCellValue: (v) => v.id,
//         getMenuOptions(data) {
//           return [
//             {
//               label: 'تعديل',
//               icon: 'fa-regular fa-pen-to-square',
//               tabindex: undefined,
//               command: () => {
//                 editPrioretyLevel(data);
//               },
//             },
//             {
//               label: 'حذف',
//               icon: 'fa-solid fa-delete-left',
//               tabindex: undefined,
//               command: () => {
//                 deletePrioretyLevel(data);
//               },
//             },
//           ];
//         },
//       },
//     ];
//   }
//   static getUsersGridData(
//     deleteUser: (User: UserDto) => void,
//   ): gridColData<UserDto>[] {
//     return [
//       {
//         header: '#',
//         getCellValue: (v) => v.id,
//       },
//       { header: 'الاسم', getCellValue: (v) => v.username },
//       { header: 'رقم الجوال', getCellValue: (v) => v.mobile },
//       { header: 'رقم الهوية', getCellValue: (v) => v.nationalId },
//       { header: 'البريد الالكتروني', getCellValue: (v) => v.email },
//       { header: 'الدور', getCellValue: (v) => v.userType },
//       {
//         header: 'البلدية/الادارة',
//         getCellValue: (v) =>
//           `${v.departments?.at(0)?.name ?? v.centers?.at(0)?.name ?? '___'} ${
//             (v.departments?.length ?? 0) > 1 || (v.centers?.length ?? 0) > 1
//               ? '...'
//               : ''
//           }`,
//       },
//       {
//         header: 'الحالة',
//         toggleComponent: true,
//       },
//       {
//         header: 'اعدادات',
//         getCellValue: (v) => v.id,
//         getMenuOptions(data) {
//           let def = [
//             {
//               label: 'تعديل',
//               icon: 'fa-regular fa-pen-to-square',
//               tabindex: undefined,
//               routerLink: `/user/update/${data.id}`,
//             },
//             {
//               label: 'حذف',
//               icon: 'fa-solid fa-delete-left',
//               tabindex: undefined,
//               command: () => {
//                 deleteUser(data);
//               },
//             },
//           ];

//           return def;
//         },
//       },
//     ];
//   }

//   static getPhotoScanningGridData(
//     deletePhotoScanning: (photoScanning: PhotoScanningDto) => void,
//     edit: (photoScanning: PhotoScanningDto) => void,
//     view: (id: number | undefined) => void,
//   ): gridColData<UpdatePhotoScanningDto>[] {
//     return [
//       { header: '#', getCellValue: (v) => v.id },
//       { header: 'الأسم', getCellValue: (v) => v.name },
//       {
//         header: 'تاريخ المسح',
//         getCellValue: (v) => new Date(v.reportTime!).toDateString(),
//       },
//       {
//         header: 'اعدادات',
//         getCellValue: (v) => v.id,
//         getMenuOptions(data) {
//           return [
//             {
//               label: 'عرض',
//               icon: 'fa-regular fa-eye',
//               tabindex: undefined,
//               command: () => {
//                 view(data.id);
//               },
//             },
//             {
//               label: 'تعديل',
//               icon: 'fa-regular fa-pen-to-square',
//               tabindex: undefined,
//               command: () => {
//                 edit(data);
//               },
//             },
//             {
//               label: 'حذف',
//               icon: 'fa-solid fa-delete-left',
//               tabindex: undefined,
//               command: () => {
//                 deletePhotoScanning(data);
//               },
//             },
//           ];
//         },
//       },
//     ];
//   }

//   static getImprovementOpportunityGridData(
//     deleteImprovementOpportunity: (
//       center: ImprovementOpportunityViewModel,
//     ) => void,
//     editImprovementOpportunity: (
//       center: ImprovementOpportunityViewModel,
//     ) => void,
//     showgetGeographicalScopeModal: (
//       center: ImprovementOpportunityViewModel,
//     ) => void,
//     showImprovementSuggestionModal: (
//       center: ImprovementOpportunityViewModel,
//     ) => void,
//   ): gridColData<ImprovementOpportunityViewModel>[] {
//     return [
//       { header: '#', getCellValue: (v) => v.id },
//       { header: 'الاسم', getCellValue: (v) => v.name },
//       { header: ' نوع الفرصة', getCellValue: (v) => v.opportunityTypeName },
//       { header: ' عدد المقتراحات', getCellValue: (v) => v.numberOfSuggestions },
//       {
//         header: 'حالة الفرصة',
//         getCellValue: (v) => v.opportunityStatusName,
//         getCellClass(data) {
//           switch (data.opportunityStatusId) {
//             case 1:
//               return 'red-title';
//             case 2:
//               return 'yellow-title';
//             case 3:
//               return 'greenStatus-title';
//           }
//           return 'red-title';
//         },
//       },
//       {
//         header: 'اعدادات',
//         getCellValue: (v) => v.id,
//         getMenuOptions(data) {
//           return [
//             {
//               label: 'النطاق الجغرافي',
//               icon: 'fas fa-crosshairs',
//               tabindex: undefined,
//               command: () => {
//                 showgetGeographicalScopeModal(data);
//               },
//             },
//             {
//               label: 'مقترحات التحسين',
//               icon: 'fa-solid fa-wand-magic-sparkles',
//               tabindex: undefined,
//               routerLink: `/opportunities-improvement/ImprovementSuggestion`,
//             },
//             {
//               label: ' مقترح تحسين',
//               icon: 'fa-solid fa-plus',
//               tabindex: undefined,
//               command: () => {
//                 showImprovementSuggestionModal(data);
//               },
//             },

//             {
//               label: 'تعديل',
//               icon: 'fa-regular fa-pen-to-square',
//               tabindex: undefined,
//               command: () => {
//                 editImprovementOpportunity(data);
//               },
//             },

//             {
//               label: 'حذف',
//               icon: 'fa-solid fa-delete-left',
//               tabindex: undefined,
//               command: () => {
//                 deleteImprovementOpportunity(data);
//               },
//             },
//           ];
//         },
//       },
//     ];
//   }

//   static getImprovementSuggestionGridData(
//     deleteImprovementSuggestion: (
//       center: ImprovementSuggestionViewModel,
//     ) => void,
//     view: (center: ImprovementSuggestionViewModel) => void,
//     showUpdateImprovementSuggestionModal: (
//       center: ImprovementOpportunityViewModel,
//     ) => void,
//   ): gridColData<ImprovementSuggestionViewModel>[] {
//     return [
//       { header: '#', getCellValue: (v) => v.id },
//       { header: 'اسم المقترح', getCellValue: (v) => v.name },
//       {
//         header: '  حالة المقترح ',
//         getCellValue: (v) => v.improvementSuggestionStatusName,
//         getCellClass(data) {
//           switch (data.improvementSuggestionStatusId) {
//             case 1:
//               return 'black-title';
//             case 2:
//               return 'red-title';
//             case 3:
//               return 'green-title';
//           }
//           return 'black-title';
//         },
//       },

//       {
//         header: 'اعدادات',
//         getCellValue: (v) => v.id,
//         getMenuOptions(data) {
//           return [
//             {
//               label: 'عرض',
//               icon: 'fa-regular fa-eye',
//               tabindex: undefined,
//               command: () => {
//                 view(data);
//               },
//             },
//             {
//               label: 'تعديل',
//               icon: 'fa-regular fa-pen-to-square',
//               tabindex: undefined,
//               command: () => {
//                 showUpdateImprovementSuggestionModal(data);
//               },
//             },

//             {
//               label: 'حذف',
//               icon: 'fa-solid fa-delete-left',
//               tabindex: undefined,
//               command: () => {
//                 deleteImprovementSuggestion(data);
//               },
//             },
//           ];
//         },
//       },
//     ];
//   }
// }
