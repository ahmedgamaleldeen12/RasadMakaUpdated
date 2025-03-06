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

import {
  ActivateUserDto,
  BooleanIResponse,
  BooleanListIResponse,
  CategoryAndSubCategoryDtoIResponse,
  CenterCountDTOListIResponse,
  CenterDtoIResponse,
  CenterDtoPagedResultDtoIResponse,
  CenterRoadNeighborhoodNamesDtoIResponse,
  ChangePasswordDto,
  CreateCenterDto,
  CreateDepartmentDto,
  CreateIncidentDto,
  CreateMainCategoryDto,
  CreateMobadaraDto,
  CreateNeighborhoodDto,
  CreateOverdueSettingsDto,
  CreatePrioretyLevelDto,
  CreateRoadDto,
  CreateTempIncidentDTO,
  CreateUserDto,
  DashBoardChartDtoListIResponse,
  DashBoardDtoIResponse,
  DashboardFilterDto,
  DecisionSupportDTOPagedResultDtoIResponse,
  DecisionSupportTotalsDTOIResponse,
  DepartmentDtoIResponse,
  DepartmentDtoPagedResultDtoIResponse,
  FileUploadReturnDtoIResponse,
  FileUploadReturnDtoListIResponse,
  ForgetPasswordDto,
  GroupedIncidentsCountDtoListIResponse,
  GroupedIncidentsCountInMonthsDtoListIResponse,
  ImprovementOpportunityCreateDto,
  ImprovementOpportunityGeographicalScope,
  ImprovementOpportunityGeographicalScopeGetAllDtoIListIResponse,
  ImprovementOpportunityGetByIdDtoIResponse,
  ImprovementOpportunityUpdateDto,
  ImprovementOpportunityViewModelPagedResultDtoIResponse,
  ImprovementSuggestionCreateDto,
  ImprovementSuggestionGetByIdModelIResponse,
  ImprovementSuggestionUpdateDto,
  ImprovementSuggestionViewModelPagedResultDtoIResponse,
  IncidentDtoIResponse,
  IncidentDtoPagedListListIResponse,
  IncidentDtoPagedListPagedResultDtoIResponse,
  IncidentLocationDTOListIResponse,
  IncidentLocationDTOPagedResultDtoIResponse,
  IncidentPhotoScanningDtoIResponse,
  IncidentPhotoScanningLocationDtoPagedResultDtoIResponse,
  IncidenthistoryDtoListIResponse,
  Int32IResponse,
  Int32NullableIResponse,
  LocationDto,
  LocationModel,
  LockUpDtoListIResponse,
  LoginDto,
  LookupDtoIResponse,
  MainCategoryDtoPagedResultDtoIResponse,
  MainCategorySubsDtoListIResponse,
  MainCategorySummaryDtoPagedResultDtoIResponse,
  MobadaraByIdDtoIResponse,
  MobadaraDtoPagedResultDtoIResponse,
  NeighborhoodDtoIResponse,
  NeighborhoodDtoPagedResultDtoIResponse,
  NotificationDtoPagedResultDtoIResponse,
  OverdueSettingsDtoIResponse,
  OverdueSettingsDtoPagedResultDtoIResponse,
  PhotoScanningDtoPagedResultDtoIResponse,
  PrioretyLevelDtoIResponse,
  PrioretyLevelDtoPagedResultDtoIResponse,
  ProcessorNameDtoIResponse,
  ProfileDtoIResponse,
  RejectReviewIncidentDto,
  RequestForRefreshTokenDto,
  RoadDtoPagedResultDtoIResponse,
  SolveEscalationDto,
  StringIResponse,
  SubCatTypeDtoListIResponse,
  SubCategoryCountDTOListIResponse,
  SubCategoryDtoPagedResultDtoIResponse,
  SubCategorySummaryDtoPagedResultDtoIResponse,
  TempIncidentDTOIResponse,
  TempIncidentsDTOPagedResultDtoIResponse,
  UpdateAccountDto,
  UpdateCenterDto,
  UpdateCenterOrderDto,
  UpdateDepartmentDto,
  UpdateIncidentDto,
  UpdateIncidentStatusDto,
  UpdateMainCategoryDto,
  UpdateMobadaraDto,
  UpdateNeighborhoodDto,
  UpdateOverdueSettingsDto,
  UpdatePhotoScanningDto,
  UpdatePrioretyLevelDto,
  UpdateRoadDto,
  UpdateSubCategoryOrderDto,
  UpdateUserDto,
  UrlWithPageRouteDto,
  UserDetailsDtoIResponse,
  UserDtoPagedResultDtoIResponse,
  UserEmailsDTO,
  VerifyLoginCodeDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Account
   * @name AccountLoginCreate
   * @request POST:/api/Account/Login
   * @secure
   */
  accountLoginCreate = (data: LoginDto, params: RequestParams = {}) =>
    this.request<StringIResponse, any>({
      path: `/api/Account/Login`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Account
   * @name AccountVerifyCodeCreate
   * @request POST:/api/Account/VerifyCode
   * @secure
   */
  accountVerifyCodeCreate = (data: VerifyLoginCodeDto, params: RequestParams = {}) =>
    this.request<Int32NullableIResponse, any>({
      path: `/api/Account/VerifyCode`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Account
   * @name AccountRefreshTokenCreate
   * @request POST:/api/Account/RefreshToken
   * @secure
   */
  accountRefreshTokenCreate = (data: RequestForRefreshTokenDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Account/RefreshToken`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Account
   * @name AccountGetProfileList
   * @request GET:/api/Account/GetProfile
   * @secure
   */
  accountGetProfileList = (params: RequestParams = {}) =>
    this.request<ProfileDtoIResponse, any>({
      path: `/api/Account/GetProfile`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Account
   * @name AccountUpdateProfileCreate
   * @request POST:/api/Account/UpdateProfile
   * @secure
   */
  accountUpdateProfileCreate = (data: UpdateAccountDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Account/UpdateProfile`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Account
   * @name AccountUpdateProfilePictureCreate
   * @request POST:/api/Account/UpdateProfilePicture
   * @secure
   */
  accountUpdateProfilePictureCreate = (
    data: {
      /** @format binary */
      file?: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Account/UpdateProfilePicture`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Account
   * @name AccountActiveUserCreate
   * @request POST:/api/Account/ActiveUser
   * @secure
   */
  accountActiveUserCreate = (data: ActivateUserDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Account/ActiveUser`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Account
   * @name AccountChangePasswordCreate
   * @request POST:/api/Account/ChangePassword
   * @secure
   */
  accountChangePasswordCreate = (data: ChangePasswordDto, params: RequestParams = {}) =>
    this.request<StringIResponse, any>({
      path: `/api/Account/ChangePassword`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Account
   * @name AccountForgotPasswordCreate
   * @request POST:/api/Account/ForgotPassword
   * @secure
   */
  accountForgotPasswordCreate = (data: ForgetPasswordDto, params: RequestParams = {}) =>
    this.request<StringIResponse, any>({
      path: `/api/Account/ForgotPassword`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Account
   * @name AccountResetPasswordCreate
   * @request POST:/api/Account/ResetPassword
   * @secure
   */
  accountResetPasswordCreate = (data: ChangePasswordDto, params: RequestParams = {}) =>
    this.request<StringIResponse, any>({
      path: `/api/Account/ResetPassword`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Account
   * @name AccountLogoutCreate
   * @request POST:/api/Account/logout
   * @secure
   */
  accountLogoutCreate = (params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Account/logout`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Center
   * @name CenterGetResultsByFilterList
   * @request GET:/api/Center/GetResultsByFilter
   * @secure
   */
  centerGetResultsByFilterList = (
    query?: {
      TypeIds?: number[];
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<CenterDtoPagedResultDtoIResponse, any>({
      path: `/api/Center/GetResultsByFilter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Center
   * @name CenterCreateCreate
   * @request POST:/api/Center/Create
   * @secure
   */
  centerCreateCreate = (data: CreateCenterDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Center/Create`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Center
   * @name CenterUpdateCreate
   * @request POST:/api/Center/Update
   * @secure
   */
  centerUpdateCreate = (data: UpdateCenterDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Center/Update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Center
   * @name CenterUpdateOrderNumberCreate
   * @request POST:/api/Center/UpdateOrderNumber
   * @secure
   */
  centerUpdateOrderNumberCreate = (data: UpdateCenterOrderDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Center/UpdateOrderNumber`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Center
   * @name CenterDeleteCreate
   * @request POST:/api/Center/Delete
   * @secure
   */
  centerDeleteCreate = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Center/Delete`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Center
   * @name CenterGetCenterByLocationCreate
   * @request POST:/api/Center/GetCenterByLocation
   * @secure
   */
  centerGetCenterByLocationCreate = (data: LocationDto, params: RequestParams = {}) =>
    this.request<CenterDtoIResponse, any>({
      path: `/api/Center/GetCenterByLocation`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Center
   * @name CenterGetCenterByIdList
   * @request GET:/api/Center/GetCenterById
   * @secure
   */
  centerGetCenterByIdList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<CenterDtoIResponse, any>({
      path: `/api/Center/GetCenterById`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Center
   * @name CenterGetCentersCountList
   * @request GET:/api/Center/GetCentersCount
   * @secure
   */
  centerGetCentersCountList = (params: RequestParams = {}) =>
    this.request<CenterCountDTOListIResponse, any>({
      path: `/api/Center/GetCentersCount`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Center
   * @name CenterGetCenterRoadNeighborhoodNamesByLocationCreate
   * @request POST:/api/Center/GetCenterRoadNeighborhoodNamesByLocation
   * @secure
   */
  centerGetCenterRoadNeighborhoodNamesByLocationCreate = (data: LocationDto, params: RequestParams = {}) =>
    this.request<CenterRoadNeighborhoodNamesDtoIResponse, any>({
      path: `/api/Center/GetCenterRoadNeighborhoodNamesByLocation`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags DashBoard
   * @name DashBoardGetAllRepoCreate
   * @request POST:/api/DashBoard/GetAllRepo
   * @secure
   */
  dashBoardGetAllRepoCreate = (data: DashboardFilterDto, params: RequestParams = {}) =>
    this.request<DashBoardDtoIResponse, any>({
      path: `/api/DashBoard/GetAllRepo`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags DashBoard
   * @name DashBoardGetChartDataCreate
   * @request POST:/api/DashBoard/GetChartData
   * @secure
   */
  dashBoardGetChartDataCreate = (data: DashboardFilterDto, params: RequestParams = {}) =>
    this.request<DashBoardChartDtoListIResponse, any>({
      path: `/api/DashBoard/GetChartData`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags DecisionSupport
   * @name DecisionSupportGetResultsByFilterList
   * @request GET:/api/DecisionSupport/GetResultsByFilter
   * @secure
   */
  decisionSupportGetResultsByFilterList = (
    query?: {
      MainCategoryIds?: number[];
      SubCategoryIds?: number[];
      PriorityLevelIds?: number[];
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DecisionSupportDTOPagedResultDtoIResponse, any>({
      path: `/api/DecisionSupport/GetResultsByFilter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags DecisionSupport
   * @name DecisionSupportGetTotalsList
   * @request GET:/api/DecisionSupport/GetTotals
   * @secure
   */
  decisionSupportGetTotalsList = (
    query?: {
      MainCategoryIds?: number[];
      SubCategoryIds?: number[];
      PriorityLevelIds?: number[];
    },
    params: RequestParams = {},
  ) =>
    this.request<DecisionSupportTotalsDTOIResponse, any>({
      path: `/api/DecisionSupport/GetTotals`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Department
   * @name DepartmentGetResultsByFilterList
   * @request GET:/api/Department/GetResultsByFilter
   * @secure
   */
  departmentGetResultsByFilterList = (
    query?: {
      TypeIds?: number[];
      SubCategoryIds?: number[];
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DepartmentDtoPagedResultDtoIResponse, any>({
      path: `/api/Department/GetResultsByFilter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Department
   * @name DepartmentCreateCreate
   * @request POST:/api/Department/Create
   * @secure
   */
  departmentCreateCreate = (data: CreateDepartmentDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Department/Create`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Department
   * @name DepartmentGetDepartmentByIdList
   * @request GET:/api/Department/GetDepartmentById
   * @secure
   */
  departmentGetDepartmentByIdList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<DepartmentDtoIResponse, any>({
      path: `/api/Department/GetDepartmentById`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Department
   * @name DepartmentUpdateCreate
   * @request POST:/api/Department/Update
   * @secure
   */
  departmentUpdateCreate = (data: UpdateDepartmentDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Department/Update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Department
   * @name DepartmentDeleteCreate
   * @request POST:/api/Department/Delete
   * @secure
   */
  departmentDeleteCreate = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Department/Delete`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Department
   * @name DepartmentGetDepartmentForCenterBySubCategoryIdList
   * @request GET:/api/Department/GetDepartmentForCenterBySubCategoryId
   * @secure
   */
  departmentGetDepartmentForCenterBySubCategoryIdList = (
    query?: {
      /** @format int32 */
      subCategoryId?: number;
      /** @format int32 */
      centerId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<LookupDtoIResponse, any>({
      path: `/api/Department/GetDepartmentForCenterBySubCategoryId`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesUploadFilesCreate
   * @request POST:/api/Files/UploadFiles
   * @secure
   */
  filesUploadFilesCreate = (
    data: {
      Files?: File[];
      PageRoute?: string;
      /** @format int32 */
      PathEnum?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<FileUploadReturnDtoListIResponse, any>({
      path: `/api/Files/UploadFiles`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesUploadFileCreate
   * @request POST:/api/Files/UploadFile
   * @secure
   */
  filesUploadFileCreate = (
    data: {
      /** @format binary */
      file?: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<FileUploadReturnDtoIResponse, any>({
      path: `/api/Files/UploadFile`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesGetAllFilesList
   * @request GET:/api/Files/GetAllFiles
   * @secure
   */
  filesGetAllFilesList = (params: RequestParams = {}) =>
    this.request<FileUploadReturnDtoListIResponse, any>({
      path: `/api/Files/GetAllFiles`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesGetFileByFileIdDetail
   * @request GET:/api/Files/GetFileByFileId/{id}
   * @secure
   */
  filesGetFileByFileIdDetail = (id: number, params: RequestParams = {}) =>
    this.request<FileUploadReturnDtoListIResponse, any>({
      path: `/api/Files/GetFileByFileId/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesGetFilesByIncidentIdList
   * @request GET:/api/Files/GetFilesByIncidentId
   * @secure
   */
  filesGetFilesByIncidentIdList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<FileUploadReturnDtoListIResponse, any>({
      path: `/api/Files/GetFilesByIncidentId`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesGetFilesByFillIdList
   * @request GET:/api/Files/GetFilesByFillId
   * @secure
   */
  filesGetFilesByFillIdList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<FileUploadReturnDtoListIResponse, any>({
      path: `/api/Files/GetFilesByFillId`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesDeleteDelete
   * @request DELETE:/api/Files/Delete
   * @secure
   */
  filesDeleteDelete = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Files/Delete`,
      method: "DELETE",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesDeletePickedFileDelete
   * @request DELETE:/api/Files/DeletePickedFile
   * @secure
   */
  filesDeletePickedFileDelete = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Files/DeletePickedFile`,
      method: "DELETE",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesGetPickedFilesList
   * @request GET:/api/Files/GetPickedFiles
   * @secure
   */
  filesGetPickedFilesList = (
    query?: {
      route?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<FileUploadReturnDtoListIResponse, any>({
      path: `/api/Files/GetPickedFiles`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesUploadFileByUrlCreate
   * @request POST:/api/Files/UploadFileByUrl
   * @secure
   */
  filesUploadFileByUrlCreate = (data: UrlWithPageRouteDto, params: RequestParams = {}) =>
    this.request<FileUploadReturnDtoListIResponse, any>({
      path: `/api/Files/UploadFileByUrl`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ImprovementOpportunity
   * @name ImprovementOpportunityGetResultsByFilterList
   * @request GET:/api/ImprovementOpportunity/GetResultsByFilter
   * @secure
   */
  improvementOpportunityGetResultsByFilterList = (
    query?: {
      OpportunityStatusIds?: number[];
      OpportunityTypeIds?: number[];
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ImprovementOpportunityViewModelPagedResultDtoIResponse, any>({
      path: `/api/ImprovementOpportunity/GetResultsByFilter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ImprovementOpportunity
   * @name ImprovementOpportunityAddAsyncCreate
   * @request POST:/api/ImprovementOpportunity/AddAsync
   * @secure
   */
  improvementOpportunityAddAsyncCreate = (data: ImprovementOpportunityCreateDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/ImprovementOpportunity/AddAsync`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ImprovementOpportunity
   * @name ImprovementOpportunityGetByIdList
   * @request GET:/api/ImprovementOpportunity/GetById
   * @secure
   */
  improvementOpportunityGetByIdList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ImprovementOpportunityGetByIdDtoIResponse, any>({
      path: `/api/ImprovementOpportunity/GetById`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ImprovementOpportunity
   * @name ImprovementOpportunityUpdateAsyncCreate
   * @request POST:/api/ImprovementOpportunity/UpdateAsync
   * @secure
   */
  improvementOpportunityUpdateAsyncCreate = (data: ImprovementOpportunityUpdateDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/ImprovementOpportunity/UpdateAsync`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ImprovementOpportunity
   * @name ImprovementOpportunityDeleteCreate
   * @request POST:/api/ImprovementOpportunity/Delete
   * @secure
   */
  improvementOpportunityDeleteCreate = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/ImprovementOpportunity/Delete`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ImprovementOpportunity
   * @name ImprovementOpportunitySaveGeographicalScopeAsyncCreate
   * @request POST:/api/ImprovementOpportunity/SaveGeographicalScopeAsync
   * @secure
   */
  improvementOpportunitySaveGeographicalScopeAsyncCreate = (
    data: ImprovementOpportunityGeographicalScope,
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/ImprovementOpportunity/SaveGeographicalScopeAsync`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ImprovementOpportunity
   * @name ImprovementOpportunityGetGeographicalScopeList
   * @request GET:/api/ImprovementOpportunity/getGeographicalScope
   * @secure
   */
  improvementOpportunityGetGeographicalScopeList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<StringIResponse, any>({
      path: `/api/ImprovementOpportunity/getGeographicalScope`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ImprovementOpportunity
   * @name ImprovementOpportunityGetAllGeographicalScopeList
   * @request GET:/api/ImprovementOpportunity/getAllGeographicalScope
   * @secure
   */
  improvementOpportunityGetAllGeographicalScopeList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ImprovementOpportunityGeographicalScopeGetAllDtoIListIResponse, any>({
      path: `/api/ImprovementOpportunity/getAllGeographicalScope`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ImprovementSuggestion
   * @name ImprovementSuggestionGetResultsByFilterList
   * @request GET:/api/ImprovementSuggestion/GetResultsByFilter
   * @secure
   */
  improvementSuggestionGetResultsByFilterList = (
    query?: {
      SuggestionStatusIds?: number[];
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ImprovementSuggestionViewModelPagedResultDtoIResponse, any>({
      path: `/api/ImprovementSuggestion/GetResultsByFilter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ImprovementSuggestion
   * @name ImprovementSuggestionAddAsyncCreate
   * @request POST:/api/ImprovementSuggestion/AddAsync
   * @secure
   */
  improvementSuggestionAddAsyncCreate = (data: ImprovementSuggestionCreateDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/ImprovementSuggestion/AddAsync`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ImprovementSuggestion
   * @name ImprovementSuggestionGetByIdList
   * @request GET:/api/ImprovementSuggestion/GetById
   * @secure
   */
  improvementSuggestionGetByIdList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ImprovementSuggestionGetByIdModelIResponse, any>({
      path: `/api/ImprovementSuggestion/GetById`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ImprovementSuggestion
   * @name ImprovementSuggestionUpdateAsyncCreate
   * @request POST:/api/ImprovementSuggestion/UpdateAsync
   * @secure
   */
  improvementSuggestionUpdateAsyncCreate = (data: ImprovementSuggestionUpdateDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/ImprovementSuggestion/UpdateAsync`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ImprovementSuggestion
   * @name ImprovementSuggestionDeleteCreate
   * @request POST:/api/ImprovementSuggestion/Delete
   * @secure
   */
  improvementSuggestionDeleteCreate = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/ImprovementSuggestion/Delete`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ImprovementSuggestion
   * @name ImprovementSuggestionChangeStatusOfSuggestionCreate
   * @request POST:/api/ImprovementSuggestion/ChangeStatusOfSuggestion
   * @secure
   */
  improvementSuggestionChangeStatusOfSuggestionCreate = (
    query?: {
      /** @format int32 */
      id?: number;
      /** @format int32 */
      status?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/ImprovementSuggestion/ChangeStatusOfSuggestion`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentGetResultsByFilterList
   * @request GET:/api/Incident/GetResultsByFilter
   * @secure
   */
  incidentGetResultsByFilterList = (
    query?: {
      /** @format date-time */
      AssignDateFrom?: string;
      /** @format date-time */
      AssignDateTo?: string;
      /** @format date-time */
      CreateDateFrom?: string;
      /** @format date-time */
      CreateDateTo?: string;
      Centers?: number[];
      Departments?: number[];
      CreatedByUserIds?: number[];
      AssignedToUserIds?: number[];
      SubCategoryIds?: number[];
      /** @format int32 */
      MainCategoryId?: number;
      /** @format int32 */
      SupervisorId?: number;
      IncidentStatusTypeIds?: number[];
      MobadaraIds?: number[];
      PrioretyLevelIds?: number[];
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<IncidentDtoPagedListPagedResultDtoIResponse, any>({
      path: `/api/Incident/GetResultsByFilter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentGetIncidentsLocationList
   * @request GET:/api/Incident/GetIncidentsLocation
   * @secure
   */
  incidentGetIncidentsLocationList = (
    query?: {
      CenterIds?: number[];
      RoadIds?: number[];
      NeighborhoodIds?: number[];
      SubCategoryIds?: number[];
      /** @format date-time */
      StartDate?: string;
      /** @format date-time */
      EndDate?: string;
      RegionIds?: number[];
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<IncidentLocationDTOPagedResultDtoIResponse, any>({
      path: `/api/Incident/GetIncidentsLocation`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentGetIncidentByIdList
   * @request GET:/api/Incident/GetIncidentById
   * @secure
   */
  incidentGetIncidentByIdList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<IncidentDtoIResponse, any>({
      path: `/api/Incident/GetIncidentById`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentGetIncidentByDistanceCreate
   * @request POST:/api/Incident/GetIncidentByDistance
   * @secure
   */
  incidentGetIncidentByDistanceCreate = (data: LocationModel, params: RequestParams = {}) =>
    this.request<IncidentDtoPagedListListIResponse, any>({
      path: `/api/Incident/GetIncidentByDistance`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentAssignRoadCreate
   * @request POST:/api/Incident/AssignRoad
   * @secure
   */
  incidentAssignRoadCreate = (params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Incident/AssignRoad`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentCreateCreate
   * @request POST:/api/Incident/Create
   * @secure
   */
  incidentCreateCreate = (data: CreateIncidentDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Incident/Create`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentUpdateCreate
   * @request POST:/api/Incident/Update
   * @secure
   */
  incidentUpdateCreate = (data: UpdateIncidentDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Incident/Update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentDeleteList
   * @request GET:/api/Incident/Delete
   * @secure
   */
  incidentDeleteList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Incident/Delete`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentReviewIncidentList
   * @request GET:/api/Incident/ReviewIncident
   * @secure
   */
  incidentReviewIncidentList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Incident/ReviewIncident`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentCancelIncidentList
   * @request GET:/api/Incident/CancelIncident
   * @secure
   */
  incidentCancelIncidentList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Incident/CancelIncident`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentSolveEscalationCreate
   * @request POST:/api/Incident/SolveEscalation
   * @secure
   */
  incidentSolveEscalationCreate = (data: SolveEscalationDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Incident/SolveEscalation`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentAssignIncidentList
   * @request GET:/api/Incident/AssignIncident
   * @secure
   */
  incidentAssignIncidentList = (
    query?: {
      /** @format int32 */
      incidentId?: number;
      /** @format int32 */
      AssignToUserId?: number;
      Notes?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Incident/AssignIncident`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentSolvedInitiallyIncidentCreate
   * @request POST:/api/Incident/SolvedInitiallyIncident
   * @secure
   */
  incidentSolvedInitiallyIncidentCreate = (data: UpdateIncidentStatusDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Incident/SolvedInitiallyIncident`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentRejectSolvedInitiallyIncidentCreate
   * @request POST:/api/Incident/RejectSolvedInitiallyIncident
   * @secure
   */
  incidentRejectSolvedInitiallyIncidentCreate = (data: UpdateIncidentStatusDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Incident/RejectSolvedInitiallyIncident`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentSolveIncidentList
   * @request GET:/api/Incident/SolveIncident
   * @secure
   */
  incidentSolveIncidentList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Incident/SolveIncident`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentRejectReviewIncidentCreate
   * @request POST:/api/Incident/RejectReviewIncident
   * @secure
   */
  incidentRejectReviewIncidentCreate = (data: RejectReviewIncidentDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Incident/RejectReviewIncident`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentGetIncidenthistoryByIdList
   * @request GET:/api/Incident/GetIncidenthistoryById
   * @secure
   */
  incidentGetIncidenthistoryByIdList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<IncidenthistoryDtoListIResponse, any>({
      path: `/api/Incident/GetIncidenthistoryById`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentRejectAssignIncidentList
   * @request GET:/api/Incident/RejectAssignIncident
   * @secure
   */
  incidentRejectAssignIncidentList = (
    query?: {
      /** @format int32 */
      incidentId?: number;
      Notes?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Incident/RejectAssignIncident`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentGetProcessorNameList
   * @request GET:/api/Incident/GetProcessorName
   * @secure
   */
  incidentGetProcessorNameList = (
    query?: {
      /** @format int32 */
      centerId?: number;
      /** @format int32 */
      subCategoryId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProcessorNameDtoIResponse, any>({
      path: `/api/Incident/GetProcessorName`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentAssignToRegionCreate
   * @request POST:/api/Incident/AssignToRegion
   * @secure
   */
  incidentAssignToRegionCreate = (params: RequestParams = {}) =>
    this.request<IncidentLocationDTOListIResponse, any>({
      path: `/api/Incident/AssignToRegion`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentArchiveList
   * @request GET:/api/Incident/Archive
   * @secure
   */
  incidentArchiveList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Incident/Archive`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Incident
   * @name IncidentGetArchivedList
   * @request GET:/api/Incident/GetArchived
   * @secure
   */
  incidentGetArchivedList = (
    query?: {
      /** @format date-time */
      AssignDateFrom?: string;
      /** @format date-time */
      AssignDateTo?: string;
      /** @format date-time */
      CreateDateFrom?: string;
      /** @format date-time */
      CreateDateTo?: string;
      Centers?: number[];
      Departments?: number[];
      CreatedByUserIds?: number[];
      AssignedToUserIds?: number[];
      SubCategoryIds?: number[];
      /** @format int32 */
      MainCategoryId?: number;
      /** @format int32 */
      SupervisorId?: number;
      IncidentStatusTypeIds?: number[];
      MobadaraIds?: number[];
      PrioretyLevelIds?: number[];
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<IncidentDtoPagedListPagedResultDtoIResponse, any>({
      path: `/api/Incident/GetArchived`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags IncidentPhotoScanning
   * @name IncidentPhotoScanningGetIncidentsPhotoScanningLocationList
   * @request GET:/api/IncidentPhotoScanning/GetIncidentsPhotoScanningLocation
   * @secure
   */
  incidentPhotoScanningGetIncidentsPhotoScanningLocationList = (
    query?: {
      /** @format int32 */
      PhotoScanningId?: number;
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<IncidentPhotoScanningLocationDtoPagedResultDtoIResponse, any>({
      path: `/api/IncidentPhotoScanning/GetIncidentsPhotoScanningLocation`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags IncidentPhotoScanning
   * @name IncidentPhotoScanningGetByIdList
   * @request GET:/api/IncidentPhotoScanning/GetById
   * @secure
   */
  incidentPhotoScanningGetByIdList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<IncidentPhotoScanningDtoIResponse, any>({
      path: `/api/IncidentPhotoScanning/GetById`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags IncidentPhotoScanning
   * @name IncidentPhotoScanningGetByIndexList
   * @request GET:/api/IncidentPhotoScanning/GetByIndex
   * @secure
   */
  incidentPhotoScanningGetByIndexList = (
    query?: {
      /** @format int32 */
      id?: number;
      isNext?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<IncidentPhotoScanningDtoIResponse, any>({
      path: `/api/IncidentPhotoScanning/GetByIndex`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags IncidentPhotoScanning
   * @name IncidentPhotoScanningRejectCreate
   * @request POST:/api/IncidentPhotoScanning/Reject
   * @secure
   */
  incidentPhotoScanningRejectCreate = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/IncidentPhotoScanning/Reject`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetAllCentersList
   * @request GET:/api/LookUp/GetAllCenters
   * @secure
   */
  lookUpGetAllCentersList = (params: RequestParams = {}) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetAllCenters`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetAllDepartmentsList
   * @request GET:/api/LookUp/GetAllDepartments
   * @secure
   */
  lookUpGetAllDepartmentsList = (params: RequestParams = {}) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetAllDepartments`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetAllDepartmentTypesList
   * @request GET:/api/LookUp/GetAllDepartmentTypes
   * @secure
   */
  lookUpGetAllDepartmentTypesList = (params: RequestParams = {}) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetAllDepartmentTypes`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetAllUserTypesList
   * @request GET:/api/LookUp/GetAllUserTypes
   * @secure
   */
  lookUpGetAllUserTypesList = (params: RequestParams = {}) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetAllUserTypes`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetAllMainCatList
   * @request GET:/api/LookUp/GetAllMainCat
   * @secure
   */
  lookUpGetAllMainCatList = (params: RequestParams = {}) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetAllMainCat`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetAllSubCatList
   * @request GET:/api/LookUp/GetAllSubCat
   * @secure
   */
  lookUpGetAllSubCatList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<SubCatTypeDtoListIResponse, any>({
      path: `/api/LookUp/GetAllSubCat`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetIncidentStatusTypesList
   * @request GET:/api/LookUp/GetIncidentStatusTypes
   * @secure
   */
  lookUpGetIncidentStatusTypesList = (params: RequestParams = {}) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetIncidentStatusTypes`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetPrioretyLevelList
   * @request GET:/api/LookUp/GetPrioretyLevel
   * @secure
   */
  lookUpGetPrioretyLevelList = (params: RequestParams = {}) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetPrioretyLevel`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetCenterTypeList
   * @request GET:/api/LookUp/GetCenterType
   * @secure
   */
  lookUpGetCenterTypeList = (params: RequestParams = {}) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetCenterType`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetquantityTypeList
   * @request GET:/api/LookUp/GetquantityType
   * @secure
   */
  lookUpGetquantityTypeList = (params: RequestParams = {}) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetquantityType`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetNeighborhoodByCenterIdList
   * @request GET:/api/LookUp/GetNeighborhoodByCenterId
   * @secure
   */
  lookUpGetNeighborhoodByCenterIdList = (
    query?: {
      /** @format int32 */
      CenterId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetNeighborhoodByCenterId`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetUsersByUserTypeList
   * @request GET:/api/LookUp/GetUsersByUserType
   * @secure
   */
  lookUpGetUsersByUserTypeList = (
    query?: {
      /** @format int32 */
      UserTypeId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetUsersByUserType`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetMeqwelsList
   * @request GET:/api/LookUp/GetMeqwels
   * @secure
   */
  lookUpGetMeqwelsList = (params: RequestParams = {}) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetMeqwels`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetMeqwelsByIncidentIdList
   * @request GET:/api/LookUp/GetMeqwelsByIncidentId
   * @secure
   */
  lookUpGetMeqwelsByIncidentIdList = (
    query?: {
      /** @format int32 */
      incidentId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetMeqwelsByIncidentId`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetCreatedByUsersList
   * @request GET:/api/LookUp/GetCreatedByUsers
   * @secure
   */
  lookUpGetCreatedByUsersList = (params: RequestParams = {}) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetCreatedByUsers`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetAllMobadarateList
   * @request GET:/api/LookUp/GetAllMobadarate
   * @secure
   */
  lookUpGetAllMobadarateList = (params: RequestParams = {}) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetAllMobadarate`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetSubCategoryInfoBySmartCodeList
   * @request GET:/api/LookUp/GetSubCategoryInfoBySmartCode
   * @secure
   */
  lookUpGetSubCategoryInfoBySmartCodeList = (
    query?: {
      code?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<CategoryAndSubCategoryDtoIResponse, any>({
      path: `/api/LookUp/GetSubCategoryInfoBySmartCode`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetSmartIncidentCategoryList
   * @request GET:/api/LookUp/GetSmartIncidentCategory
   * @secure
   */
  lookUpGetSmartIncidentCategoryList = (params: RequestParams = {}) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetSmartIncidentCategory`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetAllImprovementOpportunityTypeList
   * @request GET:/api/LookUp/GetAllImprovementOpportunityType
   * @secure
   */
  lookUpGetAllImprovementOpportunityTypeList = (params: RequestParams = {}) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetAllImprovementOpportunityType`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetAllImprovementOpportunityStatusList
   * @request GET:/api/LookUp/GetAllImprovementOpportunityStatus
   * @secure
   */
  lookUpGetAllImprovementOpportunityStatusList = (params: RequestParams = {}) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetAllImprovementOpportunityStatus`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetAllPointList
   * @request GET:/api/LookUp/GetAllPoint
   * @secure
   */
  lookUpGetAllPointList = (params: RequestParams = {}) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetAllPoint`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetRoadByCenterIdList
   * @request GET:/api/LookUp/GetRoadByCenterId
   * @secure
   */
  lookUpGetRoadByCenterIdList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetRoadByCenterId`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags LookUp
   * @name LookUpGetAllImprovementSuggestionsStatusList
   * @request GET:/api/LookUp/GetAllImprovementSuggestionsStatus
   * @secure
   */
  lookUpGetAllImprovementSuggestionsStatusList = (params: RequestParams = {}) =>
    this.request<LockUpDtoListIResponse, any>({
      path: `/api/LookUp/GetAllImprovementSuggestionsStatus`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MainCategory
   * @name MainCategoryGetResultsByFilterList
   * @request GET:/api/MainCategory/GetResultsByFilter
   * @secure
   */
  mainCategoryGetResultsByFilterList = (
    query?: {
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<MainCategoryDtoPagedResultDtoIResponse, any>({
      path: `/api/MainCategory/GetResultsByFilter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MainCategory
   * @name MainCategoryGetMainCategorySummaryList
   * @request GET:/api/MainCategory/GetMainCategorySummary
   * @secure
   */
  mainCategoryGetMainCategorySummaryList = (
    query?: {
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<MainCategorySummaryDtoPagedResultDtoIResponse, any>({
      path: `/api/MainCategory/GetMainCategorySummary`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MainCategory
   * @name MainCategoryGetMainCategorySubsList
   * @request GET:/api/MainCategory/GetMainCategorySubs
   * @secure
   */
  mainCategoryGetMainCategorySubsList = (params: RequestParams = {}) =>
    this.request<MainCategorySubsDtoListIResponse, any>({
      path: `/api/MainCategory/GetMainCategorySubs`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MainCategory
   * @name MainCategoryCreateCreate
   * @request POST:/api/MainCategory/Create
   * @secure
   */
  mainCategoryCreateCreate = (data: CreateMainCategoryDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/MainCategory/Create`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MainCategory
   * @name MainCategoryUpdateCreate
   * @request POST:/api/MainCategory/Update
   * @secure
   */
  mainCategoryUpdateCreate = (data: UpdateMainCategoryDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/MainCategory/Update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MainCategory
   * @name MainCategoryDeleteList
   * @request GET:/api/MainCategory/Delete
   * @secure
   */
  mainCategoryDeleteList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/MainCategory/Delete`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Mobadara
   * @name MobadaraGetResultsByFilterList
   * @request GET:/api/Mobadara/GetResultsByFilter
   * @secure
   */
  mobadaraGetResultsByFilterList = (
    query?: {
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<MobadaraDtoPagedResultDtoIResponse, any>({
      path: `/api/Mobadara/GetResultsByFilter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Mobadara
   * @name MobadaraCreateCreate
   * @request POST:/api/Mobadara/Create
   * @secure
   */
  mobadaraCreateCreate = (data: CreateMobadaraDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Mobadara/Create`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Mobadara
   * @name MobadaraUpdateCreate
   * @request POST:/api/Mobadara/Update
   * @secure
   */
  mobadaraUpdateCreate = (data: UpdateMobadaraDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Mobadara/Update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Mobadara
   * @name MobadaraGetByIdList
   * @request GET:/api/Mobadara/GetById
   * @secure
   */
  mobadaraGetByIdList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<MobadaraByIdDtoIResponse, any>({
      path: `/api/Mobadara/GetById`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Mobadara
   * @name MobadaraDeleteList
   * @request GET:/api/Mobadara/Delete
   * @secure
   */
  mobadaraDeleteList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Mobadara/Delete`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Neighborhood
   * @name NeighborhoodGetResultsByFilterList
   * @request GET:/api/Neighborhood/GetResultsByFilter
   * @secure
   */
  neighborhoodGetResultsByFilterList = (
    query?: {
      CenterIds?: number[];
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<NeighborhoodDtoPagedResultDtoIResponse, any>({
      path: `/api/Neighborhood/GetResultsByFilter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Neighborhood
   * @name NeighborhoodCreateCreate
   * @request POST:/api/Neighborhood/Create
   * @secure
   */
  neighborhoodCreateCreate = (data: CreateNeighborhoodDto, params: RequestParams = {}) =>
    this.request<NeighborhoodDtoIResponse, any>({
      path: `/api/Neighborhood/Create`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Neighborhood
   * @name NeighborhoodUpdateCreate
   * @request POST:/api/Neighborhood/Update
   * @secure
   */
  neighborhoodUpdateCreate = (data: UpdateNeighborhoodDto, params: RequestParams = {}) =>
    this.request<NeighborhoodDtoIResponse, any>({
      path: `/api/Neighborhood/Update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Neighborhood
   * @name NeighborhoodDeleteCreate
   * @request POST:/api/Neighborhood/Delete
   * @secure
   */
  neighborhoodDeleteCreate = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Neighborhood/Delete`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Neighborhood
   * @name NeighborhoodGetByIdList
   * @request GET:/api/Neighborhood/GetByID
   * @secure
   */
  neighborhoodGetByIdList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<NeighborhoodDtoIResponse, any>({
      path: `/api/Neighborhood/GetByID`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notification
   * @name NotificationGetResultsByFilterList
   * @request GET:/api/Notification/GetResultsByFilter
   * @secure
   */
  notificationGetResultsByFilterList = (
    query?: {
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<NotificationDtoPagedResultDtoIResponse, any>({
      path: `/api/Notification/GetResultsByFilter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notification
   * @name NotificationGetUnReadedNotificationCountList
   * @request GET:/api/Notification/GetUnReadedNotificationCount
   * @secure
   */
  notificationGetUnReadedNotificationCountList = (params: RequestParams = {}) =>
    this.request<Int32IResponse, any>({
      path: `/api/Notification/GetUnReadedNotificationCount`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notification
   * @name NotificationReadListList
   * @request GET:/api/Notification/ReadList
   * @secure
   */
  notificationReadListList = (params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Notification/ReadList`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notification
   * @name NotificationReadList
   * @request GET:/api/Notification/Read
   * @secure
   */
  notificationReadList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Notification/Read`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags OverdueSettings
   * @name OverdueSettingsGetResultsByFilterList
   * @request GET:/api/OverdueSettings/GetResultsByFilter
   * @secure
   */
  overdueSettingsGetResultsByFilterList = (
    query?: {
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<OverdueSettingsDtoPagedResultDtoIResponse, any>({
      path: `/api/OverdueSettings/GetResultsByFilter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags OverdueSettings
   * @name OverdueSettingsGetByIdList
   * @request GET:/api/OverdueSettings/GetById
   * @secure
   */
  overdueSettingsGetByIdList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<OverdueSettingsDtoIResponse, any>({
      path: `/api/OverdueSettings/GetById`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags OverdueSettings
   * @name OverdueSettingsCreateCreate
   * @request POST:/api/OverdueSettings/Create
   * @secure
   */
  overdueSettingsCreateCreate = (data: CreateOverdueSettingsDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/OverdueSettings/Create`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags OverdueSettings
   * @name OverdueSettingsUpdateCreate
   * @request POST:/api/OverdueSettings/Update
   * @secure
   */
  overdueSettingsUpdateCreate = (data: UpdateOverdueSettingsDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/OverdueSettings/Update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags OverdueSettings
   * @name OverdueSettingsDeleteCreate
   * @request POST:/api/OverdueSettings/Delete
   * @secure
   */
  overdueSettingsDeleteCreate = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/OverdueSettings/Delete`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PhotoScanning
   * @name PhotoScanningGetResultsByFilterList
   * @request GET:/api/PhotoScanning/GetResultsByFilter
   * @secure
   */
  photoScanningGetResultsByFilterList = (
    query?: {
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PhotoScanningDtoPagedResultDtoIResponse, any>({
      path: `/api/PhotoScanning/GetResultsByFilter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PhotoScanning
   * @name PhotoScanningCreateCreate
   * @request POST:/api/PhotoScanning/Create
   * @secure
   */
  photoScanningCreateCreate = (
    data: {
      /** @format binary */
      file?: File;
      Name?: string;
      /** @format date-time */
      ReportTime?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/PhotoScanning/Create`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PhotoScanning
   * @name PhotoScanningUpdateCreate
   * @request POST:/api/PhotoScanning/Update
   * @secure
   */
  photoScanningUpdateCreate = (data: UpdatePhotoScanningDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/PhotoScanning/Update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PhotoScanning
   * @name PhotoScanningDeleteCreate
   * @request POST:/api/PhotoScanning/Delete
   * @secure
   */
  photoScanningDeleteCreate = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/PhotoScanning/Delete`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PrioretyLevel
   * @name PrioretyLevelGetResultsByFilterList
   * @request GET:/api/PrioretyLevel/GetResultsByFilter
   * @secure
   */
  prioretyLevelGetResultsByFilterList = (
    query?: {
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PrioretyLevelDtoPagedResultDtoIResponse, any>({
      path: `/api/PrioretyLevel/GetResultsByFilter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PrioretyLevel
   * @name PrioretyLevelCreateCreate
   * @request POST:/api/PrioretyLevel/Create
   * @secure
   */
  prioretyLevelCreateCreate = (data: CreatePrioretyLevelDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/PrioretyLevel/Create`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PrioretyLevel
   * @name PrioretyLevelUpdateCreate
   * @request POST:/api/PrioretyLevel/Update
   * @secure
   */
  prioretyLevelUpdateCreate = (data: UpdatePrioretyLevelDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/PrioretyLevel/Update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PrioretyLevel
   * @name PrioretyLevelDeleteList
   * @request GET:/api/PrioretyLevel/Delete
   * @secure
   */
  prioretyLevelDeleteList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/PrioretyLevel/Delete`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PrioretyLevel
   * @name PrioretyLevelGetPrioretyLevelByIdList
   * @request GET:/api/PrioretyLevel/GetPrioretyLevelById
   * @secure
   */
  prioretyLevelGetPrioretyLevelByIdList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PrioretyLevelDtoIResponse, any>({
      path: `/api/PrioretyLevel/GetPrioretyLevelById`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Report
   * @name ReportGetIncidentReport2List
   * @request GET:/api/Report/GetIncidentReport2
   * @secure
   */
  reportGetIncidentReport2List = (
    query?: {
      /** @format date-time */
      AssignDateFrom?: string;
      /** @format date-time */
      AssignDateTo?: string;
      /** @format date-time */
      CreateDateFrom?: string;
      /** @format date-time */
      CreateDateTo?: string;
      Centers?: number[];
      Departments?: number[];
      CreatedByUserIds?: number[];
      AssignedToUserIds?: number[];
      SubCategoryIds?: number[];
      /** @format int32 */
      MainCategoryId?: number;
      /** @format int32 */
      SupervisorId?: number;
      IncidentStatusTypeIds?: number[];
      MobadaraIds?: number[];
      PrioretyLevelIds?: number[];
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
      /**
       * @format int32
       * @default 4
       */
      renderType?: number;
      /** @default false */
      download?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanListIResponse, any>({
      path: `/api/Report/GetIncidentReport2`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Report
   * @name ReportGetUserReportList
   * @request GET:/api/Report/GetUserReport
   * @secure
   */
  reportGetUserReportList = (
    query?: {
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
      /**
       * @format int32
       * @default 4
       */
      renderType?: number;
      /** @default false */
      download?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanListIResponse, any>({
      path: `/api/Report/GetUserReport`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Report
   * @name ReportDecisionSupportReporsList
   * @request GET:/api/Report/DecisionSupportRepors
   * @secure
   */
  reportDecisionSupportReporsList = (
    query?: {
      MainCategoryIds?: number[];
      SubCategoryIds?: number[];
      PriorityLevelIds?: number[];
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
      /**
       * @format int32
       * @default 4
       */
      renderType?: number;
      /** @default false */
      download?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanListIResponse, any>({
      path: `/api/Report/DecisionSupportRepors`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Report
   * @name ReportGetIncidentReportList
   * @request GET:/api/Report/GetIncidentReport
   * @secure
   */
  reportGetIncidentReportList = (
    query?: {
      /** @format date-time */
      AssignDateFrom?: string;
      /** @format date-time */
      AssignDateTo?: string;
      /** @format date-time */
      CreateDateFrom?: string;
      /** @format date-time */
      CreateDateTo?: string;
      Centers?: number[];
      Departments?: number[];
      CreatedByUserIds?: number[];
      AssignedToUserIds?: number[];
      SubCategoryIds?: number[];
      /** @format int32 */
      MainCategoryId?: number;
      /** @format int32 */
      SupervisorId?: number;
      IncidentStatusTypeIds?: number[];
      MobadaraIds?: number[];
      PrioretyLevelIds?: number[];
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
      /**
       * @format int32
       * @default 4
       */
      renderType?: number;
      /** @default false */
      download?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanListIResponse, any>({
      path: `/api/Report/GetIncidentReport`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Report
   * @name ReportGetIncidentCostReportList
   * @request GET:/api/Report/GetIncidentCostReport
   * @secure
   */
  reportGetIncidentCostReportList = (
    query?: {
      Centers?: number[];
      /** @format int32 */
      SubCatId?: number;
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
      /**
       * @format int32
       * @default 4
       */
      renderType?: number;
      /** @default false */
      download?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanListIResponse, any>({
      path: `/api/Report/GetIncidentCostReport`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Road
   * @name RoadGetResultsByFilterList
   * @request GET:/api/Road/GetResultsByFilter
   * @secure
   */
  roadGetResultsByFilterList = (
    query?: {
      CenterIds?: number[];
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<RoadDtoPagedResultDtoIResponse, any>({
      path: `/api/Road/GetResultsByFilter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Road
   * @name RoadCreateCreate
   * @request POST:/api/Road/Create
   * @secure
   */
  roadCreateCreate = (data: CreateRoadDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Road/Create`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Road
   * @name RoadUpdateCreate
   * @request POST:/api/Road/Update
   * @secure
   */
  roadUpdateCreate = (data: UpdateRoadDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Road/Update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Road
   * @name RoadDeleteCreate
   * @request POST:/api/Road/Delete
   * @secure
   */
  roadDeleteCreate = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/Road/Delete`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags StatisticalAnalysis
   * @name StatisticalAnalysisGetMainCategoryIncidentsCountList
   * @request GET:/api/StatisticalAnalysis/GetMainCategoryIncidentsCount
   * @secure
   */
  statisticalAnalysisGetMainCategoryIncidentsCountList = (
    query?: {
      /** @format int32 */
      centerId?: number;
      /** @format int32 */
      roadId?: number;
      /** @format int32 */
      neighborhoodId?: number;
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GroupedIncidentsCountDtoListIResponse, any>({
      path: `/api/StatisticalAnalysis/GetMainCategoryIncidentsCount`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags StatisticalAnalysis
   * @name StatisticalAnalysisGetSubCategoryIncidentsCountList
   * @request GET:/api/StatisticalAnalysis/GetSubCategoryIncidentsCount
   * @secure
   */
  statisticalAnalysisGetSubCategoryIncidentsCountList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GroupedIncidentsCountDtoListIResponse, any>({
      path: `/api/StatisticalAnalysis/GetSubCategoryIncidentsCount`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags StatisticalAnalysis
   * @name StatisticalAnalysisGetCenterIncidentsCountList
   * @request GET:/api/StatisticalAnalysis/GetCenterIncidentsCount
   * @secure
   */
  statisticalAnalysisGetCenterIncidentsCountList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GroupedIncidentsCountDtoListIResponse, any>({
      path: `/api/StatisticalAnalysis/GetCenterIncidentsCount`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags StatisticalAnalysis
   * @name StatisticalAnalysisGetRoadIncidentsCountList
   * @request GET:/api/StatisticalAnalysis/GetRoadIncidentsCount
   * @secure
   */
  statisticalAnalysisGetRoadIncidentsCountList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GroupedIncidentsCountDtoListIResponse, any>({
      path: `/api/StatisticalAnalysis/GetRoadIncidentsCount`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags StatisticalAnalysis
   * @name StatisticalAnalysisGetNeighborhoodIncidentsCountList
   * @request GET:/api/StatisticalAnalysis/GetNeighborhoodIncidentsCount
   * @secure
   */
  statisticalAnalysisGetNeighborhoodIncidentsCountList = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GroupedIncidentsCountDtoListIResponse, any>({
      path: `/api/StatisticalAnalysis/GetNeighborhoodIncidentsCount`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags StatisticalAnalysis
   * @name StatisticalAnalysisGetMonthsIncidentsCountList
   * @request GET:/api/StatisticalAnalysis/GetMonthsIncidentsCount
   * @secure
   */
  statisticalAnalysisGetMonthsIncidentsCountList = (
    query?: {
      /** @format int32 */
      sourceOfIncident?: number;
      /** @format int32 */
      year?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<GroupedIncidentsCountInMonthsDtoListIResponse, any>({
      path: `/api/StatisticalAnalysis/GetMonthsIncidentsCount`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SubCategory
   * @name SubCategoryGetResultsByFilterList
   * @request GET:/api/SubCategory/GetResultsByFilter
   * @secure
   */
  subCategoryGetResultsByFilterList = (
    query?: {
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<SubCategoryDtoPagedResultDtoIResponse, any>({
      path: `/api/SubCategory/GetResultsByFilter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SubCategory
   * @name SubCategoryGetSubCategorySummaryByMainCatIdList
   * @request GET:/api/SubCategory/GetSubCategorySummaryByMainCatId
   * @secure
   */
  subCategoryGetSubCategorySummaryByMainCatIdList = (
    query?: {
      /** @format int32 */
      MainCategoryId?: number;
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<SubCategorySummaryDtoPagedResultDtoIResponse, any>({
      path: `/api/SubCategory/GetSubCategorySummaryByMainCatId`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SubCategory
   * @name SubCategoryCreateCreate
   * @request POST:/api/SubCategory/Create
   * @secure
   */
  subCategoryCreateCreate = (
    data: {
      Name?: string;
      AiCode?: string;
      SmartCode?: string;
      /** @format int32 */
      MainCategoryId?: number;
      /** @format int32 */
      QuantityTypeId?: number;
      /** @format double */
      ExpectedUnitCost?: number;
      /** @format binary */
      File?: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/SubCategory/Create`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SubCategory
   * @name SubCategoryUpdateCreate
   * @request POST:/api/SubCategory/Update
   * @secure
   */
  subCategoryUpdateCreate = (
    data: {
      /** @format int32 */
      Id?: number;
      Name?: string;
      AiCode?: string;
      SmartCode?: string;
      /** @format int32 */
      MainCategoryId?: number;
      /** @format int32 */
      QuantityTypeId?: number;
      /** @format double */
      ExpectedUnitCost?: number;
      /** @format binary */
      File?: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/SubCategory/Update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SubCategory
   * @name SubCategoryGetSubCategoryByIdList
   * @request GET:/api/SubCategory/GetSubCategoryById
   * @secure
   */
  subCategoryGetSubCategoryByIdList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<SubCategorySummaryDtoPagedResultDtoIResponse, any>({
      path: `/api/SubCategory/GetSubCategoryById`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SubCategory
   * @name SubCategoryDeleteList
   * @request GET:/api/SubCategory/Delete
   * @secure
   */
  subCategoryDeleteList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/SubCategory/Delete`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SubCategory
   * @name SubCategoryUpdateOrderNumberCreate
   * @request POST:/api/SubCategory/UpdateOrderNumber
   * @secure
   */
  subCategoryUpdateOrderNumberCreate = (data: UpdateSubCategoryOrderDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/SubCategory/UpdateOrderNumber`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SubCategory
   * @name SubCategoryGetSubCategorysCountList
   * @request GET:/api/SubCategory/GetSubCategorysCount
   * @secure
   */
  subCategoryGetSubCategorysCountList = (params: RequestParams = {}) =>
    this.request<SubCategoryCountDTOListIResponse, any>({
      path: `/api/SubCategory/GetSubCategorysCount`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags TempIncident
   * @name TempIncidentGetResultsByFilterList
   * @request GET:/api/TempIncident/GetResultsByFilter
   * @secure
   */
  tempIncidentGetResultsByFilterList = (
    query?: {
      CategoriesNames?: string[];
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TempIncidentsDTOPagedResultDtoIResponse, any>({
      path: `/api/TempIncident/GetResultsByFilter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags TempIncident
   * @name TempIncidentGetTempIncidentsLocationList
   * @request GET:/api/TempIncident/GetTempIncidentsLocation
   * @secure
   */
  tempIncidentGetTempIncidentsLocationList = (
    query?: {
      CategoriesNames?: string[];
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<IncidentLocationDTOPagedResultDtoIResponse, any>({
      path: `/api/TempIncident/GetTempIncidentsLocation`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags TempIncident
   * @name TempIncidentGetIncidentByIdList
   * @request GET:/api/TempIncident/GetIncidentById
   * @secure
   */
  tempIncidentGetIncidentByIdList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TempIncidentDTOIResponse, any>({
      path: `/api/TempIncident/GetIncidentById`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags TempIncident
   * @name TempIncidentGetIncidentByIndexList
   * @request GET:/api/TempIncident/GetIncidentByIndex
   * @secure
   */
  tempIncidentGetIncidentByIndexList = (
    query?: {
      /** @format int32 */
      id?: number;
      isNext?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TempIncidentDTOIResponse, any>({
      path: `/api/TempIncident/GetIncidentByIndex`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags TempIncident
   * @name TempIncidentRejectCreate
   * @request POST:/api/TempIncident/Reject
   * @secure
   */
  tempIncidentRejectCreate = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/TempIncident/Reject`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags TempIncident
   * @name TempIncidentCreateCreate
   * @request POST:/api/TempIncident/Create
   * @secure
   */
  tempIncidentCreateCreate = (data: CreateTempIncidentDTO, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/TempIncident/Create`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags TempIncident
   * @name TempIncidentDeleteList
   * @request GET:/api/TempIncident/Delete
   * @secure
   */
  tempIncidentDeleteList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/TempIncident/Delete`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags TempIncident
   * @name TempIncidentGetCachedActiveSupervisorsList
   * @request GET:/api/TempIncident/GetCachedActiveSupervisors
   * @secure
   */
  tempIncidentGetCachedActiveSupervisorsList = (params: RequestParams = {}) =>
    this.request<UserEmailsDTO[], any>({
      path: `/api/TempIncident/GetCachedActiveSupervisors`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags TempIncident
   * @name TempIncidentGetCachedIndexSupervisorList
   * @request GET:/api/TempIncident/GetCachedIndexSupervisor
   * @secure
   */
  tempIncidentGetCachedIndexSupervisorList = (params: RequestParams = {}) =>
    this.request<UserEmailsDTO, any>({
      path: `/api/TempIncident/GetCachedIndexSupervisor`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserGetResultsByFilterList
   * @request GET:/api/User/GetResultsByFilter
   * @secure
   */
  userGetResultsByFilterList = (
    query?: {
      UserTypeIds?: number[];
      CenterIds?: number[];
      Inactive?: boolean;
      /**
       * @format int32
       * @min 0
       * @max 2147483647
       */
      SkipCount?: number;
      SearchTerm?: string;
      Filter?: string;
      Lang?: string;
      SortingDirection?: string;
      SortBy?: string;
      FullResult?: boolean;
      IsDeleted?: boolean;
      /**
       * @format int32
       * @min 1
       * @max 2147483647
       */
      MaxResultCount?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<UserDtoPagedResultDtoIResponse, any>({
      path: `/api/User/GetResultsByFilter`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserCreateCreate
   * @request POST:/api/User/Create
   * @secure
   */
  userCreateCreate = (data: CreateUserDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/User/Create`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserUpdateCreate
   * @request POST:/api/User/Update
   * @secure
   */
  userUpdateCreate = (data: UpdateUserDto, params: RequestParams = {}) =>
    this.request<BooleanIResponse, any>({
      path: `/api/User/Update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserDisableUserList
   * @request GET:/api/User/DisableUser
   * @secure
   */
  userDisableUserList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/User/DisableUser`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserGetByIdList
   * @request GET:/api/User/GetById
   * @secure
   */
  userGetByIdList = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<UserDetailsDtoIResponse, any>({
      path: `/api/User/GetById`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name UserDeleteCreate
   * @request POST:/api/User/Delete
   * @secure
   */
  userDeleteCreate = (
    query?: {
      /** @format int32 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<BooleanIResponse, any>({
      path: `/api/User/Delete`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
