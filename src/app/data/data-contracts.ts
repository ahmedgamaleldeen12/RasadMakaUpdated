/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ActivateUserDto {
  email?: string | null;
  password?: string | null;
}

export interface BooleanIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: boolean;
}

export interface BooleanListIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: boolean[] | null;
}

export interface CategoryAndSubCategoryDto {
  /** @format int32 */
  mainId?: number;
  /** @format int32 */
  subCategoryId?: number;
}

export interface CategoryAndSubCategoryDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: CategoryAndSubCategoryDto;
}

export interface CenterCountDTO {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  centersCount?: number;
}

export interface CenterCountDTOListIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: CenterCountDTO[] | null;
}

export interface CenterDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  typeId?: number | null;
  /** @format int32 */
  createdByUserId?: number | null;
  /** @format int32 */
  modifiedByUserId?: number | null;
  /** @format int32 */
  orderNumber?: number;
  /** @format date-time */
  createdAt?: string | null;
  inactive?: boolean;
  isDeleted?: boolean;
  typeName?: string | null;
  coordinates?: string | null;
}

export interface CenterDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: CenterDto;
}

export interface CenterDtoPagedResultDto {
  items?: CenterDto[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CenterDtoPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: CenterDtoPagedResultDto;
}

export interface CenterLookUp {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface CenterRoadNeighborhoodNamesDto {
  /** @format int32 */
  centerId?: number | null;
  centerName?: string | null;
  /** @format int32 */
  roadId?: number | null;
  roadName?: string | null;
  /** @format int32 */
  neighborhoodId?: number | null;
  neighborhoodName?: string | null;
}

export interface CenterRoadNeighborhoodNamesDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: CenterRoadNeighborhoodNamesDto;
}

export interface ChangePasswordDto {
  email?: string | null;
  newPassword?: string | null;
}

export interface CreateCenterDto {
  name?: string | null;
  /** @format int32 */
  typeId?: number | null;
  coordinates?: string | null;
}

export interface CreateDepartmentDto {
  name?: string | null;
  /** @format int32 */
  typeId?: number | null;
  subCategoryIdS?: number[] | null;
}

export interface CreateIncidentDto {
  /** @format int32 */
  subCategoryId?: number;
  /** @format int64 */
  quantityValue?: number;
  /** @format int32 */
  prioretyLevelId?: number;
  /** @format int32 */
  mobadaraId?: number | null;
  /** @format int32 */
  centerId?: number | null;
  /** @format int32 */
  assignToUserId?: number | null;
  /** @format double */
  lat?: number | null;
  /** @format double */
  lng?: number | null;
  notes?: string | null;
  refId?: string | null;
  /** @format int32 */
  smartTempIncidentId?: number | null;
  smartTempIncidentPhoto?: UrlWithPageRouteDto;
  /** @format int32 */
  photoScanningIncidentId?: number | null;
  /** @format int32 */
  sourceOfIncident?: number | null;
  files?: UploadedFileDto[] | null;
}

export interface CreateMainCategoryDto {
  name?: string | null;
}

export interface CreateMobadaraDto {
  name?: string | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  mobadaraCentersIds?: number[] | null;
  mobadaraSubCategoriesIds?: number[] | null;
}

export interface CreateNeighborhoodDto {
  name?: string | null;
  /** @format int32 */
  centerId?: number | null;
  coordinates?: string | null;
}

export interface CreateOverdueSettingsDto {
  /** @format int32 */
  days?: number;
  /** @format int32 */
  incidentStatusId?: number | null;
  /** @format int32 */
  priorityLevelId?: number | null;
  /** @format int32 */
  userTypeId?: number | null;
  subCategoryIds?: number[] | null;
}

export interface CreatePrioretyLevelDto {
  name?: string | null;
  color?: string | null;
}

export interface CreateRoadDto {
  name?: string | null;
  centerIds?: number[] | null;
  coordinates?: string | null;
}

export interface CreateTempIncidentDTO {
  /** @format int32 */
  referenceId?: number;
  /** @format date-time */
  reportTime?: string;
  categoryName?: string | null;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  /** @format int32 */
  statusId?: number;
  fileName?: string | null;
  imageUrl?: string | null;
  filePath?: string | null;
}

export interface CreateUserDto {
  username?: string | null;
  email?: string | null;
  mobile?: string | null;
  nationalId?: string | null;
  /** @format date-time */
  birthDate?: string | null;
  /** @format int32 */
  userTypeId?: number | null;
  centerIds?: number[] | null;
  departmentIds?: number[] | null;
  jobId?: string | null;
  jobName?: string | null;
}

export interface DashBoardChartDto {
  name?: string | null;
  /** @format int32 */
  waitingForReview?: number | null;
  /** @format int32 */
  new?: number | null;
  /** @format int32 */
  assigned?: number | null;
  /** @format int32 */
  solvedInitially?: number | null;
  /** @format int32 */
  solved?: number | null;
  /** @format int32 */
  reOpened?: number | null;
  /** @format int32 */
  upped?: number | null;
  /** @format int32 */
  cancelled?: number | null;
  /** @format int32 */
  total?: number | null;
}

export interface DashBoardChartDtoListIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: DashBoardChartDto[] | null;
}

