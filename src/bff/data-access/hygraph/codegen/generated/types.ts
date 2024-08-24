export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  Json: { input: any; output: any; }
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  RichTextAST: { input: any; output: any; }
}

export interface Aggregate {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
}

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  alt?: Maybe<Scalars['String']['output']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Asset[];
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Version[];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Asset[];
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  ogImagePage: Page[];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: ScheduledOperation[];
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Returns information you need to upload the asset. The type of upload is dependant on what you pass into asset creations as upload type. */
  upload?: Maybe<AssetUpload>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export interface AssetCreatedAtArgs {
  variation?: SystemDateTimeFieldVariation;
}


/** Asset system model */
export interface AssetCreatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Locale[]>;
}


/** Asset system model */
export interface AssetDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Stage[];
}


/** Asset system model */
export interface AssetHistoryArgs {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
}


/** Asset system model */
export interface AssetLocalizationsArgs {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Locale[];
}


/** Asset system model */
export interface AssetOgImagePageArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Locale[]>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
}


/** Asset system model */
export interface AssetPublishedAtArgs {
  variation?: SystemDateTimeFieldVariation;
}


/** Asset system model */
export interface AssetPublishedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Locale[]>;
}


/** Asset system model */
export interface AssetScheduledInArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Locale[]>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
}


/** Asset system model */
export interface AssetUpdatedAtArgs {
  variation?: SystemDateTimeFieldVariation;
}


/** Asset system model */
export interface AssetUpdatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Locale[]>;
}


/** Asset system model */
export interface AssetUrlArgs {
  transformation?: InputMaybe<AssetTransformationInput>;
}

export interface AssetConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
}

/** A connection to a list of items. */
export interface AssetConnection {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: AssetEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface AssetCreateInput {
  /** alt input for default locale (en) */
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  imageAssetVw?: InputMaybe<AssetVwCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  ogImagePage?: InputMaybe<PageCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
}

export interface AssetCreateLocalizationDataInput {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
}

export interface AssetCreateLocalizationInput {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
}

export interface AssetCreateLocalizationsInput {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<AssetCreateLocalizationInput[]>;
}

export interface AssetCreateManyInlineInput {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<AssetWhereUniqueInput[]>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<AssetCreateInput[]>;
}

export interface AssetCreateOneInlineInput {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
}

/** An edge in a connection. */
export interface AssetEdge {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
}

/** Identifies documents */
export interface AssetManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<AssetWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<AssetWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<AssetWhereInput[]>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  ogImagePage_every?: InputMaybe<PageWhereInput>;
  ogImagePage_none?: InputMaybe<PageWhereInput>;
  ogImagePage_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
}

export enum AssetOrderByInput {
  AltAsc = 'alt_ASC',
  AltDesc = 'alt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export enum AssetPerVw {
  Desktop = 'desktop',
  Mobile = 'mobile'
}

/** Identifies documents */
export interface AssetSingleRelationWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<AssetSingleRelationWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<AssetSingleRelationWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<AssetSingleRelationWhereInput[]>;
  upload?: InputMaybe<AssetUploadWhereInput>;
}

/** Transformations for Assets */
export interface AssetTransformationInput {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface AssetUpdateInput {
  /** alt input for default locale (en) */
  alt?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  imageAssetVw?: InputMaybe<AssetVwUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  ogImagePage?: InputMaybe<PageUpdateManyInlineInput>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
}

export interface AssetUpdateLocalizationDataInput {
  alt?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
}

export interface AssetUpdateLocalizationInput {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
}

export interface AssetUpdateLocalizationsInput {
  /** Localizations to create */
  create?: InputMaybe<AssetCreateLocalizationInput[]>;
  /** Localizations to delete */
  delete?: InputMaybe<Locale[]>;
  /** Localizations to update */
  update?: InputMaybe<AssetUpdateLocalizationInput[]>;
  upsert?: InputMaybe<AssetUpsertLocalizationInput[]>;
}

export interface AssetUpdateManyInlineInput {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<AssetConnectInput[]>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<AssetCreateInput[]>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<AssetWhereUniqueInput[]>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<AssetWhereUniqueInput[]>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<AssetWhereUniqueInput[]>;
  /** Update multiple Asset documents */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput[]>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput[]>;
}

export interface AssetUpdateManyInput {
  /** alt input for default locale (en) */
  alt?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
}

export interface AssetUpdateManyLocalizationDataInput {
  alt?: InputMaybe<Scalars['String']['input']>;
}

export interface AssetUpdateManyLocalizationInput {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
}

export interface AssetUpdateManyLocalizationsInput {
  /** Localizations to update */
  update?: InputMaybe<AssetUpdateManyLocalizationInput[]>;
}

export interface AssetUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
}

export interface AssetUpdateOneInlineInput {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
}

export interface AssetUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
}

/** Asset Upload */
export interface AssetUpload {
  __typename?: 'AssetUpload';
  /** Asset Upload Error */
  error?: Maybe<AssetUploadError>;
  /** Expiry Timestamp */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Asset Request Data for upload */
  requestPostData?: Maybe<AssetUploadRequestPostData>;
  /** Asset Request Data for upload */
  status?: Maybe<AssetUploadStatus>;
}

/** Represents asset upload error */
export interface AssetUploadError {
  __typename?: 'AssetUploadError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
}

/** Asset Upload Request Post Data */
export interface AssetUploadRequestPostData {
  __typename?: 'AssetUploadRequestPostData';
  /** The algorithm to use in the form field. This value should be passed in the `X-Amz-Algorithm` form field. */
  algorithm: Scalars['String']['output'];
  /** The credential to use in the form field. This value should be passed in the `X-Amz-Credential` form field. */
  credential: Scalars['String']['output'];
  /** The date the request was signed, formatted as YYYYMMDDTHHMMSSZ. This value should be passed in the `X-Amz-Date` header. */
  date: Scalars['String']['output'];
  /** The key to use in the form field. This value should be passed in the `Key` form field. */
  key: Scalars['String']['output'];
  /** The policy to use in the form field. This value should be passed in the `Policy` form field. */
  policy: Scalars['String']['output'];
  /** The security token to use in the form field. This field is optional only pass it if its not null. This value should be passed in the `X-Amz-Security-Token` form field if not null. */
  securityToken?: Maybe<Scalars['String']['output']>;
  /** The signature to use in the form field. This value should be passed in the `X-Amz-Signature` form field. */
  signature: Scalars['String']['output'];
  /** The URL to which the file should be uploaded with a POST request. */
  url: Scalars['String']['output'];
}

/** System Asset Upload Status */
export enum AssetUploadStatus {
  AssetCreatePending = 'ASSET_CREATE_PENDING',
  AssetErrorUpload = 'ASSET_ERROR_UPLOAD',
  AssetUpdatePending = 'ASSET_UPDATE_PENDING',
  AssetUploadComplete = 'ASSET_UPLOAD_COMPLETE'
}

/** Identifies documents */
export interface AssetUploadWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<AssetUploadWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<AssetUploadWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<AssetUploadWhereInput[]>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<InputMaybe<AssetUploadStatus>[]>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<InputMaybe<AssetUploadStatus>[]>;
}

/** Identifies documents */
export interface AssetUploadWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<AssetUploadWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<AssetUploadWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<AssetUploadWhereInput[]>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<InputMaybe<AssetUploadStatus>[]>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<InputMaybe<AssetUploadStatus>[]>;
}

export interface AssetUpsertInput {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
}

export interface AssetUpsertLocalizationInput {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
}

export interface AssetUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
}

export type AssetVw = Entity & {
  __typename?: 'AssetVw';
  alt: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image: Asset;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: AssetVw[];
  /** System stage field */
  stage: Stage;
  variant: AssetPerVw;
};


