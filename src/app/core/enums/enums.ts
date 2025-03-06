export enum IcidentTypesEnum {
  'WaitingForReview' = 1,
  'Reviewed' = 2,
  'Assigned' = 3,
  'SolvedInitially' = 4,
  'Solved' = 5,
  'ReOpened' = 6,
  'Upped' = 7,
  'Cancelled' = 8,
  'AutoReviewed' = 9,
}
export enum UserTypesEnum {
  'Admin' = 1,
  'CenterBoss' = 2,
  'DepartmentBoss' = 3,
  'Supervisor' = 4,
  'Rased' = 5,
  'CenterEmployee' = 6,
  'DepartmentEmployee' = 7,
  'Mqawel' = 8,
  'AdminEmployee' = 9,
  'InformationEmployee' = 10,
}
export enum RenderType {
  Word = 3,
  Excel = 2,
  Pdf = 1,
  Image = 4,
}

export enum IncidentStatusType {
  UnderReview = 1,
  New = 2,
  Assigned = 3,
  InitialProcessingCompleted = 4,
  Reopened = 6,
}

export enum PathsEnum {
  CreateIncidentPath = 1,
  ResolveIncidentPath = 2,
  SubCategoryPath = 3,
  ProfilePhotoPath = 4,
}
export enum  IncidentProcessStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}