export interface DashBoardDto {
  /** @format int32 */
  totalIncident?: number;
  /** @format int32 */
  newIncident?: number;
  /** @format int32 */
  reopenIncident?: number;
  /** @format int32 */
  watingDoneIncident?: number;
  /** @format int32 */
  doneIncident?: number;
  /** @format int32 */
  cancelledIncident?: number;
  /** @format int32 */
  waitingForReviewIncident?: number;
  /** @format int32 */
  assignedIncident?: number;
}

export interface DashBoardDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: DashBoardDto;
}

export interface DashboardFilterDto {
  /** @format int32 */
  mobadraId?: number | null;
  centersIds?: number[] | null;
}

export interface DecisionSupportDTO {
  /** @format int32 */
  id?: number;
  mainName?: string | null;
  /** @format int32 */
  subId?: number;
  subName?: string | null;
  /** @format int32 */
  priortyId?: number;
  priortyname?: string | null;
  priorityColor?: string | null;
  /** @format int32 */
  totalCount?: number | null;
  /** @format double */
  totalCost?: number | null;
}

export interface DecisionSupportDTOPagedResultDto {
  items?: DecisionSupportDTO[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface DecisionSupportDTOPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: DecisionSupportDTOPagedResultDto;
}

export interface DecisionSupportTotalsDTO {
  /** @format int32 */
  totalCount?: number;
  /** @format double */
  totalCost?: number;
}

export interface DecisionSupportTotalsDTOIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: DecisionSupportTotalsDTO;
}

export interface DepartmentDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  typeId?: number | null;
  /** @format int32 */
  createdByUserId?: number | null;
  /** @format int32 */
  modifiedByUserId?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  modifiedAt?: string | null;
  inactive?: boolean;
  isDeleted?: boolean;
  typeName?: string | null;
  subCategoryIdS?: number[] | null;
  subCategories?: LookupDto[] | null;
}

export interface DepartmentDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: DepartmentDto;
}

export interface DepartmentDtoPagedResultDto {
  items?: DepartmentDto[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface DepartmentDtoPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: DepartmentDtoPagedResultDto;
}

export interface FileUploadReturnDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  distortionNoteId?: number | null;
  filePath?: string | null;
  fullPath?: string | null;
  originalName?: string | null;
  /** @format double */
  size?: number | null;
}

export interface FileUploadReturnDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: FileUploadReturnDto;
}

export interface FileUploadReturnDtoListIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: FileUploadReturnDto[] | null;
}

export interface ForgetPasswordDto {
  email?: string | null;
}

export interface GroupedIncidentsCountDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  incidentsCount?: number;
}

export interface GroupedIncidentsCountDtoListIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: GroupedIncidentsCountDto[] | null;
}

export interface GroupedIncidentsCountInMonthsDto {
  /** @format int32 */
  month?: number;
  /** @format int32 */
  incidentsCount?: number;
}

export interface GroupedIncidentsCountInMonthsDtoListIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: GroupedIncidentsCountInMonthsDto[] | null;
}

export interface ImprovementOpportunityCreateDto {
  name?: string | null;
  /** @format int32 */
  opportunityTypeId?: number | null;
}

export interface ImprovementOpportunityGeographicalScope {
  /** @format int32 */
  id?: number;
  coordinates?: string | null;
}