export interface AssetVwImageArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Locale[]>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
}


export interface AssetVwLocalizationsArgs {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Locale[];
}

export interface AssetVwConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetVwWhereUniqueInput;
}

/** A connection to a list of items. */
export interface AssetVwConnection {
  __typename?: 'AssetVwConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: AssetVwEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface AssetVwCreateInput {
  /** alt input for default locale (en) */
  alt: Scalars['String']['input'];
  image: AssetCreateOneInlineInput;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetVwCreateLocalizationsInput>;
  variant: AssetPerVw;
}

export interface AssetVwCreateLocalizationDataInput {
  alt: Scalars['String']['input'];
}

export interface AssetVwCreateLocalizationInput {
  /** Localization input */
  data: AssetVwCreateLocalizationDataInput;
  locale: Locale;
}

export interface AssetVwCreateLocalizationsInput {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<AssetVwCreateLocalizationInput[]>;
}

export interface AssetVwCreateManyInlineInput {
  /** Create and connect multiple existing AssetVw documents */
  create?: InputMaybe<AssetVwCreateInput[]>;
}

export interface AssetVwCreateOneInlineInput {
  /** Create and connect one AssetVw document */
  create?: InputMaybe<AssetVwCreateInput>;
}

export interface AssetVwCreateWithPositionInput {
  /** Document to create */
  data: AssetVwCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
}

/** An edge in a connection. */
export interface AssetVwEdge {
  __typename?: 'AssetVwEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AssetVw;
}

/** Identifies documents */
export interface AssetVwManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<AssetVwWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<AssetVwWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<AssetVwWhereInput[]>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  variant?: InputMaybe<AssetPerVw>;
  /** All values that are contained in given list. */
  variant_in?: InputMaybe<InputMaybe<AssetPerVw>[]>;
  /** Any other value that exists and is not equal to the given value. */
  variant_not?: InputMaybe<AssetPerVw>;
  /** All values that are not contained in given list. */
  variant_not_in?: InputMaybe<InputMaybe<AssetPerVw>[]>;
}

export enum AssetVwOrderByInput {
  AltAsc = 'alt_ASC',
  AltDesc = 'alt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export type AssetVwParent = Banner | Hero;

export interface AssetVwParentConnectInput {
  Banner?: InputMaybe<BannerConnectInput>;
  Hero?: InputMaybe<HeroConnectInput>;
}

export interface AssetVwParentCreateInput {
  Banner?: InputMaybe<BannerCreateInput>;
  Hero?: InputMaybe<HeroCreateInput>;
}

export interface AssetVwParentCreateManyInlineInput {
  /** Create and connect multiple existing AssetVwParent documents */
  create?: InputMaybe<AssetVwParentCreateInput[]>;
}

export interface AssetVwParentCreateOneInlineInput {
  /** Create and connect one AssetVwParent document */
  create?: InputMaybe<AssetVwParentCreateInput>;
}

export interface AssetVwParentCreateWithPositionInput {
  Banner?: InputMaybe<BannerCreateWithPositionInput>;
  Hero?: InputMaybe<HeroCreateWithPositionInput>;
}

export interface AssetVwParentUpdateInput {
  Banner?: InputMaybe<BannerUpdateInput>;
  Hero?: InputMaybe<HeroUpdateInput>;
}

export interface AssetVwParentUpdateManyInlineInput {
  /** Create and connect multiple AssetVwParent component instances */
  create?: InputMaybe<AssetVwParentCreateWithPositionInput[]>;
  /** Delete multiple AssetVwParent documents */
  delete?: InputMaybe<AssetVwParentWhereUniqueInput[]>;
  /** Update multiple AssetVwParent component instances */
  update?: InputMaybe<AssetVwParentUpdateWithNestedWhereUniqueAndPositionInput[]>;
  /** Upsert multiple AssetVwParent component instances */
  upsert?: InputMaybe<AssetVwParentUpsertWithNestedWhereUniqueAndPositionInput[]>;
}

export interface AssetVwParentUpdateManyWithNestedWhereInput {
  Banner?: InputMaybe<BannerUpdateManyWithNestedWhereInput>;
  Hero?: InputMaybe<HeroUpdateManyWithNestedWhereInput>;
}

export interface AssetVwParentUpdateOneInlineInput {
  /** Create and connect one AssetVwParent document */
  create?: InputMaybe<AssetVwParentCreateInput>;
  /** Delete currently connected AssetVwParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single AssetVwParent document */
  update?: InputMaybe<AssetVwParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AssetVwParent document */
  upsert?: InputMaybe<AssetVwParentUpsertWithNestedWhereUniqueInput>;
}

export interface AssetVwParentUpdateWithNestedWhereUniqueAndPositionInput {
  Banner?: InputMaybe<BannerUpdateWithNestedWhereUniqueAndPositionInput>;
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueAndPositionInput>;
}

export interface AssetVwParentUpdateWithNestedWhereUniqueInput {
  Banner?: InputMaybe<BannerUpdateWithNestedWhereUniqueInput>;
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
}

export interface AssetVwParentUpsertWithNestedWhereUniqueAndPositionInput {
  Banner?: InputMaybe<BannerUpsertWithNestedWhereUniqueAndPositionInput>;
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueAndPositionInput>;
}

export interface AssetVwParentUpsertWithNestedWhereUniqueInput {
  Banner?: InputMaybe<BannerUpsertWithNestedWhereUniqueInput>;
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
}

export interface AssetVwParentWhereInput {
  Banner?: InputMaybe<BannerWhereInput>;
  Hero?: InputMaybe<HeroWhereInput>;
}

export interface AssetVwParentWhereUniqueInput {
  Banner?: InputMaybe<BannerWhereUniqueInput>;
  Hero?: InputMaybe<HeroWhereUniqueInput>;
}

export interface AssetVwUpdateInput {
  /** alt input for default locale (en) */
  alt?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetVwUpdateLocalizationsInput>;
  variant?: InputMaybe<AssetPerVw>;
}

export interface AssetVwUpdateLocalizationDataInput {
  alt?: InputMaybe<Scalars['String']['input']>;
}

export interface AssetVwUpdateLocalizationInput {
  data: AssetVwUpdateLocalizationDataInput;
  locale: Locale;
}

export interface AssetVwUpdateLocalizationsInput {
  /** Localizations to create */
  create?: InputMaybe<AssetVwCreateLocalizationInput[]>;
  /** Localizations to delete */
  delete?: InputMaybe<Locale[]>;
  /** Localizations to update */
  update?: InputMaybe<AssetVwUpdateLocalizationInput[]>;
  upsert?: InputMaybe<AssetVwUpsertLocalizationInput[]>;
}

export interface AssetVwUpdateManyInlineInput {
  /** Create and connect multiple AssetVw component instances */
  create?: InputMaybe<AssetVwCreateWithPositionInput[]>;
  /** Delete multiple AssetVw documents */
  delete?: InputMaybe<AssetVwWhereUniqueInput[]>;
  /** Update multiple AssetVw component instances */
  update?: InputMaybe<AssetVwUpdateWithNestedWhereUniqueAndPositionInput[]>;
  /** Upsert multiple AssetVw component instances */
  upsert?: InputMaybe<AssetVwUpsertWithNestedWhereUniqueAndPositionInput[]>;
}

export interface AssetVwUpdateManyInput {
  /** alt input for default locale (en) */
  alt?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetVwUpdateManyLocalizationsInput>;
  variant?: InputMaybe<AssetPerVw>;
}

export interface AssetVwUpdateManyLocalizationDataInput {
  alt?: InputMaybe<Scalars['String']['input']>;
}

export interface AssetVwUpdateManyLocalizationInput {
  data: AssetVwUpdateManyLocalizationDataInput;
  locale: Locale;
}

export interface AssetVwUpdateManyLocalizationsInput {
  /** Localizations to update */
  update?: InputMaybe<AssetVwUpdateManyLocalizationInput[]>;
}

export interface AssetVwUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: AssetVwUpdateManyInput;
  /** Document search */
  where: AssetVwWhereInput;
}