export interface ImprovementOpportunityGeographicalScopeGetAllDto {
  /** @format int32 */
  id?: number;
  coordinates?: string | null;
  /** @format int32 */
  opportunityStatusId?: number | null;
  opportunityStatusName?: string | null;
}

export interface ImprovementOpportunityGeographicalScopeGetAllDtoIListIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: ImprovementOpportunityGeographicalScopeGetAllDto[] | null;
}

export interface ImprovementOpportunityGetByIdDto {
  name?: string | null;
  /** @format int32 */
  opportunityTypeId?: number | null;
  /** @format int32 */
  id?: number;
  opportunityTypeName?: string | null;
}

export interface ImprovementOpportunityGetByIdDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: ImprovementOpportunityGetByIdDto;
}

export interface ImprovementOpportunityUpdateDto {
  name?: string | null;
  /** @format int32 */
  opportunityTypeId?: number | null;
  /** @format int32 */
  id?: number;
}

export interface ImprovementOpportunityViewModel {
  name?: string | null;
  /** @format int32 */
  opportunityTypeId?: number | null;
  /** @format int32 */
  id?: number;
  opportunityTypeName?: string | null;
  /** @format int32 */
  numberOfSuggestions?: number;
  /** @format int32 */
  opportunityStatusId?: number | null;
  opportunityStatusName?: string | null;
}

export interface ImprovementOpportunityViewModelPagedResultDto {
  items?: ImprovementOpportunityViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ImprovementOpportunityViewModelPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: ImprovementOpportunityViewModelPagedResultDto;
}

export interface ImprovementSuggestionCreateDto {
  name?: string | null;
  /** @format int32 */
  improvementOpportunityId?: number;
  files?: UploadedFileDto[] | null;
}

export interface ImprovementSuggestionGetByIdModel {
  name?: string | null;
  /** @format int32 */
  id?: number;
  improvementOpportunityName?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  files?: FileUploadReturnDto[] | null;
}

export interface ImprovementSuggestionGetByIdModelIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: ImprovementSuggestionGetByIdModel;
}

export interface ImprovementSuggestionUpdateDto {
  name?: string | null;
  /** @format int32 */
  id?: number;
  files?: UploadedFileDto[] | null;
}

export interface ImprovementSuggestionViewModel {
  name?: string | null;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  improvementSuggestionStatusId?: number;
  improvementSuggestionStatusName?: string | null;
}

export interface ImprovementSuggestionViewModelPagedResultDto {
  items?: ImprovementSuggestionViewModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ImprovementSuggestionViewModelPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: ImprovementSuggestionViewModelPagedResultDto;
}

export interface IncidentDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  subCategoryId?: number;
  subCategoryName?: string | null;
  /** @format int64 */
  quantityValue?: number;
  quantityTypeName?: string | null;
  /** @format int32 */
  prioretyLevelId?: number;
  prioretyLevelName?: string | null;
  prioretyLevelColor?: string | null;
  /** @format int32 */
  incidentStatusTypeId?: number;
  incidentStatusTypeName?: string | null;
  /** @format int32 */
  mobadaraId?: number | null;
  mobadaraName?: string | null;
  /** @format int32 */
  centerId?: number | null;
  centerName?: string | null;
  /** @format int32 */
  departmentId?: number | null;
  departmentName?: string | null;
  /** @format int32 */
  neighborhoodId?: number | null;
  neighborhoodName?: string | null;
  /** @format int32 */
  roadId?: number | null;
  roadName?: string | null;
  createdAt?: string | null;
  createdAtHaji?: string | null;
  assignDate?: string | null;
  assignDateHaji?: string | null;
  /** @format int32 */
  createdByUserId?: number | null;
  createdByUserName?: string | null;
  /** @format int32 */
  assignToUserId?: number | null;
  assignToUserName?: string | null;
  /** @format int32 */
  modifiedByUserId?: number | null;
  modifiedByUserName?: string | null;
  modifiedAt?: string | null;
  /** @format double */
  lat?: number | null;
  /** @format double */
  lng?: number | null;
  notes?: string | null;
  /** @format int32 */
  mainCategoryId?: number | null;
  mainCategoryName?: string | null;
  refId?: string | null;
  /** @format int32 */
  sourceOfIncident?: number | null;
  sourceOfIncidentName?: string | null;
  permissions?: IncidentPermissionDto;
}