export interface AssetVwUpdateOneInlineInput {
  /** Create and connect one AssetVw document */
  create?: InputMaybe<AssetVwCreateInput>;
  /** Delete currently connected AssetVw document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single AssetVw document */
  update?: InputMaybe<AssetVwUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AssetVw document */
  upsert?: InputMaybe<AssetVwUpsertWithNestedWhereUniqueInput>;
}

export interface AssetVwUpdateWithNestedWhereUniqueAndPositionInput {
  /** Document to update */
  data?: InputMaybe<AssetVwUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AssetVwWhereUniqueInput;
}

export interface AssetVwUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: AssetVwUpdateInput;
  /** Unique document search */
  where: AssetVwWhereUniqueInput;
}

export interface AssetVwUpsertInput {
  /** Create document if it didn't exist */
  create: AssetVwCreateInput;
  /** Update document if it exists */
  update: AssetVwUpdateInput;
}

export interface AssetVwUpsertLocalizationInput {
  create: AssetVwCreateLocalizationDataInput;
  locale: Locale;
  update: AssetVwUpdateLocalizationDataInput;
}

export interface AssetVwUpsertWithNestedWhereUniqueAndPositionInput {
  /** Document to upsert */
  data?: InputMaybe<AssetVwUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AssetVwWhereUniqueInput;
}

export interface AssetVwUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: AssetVwUpsertInput;
  /** Unique document search */
  where: AssetVwWhereUniqueInput;
}

/** Identifies documents */
export interface AssetVwWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<AssetVwWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<AssetVwWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<AssetVwWhereInput[]>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  alt?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  alt_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  alt_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  alt_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  alt_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  alt_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  alt_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  alt_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  alt_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  alt_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  variant?: InputMaybe<AssetPerVw>;
  /** All values that are contained in given list. */
  variant_in?: InputMaybe<InputMaybe<AssetPerVw>[]>;
  /** Any other value that exists and is not equal to the given value. */
  variant_not?: InputMaybe<AssetPerVw>;
  /** All values that are not contained in given list. */
  variant_not_in?: InputMaybe<InputMaybe<AssetPerVw>[]>;
}

/** References AssetVw record uniquely */
export interface AssetVwWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']['input']>;
}

/** This contains a set of filters that can be used to compare values internally */
export interface AssetWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
}

/** Identifies documents */
export interface AssetWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<AssetWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<AssetWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<AssetWhereInput[]>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  alt?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  alt_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  alt_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  alt_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  alt_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  alt_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  alt_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  alt_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  alt_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  alt_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<InputMaybe<Scalars['Float']['input']>[]>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<InputMaybe<Scalars['Float']['input']>[]>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  ogImagePage_every?: InputMaybe<PageWhereInput>;
  ogImagePage_none?: InputMaybe<PageWhereInput>;
  ogImagePage_some?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<InputMaybe<Scalars['Float']['input']>[]>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<InputMaybe<Scalars['Float']['input']>[]>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<InputMaybe<Scalars['Float']['input']>[]>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<InputMaybe<Scalars['Float']['input']>[]>;
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface AssetWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<AssetWhereStageInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<AssetWhereStageInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<AssetWhereStageInput[]>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
}

/** References Asset record uniquely */
export interface AssetWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export type Banner = Entity & {
  __typename?: 'Banner';
  description: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image: AssetVw[];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Banner[];
  /** System stage field */
  stage: Stage;
  text: Scalars['String']['output'];
};


export interface BannerImageArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Locale[]>;
  orderBy?: InputMaybe<AssetVwOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetVwWhereInput>;
}


export interface BannerLocalizationsArgs {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Locale[];
}

export interface BannerConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BannerWhereUniqueInput;
}

/** A connection to a list of items. */
export interface BannerConnection {
  __typename?: 'BannerConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: BannerEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface BannerCreateInput {
  /** description input for default locale (en) */
  description: Scalars['String']['input'];
  image?: InputMaybe<AssetVwCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<BannerCreateLocalizationsInput>;
  /** text input for default locale (en) */
  text: Scalars['String']['input'];
}

export interface BannerCreateLocalizationDataInput {
  description: Scalars['String']['input'];
  text: Scalars['String']['input'];
}

export interface BannerCreateLocalizationInput {
  /** Localization input */
  data: BannerCreateLocalizationDataInput;
  locale: Locale;
}

export interface BannerCreateLocalizationsInput {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<BannerCreateLocalizationInput[]>;
}

export interface BannerCreateManyInlineInput {
  /** Create and connect multiple existing Banner documents */
  create?: InputMaybe<BannerCreateInput[]>;
}

export interface BannerCreateOneInlineInput {
  /** Create and connect one Banner document */
  create?: InputMaybe<BannerCreateInput>;
}

export interface BannerCreateWithPositionInput {
  /** Document to create */
  data: BannerCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
}

/** An edge in a connection. */
export interface BannerEdge {
  __typename?: 'BannerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Banner;
}

/** Identifies documents */
export interface BannerManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<BannerWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<BannerWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<BannerWhereInput[]>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image_every?: InputMaybe<AssetVwWhereInput>;
  image_none?: InputMaybe<AssetVwWhereInput>;
  image_some?: InputMaybe<AssetVwWhereInput>;
}

export enum BannerOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

export type BannerParent = Page;

export interface BannerParentConnectInput {
  Page?: InputMaybe<PageConnectInput>;
}

export interface BannerParentCreateInput {
  Page?: InputMaybe<PageCreateInput>;
}

export interface BannerParentCreateManyInlineInput {
  /** Connect multiple existing BannerParent documents */
  connect?: InputMaybe<BannerParentWhereUniqueInput[]>;
  /** Create and connect multiple existing BannerParent documents */
  create?: InputMaybe<BannerParentCreateInput[]>;
}

export interface BannerParentCreateOneInlineInput {
  /** Connect one existing BannerParent document */
  connect?: InputMaybe<BannerParentWhereUniqueInput>;
  /** Create and connect one BannerParent document */
  create?: InputMaybe<BannerParentCreateInput>;
}

export interface BannerParentUpdateInput {
  Page?: InputMaybe<PageUpdateInput>;
}

export interface BannerParentUpdateManyInlineInput {
  /** Connect multiple existing BannerParent documents */
  connect?: InputMaybe<BannerParentConnectInput[]>;
  /** Create and connect multiple BannerParent documents */
  create?: InputMaybe<BannerParentCreateInput[]>;
  /** Delete multiple BannerParent documents */
  delete?: InputMaybe<BannerParentWhereUniqueInput[]>;
  /** Disconnect multiple BannerParent documents */
  disconnect?: InputMaybe<BannerParentWhereUniqueInput[]>;
  /** Override currently-connected documents with multiple existing BannerParent documents */
  set?: InputMaybe<BannerParentWhereUniqueInput[]>;
  /** Update multiple BannerParent documents */
  update?: InputMaybe<BannerParentUpdateWithNestedWhereUniqueInput[]>;
  /** Upsert multiple BannerParent documents */
  upsert?: InputMaybe<BannerParentUpsertWithNestedWhereUniqueInput[]>;
}

export interface BannerParentUpdateManyWithNestedWhereInput {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
}

export interface BannerParentUpdateOneInlineInput {
  /** Connect existing BannerParent document */
  connect?: InputMaybe<BannerParentWhereUniqueInput>;
  /** Create and connect one BannerParent document */
  create?: InputMaybe<BannerParentCreateInput>;
  /** Delete currently connected BannerParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected BannerParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single BannerParent document */
  update?: InputMaybe<BannerParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single BannerParent document */
  upsert?: InputMaybe<BannerParentUpsertWithNestedWhereUniqueInput>;
}

export interface BannerParentUpdateWithNestedWhereUniqueInput {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
}

export interface BannerParentUpsertWithNestedWhereUniqueInput {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
}

export interface BannerParentWhereInput {
  Page?: InputMaybe<PageWhereInput>;
}

export interface BannerParentWhereUniqueInput {
  Page?: InputMaybe<PageWhereUniqueInput>;
}

export interface BannerUpdateInput {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetVwUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<BannerUpdateLocalizationsInput>;
  /** text input for default locale (en) */
  text?: InputMaybe<Scalars['String']['input']>;
}

export interface BannerUpdateLocalizationDataInput {
  description?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
}

export interface BannerUpdateLocalizationInput {
  data: BannerUpdateLocalizationDataInput;
  locale: Locale;
}

export interface BannerUpdateLocalizationsInput {
  /** Localizations to create */
  create?: InputMaybe<BannerCreateLocalizationInput[]>;
  /** Localizations to delete */
  delete?: InputMaybe<Locale[]>;
  /** Localizations to update */
  update?: InputMaybe<BannerUpdateLocalizationInput[]>;
  upsert?: InputMaybe<BannerUpsertLocalizationInput[]>;
}

export interface BannerUpdateManyInlineInput {
  /** Create and connect multiple Banner component instances */
  create?: InputMaybe<BannerCreateWithPositionInput[]>;
  /** Delete multiple Banner documents */
  delete?: InputMaybe<BannerWhereUniqueInput[]>;
  /** Update multiple Banner component instances */
  update?: InputMaybe<BannerUpdateWithNestedWhereUniqueAndPositionInput[]>;
  /** Upsert multiple Banner component instances */
  upsert?: InputMaybe<BannerUpsertWithNestedWhereUniqueAndPositionInput[]>;
}

export interface BannerUpdateManyInput {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<BannerUpdateManyLocalizationsInput>;
  /** text input for default locale (en) */
  text?: InputMaybe<Scalars['String']['input']>;
}

export interface BannerUpdateManyLocalizationDataInput {
  description?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
}

export interface BannerUpdateManyLocalizationInput {
  data: BannerUpdateManyLocalizationDataInput;
  locale: Locale;
}

export interface BannerUpdateManyLocalizationsInput {
  /** Localizations to update */
  update?: InputMaybe<BannerUpdateManyLocalizationInput[]>;
}

export interface BannerUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: BannerUpdateManyInput;
  /** Document search */
  where: BannerWhereInput;
}

export interface BannerUpdateOneInlineInput {
  /** Create and connect one Banner document */
  create?: InputMaybe<BannerCreateInput>;
  /** Delete currently connected Banner document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Banner document */
  update?: InputMaybe<BannerUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Banner document */
  upsert?: InputMaybe<BannerUpsertWithNestedWhereUniqueInput>;
}

export interface BannerUpdateWithNestedWhereUniqueAndPositionInput {
  /** Document to update */
  data?: InputMaybe<BannerUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: BannerWhereUniqueInput;
}

export interface BannerUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: BannerUpdateInput;
  /** Unique document search */
  where: BannerWhereUniqueInput;
}

export interface BannerUpsertInput {
  /** Create document if it didn't exist */
  create: BannerCreateInput;
  /** Update document if it exists */
  update: BannerUpdateInput;
}

export interface BannerUpsertLocalizationInput {
  create: BannerCreateLocalizationDataInput;
  locale: Locale;
  update: BannerUpdateLocalizationDataInput;
}

export interface BannerUpsertWithNestedWhereUniqueAndPositionInput {
  /** Document to upsert */
  data?: InputMaybe<BannerUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: BannerWhereUniqueInput;
}

export interface BannerUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: BannerUpsertInput;
  /** Unique document search */
  where: BannerWhereUniqueInput;
}

/** Identifies documents */
export interface BannerWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<BannerWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<BannerWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<BannerWhereInput[]>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image_every?: InputMaybe<AssetVwWhereInput>;
  image_none?: InputMaybe<AssetVwWhereInput>;
  image_some?: InputMaybe<AssetVwWhereInput>;
  text?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  text_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  text_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  text_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  text_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  text_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  text_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  text_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  text_starts_with?: InputMaybe<Scalars['String']['input']>;
}

/** References Banner record uniquely */
export interface BannerWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface BatchPayload {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export interface Color {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export interface ColorInput {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
}

export interface ConnectPositionInput {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
}

export enum DocumentFileTypes {
  /** Automatically selects the best format for the image based on the browser's capabilities. */
  AutoImage = 'autoImage',
  Avif = 'avif',
  Bmp = 'bmp',
  Gif = 'gif',
  Heic = 'heic',
  Jpg = 'jpg',
  Png = 'png',
  Svg = 'svg',
  Tiff = 'tiff',
  Webp = 'webp'
}

export interface DocumentOutputInput {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * JPG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * PNG:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * SVG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * WEBP:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * GIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * TIFF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * AVIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * PDF: 	autoImage, gif, jpg, png, webp, tiff
   *
   */
  format?: InputMaybe<DocumentFileTypes>;
}

/** Transformations for Documents */
export interface DocumentTransformationInput {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
}

export interface DocumentVersion {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
}

/** An object with an ID */
export interface Entity {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
}

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  AssetVw = 'AssetVw',
  Banner = 'Banner',
  Hero = 'Hero',
  /**
   * Simple page with components
   *
   */
  Page = 'Page',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  /** User system model */
  User = 'User'
}

/** Allows to specify input to query models and components directly */
export interface EntityWhereInput {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
}

export type Hero = Entity & {
  __typename?: 'Hero';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image: AssetVw[];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Hero[];
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
};


export interface HeroImageArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Locale[]>;
  orderBy?: InputMaybe<AssetVwOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetVwWhereInput>;
}


export interface HeroLocalizationsArgs {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Locale[];
}

export interface HeroConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HeroWhereUniqueInput;
}

/** A connection to a list of items. */
export interface HeroConnection {
  __typename?: 'HeroConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: HeroEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface HeroCreateInput {
  image?: InputMaybe<AssetVwCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<HeroCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title: Scalars['String']['input'];
}

export interface HeroCreateLocalizationDataInput {
  title: Scalars['String']['input'];
}

export interface HeroCreateLocalizationInput {
  /** Localization input */
  data: HeroCreateLocalizationDataInput;
  locale: Locale;
}

export interface HeroCreateLocalizationsInput {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<HeroCreateLocalizationInput[]>;
}

export interface HeroCreateManyInlineInput {
  /** Create and connect multiple existing Hero documents */
  create?: InputMaybe<HeroCreateInput[]>;
}

export interface HeroCreateOneInlineInput {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
}

export interface HeroCreateWithPositionInput {
  /** Document to create */
  data: HeroCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
}

/** An edge in a connection. */
export interface HeroEdge {
  __typename?: 'HeroEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Hero;
}

/** Identifies documents */
export interface HeroManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<HeroWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<HeroWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<HeroWhereInput[]>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image_every?: InputMaybe<AssetVwWhereInput>;
  image_none?: InputMaybe<AssetVwWhereInput>;
  image_some?: InputMaybe<AssetVwWhereInput>;
}

export enum HeroOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type HeroParent = Page;

export interface HeroParentConnectInput {
  Page?: InputMaybe<PageConnectInput>;
}