export interface IncidentDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: IncidentDto;
}

export interface IncidentDtoPagedList {
  /** @format int32 */
  id?: number;
  subCategoryName?: string | null;
  /** @format int64 */
  quantityValue?: number;
  quantityTypeName?: string | null;
  prioretyLevelName?: string | null;
  incidentStatusTypeName?: string | null;
  centerName?: string | null;
  neighborhoodName?: string | null;
  roadName?: string | null;
  createdAt?: string | null;
  fullpath?: string | null;
  incidentColor?: string | null;
  createdByUserName?: string | null;
  mainCategoryName?: string | null;
  supervisorName?: string | null;
  /** @format int32 */
  incidentStatusTypeId?: number;
  /** @format double */
  lat?: number | null;
  /** @format double */
  lng?: number | null;
}

export interface IncidentDtoPagedListListIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: IncidentDtoPagedList[] | null;
}

export interface IncidentDtoPagedListPagedResultDto {
  items?: IncidentDtoPagedList[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface IncidentDtoPagedListPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: IncidentDtoPagedListPagedResultDto;
}

export interface IncidentLocationDTO {
  /** @format int32 */
  id?: number;
  /** @format double */
  lat?: number | null;
  /** @format double */
  lng?: number | null;
}

export interface IncidentLocationDTOListIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: IncidentLocationDTO[] | null;
}

export interface IncidentLocationDTOPagedResultDto {
  items?: IncidentLocationDTO[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface IncidentLocationDTOPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: IncidentLocationDTOPagedResultDto;
}

export interface IncidentPermissionDto {
  canReview?: boolean;
  canCancelIncident?: boolean;
  canCancelReview?: boolean;
  canUpdate?: boolean;
  canAssign?: boolean;
  canRejectAssign?: boolean;
  canSolve?: boolean;
  canAcceptSolve?: boolean;
  canRejectSolve?: boolean;
  canReopen?: boolean;
  canDelete?: boolean;
}

export interface IncidentPhotoScanningDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  centerId?: number | null;
  centerName?: string | null;
  /** @format int32 */
  roadId?: number | null;
  roadName?: string | null;
  /** @format int32 */
  neighborhoodId?: number | null;
  neighborhoodName?: string | null;
  /** @format int32 */
  photoScanningId?: number;
  hasNext?: boolean | null;
  hasPrev?: boolean | null;
  imageUrl?: string | null;
}

export interface IncidentPhotoScanningDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: IncidentPhotoScanningDto;
}

export interface IncidentPhotoScanningLocationDto {
  /** @format int32 */
  id?: number;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
}

export interface IncidentPhotoScanningLocationDtoPagedResultDto {
  items?: IncidentPhotoScanningLocationDto[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface IncidentPhotoScanningLocationDtoPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: IncidentPhotoScanningLocationDtoPagedResultDto;
}

export interface IncidenthistoryDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  incidentStatusTypeId?: number;
  incidentStatusTypeName?: string | null;
  departmentName?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdAthij?: string | null;
  /** @format int32 */
  createdByUserId?: number | null;
  createdByUserName?: string | null;
  /** @format int32 */
  assignToUserId?: number | null;
  assignToUserName?: string | null;
  notes?: string | null;
  photosPaths?: string[] | null;
}

export interface IncidenthistoryDtoListIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: IncidenthistoryDto[] | null;
}

export interface Int32IResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  /** @format int32 */
  data?: number;
}

export interface Int32NullableIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  /** @format int32 */
  data?: number | null;
}

export interface LocationDto {
  /** @format double */
  long?: number;
  /** @format double */
  lat?: number;
}

export interface LocationModel {
  /** @format double */
  lat?: number;
  /** @format double */
  long?: number;
  /** @format double */
  distanceInMeter?: number;
}

export interface LockUpDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface LockUpDtoListIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: LockUpDto[] | null;
}

export interface LoginDto {
  email?: string | null;
  password?: string | null;
  isFromMobile?: boolean;
}

export interface LookupDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface LookupDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: LookupDto;
}