export interface HeroParentCreateInput {
  Page?: InputMaybe<PageCreateInput>;
}

export interface HeroParentCreateManyInlineInput {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<HeroParentWhereUniqueInput[]>;
  /** Create and connect multiple existing HeroParent documents */
  create?: InputMaybe<HeroParentCreateInput[]>;
}

export interface HeroParentCreateOneInlineInput {
  /** Connect one existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>;
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
}

export interface HeroParentUpdateInput {
  Page?: InputMaybe<PageUpdateInput>;
}

export interface HeroParentUpdateManyInlineInput {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<HeroParentConnectInput[]>;
  /** Create and connect multiple HeroParent documents */
  create?: InputMaybe<HeroParentCreateInput[]>;
  /** Delete multiple HeroParent documents */
  delete?: InputMaybe<HeroParentWhereUniqueInput[]>;
  /** Disconnect multiple HeroParent documents */
  disconnect?: InputMaybe<HeroParentWhereUniqueInput[]>;
  /** Override currently-connected documents with multiple existing HeroParent documents */
  set?: InputMaybe<HeroParentWhereUniqueInput[]>;
  /** Update multiple HeroParent documents */
  update?: InputMaybe<HeroParentUpdateWithNestedWhereUniqueInput[]>;
  /** Upsert multiple HeroParent documents */
  upsert?: InputMaybe<HeroParentUpsertWithNestedWhereUniqueInput[]>;
}

export interface HeroParentUpdateManyWithNestedWhereInput {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
}

export interface HeroParentUpdateOneInlineInput {
  /** Connect existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>;
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
  /** Delete currently connected HeroParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected HeroParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HeroParent document */
  update?: InputMaybe<HeroParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HeroParent document */
  upsert?: InputMaybe<HeroParentUpsertWithNestedWhereUniqueInput>;
}

export interface HeroParentUpdateWithNestedWhereUniqueInput {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
}

export interface HeroParentUpsertWithNestedWhereUniqueInput {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
}

export interface HeroParentWhereInput {
  Page?: InputMaybe<PageWhereInput>;
}

export interface HeroParentWhereUniqueInput {
  Page?: InputMaybe<PageWhereUniqueInput>;
}

export interface HeroUpdateInput {
  image?: InputMaybe<AssetVwUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<HeroUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface HeroUpdateLocalizationDataInput {
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface HeroUpdateLocalizationInput {
  data: HeroUpdateLocalizationDataInput;
  locale: Locale;
}

export interface HeroUpdateLocalizationsInput {
  /** Localizations to create */
  create?: InputMaybe<HeroCreateLocalizationInput[]>;
  /** Localizations to delete */
  delete?: InputMaybe<Locale[]>;
  /** Localizations to update */
  update?: InputMaybe<HeroUpdateLocalizationInput[]>;
  upsert?: InputMaybe<HeroUpsertLocalizationInput[]>;
}

export interface HeroUpdateManyInlineInput {
  /** Create and connect multiple Hero component instances */
  create?: InputMaybe<HeroCreateWithPositionInput[]>;
  /** Delete multiple Hero documents */
  delete?: InputMaybe<HeroWhereUniqueInput[]>;
  /** Update multiple Hero component instances */
  update?: InputMaybe<HeroUpdateWithNestedWhereUniqueAndPositionInput[]>;
  /** Upsert multiple Hero component instances */
  upsert?: InputMaybe<HeroUpsertWithNestedWhereUniqueAndPositionInput[]>;
}

export interface HeroUpdateManyInput {
  /** Optional updates to localizations */
  localizations?: InputMaybe<HeroUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface HeroUpdateManyLocalizationDataInput {
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface HeroUpdateManyLocalizationInput {
  data: HeroUpdateManyLocalizationDataInput;
  locale: Locale;
}

export interface HeroUpdateManyLocalizationsInput {
  /** Localizations to update */
  update?: InputMaybe<HeroUpdateManyLocalizationInput[]>;
}

export interface HeroUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: HeroUpdateManyInput;
  /** Document search */
  where: HeroWhereInput;
}

export interface HeroUpdateOneInlineInput {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
  /** Delete currently connected Hero document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Hero document */
  update?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Hero document */
  upsert?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
}

export interface HeroUpdateWithNestedWhereUniqueAndPositionInput {
  /** Document to update */
  data?: InputMaybe<HeroUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
}

export interface HeroUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: HeroUpdateInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
}

export interface HeroUpsertInput {
  /** Create document if it didn't exist */
  create: HeroCreateInput;
  /** Update document if it exists */
  update: HeroUpdateInput;
}

export interface HeroUpsertLocalizationInput {
  create: HeroCreateLocalizationDataInput;
  locale: Locale;
  update: HeroUpdateLocalizationDataInput;
}

export interface HeroUpsertWithNestedWhereUniqueAndPositionInput {
  /** Document to upsert */
  data?: InputMaybe<HeroUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
}

export interface HeroUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: HeroUpsertInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
}

/** Identifies documents */
export interface HeroWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<HeroWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<HeroWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<HeroWhereInput[]>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image_every?: InputMaybe<AssetVwWhereInput>;
  image_none?: InputMaybe<AssetVwWhereInput>;
  image_some?: InputMaybe<AssetVwWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
}