export interface MainCategoryDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface MainCategoryDtoPagedResultDto {
  items?: MainCategoryDto[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface MainCategoryDtoPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: MainCategoryDtoPagedResultDto;
}

export interface MainCategorySubsDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  subCategoryDtos?: SubCategoryDto[] | null;
}

export interface MainCategorySubsDtoListIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: MainCategorySubsDto[] | null;
}

export interface MainCategorySummaryDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  subCatCount?: number | null;
  /** @format int32 */
  incidantCount?: number | null;
}

export interface MainCategorySummaryDtoPagedResultDto {
  items?: MainCategorySummaryDto[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface MainCategorySummaryDtoPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: MainCategorySummaryDtoPagedResultDto;
}

export interface MobadaraByIdDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  mobadaraCentersIds?: number[] | null;
  mobadaraSubCategoriesIds?: number[] | null;
  /** @format int32 */
  mainCategoryId?: number | null;
}

export interface MobadaraByIdDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: MobadaraByIdDto;
}

export interface MobadaraCenterDto {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  centerId?: number;
  centerName?: string | null;
  /** @format int32 */
  mobadaraId?: number;
}

export interface MobadaraDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  mobadaraCenters?: MobadaraCenterDto[] | null;
  mobadaraSubCategories?: MobadaraSubCategoryDto[] | null;
}

export interface MobadaraDtoPagedResultDto {
  items?: MobadaraDto[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface MobadaraDtoPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: MobadaraDtoPagedResultDto;
}

export interface MobadaraSubCategoryDto {
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  subCategoryId?: number;
  subCategoryName?: string | null;
  /** @format int32 */
  mobadaraId?: number;
}

export interface NeighborhoodDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  centerName?: string | null;
  /** @format int32 */
  centerId?: number | null;
  coordinates?: string | null;
}

export interface NeighborhoodDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: NeighborhoodDto;
}

export interface NeighborhoodDtoPagedResultDto {
  items?: NeighborhoodDto[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface NeighborhoodDtoPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: NeighborhoodDtoPagedResultDto;
}

export interface NotificationDto {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  createdAt?: string;
  title?: string | null;
  /** @format int32 */
  incidentId?: number;
  body?: string | null;
  /** @format int32 */
  notificationTypeId?: number;
  /** @format int32 */
  targetUserId?: number;
  notificationType?: string | null;
  isRead?: boolean;
}

export interface NotificationDtoPagedResultDto {
  items?: NotificationDto[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface NotificationDtoPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: NotificationDtoPagedResultDto;
}

export interface OverdueSettingsDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  days?: number;
  /** @format int32 */
  incidentStatusId?: number;
  /** @format int32 */
  priorityLevelId?: number;
  /** @format int32 */
  userTypeId?: number;
  incidentStatusName?: string | null;
  priorityLevelName?: string | null;
  userTypeName?: string | null;
  subCategoryIds?: number[] | null;
}

export interface OverdueSettingsDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: OverdueSettingsDto;
}

export interface OverdueSettingsDtoPagedResultDto {
  items?: OverdueSettingsDto[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface OverdueSettingsDtoPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: OverdueSettingsDtoPagedResultDto;
}

export interface PhotoScanningDto {
  name?: string | null;
  /** @format date-time */
  reportTime?: string;
  /** @format int32 */
  id?: number;
}

export interface PhotoScanningDtoPagedResultDto {
  items?: PhotoScanningDto[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PhotoScanningDtoPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: PhotoScanningDtoPagedResultDto;
}

export interface PrioretyLevelDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  color?: string | null;
}

export interface PrioretyLevelDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: PrioretyLevelDto;
}

export interface PrioretyLevelDtoPagedResultDto {
  items?: PrioretyLevelDto[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PrioretyLevelDtoPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: PrioretyLevelDtoPagedResultDto;
}

export interface ProcessorNameDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  isCenter?: boolean;
}

export interface ProcessorNameDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: ProcessorNameDto;
}

export interface ProfileDto {
  userName?: string | null;
  userType?: string | null;
  email?: string | null;
  mobile?: string | null;
  jobName?: string | null;
  nationalId?: string | null;
  departments?: string[] | null;
  centers?: string[] | null;
  /** @format date-time */
  birthDate?: string | null;
  photoPath?: string | null;
}

export interface ProfileDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: ProfileDto;
}

export interface RejectReviewIncidentDto {
  /** @format int32 */
  incidentId?: number;
  notes?: string | null;
}

export interface RequestForRefreshTokenDto {
  oldToken?: string | null;
  refreshToken?: string | null;
}

export interface RoadDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  coordinates?: string | null;
  centers?: CenterLookUp[] | null;
}

export interface RoadDtoPagedResultDto {
  items?: RoadDto[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface RoadDtoPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: RoadDtoPagedResultDto;
}

export interface SolveEscalationDto {
  /** @format int32 */
  incidentId?: number;
  /** @format int32 */
  assignedUserId?: number | null;
  note?: string | null;
}

export interface StringIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: string | null;
}

export interface SubCatTypeDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  amountUnite?: string | null;
  aiCode?: string | null;
  /** @format int32 */
  mainCategoryId?: number;
}

export interface SubCatTypeDtoListIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: SubCatTypeDto[] | null;
}

export interface SubCategoryCountDTO {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  subCategoriesCount?: number;
}

export interface SubCategoryCountDTOListIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: SubCategoryCountDTO[] | null;
}

export interface SubCategoryDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  quantityTypeId?: number;
  /** @format int32 */
  mainCategoryId?: number;
  /** @format int32 */
  orderNo?: number;
  name?: string | null;
  mainCategoryName?: string | null;
  quantityTypeName?: string | null;
  photoPath?: string | null;
  aiCode?: string | null;
  smartCode?: string | null;
  /** @format double */
  expectedUnitCost?: number | null;
}

export interface SubCategoryDtoPagedResultDto {
  items?: SubCategoryDto[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface SubCategoryDtoPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: SubCategoryDtoPagedResultDto;
}

export interface SubCategorySummaryDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  quantityTypeId?: number;
  /** @format int32 */
  mainCategoryId?: number;
  /** @format int32 */
  orderNo?: number;
  name?: string | null;
  mainCategoryName?: string | null;
  quantityTypeName?: string | null;
  photoPath?: string | null;
  aiCode?: string | null;
  smartCode?: string | null;
  /** @format double */
  expectedUnitCost?: number | null;
  /** @format int32 */
  incedantCount?: number;
}

export interface SubCategorySummaryDtoPagedResultDto {
  items?: SubCategorySummaryDto[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface SubCategorySummaryDtoPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: SubCategorySummaryDtoPagedResultDto;
}

export interface TErrorField {
  fieldName?: string | null;
  code?: string | null;
  message?: string | null;
  fieldLang?: string | null;
}

export interface TempIncidentDTO {
  /** @format int32 */
  referenceId?: number;
  /** @format date-time */
  reportTime?: string;
  categoryName?: string | null;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  /** @format int32 */
  statusId?: number;
  fileName?: string | null;
  imageUrl?: string | null;
  filePath?: string | null;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  assignToUserId?: number | null;
  assignToUserName?: string | null;
  statusName?: string | null;
  /** @format int32 */
  centerId?: number;
  centerName?: string | null;
  /** @format int32 */
  mainCategoryId?: number;
  mainCategoryName?: string | null;
  /** @format int32 */
  subCategoryId?: number;
  subCategoryName?: string | null;
  hasNext?: boolean | null;
  hasPrev?: boolean | null;
  files?: FileUploadReturnDto[] | null;
}

export interface TempIncidentDTOIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: TempIncidentDTO;
}

export interface TempIncidentsDTO {
  /** @format int32 */
  referenceId?: number;
  /** @format date-time */
  reportTime?: string;
  categoryName?: string | null;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  /** @format int32 */
  statusId?: number;
  fileName?: string | null;
  imageUrl?: string | null;
  filePath?: string | null;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  assignToUserId?: number | null;
  assignToUserName?: string | null;
  statusName?: string | null;
}

export interface TempIncidentsDTOPagedResultDto {
  items?: TempIncidentsDTO[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface TempIncidentsDTOPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: TempIncidentsDTOPagedResultDto;
}

export interface UpdateAccountDto {
  username?: string | null;
  mobile?: string | null;
  password?: string | null;
  jobName?: string | null;
  nationalId?: string | null;
  /** @format date-time */
  birthDate?: string | null;
}

export interface UpdateCenterDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  typeId?: number | null;
  coordinates?: string | null;
}