/** References Hero record uniquely */
export interface HeroWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface ImageBlurInput {
  /** The amount of blurring to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
}

/** Adds a border to the image. */
export interface ImageBorderInput {
  /** The background color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  background: Scalars['String']['input'];
  /** The color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  color: Scalars['String']['input'];
  /** The width of the border in pixels. The value must be an integer from 1 to 1000. */
  width: Scalars['Int']['input'];
}

export interface ImageCompressInput {
  /** Preserves the metadata of the image. */
  metadata: Scalars['Boolean']['input'];
}

/**
 * Crops the image to the specified dimensions.
 * The starting points for X and Y coordinates are [0,0], aligning with the top-left corner of the image.
 * The width and height parameters determine the size in pixels of the cropping rectangle.
 * The output will include only the portion of the image within the designated crop area.
 */
export interface ImageCropInput {
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: Scalars['Int']['input'];
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: Scalars['Int']['input'];
  /** The x coordinate of the image. The value must be an integer from 0 to 10000. */
  x: Scalars['Int']['input'];
  /** The y coordinate of the image. The value must be an integer from 0 to 10000. */
  y: Scalars['Int']['input'];
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export interface ImageQualityInput {
  /** The quality of the image. The value must be an integer from 1 to 100. */
  value: Scalars['Int']['input'];
}

export interface ImageResizeInput {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
}

export interface ImageSharpenInput {
  /** The amount of sharpening to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
}

/** Transformations for Images */
export interface ImageTransformationInput {
  /** Blurs the image. */
  blur?: InputMaybe<ImageBlurInput>;
  /** Adds a border to the image. */
  border?: InputMaybe<ImageBorderInput>;
  /** Compresses the image. */
  compress?: InputMaybe<ImageCompressInput>;
  /** Crops the image to the specified dimensions. */
  crop?: InputMaybe<ImageCropInput>;
  /**
   * Changes the quality of the image. The value must be an integer from 1 to 100.
   * Only supported for the following formats jpeg, jpg, webp, gif, heif, tiff, avif.
   */
  quality?: InputMaybe<ImageQualityInput>;
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
  /** Sharpens the image. */
  sharpen?: InputMaybe<ImageSharpenInput>;
}

/** Locale system enumeration */
export enum Locale {
  De = 'de',
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export interface Location {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
}


/** Representing a geolocation point with latitude and longitude */
export interface LocationDistanceArgs {
  from: LocationInput;
}

/** Input for a geolocation point with latitude and longitude */
export interface LocationInput {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
}

export interface Mutation {
  __typename?: 'Mutation';
  /** Create an asset. Use the returned info to finish the creation process by uploading the asset. */
  createAsset?: Maybe<Asset>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
}


export interface MutationCreateAssetArgs {
  data: AssetCreateInput;
}


export interface MutationCreatePageArgs {
  data: PageCreateInput;
}


export interface MutationCreateScheduledReleaseArgs {
  data: ScheduledReleaseCreateInput;
}


export interface MutationDeleteAssetArgs {
  where: AssetWhereUniqueInput;
}


export interface MutationDeleteManyAssetsArgs {
  where?: InputMaybe<AssetManyWhereInput>;
}


export interface MutationDeleteManyAssetsConnectionArgs {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
}


export interface MutationDeleteManyPagesArgs {
  where?: InputMaybe<PageManyWhereInput>;
}


export interface MutationDeleteManyPagesConnectionArgs {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
}


export interface MutationDeletePageArgs {
  where: PageWhereUniqueInput;
}


export interface MutationDeleteScheduledOperationArgs {
  where: ScheduledOperationWhereUniqueInput;
}


export interface MutationDeleteScheduledReleaseArgs {
  where: ScheduledReleaseWhereUniqueInput;
}


export interface MutationPublishAssetArgs {
  locales?: InputMaybe<Locale[]>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Stage[];
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
}


export interface MutationPublishManyAssetsArgs {
  locales?: InputMaybe<Locale[]>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Stage[];
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
}


export interface MutationPublishManyAssetsConnectionArgs {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Locale[]>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Stage[];
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
}


export interface MutationPublishManyPagesArgs {
  locales?: InputMaybe<Locale[]>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Stage[];
  where?: InputMaybe<PageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
}


export interface MutationPublishManyPagesConnectionArgs {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Locale[]>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Stage[];
  where?: InputMaybe<PageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
}


export interface MutationPublishPageArgs {
  locales?: InputMaybe<Locale[]>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Stage[];
  where: PageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
}


export interface MutationSchedulePublishAssetArgs {
  locales?: InputMaybe<Locale[]>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Stage[];
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
}


export interface MutationSchedulePublishPageArgs {
  locales?: InputMaybe<Locale[]>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Stage[];
  where: PageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
}


export interface MutationScheduleUnpublishAssetArgs {
  from?: Stage[];
  locales?: InputMaybe<Locale[]>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
}


export interface MutationScheduleUnpublishPageArgs {
  from?: Stage[];
  locales?: InputMaybe<Locale[]>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PageWhereUniqueInput;
}


export interface MutationUnpublishAssetArgs {
  from?: Stage[];
  locales?: InputMaybe<Locale[]>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
}


export interface MutationUnpublishManyAssetsArgs {
  from?: Stage[];
  locales?: InputMaybe<Locale[]>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
}


export interface MutationUnpublishManyAssetsConnectionArgs {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Stage[];
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Locale[]>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
}


export interface MutationUnpublishManyPagesArgs {
  from?: Stage[];
  locales?: InputMaybe<Locale[]>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
}


export interface MutationUnpublishManyPagesConnectionArgs {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Stage[];
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Locale[]>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
}


export interface MutationUnpublishPageArgs {
  from?: Stage[];
  locales?: InputMaybe<Locale[]>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PageWhereUniqueInput;
}


export interface MutationUpdateAssetArgs {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
}


export interface MutationUpdateManyAssetsArgs {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
}


export interface MutationUpdateManyAssetsConnectionArgs {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
}


export interface MutationUpdateManyPagesArgs {
  data: PageUpdateManyInput;
  where?: InputMaybe<PageManyWhereInput>;
}


export interface MutationUpdateManyPagesConnectionArgs {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
}


export interface MutationUpdatePageArgs {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
}


export interface MutationUpdateScheduledReleaseArgs {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
}


export interface MutationUpsertAssetArgs {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
}


export interface MutationUpsertPageArgs {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
}

/** An object with an ID */
export interface Node {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
}

/**
 * Simple page with components
 *
 */
export type Page = Entity & Node & {
  __typename?: 'Page';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: Scalars['String']['output'];
  /** Get the document in other stages */
  documentInStages: Page[];
  /** List of Page versions */
  history: Version[];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Page[];
  ogImage: Asset;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: ScheduledOperation[];
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  templates: PagetemplatesUnion[];
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/**
 * Simple page with components
 *
 */
export interface PageCreatedAtArgs {
  variation?: SystemDateTimeFieldVariation;
}


/**
 * Simple page with components
 *
 */
export interface PageCreatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Locale[]>;
}


/**
 * Simple page with components
 *
 */
export interface PageDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Stage[];
}


/**
 * Simple page with components
 *
 */
export interface PageHistoryArgs {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
}


/**
 * Simple page with components
 *
 */
export interface PageLocalizationsArgs {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Locale[];
}


/**
 * Simple page with components
 *
 */
export interface PageOgImageArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Locale[]>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
}


/**
 * Simple page with components
 *
 */
export interface PagePublishedAtArgs {
  variation?: SystemDateTimeFieldVariation;
}


/**
 * Simple page with components
 *
 */
export interface PagePublishedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Locale[]>;
}


/**
 * Simple page with components
 *
 */
export interface PageScheduledInArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Locale[]>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
}


/**
 * Simple page with components
 *
 */
export interface PageTemplatesArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Locale[]>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}


/**
 * Simple page with components
 *
 */
export interface PageUpdatedAtArgs {
  variation?: SystemDateTimeFieldVariation;
}


/**
 * Simple page with components
 *
 */
export interface PageUpdatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Locale[]>;
}

export interface PageConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
}

/** A connection to a list of items. */
export interface PageConnection {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: PageEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface PageCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** description input for default locale (en) */
  description: Scalars['String']['input'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PageCreateLocalizationsInput>;
  ogImage: AssetCreateOneInlineInput;
  /** slug input for default locale (en) */
  slug?: InputMaybe<Scalars['String']['input']>;
  templates?: InputMaybe<PagetemplatesUnionCreateManyInlineInput>;
  /** title input for default locale (en) */
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface PageCreateLocalizationDataInput {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface PageCreateLocalizationInput {
  /** Localization input */
  data: PageCreateLocalizationDataInput;
  locale: Locale;
}

export interface PageCreateLocalizationsInput {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<PageCreateLocalizationInput[]>;
}

export interface PageCreateManyInlineInput {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<PageWhereUniqueInput[]>;
  /** Create and connect multiple existing Page documents */
  create?: InputMaybe<PageCreateInput[]>;
}

export interface PageCreateOneInlineInput {
  /** Connect one existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
}

/** An edge in a connection. */
export interface PageEdge {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Page;
}

/** Information about pagination in a connection. */
export interface PageInfo {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
}

/** Identifies documents */
export interface PageManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<PageWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<PageWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<PageWhereInput[]>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  ogImage?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** All values in which the union is empty. */
  templates_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  templates_some?: InputMaybe<PagetemplatesUnionWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export interface PageUpdateInput {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<PageUpdateLocalizationsInput>;
  ogImage?: InputMaybe<AssetUpdateOneInlineInput>;
  /** slug input for default locale (en) */
  slug?: InputMaybe<Scalars['String']['input']>;
  templates?: InputMaybe<PagetemplatesUnionUpdateManyInlineInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface PageUpdateLocalizationDataInput {
  description?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface PageUpdateLocalizationInput {
  data: PageUpdateLocalizationDataInput;
  locale: Locale;
}

export interface PageUpdateLocalizationsInput {
  /** Localizations to create */
  create?: InputMaybe<PageCreateLocalizationInput[]>;
  /** Localizations to delete */
  delete?: InputMaybe<Locale[]>;
  /** Localizations to update */
  update?: InputMaybe<PageUpdateLocalizationInput[]>;
  upsert?: InputMaybe<PageUpsertLocalizationInput[]>;
}

export interface PageUpdateManyInlineInput {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<PageConnectInput[]>;
  /** Create and connect multiple Page documents */
  create?: InputMaybe<PageCreateInput[]>;
  /** Delete multiple Page documents */
  delete?: InputMaybe<PageWhereUniqueInput[]>;
  /** Disconnect multiple Page documents */
  disconnect?: InputMaybe<PageWhereUniqueInput[]>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: InputMaybe<PageWhereUniqueInput[]>;
  /** Update multiple Page documents */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput[]>;
  /** Upsert multiple Page documents */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput[]>;
}

export interface PageUpdateManyInput {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PageUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface PageUpdateManyLocalizationDataInput {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface PageUpdateManyLocalizationInput {
  data: PageUpdateManyLocalizationDataInput;
  locale: Locale;
}

export interface PageUpdateManyLocalizationsInput {
  /** Localizations to update */
  update?: InputMaybe<PageUpdateManyLocalizationInput[]>;
}

export interface PageUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
}

export interface PageUpdateOneInlineInput {
  /** Connect existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Page document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Page document */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
}

export interface PageUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
}

export interface PageUpsertInput {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
}

export interface PageUpsertLocalizationInput {
  create: PageCreateLocalizationDataInput;
  locale: Locale;
  update: PageUpdateLocalizationDataInput;
}

export interface PageUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
}

/** This contains a set of filters that can be used to compare values internally */
export interface PageWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
}

/** Identifies documents */
export interface PageWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<PageWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<PageWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<PageWhereInput[]>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  ogImage?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  templates_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  templates_some?: InputMaybe<PagetemplatesUnionWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface PageWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<PageWhereStageInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<PageWhereStageInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<PageWhereStageInput[]>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
}

/** References Page record uniquely */
export interface PageWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export type PagetemplatesUnion = Banner | Hero;

export interface PagetemplatesUnionConnectInput {
  Banner?: InputMaybe<BannerConnectInput>;
  Hero?: InputMaybe<HeroConnectInput>;
}

export interface PagetemplatesUnionCreateInput {
  Banner?: InputMaybe<BannerCreateInput>;
  Hero?: InputMaybe<HeroCreateInput>;
}

export interface PagetemplatesUnionCreateManyInlineInput {
  /** Create and connect multiple existing PagetemplatesUnion documents */
  create?: InputMaybe<PagetemplatesUnionCreateInput[]>;
}

export interface PagetemplatesUnionCreateOneInlineInput {
  /** Create and connect one PagetemplatesUnion document */
  create?: InputMaybe<PagetemplatesUnionCreateInput>;
}

export interface PagetemplatesUnionCreateWithPositionInput {
  Banner?: InputMaybe<BannerCreateWithPositionInput>;
  Hero?: InputMaybe<HeroCreateWithPositionInput>;
}

export interface PagetemplatesUnionUpdateInput {
  Banner?: InputMaybe<BannerUpdateInput>;
  Hero?: InputMaybe<HeroUpdateInput>;
}

export interface PagetemplatesUnionUpdateManyInlineInput {
  /** Create and connect multiple PagetemplatesUnion component instances */
  create?: InputMaybe<PagetemplatesUnionCreateWithPositionInput[]>;
  /** Delete multiple PagetemplatesUnion documents */
  delete?: InputMaybe<PagetemplatesUnionWhereUniqueInput[]>;
  /** Update multiple PagetemplatesUnion component instances */
  update?: InputMaybe<PagetemplatesUnionUpdateWithNestedWhereUniqueAndPositionInput[]>;
  /** Upsert multiple PagetemplatesUnion component instances */
  upsert?: InputMaybe<PagetemplatesUnionUpsertWithNestedWhereUniqueAndPositionInput[]>;
}

export interface PagetemplatesUnionUpdateManyWithNestedWhereInput {
  Banner?: InputMaybe<BannerUpdateManyWithNestedWhereInput>;
  Hero?: InputMaybe<HeroUpdateManyWithNestedWhereInput>;
}

export interface PagetemplatesUnionUpdateOneInlineInput {
  /** Create and connect one PagetemplatesUnion document */
  create?: InputMaybe<PagetemplatesUnionCreateInput>;
  /** Delete currently connected PagetemplatesUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PagetemplatesUnion document */
  update?: InputMaybe<PagetemplatesUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PagetemplatesUnion document */
  upsert?: InputMaybe<PagetemplatesUnionUpsertWithNestedWhereUniqueInput>;
}

export interface PagetemplatesUnionUpdateWithNestedWhereUniqueAndPositionInput {
  Banner?: InputMaybe<BannerUpdateWithNestedWhereUniqueAndPositionInput>;
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueAndPositionInput>;
}

export interface PagetemplatesUnionUpdateWithNestedWhereUniqueInput {
  Banner?: InputMaybe<BannerUpdateWithNestedWhereUniqueInput>;
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
}

export interface PagetemplatesUnionUpsertWithNestedWhereUniqueAndPositionInput {
  Banner?: InputMaybe<BannerUpsertWithNestedWhereUniqueAndPositionInput>;
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueAndPositionInput>;
}

export interface PagetemplatesUnionUpsertWithNestedWhereUniqueInput {
  Banner?: InputMaybe<BannerUpsertWithNestedWhereUniqueInput>;
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
}

export interface PagetemplatesUnionWhereInput {
  Banner?: InputMaybe<BannerWhereInput>;
  Hero?: InputMaybe<HeroWhereInput>;
}

export interface PagetemplatesUnionWhereUniqueInput {
  Banner?: InputMaybe<BannerWhereUniqueInput>;
  Hero?: InputMaybe<HeroWhereUniqueInput>;
}

export interface PublishLocaleInput {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Stage[];
}

export interface Query {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Asset[];
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Entity[]>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Page[];
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: ScheduledOperation[];
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: ScheduledRelease[];
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: User[];
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
}


export interface QueryAssetArgs {
  locales?: Locale[];
  stage?: Stage;
  where: AssetWhereUniqueInput;
}


export interface QueryAssetVersionArgs {
  where: VersionWhereInput;
}


export interface QueryAssetsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Locale[];
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
}


export interface QueryAssetsConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Locale[];
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
}


export interface QueryEntitiesArgs {
  locales?: InputMaybe<Locale[]>;
  where: EntityWhereInput[];
}


export interface QueryNodeArgs {
  id: Scalars['ID']['input'];
  locales?: Locale[];
  stage?: Stage;
}


export interface QueryPageArgs {
  locales?: Locale[];
  stage?: Stage;
  where: PageWhereUniqueInput;
}


export interface QueryPageVersionArgs {
  where: VersionWhereInput;
}


export interface QueryPagesArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Locale[];
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
}


export interface QueryPagesConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Locale[];
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
}


export interface QueryScheduledOperationArgs {
  locales?: Locale[];
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
}


export interface QueryScheduledOperationsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Locale[];
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
}


export interface QueryScheduledOperationsConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Locale[];
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
}


export interface QueryScheduledReleaseArgs {
  locales?: Locale[];
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
}


export interface QueryScheduledReleasesArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Locale[];
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
}


export interface QueryScheduledReleasesConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Locale[];
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
}


export interface QueryUserArgs {
  locales?: Locale[];
  stage?: Stage;
  where: UserWhereUniqueInput;
}


export interface QueryUsersArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Locale[];
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
}