export interface UpdateCenterOrderDto {
  /** @format int32 */
  old?: number;
  /** @format int32 */
  current?: number;
}

export interface UpdateDepartmentDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  typeId?: number | null;
  subCategoryIdS?: number[] | null;
}

export interface UpdateIncidentDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  centerId?: number;
  /** @format int32 */
  departmentId?: number | null;
  /** @format int32 */
  subCategoryId?: number;
  /** @format int64 */
  quantityValue?: number;
  /** @format int32 */
  prioretyLevelId?: number;
  notes?: string | null;
  /** @format double */
  lat?: number | null;
  /** @format double */
  lng?: number | null;
  files?: UploadedFileDto[] | null;
}

export interface UpdateIncidentStatusDto {
  /** @format int32 */
  incidentId?: number;
  notes?: string | null;
  files?: UploadedFileDto[] | null;
}

export interface UpdateMainCategoryDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface UpdateMobadaraDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  mobadaraCentersIds?: number[] | null;
  mobadaraSubCategoriesIds?: number[] | null;
}

export interface UpdateNeighborhoodDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  centerId?: number | null;
  coordinates?: string | null;
}

export interface UpdateOverdueSettingsDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  days?: number;
  /** @format int32 */
  incidentStatusId?: number | null;
  /** @format int32 */
  priorityLevelId?: number | null;
  /** @format int32 */
  userTypeId?: number | null;
  subCategoryIds?: number[] | null;
}

export interface UpdatePhotoScanningDto {
  name?: string | null;
  /** @format date-time */
  reportTime?: string;
  /** @format int32 */
  id?: number;
}

export interface UpdatePrioretyLevelDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  color?: string | null;
}

export interface UpdateRoadDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  centerIds?: number[] | null;
  coordinates?: string | null;
}

export interface UpdateSubCategoryOrderDto {
  /** @format int32 */
  old?: number;
  /** @format int32 */
  current?: number;
}

export interface UpdateUserDto {
  /** @format int32 */
  id?: number;
  username?: string | null;
  mobile?: string | null;
  jobId?: string | null;
  jobName?: string | null;
  nationalId?: string | null;
  /** @format int32 */
  userTypeId?: number | null;
  centerIds?: number[] | null;
  departmentIds?: number[] | null;
}

export interface UploadedFileDto {
  /** @format int32 */
  id?: number | null;
  filePath?: string | null;
  originalName?: string | null;
  /** @format double */
  size?: number | null;
}

export interface UrlWithPageRouteDto {
  fileUrl?: string | null;
  pageRoute?: string | null;
  /** @format int32 */
  pathEnum?: number;
}

export interface UserDetailsDto {
  /** @format int32 */
  id?: number;
  username?: string | null;
  email?: string | null;
  mobile?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  modifiedAt?: string | null;
  centerIds?: number[] | null;
  departmentIds?: number[] | null;
  nationalId?: string | null;
  jobId?: string | null;
  jobName?: string | null;
  inactive?: boolean | null;
  isDeleted?: boolean;
  /** @format int32 */
  userTypeId?: number | null;
  userType?: string | null;
  canUpdate?: boolean;
}

export interface UserDetailsDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: UserDetailsDto;
}

export interface UserDto {
  /** @format int32 */
  id?: number;
  username?: string | null;
  email?: string | null;
  mobile?: string | null;
  nationalId?: string | null;
  userType?: string | null;
  inactive?: boolean | null;
  isDeleted?: boolean;
  /** @format int32 */
  userTypeId?: number | null;
  centers?: LookupDto[] | null;
  departments?: LookupDto[] | null;
}

export interface UserDtoPagedResultDto {
  items?: UserDto[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface UserDtoPagedResultDtoIResponse {
  isSuccess?: boolean;
  errors?: TErrorField[] | null;
  data?: UserDtoPagedResultDto;
}

export interface UserEmailsDTO {
  /** @format int32 */
  id?: number;
  email?: string | null;
}

export interface VerifyLoginCodeDto {
  email?: string | null;
  password?: string | null;
  code?: string | null;
  passwordIsCorrect?: boolean;
}