export interface QueryUsersConnectionArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Locale[];
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export interface Rgba {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export interface RgbaInput {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export interface RichText {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
}

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: ScheduledOperationAffectedDocument[];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: ScheduledOperation[];
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export interface ScheduledOperationAffectedDocumentsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Locale[]>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}


/** Scheduled Operation system model */
export interface ScheduledOperationCreatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Locale[]>;
}


/** Scheduled Operation system model */
export interface ScheduledOperationDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Stage[];
}


/** Scheduled Operation system model */
export interface ScheduledOperationPublishedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Locale[]>;
}


/** Scheduled Operation system model */
export interface ScheduledOperationReleaseArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Locale[]>;
}


/** Scheduled Operation system model */
export interface ScheduledOperationUpdatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Locale[]>;
}

export type ScheduledOperationAffectedDocument = Asset | Page;

export interface ScheduledOperationConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
}

/** A connection to a list of items. */
export interface ScheduledOperationConnection {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: ScheduledOperationEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface ScheduledOperationCreateManyInlineInput {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput[]>;
}

export interface ScheduledOperationCreateOneInlineInput {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
}

/** An edge in a connection. */
export interface ScheduledOperationEdge {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
}

/** Identifies documents */
export interface ScheduledOperationManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<ScheduledOperationWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<ScheduledOperationWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<ScheduledOperationWhereInput[]>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<InputMaybe<ScheduledOperationStatus>[]>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<InputMaybe<ScheduledOperationStatus>[]>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export interface ScheduledOperationUpdateManyInlineInput {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<ScheduledOperationConnectInput[]>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<ScheduledOperationWhereUniqueInput[]>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<ScheduledOperationWhereUniqueInput[]>;
}

export interface ScheduledOperationUpdateOneInlineInput {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
}

/** Identifies documents */
export interface ScheduledOperationWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<ScheduledOperationWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<ScheduledOperationWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<ScheduledOperationWhereInput[]>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<InputMaybe<ScheduledOperationStatus>[]>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<InputMaybe<ScheduledOperationStatus>[]>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

/** References ScheduledOperation record uniquely */
export interface ScheduledOperationWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']['input']>;
}

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: ScheduledRelease[];
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: ScheduledOperation[];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export interface ScheduledReleaseCreatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Locale[]>;
}


/** Scheduled Release system model */
export interface ScheduledReleaseDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Stage[];
}


/** Scheduled Release system model */
export interface ScheduledReleaseOperationsArgs {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Locale[]>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
}


/** Scheduled Release system model */
export interface ScheduledReleasePublishedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Locale[]>;
}


/** Scheduled Release system model */
export interface ScheduledReleaseUpdatedByArgs {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Locale[]>;
}

export interface ScheduledReleaseConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
}

/** A connection to a list of items. */
export interface ScheduledReleaseConnection {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: ScheduledReleaseEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface ScheduledReleaseCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
}

export interface ScheduledReleaseCreateManyInlineInput {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput[]>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<ScheduledReleaseCreateInput[]>;
}

export interface ScheduledReleaseCreateOneInlineInput {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
}

/** An edge in a connection. */
export interface ScheduledReleaseEdge {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
}

/** Identifies documents */
export interface ScheduledReleaseManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<ScheduledReleaseWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<ScheduledReleaseWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<ScheduledReleaseWhereInput[]>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<InputMaybe<ScheduledReleaseStatus>[]>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<InputMaybe<ScheduledReleaseStatus>[]>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export interface ScheduledReleaseUpdateInput {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface ScheduledReleaseUpdateManyInlineInput {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<ScheduledReleaseConnectInput[]>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<ScheduledReleaseCreateInput[]>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<ScheduledReleaseWhereUniqueInput[]>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<ScheduledReleaseWhereUniqueInput[]>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<ScheduledReleaseWhereUniqueInput[]>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput[]>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput[]>;
}

export interface ScheduledReleaseUpdateManyInput {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface ScheduledReleaseUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
}

export interface ScheduledReleaseUpdateOneInlineInput {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
}

export interface ScheduledReleaseUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
}

export interface ScheduledReleaseUpsertInput {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
}

export interface ScheduledReleaseUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
}

/** Identifies documents */
export interface ScheduledReleaseWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<ScheduledReleaseWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<ScheduledReleaseWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<ScheduledReleaseWhereInput[]>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<InputMaybe<ScheduledReleaseStatus>[]>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<InputMaybe<ScheduledReleaseStatus>[]>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

/** References ScheduledRelease record uniquely */
export interface ScheduledReleaseWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']['input']>;
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export interface UnpublishLocaleInput {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Stage[];
}

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: User[];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export interface UserDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Stage[];
}

export interface UserConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
}

/** A connection to a list of items. */
export interface UserConnection {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: UserEdge[];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface UserCreateManyInlineInput {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<UserWhereUniqueInput[]>;
}

export interface UserCreateOneInlineInput {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
}

/** An edge in a connection. */
export interface UserEdge {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
}

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export interface UserManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<UserWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<UserWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<UserWhereInput[]>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<InputMaybe<UserKind>[]>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<InputMaybe<UserKind>[]>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
}

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export interface UserUpdateManyInlineInput {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<UserConnectInput[]>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<UserWhereUniqueInput[]>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<UserWhereUniqueInput[]>;
}

export interface UserUpdateOneInlineInput {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
}

/** This contains a set of filters that can be used to compare values internally */
export interface UserWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
}

/** Identifies documents */
export interface UserWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<UserWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<UserWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<UserWhereInput[]>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<InputMaybe<Scalars['ID']['input']>[]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<InputMaybe<UserKind>[]>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<InputMaybe<UserKind>[]>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<InputMaybe<Scalars['DateTime']['input']>[]>;
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface UserWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<UserWhereStageInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<UserWhereStageInput[]>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<UserWhereStageInput[]>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
}

/** References User record uniquely */
export interface UserWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']['input']>;
}

export interface Version {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
}

export interface VersionWhereInput {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
}

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export interface AssetvwFragment { __typename?: 'AssetVw', variant: AssetPerVw, alt: string, image: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null, mimeType?: string | null, alt?: string | null } }

export interface BannerFragment { __typename?: 'Banner', text: string, description: string, image: { __typename?: 'AssetVw', variant: AssetPerVw, alt: string, image: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null, mimeType?: string | null, alt?: string | null } }[] }

export interface HeroFragment { __typename?: 'Hero', title: string, image: { __typename?: 'AssetVw', variant: AssetPerVw, alt: string, image: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null, mimeType?: string | null, alt?: string | null } }[] }

export interface ImageFragment { __typename?: 'Asset', url: string, width?: number | null, height?: number | null, mimeType?: string | null, alt?: string | null }

export type GetPageSlugsForLocalesQueryVariables = Exact<{ [key: string]: never; }>;


export interface GetPageSlugsForLocalesQuery { __typename?: 'Query', pages: { __typename?: 'Page', localizations: { __typename?: 'Page', slug?: string | null, locale: Locale }[] }[] }

export type GetPageQueryVariables = Exact<{
  where: PageWhereInput;
  locales: Locale[] | Locale;
}>;


export interface GetPageQuery { __typename?: 'Query', pages: { __typename?: 'Page', id: string, title: string, description: string, slug?: string | null, ogImage: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null, mimeType?: string | null, alt?: string | null }, templates: ({ __typename?: 'Banner', text: string, description: string, image: { __typename?: 'AssetVw', variant: AssetPerVw, alt: string, image: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null, mimeType?: string | null, alt?: string | null } }[] } | { __typename?: 'Hero', title: string, image: { __typename?: 'AssetVw', variant: AssetPerVw, alt: string, image: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null, mimeType?: string | null, alt?: string | null } }[] })[] }[] }
