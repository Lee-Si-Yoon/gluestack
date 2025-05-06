/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Represents binary data as Base64-encoded strings, using the standard alphabet. */
  Base64: { input: any; output: any; }
  /** BigInt field */
  BigInt: { input: any; output: any; }
  /** Date (isoformat) */
  Date: { input: any; output: any; }
  /** Date with time (isoformat) */
  DateTime: { input: any; output: any; }
  /** Decimal (fixed-point) */
  Decimal: { input: any; output: any; }
  EMAIL: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](https://ecma-international.org/wp-content/uploads/ECMA-404_2nd_edition_december_2017.pdf). */
  JSON: { input: any; output: any; }
  URL: { input: any; output: any; }
  /** BigInt field */
  Union: { input: any; output: any; }
};

export type AdapterModelCreateInput = {
  adapterConfig: FileDescriptorInput;
  safetensors: Array<FileDescriptorInput>;
  tokenizerConfig?: InputMaybe<FileDescriptorInput>;
};

export type AvatarUploadInfo = {
  __typename?: 'AvatarUploadInfo';
  /** Unique key for the avatar */
  key: Scalars['String']['output'];
  uploadBody: Scalars['JSON']['output'];
  uploadUrl: Scalars['URL']['output'];
};

/** Thrown when given endpoint does not exist */
export type BackofficeAlgosearchCreateEndpointNotFoundError = BaseError & {
  __typename?: 'BackofficeAlgosearchCreateEndpointNotFoundError';
  message: Scalars['String']['output'];
};

/** Input for BackofficeAlgosearchCreate */
export type BackofficeAlgosearchCreateInput = {
  endpointId: Scalars['ID']['input'];
};

/** Response payload for BackofficeCreateSearch */
export type BackofficeAlgosearchCreateResponse = BackofficeAlgosearchCreateEndpointNotFoundError | BackofficeAlgosearchCreateSuccess;

/** Success response for dedicated endpoint restart */
export type BackofficeAlgosearchCreateSuccess = {
  __typename?: 'BackofficeAlgosearchCreateSuccess';
  jobId: Scalars['Int']['output'];
};

/** Algo search job results */
export type BackofficeAlgosearchListResult = {
  __typename?: 'BackofficeAlgosearchListResult';
  /** List of search jobs */
  results: Array<BackofficeAlgosearchResult>;
};

/** Algo search job result */
export type BackofficeAlgosearchResult = {
  __typename?: 'BackofficeAlgosearchResult';
  /** Search job created at */
  createdAt: Scalars['DateTime']['output'];
  /** Search job deleted at */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Search job ID */
  id: Scalars['Int']['output'];
  /** Search job runtime digest */
  runtimeDigest: Scalars['String']['output'];
  /** Search job status */
  status: BackofficeAlgosearchStatus;
};

/** Backoffice search job status */
export enum BackofficeAlgosearchStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Queued = 'QUEUED',
  Running = 'RUNNING',
  Unknown = 'UNKNOWN'
}

/** Phase for a dedicated endpoint */
export type BaseDedicatedDocumentPhase = {
  msg: Scalars['String']['output'];
};

/** Phase for a dedicated endpoint */
export type BaseDedicatedEndpointPhase = {
  msg: Scalars['String']['output'];
};

/** Phase for a dedicated endpoint */
export type BaseDedicatedFinetuningPhase = {
  msg: Scalars['String']['output'];
};

/** Error response interface */
export type BaseError = {
  message: Scalars['String']['output'];
};

export type BaseModelCreateInput = {
  config: FileDescriptorInput;
  safetensors: Array<FileDescriptorInput>;
  specialTokensMap?: InputMaybe<FileDescriptorInput>;
  tokenizer: FileDescriptorInput;
  tokenizerConfig?: InputMaybe<FileDescriptorInput>;
};

/** Friendli Suite Product Base type */
export type BaseProduct = {
  /** Team */
  team: ClientTeam;
};

/** Friendli Suite Product Subscription plan */
export type BaseProductSubplan = {
  /** Team */
  team: ClientTeam;
  teamId: Scalars['ID']['output'];
};

/** Phase for a serverless endpoint */
export type BaseServerlessContentPhase = {
  msg: Scalars['String']['output'];
};

/** Phase for a serverless endpoint */
export type BaseServerlessFilePhase = {
  msg: Scalars['String']['output'];
};

/** Phase for a serverless endpoint */
export type BaseServerlessKnowledgePhase = {
  msg: Scalars['String']['output'];
};

/** Paging request with both directions */
export type BidirectionalConnectionInput = {
  /** Fetch items after this cursor */
  after?: InputMaybe<Scalars['Base64']['input']>;
  /** Fetch items before this cursor */
  before?: InputMaybe<Scalars['Base64']['input']>;
  /** Number of items to fetch */
  first?: InputMaybe<Scalars['Int']['input']>;
  /** Number of items to fetch */
  last?: InputMaybe<Scalars['Int']['input']>;
  /** Number of items to skip */
  skip?: Scalars['Int']['input'];
};

export type ChatDatasetCreateInput = {
  trainSplit: FileDescriptorInput;
  validationSplit?: InputMaybe<FileDescriptorInput>;
};

/** PeriFlow ClientDenylist */
export type ClientDenylist = Node & {
  __typename?: 'ClientDenylist';
  /** domain to block */
  domain?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** reason for blocking */
  reason?: Maybe<Scalars['String']['output']>;
};

/** ClientDenylist connection. */
export type ClientDenylistConnection = {
  __typename?: 'ClientDenylistConnection';
  /** Returned denylist items */
  edges: Array<ClientDenylist>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of denylist items */
  totalCount: Scalars['Int']['output'];
};

/** Input for ClientDenylistCreateDomain */
export type ClientDenylistCreateDomainInput = {
  /** Domain to denylist */
  domain: Scalars['String']['input'];
  /** Reason for denylisting */
  reason?: InputMaybe<Scalars['String']['input']>;
};

/** Response payload for ClientDenylistDeleteDelete */
export type ClientDenylistDeleteDeleteResponse = ClientDenylistDeleteDeleteSuccess;

/** Success response for denylist delete */
export type ClientDenylistDeleteDeleteSuccess = {
  __typename?: 'ClientDenylistDeleteDeleteSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Input for ClientDenylistDelete */
export type ClientDenylistDeleteInput = {
  /** Denylist ID */
  denylistId: Scalars['ID']['input'];
};

/** Input for ClientDenylistDeleteWithDomain */
export type ClientDenylistDeleteWithDomainInput = {
  /** Domain to delete */
  domain: Scalars['String']['input'];
};

export type ClientDenylistFiltersInput = {
  domainSearch?: InputMaybe<Scalars['String']['input']>;
};

/** Input for ClientDenylistUpdateDomain */
export type ClientDenylistUpdateDomainInput = {
  /** Denylist ID */
  denylistId: Scalars['ID']['input'];
  /** New domain */
  domain: Scalars['String']['input'];
  /** Reason for denylisting */
  reason?: InputMaybe<Scalars['String']['input']>;
};

/** Users in a ClientTeam */
export type ClientMemberConnection = {
  __typename?: 'ClientMemberConnection';
  /** Returned registration list */
  edges: Array<ClientMemberEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of waitlist registrations */
  totalCount: Scalars['Int']['output'];
};

/** User in a ClientTeam */
export type ClientMemberEdge = {
  __typename?: 'ClientMemberEdge';
  cursor: Scalars['Base64']['output'];
  joinedAt: Scalars['DateTime']['output'];
  node: ClientUser;
  /** @deprecated Per-member access is removed */
  productAccess?: Maybe<UserTeamProductAccessInfo>;
  role?: Maybe<ClientTeamMembershipRole>;
};

/** Client Session type. Represents the session user is authenticated in */
export type ClientSession = {
  __typename?: 'ClientSession';
  /** Time when the client session was created */
  createdAt: Scalars['DateTime']['output'];
  /** Location of the client session */
  location?: Maybe<ClientSessionLocation>;
  /** User of the client session */
  user: ClientUser;
  /** User agent of the client session */
  userAgent?: Maybe<UserAgent>;
};

/** Location of the client browser session */
export type ClientSessionLocation = {
  __typename?: 'ClientSessionLocation';
  /** IP address of the client browser session */
  ipAddress?: Maybe<Scalars['String']['output']>;
};

/** ClientTeam */
export type ClientTeam = Node & {
  __typename?: 'ClientTeam';
  /** Avatar URL of the team */
  avatarUrl?: Maybe<Scalars['URL']['output']>;
  /** Team billing object */
  billing?: Maybe<ClientTeamBilling>;
  /** Team business description */
  businessDescription?: Maybe<Scalars['String']['output']>;
  /** Team contact email */
  contactEmail?: Maybe<Scalars['EMAIL']['output']>;
  /** Container team subscription */
  containerSubplan?: Maybe<ContainerSubplan>;
  /** Team created at */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Dedicated team subscription */
  dedicatedSubplan?: Maybe<DedicatedSubplan>;
  /** Team ID */
  id: Scalars['ID']['output'];
  /** List of invitations in the organization */
  invitations?: Maybe<ClientTeamInvitationConnection>;
  /** Team labels */
  labels?: Maybe<Array<Scalars['String']['output']>>;
  /** List of members in the organization */
  member?: Maybe<ClientTeamMember>;
  /** List of members in the organization */
  members?: Maybe<ClientMemberConnection>;
  /** Team name */
  name?: Maybe<Scalars['String']['output']>;
  /** Team onboarding survey (in JSON) */
  onboardingSurvey?: Maybe<Scalars['JSON']['output']>;
  /** Team payment object */
  payment?: Maybe<ClientTeamPayment>;
  /** List of projects in the organization */
  projects?: Maybe<DedicatedSubplanProjectConnection>;
  /** Team segment */
  segment?: Maybe<Scalars['String']['output']>;
  /** Serverless team subscription */
  serverlessSubplan?: Maybe<ServerlessSubplan>;
  /**
   * Team state
   * @deprecated Use status
   */
  state?: Maybe<ClientTeamState>;
  /** Team status */
  status?: Maybe<ClientTeamStatus>;
  /** Team updated at */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** ClientTeam */
export type ClientTeamInvitationsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
};


/** ClientTeam */
export type ClientTeamMemberArgs = {
  memberId: Scalars['ID']['input'];
};


/** ClientTeam */
export type ClientTeamMembersArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<ClientTeamMemberFiltersInput>;
  sorts?: InputMaybe<ClientTeamMemberSortsInput>;
};


/** ClientTeam */
export type ClientTeamProjectsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<ClientTeamProjectFiltersInput>;
  sorts?: InputMaybe<ClientTeamProjectSortsInput>;
};

/** Input for ClientTeamAddFreeCredit */
export type ClientTeamAddFreeCreditInput = {
  credit: Scalars['Decimal']['input'];
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  productType: ProductType;
  teamId: Scalars['ID']['input'];
};

/** Input for ClientTeamAddUser */
export type ClientTeamAddUserInput = {
  inviteeRole?: InputMaybe<ClientTeamMembershipRole>;
  teamId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

/** Team's AWS marketplace payment information */
export type ClientTeamAwsMarketplacePayment = ClientTeamPayment & {
  __typename?: 'ClientTeamAwsMarketplacePayment';
  /** Team's aws marketplace billing information */
  awsAccountId?: Maybe<Scalars['String']['output']>;
  /** Team's payment state */
  state?: Maybe<ClientTeamPaymentState>;
};

/** Team's billing information */
export type ClientTeamBilling = {
  __typename?: 'ClientTeamBilling';
  /** Team's aws marketplace billing information */
  marketplace?: Maybe<ClientTeamBillingAwsMarketplace>;
  /** Team's monthly payment information */
  monthlyPayment?: Maybe<Scalars['Decimal']['output']>;
  /** Team's stripe billing information */
  nextPaymentDate?: Maybe<Scalars['Date']['output']>;
  /** Whether the team's payment method is verified */
  paymentMethodVerified?: Maybe<Scalars['Boolean']['output']>;
  /** Team's stripe billing information */
  stripe?: Maybe<ClientTeamBillingStripe>;
};

/** Team billing information related to aws marketplace */
export type ClientTeamBillingAwsMarketplace = {
  __typename?: 'ClientTeamBillingAwsMarketplace';
  accountId?: Maybe<Scalars['String']['output']>;
};

/** Team billing information related to stripe */
export type ClientTeamBillingStripe = {
  __typename?: 'ClientTeamBillingStripe';
  customerId?: Maybe<Scalars['String']['output']>;
  /** Team's stripe customer portal url */
  customerPortalUrl?: Maybe<Scalars['String']['output']>;
  /** Team's stripe payment methods */
  paymentMethods?: Maybe<ClientTeamStripePaymentMethodConnection>;
};


/** Team billing information related to stripe */
export type ClientTeamBillingStripeCustomerPortalUrlArgs = {
  redirectPath?: InputMaybe<Scalars['String']['input']>;
};

/** Team billing information related to Stripe Intent */
export type ClientTeamBillingStripeIntent = {
  __typename?: 'ClientTeamBillingStripeIntent';
  clientSecret?: Maybe<Scalars['String']['output']>;
};

/** Team billing information related to Stripe Setup Intent state */
export type ClientTeamBillingStripeSetupIntentState = {
  __typename?: 'ClientTeamBillingStripeSetupIntentState';
  /** Detailed reason that explains the state.  */
  detail?: Maybe<Scalars['String']['output']>;
  /** Tells the result of the payment method registeration */
  state?: Maybe<ClientTeamStripeSetupIntentState>;
};

/** Input for ClientTeamCancelInvitation */
export type ClientTeamCancelInvitationInput = {
  inviteeEmail: Scalars['EMAIL']['input'];
  teamId: Scalars['ID']['input'];
};

/** Input for ClientTeamCheckStripeSetupIntentCompletion */
export type ClientTeamCheckStripeSetupIntentCompletionInput = {
  clientSecret: Scalars['String']['input'];
};

/** Input for ClientTeamCommitAvatarUpload */
export type ClientTeamCommitAvatarUploadInput = {
  key: Scalars['String']['input'];
  teamId: Scalars['ID']['input'];
};

/** Team connection */
export type ClientTeamConnection = {
  __typename?: 'ClientTeamConnection';
  /** Returned teams */
  edges: Array<ClientTeam>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of teams */
  totalCount: Scalars['Int']['output'];
};

/** Input for ClientTeamCreateAvatarUploadUrl */
export type ClientTeamCreateAvatarUploadUrlInput = {
  teamId: Scalars['ID']['input'];
};

/** Response payload for ClientTeamCreateAvatarUploadUrl */
export type ClientTeamCreateAvatarUploadUrlResponse = ClientTeamCreateAvatarUploadUrlSuccess | TeamNotExistError | UserPermissionError;

/** Success response for avatar upload url in dedicated team */
export type ClientTeamCreateAvatarUploadUrlSuccess = {
  __typename?: 'ClientTeamCreateAvatarUploadUrlSuccess';
  uploadInfo: AvatarUploadInfo;
};

/** Input for ClientTeamCreateBillingCustomer */
export type ClientTeamCreateBillingCustomerInput = {
  teamId: Scalars['ID']['input'];
};

/** Input for ClientTeamCreate */
export type ClientTeamCreateInput = {
  /** Contact email of the new team */
  contactEmail: Scalars['EMAIL']['input'];
  /** Name of the new team */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Input for ClientTeamCreateStripeIntent */
export type ClientTeamCreateStripeIntentInput = {
  teamId: Scalars['ID']['input'];
};

/** Input for ClientTeamDetachStripePaymentMethod */
export type ClientTeamDetachStripePaymentMethodInput = {
  paymentMethodId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};

export type ClientTeamFiltersInput = {
  /** Filter by created timestamp */
  createdDateRange?: InputMaybe<DateRangeInput>;
  idSearch?: InputMaybe<Scalars['String']['input']>;
  /** Filter by labels */
  labels?: InputMaybe<Array<Scalars['String']['input']>>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  /** Filter by segment */
  segment?: InputMaybe<Scalars['String']['input']>;
  statuses?: InputMaybe<Array<ClientTeamStatus>>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

/** Input for ClientTeamIntegrationExchangeCode */
export type ClientTeamIntegrationExchangeCodeInput = {
  /** Query parameters received from authorization step */
  queryParams: Scalars['JSON']['input'];
};

/** Response payload for ClientTeamIntegrationExchangeCode */
export type ClientTeamIntegrationExchangeCodeResponse = ClientTeamIntegrationExchangeCodeSuccess | UserPermissionError;

/** Success response for getting oauth authorization URL */
export type ClientTeamIntegrationExchangeCodeSuccess = {
  __typename?: 'ClientTeamIntegrationExchangeCodeSuccess';
  cameFrom?: Maybe<Scalars['String']['output']>;
};

/** Input for ClientTeamIntegrationGetAuthorizationUrl */
export type ClientTeamIntegrationGetAuthorizationUrlInput = {
  /** Application ID */
  appId: Scalars['String']['input'];
  /** The path and query string to redirect to after authorization */
  cameFrom?: InputMaybe<Scalars['String']['input']>;
  /** The URL to redirect to after authorization */
  redirectUri: Scalars['String']['input'];
  /** Team that the integration belongs to */
  teamId: Scalars['ID']['input'];
};

export type ClientTeamInvitation = {
  __typename?: 'ClientTeamInvitation';
  inviteeEmail: Scalars['EMAIL']['output'];
  inviter?: Maybe<ClientUser>;
  inviterEmail: Scalars['EMAIL']['output'];
  inviterName: Scalars['String']['output'];
  /** @deprecated Per-member access is removed */
  productAccess?: Maybe<UserTeamProductAccessInfo>;
  role: ClientTeamMembershipRole;
  teamName: Scalars['String']['output'];
};

/** Team's active invitations */
export type ClientTeamInvitationConnection = {
  __typename?: 'ClientTeamInvitationConnection';
  /** Returned invitation list */
  edges: Array<ClientTeamInvitationEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of waitlist invitations */
  totalCount: Scalars['Int']['output'];
};

/** User in a ClientTeam */
export type ClientTeamInvitationEdge = {
  __typename?: 'ClientTeamInvitationEdge';
  cursor: Scalars['Base64']['output'];
  node: ClientTeamInvitation;
};

/** Input for ClientTeamInviteMemberBatch */
export type ClientTeamInviteMemberBatchInput = {
  invitees: Array<ClientTeamInviteMemberBatchInviteeInput>;
  inviterId?: InputMaybe<Scalars['ID']['input']>;
  teamId: Scalars['ID']['input'];
};

export type ClientTeamInviteMemberBatchInviteeInput = {
  inviteeEmail: Scalars['EMAIL']['input'];
  inviteeRole?: InputMaybe<ClientTeamMembershipRole>;
};

/** Input for ClientTeamInviteMember */
export type ClientTeamInviteMemberInput = {
  email: Scalars['EMAIL']['input'];
  inviteeRole?: InputMaybe<ClientTeamMembershipRole>;
  inviterId?: InputMaybe<Scalars['ID']['input']>;
  switchDefault?: InputMaybe<Scalars['Boolean']['input']>;
  teamId: Scalars['ID']['input'];
};

/** User in a ClientTeam */
export type ClientTeamMember = {
  __typename?: 'ClientTeamMember';
  joinedAt: Scalars['DateTime']['output'];
  /** @deprecated Per-member access is removed */
  productAccess?: Maybe<UserTeamProductAccessInfo>;
  role?: Maybe<ClientTeamMembershipRole>;
  user: ClientUser;
};

export type ClientTeamMemberFiltersInput = {
  /** Filter by joined timestamp */
  joinedDateRange?: InputMaybe<DateRangeInput>;
  productContainerAccess?: InputMaybe<Scalars['Boolean']['input']>;
  productDedicatedAccess?: InputMaybe<Scalars['Boolean']['input']>;
  productServerlessAccess?: InputMaybe<Scalars['Boolean']['input']>;
  roles?: InputMaybe<Array<ClientTeamMembershipRole>>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
  user_EmailSearch?: InputMaybe<Scalars['String']['input']>;
  user_NameOrEmailSearch?: InputMaybe<Scalars['String']['input']>;
  user_NameSearch?: InputMaybe<Scalars['String']['input']>;
};

export type ClientTeamMemberProductAccessInput = {
  container?: InputMaybe<Scalars['Boolean']['input']>;
  dedicated?: InputMaybe<Scalars['Boolean']['input']>;
  serverless?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClientTeamMemberSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: joined_at, role, updated_at, user__state, user__email, user__name, user__created_at */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** User's team membership role */
export enum ClientTeamMembershipRole {
  Admin = 'ADMIN',
  Billing = 'BILLING',
  Member = 'MEMBER',
  Owner = 'OWNER'
}

/** Team's payment information */
export type ClientTeamPayment = {
  /** Team's payment state */
  state?: Maybe<ClientTeamPaymentState>;
};

/** Team payment state */
export enum ClientTeamPaymentState {
  Declined = 'DECLINED',
  Empty = 'EMPTY',
  Unknown = 'UNKNOWN',
  Valid = 'VALID'
}

export type ClientTeamProjectFiltersInput = {
  /** Filter by created timestamp */
  createdDateRange?: InputMaybe<DateRangeInput>;
  /** Filter with corresponding project's id */
  idSearch?: InputMaybe<Scalars['String']['input']>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  /** Filter by project state */
  states?: InputMaybe<Array<ProjectState>>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

export type ClientTeamProjectSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: created_at, updated_at, name */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Input for ClientTeamRemoveMember */
export type ClientTeamRemoveMemberInput = {
  memberId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};

/** Input for ClientTeamResendInvitation */
export type ClientTeamResendInvitationInput = {
  inviteeEmail: Scalars['String']['input'];
  teamId: Scalars['ID']['input'];
};

/** Input for ClientTeamSetStripeDefaultPaymentMethod */
export type ClientTeamSetStripeDefaultPaymentMethodInput = {
  paymentMethodId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};

/** Organization state */
export enum ClientTeamState {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Unknown = 'UNKNOWN'
}

/** Team status */
export enum ClientTeamStatus {
  Banned = 'BANNED',
  Created = 'CREATED',
  Deleted = 'DELETED',
  PaymentFailed = 'PAYMENT_FAILED',
  PaymentVerified = 'PAYMENT_VERIFIED'
}

/** Stripe card */
export type ClientTeamStripeCard = {
  __typename?: 'ClientTeamStripeCard';
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  isExpired?: Maybe<Scalars['Boolean']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
};

/** Team's stripe payment information */
export type ClientTeamStripePayment = ClientTeamPayment & {
  __typename?: 'ClientTeamStripePayment';
  /** Team's payment state */
  state?: Maybe<ClientTeamPaymentState>;
  /** Team's stripe billing information */
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  /** Team's stripe customer portal url */
  stripeCustomerPortalUrl?: Maybe<Scalars['String']['output']>;
};


/** Team's stripe payment information */
export type ClientTeamStripePaymentStripeCustomerPortalUrlArgs = {
  redirectPath?: InputMaybe<Scalars['String']['input']>;
};

/** Stripe payment method */
export type ClientTeamStripePaymentMethod = Node & {
  __typename?: 'ClientTeamStripePaymentMethod';
  card?: Maybe<ClientTeamStripeCard>;
  id: Scalars['ID']['output'];
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Stripe payment methods */
export type ClientTeamStripePaymentMethodConnection = {
  __typename?: 'ClientTeamStripePaymentMethodConnection';
  /** Stripe payment method edges */
  edges: Array<ClientTeamStripePaymentMethodEdge>;
  /** Stripe payment method page info */
  pageInfo: PageInfo;
  /** Stripe payment method total count */
  totalCount: Scalars['Int']['output'];
};

/** Stripe payment methods */
export type ClientTeamStripePaymentMethodEdge = {
  __typename?: 'ClientTeamStripePaymentMethodEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['Base64']['output'];
  /** Stripe payment method node */
  node: ClientTeamStripePaymentMethod;
};

/** Team Stripe setup intent state */
export enum ClientTeamStripeSetupIntentState {
  Failed = 'FAILED',
  Processing = 'PROCESSING',
  Succeeded = 'SUCCEEDED',
  Unknown = 'UNKNOWN'
}

/** Input for ClientTeamTransferOwner */
export type ClientTeamTransferOwnerInput = {
  newOwnerId: Scalars['ID']['input'];
  originalOwnerId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};

/** Input for ClientTeamUpdateBusinessDescription */
export type ClientTeamUpdateBusinessDescriptionInput = {
  businessDescription?: InputMaybe<Scalars['String']['input']>;
  teamId: Scalars['ID']['input'];
};

/** Input for ClientTeamUpdateContactEmail */
export type ClientTeamUpdateContactEmailInput = {
  contactEmail: Scalars['EMAIL']['input'];
  teamId: Scalars['ID']['input'];
};

/** Input for ClientTeamUpdateInvitationAccess */
export type ClientTeamUpdateInvitationAccessInput = {
  container?: InputMaybe<Scalars['Boolean']['input']>;
  dedicatedEndpoints?: InputMaybe<Scalars['Boolean']['input']>;
  inviteeEmail: Scalars['EMAIL']['input'];
  serverlessEndpoints?: InputMaybe<Scalars['Boolean']['input']>;
  teamId: Scalars['ID']['input'];
};

/** Input for ClientTeamUpdateLabels */
export type ClientTeamUpdateLabelsInput = {
  addLabels?: InputMaybe<Array<Scalars['String']['input']>>;
  removeLabels?: InputMaybe<Array<Scalars['String']['input']>>;
  teamId: Scalars['ID']['input'];
};

/** Input for ClientTeamUpdateMemberProductAccess */
export type ClientTeamUpdateMemberProductAccessInput = {
  container?: InputMaybe<Scalars['Boolean']['input']>;
  dedicatedEndpoints?: InputMaybe<Scalars['Boolean']['input']>;
  serverlessEndpoints?: InputMaybe<Scalars['Boolean']['input']>;
  teamId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

/** Input for ClientTeamUpdateMemberRole */
export type ClientTeamUpdateMemberRoleInput = {
  role: ClientTeamMembershipRole;
  teamId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

/** Input for ClientTeamUpdateName */
export type ClientTeamUpdateNameInput = {
  /** Name of the new team */
  name: Scalars['String']['input'];
  /** Team ID */
  teamId: Scalars['ID']['input'];
};

/** Input for ClientTeamUpdateOnboardingSurvey */
export type ClientTeamUpdateOnboardingSurveyInput = {
  /** Onboarding survey data */
  onboardingSurvey: Scalars['JSON']['input'];
  /** ID of the team */
  teamId: Scalars['ID']['input'];
};

/** Response payload for ClientTeamUpdateOnboardingSurvey */
export type ClientTeamUpdateOnboardingSurveyResponse = ClientTeamUpdateOnboardingSurveySuccess | TeamNotExistError | UserPermissionError;

/** Success response for dedicated team subscription */
export type ClientTeamUpdateOnboardingSurveySuccess = {
  __typename?: 'ClientTeamUpdateOnboardingSurveySuccess';
  team: ClientTeam;
};

/** Input for ClientTeamUpdateSegment */
export type ClientTeamUpdateSegmentInput = {
  segment?: InputMaybe<Scalars['String']['input']>;
  teamId: Scalars['ID']['input'];
};

/** Input for ClientTeamUpdateState */
export type ClientTeamUpdateStateInput = {
  /** New team state */
  state: ClientTeamState;
  /** Team ID */
  teamId: Scalars['ID']['input'];
};

/** Input for ClientTeamUpdateStripePaymentMethod */
export type ClientTeamUpdateStripePaymentMethodInput = {
  expMonth: Scalars['Int']['input'];
  expYear: Scalars['Int']['input'];
  paymentMethodId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};

/** PeriFlow ClientUser */
export type ClientUser = Node & {
  __typename?: 'ClientUser';
  /** Whether the user has agreed to the latest service terms */
  agreedToLatestServiceterms?: Maybe<Scalars['Boolean']['output']>;
  /** Avatar URL of the user */
  avatarUrl?: Maybe<Scalars['URL']['output']>;
  /** Created timestamp of the user */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Email of the user */
  email?: Maybe<Scalars['String']['output']>;
  /** Intercom Identity HMAC of the user */
  icIdentityHmac: ClientUserIntercomIdentity;
  id: Scalars['ID']['output'];
  /** Identity kind of the user */
  identityKind?: Maybe<ClientUserIdentityKind>;
  /**
   * Identity type of the user
   * @deprecated Use identity_kind
   */
  identityType?: Maybe<ClientUserIdentityType>;
  /** Integration of the user */
  integration?: Maybe<ClientUserIntegration>;
  /** Name of the user */
  name?: Maybe<Scalars['String']['output']>;
  /** Personal access tokens of the user */
  pats: ClientUserPatConnection;
  /** User preferences */
  preference?: Maybe<UserPreference>;
  /**
   * State of the user
   * @deprecated Use status
   */
  state?: Maybe<ClientUserState>;
  /** Status of the user */
  status?: Maybe<ClientUserStatus>;
  /** User's super-roles */
  superRoles?: Maybe<ClientUserSuperRoleList>;
  /** Default team of the user */
  team?: Maybe<ClientUserTeam>;
  /** Default team of the user */
  teamDefault?: Maybe<ClientUserTeam>;
  /** Teams of the user */
  teams: ClientUserTeamConnection;
  /** Updated timestamp of the user */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** PeriFlow ClientUser */
export type ClientUserIcIdentityHmacArgs = {
  teamId?: InputMaybe<Scalars['ID']['input']>;
};


/** PeriFlow ClientUser */
export type ClientUserPatsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
};


/** PeriFlow ClientUser */
export type ClientUserTeamArgs = {
  teamId?: InputMaybe<Scalars['ID']['input']>;
};


/** PeriFlow ClientUser */
export type ClientUserTeamsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<ClientUserTeamFiltersInput>;
  sorts?: InputMaybe<ClientUserTeamSortsInput>;
};

/** Input for ClientUserAgreeToLatestServiceterms */
export type ClientUserAgreeToLatestServicetermsInput = {
  /** User ID. Defaults to current user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Input for ClientUserCommitAvatarUpload */
export type ClientUserCommitAvatarUploadInput = {
  key: Scalars['String']['input'];
  /** User ID. Defaults to current user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Input for ClientUserConnectHuggingfaceAccount */
export type ClientUserConnectHuggingfaceAccountInput = {
  /** Huggingface account token */
  huggingfaceToken: Scalars['String']['input'];
  /** User ID. Defaults to current user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Response payload for ClientUserConnectHuggingfaceAccount */
export type ClientUserConnectHuggingfaceAccountResponse = ClientUserConnectHuggingfaceAccountSuccess | ClientUserHuggingfaceAccountAlreadyConnectedError | ClientUserHuggingfaceAccountInvalidError | UserPermissionError;

/** Success response for dedicated team subscription */
export type ClientUserConnectHuggingfaceAccountSuccess = {
  __typename?: 'ClientUserConnectHuggingfaceAccountSuccess';
  user: ClientUser;
};

/** Input for ClientUserConnectWandbAccount */
export type ClientUserConnectWandbAccountInput = {
  /** User ID. Defaults to current user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
  /** Wandb account token */
  wandbToken: Scalars['String']['input'];
};

/** Response payload for ClientUserConnectWandbAccount */
export type ClientUserConnectWandbAccountResponse = ClientUserConnectWandbAccountSuccess | ClientUserWandbAccountAlreadyConnectedError | ClientUserWandbAccountInvalidError | UserPermissionError;

/** Success response for dedicated team subscription */
export type ClientUserConnectWandbAccountSuccess = {
  __typename?: 'ClientUserConnectWandbAccountSuccess';
  user: ClientUser;
};

/** User connection */
export type ClientUserConnection = {
  __typename?: 'ClientUserConnection';
  /** Returned users */
  edges: Array<ClientUser>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of users */
  totalCount: Scalars['Int']['output'];
};

/** Input for ClientUserCreateAvatarUploadUrl */
export type ClientUserCreateAvatarUploadUrlInput = {
  /** User ID. Defaults to current user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Response payload for ClientUserCreateAvatarUploadUrl */
export type ClientUserCreateAvatarUploadUrlResponse = ClientUserCreateAvatarUploadUrlSuccess | UserNotExistError | UserPermissionError;

/** Success response for avatar upload url in dedicated team */
export type ClientUserCreateAvatarUploadUrlSuccess = {
  __typename?: 'ClientUserCreateAvatarUploadUrlSuccess';
  uploadInfo: AvatarUploadInfo;
};

/** Input for ClientUserCreate */
export type ClientUserCreateInput = {
  email: Scalars['EMAIL']['input'];
  /** New user's name */
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

/** Input for ClientUserCreatePat */
export type ClientUserCreatePatInput = {
  /** User ID. Defaults to current user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Input for ClientUserDelete */
export type ClientUserDeleteInput = {
  permanent?: Scalars['Boolean']['input'];
  userId: Scalars['ID']['input'];
};

/** Input for ClientUserDeletePat */
export type ClientUserDeletePatInput = {
  keyId: Scalars['ID']['input'];
  /** User ID. Defaults to current user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Input for ClientUserDisconnectHuggingfaceAccount */
export type ClientUserDisconnectHuggingfaceAccountInput = {
  /** User ID. Defaults to current user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Response payload for ClientUserDisconnectHuggingfaceAccount */
export type ClientUserDisconnectHuggingfaceAccountResponse = ClientUserDisconnectHuggingfaceAccountSuccess | ClientUserHuggingfaceAccountNotFoundError | UserPermissionError;

/** Success response for dedicated team subscription */
export type ClientUserDisconnectHuggingfaceAccountSuccess = {
  __typename?: 'ClientUserDisconnectHuggingfaceAccountSuccess';
  user: ClientUser;
};

/** Input for ClientUserDisconnectWandbAccount */
export type ClientUserDisconnectWandbAccountInput = {
  /** User ID. Defaults to current user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Response payload for ClientUserDisconnectWandbAccount */
export type ClientUserDisconnectWandbAccountResponse = ClientUserDisconnectWandbAccountSuccess | ClientUserWandbAccountNotFoundError | UserPermissionError;

/** Success response for dedicated team subscription */
export type ClientUserDisconnectWandbAccountSuccess = {
  __typename?: 'ClientUserDisconnectWandbAccountSuccess';
  user: ClientUser;
};

export type ClientUserFiltersInput = {
  createdDateRange?: InputMaybe<DateRangeInput>;
  emailSearch?: InputMaybe<Scalars['String']['input']>;
  idSearch?: InputMaybe<Scalars['String']['input']>;
  identityKinds?: InputMaybe<Array<ClientUserIdentityKind>>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  statuses?: InputMaybe<Array<ClientUserStatus>>;
  superRoles?: InputMaybe<Array<ClientUserSuperRoleEnum>>;
  teams?: InputMaybe<Array<Scalars['ID']['input']>>;
  teamsExclusive?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

/** Error response when huggingface account is already connected to user */
export type ClientUserHuggingfaceAccountAlreadyConnectedError = BaseError & {
  __typename?: 'ClientUserHuggingfaceAccountAlreadyConnectedError';
  message: Scalars['String']['output'];
};

/** Error response when huggingface account is disconnected from user */
export type ClientUserHuggingfaceAccountInvalidError = BaseError & {
  __typename?: 'ClientUserHuggingfaceAccountInvalidError';
  message: Scalars['String']['output'];
};

/** Error response when huggingface account is disconnected from user */
export type ClientUserHuggingfaceAccountNotFoundError = BaseError & {
  __typename?: 'ClientUserHuggingfaceAccountNotFoundError';
  message: Scalars['String']['output'];
};

/** User identity kind */
export enum ClientUserIdentityKind {
  Emailpassword = 'EMAILPASSWORD',
  Github = 'GITHUB',
  Google = 'GOOGLE'
}

/** User identity type */
export enum ClientUserIdentityType {
  Emailpassword = 'EMAILPASSWORD',
  Github = 'GITHUB',
  Google = 'GOOGLE',
  Keycloak = 'KEYCLOAK',
  Unknown = 'UNKNOWN'
}

/** User's integrations */
export type ClientUserIntegration = {
  __typename?: 'ClientUserIntegration';
  /** User's huggingface integration */
  huggingface?: Maybe<ClientUserIntegrationHuggingfaceResponse>;
  /** User's wandb integration */
  wandb?: Maybe<ClientUserIntegrationWandbResponse>;
};

/** User's integrations */
export type ClientUserIntegrationHuggingFace = {
  __typename?: 'ClientUserIntegrationHuggingFace';
  /** Huggingface integration account avatar url */
  accountAvatarUrl?: Maybe<Scalars['String']['output']>;
  /** Huggingface integration account username */
  accountUsername?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  lastUsedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Huggingface integration token name */
  tokenName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Error response for when user does not have huggingface integration */
export type ClientUserIntegrationHuggingfaceDisconnectedError = BaseError & {
  __typename?: 'ClientUserIntegrationHuggingfaceDisconnectedError';
  message: Scalars['String']['output'];
};

/** Error response for when user does not have huggingface integration */
export type ClientUserIntegrationHuggingfaceNotFoundError = BaseError & {
  __typename?: 'ClientUserIntegrationHuggingfaceNotFoundError';
  message: Scalars['String']['output'];
};

/** Response payload for ClientUserIntegration */
export type ClientUserIntegrationHuggingfaceResponse = ClientUserIntegrationHuggingFace | ClientUserIntegrationHuggingfaceDisconnectedError | ClientUserIntegrationHuggingfaceNotFoundError;

/** User's wandb integrations */
export type ClientUserIntegrationWandb = {
  __typename?: 'ClientUserIntegrationWandb';
  /** Wandb integration account username */
  accountUsername?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  lastUsedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Error response for when user does not have huggingface integration */
export type ClientUserIntegrationWandbDisconnectedError = BaseError & {
  __typename?: 'ClientUserIntegrationWandbDisconnectedError';
  message: Scalars['String']['output'];
};

/** Error response for when user does not have huggingface integration */
export type ClientUserIntegrationWandbNotFoundError = BaseError & {
  __typename?: 'ClientUserIntegrationWandbNotFoundError';
  message: Scalars['String']['output'];
};

/** Response payload for ClientUserIntegration of wandb */
export type ClientUserIntegrationWandbResponse = ClientUserIntegrationWandb | ClientUserIntegrationWandbDisconnectedError | ClientUserIntegrationWandbNotFoundError;

/** User's Intercom Identity */
export type ClientUserIntercomIdentity = {
  __typename?: 'ClientUserIntercomIdentity';
  /** user's external id in Intercom (user_id) */
  externalId: Scalars['String']['output'];
  /** user's hmac (user_hash) */
  hmac: Scalars['String']['output'];
};

/** User personal access token */
export type ClientUserPat = Node & {
  __typename?: 'ClientUserPat';
  /** Timestamp when the key was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Pat id */
  id: Scalars['ID']['output'];
  /** Pat value. Only shown once when creating a new key */
  secretValue?: Maybe<Scalars['String']['output']>;
  /** Pat alias. Used as a hint to the user to identify the key */
  truncatedValue?: Maybe<Scalars['String']['output']>;
};

/** User personal access tokens */
export type ClientUserPatConnection = {
  __typename?: 'ClientUserPatConnection';
  /** Returned registration list */
  edges: Array<ClientUserPatEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of personal access tokens */
  totalCount: Scalars['Int']['output'];
};

/** User personal access tokens */
export type ClientUserPatEdge = {
  __typename?: 'ClientUserPatEdge';
  /** Pat cursor */
  cursor: Scalars['Base64']['output'];
  /** Pat node */
  node: ClientUserPat;
};

/** User product interest choices */
export enum ClientUserProductInterestChoices {
  Container = 'CONTAINER',
  Dedicated = 'DEDICATED',
  Serverless = 'SERVERLESS'
}

/** User state */
export enum ClientUserState {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Invited = 'INVITED',
  Unknown = 'UNKNOWN',
  Verified = 'VERIFIED'
}

/** User status */
export enum ClientUserStatus {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Suspended = 'SUSPENDED',
  Verified = 'VERIFIED'
}

/** User super role */
export enum ClientUserSuperRoleEnum {
  SuperAdmin = 'SUPER_ADMIN',
  SuperContainerAdmin = 'SUPER_CONTAINER_ADMIN',
  SuperReadonlyAdmin = 'SUPER_READONLY_ADMIN'
}

/** User's super-roles */
export type ClientUserSuperRoleList = {
  __typename?: 'ClientUserSuperRoleList';
  roles?: Maybe<Array<ClientUserSuperRoleEnum>>;
};

/** Input for ClientUserSwitchDefaultTeam */
export type ClientUserSwitchDefaultTeamInput = {
  teamId: Scalars['ID']['input'];
  /** User ID. Defaults to current user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** User's default team */
export type ClientUserTeam = {
  __typename?: 'ClientUserTeam';
  /** Team id */
  id: Scalars['ID']['output'];
  joinedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Per-member access is removed */
  productAccess?: Maybe<UserTeamProductAccessInfo>;
  role?: Maybe<ClientTeamMembershipRole>;
  state?: Maybe<Scalars['String']['output']>;
  /** team object */
  team: ClientTeam;
};

/** User's teams */
export type ClientUserTeamConnection = {
  __typename?: 'ClientUserTeamConnection';
  /** Returned teams list */
  edges: Array<ClientUserTeamEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of teams that belongs to the user */
  totalCount: Scalars['Int']['output'];
};

/** User's team */
export type ClientUserTeamEdge = {
  __typename?: 'ClientUserTeamEdge';
  /** Cursor */
  cursor: Scalars['Base64']['output'];
  default?: Maybe<Scalars['Boolean']['output']>;
  joinedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Node */
  node: ClientTeam;
  /** @deprecated Per-member access is removed */
  productAccess?: Maybe<UserTeamProductAccessInfo>;
  role?: Maybe<ClientTeamMembershipRole>;
};

export type ClientUserTeamFiltersInput = {
  /** Filter by joined timestamp */
  joinedDateRange?: InputMaybe<DateRangeInput>;
  productContainerAccess?: InputMaybe<Scalars['Boolean']['input']>;
  productDedicatedAccess?: InputMaybe<Scalars['Boolean']['input']>;
  productServerlessAccess?: InputMaybe<Scalars['Boolean']['input']>;
  roles?: InputMaybe<Array<ClientTeamMembershipRole>>;
  team_NameSearch?: InputMaybe<Scalars['String']['input']>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

export type ClientUserTeamSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: joined_at, role, updated_at, team__name, team__created_at */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Input for ClientUserUpdateHuggingfaceAccount */
export type ClientUserUpdateHuggingfaceAccountInput = {
  /** New Huggingface account token */
  huggingfaceToken: Scalars['String']['input'];
  /** User ID. Defaults to current user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Response payload for ClientUserUpdateHuggingfaceAccount */
export type ClientUserUpdateHuggingfaceAccountResponse = ClientUserHuggingfaceAccountInvalidError | ClientUserHuggingfaceAccountNotFoundError | ClientUserUpdateHuggingfaceAccountSuccess | UserPermissionError;

/** Success response for dedicated team subscription */
export type ClientUserUpdateHuggingfaceAccountSuccess = {
  __typename?: 'ClientUserUpdateHuggingfaceAccountSuccess';
  user: ClientUser;
};

/** Input for ClientUserUpdateLastAccessedAt */
export type ClientUserUpdateLastAccessedAtInput = {
  /** User ID. Defaults to current user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Input for ClientUserUpdateName */
export type ClientUserUpdateNameInput = {
  /** New name */
  name: Scalars['String']['input'];
  /** User ID. Defaults to current user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Input for ClientUserUpdatePassword */
export type ClientUserUpdatePasswordInput = {
  /** Current password */
  currentPassword: Scalars['String']['input'];
  /** New password */
  newPassword: Scalars['String']['input'];
  /** User ID. Defaults to current user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Input for ClientUserUpdateSuperRoles */
export type ClientUserUpdateSuperRolesInput = {
  /** New list of super roles of user */
  superRoles: Array<ClientUserSuperRoleEnum>;
  /** User ID */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Input for ClientUserUpdateWandbAccount */
export type ClientUserUpdateWandbAccountInput = {
  /** User ID. Defaults to current user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
  /** New Wandb account token */
  wandbToken: Scalars['String']['input'];
};

/** Response payload for ClientUserUpdateWandbAccount */
export type ClientUserUpdateWandbAccountResponse = ClientUserUpdateWandbAccountSuccess | ClientUserWandbAccountInvalidError | ClientUserWandbAccountNotFoundError | UserPermissionError;

/** Success response for dedicated team subscription */
export type ClientUserUpdateWandbAccountSuccess = {
  __typename?: 'ClientUserUpdateWandbAccountSuccess';
  user: ClientUser;
};

/** Input for ClientUserValidateHuggingfaceAccount */
export type ClientUserValidateHuggingfaceAccountInput = {
  /** User ID. Defaults to current user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Response payload for ClientUserValidateHuggingfaceAccount */
export type ClientUserValidateHuggingfaceAccountResponse = ClientUserHuggingfaceAccountInvalidError | ClientUserHuggingfaceAccountNotFoundError | ClientUserValidateHuggingfaceAccountSuccess | UserPermissionError;

/** Success response for dedicated team subscription */
export type ClientUserValidateHuggingfaceAccountSuccess = {
  __typename?: 'ClientUserValidateHuggingfaceAccountSuccess';
  user: ClientUser;
};

/** Input for ClientUserValidateWandbAccount */
export type ClientUserValidateWandbAccountInput = {
  /** User ID. Defaults to current user. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** Response payload for ClientUserValidateWandbAccount */
export type ClientUserValidateWandbAccountResponse = ClientUserValidateWandbAccountSuccess | ClientUserWandbAccountInvalidError | ClientUserWandbAccountNotFoundError | UserPermissionError;

/** Success response for dedicated team subscription */
export type ClientUserValidateWandbAccountSuccess = {
  __typename?: 'ClientUserValidateWandbAccountSuccess';
  user: ClientUser;
};

/** Error response when wandb account is already connected to user */
export type ClientUserWandbAccountAlreadyConnectedError = BaseError & {
  __typename?: 'ClientUserWandbAccountAlreadyConnectedError';
  message: Scalars['String']['output'];
};

/** Error response when provided wandb account info is not valid */
export type ClientUserWandbAccountInvalidError = BaseError & {
  __typename?: 'ClientUserWandbAccountInvalidError';
  message: Scalars['String']['output'];
};

/** Error response when wandb account is disconnected from user */
export type ClientUserWandbAccountNotFoundError = BaseError & {
  __typename?: 'ClientUserWandbAccountNotFoundError';
  message: Scalars['String']['output'];
};

/** A image in the container */
export type ContainerImage = {
  __typename?: 'ContainerImage';
  architecture?: Maybe<Scalars['String']['output']>;
  /** Timestamp of when the image was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the image */
  createdBy?: Maybe<ClientUser>;
  digest: Scalars['ID']['output'];
  /** Size of the image in bytes */
  size?: Maybe<Scalars['Int']['output']>;
  /** Image statistics */
  stats?: Maybe<ContainerImageStat>;
  /** Tag this image belongs to */
  tag?: Maybe<ContainerTag>;
};

/** Container repository statistics */
export type ContainerImageStat = {
  __typename?: 'ContainerImageStat';
  downloadCount?: Maybe<Scalars['Int']['output']>;
};

/** A repository in the container */
export type ContainerRepository = {
  __typename?: 'ContainerRepository';
  /** Timestamp of when the repository was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Repository description */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Whether the repository is favorited */
  isFavorited?: Maybe<Scalars['Boolean']['output']>;
  /** Repository name */
  name?: Maybe<Scalars['String']['output']>;
  /** Whether the repository is public */
  public?: Maybe<Scalars['Boolean']['output']>;
  /** Repository statistics */
  stats?: Maybe<ContainerRepositoryStats>;
  /** Tags of the repository */
  tags?: Maybe<ContainerRepositoryTagConnection>;
  /** Team of the user */
  team?: Maybe<ClientTeam>;
  /** Timestamp of when the repository was last updated */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the repository */
  updatedBy?: Maybe<ClientUser>;
};


/** A repository in the container */
export type ContainerRepositoryIsFavoritedArgs = {
  byUser?: InputMaybe<Scalars['ID']['input']>;
};


/** A repository in the container */
export type ContainerRepositoryTagsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
};

/** Client session connection */
export type ContainerRepositoryConnection = {
  __typename?: 'ContainerRepositoryConnection';
  /** Returned registration list */
  edges: Array<ContainerRepository>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of waitlist registrations */
  totalCount: Scalars['Int']['output'];
};

/** Input for ContainerRepositoryCreate */
export type ContainerRepositoryCreateInput = {
  /** New description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** New name */
  name: Scalars['String']['input'];
  /** Organization ID. */
  teamId: Scalars['ID']['input'];
};

/** Input for ContainerRepositoryDelete */
export type ContainerRepositoryDeleteInput = {
  /** Repository ID. */
  repositoryId: Scalars['ID']['input'];
};

/** Success response for container repository deletion */
export type ContainerRepositoryDeleteSuccess = {
  __typename?: 'ContainerRepositoryDeleteSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Input for ContainerRepositoryFavoriteByUser */
export type ContainerRepositoryFavoriteByUserInput = {
  favorite: Scalars['Boolean']['input'];
  /** Repository ID. */
  repositoryId: Scalars['ID']['input'];
  /** User that favorited this repository. Defaults to current logged in user */
  userId: Scalars['ID']['input'];
};

/** Container repository state */
export enum ContainerRepositoryState {
  Created = 'CREATED',
  Deleted = 'DELETED',
  PrivateCreated = 'PRIVATE_CREATED',
  PublicCreated = 'PUBLIC_CREATED',
  Unknown = 'UNKNOWN'
}

/** Container repository statistics */
export type ContainerRepositoryStats = {
  __typename?: 'ContainerRepositoryStats';
  downloadCount?: Maybe<Scalars['Int']['output']>;
};

/** Tags in a Repository */
export type ContainerRepositoryTagConnection = {
  __typename?: 'ContainerRepositoryTagConnection';
  /** Returned registration list */
  edges: Array<ContainerRepositoryTagEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of tags */
  totalCount: Scalars['Int']['output'];
};

/** Tags in a Repository */
export type ContainerRepositoryTagEdge = {
  __typename?: 'ContainerRepositoryTagEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['Base64']['output'];
  /** The item of the edge */
  node: ContainerTag;
};

/** Input for ContainerRepositoryUpdateDescription */
export type ContainerRepositoryUpdateDescriptionInput = {
  /** New description */
  description: Scalars['String']['input'];
  /** Repository ID. */
  repositoryId: Scalars['ID']['input'];
};

/** Friendli Container Product subscription */
export type ContainerSubplan = BaseProductSubplan & {
  __typename?: 'ContainerSubplan';
  /** When the team expires */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** When the team was joined */
  joinedAt?: Maybe<Scalars['DateTime']['output']>;
  /** List of members in the organization */
  members?: Maybe<ContainerSubplanMemberConnection>;
  /** List of repositories in the team */
  repositories?: Maybe<ContainerSubplanRepositoryConnection>;
  /** Team's container secrets. This should return None if team has no container secrets. */
  secrets?: Maybe<ContainerSubplanSecretPair>;
  /** List of serving instances in the team */
  servingInstances?: Maybe<Array<ContainerSubplanServingInstance>>;
  /**
   * Product state
   * @deprecated Use status field instead
   */
  state?: Maybe<ContainerSubplanState>;
  /** Product status */
  status?: Maybe<ContainerSubplanStatus>;
  /** Team */
  team: ClientTeam;
  teamId: Scalars['ID']['output'];
  /**
   * Product tier
   * @deprecated Use status field instead
   */
  tier?: Maybe<ContainerSubplanTier>;
  /** When the team was last updated */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** Friendli Container Product subscription */
export type ContainerSubplanMembersArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
};


/** Friendli Container Product subscription */
export type ContainerSubplanRepositoriesArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<ContainerSubplanRepositoryFiltersInput>;
  sorts?: InputMaybe<ContainerSubplanRepositorySortsInput>;
};

/** Team connection */
export type ContainerSubplanConnection = {
  __typename?: 'ContainerSubplanConnection';
  /** Returned teams */
  edges: Array<ContainerSubplan>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of teams */
  totalCount: Scalars['Int']['output'];
};

export type ContainerSubplanFiltersInput = {
  createdDateRange?: InputMaybe<DateRangeInput>;
  expiresDateRange?: InputMaybe<DateRangeInput>;
  joinedDateRange?: InputMaybe<DateRangeInput>;
  states?: InputMaybe<Array<ContainerSubplanState>>;
  statuses?: InputMaybe<Array<ContainerSubplanStatus>>;
  teamIdSearch?: InputMaybe<Scalars['String']['input']>;
  teamNameSearch?: InputMaybe<Scalars['String']['input']>;
  tiers?: InputMaybe<Array<ContainerSubplanTier>>;
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

/** Users in a Product container */
export type ContainerSubplanMemberConnection = {
  __typename?: 'ContainerSubplanMemberConnection';
  /** Returned registration list */
  edges: Array<ContainerSubplanMemberEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of waitlist registrations */
  totalCount: Scalars['Int']['output'];
};

/** User in a ClientTeam */
export type ContainerSubplanMemberEdge = {
  __typename?: 'ContainerSubplanMemberEdge';
  cursor: Scalars['Base64']['output'];
  node: ClientUser;
};

/** Repositories in a ContainerSubplan */
export type ContainerSubplanRepositoryConnection = {
  __typename?: 'ContainerSubplanRepositoryConnection';
  /** Returned registration list */
  edges: Array<ContainerSubplanRepositoryEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of items */
  totalCount: Scalars['Int']['output'];
};

/** Registry repository edge */
export type ContainerSubplanRepositoryEdge = {
  __typename?: 'ContainerSubplanRepositoryEdge';
  /** Registry repository cursor */
  cursor: Scalars['Base64']['output'];
  /** Registry repository node */
  node: RegistryRepository;
};

export type ContainerSubplanRepositoryFiltersInput = {
  /** Filter by created timestamp */
  createdDateRange?: InputMaybe<DateRangeInput>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  /** Filter by repository state */
  statuses?: InputMaybe<Array<ContainerRepositoryState>>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

export type ContainerSubplanRepositorySortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: created_at, updated_at, name */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Input for ContainerSubplanRevokeSecret */
export type ContainerSubplanRevokeSecretInput = {
  /** Container secret ID */
  secretId: Scalars['ID']['input'];
  /** Team ID */
  teamId: Scalars['ID']['input'];
};

/** Input for ContainerSubplanRotateSecret */
export type ContainerSubplanRotateSecretInput = {
  /** Team ID */
  teamId: Scalars['ID']['input'];
};

export type ContainerSubplanRotateSecretResponse = {
  __typename?: 'ContainerSubplanRotateSecretResponse';
  newSecretValue: Scalars['String']['output'];
  /** Team's container secrets. This should return None if team has no container secrets. */
  secrets?: Maybe<ContainerSubplanSecretPair>;
  statusCode: Scalars['Int']['output'];
};

/** Container secret required to activate a PeriFlow container image */
export type ContainerSubplanSecret = {
  __typename?: 'ContainerSubplanSecret';
  /** Timestamp when the secret expires. Only set if the secret is in revoking state */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Secret's entity ID */
  id: Scalars['ID']['output'];
  /** Timestamp when the secret was last used */
  lastUsed?: Maybe<Scalars['DateTime']['output']>;
  /** Secret's truncated value */
  valueTruncated?: Maybe<Scalars['String']['output']>;
};

/** Error response type for container subplan secret subscription */
export type ContainerSubplanSecretError = {
  __typename?: 'ContainerSubplanSecretError';
  message: Scalars['String']['output'];
};

/** Container secret pair */
export type ContainerSubplanSecretPair = {
  __typename?: 'ContainerSubplanSecretPair';
  /** Current container secret */
  current: ContainerSubplanSecret;
  /** Previous container secret */
  previous?: Maybe<ContainerSubplanSecret>;
};

/** Response type for container subplan secret subscription */
export type ContainerSubplanSecretResponse = {
  __typename?: 'ContainerSubplanSecretResponse';
  secretPair?: Maybe<ContainerSubplanSecretPair>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
};

/** Union of ContainerSubplanSecret */
export type ContainerSubplanSecretResponseUnion = ContainerSubplanSecretError | ContainerSubplanSecretResponse;

/** Container serving instance */
export type ContainerSubplanServingInstance = {
  __typename?: 'ContainerSubplanServingInstance';
  /** Attributes */
  attributes?: Maybe<Scalars['JSON']['output']>;
  /** Timestamp when the instance was created */
  createdAt: Scalars['DateTime']['output'];
  /** GPU type */
  gpuType: Scalars['String']['output'];
  /** Serving instance ID (uuid) */
  id: Scalars['String']['output'];
  /** Timestamp when the instance was last synced */
  lastSyncedAt: Scalars['DateTime']['output'];
  /** Number of devices */
  numDevices?: Maybe<Scalars['Int']['output']>;
  /** NVIDIA driver version */
  nvidiaDriverVersion?: Maybe<Scalars['String']['output']>;
  /** Version */
  version?: Maybe<Scalars['String']['output']>;
};

export type ContainerSubplanSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: joined_at, expires_at, updated_at, status */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Input for ContainerSubplanStartTrial */
export type ContainerSubplanStartTrialInput = {
  /** Team ID */
  teamId: Scalars['ID']['input'];
};

/** Container subscription plan state */
export enum ContainerSubplanState {
  Approved = 'APPROVED',
  Declined = 'DECLINED',
  Expired = 'EXPIRED',
  Unknown = 'UNKNOWN'
}

/** Container subscription plan status */
export enum ContainerSubplanStatus {
  EnterpriseExpired = 'ENTERPRISE_EXPIRED',
  EnterpriseVerified = 'ENTERPRISE_VERIFIED',
  ProExpired = 'PRO_EXPIRED',
  ProVerified = 'PRO_VERIFIED',
  TrialExpired = 'TRIAL_EXPIRED',
  TrialVerified = 'TRIAL_VERIFIED'
}

/** Container subscription plan tier */
export enum ContainerSubplanTier {
  Enterprise = 'ENTERPRISE',
  Trial = 'TRIAL'
}

/** Input for ContainerSubplanUpdateStatus */
export type ContainerSubplanUpdateStatusInput = {
  /** Container subscription Status */
  status: ContainerSubplanStatus;
  /** Team ID */
  teamId: Scalars['ID']['input'];
};

/** Input for ContainerSubplanUpdateTier */
export type ContainerSubplanUpdateTierInput = {
  /** Team ID */
  teamId: Scalars['ID']['input'];
  /** Container Tier */
  tier: ContainerSubplanTier;
};

/** A repository in the registry */
export type ContainerTag = {
  __typename?: 'ContainerTag';
  /** Timestamp of when the repository was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Tag description */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Images of the repository */
  images?: Maybe<ContainerTagImageConnection>;
  /** Tag name */
  name?: Maybe<Scalars['String']['output']>;
  /** Repository of the user */
  repository?: Maybe<ContainerRepository>;
  /** Tag statistics */
  stats?: Maybe<ContainerTagStats>;
  /** Timestamp of when the repository was last updated */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the repository */
  updatedBy?: Maybe<ClientUser>;
};


/** A repository in the registry */
export type ContainerTagImagesArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
};

/** Input for ContainerTagCreate */
export type ContainerTagCreateInput = {
  /** Tag description. */
  description: Scalars['String']['input'];
  /** New name */
  name: Scalars['String']['input'];
  /** Repository ID. */
  repositoryId: Scalars['ID']['input'];
};

/** Input for ContainerTagDelete */
export type ContainerTagDeleteInput = {
  /** Tag ID. */
  tagId: Scalars['ID']['input'];
};

/** Images in a Tag */
export type ContainerTagImageConnection = {
  __typename?: 'ContainerTagImageConnection';
  /** Returned registration list */
  edges: Array<ContainerTagImageEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of waitlist registrations */
  totalCount: Scalars['Int']['output'];
};

/** Images in a Tag */
export type ContainerTagImageEdge = {
  __typename?: 'ContainerTagImageEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['Base64']['output'];
  node: ContainerImage;
};

/** Container tag statistics */
export type ContainerTagStats = {
  __typename?: 'ContainerTagStats';
  downloadCount?: Maybe<Scalars['Int']['output']>;
};

/** Input for ContainerTagUpdateDescription */
export type ContainerTagUpdateDescriptionInput = {
  /** New description */
  description: Scalars['String']['input'];
  /** Tag ID. */
  tagId: Scalars['ID']['input'];
};

export type CostBreakdown = {
  __typename?: 'CostBreakdown';
  /** Input tokens cost */
  inputTokens?: Maybe<Scalars['Decimal']['output']>;
  /** Output tokens cost */
  outputTokens?: Maybe<Scalars['Decimal']['output']>;
  /** Total cost */
  total?: Maybe<Scalars['Decimal']['output']>;
};

export type CostBreakdownTimeSeries = {
  __typename?: 'CostBreakdownTimeSeries';
  data: Array<CostBreakdownTimeSeriesObservation>;
};

export type CostBreakdownTimeSeriesObservation = {
  __typename?: 'CostBreakdownTimeSeriesObservation';
  timestamp: Scalars['DateTime']['output'];
  values: CostBreakdown;
};

/** Date range input with possible unbounded start/end */
export type DateRangeInput = {
  end?: InputMaybe<Scalars['DateTime']['input']>;
  start?: InputMaybe<Scalars['DateTime']['input']>;
};

/** DedicatedAdapter workload */
export type DedicatedAdapter = Node & {
  __typename?: 'DedicatedAdapter';
  /** Timestamp when the adapter was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** DedicatedFinetuning workload that this adapter originates from */
  finetuning?: Maybe<DedicatedFinetuning>;
  id: Scalars['ID']['output'];
  /** Adapter model name */
  name?: Maybe<Scalars['String']['output']>;
};

/** Upload info for a dedicated adapter */
export type DedicatedAdapterBlobUploadInfo = {
  __typename?: 'DedicatedAdapterBlobUploadInfo';
  required: Scalars['Boolean']['output'];
};

/** Upload plan for a dedicated adapter */
export type DedicatedAdapterUploadPlan = {
  __typename?: 'DedicatedAdapterUploadPlan';
  adapterConfig: DedicatedAdapterBlobUploadInfo;
  safetensors: Array<DedicatedAdapterBlobUploadInfo>;
  tokenizerConfig?: Maybe<DedicatedAdapterBlobUploadInfo>;
};

/** Upload info for a dedicated dataset */
export type DedicatedDatasetBlobUploadInfo = {
  __typename?: 'DedicatedDatasetBlobUploadInfo';
  required: Scalars['Boolean']['output'];
};

/** Chat variant of dedicated dataset */
export type DedicatedDatasetChat = DedicatedDatasetInterface & Node & {
  __typename?: 'DedicatedDatasetChat';
  /** Timestamp when the dataset was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who created the dataset */
  createdBy?: Maybe<ClientUser>;
  /** List of finetunings created with the dataset */
  finetunings?: Maybe<DedicatedDatasetFinetuningConnection>;
  id: Scalars['ID']['output'];
  /** Name of the dataset */
  name?: Maybe<Scalars['String']['output']>;
  /** Chat dataset samples */
  samples?: Maybe<Scalars['JSON']['output']>;
  /** DedicatedFinetuning status */
  status?: Maybe<DedicatedDatasetStatus>;
  /** Timestamp when the dataset was updated */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** Chat variant of dedicated dataset */
export type DedicatedDatasetChatFinetuningsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedDatasetFinetuningFiltersInput>;
  sorts?: InputMaybe<DedicatedDatasetFinetuningSortsInput>;
};

/** Error response for when file already exists in the project. */
export type DedicatedDatasetCommitChunkGroupAlreadyExistError = BaseError & {
  __typename?: 'DedicatedDatasetCommitChunkGroupAlreadyExistError';
  message: Scalars['String']['output'];
};

/** Input for DedicatedDatasetCommitChunkGroup */
export type DedicatedDatasetCommitChunkGroupInput = {
  /** ID of the chunk group */
  chunkGroupId: Scalars['String']['input'];
  /** ID of the dataset to push */
  datasetId: Scalars['String']['input'];
  /** File descriptor input */
  fileInput: FileDescriptorInput;
};

/** Response payload for DedicatedDatasetCommitChunkGroup */
export type DedicatedDatasetCommitChunkGroupResponse = DedicatedDatasetCommitChunkGroupAlreadyExistError | DedicatedDatasetCommitChunkGroupSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for dataset creation in dedicated team */
export type DedicatedDatasetCommitChunkGroupSuccess = {
  __typename?: 'DedicatedDatasetCommitChunkGroupSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Dataset connection */
export type DedicatedDatasetConnection = {
  __typename?: 'DedicatedDatasetConnection';
  /** Returned items */
  edges: Array<DedicatedDatasetInterface>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of teams */
  totalCount: Scalars['Int']['output'];
};

/** Error response for when file already exists in the project. */
export type DedicatedDatasetCreateChunkGroupAlreadyExistError = BaseError & {
  __typename?: 'DedicatedDatasetCreateChunkGroupAlreadyExistError';
  message: Scalars['String']['output'];
};

/** Input for DedicatedDatasetCreateChunkGroup */
export type DedicatedDatasetCreateChunkGroupInput = {
  /** ID of the dataset to push */
  datasetId: Scalars['String']['input'];
  /** File descriptor input */
  fileInput: FileDescriptorInput;
};

/** Response payload for DedicatedDatasetCreateChunkGroup */
export type DedicatedDatasetCreateChunkGroupResponse = DedicatedDatasetCreateChunkGroupAlreadyExistError | DedicatedDatasetCreateChunkGroupSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for dataset creation in dedicated team */
export type DedicatedDatasetCreateChunkGroupSuccess = {
  __typename?: 'DedicatedDatasetCreateChunkGroupSuccess';
  chunkGroupId: Scalars['String']['output'];
};

export type DedicatedDatasetFiltersInput = {
  createdDateRange?: InputMaybe<DateRangeInput>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

/** DedicatedFinetunings */
export type DedicatedDatasetFinetuningConnection = {
  __typename?: 'DedicatedDatasetFinetuningConnection';
  /** Returned deployments list */
  edges: Array<DedicatedDatasetFinetuningEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of deployments */
  totalCount: Scalars['Int']['output'];
};

/** DedicatedFinetunings in a project */
export type DedicatedDatasetFinetuningEdge = {
  __typename?: 'DedicatedDatasetFinetuningEdge';
  /** DedicatedFinetuning cursor */
  cursor: Scalars['Base64']['output'];
  /** DedicatedFinetuning node */
  node: DedicatedFinetuning;
};

export type DedicatedDatasetFinetuningFiltersInput = {
  /** Filter by created timestamp */
  createdDateRange?: InputMaybe<DateRangeInput>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  /** Filter by project state */
  states?: InputMaybe<Array<DedicatedFinetuningStatus>>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

export type DedicatedDatasetFinetuningSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: created_at, updated_at, name, status */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** DedicatedDataset interface */
export type DedicatedDatasetInterface = {
  /** Timestamp when the dataset was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who created the dataset */
  createdBy?: Maybe<ClientUser>;
  /** List of finetunings created with the dataset */
  finetunings?: Maybe<DedicatedDatasetFinetuningConnection>;
  id: Scalars['ID']['output'];
  /** Name of the dataset */
  name?: Maybe<Scalars['String']['output']>;
  /** DedicatedFinetuning status */
  status?: Maybe<DedicatedDatasetStatus>;
  /** Timestamp when the dataset was updated */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** DedicatedDataset interface */
export type DedicatedDatasetInterfaceFinetuningsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedDatasetFinetuningFiltersInput>;
  sorts?: InputMaybe<DedicatedDatasetFinetuningSortsInput>;
};

/** Input for DedicatedDatasetPushChatComplete */
export type DedicatedDatasetPushChatCompleteInput = {
  /** ID of the dataset to push */
  datasetId: Scalars['String']['input'];
  /** Model structure to push */
  datasetStructure: ChatDatasetCreateInput;
  /** Is dataset validated */
  isValidated?: InputMaybe<Scalars['Boolean']['input']>;
  /** Dataset samples */
  samples?: InputMaybe<Scalars['JSON']['input']>;
};

/** Response payload for DedicatedDatasetPushChatComplete */
export type DedicatedDatasetPushChatCompleteResponse = DedicatedDatasetPushChatCompleteSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for dataset creation in dedicated team */
export type DedicatedDatasetPushChatCompleteSuccess = {
  __typename?: 'DedicatedDatasetPushChatCompleteSuccess';
  dataset: DedicatedDatasetInterface;
};

/** Input for DedicatedDatasetPushChatStart */
export type DedicatedDatasetPushChatStartInput = {
  /** Model structure to push */
  datasetStructure: ChatDatasetCreateInput;
  /** Name of the dataset. Auto-generated if null */
  name?: InputMaybe<Scalars['String']['input']>;
  /** ID of the project to register the dataset to */
  projectId: Scalars['ID']['input'];
};

/** Response payload for DedicatedDatasetPushChatStart */
export type DedicatedDatasetPushChatStartResponse = DedicatedDatasetPushChatStartSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for dataset creation in dedicated team */
export type DedicatedDatasetPushChatStartSuccess = {
  __typename?: 'DedicatedDatasetPushChatStartSuccess';
  dataset: DedicatedDatasetInterface;
  uploadPlan: DedicatedDatasetUploadPlan;
};

/** Input for DedicatedDatasetPushChunkComplete */
export type DedicatedDatasetPushChunkCompleteInput = {
  /** ID of the dataset to push */
  datasetId: Scalars['String']['input'];
  /** File descriptor input */
  fileInput: FileChunkCompleteInput;
};

/** Response payload for DedicatedDatasetPushChunkComplete */
export type DedicatedDatasetPushChunkCompleteResponse = DedicatedDatasetPushChunkCompleteSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for dataset creation in dedicated team */
export type DedicatedDatasetPushChunkCompleteSuccess = {
  __typename?: 'DedicatedDatasetPushChunkCompleteSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Error response for when file already exists in the project. */
export type DedicatedDatasetPushChunkStartAlreadyExistError = BaseError & {
  __typename?: 'DedicatedDatasetPushChunkStartAlreadyExistError';
  message: Scalars['String']['output'];
};

/** Input for DedicatedDatasetPushChunkStart */
export type DedicatedDatasetPushChunkStartInput = {
  /** ID of the dataset to push */
  datasetId: Scalars['String']['input'];
  /** File descriptor input */
  fileInput: FileChunkInput;
};

/** Response payload for DedicatedDatasetPushChunkStart */
export type DedicatedDatasetPushChunkStartResponse = DedicatedDatasetPushChunkStartAlreadyExistError | DedicatedDatasetPushChunkStartSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for dataset creation in dedicated team */
export type DedicatedDatasetPushChunkStartSuccess = {
  __typename?: 'DedicatedDatasetPushChunkStartSuccess';
  uploadUrl: Scalars['String']['output'];
};

/** Input for DedicatedDatasetPushFileComplete */
export type DedicatedDatasetPushFileCompleteInput = {
  /** ID of the dataset to push */
  datasetId: Scalars['String']['input'];
  /** File descriptor input */
  fileInput: FileDescriptorInput;
};

/** Response payload for DedicatedDatasetPushFileComplete */
export type DedicatedDatasetPushFileCompleteResponse = DedicatedDatasetPushFileCompleteSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for dataset creation in dedicated team */
export type DedicatedDatasetPushFileCompleteSuccess = {
  __typename?: 'DedicatedDatasetPushFileCompleteSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Error response for when file already exists in the project. */
export type DedicatedDatasetPushFileStartAlreadyExistError = BaseError & {
  __typename?: 'DedicatedDatasetPushFileStartAlreadyExistError';
  message: Scalars['String']['output'];
};

/** Input for DedicatedDatasetPushFileStart */
export type DedicatedDatasetPushFileStartInput = {
  /** ID of the dataset to push */
  datasetId: Scalars['String']['input'];
  /** File descriptor input */
  fileInput: FileDescriptorInput;
};

/** Response payload for DedicatedDatasetPushFileStart */
export type DedicatedDatasetPushFileStartResponse = DedicatedDatasetPushFileStartAlreadyExistError | DedicatedDatasetPushFileStartSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for dataset creation in dedicated team */
export type DedicatedDatasetPushFileStartSuccess = {
  __typename?: 'DedicatedDatasetPushFileStartSuccess';
  uploadInfo: FileUploadInfo;
};

/** Status of a dataset. */
export enum DedicatedDatasetStatus {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Failed = 'FAILED',
  Uploading = 'UPLOADING',
  Validating = 'VALIDATING'
}

/** Input for DedicatedDatasetUpdateName */
export type DedicatedDatasetUpdateNameInput = {
  /** Dataset ID. */
  datasetId: Scalars['ID']['input'];
  /** New name */
  name: Scalars['String']['input'];
};

/** Upload plan for a dedicated dataset */
export type DedicatedDatasetUploadPlan = {
  __typename?: 'DedicatedDatasetUploadPlan';
  trainSplit: DedicatedDatasetBlobUploadInfo;
  validationSplit?: Maybe<DedicatedDatasetBlobUploadInfo>;
};

/** DedicatedDocument workload */
export type DedicatedDocument = Node & {
  __typename?: 'DedicatedDocument';
  /** Timestamp when the document was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the document */
  createdBy?: Maybe<ClientUser>;
  /** File Download URL */
  downloadUrl?: Maybe<Scalars['URL']['output']>;
  id: Scalars['ID']['output'];
  /** Metadata of the document */
  metadata?: Maybe<DedicatedDocumentMetadata>;
  /** Name of the document */
  name?: Maybe<Scalars['String']['output']>;
  /** Phase of the job */
  phase?: Maybe<DedicatedDocumentPhase>;
  /** DedicatedDocument status */
  status?: Maybe<DedicatedDocumentStatus>;
  /** Timestamp when the document was updated */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Input for DedicatedDocumentCompleteUpload */
export type DedicatedDocumentCompleteUploadInput = {
  documentId: Scalars['ID']['input'];
};

/** Response payload for DedicatedDocumentCompleteUpload */
export type DedicatedDocumentCompleteUploadResponse = DedicatedDocumentCompleteUploadSuccess | TeamNotExistError | UserPermissionError;

/** Success response for dedicated document creation with HF */
export type DedicatedDocumentCompleteUploadSuccess = {
  __typename?: 'DedicatedDocumentCompleteUploadSuccess';
  document: DedicatedDocument;
};

export type DedicatedDocumentCreateMetadataInput = {
  digest: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  size: Scalars['Int']['input'];
};

/** Response payload for DedicatedDocumentCreate */
export type DedicatedDocumentCreateResponse = DedicatedDocumentCreateSuccess | TeamNotExistError | UserPermissionError;

/** Success response for dedicated document creation with HF */
export type DedicatedDocumentCreateSuccess = {
  __typename?: 'DedicatedDocumentCreateSuccess';
  document: DedicatedDocument;
  uploadInfo?: Maybe<FileUploadInfo>;
};

/** Input for DedicatedDocumentDelete */
export type DedicatedDocumentDeleteInput = {
  documentId: Scalars['String']['input'];
};

/** Response payload for DedicatedDocumentDelete */
export type DedicatedDocumentDeleteResponse = DedicatedDocumentDeleteSuccess | TeamNotExistError | UserPermissionError;

/** Success response for dedicated document creation with HF */
export type DedicatedDocumentDeleteSuccess = {
  __typename?: 'DedicatedDocumentDeleteSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Input for DedicatedDocumentInitializeUpload */
export type DedicatedDocumentInitializeUploadInput = {
  metadata: DedicatedDocumentCreateMetadataInput;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['ID']['input'];
};

/** File metadata of a dedicated document */
export type DedicatedDocumentMetadata = {
  __typename?: 'DedicatedDocumentMetadata';
  digest?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
};

/** Document Phase */
export type DedicatedDocumentPhase = DedicatedDocumentPhaseCreated | DedicatedDocumentPhaseDeleted | DedicatedDocumentPhaseProcessing | DedicatedDocumentPhaseUploading;

/** Created phase of a dedicated endpoint */
export type DedicatedDocumentPhaseCreated = BaseDedicatedDocumentPhase & {
  __typename?: 'DedicatedDocumentPhaseCreated';
  msg: Scalars['String']['output'];
};

/** Deleted phase of a dedicated endpoint */
export type DedicatedDocumentPhaseDeleted = BaseDedicatedDocumentPhase & {
  __typename?: 'DedicatedDocumentPhaseDeleted';
  msg: Scalars['String']['output'];
};

/** Processing phase of a dedicated endpoint */
export type DedicatedDocumentPhaseProcessing = BaseDedicatedDocumentPhase & {
  __typename?: 'DedicatedDocumentPhaseProcessing';
  msg: Scalars['String']['output'];
  step: DedicatedDocumentProcessingPhaseStep;
};

/** Uploading phase of a dedicated endpoint */
export type DedicatedDocumentPhaseUploading = BaseDedicatedDocumentPhase & {
  __typename?: 'DedicatedDocumentPhaseUploading';
  msg: Scalars['String']['output'];
  percentage: Scalars['Float']['output'];
  total: Scalars['String']['output'];
  uploaded: Scalars['String']['output'];
};

/** Phase of document processing. */
export enum DedicatedDocumentProcessingPhaseStep {
  Enqueued = 'ENQUEUED',
  Processing = 'PROCESSING',
  Uploading = 'UPLOADING'
}

/** Status of document */
export enum DedicatedDocumentStatus {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Failed = 'FAILED',
  Processing = 'PROCESSING',
  Unknown = 'UNKNOWN',
  Uploading = 'UPLOADING'
}

/** Input for DedicatedDocumentUpdateUploadProgress */
export type DedicatedDocumentUpdateUploadProgressInput = {
  documentId: Scalars['ID']['input'];
  uploadedBytes: Scalars['Int']['input'];
};

/** DedicatedEndpoint workload */
export type DedicatedEndpoint = Node & {
  __typename?: 'DedicatedEndpoint';
  /** LoRA adapters */
  adapters?: Maybe<Array<DedicatedEndpointLoraAdapter>>;
  /** Administrative configuration */
  administrativeConfig?: Maybe<DedicatedEndpointAdministrativeConfig>;
  /** Advanced configuration */
  advancedConfig?: Maybe<DedicatedEndpointAdvancedConfig>;
  /** Auto scaling configuration */
  autoscaleConfig?: Maybe<DedicatedEndpointAutoscaleConfig>;
  /** Timestamp when the deployment was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the deployment */
  createdBy?: Maybe<ClientUser>;
  currentVersion?: Maybe<DedicatedEndpointVersion>;
  /** URL of the DedicatedEndpoint */
  endpointUrl?: Maybe<Scalars['String']['output']>;
  /**
   * GPU Type
   * @deprecated Use `instance` field instead.
   */
  gpuType?: Maybe<Scalars['String']['output']>;
  /** Whether the model has tokenizer */
  hasTokenizer?: Maybe<Scalars['Boolean']['output']>;
  /** HF Model Repository */
  hfModelRepo?: Maybe<Scalars['String']['output']>;
  /** HF Model Repository Revision */
  hfModelRepoRevision?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Instance that this endpoint uses */
  instance?: Maybe<DedicatedInstanceV2>;
  /** Log history */
  logHistory?: Maybe<DedicatedEndpointLogHistory>;
  /** Metric series */
  metricSeries?: Maybe<DedicatedEndpointMetricSeries>;
  /** Metric summary */
  metricSummary?: Maybe<DedicatedEndpointMetricSummary>;
  /** Model */
  model?: Maybe<DedicatedModel>;
  /** Model info */
  modelInfo?: Maybe<DedicatedEndpointModelInfoApiResponseObj>;
  /** Whether the model supports chat */
  modelSupportsChat?: Maybe<Scalars['Boolean']['output']>;
  /** Name of the deployment */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Number of GPUs
   * @deprecated Use `instance` field instead.
   */
  numGpu?: Maybe<Scalars['Int']['output']>;
  /** Phase of the job */
  phase?: Maybe<DedicatedEndpointPhase>;
  /** Project ID */
  project?: Maybe<Scalars['String']['output']>;
  /** Simple scaling configuration */
  simplescaleConfig?: Maybe<DedicatedEndpointSimplescaleConfig>;
  /** Name of the single adapter if exists */
  singleAdapter?: Maybe<DedicatedAdapter>;
  /** Name of the single adapter if exists. To be deprecated */
  singleAdapterName?: Maybe<Scalars['String']['output']>;
  /** DedicatedEndpoint status */
  status?: Maybe<DedicatedEndpointStatus>;
  /** Type of the DedicatedEndpoint */
  type?: Maybe<DedicatedEndpointType>;
  /** Timestamp when the deployment was updated */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatingVersion?: Maybe<DedicatedEndpointVersion>;
  /** Usage series */
  usageSeries?: Maybe<DedicatedEndpointUsageSeries>;
  /** Usage summary */
  usageSummary?: Maybe<DedicatedEndpointUsageSummary>;
  /** List of versions in the endpoint */
  versions?: Maybe<DedicatedEndpointVersionConnection>;
  /**
   * Region of the VM
   * @deprecated Use `instance` field instead.
   */
  vmRegion?: Maybe<Scalars['String']['output']>;
  /** Fully qualified W&B model name (including version) */
  wandbArtifactFullName?: Maybe<Scalars['String']['output']>;
};


/** DedicatedEndpoint workload */
export type DedicatedEndpointLogHistoryArgs = {
  adapterId?: InputMaybe<Scalars['ID']['input']>;
  adapterType?: InputMaybe<DedicatedEndpointAdapterFilterType>;
};


/** DedicatedEndpoint workload */
export type DedicatedEndpointMetricSeriesArgs = {
  adapterId?: InputMaybe<Scalars['ID']['input']>;
  adapterType?: InputMaybe<DedicatedEndpointAdapterFilterType>;
};


/** DedicatedEndpoint workload */
export type DedicatedEndpointUsageSeriesArgs = {
  adapterId?: InputMaybe<Scalars['ID']['input']>;
  adapterType?: InputMaybe<DedicatedEndpointAdapterFilterType>;
};


/** DedicatedEndpoint workload */
export type DedicatedEndpointVersionsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedEndpointVersionFiltersInput>;
};

/** An inference access log for a dedicated endpoint */
export type DedicatedEndpointAccessLog = {
  __typename?: 'DedicatedEndpointAccessLog';
  /** Request duration of the log */
  duration: Scalars['Float']['output'];
  /** Request method of the log */
  method: Scalars['String']['output'];
  /** Request id of the log */
  requestId: Scalars['String']['output'];
  /** Request status of the log */
  status: Scalars['Int']['output'];
  /** Timestamp of the log */
  timestamp: Scalars['DateTime']['output'];
};

/** DedicatedEndpointAdapterBinding */
export type DedicatedEndpointAdapterBinding = {
  __typename?: 'DedicatedEndpointAdapterBinding';
  /** Name of the adapter */
  id: Scalars['String']['output'];
  /** Adapter name */
  name?: Maybe<Scalars['String']['output']>;
  /** Adapter route */
  route: Scalars['String']['output'];
};

/** Adatper filter type */
export enum DedicatedEndpointAdapterFilterType {
  Adapter = 'ADAPTER',
  All = 'ALL',
  Backbone = 'BACKBONE'
}

/** administrative configuration for a dedicated endpoint */
export type DedicatedEndpointAdministrativeConfig = {
  __typename?: 'DedicatedEndpointAdministrativeConfig';
  /** Scalein factor */
  autoscalingScaleinFactor?: Maybe<Scalars['Float']['output']>;
  /** Scaleout factor */
  autoscalingScaleoutFactor?: Maybe<Scalars['Float']['output']>;
  /** Engine image overrice */
  engineImageOverride?: Maybe<Scalars['String']['output']>;
  /** Administrative launch config */
  extraConfigs?: Maybe<Scalars['JSON']['output']>;
};

export type DedicatedEndpointAdministrativeConfigInput = {
  /** Scalein factor */
  autoscalingScaleinFactor?: InputMaybe<Scalars['Float']['input']>;
  /** Scaleout factor */
  autoscalingScaleoutFactor?: InputMaybe<Scalars['Float']['input']>;
  /** Engine image override */
  engineImageOverride?: InputMaybe<Scalars['String']['input']>;
  /** Extra runtime configurations */
  extraConfigs?: InputMaybe<Scalars['JSON']['input']>;
};

/** advanced configuration for a dedicated endpoint */
export type DedicatedEndpointAdvancedConfig = {
  __typename?: 'DedicatedEndpointAdvancedConfig';
  /** cooldown in seconds for autoscaling */
  autoscalingCooldown?: Maybe<Scalars['Int']['output']>;
  autoscalingMax?: Maybe<Scalars['Int']['output']>;
  autoscalingMin?: Maybe<Scalars['Int']['output']>;
  /** Whether or not endpoint has content logging enabled */
  enableContentLogging?: Maybe<Scalars['Boolean']['output']>;
  /** max number of items that can be processed at once */
  maxBatchSize?: Maybe<Scalars['Int']['output']>;
  /** max input length. */
  maxInputLength?: Maybe<Scalars['Int']['output']>;
  /** Whether or not to add special tokens in tokenization. Equivalent to Hugging Face Tokenizer's `add_special_tokens` argument. */
  tokenizerAddSpecialTokens?: Maybe<Scalars['Boolean']['output']>;
  /** Whether or not to remove special tokens in de-tokenization. Equivalent to Hugging Face Tokenizer's skip_special_tokens argument. */
  tokenizerSkipSpecialTokens?: Maybe<Scalars['Boolean']['output']>;
};

export type DedicatedEndpointAdvancedConfigInput = {
  /** Whether to enable content logging */
  enableContentLogging?: InputMaybe<Scalars['Boolean']['input']>;
  /** max number of items that can be processed at once */
  maxBatchSize?: Scalars['Int']['input'];
  /** max input length. */
  maxInputLength?: InputMaybe<Scalars['Int']['input']>;
  /** Whether or not to add special tokens in tokenization. Equivalent to Hugging Face Tokenizer's `add_special_tokens` argument. */
  tokenizerAddSpecialTokens?: Scalars['Boolean']['input'];
  /** Whether or not to remove special tokens in de-tokenization. Equivalent to Hugging Face Tokenizer's skip_special_tokens argument. */
  tokenizerSkipSpecialTokens?: Scalars['Boolean']['input'];
};

/** Auto scaling configuration for a dedicated endpoint */
export type DedicatedEndpointAutoscaleConfig = {
  __typename?: 'DedicatedEndpointAutoscaleConfig';
  /** cooldown in seconds for autoscaling */
  autoscalingCooldown: Scalars['Int']['output'];
  autoscalingMax: Scalars['Int']['output'];
  autoscalingMin: Scalars['Int']['output'];
};

export type DedicatedEndpointAutoscaleConfigInput = {
  /** cooldown in seconds for autoscaling */
  autoscalingCooldown?: Scalars['Int']['input'];
  autoscalingMax: Scalars['Int']['input'];
  autoscalingMin: Scalars['Int']['input'];
};

/** Input for DedicatedEndpointAwake */
export type DedicatedEndpointAwakeInput = {
  endpointId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};

/** Endpoint awake failed due to internal server error */
export type DedicatedEndpointAwakeInternalError = BaseError & {
  __typename?: 'DedicatedEndpointAwakeInternalError';
  message: Scalars['String']['output'];
};

/** Endpoint has wrong precondition status */
export type DedicatedEndpointAwakeInvalidStatusError = BaseError & {
  __typename?: 'DedicatedEndpointAwakeInvalidStatusError';
  message: Scalars['String']['output'];
};

/** Response payload for DedicatedEndpointAwake */
export type DedicatedEndpointAwakeResponse = DedicatedEndpointAwakeInternalError | DedicatedEndpointAwakeInvalidStatusError | DedicatedEndpointAwakeSuccess | DedicatedEndpointNotExistError | DedicatedEndpointResourceLimitExceeded | TeamNotExistError | UserPermissionError;

/** Success response for dedicated endpoint termination */
export type DedicatedEndpointAwakeSuccess = {
  __typename?: 'DedicatedEndpointAwakeSuccess';
  endpoint: DedicatedEndpoint;
};

/** Phase of Endpoint. */
export enum DedicatedEndpointAwakingPhaseStep {
  DownloadingModel = 'DOWNLOADING_MODEL',
  EngineInitializing = 'ENGINE_INITIALIZING',
  RequestingVirtualMachine = 'REQUESTING_VIRTUAL_MACHINE'
}

export type DedicatedEndpointCancelUpdateError = {
  errorKind: DedicatedEndpointCancelUpdateErrorKind;
  message: Scalars['String']['output'];
};

export enum DedicatedEndpointCancelUpdateErrorKind {
  NoUpdateToCancel = 'NO_UPDATE_TO_CANCEL',
  UpdateProcessedBeyondCancellation = 'UPDATE_PROCESSED_BEYOND_CANCELLATION'
}

/** Input for DedicatedEndpointCancelUpdate */
export type DedicatedEndpointCancelUpdateInput = {
  /** Name of the endpoint */
  endpointId: Scalars['String']['input'];
  /** ID of the project */
  projectId: Scalars['ID']['input'];
  /** ID of the team */
  teamId: Scalars['ID']['input'];
};

/** Response payload for DedicatedEndpointCancelUpdate */
export type DedicatedEndpointCancelUpdateResponse = DedicatedEndpointCancelUpdateSuccess | DedicatedEndpointNoUpdateToCancelError | DedicatedEndpointVersionProcessedTooFarToCancelError | TeamNotExistError | UserPermissionError;

/** Success response for dedicated endpoint cancel update */
export type DedicatedEndpointCancelUpdateSuccess = {
  __typename?: 'DedicatedEndpointCancelUpdateSuccess';
  cancelledVersion: Scalars['String']['output'];
  /** @deprecated use cancelledVersion instead */
  cancelledVersionNumber: Scalars['Int']['output'];
};

/** Changing GPU type is not allowed */
export type DedicatedEndpointCannotUpdateGpuType = BaseError & DedicatedEndpointRolloutError & {
  __typename?: 'DedicatedEndpointCannotUpdateGPUType';
  errorKind: DedicatedEndpointRolloutErrorKind;
  message: Scalars['String']['output'];
};

/** Endpoint connection */
export type DedicatedEndpointConnection = {
  __typename?: 'DedicatedEndpointConnection';
  /** Returned teams */
  edges: Array<DedicatedEndpoint>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of teams */
  totalCount: Scalars['Int']['output'];
};

/** An inference content log for a dedicated endpoint */
export type DedicatedEndpointContentLog = {
  __typename?: 'DedicatedEndpointContentLog';
  /** Request ID of the log */
  requestId: Scalars['String']['output'];
  /** Request json line of the log */
  requestLine: Scalars['String']['output'];
  /** Response json line of the log */
  responseLine: Scalars['String']['output'];
  /** Timestamp of the log */
  timestamp: Scalars['DateTime']['output'];
};

export type DedicatedEndpointCreateEnterpriseConfigInput = {
  /** Endpoint bill type for enterprises */
  type?: InputMaybe<DedicatedEndpointType>;
};

/** Input for DedicatedEndpointCreate */
export type DedicatedEndpointCreateInput = {
  contentLogging?: InputMaybe<Scalars['String']['input']>;
  endpointAdvancedConfig?: InputMaybe<DedicatedEndpointAdvancedConfigInput>;
  enterpriseConfig?: InputMaybe<DedicatedEndpointCreateEnterpriseConfigInput>;
  hfAccessToken?: InputMaybe<Scalars['String']['input']>;
  instanceOptionId: Scalars['ID']['input'];
  instanceRegion?: InputMaybe<Scalars['String']['input']>;
  modelRepo?: InputMaybe<Scalars['String']['input']>;
  modelRepoRevision?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
  scaleConfig: DedicatedEndpointCreateScaleConfigInput;
  singleLoraConfig?: InputMaybe<DedicatedEndpointCreateWithHfSingleLoraConfigInput>;
  teamId: Scalars['ID']['input'];
  wandbArtifactFullName?: InputMaybe<Scalars['String']['input']>;
};

/** Response payload for DedicatedEndpointCreate */
export type DedicatedEndpointCreateResponse = DedicatedEndpointCreateSuccess | DedicatedEndpointCreateTokenAuthorizationError | DedicatedEndpointCreateTokenGatedModelError | DedicatedEndpointInvalidAutoscaleOptionError | DedicatedEndpointMultipleScalingOptionsError | DedicatedEndpointNoScalingOptionError | DedicatedEndpointResourceLimitExceeded | TeamNotExistError | UserPermissionError;

export type DedicatedEndpointCreateScaleConfigInput = {
  auto?: InputMaybe<DedicatedEndpointAutoscaleConfigInput>;
  simple?: InputMaybe<DedicatedEndpointSimplescaleConfigInput>;
};

/** Success response for dedicated endpoint creation with HF */
export type DedicatedEndpointCreateSuccess = {
  __typename?: 'DedicatedEndpointCreateSuccess';
  endpoint: DedicatedEndpoint;
};

/** Error response for when user does not have permission to access huggingface model */
export type DedicatedEndpointCreateTokenAuthorizationError = BaseError & {
  __typename?: 'DedicatedEndpointCreateTokenAuthorizationError';
  message: Scalars['String']['output'];
};

/** User must earn permission to the gated model to access */
export type DedicatedEndpointCreateTokenGatedModelError = BaseError & {
  __typename?: 'DedicatedEndpointCreateTokenGatedModelError';
  message: Scalars['String']['output'];
};

export type DedicatedEndpointCreateWithHfAdapterConfigInput = {
  /** ID of the dedicated adapter */
  id: Scalars['ID']['input'];
  /** adapter serving path */
  name: Scalars['String']['input'];
};

export type DedicatedEndpointCreateWithHfEnterpriseConfigInput = {
  /** Endpoint bill type for enterprises */
  type?: InputMaybe<DedicatedEndpointType>;
};

/** Input for DedicatedEndpointCreateWithHf */
export type DedicatedEndpointCreateWithHfInput = {
  administrativeConfig?: InputMaybe<DedicatedEndpointAdministrativeConfigInput>;
  autoscaleConfig?: InputMaybe<DedicatedEndpointAutoscaleConfigInput>;
  /** Comment on new vesrion */
  comment?: InputMaybe<Scalars['String']['input']>;
  endpointAdvancedConfig?: InputMaybe<DedicatedEndpointAdvancedConfigInput>;
  /** Enterprise configuration */
  enterpriseConfig?: InputMaybe<DedicatedEndpointCreateWithHfEnterpriseConfigInput>;
  /** HuggingFace access token */
  hfAccessToken?: InputMaybe<Scalars['String']['input']>;
  /** ID of the instance option */
  instanceOptionId: Scalars['ID']['input'];
  /** Native Model ID */
  modelId?: InputMaybe<Scalars['String']['input']>;
  /** HuggingFace Model repository */
  modelRepo?: InputMaybe<Scalars['String']['input']>;
  /** HuggingFace Model repository revision */
  modelRepoRevision?: InputMaybe<Scalars['String']['input']>;
  /** Multi LoRa configuration */
  multiLoraConfig?: InputMaybe<DedicatedEndpointCreateWithHfMultiLoraConfigInput>;
  /** Name of the endpoint */
  name: Scalars['String']['input'];
  /** ID of the project */
  projectId: Scalars['ID']['input'];
  simplescaleConfig?: InputMaybe<DedicatedEndpointSimplescaleConfigInput>;
  /** ID of the team */
  teamId: Scalars['ID']['input'];
  /** W&B artifact full name ('entity/project/collection:v0') */
  wandbArtifactFullName?: InputMaybe<Scalars['String']['input']>;
};

export type DedicatedEndpointCreateWithHfMultiLoraConfigInput = {
  /** List of adapters */
  adapters: Array<DedicatedEndpointCreateWithHfAdapterConfigInput>;
};

/** Response payload for DedicatedEndpointCreateWithHf */
export type DedicatedEndpointCreateWithHfResponse = DedicatedEndpointCreateWithHfSuccess | DedicatedEndpointCreateWithHfTokenAuthorizationError | DedicatedEndpointCreateWithHfTokenGatedModelError | DedicatedEndpointInvalidAutoscaleOptionError | DedicatedEndpointMultipleScalingOptionsError | DedicatedEndpointNoScalingOptionError | DedicatedEndpointResourceLimitExceeded | DedicatedEndpointResourceUnavailable | DedicatedEndpointUnsupportedModelError | TeamNotExistError | UserPermissionError;

export type DedicatedEndpointCreateWithHfSingleLoraConfigInput = {
  /** ID of the dedicated adapter */
  adapterId: Scalars['ID']['input'];
  /** adapter serving path */
  adapterName: Scalars['String']['input'];
  /** HuggingFace Model repository for backbone */
  modelRepo: Scalars['String']['input'];
};

/** Success response for dedicated endpoint creation with HF */
export type DedicatedEndpointCreateWithHfSuccess = {
  __typename?: 'DedicatedEndpointCreateWithHfSuccess';
  endpoint: DedicatedEndpoint;
};

/** Error response for when user does not have permission to access huggingface model */
export type DedicatedEndpointCreateWithHfTokenAuthorizationError = BaseError & {
  __typename?: 'DedicatedEndpointCreateWithHfTokenAuthorizationError';
  message: Scalars['String']['output'];
};

/** User must earn permission to the gated model to access */
export type DedicatedEndpointCreateWithHfTokenGatedModelError = BaseError & {
  __typename?: 'DedicatedEndpointCreateWithHfTokenGatedModelError';
  message: Scalars['String']['output'];
};

/** Input for DedicatedEndpointCreateWithHuggingface */
export type DedicatedEndpointCreateWithHuggingfaceInput = {
  /** HuggingFace Adapter repository */
  adapterRepo?: InputMaybe<Scalars['String']['input']>;
  /** ID of the instance option */
  instanceOptionId: Scalars['ID']['input'];
  /** HuggingFace Base Model repository */
  modelRepo: Scalars['String']['input'];
  /** HuggingFace Base Model repository revision */
  modelRepoRevision?: InputMaybe<Scalars['String']['input']>;
  /** Optional ID of the team */
  teamId?: InputMaybe<Scalars['ID']['input']>;
  /** Use user account */
  useUserAccount?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Response payload for DedicatedEndpointCreateWithHuggingface */
export type DedicatedEndpointCreateWithHuggingfaceResponse = DedicatedEndpointCreateWithHuggingfaceSuccess | DedicatedEndpointResourceLimitExceeded | DedicatedEndpointUnsupportedModelError | TeamNotExistError | UserPermissionError;

/** Success response for dedicated endpoint creation with HF */
export type DedicatedEndpointCreateWithHuggingfaceSuccess = {
  __typename?: 'DedicatedEndpointCreateWithHuggingfaceSuccess';
  endpoint: DedicatedEndpoint;
  projectId: Scalars['ID']['output'];
  teamId: Scalars['ID']['output'];
};

/** Input for DedicatedEndpointDelete */
export type DedicatedEndpointDeleteInput = {
  endpointId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};

/** Response payload for DedicatedEndpointDelete */
export type DedicatedEndpointDeleteResponse = DedicatedEndpointDeleteSuccess | DedicatedEndpointNotExistError | DedicatedEndpointStatusPreconditionError | TeamNotExistError | UserPermissionError;

/** Success response for dedicated endpoint deletion */
export type DedicatedEndpointDeleteSuccess = {
  __typename?: 'DedicatedEndpointDeleteSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Error code for dedicated endpoint */
export enum DedicatedEndpointErrorCode {
  CannotAccessRepoError = 'CANNOT_ACCESS_REPO_ERROR',
  InternalError = 'INTERNAL_ERROR',
  InternalUnknownError = 'INTERNAL_UNKNOWN_ERROR',
  InvalidArgumentError = 'INVALID_ARGUMENT_ERROR',
  InvalidTokenError = 'INVALID_TOKEN_ERROR',
  MemoryError = 'MEMORY_ERROR'
}

export type DedicatedEndpointFiltersInput = {
  /** Filter by created timestamp */
  createdDateRange?: InputMaybe<DateRangeInput>;
  idSearch?: InputMaybe<Scalars['String']['input']>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<Scalars['ID']['input']>>;
  statuses?: InputMaybe<Array<DedicatedEndpointStatus>>;
  teams?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

export type DedicatedEndpointHuggingfaceRepoInput = {
  repoId: Scalars['String']['input'];
  repoRevision?: InputMaybe<Scalars['String']['input']>;
};

/** The given version is too old or has incomplete info for operation */
export type DedicatedEndpointIncompleteVersionInfoError = BaseError & DedicatedEndpointRollbackError & {
  __typename?: 'DedicatedEndpointIncompleteVersionInfoError';
  errorKind: DedicatedEndpointRollbackErrorKind;
  message: Scalars['String']['output'];
};

/** Phase of Endpoint. */
export enum DedicatedEndpointInitializingPhaseStep {
  DownloadingModel = 'DOWNLOADING_MODEL',
  EngineInitializing = 'ENGINE_INITIALIZING',
  RequestingVirtualMachine = 'REQUESTING_VIRTUAL_MACHINE'
}

/** Indicates invalid autoscale option */
export type DedicatedEndpointInvalidAutoscaleOptionError = BaseError & {
  __typename?: 'DedicatedEndpointInvalidAutoscaleOptionError';
  message: Scalars['String']['output'];
};

export type DedicatedEndpointInvalidVersion = BaseError & {
  __typename?: 'DedicatedEndpointInvalidVersion';
  message: Scalars['String']['output'];
};

/** The given version is invalid for rollback operation */
export type DedicatedEndpointInvalidVersionToRollbackError = BaseError & DedicatedEndpointRollbackError & {
  __typename?: 'DedicatedEndpointInvalidVersionToRollbackError';
  errorKind: DedicatedEndpointRollbackErrorKind;
  message: Scalars['String']['output'];
};

/** Latency for a dedicated endpoint */
export type DedicatedEndpointLatencyMetric = {
  __typename?: 'DedicatedEndpointLatencyMetric';
  /** p50 latency */
  p50?: Maybe<Scalars['Float']['output']>;
  /** p90 latency */
  p90?: Maybe<Scalars['Float']['output']>;
  /** p99 latency */
  p99?: Maybe<Scalars['Float']['output']>;
};

export type DedicatedEndpointLatencyMetricTimeSeries = {
  __typename?: 'DedicatedEndpointLatencyMetricTimeSeries';
  data: Array<DedicatedEndpointLatencyMetricTimeSeriesObservation>;
};

export type DedicatedEndpointLatencyMetricTimeSeriesObservation = {
  __typename?: 'DedicatedEndpointLatencyMetricTimeSeriesObservation';
  timestamp: Scalars['DateTime']['output'];
  values: DedicatedEndpointLatencyMetric;
};

/** An inference content log for a dedicated endpoint */
export type DedicatedEndpointLog = {
  __typename?: 'DedicatedEndpointLog';
  /** Request json line of the log */
  requestLine: Scalars['String']['output'];
  /** Response json line of the log */
  responseLine: Scalars['String']['output'];
  /** Timestamp of the log */
  timestamp: Scalars['DateTime']['output'];
};

/** Log history for a dedicated endpoint */
export type DedicatedEndpointLogHistory = {
  __typename?: 'DedicatedEndpointLogHistory';
  /** Access logs */
  access: Array<DedicatedEndpointAccessLog>;
  adapterId?: Maybe<Scalars['ID']['output']>;
  adapterType: DedicatedEndpointAdapterFilterType;
  /** Endpoint content logs */
  content: Array<DedicatedEndpointContentLog>;
  /** Recent N logs */
  logs: Array<DedicatedEndpointLog>;
};


/** Log history for a dedicated endpoint */
export type DedicatedEndpointLogHistoryAccessArgs = {
  end?: InputMaybe<Scalars['DateTime']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
};


/** Log history for a dedicated endpoint */
export type DedicatedEndpointLogHistoryContentArgs = {
  end?: InputMaybe<Scalars['DateTime']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  requestId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['DateTime']['input']>;
};


/** Log history for a dedicated endpoint */
export type DedicatedEndpointLogHistoryLogsArgs = {
  limit?: Scalars['Int']['input'];
};

/** LoRA adapter information */
export type DedicatedEndpointLoraAdapter = {
  __typename?: 'DedicatedEndpointLoraAdapter';
  id: Scalars['ID']['output'];
  /** Adapter model name */
  name?: Maybe<Scalars['String']['output']>;
  /** Adapter route */
  route: Scalars['String']['output'];
};

/** Max modality input count for a dedicated endpoint */
export type DedicatedEndpointMaxModalityInputCountResponseObj = {
  __typename?: 'DedicatedEndpointMaxModalityInputCountResponseObj';
  /** Max input count for audio modality */
  audio: Scalars['Int']['output'];
  /** Max input count for image modality */
  image: Scalars['Int']['output'];
  /** Max input count for video modality */
  video: Scalars['Int']['output'];
};

/** Metric summary for a dedicated endpoint */
export type DedicatedEndpointMetricSeries = {
  __typename?: 'DedicatedEndpointMetricSeries';
  adapterId?: Maybe<Scalars['ID']['output']>;
  adapterType: DedicatedEndpointAdapterFilterType;
  /** Average latency of engine inferences */
  avgLatency?: Maybe<DedicatedEndpointLatencyMetricTimeSeries>;
  endpointId: Scalars['ID']['output'];
  /** Traffic by status of engine inferences */
  trafficByStatus?: Maybe<DedicatedEndpointTrafficByStatusMetricTimeSeries>;
  /** Traffic by status of engine inferences */
  trafficByStatusTotalV2?: Maybe<Scalars['Union']['output']>;
};


/** Metric summary for a dedicated endpoint */
export type DedicatedEndpointMetricSeriesAvgLatencyArgs = {
  bucket?: InputMaybe<Scalars['Int']['input']>;
  dateRange?: InputMaybe<DateRangeInput>;
};


/** Metric summary for a dedicated endpoint */
export type DedicatedEndpointMetricSeriesTrafficByStatusArgs = {
  bucket?: InputMaybe<Scalars['Int']['input']>;
  dateRange?: InputMaybe<DateRangeInput>;
};


/** Metric summary for a dedicated endpoint */
export type DedicatedEndpointMetricSeriesTrafficByStatusTotalV2Args = {
  dateRange?: InputMaybe<DateRangeInput>;
  status?: InputMaybe<Scalars['Int']['input']>;
};

/** Metric summary for a dedicated endpoint */
export type DedicatedEndpointMetricSummary = {
  __typename?: 'DedicatedEndpointMetricSummary';
  /** Latency average of last 24 hours */
  avgLatency24hr: DedicatedEndpointLatencyMetric;
};

/** Model info for a dedicated endpoint */
export type DedicatedEndpointModelInfoApiResponseObj = {
  __typename?: 'DedicatedEndpointModelInfoApiResponseObj';
  /** Whether the model is accelerated by engine */
  engineAccelerated?: Maybe<Scalars['Boolean']['output']>;
  /** Model library type */
  libraryType?: Maybe<DedicatedEndpointModelLibraryType>;
  /** Max modality input count for the model */
  maxModalityInputCount?: Maybe<DedicatedEndpointMaxModalityInputCountResponseObj>;
  /** Model modality info for the endpoint */
  modelModalityInfo?: Maybe<DedicatedEndpointModelModalityInfo>;
  /** Whether the model has an executable code within the repo */
  modelRemoteCodeWarning?: Maybe<Scalars['Boolean']['output']>;
};

export type DedicatedEndpointModelInfoInput = {
  huggingface?: InputMaybe<DedicatedEndpointHuggingfaceRepoInput>;
  native?: InputMaybe<Scalars['ID']['input']>;
  wandb?: InputMaybe<Scalars['String']['input']>;
};

/** Requested model is not supported */
export type DedicatedEndpointModelInfoNotSupportedError = BaseError & {
  __typename?: 'DedicatedEndpointModelInfoNotSupportedError';
  message: Scalars['String']['output'];
  reason: DedicatedEndpointModelNotSupportedReason;
};

/** Response payload for DedicatedEndpointModelInfo */
export type DedicatedEndpointModelInfoResponse = DedicatedEndpointModelInfoNotSupportedError | DedicatedEndpointModelInfoSuccess;

/** Model is compatible */
export type DedicatedEndpointModelInfoSuccess = {
  __typename?: 'DedicatedEndpointModelInfoSuccess';
  modelInfo: DedicatedEndpointModelInfoApiResponseObj;
  ok: Scalars['Boolean']['output'];
};

/** Model library type */
export enum DedicatedEndpointModelLibraryType {
  Diffusers = 'DIFFUSERS',
  Transformers = 'TRANSFORMERS'
}

/** Model modality */
export enum DedicatedEndpointModelModality {
  Audio = 'AUDIO',
  Image = 'IMAGE',
  Text = 'TEXT',
  Video = 'VIDEO'
}

/** Model modality info for a dedicated endpoint */
export type DedicatedEndpointModelModalityInfo = {
  __typename?: 'DedicatedEndpointModelModalityInfo';
  /** Input modality for the model */
  inputModals?: Maybe<Array<DedicatedEndpointModelModality>>;
  /** Output modality for the model */
  outputModals?: Maybe<Array<DedicatedEndpointModelModality>>;
};

/** Why model is not supported. */
export enum DedicatedEndpointModelNotSupportedReason {
  HfApiError = 'HF_API_ERROR',
  ModelArchitectureNotSupported = 'MODEL_ARCHITECTURE_NOT_SUPPORTED',
  ModelDtypeNotSupported = 'MODEL_DTYPE_NOT_SUPPORTED',
  ModelMalformed = 'MODEL_MALFORMED',
  ModelNotSupported = 'MODEL_NOT_SUPPORTED',
  ModelQuantizationNotSupported = 'MODEL_QUANTIZATION_NOT_SUPPORTED',
  ModelRopeScalingNotSupported = 'MODEL_ROPE_SCALING_NOT_SUPPORTED',
  ModelSizeNotSupported = 'MODEL_SIZE_NOT_SUPPORTED',
  RepoNeedApproval = 'REPO_NEED_APPROVAL',
  RepoNotFound = 'REPO_NOT_FOUND'
}

/** Thrown when multiple scaling options are given */
export type DedicatedEndpointMultipleScalingOptionsError = BaseError & {
  __typename?: 'DedicatedEndpointMultipleScalingOptionsError';
  message: Scalars['String']['output'];
};

/** Thrown when no scaling option is given */
export type DedicatedEndpointNoScalingOptionError = BaseError & {
  __typename?: 'DedicatedEndpointNoScalingOptionError';
  message: Scalars['String']['output'];
};

/** No such version found */
export type DedicatedEndpointNoSuchVersionError = BaseError & DedicatedEndpointRollbackError & {
  __typename?: 'DedicatedEndpointNoSuchVersionError';
  errorKind: DedicatedEndpointRollbackErrorKind;
  message: Scalars['String']['output'];
};

/** The given endpoint has no updating version */
export type DedicatedEndpointNoUpdateToCancelError = BaseError & DedicatedEndpointCancelUpdateError & {
  __typename?: 'DedicatedEndpointNoUpdateToCancelError';
  errorKind: DedicatedEndpointCancelUpdateErrorKind;
  message: Scalars['String']['output'];
};

/** Endpoint does not exist */
export type DedicatedEndpointNotExistError = BaseError & {
  __typename?: 'DedicatedEndpointNotExistError';
  message: Scalars['String']['output'];
};

/** Endpoint Phase */
export type DedicatedEndpointPhase = DedicatedEndpointPhaseAwaking | DedicatedEndpointPhaseFailed | DedicatedEndpointPhaseInitializing | DedicatedEndpointPhaseRunning | DedicatedEndpointPhaseUpdating;

/** Awaking phase of a dedicated endpoint */
export type DedicatedEndpointPhaseAwaking = BaseDedicatedEndpointPhase & {
  __typename?: 'DedicatedEndpointPhaseAwaking';
  msg: Scalars['String']['output'];
  step: DedicatedEndpointAwakingPhaseStep;
};

/** Failed phase of a dedicated endpoint */
export type DedicatedEndpointPhaseFailed = BaseDedicatedEndpointPhase & {
  __typename?: 'DedicatedEndpointPhaseFailed';
  errorCode?: Maybe<DedicatedEndpointErrorCode>;
  msg: Scalars['String']['output'];
};

/** Initializing phase of a dedicated endpoint */
export type DedicatedEndpointPhaseInitializing = BaseDedicatedEndpointPhase & {
  __typename?: 'DedicatedEndpointPhaseInitializing';
  msg: Scalars['String']['output'];
  step: DedicatedEndpointInitializingPhaseStep;
};

/** Running phase of a dedicated endpoint */
export type DedicatedEndpointPhaseRunning = BaseDedicatedEndpointPhase & {
  __typename?: 'DedicatedEndpointPhaseRunning';
  currReplica: Scalars['Int']['output'];
  desiredReplica: Scalars['Int']['output'];
  msg: Scalars['String']['output'];
};

/** Updating phase of a dedicated endpoint */
export type DedicatedEndpointPhaseUpdating = BaseDedicatedEndpointPhase & {
  __typename?: 'DedicatedEndpointPhaseUpdating';
  currReplica: Scalars['Int']['output'];
  desiredReplica: Scalars['Int']['output'];
  errorCode?: Maybe<DedicatedEndpointErrorCode>;
  msg: Scalars['String']['output'];
  updateProgress?: Maybe<Scalars['Float']['output']>;
};

/** User cannot use requested amount of GPUs */
export type DedicatedEndpointResourceLimitExceeded = BaseError & {
  __typename?: 'DedicatedEndpointResourceLimitExceeded';
  allowed: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  used: Scalars['Int']['output'];
};

/** Requested amount of GPUs is currently unavailable */
export type DedicatedEndpointResourceUnavailable = BaseError & {
  __typename?: 'DedicatedEndpointResourceUnavailable';
  message: Scalars['String']['output'];
};

/** Input for DedicatedEndpointRestart */
export type DedicatedEndpointRestartInput = {
  endpointId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};

/** Endpoint's model is not supported */
export type DedicatedEndpointRestartModelNotSupportedError = BaseError & {
  __typename?: 'DedicatedEndpointRestartModelNotSupportedError';
  message: Scalars['String']['output'];
  reason: DedicatedEndpointRestartModelNotSupportedReason;
};

/** Why model is not supported. */
export enum DedicatedEndpointRestartModelNotSupportedReason {
  HfApiError = 'HF_API_ERROR',
  ModelArchitectureNotSupported = 'MODEL_ARCHITECTURE_NOT_SUPPORTED',
  ModelDtypeNotSupported = 'MODEL_DTYPE_NOT_SUPPORTED',
  ModelMalformed = 'MODEL_MALFORMED',
  ModelNotSupported = 'MODEL_NOT_SUPPORTED',
  ModelQuantizationNotSupported = 'MODEL_QUANTIZATION_NOT_SUPPORTED',
  ModelRopeScalingNotSupported = 'MODEL_ROPE_SCALING_NOT_SUPPORTED',
  ModelSizeNotSupported = 'MODEL_SIZE_NOT_SUPPORTED',
  RepoNeedApproval = 'REPO_NEED_APPROVAL',
  RepoNotFound = 'REPO_NOT_FOUND'
}

/** Response payload for DedicatedEndpointRestart */
export type DedicatedEndpointRestartResponse = DedicatedEndpointResourceLimitExceeded | DedicatedEndpointRestartModelNotSupportedError | DedicatedEndpointRestartSuccess | TeamNotExistError | UserPermissionError;

/** Success response for dedicated endpoint restart */
export type DedicatedEndpointRestartSuccess = {
  __typename?: 'DedicatedEndpointRestartSuccess';
  endpoint: DedicatedEndpoint;
};

/** Endpoint already has updating version */
export type DedicatedEndpointRollbackAlreadyHasUpdatingVersionError = BaseError & DedicatedEndpointRollbackError & {
  __typename?: 'DedicatedEndpointRollbackAlreadyHasUpdatingVersionError';
  errorKind: DedicatedEndpointRollbackErrorKind;
  message: Scalars['String']['output'];
};

export type DedicatedEndpointRollbackError = {
  errorKind: DedicatedEndpointRollbackErrorKind;
  message: Scalars['String']['output'];
};

/** The given endpoint is initializing so cannot be updated */
export type DedicatedEndpointRollbackErrorInitializing = BaseError & DedicatedEndpointRollbackError & {
  __typename?: 'DedicatedEndpointRollbackErrorInitializing';
  errorKind: DedicatedEndpointRollbackErrorKind;
  message: Scalars['String']['output'];
};

export enum DedicatedEndpointRollbackErrorKind {
  EndpointAlreadyHasNextVersion = 'ENDPOINT_ALREADY_HAS_NEXT_VERSION',
  EndpointIsInitializing = 'ENDPOINT_IS_INITIALIZING',
  InvalidVersionForRollback = 'INVALID_VERSION_FOR_ROLLBACK',
  NoSuchVersion = 'NO_SUCH_VERSION',
  VersionHasInsufficientInfo = 'VERSION_HAS_INSUFFICIENT_INFO'
}

/** Input for DedicatedEndpointRollback */
export type DedicatedEndpointRollbackInput = {
  /** Comment on new vesrion */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** Name of the endpoint */
  endpointId: Scalars['String']['input'];
  /** ID of the project */
  projectId: Scalars['ID']['input'];
  /** Version to rollback to */
  targetVersion?: InputMaybe<Scalars['String']['input']>;
  /** ID of the team */
  teamId: Scalars['ID']['input'];
};

/** Response payload for DedicatedEndpointRollback */
export type DedicatedEndpointRollbackResponse = DedicatedEndpointIncompleteVersionInfoError | DedicatedEndpointInvalidVersion | DedicatedEndpointInvalidVersionToRollbackError | DedicatedEndpointNoSuchVersionError | DedicatedEndpointRollbackAlreadyHasUpdatingVersionError | DedicatedEndpointRollbackErrorInitializing | DedicatedEndpointRollbackSuccess | TeamNotExistError | UserPermissionError;

/** Success response for dedicated endpoint rollback */
export type DedicatedEndpointRollbackSuccess = {
  __typename?: 'DedicatedEndpointRollbackSuccess';
  newVersion: Scalars['String']['output'];
  /** @deprecated use newVersion instead */
  newVersionNumber: Scalars['Int']['output'];
};

/** Endpoint already has updating version */
export type DedicatedEndpointRolloutAlreadyHasUpdatingVersionError = BaseError & DedicatedEndpointRolloutError & {
  __typename?: 'DedicatedEndpointRolloutAlreadyHasUpdatingVersionError';
  errorKind: DedicatedEndpointRolloutErrorKind;
  message: Scalars['String']['output'];
};

export type DedicatedEndpointRolloutError = {
  errorKind: DedicatedEndpointRolloutErrorKind;
  message: Scalars['String']['output'];
};

/** The given endpoint is initializing so cannot be updated */
export type DedicatedEndpointRolloutErrorInitializing = BaseError & DedicatedEndpointRolloutError & {
  __typename?: 'DedicatedEndpointRolloutErrorInitializing';
  errorKind: DedicatedEndpointRolloutErrorKind;
  message: Scalars['String']['output'];
};

export enum DedicatedEndpointRolloutErrorKind {
  EndpointAlreadyHasNextVersion = 'ENDPOINT_ALREADY_HAS_NEXT_VERSION',
  EndpointCannotChangeGpuType = 'ENDPOINT_CANNOT_CHANGE_GPU_TYPE',
  EndpointIsInitializing = 'ENDPOINT_IS_INITIALIZING'
}

/** Simple scaling configuration for a dedicated endpoint */
export type DedicatedEndpointSimplescaleConfig = {
  __typename?: 'DedicatedEndpointSimplescaleConfig';
  replicas: Scalars['Int']['output'];
};

export type DedicatedEndpointSimplescaleConfigInput = {
  replicas: Scalars['Int']['input'];
};

/** Input for DedicatedEndpointSleep */
export type DedicatedEndpointSleepInput = {
  endpointId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};

/** Endpoint sleep failed due to internal server error */
export type DedicatedEndpointSleepInternalError = BaseError & {
  __typename?: 'DedicatedEndpointSleepInternalError';
  message: Scalars['String']['output'];
};

/** Endpoint has wrong precondition status */
export type DedicatedEndpointSleepInvalidStatusError = BaseError & {
  __typename?: 'DedicatedEndpointSleepInvalidStatusError';
  message: Scalars['String']['output'];
};

/** Response payload for DedicatedEndpointSleep */
export type DedicatedEndpointSleepResponse = DedicatedEndpointNotExistError | DedicatedEndpointResourceLimitExceeded | DedicatedEndpointSleepInternalError | DedicatedEndpointSleepInvalidStatusError | DedicatedEndpointSleepSuccess | TeamNotExistError | UserPermissionError;

/** Success response for dedicated endpoint termination */
export type DedicatedEndpointSleepSuccess = {
  __typename?: 'DedicatedEndpointSleepSuccess';
  endpoint: DedicatedEndpoint;
};

export type DedicatedEndpointSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: created_at, updated_at, name */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Status of InferenceDeployment */
export enum DedicatedEndpointStatus {
  Awaking = 'AWAKING',
  Failed = 'FAILED',
  Initializing = 'INITIALIZING',
  Ready = 'READY',
  Running = 'RUNNING',
  Sleeping = 'SLEEPING',
  Stopping = 'STOPPING',
  Terminated = 'TERMINATED',
  Terminating = 'TERMINATING',
  Unknown = 'UNKNOWN',
  Updating = 'UPDATING'
}

/** Endpoint has wrong precondition status */
export type DedicatedEndpointStatusPreconditionError = BaseError & {
  __typename?: 'DedicatedEndpointStatusPreconditionError';
  message: Scalars['String']['output'];
};

/** Response for DedicatedEndpoint status and phase subscription */
export type DedicatedEndpointStatusWithPhaseSubscriptionResponse = Node & {
  __typename?: 'DedicatedEndpointStatusWithPhaseSubscriptionResponse';
  /** LoRA adapters */
  adapters?: Maybe<Array<DedicatedEndpointLoraAdapter>>;
  /** Administrative configuration */
  administrativeConfig?: Maybe<DedicatedEndpointAdministrativeConfig>;
  /** Advanced configuration */
  advancedConfig?: Maybe<DedicatedEndpointAdvancedConfig>;
  /** Auto scaling configuration */
  autoscaleConfig?: Maybe<DedicatedEndpointAutoscaleConfig>;
  /** Timestamp when the deployment was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the deployment */
  createdBy?: Maybe<ClientUser>;
  currentVersion?: Maybe<DedicatedEndpointVersion>;
  /** URL of the DedicatedEndpoint */
  endpointUrl?: Maybe<Scalars['String']['output']>;
  /**
   * GPU Type
   * @deprecated Use `instance` field instead.
   */
  gpuType?: Maybe<Scalars['String']['output']>;
  /** Whether the model has tokenizer */
  hasTokenizer?: Maybe<Scalars['Boolean']['output']>;
  /** HF Model Repository */
  hfModelRepo?: Maybe<Scalars['String']['output']>;
  /** HF Model Repository Revision */
  hfModelRepoRevision?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Instance that this endpoint uses */
  instance?: Maybe<DedicatedInstanceV2>;
  /** Log history */
  logHistory?: Maybe<DedicatedEndpointLogHistory>;
  /** Metric series */
  metricSeries?: Maybe<DedicatedEndpointMetricSeries>;
  /** Metric summary */
  metricSummary?: Maybe<DedicatedEndpointMetricSummary>;
  /** Model */
  model?: Maybe<DedicatedModel>;
  /** Model info */
  modelInfo?: Maybe<DedicatedEndpointModelInfoApiResponseObj>;
  /** Whether the model supports chat */
  modelSupportsChat?: Maybe<Scalars['Boolean']['output']>;
  /** Name of the deployment */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Number of GPUs
   * @deprecated Use `instance` field instead.
   */
  numGpu?: Maybe<Scalars['Int']['output']>;
  /** Phase of the job */
  phase?: Maybe<DedicatedEndpointPhase>;
  /** Project ID */
  project?: Maybe<Scalars['String']['output']>;
  /** Simple scaling configuration */
  simplescaleConfig?: Maybe<DedicatedEndpointSimplescaleConfig>;
  /** Name of the single adapter if exists */
  singleAdapter?: Maybe<DedicatedAdapter>;
  /** Name of the single adapter if exists. To be deprecated */
  singleAdapterName?: Maybe<Scalars['String']['output']>;
  /** DedicatedEndpoint status */
  status?: Maybe<DedicatedEndpointStatus>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  /** Type of the DedicatedEndpoint */
  type?: Maybe<DedicatedEndpointType>;
  /** Timestamp when the deployment was updated */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatingVersion?: Maybe<DedicatedEndpointVersion>;
  /** Usage series */
  usageSeries?: Maybe<DedicatedEndpointUsageSeries>;
  /** Usage summary */
  usageSummary?: Maybe<DedicatedEndpointUsageSummary>;
  /** List of versions in the endpoint */
  versions?: Maybe<DedicatedEndpointVersionConnection>;
  /**
   * Region of the VM
   * @deprecated Use `instance` field instead.
   */
  vmRegion?: Maybe<Scalars['String']['output']>;
  /** Fully qualified W&B model name (including version) */
  wandbArtifactFullName?: Maybe<Scalars['String']['output']>;
};


/** Response for DedicatedEndpoint status and phase subscription */
export type DedicatedEndpointStatusWithPhaseSubscriptionResponseLogHistoryArgs = {
  adapterId?: InputMaybe<Scalars['ID']['input']>;
  adapterType?: InputMaybe<DedicatedEndpointAdapterFilterType>;
};


/** Response for DedicatedEndpoint status and phase subscription */
export type DedicatedEndpointStatusWithPhaseSubscriptionResponseMetricSeriesArgs = {
  adapterId?: InputMaybe<Scalars['ID']['input']>;
  adapterType?: InputMaybe<DedicatedEndpointAdapterFilterType>;
};


/** Response for DedicatedEndpoint status and phase subscription */
export type DedicatedEndpointStatusWithPhaseSubscriptionResponseUsageSeriesArgs = {
  adapterId?: InputMaybe<Scalars['ID']['input']>;
  adapterType?: InputMaybe<DedicatedEndpointAdapterFilterType>;
};


/** Response for DedicatedEndpoint status and phase subscription */
export type DedicatedEndpointStatusWithPhaseSubscriptionResponseVersionsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedEndpointVersionFiltersInput>;
};

export type DedicatedEndpointStatusWithPhaseSubscriptionResponseUnion = DedicatedEndpointStatusWithPhaseSubscriptionResponse | DedicatedEndpointSubscriptionError;

/** Error response for DedicatedEndpoint subscriptions */
export type DedicatedEndpointSubscriptionError = {
  __typename?: 'DedicatedEndpointSubscriptionError';
  message: Scalars['String']['output'];
};

/** Input for DedicatedEndpointTerminate */
export type DedicatedEndpointTerminateInput = {
  endpointId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};

/** Endpoint terminate failed due to internal server error */
export type DedicatedEndpointTerminateInternalError = BaseError & {
  __typename?: 'DedicatedEndpointTerminateInternalError';
  message: Scalars['String']['output'];
};

/** Response payload for DedicatedEndpointTerminate */
export type DedicatedEndpointTerminateResponse = DedicatedEndpointNotExistError | DedicatedEndpointTerminateInternalError | DedicatedEndpointTerminateSuccess | TeamNotExistError | UserPermissionError;

/** Success response for dedicated endpoint termination */
export type DedicatedEndpointTerminateSuccess = {
  __typename?: 'DedicatedEndpointTerminateSuccess';
  endpoint: DedicatedEndpoint;
};

/** Usage summary for a dedicated endpoint */
export type DedicatedEndpointTokensUsageV2 = {
  __typename?: 'DedicatedEndpointTokensUsageV2';
  /** Number of input tokens the engine have processed */
  input?: Maybe<Scalars['Union']['output']>;
  /** Number of output tokens the engine have processed */
  output?: Maybe<Scalars['Union']['output']>;
  /** Number of total tokens the engine have processed */
  total?: Maybe<Scalars['Union']['output']>;
};

/** TrafficByStatus for a dedicated endpoint */
export type DedicatedEndpointTrafficByStatusMetric = {
  __typename?: 'DedicatedEndpointTrafficByStatusMetric';
  /** status_2xx TrafficByStatus */
  status2xx?: Maybe<Scalars['Float']['output']>;
  /** status_4xx TrafficByStatus */
  status4xx?: Maybe<Scalars['Float']['output']>;
  /** status_5xx TrafficByStatus */
  status5xx?: Maybe<Scalars['Float']['output']>;
};

export type DedicatedEndpointTrafficByStatusMetricTimeSeries = {
  __typename?: 'DedicatedEndpointTrafficByStatusMetricTimeSeries';
  data: Array<DedicatedEndpointTrafficByStatusMetricTimeSeriesObservation>;
};

export type DedicatedEndpointTrafficByStatusMetricTimeSeriesObservation = {
  __typename?: 'DedicatedEndpointTrafficByStatusMetricTimeSeriesObservation';
  timestamp: Scalars['DateTime']['output'];
  values: DedicatedEndpointTrafficByStatusMetric;
};

/** Known huggingface org type */
export enum DedicatedEndpointTryOutKnownHuggingfaceOrgType {
  Friendliai = 'FRIENDLIAI',
  Google = 'GOOGLE',
  MetaLlama = 'META_LLAMA',
  Microsoft = 'MICROSOFT',
  Mistralai = 'MISTRALAI',
  Nvidia = 'NVIDIA',
  Qwen = 'QWEN'
}

/** HF tryout model info */
export type DedicatedEndpointTryOutModelInfo = {
  __typename?: 'DedicatedEndpointTryOutModelInfo';
  adapterRepoId?: Maybe<Scalars['String']['output']>;
  baseRepoId?: Maybe<Scalars['String']['output']>;
  instanceGpu?: Maybe<DedicatedEndpointTryOutModelInfoGpuDetail>;
  instanceId?: Maybe<Scalars['String']['output']>;
  modelRemoteCodeWarning?: Maybe<Scalars['Boolean']['output']>;
  notSupportedAlternativeRepo?: Maybe<Scalars['Boolean']['output']>;
  notSupportedAlternativeRepoId?: Maybe<Scalars['String']['output']>;
  notSupportedReason?: Maybe<DedicatedEndpointTryOutModelNotSupportedReason>;
  notSupportedRepoId?: Maybe<Scalars['String']['output']>;
  optimizedRepo?: Maybe<Scalars['Boolean']['output']>;
  optimizedRepoId?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<DedicatedEndpointTryOutKnownHuggingfaceOrgType>;
  resourceAvailable?: Maybe<Scalars['Boolean']['output']>;
  serverlessId?: Maybe<Scalars['String']['output']>;
  tier: DedicatedEndpointTryOutModelTier;
};

/** HF tryout model info GPU detail */
export type DedicatedEndpointTryOutModelInfoGpuDetail = {
  __typename?: 'DedicatedEndpointTryOutModelInfoGPUDetail';
  count: Scalars['Int']['output'];
  kind: Scalars['String']['output'];
  price?: Maybe<Scalars['Decimal']['output']>;
};

/** Why model is not supported. */
export enum DedicatedEndpointTryOutModelNotSupportedReason {
  HfApiError = 'HF_API_ERROR',
  ModelArchitectureNotSupported = 'MODEL_ARCHITECTURE_NOT_SUPPORTED',
  ModelDtypeNotSupported = 'MODEL_DTYPE_NOT_SUPPORTED',
  ModelMalformed = 'MODEL_MALFORMED',
  ModelNotSupported = 'MODEL_NOT_SUPPORTED',
  ModelQuantizationNotSupported = 'MODEL_QUANTIZATION_NOT_SUPPORTED',
  ModelRopeScalingNotSupported = 'MODEL_ROPE_SCALING_NOT_SUPPORTED',
  ModelSizeNotSupported = 'MODEL_SIZE_NOT_SUPPORTED',
  RepoNeedApproval = 'REPO_NEED_APPROVAL',
  RepoNotFound = 'REPO_NOT_FOUND'
}

/** Tier of try-out model */
export enum DedicatedEndpointTryOutModelTier {
  Default = 'DEFAULT',
  Optimized = 'OPTIMIZED',
  Serverless = 'SERVERLESS'
}

/** Endpoint billing type */
export enum DedicatedEndpointType {
  Development = 'DEVELOPMENT',
  Production = 'PRODUCTION'
}

/** Model is not supported */
export type DedicatedEndpointUnsupportedModelError = BaseError & {
  __typename?: 'DedicatedEndpointUnsupportedModelError';
  message: Scalars['String']['output'];
  unsupportedReason?: Maybe<DedicatedEndpointModelNotSupportedReason>;
};

/** Input for DedicatedEndpointUpdate */
export type DedicatedEndpointUpdateInput = {
  administrativeConfig?: InputMaybe<DedicatedEndpointAdministrativeConfigInput>;
  advancedConfig?: InputMaybe<DedicatedEndpointAdvancedConfigInput>;
  autoscaleConfig?: InputMaybe<DedicatedEndpointAutoscaleConfigInput>;
  /** Comment on new vesrion */
  comment?: InputMaybe<Scalars['String']['input']>;
  endpointId: Scalars['ID']['input'];
  instanceOptionId?: InputMaybe<Scalars['ID']['input']>;
  modelRepo?: InputMaybe<Scalars['String']['input']>;
  modelRepoRevision?: InputMaybe<Scalars['String']['input']>;
  multiLoraConfig?: InputMaybe<DedicatedEndpointCreateWithHfMultiLoraConfigInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  nativeModelId?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['ID']['input'];
  simplescaleConfig?: InputMaybe<DedicatedEndpointSimplescaleConfigInput>;
  singleLoraConfig?: InputMaybe<DedicatedEndpointCreateWithHfSingleLoraConfigInput>;
  teamId: Scalars['ID']['input'];
  wandbArtifactFullName?: InputMaybe<Scalars['String']['input']>;
};

/** Response payload for DedicatedEndpointUpdateSuccess */
export type DedicatedEndpointUpdateResponse = DedicatedEndpointCannotUpdateGpuType | DedicatedEndpointInvalidAutoscaleOptionError | DedicatedEndpointMultipleScalingOptionsError | DedicatedEndpointNoScalingOptionError | DedicatedEndpointNotExistError | DedicatedEndpointResourceLimitExceeded | DedicatedEndpointRolloutAlreadyHasUpdatingVersionError | DedicatedEndpointRolloutErrorInitializing | DedicatedEndpointUnsupportedModelError | DedicatedEndpointUpdateSuccess | TeamNotExistError | UserPermissionError;

/** Success response for dedicated endpoint update */
export type DedicatedEndpointUpdateSuccess = {
  __typename?: 'DedicatedEndpointUpdateSuccess';
  endpoint: DedicatedEndpoint;
};

/** Input for DedicatedEndpointUpdateVersionComment */
export type DedicatedEndpointUpdateVersionCommentInput = {
  /** Comment on the version */
  comment: Scalars['String']['input'];
  /** Name of the endpoint */
  endpointId: Scalars['String']['input'];
  /** ID of the project */
  projectId: Scalars['ID']['input'];
  /** ID of the team */
  teamId: Scalars['ID']['input'];
  /** Version */
  version?: InputMaybe<Scalars['String']['input']>;
};

/** Response payload for DedicatedEndpointUpdateVersionComment */
export type DedicatedEndpointUpdateVersionCommentResponse = DedicatedEndpointInvalidVersion | DedicatedEndpointNotExistError | DedicatedEndpointUpdateVersionCommentSuccess | TeamNotExistError | UserPermissionError;

/** Success response for dedicated endpoint update version comment */
export type DedicatedEndpointUpdateVersionCommentSuccess = {
  __typename?: 'DedicatedEndpointUpdateVersionCommentSuccess';
  comment: Scalars['String']['output'];
  version: Scalars['String']['output'];
  /** @deprecated use version instead */
  versionNumber: Scalars['Int']['output'];
};

/** Usage series for a dedicated endpoint */
export type DedicatedEndpointUsageSeries = {
  __typename?: 'DedicatedEndpointUsageSeries';
  adapterId?: Maybe<Scalars['ID']['output']>;
  adapterType: DedicatedEndpointAdapterFilterType;
  endpointId: Scalars['ID']['output'];
  /** Number of input tokens the engine have processed */
  inputTokensV2?: Maybe<UnionTimeSeries>;
  /** Number of output tokens the engine have processed */
  outputTokensV2?: Maybe<UnionTimeSeries>;
  /** Number of replicas of the engine */
  replicas?: Maybe<IntTimeSeries>;
  /** Number of requests the engine have processed */
  requestsV2?: Maybe<UnionTimeSeries>;
  /** Number of total tokens the engine have processed */
  totalTokensV2?: Maybe<UnionTimeSeries>;
};


/** Usage series for a dedicated endpoint */
export type DedicatedEndpointUsageSeriesInputTokensV2Args = {
  bucket?: InputMaybe<Scalars['Int']['input']>;
  dateRange?: InputMaybe<DateRangeInput>;
};


/** Usage series for a dedicated endpoint */
export type DedicatedEndpointUsageSeriesOutputTokensV2Args = {
  bucket?: InputMaybe<Scalars['Int']['input']>;
  dateRange?: InputMaybe<DateRangeInput>;
};


/** Usage series for a dedicated endpoint */
export type DedicatedEndpointUsageSeriesReplicasArgs = {
  bucket?: InputMaybe<Scalars['Int']['input']>;
  dateRange?: InputMaybe<DateRangeInput>;
};


/** Usage series for a dedicated endpoint */
export type DedicatedEndpointUsageSeriesRequestsV2Args = {
  bucket?: InputMaybe<Scalars['Int']['input']>;
  dateRange?: InputMaybe<DateRangeInput>;
};


/** Usage series for a dedicated endpoint */
export type DedicatedEndpointUsageSeriesTotalTokensV2Args = {
  bucket?: InputMaybe<Scalars['Int']['input']>;
  dateRange?: InputMaybe<DateRangeInput>;
};

/** Usage summary for a dedicated endpoint */
export type DedicatedEndpointUsageSummary = {
  __typename?: 'DedicatedEndpointUsageSummary';
  /** Number of requests the engine have processed */
  requestsCumulativeV2?: Maybe<Scalars['Union']['output']>;
  /** Number of tokens the engine have processed */
  tokensCumulativeV2: DedicatedEndpointTokensUsageV2;
};

/** DedicatedEndpointVersion */
export type DedicatedEndpointVersion = Node & {
  __typename?: 'DedicatedEndpointVersion';
  adapterBindings?: Maybe<Array<DedicatedEndpointAdapterBinding>>;
  autoscalingCooldownSec?: Maybe<Scalars['Int']['output']>;
  autoscalingMax?: Maybe<Scalars['Int']['output']>;
  autoscalingMin?: Maybe<Scalars['Int']['output']>;
  awakingStep?: Maybe<DedicatedEndpointAwakingPhaseStep>;
  cancelreasonKind?: Maybe<DedicatedEndpointVersionCancelreasonKind>;
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<ClientUser>;
  createdByRollingBackTo?: Maybe<Scalars['Int']['output']>;
  enableContentLogging?: Maybe<Scalars['Boolean']['output']>;
  endpointId: Scalars['String']['output'];
  errorKind?: Maybe<DedicatedEndpointErrorCode>;
  gpuType?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  initializingStep?: Maybe<DedicatedEndpointInitializingPhaseStep>;
  maxBatchSize?: Maybe<Scalars['Int']['output']>;
  maxInputLength?: Maybe<Scalars['Int']['output']>;
  modelVersion?: Maybe<DedicatedModelVersion>;
  numGpus?: Maybe<Scalars['Int']['output']>;
  numReplicasRunning?: Maybe<Scalars['Int']['output']>;
  resourceRegion?: Maybe<Scalars['String']['output']>;
  status?: Maybe<DedicatedEndpointVersionStatus>;
  statusUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  tokenizerAddSpecialTokens?: Maybe<Scalars['Boolean']['output']>;
  tokenizerSkipSpecialTokens?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['String']['output'];
  /** @deprecated use version instead */
  versionNumber: Scalars['Int']['output'];
};

/** Cancel reason for dedicated endpoint version */
export enum DedicatedEndpointVersionCancelreasonKind {
  CancelRequestedWhileApplying = 'CANCEL_REQUESTED_WHILE_APPLYING',
  CancelRequestedWhilePending = 'CANCEL_REQUESTED_WHILE_PENDING',
  ErrorOccurred = 'ERROR_OCCURRED',
  SupersededWhilePending = 'SUPERSEDED_WHILE_PENDING',
  Unknown = 'UNKNOWN'
}

/** DedicatedEndpointVersions */
export type DedicatedEndpointVersionConnection = {
  __typename?: 'DedicatedEndpointVersionConnection';
  /** Returned DedicatedEndpointVersions list */
  edges: Array<DedicatedEndpointVersionEdge>;
  /** DedicatedEndpoint id */
  id: Scalars['ID']['output'];
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of deployments */
  totalCount: Scalars['Int']['output'];
};

/** DedicatedEndpointVersion in DedicatedEndpoint */
export type DedicatedEndpointVersionEdge = {
  __typename?: 'DedicatedEndpointVersionEdge';
  /** DedicatedEndpointVersion cursor */
  cursor: Scalars['Base64']['output'];
  /** DedicatedEndpointVersion node */
  node: DedicatedEndpointVersion;
};

export type DedicatedEndpointVersionFiltersInput = {
  /** When enabled, cancelled versions are excluded */
  excludeCancelledVersions?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The given endpoint update has gone beyond the point of cancellation */
export type DedicatedEndpointVersionProcessedTooFarToCancelError = BaseError & DedicatedEndpointCancelUpdateError & {
  __typename?: 'DedicatedEndpointVersionProcessedTooFarToCancelError';
  errorKind: DedicatedEndpointCancelUpdateErrorKind;
  message: Scalars['String']['output'];
};

/** Status for dedicated endpoint version */
export enum DedicatedEndpointVersionStatus {
  Applied = 'APPLIED',
  Applying = 'APPLYING',
  BackRolling = 'BACK_ROLLING',
  Cancelled = 'CANCELLED',
  Pending = 'PENDING'
}

/** DedicatedFinetuning workload */
export type DedicatedFinetuning = Node & {
  __typename?: 'DedicatedFinetuning';
  /** List of adapters created by the finetuning */
  adapters?: Maybe<DedicatedFinetuningAdapterConnection>;
  /** Timestamp when the job was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the job */
  createdBy?: Maybe<ClientUser>;
  /** Dataset used for the finetuning */
  dataset?: Maybe<DedicatedDatasetInterface>;
  /** Name of the dataset repository */
  hfDatasetRepo?: Maybe<Scalars['String']['output']>;
  /** Revision of the dataset repository */
  hfDatasetRepoRevision?: Maybe<Scalars['String']['output']>;
  /** Name of the model repository */
  hfModelRepo?: Maybe<Scalars['String']['output']>;
  /** Revision of the model repository */
  hfModelRepoRevision?: Maybe<Scalars['String']['output']>;
  /** Hyperparameters of the finetuning */
  hyperparameters?: Maybe<DedicatedFinetuningHyperparameters>;
  id: Scalars['ID']['output'];
  /** Model used for the finetuning */
  model?: Maybe<DedicatedModel>;
  /** Name of the job */
  name?: Maybe<Scalars['String']['output']>;
  /** Phase of the finetuning */
  phase?: Maybe<DedicatedFinetuningPhase>;
  /** DedicatedFinetuning status */
  status?: Maybe<DedicatedFinetuningStatus>;
  /** Timestamp when the job was updated */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Name of the wandb dataset */
  wandbDataset?: Maybe<Scalars['String']['output']>;
  /** Name of the wandb model */
  wandbModel?: Maybe<Scalars['String']['output']>;
  /** Name of the wandb project */
  wandbProject?: Maybe<Scalars['String']['output']>;
  /** Info of the wandb project integrated */
  wandbProjectInfo?: Maybe<DedicatedFinetuningWandbIntegrationInfo>;
};


/** DedicatedFinetuning workload */
export type DedicatedFinetuningAdaptersArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
};

/** DedicatedFinetuningAdapters */
export type DedicatedFinetuningAdapterConnection = {
  __typename?: 'DedicatedFinetuningAdapterConnection';
  /** Returned deployments list */
  edges: Array<DedicatedFinetuningAdapterEdge>;
  /** finetuning id */
  id: Scalars['ID']['output'];
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of deployments */
  totalCount: Scalars['Int']['output'];
};

/** DedicatedFinetuningAdapters in a project */
export type DedicatedFinetuningAdapterEdge = {
  __typename?: 'DedicatedFinetuningAdapterEdge';
  /** DedicatedAdapter cursor */
  cursor: Scalars['Base64']['output'];
  /** DedicatedAdapter node */
  node: DedicatedAdapter;
};

export type DedicatedFinetuningCreateDemoHyperparametersInput = {
  /** The total batch size used for training. */
  batchSize?: InputMaybe<Scalars['Int']['input']>;
  /** The number of steps to evaluate the model on the validation set. */
  evalSteps?: Scalars['Int']['input'];
  /** The initial learning rate for AdamW optimizer. */
  learningRate: Scalars['Float']['input'];
  /** Scaling factor that determines the influence of the low-rank matrices during fine-tuning. */
  loraAlpha?: InputMaybe<Scalars['Int']['input']>;
  /** Dropout rate applied during fine-tuning */
  loraDropout?: InputMaybe<Scalars['Float']['input']>;
  /** The rank of the lora parameters. */
  loraR?: InputMaybe<Scalars['Int']['input']>;
  /** If set to a positive number, the total number of training steps to perform. For a finite dataset, training is reiterated through the dataset (if all data is exhausted) until `max_steps` is reached. */
  maxSteps?: InputMaybe<Scalars['Int']['input']>;
  /** Total number of training epochs to perform (if not an integer, will perform the decimal part percents of the last epoch before stopping training). */
  numTrainEpochs?: InputMaybe<Scalars['Int']['input']>;
};

/** Input for DedicatedFinetuningCreateDemo */
export type DedicatedFinetuningCreateDemoInput = {
  /** Dataset ID for the finetuning */
  datasetId?: InputMaybe<Scalars['String']['input']>;
  /** HuggingFace Dataset repository */
  hfDatasetRepo?: InputMaybe<Scalars['String']['input']>;
  /** HuggingFace Model dataset commit */
  hfDatasetRepoRevision?: InputMaybe<Scalars['String']['input']>;
  /** Model name, one of 'meta-llama/Llama-2-7b', 'meta-llama/Llama-2-13b', 'mistralai/Mistral-7B-Instruct-v0.2' */
  hfModelRepo?: InputMaybe<Scalars['String']['input']>;
  /** HuggingFace Model model commit */
  hfModelRepoRevision?: InputMaybe<Scalars['String']['input']>;
  /** Training Hyperparameters */
  hyperparameters: DedicatedFinetuningCreateDemoHyperparametersInput;
  /** Model ID for the finetuning */
  modelId?: InputMaybe<Scalars['String']['input']>;
  /** Name of the finetuning */
  name: Scalars['String']['input'];
  /** ID of the project */
  projectId: Scalars['ID']['input'];
  /** ID of the team */
  teamId: Scalars['ID']['input'];
  /** Wandb config */
  wandbConfig?: InputMaybe<DedicatedFinetuningCreateDemoWandbConfigInput>;
  /** Wandb dataset artifact name */
  wandbDataset?: InputMaybe<Scalars['String']['input']>;
  /** Wandb model artifact name */
  wandbModel?: InputMaybe<Scalars['String']['input']>;
};

/** Response payload for DedicatedFinetuningCreateDemo */
export type DedicatedFinetuningCreateDemoResponse = DedicatedFinetuningCreateDemoSuccess | DedicatedFinetuningCreateDemoUnsupportedBackboneError | DedicatedFinetuningCreateDemoUnsupportedModelSizeError | TeamNotExistError | UserPermissionError;

/** Success response for dedicated team subscription */
export type DedicatedFinetuningCreateDemoSuccess = {
  __typename?: 'DedicatedFinetuningCreateDemoSuccess';
  finetuning: DedicatedFinetuning;
};

/** Does not support this backbone */
export type DedicatedFinetuningCreateDemoUnsupportedBackboneError = BaseError & {
  __typename?: 'DedicatedFinetuningCreateDemoUnsupportedBackboneError';
  message: Scalars['String']['output'];
};

/** Does not support this model size */
export type DedicatedFinetuningCreateDemoUnsupportedModelSizeError = BaseError & {
  __typename?: 'DedicatedFinetuningCreateDemoUnsupportedModelSizeError';
  message: Scalars['String']['output'];
};

export type DedicatedFinetuningCreateDemoWandbConfigInput = {
  /** Wandb project name */
  projectName?: InputMaybe<Scalars['String']['input']>;
};

/** Input for DedicatedFinetuningDelete */
export type DedicatedFinetuningDeleteInput = {
  finetuningId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};

/** Response payload for DedicatedFinetuningDelete */
export type DedicatedFinetuningDeleteResponse = DedicatedFinetuningDeleteSuccess | TeamNotExistError | UserPermissionError;

/** Success response for dedicated finetuning termination */
export type DedicatedFinetuningDeleteSuccess = {
  __typename?: 'DedicatedFinetuningDeleteSuccess';
  finetuning: DedicatedFinetuning;
};

/** Error code of Finetuning job. */
export enum DedicatedFinetuningErrorCode {
  CannotAccessRepoError = 'CANNOT_ACCESS_REPO_ERROR',
  InternalError = 'INTERNAL_ERROR',
  InternalUnknownError = 'INTERNAL_UNKNOWN_ERROR',
  InvalidDatasetError = 'INVALID_DATASET_ERROR',
  InvalidModelError = 'INVALID_MODEL_ERROR',
  InvalidTokenError = 'INVALID_TOKEN_ERROR',
  MemoryError = 'MEMORY_ERROR'
}

export type DedicatedFinetuningFiltersInput = {
  createdDateRange?: InputMaybe<DateRangeInput>;
  idSearch?: InputMaybe<Scalars['String']['input']>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<Scalars['ID']['input']>>;
  statuses?: InputMaybe<Array<DedicatedFinetuningStatus>>;
  teams?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

export type DedicatedFinetuningHyperparameters = {
  __typename?: 'DedicatedFinetuningHyperparameters';
  /** The total batch size used for training. */
  batchSize?: Maybe<Scalars['Int']['output']>;
  /** Eval steps */
  evalSteps?: Maybe<Scalars['Int']['output']>;
  /** The initial learning rate for AdamW optimizer. */
  learningRate?: Maybe<Scalars['Float']['output']>;
  /** Scaling factor that determines the influence of the low-rank matrices during fine-tuning. */
  loraAlpha?: Maybe<Scalars['Int']['output']>;
  /** Dropout rate applied during fine-tuning. */
  loraDropout?: Maybe<Scalars['Float']['output']>;
  /** The rank of the lora parameters. */
  loraR?: Maybe<Scalars['Int']['output']>;
  /** The maximum sequence length of the inputs. */
  maxSeqLength?: Maybe<Scalars['Int']['output']>;
  /** The total number of training epochs to perform. */
  numTrainEpochs?: Maybe<Scalars['Int']['output']>;
  /** The total number of training steps to perform. */
  numTrainSteps?: Maybe<Scalars['Int']['output']>;
};

/** Phase of Finetuning job. */
export enum DedicatedFinetuningInitializingPhaseStep {
  DownloadingModel = 'DOWNLOADING_MODEL',
  EngineInitializing = 'ENGINE_INITIALIZING',
  RequestingVirtualMachine = 'REQUESTING_VIRTUAL_MACHINE'
}

/** Finetuning Phase */
export type DedicatedFinetuningPhase = DedicatedFinetuningPhaseCancelled | DedicatedFinetuningPhaseCompleted | DedicatedFinetuningPhaseFailed | DedicatedFinetuningPhaseInitializing | DedicatedFinetuningPhaseTraining;

/** Cancelled phase of a dedicated endpoint */
export type DedicatedFinetuningPhaseCancelled = BaseDedicatedFinetuningPhase & {
  __typename?: 'DedicatedFinetuningPhaseCancelled';
  msg: Scalars['String']['output'];
};

/** Completed phase of a dedicated endpoint */
export type DedicatedFinetuningPhaseCompleted = BaseDedicatedFinetuningPhase & {
  __typename?: 'DedicatedFinetuningPhaseCompleted';
  elapsedStep: Scalars['Int']['output'];
  elapsedTime: Scalars['Float']['output'];
  estimatedRemainingTime?: Maybe<Scalars['Float']['output']>;
  /** Estimated total time in seconds */
  estimatedTotalTime?: Maybe<Scalars['Float']['output']>;
  msg: Scalars['String']['output'];
  processedTokens?: Maybe<Scalars['Int']['output']>;
  progressPercentage?: Maybe<Scalars['Float']['output']>;
  totalStep: Scalars['Int']['output'];
};

/** Failed phase of a dedicated endpoint */
export type DedicatedFinetuningPhaseFailed = BaseDedicatedFinetuningPhase & {
  __typename?: 'DedicatedFinetuningPhaseFailed';
  errorCode?: Maybe<DedicatedFinetuningErrorCode>;
  msg: Scalars['String']['output'];
};

/** Initializing phase of a dedicated endpoint */
export type DedicatedFinetuningPhaseInitializing = BaseDedicatedFinetuningPhase & {
  __typename?: 'DedicatedFinetuningPhaseInitializing';
  msg: Scalars['String']['output'];
  step: DedicatedFinetuningInitializingPhaseStep;
};

/** Training phase of a dedicated endpoint */
export type DedicatedFinetuningPhaseTraining = BaseDedicatedFinetuningPhase & {
  __typename?: 'DedicatedFinetuningPhaseTraining';
  elapsedStep: Scalars['Int']['output'];
  elapsedTime: Scalars['Float']['output'];
  estimatedRemainingTime?: Maybe<Scalars['Float']['output']>;
  /** Estimated total time in seconds */
  estimatedTotalTime?: Maybe<Scalars['Float']['output']>;
  msg: Scalars['String']['output'];
  processedTokens?: Maybe<Scalars['Int']['output']>;
  progressPercentage?: Maybe<Scalars['Float']['output']>;
  totalStep: Scalars['Int']['output'];
};

/** Status of Finetuning job. */
export enum DedicatedFinetuningStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Initializing = 'INITIALIZING',
  Training = 'TRAINING',
  Unknown = 'UNKNOWN'
}

/** Error response type for DedicatedFinetuning subscription */
export type DedicatedFinetuningSubscriptionError = {
  __typename?: 'DedicatedFinetuningSubscriptionError';
  message: Scalars['String']['output'];
};

/** Full state for DedicatedFinetuning subscription */
export type DedicatedFinetuningSubscriptionResponse = Node & {
  __typename?: 'DedicatedFinetuningSubscriptionResponse';
  /** List of adapters created by the finetuning */
  adapters?: Maybe<DedicatedFinetuningAdapterConnection>;
  /** Timestamp when the job was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the job */
  createdBy?: Maybe<ClientUser>;
  /** Dataset used for the finetuning */
  dataset?: Maybe<DedicatedDatasetInterface>;
  /** Name of the dataset repository */
  hfDatasetRepo?: Maybe<Scalars['String']['output']>;
  /** Revision of the dataset repository */
  hfDatasetRepoRevision?: Maybe<Scalars['String']['output']>;
  /** Name of the model repository */
  hfModelRepo?: Maybe<Scalars['String']['output']>;
  /** Revision of the model repository */
  hfModelRepoRevision?: Maybe<Scalars['String']['output']>;
  /** Hyperparameters of the finetuning */
  hyperparameters?: Maybe<DedicatedFinetuningHyperparameters>;
  id: Scalars['ID']['output'];
  /** Model used for the finetuning */
  model?: Maybe<DedicatedModel>;
  /** Name of the job */
  name?: Maybe<Scalars['String']['output']>;
  /** Phase of the finetuning */
  phase?: Maybe<DedicatedFinetuningPhase>;
  /** DedicatedFinetuning status */
  status?: Maybe<DedicatedFinetuningStatus>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  /** Timestamp when the job was updated */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Name of the wandb dataset */
  wandbDataset?: Maybe<Scalars['String']['output']>;
  /** Name of the wandb model */
  wandbModel?: Maybe<Scalars['String']['output']>;
  /** Name of the wandb project */
  wandbProject?: Maybe<Scalars['String']['output']>;
  /** Info of the wandb project integrated */
  wandbProjectInfo?: Maybe<DedicatedFinetuningWandbIntegrationInfo>;
};


/** Full state for DedicatedFinetuning subscription */
export type DedicatedFinetuningSubscriptionResponseAdaptersArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
};

/** Union of DedicatedFinetuningSubscriptionResponse */
export type DedicatedFinetuningSubscriptionResponseUnion = DedicatedFinetuningSubscriptionError | DedicatedFinetuningSubscriptionResponse;

/** Input for DedicatedFinetuningTerminate */
export type DedicatedFinetuningTerminateInput = {
  finetuningId: Scalars['ID']['input'];
  projectId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};

/** Response payload for DedicatedFinetuningTerminate */
export type DedicatedFinetuningTerminateResponse = DedicatedFinetuningTerminateSuccess | TeamNotExistError | UserPermissionError;

/** Success response for dedicated finetuning termination */
export type DedicatedFinetuningTerminateSuccess = {
  __typename?: 'DedicatedFinetuningTerminateSuccess';
  finetuning: DedicatedFinetuning;
};

/** Input for DedicatedFinetuningUpdateName */
export type DedicatedFinetuningUpdateNameInput = {
  finetuningId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

/** Response payload for DedicatedFinetuningUpdateName */
export type DedicatedFinetuningUpdateNameResponse = DedicatedFinetuningUpdateNameSuccess | TeamNotExistError | UserPermissionError;

/** Success response for finetuning in dedicated team */
export type DedicatedFinetuningUpdateNameSuccess = {
  __typename?: 'DedicatedFinetuningUpdateNameSuccess';
  finetuning: DedicatedFinetuning;
};

export type DedicatedFinetuningWandbIntegrationInfo = {
  __typename?: 'DedicatedFinetuningWandbIntegrationInfo';
  /** The entity which holds the integrated project */
  entityName: Scalars['String']['output'];
  /** The name of the integrated project */
  projectName: Scalars['String']['output'];
  /** The project URL */
  projectUrl: Scalars['URL']['output'];
};

/** Instance for the Friendli Suite Dedicated Product */
export type DedicatedInstance = {
  __typename?: 'DedicatedInstance';
  /** Is the instance disabled */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  /** Reason why the instance is disabled */
  disabledReason?: Maybe<Scalars['String']['output']>;
  /** Instance ID */
  id: Scalars['ID']['output'];
  /** Name of the deployment */
  name?: Maybe<Scalars['String']['output']>;
  /** Instance options */
  options?: Maybe<Array<DedicatedInstanceOption>>;
  /** Instance regions */
  regions?: Maybe<Array<DedicatedInstanceRegion>>;
};

/** Reasons why an instance is disabled */
export enum DedicatedInstanceDisabledReasonKind {
  EnterpriseOnly = 'ENTERPRISE_ONLY',
  InsufficientVram = 'INSUFFICIENT_VRAM',
  TemporaryUnavailable = 'TEMPORARY_UNAVAILABLE'
}

/** Friendli Suite Endpoint Instance */
export type DedicatedInstanceGpu = {
  __typename?: 'DedicatedInstanceGpu';
  gpuQuantity: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  regionCountryCode?: Maybe<Scalars['String']['output']>;
  regionName?: Maybe<Scalars['String']['output']>;
};

/** Instance options Dedicated Product */
export type DedicatedInstanceOption = {
  __typename?: 'DedicatedInstanceOption';
  id: Scalars['ID']['output'];
  pricePerHour?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  /** If provided, means that the option has a warning. */
  warningReason?: Maybe<Scalars['String']['output']>;
};

/** Instance regions */
export type DedicatedInstanceRegion = {
  __typename?: 'DedicatedInstanceRegion';
  countryCode: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Friendli Suite Endpoint Instance */
export type DedicatedInstanceV2 = {
  __typename?: 'DedicatedInstanceV2';
  /** Reason why the instance was disabled */
  disabledReason?: Maybe<DedicatedInstanceDisabledReasonKind>;
  /** Dedicated instance GPU */
  gpu?: Maybe<DedicatedInstanceGpu>;
  /** Instance ID */
  id: Scalars['ID']['output'];
  /** Price per hour */
  pricePerHour?: Maybe<Scalars['String']['output']>;
};

export type DedicatedInstancesModelInput = {
  huggingface?: InputMaybe<HuggingfaceRepoInput>;
  native?: InputMaybe<Scalars['ID']['input']>;
  wandb?: InputMaybe<Scalars['ID']['input']>;
};

/** DedicatedModel workload */
export type DedicatedModel = Node & {
  __typename?: 'DedicatedModel';
  /** List of adapters associated with the base model */
  adapters?: Maybe<DedicatedModelAdapterConnection>;
  /** Timestamp when the model was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who created the model */
  createdBy?: Maybe<ClientUser>;
  /** Digest of the model */
  digest?: Maybe<Scalars['String']['output']>;
  /** List of endpoints associated with the base model */
  endpoints?: Maybe<DedicatedModelEndpointConnection>;
  /** File content */
  fileContent?: Maybe<Scalars['String']['output']>;
  /** Files associated with the model */
  files?: Maybe<DedicatedModelFiles>;
  /** List of finetunings created with the model */
  finetunings?: Maybe<DedicatedModelFinetuningConnection>;
  id: Scalars['ID']['output'];
  /** Name of the model */
  name?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the model was updated */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** DedicatedModel workload */
export type DedicatedModelAdaptersArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedModelAdapterConnectionFilters>;
  sorts?: InputMaybe<DedicatedModelAdapterSortsInput>;
};


/** DedicatedModel workload */
export type DedicatedModelEndpointsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedModelEndpointConnectionFilters>;
  sorts?: InputMaybe<DedicatedModelEndpointSortsInput>;
};


/** DedicatedModel workload */
export type DedicatedModelFileContentArgs = {
  fileDigest: Scalars['String']['input'];
};


/** DedicatedModel workload */
export type DedicatedModelFinetuningsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedModelFinetuningFiltersInput>;
  sorts?: InputMaybe<DedicatedModelFinetuningSortsInput>;
};

/** DedicatedModelAdapters */
export type DedicatedModelAdapterConnection = {
  __typename?: 'DedicatedModelAdapterConnection';
  /** Returned deployments list */
  edges: Array<DedicatedModelAdapterEdge>;
  id: Scalars['ID']['output'];
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of deployments */
  totalCount: Scalars['Int']['output'];
};

/** Filters for AdapterConnection */
export type DedicatedModelAdapterConnectionFilters = {
  /** Filter by created timestamp */
  createdDateRange?: InputMaybe<DateRangeInput>;
  /** Hugging Face base model the adapter was trained from */
  hfBaseModelName?: InputMaybe<Scalars['String']['input']>;
  /** Filter with corresponding adapter's id */
  idSearch?: InputMaybe<Scalars['String']['input']>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  /** Native base model the adapter was trained from */
  nativeBaseModelId?: InputMaybe<Scalars['String']['input']>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
  /** W&B base model the adapter was trained from */
  wandbBaseModelName?: InputMaybe<Scalars['String']['input']>;
};

/** DedicatedModelAdapters in a model */
export type DedicatedModelAdapterEdge = {
  __typename?: 'DedicatedModelAdapterEdge';
  /** DedicatedAdapter cursor */
  cursor: Scalars['Base64']['output'];
  /** DedicatedAdapter node */
  node: DedicatedAdapter;
};

export type DedicatedModelAdapterSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: created_at, updated_at, name */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Input for DedicatedModelArchive */
export type DedicatedModelArchiveInput = {
  modelId: Scalars['ID']['input'];
};

/** Response payload for DedicatedModelArchive */
export type DedicatedModelArchiveResponse = DedicatedModelArchiveSuccess | UserPermissionError;

/** Success response for model archive in dedicated team */
export type DedicatedModelArchiveSuccess = {
  __typename?: 'DedicatedModelArchiveSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Upload info for a dedicated model */
export type DedicatedModelBlobUploadInfo = {
  __typename?: 'DedicatedModelBlobUploadInfo';
  required: Scalars['Boolean']['output'];
};

/** Error response for when file already exists in the project. */
export type DedicatedModelCommitChunkGroupAlreadyExistError = BaseError & {
  __typename?: 'DedicatedModelCommitChunkGroupAlreadyExistError';
  message: Scalars['String']['output'];
};

/** Input for DedicatedModelCommitChunkGroup */
export type DedicatedModelCommitChunkGroupInput = {
  /** ID of the chunk group */
  chunkGroupId: Scalars['String']['input'];
  /** File descriptor input */
  fileInput: FileDescriptorInput;
  /** ID of the model to push */
  modelId: Scalars['String']['input'];
};

/** Response payload for DedicatedModelCommitChunkGroup */
export type DedicatedModelCommitChunkGroupResponse = DedicatedModelCommitChunkGroupAlreadyExistError | DedicatedModelCommitChunkGroupSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for model creation in dedicated team */
export type DedicatedModelCommitChunkGroupSuccess = {
  __typename?: 'DedicatedModelCommitChunkGroupSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Model connection */
export type DedicatedModelConnection = {
  __typename?: 'DedicatedModelConnection';
  /** Returned teams */
  edges: Array<DedicatedModel>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of teams */
  totalCount: Scalars['Int']['output'];
};

/** Error response for when file already exists in the project. */
export type DedicatedModelCreateChunkGroupAlreadyExistError = BaseError & {
  __typename?: 'DedicatedModelCreateChunkGroupAlreadyExistError';
  message: Scalars['String']['output'];
};

/** Input for DedicatedModelCreateChunkGroup */
export type DedicatedModelCreateChunkGroupInput = {
  /** File descriptor input */
  fileInput: FileDescriptorInput;
  /** ID of the model to push */
  modelId: Scalars['String']['input'];
};

/** Response payload for DedicatedModelCreateChunkGroup */
export type DedicatedModelCreateChunkGroupResponse = DedicatedModelCreateChunkGroupAlreadyExistError | DedicatedModelCreateChunkGroupSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for model creation in dedicated team */
export type DedicatedModelCreateChunkGroupSuccess = {
  __typename?: 'DedicatedModelCreateChunkGroupSuccess';
  chunkGroupId: Scalars['String']['output'];
};

/** Input for DedicatedModelCreate */
export type DedicatedModelCreateInput = {
  digest: Scalars['String']['input'];
  name: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};

/** Response payload for DedicatedModelCreate */
export type DedicatedModelCreateResponse = DedicatedModelCreateSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for model creation in dedicated team */
export type DedicatedModelCreateSuccess = {
  __typename?: 'DedicatedModelCreateSuccess';
  model: DedicatedModel;
};

/** DedicatedEndpoints */
export type DedicatedModelEndpointConnection = {
  __typename?: 'DedicatedModelEndpointConnection';
  /** Returned deployments list */
  edges: Array<DedicatedModelEndpointEdge>;
  /** Project id */
  id: Scalars['ID']['output'];
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of deployments */
  totalCount: Scalars['Int']['output'];
};

/** Filters for EndpointConnection */
export type DedicatedModelEndpointConnectionFilters = {
  /** Filter by created timestamp */
  createdDateRange?: InputMaybe<DateRangeInput>;
  /** Filter with corresponding adapter's id */
  idSearch?: InputMaybe<Scalars['String']['input']>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  states?: InputMaybe<Array<DedicatedEndpointStatus>>;
  types?: InputMaybe<Array<InputMaybe<DedicatedEndpointType>>>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

/** DedicatedEndpoints in a project */
export type DedicatedModelEndpointEdge = {
  __typename?: 'DedicatedModelEndpointEdge';
  /** DedicatedEndpoint cursor */
  cursor: Scalars['Base64']['output'];
  /** DedicatedEndpoint node */
  node: DedicatedEndpoint;
};

export type DedicatedModelEndpointSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: created_at, updated_at, name */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** File metadata of a dedicated document */
export type DedicatedModelFileMetadata = {
  __typename?: 'DedicatedModelFileMetadata';
  digest?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
};

/** files associated with a dedicated model */
export type DedicatedModelFiles = {
  __typename?: 'DedicatedModelFiles';
  config: DedicatedModelFileMetadata;
  safetensors: Array<DedicatedModelFileMetadata>;
  specialTokensMap?: Maybe<DedicatedModelFileMetadata>;
  tokenizer: DedicatedModelFileMetadata;
  tokenizerConfig?: Maybe<DedicatedModelFileMetadata>;
};

export type DedicatedModelFiltersInput = {
  createdDateRange?: InputMaybe<DateRangeInput>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

/** DedicatedFinetunings */
export type DedicatedModelFinetuningConnection = {
  __typename?: 'DedicatedModelFinetuningConnection';
  /** Returned deployments list */
  edges: Array<DedicatedModelFinetuningEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of deployments */
  totalCount: Scalars['Int']['output'];
};

/** DedicatedFinetunings in a project */
export type DedicatedModelFinetuningEdge = {
  __typename?: 'DedicatedModelFinetuningEdge';
  /** DedicatedFinetuning cursor */
  cursor: Scalars['Base64']['output'];
  /** DedicatedFinetuning node */
  node: DedicatedFinetuning;
};

export type DedicatedModelFinetuningFiltersInput = {
  /** Filter by created timestamp */
  createdDateRange?: InputMaybe<DateRangeInput>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  /** Filter by project state */
  states?: InputMaybe<Array<DedicatedFinetuningStatus>>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

export type DedicatedModelFinetuningSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: created_at, updated_at, name, status */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Native model used */
export type DedicatedModelNative = Node & {
  __typename?: 'DedicatedModelNative';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

/** Input for DedicatedModelPushAdapterComplete */
export type DedicatedModelPushAdapterCompleteInput = {
  /** ID of the adapter to push */
  adapterId: Scalars['String']['input'];
  /** Model structure to push */
  modelStructure: AdapterModelCreateInput;
};

/** Response payload for DedicatedModelPushAdapterComplete */
export type DedicatedModelPushAdapterCompleteResponse = DedicatedModelPushAdapterCompleteSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for model creation in dedicated team */
export type DedicatedModelPushAdapterCompleteSuccess = {
  __typename?: 'DedicatedModelPushAdapterCompleteSuccess';
  adapter: DedicatedAdapter;
};

/** Input for DedicatedModelPushAdapterStart */
export type DedicatedModelPushAdapterStartInput = {
  /** ID of the model the adapter is based on */
  baseModelId: Scalars['String']['input'];
  /** Model structure to push */
  modelStructure: AdapterModelCreateInput;
  /** Name of the model. Auto-generated if null */
  name?: InputMaybe<Scalars['String']['input']>;
  /** ID of the project to register the model to */
  projectId: Scalars['ID']['input'];
};

/** Response payload for DedicatedModelPushAdapterStart */
export type DedicatedModelPushAdapterStartResponse = DedicatedModelPushAdapterStartSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for model creation in dedicated team */
export type DedicatedModelPushAdapterStartSuccess = {
  __typename?: 'DedicatedModelPushAdapterStartSuccess';
  adapter: DedicatedAdapter;
  uploadPlan: DedicatedAdapterUploadPlan;
};

/** Input for DedicatedModelPushBaseComplete */
export type DedicatedModelPushBaseCompleteInput = {
  /** ID of the model to push */
  modelId: Scalars['String']['input'];
  /** Model structure to push */
  modelStructure: BaseModelCreateInput;
};

/** Response payload for DedicatedModelPushBaseComplete */
export type DedicatedModelPushBaseCompleteResponse = DedicatedModelPushBaseCompleteSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for model creation in dedicated team */
export type DedicatedModelPushBaseCompleteSuccess = {
  __typename?: 'DedicatedModelPushBaseCompleteSuccess';
  model: DedicatedModel;
};

/** Input for DedicatedModelPushBaseStart */
export type DedicatedModelPushBaseStartInput = {
  /** Model structure to push */
  modelStructure: BaseModelCreateInput;
  /** Name of the model. Auto-generated if null */
  name?: InputMaybe<Scalars['String']['input']>;
  /** ID of the project to register the model to */
  projectId: Scalars['ID']['input'];
};

/** Response payload for DedicatedModelPushBaseStart */
export type DedicatedModelPushBaseStartResponse = DedicatedModelPushBaseStartSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for model creation in dedicated team */
export type DedicatedModelPushBaseStartSuccess = {
  __typename?: 'DedicatedModelPushBaseStartSuccess';
  model: DedicatedModel;
  uploadPlan: DedicatedModelUploadPlan;
};

/** Input for DedicatedModelPushChunkComplete */
export type DedicatedModelPushChunkCompleteInput = {
  /** File descriptor input */
  fileInput: FileChunkCompleteInput;
  /** ID of the model to push */
  modelId: Scalars['String']['input'];
};

/** Response payload for DedicatedModelPushChunkComplete */
export type DedicatedModelPushChunkCompleteResponse = DedicatedModelPushChunkCompleteSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for model creation in dedicated team */
export type DedicatedModelPushChunkCompleteSuccess = {
  __typename?: 'DedicatedModelPushChunkCompleteSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Error response for when file already exists in the project. */
export type DedicatedModelPushChunkStartAlreadyExistError = BaseError & {
  __typename?: 'DedicatedModelPushChunkStartAlreadyExistError';
  message: Scalars['String']['output'];
};

/** Input for DedicatedModelPushChunkStart */
export type DedicatedModelPushChunkStartInput = {
  /** File descriptor input */
  fileInput: FileChunkInput;
  /** ID of the model to push */
  modelId: Scalars['String']['input'];
};

/** Response payload for DedicatedModelPushChunkStart */
export type DedicatedModelPushChunkStartResponse = DedicatedModelPushChunkStartAlreadyExistError | DedicatedModelPushChunkStartSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for model creation in dedicated team */
export type DedicatedModelPushChunkStartSuccess = {
  __typename?: 'DedicatedModelPushChunkStartSuccess';
  uploadUrl: Scalars['String']['output'];
};

/** Input for DedicatedModelPushFileComplete */
export type DedicatedModelPushFileCompleteInput = {
  /** File descriptor input */
  fileInput: FileDescriptorInput;
  /** ID of the model to push */
  modelId: Scalars['String']['input'];
};

/** Response payload for DedicatedModelPushFileComplete */
export type DedicatedModelPushFileCompleteResponse = DedicatedModelPushFileCompleteSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for model creation in dedicated team */
export type DedicatedModelPushFileCompleteSuccess = {
  __typename?: 'DedicatedModelPushFileCompleteSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Error response for when file already exists in the project. */
export type DedicatedModelPushFileStartAlreadyExistError = BaseError & {
  __typename?: 'DedicatedModelPushFileStartAlreadyExistError';
  message: Scalars['String']['output'];
};

/** Input for DedicatedModelPushFileStart */
export type DedicatedModelPushFileStartInput = {
  /** File descriptor input */
  fileInput: FileDescriptorInput;
  /** ID of the model to push */
  modelId: Scalars['String']['input'];
};

/** Response payload for DedicatedModelPushFileStart */
export type DedicatedModelPushFileStartResponse = DedicatedModelPushFileStartAlreadyExistError | DedicatedModelPushFileStartSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for model creation in dedicated team */
export type DedicatedModelPushFileStartSuccess = {
  __typename?: 'DedicatedModelPushFileStartSuccess';
  uploadInfo: FileUploadInfo;
};

/** Upload plan for a dedicated model */
export type DedicatedModelUploadPlan = {
  __typename?: 'DedicatedModelUploadPlan';
  config: DedicatedModelBlobUploadInfo;
  safetensors: Array<DedicatedModelBlobUploadInfo>;
  specialTokensMap?: Maybe<DedicatedModelBlobUploadInfo>;
  tokenizer: DedicatedModelBlobUploadInfo;
  tokenizerConfig?: Maybe<DedicatedModelBlobUploadInfo>;
};

/** DedicatedModelVersion */
export type DedicatedModelVersion = {
  id: Scalars['ID']['output'];
  type: DedicatedModelVersionType;
};

/** HuggingFace model used */
export type DedicatedModelVersionHuggingface = DedicatedModelVersion & Node & {
  __typename?: 'DedicatedModelVersionHuggingface';
  /** HuggingFace commit hash */
  huggingfaceCommitHash?: Maybe<Scalars['String']['output']>;
  /** HuggingFace repo name */
  huggingfaceRepoName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  type: DedicatedModelVersionType;
};

/** Native model version used */
export type DedicatedModelVersionNative = DedicatedModelVersion & Node & {
  __typename?: 'DedicatedModelVersionNative';
  /** Model version comment */
  comment?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Native model id */
  model?: Maybe<DedicatedModelNative>;
  type: DedicatedModelVersionType;
  /** Model version id */
  version?: Maybe<Scalars['Int']['output']>;
};

/** Type for ModelVersion */
export enum DedicatedModelVersionType {
  Huggingface = 'HUGGINGFACE',
  Native = 'NATIVE',
  Wandb = 'WANDB'
}

/** WandB model used */
export type DedicatedModelVersionWandb = DedicatedModelVersion & Node & {
  __typename?: 'DedicatedModelVersionWandb';
  id: Scalars['ID']['output'];
  type: DedicatedModelVersionType;
  /** WandB repo name */
  wandbArtifactFullName?: Maybe<Scalars['String']['output']>;
};

/** PeriFlow ClientUser */
export type DedicatedProject = Node & {
  __typename?: 'DedicatedProject';
  /** List of adapters in the project */
  adapters?: Maybe<DedicatedProjectAdapterConnection>;
  /** Created timestamp of the project */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<ClientUser>;
  /** List of datasets in the project */
  datasets?: Maybe<DedicatedProjectDatasetConnection>;
  /** List of documents in the project */
  documents?: Maybe<DedicatedProjectDocumentConnection>;
  /** List of deployments in the project */
  endpoints?: Maybe<DedicatedProjectEndpointConnection>;
  /** List of finetunings in the project */
  finetunings?: Maybe<DedicatedProjectFinetuningConnection>;
  id: Scalars['ID']['output'];
  /** List of members in the project */
  members?: Maybe<DedicatedProjectMemberConnection>;
  /** List of models in the project */
  models?: Maybe<DedicatedProjectModelConnection>;
  /** Name of the project */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * State of the project
   * @deprecated Use status
   */
  state?: Maybe<DedicatedProjectState>;
  /** Status of the project */
  status?: Maybe<DedicatedProjectStatus>;
  /** Updated timestamp of the project */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<ClientUser>;
  /** Project usage */
  usage?: Maybe<DedicatedProjectUsage>;
};


/** PeriFlow ClientUser */
export type DedicatedProjectAdaptersArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedProjectAdapterConnectionFilters>;
};


/** PeriFlow ClientUser */
export type DedicatedProjectDatasetsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedProjectDatasetFiltersInput>;
  sorts?: InputMaybe<DedicatedProjectDatasetSortsInput>;
};


/** PeriFlow ClientUser */
export type DedicatedProjectDocumentsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
};


/** PeriFlow ClientUser */
export type DedicatedProjectEndpointsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedProjectEndpointConnectionFilters>;
  sorts?: InputMaybe<DedicatedEndpointSortsInput>;
};


/** PeriFlow ClientUser */
export type DedicatedProjectFinetuningsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedProjectFinetuningFiltersInput>;
  sorts?: InputMaybe<DedicatedProjectFinetuningSortsInput>;
};


/** PeriFlow ClientUser */
export type DedicatedProjectMembersArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedProjectMemberFiltersInput>;
  sorts?: InputMaybe<DedicatedProjectMemberSortsInput>;
};


/** PeriFlow ClientUser */
export type DedicatedProjectModelsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
};

/** DedicatedProjectAdapters */
export type DedicatedProjectAdapterConnection = {
  __typename?: 'DedicatedProjectAdapterConnection';
  /** Returned deployments list */
  edges: Array<DedicatedProjectAdapterEdge>;
  id: Scalars['ID']['output'];
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of deployments */
  totalCount: Scalars['Int']['output'];
};

/** Filters for AdapterConnection */
export type DedicatedProjectAdapterConnectionFilters = {
  /** Huggingface base model the adapter was trained from */
  hfBaseModelName?: InputMaybe<Scalars['String']['input']>;
  /** Native base model the adapter was trained from */
  nativeBaseModelId?: InputMaybe<Scalars['String']['input']>;
  /** W&B base model the adapter was trained from */
  wandbBaseModelName?: InputMaybe<Scalars['String']['input']>;
};

/** DedicatedProjectAdapters in a project */
export type DedicatedProjectAdapterEdge = {
  __typename?: 'DedicatedProjectAdapterEdge';
  /** DedicatedAdapter cursor */
  cursor: Scalars['Base64']['output'];
  /** DedicatedAdapter node */
  node: DedicatedAdapter;
};

/** Input for DedicatedProjectAddMember */
export type DedicatedProjectAddMemberInput = {
  projectId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
  userId: Scalars['String']['input'];
};

/** Response payload for DedicatedProjectAddMember */
export type DedicatedProjectAddMemberResponse = DedicatedProjectAddMemberSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for project creation in dedicated team */
export type DedicatedProjectAddMemberSuccess = {
  __typename?: 'DedicatedProjectAddMemberSuccess';
  member: ClientUser;
  project: DedicatedProject;
};

/** Input for DedicatedProjectArchive */
export type DedicatedProjectArchiveInput = {
  /** ID of the Project */
  projectId: Scalars['ID']['input'];
};

/** Response payload for DedicatedProjectArchive */
export type DedicatedProjectArchiveResponse = DedicatedProjectArchiveRunningWorkloadsError | DedicatedProjectArchiveSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Error response for when provided project has running workloads */
export type DedicatedProjectArchiveRunningWorkloadsError = BaseError & {
  __typename?: 'DedicatedProjectArchiveRunningWorkloadsError';
  message: Scalars['String']['output'];
};

/** Success response for project creation in dedicated team */
export type DedicatedProjectArchiveSuccess = {
  __typename?: 'DedicatedProjectArchiveSuccess';
  project: DedicatedProject;
};

/** Input for DedicatedProjectCreate */
export type DedicatedProjectCreateInput = {
  memberIds: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  teamId: Scalars['ID']['input'];
};

/** Response payload for DedicatedProjectCreate */
export type DedicatedProjectCreateResponse = DedicatedProjectCreateSuccess | ProjectNameDuplicateError | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for project creation in dedicated team */
export type DedicatedProjectCreateSuccess = {
  __typename?: 'DedicatedProjectCreateSuccess';
  project: DedicatedProject;
};

/** DedicatedProjectDatasets */
export type DedicatedProjectDatasetConnection = {
  __typename?: 'DedicatedProjectDatasetConnection';
  /** Returned deployments list */
  edges: Array<DedicatedProjectDatasetEdge>;
  /** Project id */
  id: Scalars['ID']['output'];
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of deployments */
  totalCount: Scalars['Int']['output'];
};

/** DedicatedProjectDatasets in a project */
export type DedicatedProjectDatasetEdge = {
  __typename?: 'DedicatedProjectDatasetEdge';
  /** DedicatedDataset cursor */
  cursor: Scalars['Base64']['output'];
  /** DedicatedDataset node */
  node: DedicatedDatasetInterface;
};

export type DedicatedProjectDatasetFiltersInput = {
  /** Filter by joined timestamp */
  createdDateRange?: InputMaybe<DateRangeInput>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  /** Filter by dataset state */
  statuses?: InputMaybe<Array<DedicatedDatasetStatus>>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

export type DedicatedProjectDatasetSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: created_at, updated_at, name, status */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type DedicatedProjectDayCostUsage = {
  __typename?: 'DedicatedProjectDayCostUsage';
  /** Endpoint cost */
  endpoint?: Maybe<Scalars['Decimal']['output']>;
  /** Finetuning cost */
  finetuning?: Maybe<Scalars['Decimal']['output']>;
};

export type DedicatedProjectDayCostUsageTimeSeries = {
  __typename?: 'DedicatedProjectDayCostUsageTimeSeries';
  data: Array<DedicatedProjectDayCostUsageTimeSeriesObservation>;
};

export type DedicatedProjectDayCostUsageTimeSeriesObservation = {
  __typename?: 'DedicatedProjectDayCostUsageTimeSeriesObservation';
  timestamp: Scalars['DateTime']['output'];
  values: DedicatedProjectDayCostUsage;
};

/** DedicatedDocuments */
export type DedicatedProjectDocumentConnection = {
  __typename?: 'DedicatedProjectDocumentConnection';
  /** Returned documents list */
  edges: Array<DedicatedProjectDocumentEdge>;
  id: Scalars['ID']['output'];
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of documents */
  totalCount: Scalars['Int']['output'];
};

/** DedicatedDocuments in a project */
export type DedicatedProjectDocumentEdge = {
  __typename?: 'DedicatedProjectDocumentEdge';
  /** DedicatedDocument cursor */
  cursor: Scalars['Base64']['output'];
  /** DedicatedDocument node */
  node: DedicatedDocument;
};

/** DedicatedEndpoints */
export type DedicatedProjectEndpointConnection = {
  __typename?: 'DedicatedProjectEndpointConnection';
  /** Returned deployments list */
  edges: Array<DedicatedProjectEndpointEdge>;
  /** Project id */
  id: Scalars['ID']['output'];
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of deployments */
  totalCount: Scalars['Int']['output'];
};

/** Filters for EndpointConnection */
export type DedicatedProjectEndpointConnectionFilters = {
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  states?: InputMaybe<Array<DedicatedEndpointStatus>>;
  types?: InputMaybe<Array<InputMaybe<DedicatedEndpointType>>>;
};

/** DedicatedEndpoints in a project */
export type DedicatedProjectEndpointEdge = {
  __typename?: 'DedicatedProjectEndpointEdge';
  /** DedicatedEndpoint cursor */
  cursor: Scalars['Base64']['output'];
  /** DedicatedEndpoint node */
  node: DedicatedEndpoint;
};

/** DedicatedFinetunings */
export type DedicatedProjectFinetuningConnection = {
  __typename?: 'DedicatedProjectFinetuningConnection';
  /** Returned deployments list */
  edges: Array<DedicatedProjectFinetuningEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of deployments */
  totalCount: Scalars['Int']['output'];
};

/** DedicatedFinetunings in a project */
export type DedicatedProjectFinetuningEdge = {
  __typename?: 'DedicatedProjectFinetuningEdge';
  /** DedicatedFinetuning cursor */
  cursor: Scalars['Base64']['output'];
  /** DedicatedFinetuning node */
  node: DedicatedFinetuning;
};

export type DedicatedProjectFinetuningFiltersInput = {
  /** Filter by created timestamp */
  createdDateRange?: InputMaybe<DateRangeInput>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  /** Filter by project state */
  states?: InputMaybe<Array<DedicatedFinetuningStatus>>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

export type DedicatedProjectFinetuningSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: created_at, updated_at, name, status */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Users in a Dedicated Project */
export type DedicatedProjectMemberConnection = {
  __typename?: 'DedicatedProjectMemberConnection';
  /** Returned registration list */
  edges: Array<DedicatedProjectMemberEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of waitlist registrations */
  totalCount: Scalars['Int']['output'];
};

/** User in a Dedicated Project */
export type DedicatedProjectMemberEdge = {
  __typename?: 'DedicatedProjectMemberEdge';
  cursor: Scalars['Base64']['output'];
  node: ClientUser;
};

export type DedicatedProjectMemberFiltersInput = {
  /** Filter by joined timestamp */
  joinedDateRange?: InputMaybe<DateRangeInput>;
  roles?: InputMaybe<Array<DedicatedProjectMembershipRole>>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
  user_EmailSearch?: InputMaybe<Scalars['String']['input']>;
  user_NameOrEmailSearch?: InputMaybe<Scalars['String']['input']>;
  user_NameSearch?: InputMaybe<Scalars['String']['input']>;
};

export type DedicatedProjectMemberSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: joined_at, role, updated_at, user__state, user__email, user__name, user__created_at */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** User's project membership role */
export enum DedicatedProjectMembershipRole {
  Member = 'MEMBER',
  Owner = 'OWNER'
}

/** DedicatedProjectModels */
export type DedicatedProjectModelConnection = {
  __typename?: 'DedicatedProjectModelConnection';
  /** Returned deployments list */
  edges: Array<DedicatedProjectModelEdge>;
  /** Project id */
  id: Scalars['ID']['output'];
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of deployments */
  totalCount: Scalars['Int']['output'];
};

/** DedicatedProjectModels in a project */
export type DedicatedProjectModelEdge = {
  __typename?: 'DedicatedProjectModelEdge';
  /** DedicatedModel cursor */
  cursor: Scalars['Base64']['output'];
  /** DedicatedModel node */
  node: DedicatedModel;
};

/** Input for DedicatedProjectRemoveMember */
export type DedicatedProjectRemoveMemberInput = {
  projectId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
  userId: Scalars['String']['input'];
};

/** Response payload for DedicatedProjectRemoveMember */
export type DedicatedProjectRemoveMemberResponse = DedicatedProjectRemoveMemberSuccess | TeamNotExistError | UserNotExistError | UserPermissionError;

/** Success response for project creation in dedicated team */
export type DedicatedProjectRemoveMemberSuccess = {
  __typename?: 'DedicatedProjectRemoveMemberSuccess';
  member: ClientUser;
  project: DedicatedProject;
};

/** Project state */
export enum DedicatedProjectState {
  Archived = 'ARCHIVED',
  Created = 'CREATED',
  Deleted = 'DELETED',
  Unknown = 'UNKNOWN'
}

/** Project status */
export enum DedicatedProjectStatus {
  Archived = 'ARCHIVED',
  Created = 'CREATED',
  Deleted = 'DELETED'
}

/** Input for DedicatedProjectUpdateName */
export type DedicatedProjectUpdateNameInput = {
  name: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};

/** Response payload for DedicatedProjectUpdateName */
export type DedicatedProjectUpdateNameResponse = DedicatedProjectUpdateNameSuccess | ProjectNameDuplicateError | ProjectNotExistError | TeamNotExistError | UserPermissionError;

/** Success response for project creation in dedicated team */
export type DedicatedProjectUpdateNameSuccess = {
  __typename?: 'DedicatedProjectUpdateNameSuccess';
  project: DedicatedProject;
};

/** Metric summary for a dedicated endpoint */
export type DedicatedProjectUsage = {
  __typename?: 'DedicatedProjectUsage';
  /** Cost breakdown of a project by day */
  breakdownByDay?: Maybe<DedicatedProjectDayCostUsageTimeSeries>;
  endpointId: Scalars['ID']['output'];
};


/** Metric summary for a dedicated endpoint */
export type DedicatedProjectUsageBreakdownByDayArgs = {
  yearMonth: YearMonthInput;
};

/** Team Subscription for the Friendli Suite Dedicated Product */
export type DedicatedSubplan = BaseProduct & {
  __typename?: 'DedicatedSubplan';
  /** Free credit usage */
  freeCreditUsage?: Maybe<DedicatedSubplanFreeCreditUsage>;
  /** Team id */
  id: Scalars['ID']['output'];
  /** List of members in the organization */
  members?: Maybe<DedicatedSubplanMemberConnection>;
  /** List of projects in the product */
  projects?: Maybe<DedicatedSubplanProjectConnection>;
  /** Product status */
  status?: Maybe<DedicatedSubplanStatus>;
  /** Team */
  team: ClientTeam;
  /**
   * Product tier
   * @deprecated Use status field instead
   */
  tier?: Maybe<DedicatedSubplanTier>;
};


/** Team Subscription for the Friendli Suite Dedicated Product */
export type DedicatedSubplanMembersArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
};


/** Team Subscription for the Friendli Suite Dedicated Product */
export type DedicatedSubplanProjectsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedSubplanProjectFiltersInput>;
  sorts?: InputMaybe<DedicatedSubplanProjectSortsInput>;
};

/** Team connection */
export type DedicatedSubplanConnection = {
  __typename?: 'DedicatedSubplanConnection';
  /** Returned teams */
  edges: Array<DedicatedSubplan>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of teams */
  totalCount: Scalars['Int']['output'];
};

export type DedicatedSubplanFiltersInput = {
  /** Filter by joined timestamp */
  joinedDateRange?: InputMaybe<DateRangeInput>;
  /** Filter by Dedicated subscription status */
  statuses?: InputMaybe<Array<DedicatedSubplanStatus>>;
  /** Filter with corresponding team's id */
  teamIdSearch?: InputMaybe<Scalars['String']['input']>;
  teamNameSearch?: InputMaybe<Scalars['String']['input']>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

/** Free credit usage of Dedicated endpoints */
export type DedicatedSubplanFreeCreditUsage = {
  __typename?: 'DedicatedSubplanFreeCreditUsage';
  total: Scalars['String']['output'];
  used: Scalars['String']['output'];
};

/** Users in a Product container */
export type DedicatedSubplanMemberConnection = {
  __typename?: 'DedicatedSubplanMemberConnection';
  /** Returned registration list */
  edges: Array<DedicatedSubplanMemberEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of waitlist registrations */
  totalCount: Scalars['Int']['output'];
};

/** User in a ClientTeam */
export type DedicatedSubplanMemberEdge = {
  __typename?: 'DedicatedSubplanMemberEdge';
  cursor: Scalars['Base64']['output'];
  node: ClientUser;
};

/** Dedicated endpoints projects */
export type DedicatedSubplanProjectConnection = {
  __typename?: 'DedicatedSubplanProjectConnection';
  /** Returned project list */
  edges: Array<DedicatedSubplanProjectEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of waitlist registrations */
  totalCount: Scalars['Int']['output'];
};

/** Projects in dedicated product */
export type DedicatedSubplanProjectEdge = {
  __typename?: 'DedicatedSubplanProjectEdge';
  cursor: Scalars['Base64']['output'];
  node: DedicatedProject;
};

export type DedicatedSubplanProjectFiltersInput = {
  /** Filter by created timestamp */
  createdDateRange?: InputMaybe<DateRangeInput>;
  /** Filter with corresponding project's id */
  idSearch?: InputMaybe<Scalars['String']['input']>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  /** Filter by project state */
  states?: InputMaybe<Array<DedicatedProjectState>>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

export type DedicatedSubplanProjectSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: created_at, updated_at, name */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type DedicatedSubplanSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: joined_at, updated_at, status */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Dedicated subscription plan status */
export enum DedicatedSubplanStatus {
  BasicExpired = 'BASIC_EXPIRED',
  BasicVerified = 'BASIC_VERIFIED',
  EnterpriseExpired = 'ENTERPRISE_EXPIRED',
  EnterpriseVerified = 'ENTERPRISE_VERIFIED',
  ProExpired = 'PRO_EXPIRED',
  ProVerified = 'PRO_VERIFIED',
  TrialExpired = 'TRIAL_EXPIRED',
  TrialVerified = 'TRIAL_VERIFIED'
}

/** Input for DedicatedSubplanSubscribe */
export type DedicatedSubplanSubscribeInput = {
  teamId: Scalars['ID']['input'];
};

/** Response payload for DedicatedSubplanSubscribe */
export type DedicatedSubplanSubscribeResponse = DedicatedSubplanSubscribeSuccess | TeamAlreadySubscribedError | TeamNotExistError | TeamPaymentNotFoundErrorObj | UserPermissionError;

/** Success response for dedicated team subscription */
export type DedicatedSubplanSubscribeSuccess = {
  __typename?: 'DedicatedSubplanSubscribeSuccess';
  team: DedicatedSubplan;
};

/** Dedicated Product plan */
export enum DedicatedSubplanTier {
  Basic = 'BASIC',
  Enterprise = 'ENTERPRISE',
  Trial = 'TRIAL'
}

/** Input for DedicatedSubplanUpdateTier */
export type DedicatedSubplanUpdateTierInput = {
  /** Team ID */
  teamId: Scalars['ID']['input'];
  /** Dedicated Tier */
  tier: DedicatedSubplanTier;
};

/** Model modality info for a huggingface model */
export type DetailedHfModelEndpointsInfo = {
  __typename?: 'DetailedHfModelEndpointsInfo';
  /** Dedicated endpoints */
  dedicated?: Maybe<Array<DedicatedEndpoint>>;
  /** Serverless endpoints */
  serverless?: Maybe<Array<ServerlessEndpointCatalog>>;
};

/** Dedicated Huggingface model info */
export type DetailedHfModelInfo = Node & {
  __typename?: 'DetailedHfModelInfo';
  /** Is model accelerated */
  accelerated?: Maybe<Scalars['Boolean']['output']>;
  /** Base model repo list */
  baseModel?: Maybe<Array<Scalars['String']['output']>>;
  /** Endpoints using the model */
  endpoints?: Maybe<DetailedHfModelEndpointsInfo>;
  /** Is model fine-tunable */
  finetunable?: Maybe<Scalars['Boolean']['output']>;
  /** Icon image url */
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Is model multimodal */
  isMultimodal?: Maybe<Scalars['Boolean']['output']>;
  /** Is model ready for use */
  isReady?: Maybe<Scalars['Boolean']['output']>;
  /** Model modality */
  modality?: Maybe<DetailedHfModelModalityInfo>;
  /** Model type: base / adapter */
  modelType?: Maybe<HfModelType>;
  /** Is model optimized */
  optimized?: Maybe<Scalars['Boolean']['output']>;
  /** Products supporting the model */
  products?: Maybe<Array<SupportedProductType>>;
};

/** Model connection */
export type DetailedHfModelInfoConnection = {
  __typename?: 'DetailedHfModelInfoConnection';
  /** Returned models */
  edges: Array<DetailedHfModelInfo>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of models */
  totalCount: Scalars['Int']['output'];
};

/** Model modality */
export enum DetailedHfModelModality {
  Audio = 'AUDIO',
  Image = 'IMAGE',
  Text = 'TEXT',
  Video = 'VIDEO'
}

/** Model modality info for a huggingface model */
export type DetailedHfModelModalityInfo = {
  __typename?: 'DetailedHfModelModalityInfo';
  /** Input modality for the model */
  inputModals?: Maybe<Array<DetailedHfModelModality>>;
  /** Output modality for the model */
  outputModals?: Maybe<Array<DetailedHfModelModality>>;
};

export type FileChunkCompleteInput = {
  chunkGroupId: Scalars['String']['input'];
  eTag: Scalars['String']['input'];
  partNumber: Scalars['Int']['input'];
  size: Scalars['BigInt']['input'];
};

export type FileChunkInput = {
  chunkGroupId: Scalars['String']['input'];
  partNumber: Scalars['Int']['input'];
  size: Scalars['BigInt']['input'];
};

export type FileDescriptorInput = {
  digest: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  size: Scalars['BigInt']['input'];
};

export type FileUploadInfo = {
  __typename?: 'FileUploadInfo';
  uploadBody: Scalars['JSON']['output'];
  uploadUrl: Scalars['URL']['output'];
};

export type HfModelFiltersInput = {
  baseModel?: InputMaybe<Scalars['String']['input']>;
  creatorId?: InputMaybe<Scalars['String']['input']>;
  curated?: InputMaybe<Scalars['Boolean']['input']>;
  diffusersClassName?: InputMaybe<Scalars['String']['input']>;
  hfModelType?: InputMaybe<HfModelType>;
  hfModelTypes?: InputMaybe<Array<HfModelType>>;
  inputModals?: InputMaybe<Array<DetailedHfModelModality>>;
  isMultimodal?: InputMaybe<Scalars['Boolean']['input']>;
  isOptimized?: InputMaybe<Scalars['Boolean']['input']>;
  isReady?: InputMaybe<Scalars['Boolean']['input']>;
  modelSizeRange?: InputMaybe<ModelSizeRangeInput>;
  outputModals?: InputMaybe<Array<DetailedHfModelModality>>;
  products?: InputMaybe<Array<SupportedProductType>>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
  transformersModelArch?: InputMaybe<Scalars['String']['input']>;
  transformersModelType?: InputMaybe<Scalars['String']['input']>;
};

export type HfModelSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: created_at, updated_at, trending, downloads, likes, curation_ranking */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Huggingface model type */
export enum HfModelType {
  Adapter = 'ADAPTER',
  Base = 'BASE',
  Finetune = 'FINETUNE',
  Merge = 'MERGE',
  Quantized = 'QUANTIZED'
}

/** HuggingfaceDataset workload */
export type HuggingfaceDataset = {
  __typename?: 'HuggingfaceDataset';
  /** Huggingface dataset total downloads */
  downloads: Scalars['Int']['output'];
  /** Whether huggingface dataset is gated */
  gated: Scalars['Boolean']['output'];
  /** Git information to this huggingface dataset */
  gitInfo?: Maybe<HuggingfaceGitInfo>;
  /** Repository ID of the huggingface dataset */
  id: Scalars['ID']['output'];
  /** Huggingface dataset total likes */
  likes: Scalars['Int']['output'];
  /** Whether huggingface dataset is private */
  private: Scalars['Boolean']['output'];
};

export type HuggingfaceDatasetSearchQuery = {
  limit?: Scalars['Int']['input'];
  searchQuery: Scalars['String']['input'];
};

export type HuggingfaceDatasetSearchResult = {
  __typename?: 'HuggingfaceDatasetSearchResult';
  /** Huggingface datasets search results */
  results: Array<HuggingfaceDataset>;
};

/** Huggingface repo git info */
export type HuggingfaceGitInfo = {
  __typename?: 'HuggingfaceGitInfo';
  branches: Array<HuggingfaceGitRef>;
  tags: Array<HuggingfaceGitRef>;
};

/** Git reference type such as tags or branches */
export type HuggingfaceGitRef = {
  __typename?: 'HuggingfaceGitRef';
  commit: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** HuggingfaceModel workload */
export type HuggingfaceModel = {
  __typename?: 'HuggingfaceModel';
  /** Huggingface model total downloads */
  downloads: Scalars['Int']['output'];
  /** Whether huggingface model is gated */
  gated: Scalars['Boolean']['output'];
  /** Git information of this huggingface model */
  gitInfo?: Maybe<HuggingfaceGitInfo>;
  /** Repository ID of the huggingface model */
  id: Scalars['ID']['output'];
  /** Huggingface model total likes */
  likes: Scalars['Int']['output'];
  /** Whether huggingface model is private */
  private: Scalars['Boolean']['output'];
};

/** Requested huggingface model's architecture is not supported */
export type HuggingfaceModelCheckCompatibilityArchitectureNotSupportedError = BaseError & {
  __typename?: 'HuggingfaceModelCheckCompatibilityArchitectureNotSupportedError';
  message: Scalars['String']['output'];
};

/** Requested huggingface model cannot be parsed */
export type HuggingfaceModelCheckCompatibilityMalformedRepoError = BaseError & {
  __typename?: 'HuggingfaceModelCheckCompatibilityMalformedRepoError';
  message: Scalars['String']['output'];
};

/** Requested huggingface gated model requires approval */
export type HuggingfaceModelCheckCompatibilityNeedApprovalError = BaseError & {
  __typename?: 'HuggingfaceModelCheckCompatibilityNeedApprovalError';
  message: Scalars['String']['output'];
};

/** Requested huggingface model is not found */
export type HuggingfaceModelCheckCompatibilityNotFoundError = BaseError & {
  __typename?: 'HuggingfaceModelCheckCompatibilityNotFoundError';
  message: Scalars['String']['output'];
};

/** Requested huggingface model is not supported */
export type HuggingfaceModelCheckCompatibilityNotSupportedError = BaseError & {
  __typename?: 'HuggingfaceModelCheckCompatibilityNotSupportedError';
  message: Scalars['String']['output'];
  reason: ModelNotSupportedReason;
};

/** Response payload for HuggingfaceModelCheckCompatibility */
export type HuggingfaceModelCheckCompatibilityResponse = HuggingfaceModelCheckCompatibilityArchitectureNotSupportedError | HuggingfaceModelCheckCompatibilityMalformedRepoError | HuggingfaceModelCheckCompatibilityNeedApprovalError | HuggingfaceModelCheckCompatibilityNotFoundError | HuggingfaceModelCheckCompatibilityNotSupportedError | HuggingfaceModelCheckCompatibilitySuccess;

/** Model is compatible */
export type HuggingfaceModelCheckCompatibilitySuccess = {
  __typename?: 'HuggingfaceModelCheckCompatibilitySuccess';
  dtypeCasted?: Maybe<Scalars['Boolean']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type HuggingfaceModelSearchQuery = {
  limit?: Scalars['Int']['input'];
  searchQuery: Scalars['String']['input'];
  workloadType?: InputMaybe<Scalars['String']['input']>;
};

export type HuggingfaceModelSearchResult = {
  __typename?: 'HuggingfaceModelSearchResult';
  /** Huggingface models search results */
  results: Array<HuggingfaceModel>;
};

export type HuggingfaceRepoInput = {
  repoId: Scalars['ID']['input'];
  repoRevision?: InputMaybe<Scalars['String']['input']>;
};

export type IntTimeSeries = {
  __typename?: 'IntTimeSeries';
  data: Array<IntTimeSeriesObservation>;
};

export type IntTimeSeriesObservation = {
  __typename?: 'IntTimeSeriesObservation';
  timestamp: Scalars['DateTime']['output'];
  values: Scalars['Int']['output'];
};

/** Document Phase */
export type IntegrationNotionIcon = IntegrationNotionIconEmoji | IntegrationNotionIconUrl;

export type IntegrationNotionIconEmoji = {
  __typename?: 'IntegrationNotionIconEmoji';
  emoji: Scalars['String']['output'];
};

export type IntegrationNotionIconUrl = {
  __typename?: 'IntegrationNotionIconUrl';
  url: Scalars['URL']['output'];
};

export type IntegrationNotionPage = {
  __typename?: 'IntegrationNotionPage';
  /** Notion Page created timestamp */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Notion Page icon */
  icon?: Maybe<IntegrationNotionIcon>;
  /** Notion Page ID */
  id: Scalars['ID']['output'];
  /** Notion Page last edited timestamp */
  lastEditedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Notion Page name */
  name?: Maybe<Scalars['String']['output']>;
  /** Notion Page parent id */
  parentId?: Maybe<Scalars['String']['output']>;
  /** Notion Page type */
  type?: Maybe<Scalars['String']['output']>;
  /** Notion Page URL */
  url?: Maybe<Scalars['URL']['output']>;
};

/** Input for IntegrationNotionRemoveWorkspaceFromTeam */
export type IntegrationNotionRemoveWorkspaceFromTeamInput = {
  teamId: Scalars['ID']['input'];
  workspaceId: Scalars['ID']['input'];
};

/** Response payload for IntegrationNotionRemoveWorkspaceFromTeam */
export type IntegrationNotionRemoveWorkspaceFromTeamResponse = IntegrationNotionRemoveWorkspaceFromTeamSuccess | UserPermissionError;

/** Success response for dedicated team subscription */
export type IntegrationNotionRemoveWorkspaceFromTeamSuccess = {
  __typename?: 'IntegrationNotionRemoveWorkspaceFromTeamSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Input for IntegrationNotionRemoveWorkspaceFromUser */
export type IntegrationNotionRemoveWorkspaceFromUserInput = {
  userId?: InputMaybe<Scalars['ID']['input']>;
  workspaceId: Scalars['ID']['input'];
};

/** Response payload for IntegrationNotionRemoveWorkspaceFromUser */
export type IntegrationNotionRemoveWorkspaceFromUserResponse = IntegrationNotionRemoveWorkspaceFromUserSuccess | UserPermissionError;

/** Success response for dedicated team subscription */
export type IntegrationNotionRemoveWorkspaceFromUserSuccess = {
  __typename?: 'IntegrationNotionRemoveWorkspaceFromUserSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Input for IntegrationNotionSyncWorkspace */
export type IntegrationNotionSyncWorkspaceInput = {
  workspaceId: Scalars['ID']['input'];
};

/** Response payload for IntegrationNotionSyncWorkspace */
export type IntegrationNotionSyncWorkspaceResponse = IntegrationNotionSyncWorkspaceSuccess | UserPermissionError;

/** Success response for dedicated team subscription */
export type IntegrationNotionSyncWorkspaceSuccess = {
  __typename?: 'IntegrationNotionSyncWorkspaceSuccess';
  workspace: IntegrationNotionWorkspace;
};

export type IntegrationNotionWorkspace = {
  __typename?: 'IntegrationNotionWorkspace';
  /** Notion Workspace creation timestamp */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Notion Workspace creator */
  createdBy?: Maybe<ClientUser>;
  /** Notion Workspace icon */
  icon?: Maybe<IntegrationNotionIcon>;
  /** Notion Workspace ID */
  id: Scalars['ID']['output'];
  /** Notion Workspace integrated teams */
  integratedTeams?: Maybe<IntegrationNotionWorkspaceTeamConnection>;
  /** Notion Workspace name */
  name?: Maybe<Scalars['String']['output']>;
  /** Notion Workspace pages */
  pages?: Maybe<IntegrationNotionWorkspacePageConnection>;
  /** Notion Workspace status */
  status?: Maybe<IntegrationNotionWorkspaceStatus>;
  /** Notion Workspace update timestamp */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type IntegrationNotionWorkspaceIntegratedTeamsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
};


export type IntegrationNotionWorkspacePagesArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
};

/** Integrated notion workspaces */
export type IntegrationNotionWorkspaceConnection = {
  __typename?: 'IntegrationNotionWorkspaceConnection';
  /** Returned workspace list */
  edges: Array<IntegrationNotionWorkspaceEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of items */
  totalCount: Scalars['Int']['output'];
};

/** Integration notion workspace */
export type IntegrationNotionWorkspaceEdge = {
  __typename?: 'IntegrationNotionWorkspaceEdge';
  cursor: Scalars['Base64']['output'];
  node: IntegrationNotionWorkspace;
};

/** Workspace pages */
export type IntegrationNotionWorkspacePageConnection = {
  __typename?: 'IntegrationNotionWorkspacePageConnection';
  /** Returned pages */
  edges: Array<IntegrationNotionWorkspacePageEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of pages */
  totalCount: Scalars['Int']['output'];
};

/** Pages in integration product */
export type IntegrationNotionWorkspacePageEdge = {
  __typename?: 'IntegrationNotionWorkspacePageEdge';
  cursor: Scalars['Base64']['output'];
  node: IntegrationNotionPage;
};

/** Product container plan */
export enum IntegrationNotionWorkspaceStatus {
  Failed = 'FAILED',
  Synced = 'SYNCED',
  Syncing = 'SYNCING'
}

/** Dedicated endpoints projects */
export type IntegrationNotionWorkspaceTeamConnection = {
  __typename?: 'IntegrationNotionWorkspaceTeamConnection';
  /** Returned list */
  edges: Array<IntegrationNotionWorkspaceTeamEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count */
  totalCount: Scalars['Int']['output'];
};

/** Teams in integration product */
export type IntegrationNotionWorkspaceTeamEdge = {
  __typename?: 'IntegrationNotionWorkspaceTeamEdge';
  cursor: Scalars['Base64']['output'];
  node?: Maybe<ClientTeam>;
};

/** Response payload for IntegrationOauthGetAuthorizationUrl */
export type IntegrationOauthGetAuthorizationUrlResponse = IntegrationOauthGetAuthorizationUrlSuccess | UserPermissionError;

/** Success response for getting oauth authorization URL */
export type IntegrationOauthGetAuthorizationUrlSuccess = {
  __typename?: 'IntegrationOauthGetAuthorizationUrlSuccess';
  authorizationUrl: Scalars['URL']['output'];
};

/** Why model is not supported. */
export enum ModelNotSupportedReason {
  HfApiError = 'HF_API_ERROR',
  ModelArchitectureNotSupported = 'MODEL_ARCHITECTURE_NOT_SUPPORTED',
  ModelDtypeNotSupported = 'MODEL_DTYPE_NOT_SUPPORTED',
  ModelMalformed = 'MODEL_MALFORMED',
  ModelNotSupported = 'MODEL_NOT_SUPPORTED',
  ModelQuantizationNotSupported = 'MODEL_QUANTIZATION_NOT_SUPPORTED',
  ModelRopeScalingNotSupported = 'MODEL_ROPE_SCALING_NOT_SUPPORTED',
  ModelSizeNotSupported = 'MODEL_SIZE_NOT_SUPPORTED',
  RepoNeedApproval = 'REPO_NEED_APPROVAL',
  RepoNotFound = 'REPO_NOT_FOUND'
}

export type ModelSizeRangeInput = {
  maxSize?: InputMaybe<Scalars['Int']['input']>;
  minSize?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a search job */
  backofficeAlgosearchCreate: BackofficeAlgosearchCreateResponse;
  /** Create a new denylist domain. */
  clientDenylistCreateDomain?: Maybe<ClientDenylist>;
  /** Delete denylist item. */
  clientDenylistDelete: ClientDenylistDeleteDeleteResponse;
  /** Delete denylist domain. */
  clientDenylistDeleteWithDomain: ClientDenylistDeleteDeleteResponse;
  /** Update denylist */
  clientDenylistUpdateDomain?: Maybe<ClientDenylist>;
  /**
   * Add free credit to the team
   * @deprecated Implement backoffice api
   */
  clientTeamAddFreeCredit?: Maybe<ClientTeam>;
  /** Add new user in team */
  clientTeamAddUser?: Maybe<ClientTeam>;
  /** Cancel an sent invitation. */
  clientTeamCancelInvitation?: Maybe<ClientTeam>;
  /** Check Stripe setup intent completions */
  clientTeamCheckStripeSetupIntentCompletion?: Maybe<ClientTeamBillingStripeSetupIntentState>;
  /** Commit team avatar upload */
  clientTeamCommitAvatarUpload?: Maybe<Scalars['Boolean']['output']>;
  /** Create new team */
  clientTeamCreate?: Maybe<ClientTeam>;
  /** Initialize and get team avatar upload url */
  clientTeamCreateAvatarUploadUrl: ClientTeamCreateAvatarUploadUrlResponse;
  /** Create a billing customer that belongs to the team */
  clientTeamCreateBillingCustomer?: Maybe<ClientTeamBilling>;
  /** Create a Stripe Intent that belongs to the team */
  clientTeamCreateStripeIntent?: Maybe<ClientTeamBillingStripeIntent>;
  /** Detach Stripe payment method */
  clientTeamDetachStripePaymentMethod?: Maybe<ClientTeam>;
  /** Connect a huggingface account to user */
  clientTeamIntegrationExchangeCode?: Maybe<ClientTeamIntegrationExchangeCodeResponse>;
  /** Get oauth authorization URL */
  clientTeamIntegrationGetAuthorizationUrl?: Maybe<IntegrationOauthGetAuthorizationUrlResponse>;
  /** Invite a new user to the team. The user may be a new user or an existing user. */
  clientTeamInviteMember?: Maybe<ClientTeam>;
  /** Invite a new user to the team. The user may be a new user or an existing user. */
  clientTeamInviteMemberBatch?: Maybe<ClientTeam>;
  /** Remove a member from the team. */
  clientTeamRemoveMember?: Maybe<ClientTeam>;
  /** Resend an invitation to a user */
  clientTeamResendInvitation?: Maybe<ClientTeam>;
  /** Set Stripe default payment method */
  clientTeamSetStripeDefaultPaymentMethod?: Maybe<ClientTeam>;
  /** Transfer ClientTeam owner */
  clientTeamTransferOwner?: Maybe<ClientTeam>;
  /** Update ClientTeam business description */
  clientTeamUpdateBusinessDescription?: Maybe<ClientTeam>;
  /** Update ClientTeam contact email */
  clientTeamUpdateContactEmail?: Maybe<ClientTeam>;
  /**
   * Accept an invitation. Returns accepted team.
   * @deprecated Per-member access is removed
   */
  clientTeamUpdateInvitationAccess?: Maybe<ClientTeam>;
  /** Update ClientTeam labels */
  clientTeamUpdateLabels?: Maybe<ClientTeam>;
  /**
   * Update ClientTeam member product access
   * @deprecated Per-member product access is removed
   */
  clientTeamUpdateMemberProductAccess?: Maybe<ClientTeam>;
  /** Update ClientTeam member role */
  clientTeamUpdateMemberRole?: Maybe<ClientTeam>;
  /** Update ClientTeam name */
  clientTeamUpdateName?: Maybe<ClientTeam>;
  /** Update ClientTeam segment */
  clientTeamUpdateSegment?: Maybe<ClientTeam>;
  /** Update ClientTeam state */
  clientTeamUpdateState?: Maybe<ClientTeam>;
  /** Update Stripe payment method */
  clientTeamUpdateStripePaymentMethod?: Maybe<ClientTeam>;
  /** Agree to latest terms */
  clientUserAgreeToLatestServiceterms: ClientUser;
  /** Commit user avatar upload */
  clientUserCommitAvatarUpload: Scalars['Boolean']['output'];
  /** Connect a huggingface account to user */
  clientUserConnectHuggingfaceAccount?: Maybe<ClientUserConnectHuggingfaceAccountResponse>;
  /** Connect a wandb account to user */
  clientUserConnectWandbAccount?: Maybe<ClientUserConnectWandbAccountResponse>;
  /** Create a new user */
  clientUserCreate?: Maybe<ClientUser>;
  /** Initialize and get user avatar upload url */
  clientUserCreateAvatarUploadUrl: ClientUserCreateAvatarUploadUrlResponse;
  /** Create user personal access token */
  clientUserCreatePat?: Maybe<ClientUserPat>;
  /**
   * Delete user. By default, this does not actually delete the user, but makes the user
   * state as deleted. To delete the user permanently, use the `permanent` argument.
   */
  clientUserDelete?: Maybe<ClientUser>;
  /** Delete user personal access token */
  clientUserDeletePat?: Maybe<ClientUserPat>;
  /** Disconnect the huggingface account of user */
  clientUserDisconnectHuggingfaceAccount?: Maybe<ClientUserDisconnectHuggingfaceAccountResponse>;
  /** Disconnect the wandb account of user */
  clientUserDisconnectWandbAccount?: Maybe<ClientUserDisconnectWandbAccountResponse>;
  /** Switch user's default team */
  clientUserSwitchDefaultTeam?: Maybe<ClientUser>;
  /** Update a huggingface account to user */
  clientUserUpdateHuggingfaceAccount?: Maybe<ClientUserUpdateHuggingfaceAccountResponse>;
  /** Update user last accessed time */
  clientUserUpdateLastAccessedAt?: Maybe<ClientUser>;
  /** Update user name */
  clientUserUpdateName?: Maybe<ClientUser>;
  /** Update user password */
  clientUserUpdatePassword?: Maybe<ClientUser>;
  /** Update user's super role */
  clientUserUpdateSuperRoles?: Maybe<ClientUser>;
  /** Update a wandb account to user */
  clientUserUpdateWandbAccount?: Maybe<ClientUserUpdateWandbAccountResponse>;
  /** Validate a huggingface account to user */
  clientUserValidateHuggingfaceAccount?: Maybe<ClientUserValidateHuggingfaceAccountResponse>;
  /** Validate a wandb account to user */
  clientUserValidateWandbAccount?: Maybe<ClientUserValidateWandbAccountResponse>;
  /** Create repository */
  containerRepositoryCreate?: Maybe<ContainerRepository>;
  /** Delete repository */
  containerRepositoryDelete?: Maybe<ContainerRepository>;
  /** Update repository description */
  containerRepositoryFavoriteByUser?: Maybe<ContainerRepository>;
  /** Update repository description */
  containerRepositoryUpdateDescription?: Maybe<ContainerRepository>;
  /** Revoke ContainerSubplan team's container secret */
  containerSubplanRevokeSecret?: Maybe<ContainerSubplan>;
  /** Rotate ContainerSubplan team's container secret */
  containerSubplanRotateSecret?: Maybe<ContainerSubplanRotateSecretResponse>;
  /** Start a trial for a team to product container */
  containerSubplanStartTrial?: Maybe<ContainerSubplan>;
  /** Update team container status */
  containerSubplanUpdateStatus?: Maybe<ContainerSubplan>;
  /**
   * Update team container plan
   * @deprecated Use container_update_status instead
   */
  containerSubplanUpdateTier?: Maybe<ContainerSubplan>;
  /** Create tag */
  containerTagCreate?: Maybe<ContainerTag>;
  /** Delete tag */
  containerTagDelete: ContainerRepositoryDeleteSuccess;
  /** Update tag description */
  containerTagUpdateDescription?: Maybe<ContainerTag>;
  /** Start pushing a dataset as chunks to a dedicated project. */
  dedicatedDatasetCommitChunkGroup: DedicatedDatasetCommitChunkGroupResponse;
  /** Start pushing a dataset as chunks to a dedicated project. */
  dedicatedDatasetCreateChunkGroup: DedicatedDatasetCreateChunkGroupResponse;
  /** Start pushing a dataset to a dedicated project. */
  dedicatedDatasetPushChatComplete: DedicatedDatasetPushChatCompleteResponse;
  /** Start pushing a dataset to a dedicated project. */
  dedicatedDatasetPushChatStart: DedicatedDatasetPushChatStartResponse;
  /** Start pushing a dataset to a dedicated project. */
  dedicatedDatasetPushChunkComplete: DedicatedDatasetPushChunkCompleteResponse;
  /** Start pushing a dataset to a dedicated project. */
  dedicatedDatasetPushChunkStart: DedicatedDatasetPushChunkStartResponse;
  /** Start pushing a dataset to a dedicated project. */
  dedicatedDatasetPushFileComplete: DedicatedDatasetPushFileCompleteResponse;
  /** Start pushing a dataset to a dedicated project. */
  dedicatedDatasetPushFileStart: DedicatedDatasetPushFileStartResponse;
  /** Update user name */
  dedicatedDatasetUpdateName?: Maybe<DedicatedDatasetInterface>;
  /** Create an document */
  dedicatedDocumentCompleteUpload: DedicatedDocumentCompleteUploadResponse;
  /** Create an document */
  dedicatedDocumentDelete: DedicatedDocumentDeleteResponse;
  /** Create an document */
  dedicatedDocumentInitializeUpload: DedicatedDocumentCreateResponse;
  /** Update upload progress of a document */
  dedicatedDocumentUpdateUploadProgress: DedicatedDocumentCompleteUploadResponse;
  /** Awake an endpoint */
  dedicatedEndpointAwake: DedicatedEndpointAwakeResponse;
  /** Cancel updating version for the given the endpoint */
  dedicatedEndpointCancelUpdate: DedicatedEndpointCancelUpdateResponse;
  /** Create an endpoint with huggingface model */
  dedicatedEndpointCreate: DedicatedEndpointCreateResponse;
  /** Create an endpoint with huggingface model */
  dedicatedEndpointCreateWithHf: DedicatedEndpointCreateWithHfResponse;
  /** Create an endpoint with huggingface model */
  dedicatedEndpointCreateWithHuggingface: DedicatedEndpointCreateWithHuggingfaceResponse;
  /** Delete an endpoint */
  dedicatedEndpointDelete: DedicatedEndpointDeleteResponse;
  /** Restart an endpoint */
  dedicatedEndpointRestart: DedicatedEndpointRestartResponse;
  /** Rollback the endpoint to the given version */
  dedicatedEndpointRollback: DedicatedEndpointRollbackResponse;
  /** Sleep an endpoint */
  dedicatedEndpointSleep: DedicatedEndpointSleepResponse;
  /** Terminate an endpoint */
  dedicatedEndpointTerminate: DedicatedEndpointTerminateResponse;
  /** Update an endpoint */
  dedicatedEndpointUpdate: DedicatedEndpointUpdateResponse;
  /** Update comment for the given endpoint version */
  dedicatedEndpointUpdateVersionComment: DedicatedEndpointUpdateVersionCommentResponse;
  /** Create an finetuning with huggingface model */
  dedicatedFinetuningCreateDemo: DedicatedFinetuningCreateDemoResponse;
  /** Delete an finetuning */
  dedicatedFinetuningDelete: DedicatedFinetuningDeleteResponse;
  /** Terminate an finetuning */
  dedicatedFinetuningTerminate: DedicatedFinetuningTerminateResponse;
  /** Update the name of the finetuning in the dedicated team. */
  dedicatedFinetuningUpdateName: DedicatedFinetuningUpdateNameResponse;
  /** Archive a model in FDE project. */
  dedicatedModelArchive: DedicatedModelArchiveResponse;
  /** Start pushing a model as chunks to a dedicated project. */
  dedicatedModelCommitChunkGroup: DedicatedModelCommitChunkGroupResponse;
  /** Create a model in FDE project. */
  dedicatedModelCreate: DedicatedModelCreateResponse;
  /** Start pushing a model as chunks to a dedicated project. */
  dedicatedModelCreateChunkGroup: DedicatedModelCreateChunkGroupResponse;
  /** Start pushing a model to a dedicated project. */
  dedicatedModelPushAdapterComplete: DedicatedModelPushAdapterCompleteResponse;
  /** Start pushing a model to a dedicated project. */
  dedicatedModelPushAdapterStart: DedicatedModelPushAdapterStartResponse;
  /** Start pushing a model to a dedicated project. */
  dedicatedModelPushBaseComplete: DedicatedModelPushBaseCompleteResponse;
  /** Start pushing a model to a dedicated project. */
  dedicatedModelPushBaseStart: DedicatedModelPushBaseStartResponse;
  /** Start pushing a model to a dedicated project. */
  dedicatedModelPushChunkComplete: DedicatedModelPushChunkCompleteResponse;
  /** Start pushing a model to a dedicated project. */
  dedicatedModelPushChunkStart: DedicatedModelPushChunkStartResponse;
  /** Start pushing a model to a dedicated project. */
  dedicatedModelPushFileComplete: DedicatedModelPushFileCompleteResponse;
  /** Start pushing a model to a dedicated project. */
  dedicatedModelPushFileStart: DedicatedModelPushFileStartResponse;
  /** Add member to the project in dedicated team */
  dedicatedProjectAddMember: DedicatedProjectAddMemberResponse;
  /** Archive a project in FDE product */
  dedicatedProjectArchive: DedicatedProjectArchiveResponse;
  /** Create a project in FDE product. The user isn't added automatically to the team. Only the users in member_ids are added */
  dedicatedProjectCreate: DedicatedProjectCreateResponse;
  /** Add member to the project in dedicated team */
  dedicatedProjectRemoveMember: DedicatedProjectRemoveMemberResponse;
  /** Update the name of the project in the dedicated team. */
  dedicatedProjectUpdateName: DedicatedProjectUpdateNameResponse;
  /** Subscribe to dedicated team */
  dedicatedSubplanSubscribe: DedicatedSubplanSubscribeResponse;
  /** Update team dedicated plan */
  dedicatedSubplanUpdateTier?: Maybe<DedicatedSubplan>;
  /** UpdateOnboardingSurvey to dedicated team */
  dedicatedTeamUpdateOnboardingSurvey: ClientTeamUpdateOnboardingSurveyResponse;
  /** Remove chosen notion workspace from team */
  integrationNotionRemoveWorkspaceFromTeam?: Maybe<IntegrationNotionRemoveWorkspaceFromTeamResponse>;
  /** Remove chosen notion workspace from team */
  integrationNotionRemoveWorkspaceFromUser?: Maybe<IntegrationNotionRemoveWorkspaceFromUserResponse>;
  /** Validate a huggingface account to user */
  integrationNotionSyncWorkspace?: Maybe<IntegrationNotionSyncWorkspaceResponse>;
  /** Create an chat */
  serverlessChatCreate: ServerlessChatCreateResponse;
  /** Create an chat */
  serverlessChatDelete: ServerlessChatDeleteResponse;
  /** Update chat history */
  serverlessChatUpdateHistory: ServerlessChatUpdateHistoryResponse;
  /** Update chat name */
  serverlessChatUpdateName: ServerlessChatUpdateNameResponse;
  /** Update content name */
  serverlessContentUpdateName: ServerlessContentUpdateNameResponse;
  /** Start a trial for a team to product container */
  serverlessEndpointReportContent?: Maybe<Scalars['String']['output']>;
  /** Create an file */
  serverlessFileCompleteUpload: ServerlessFileCompleteUploadResponse;
  /** Create an file */
  serverlessFileDelete: ServerlessFileDeleteResponse;
  /** Create an file */
  serverlessFileInitializeUpload: ServerlessFileCreateResponse;
  /** Update file name */
  serverlessFileUpdateName: ServerlessFileUpdateNameResponse;
  /** Update upload progress of a file */
  serverlessFileUpdateUploadProgress: ServerlessFileCompleteUploadResponse;
  /** Create knowledge */
  serverlessKnowledgeCreate: ServerlessKnowledgeCreateResponse;
  /** Delete an knowledge */
  serverlessKnowledgeDelete: ServerlessKnowledgeDeleteResponse;
  /** Purge an knowledge */
  serverlessKnowledgePurge: ServerlessKnowledgePurgeResponse;
  /** Update knowledge name */
  serverlessKnowledgeUpdateName: ServerlessKnowledgeUpdateNameResponse;
  /** Start basic plan for a team to product serverless */
  serverlessSubplanCancelBasicPlan?: Maybe<ServerlessSubplan>;
  /** Start basic plan for a team to product serverless */
  serverlessSubplanStartBasicPlan?: Maybe<ServerlessSubplan>;
  /** Start a trial for a team to product serverless */
  serverlessSubplanStartTrial?: Maybe<ServerlessSubplan>;
  /** Update team serverless tier */
  serverlessSubplanUpdateTier?: Maybe<ServerlessSubplan>;
};


export type MutationBackofficeAlgosearchCreateArgs = {
  input: BackofficeAlgosearchCreateInput;
};


export type MutationClientDenylistCreateDomainArgs = {
  input: ClientDenylistCreateDomainInput;
};


export type MutationClientDenylistDeleteArgs = {
  input: ClientDenylistDeleteInput;
};


export type MutationClientDenylistDeleteWithDomainArgs = {
  input: ClientDenylistDeleteWithDomainInput;
};


export type MutationClientDenylistUpdateDomainArgs = {
  input: ClientDenylistUpdateDomainInput;
};


export type MutationClientTeamAddFreeCreditArgs = {
  input: ClientTeamAddFreeCreditInput;
};


export type MutationClientTeamAddUserArgs = {
  input: ClientTeamAddUserInput;
};


export type MutationClientTeamCancelInvitationArgs = {
  input: ClientTeamCancelInvitationInput;
};


export type MutationClientTeamCheckStripeSetupIntentCompletionArgs = {
  input: ClientTeamCheckStripeSetupIntentCompletionInput;
};


export type MutationClientTeamCommitAvatarUploadArgs = {
  input: ClientTeamCommitAvatarUploadInput;
};


export type MutationClientTeamCreateArgs = {
  input: ClientTeamCreateInput;
};


export type MutationClientTeamCreateAvatarUploadUrlArgs = {
  input: ClientTeamCreateAvatarUploadUrlInput;
};


export type MutationClientTeamCreateBillingCustomerArgs = {
  input: ClientTeamCreateBillingCustomerInput;
};


export type MutationClientTeamCreateStripeIntentArgs = {
  input: ClientTeamCreateStripeIntentInput;
};


export type MutationClientTeamDetachStripePaymentMethodArgs = {
  input: ClientTeamDetachStripePaymentMethodInput;
};


export type MutationClientTeamIntegrationExchangeCodeArgs = {
  input: ClientTeamIntegrationExchangeCodeInput;
};


export type MutationClientTeamIntegrationGetAuthorizationUrlArgs = {
  input: ClientTeamIntegrationGetAuthorizationUrlInput;
};


export type MutationClientTeamInviteMemberArgs = {
  input: ClientTeamInviteMemberInput;
};


export type MutationClientTeamInviteMemberBatchArgs = {
  input: ClientTeamInviteMemberBatchInput;
};


export type MutationClientTeamRemoveMemberArgs = {
  input: ClientTeamRemoveMemberInput;
};


export type MutationClientTeamResendInvitationArgs = {
  input: ClientTeamResendInvitationInput;
};


export type MutationClientTeamSetStripeDefaultPaymentMethodArgs = {
  input: ClientTeamSetStripeDefaultPaymentMethodInput;
};


export type MutationClientTeamTransferOwnerArgs = {
  input: ClientTeamTransferOwnerInput;
};


export type MutationClientTeamUpdateBusinessDescriptionArgs = {
  input: ClientTeamUpdateBusinessDescriptionInput;
};


export type MutationClientTeamUpdateContactEmailArgs = {
  input: ClientTeamUpdateContactEmailInput;
};


export type MutationClientTeamUpdateInvitationAccessArgs = {
  input: ClientTeamUpdateInvitationAccessInput;
};


export type MutationClientTeamUpdateLabelsArgs = {
  input: ClientTeamUpdateLabelsInput;
};


export type MutationClientTeamUpdateMemberProductAccessArgs = {
  input: ClientTeamUpdateMemberProductAccessInput;
};


export type MutationClientTeamUpdateMemberRoleArgs = {
  input: ClientTeamUpdateMemberRoleInput;
};


export type MutationClientTeamUpdateNameArgs = {
  input: ClientTeamUpdateNameInput;
};


export type MutationClientTeamUpdateSegmentArgs = {
  input: ClientTeamUpdateSegmentInput;
};


export type MutationClientTeamUpdateStateArgs = {
  input: ClientTeamUpdateStateInput;
};


export type MutationClientTeamUpdateStripePaymentMethodArgs = {
  input: ClientTeamUpdateStripePaymentMethodInput;
};


export type MutationClientUserAgreeToLatestServicetermsArgs = {
  input: ClientUserAgreeToLatestServicetermsInput;
};


export type MutationClientUserCommitAvatarUploadArgs = {
  input: ClientUserCommitAvatarUploadInput;
};


export type MutationClientUserConnectHuggingfaceAccountArgs = {
  input: ClientUserConnectHuggingfaceAccountInput;
};


export type MutationClientUserConnectWandbAccountArgs = {
  input: ClientUserConnectWandbAccountInput;
};


export type MutationClientUserCreateArgs = {
  input: ClientUserCreateInput;
};


export type MutationClientUserCreateAvatarUploadUrlArgs = {
  input: ClientUserCreateAvatarUploadUrlInput;
};


export type MutationClientUserCreatePatArgs = {
  input: ClientUserCreatePatInput;
};


export type MutationClientUserDeleteArgs = {
  input: ClientUserDeleteInput;
};


export type MutationClientUserDeletePatArgs = {
  input: ClientUserDeletePatInput;
};


export type MutationClientUserDisconnectHuggingfaceAccountArgs = {
  input: ClientUserDisconnectHuggingfaceAccountInput;
};


export type MutationClientUserDisconnectWandbAccountArgs = {
  input: ClientUserDisconnectWandbAccountInput;
};


export type MutationClientUserSwitchDefaultTeamArgs = {
  input: ClientUserSwitchDefaultTeamInput;
};


export type MutationClientUserUpdateHuggingfaceAccountArgs = {
  input: ClientUserUpdateHuggingfaceAccountInput;
};


export type MutationClientUserUpdateLastAccessedAtArgs = {
  input: ClientUserUpdateLastAccessedAtInput;
};


export type MutationClientUserUpdateNameArgs = {
  input: ClientUserUpdateNameInput;
};


export type MutationClientUserUpdatePasswordArgs = {
  input: ClientUserUpdatePasswordInput;
};


export type MutationClientUserUpdateSuperRolesArgs = {
  input: ClientUserUpdateSuperRolesInput;
};


export type MutationClientUserUpdateWandbAccountArgs = {
  input: ClientUserUpdateWandbAccountInput;
};


export type MutationClientUserValidateHuggingfaceAccountArgs = {
  input: ClientUserValidateHuggingfaceAccountInput;
};


export type MutationClientUserValidateWandbAccountArgs = {
  input: ClientUserValidateWandbAccountInput;
};


export type MutationContainerRepositoryCreateArgs = {
  input: ContainerRepositoryCreateInput;
};


export type MutationContainerRepositoryDeleteArgs = {
  input: ContainerRepositoryDeleteInput;
};


export type MutationContainerRepositoryFavoriteByUserArgs = {
  input: ContainerRepositoryFavoriteByUserInput;
};


export type MutationContainerRepositoryUpdateDescriptionArgs = {
  input: ContainerRepositoryUpdateDescriptionInput;
};


export type MutationContainerSubplanRevokeSecretArgs = {
  input: ContainerSubplanRevokeSecretInput;
};


export type MutationContainerSubplanRotateSecretArgs = {
  input: ContainerSubplanRotateSecretInput;
};


export type MutationContainerSubplanStartTrialArgs = {
  input: ContainerSubplanStartTrialInput;
};


export type MutationContainerSubplanUpdateStatusArgs = {
  input: ContainerSubplanUpdateStatusInput;
};


export type MutationContainerSubplanUpdateTierArgs = {
  input: ContainerSubplanUpdateTierInput;
};


export type MutationContainerTagCreateArgs = {
  input: ContainerTagCreateInput;
};


export type MutationContainerTagDeleteArgs = {
  input: ContainerTagDeleteInput;
};


export type MutationContainerTagUpdateDescriptionArgs = {
  input: ContainerTagUpdateDescriptionInput;
};


export type MutationDedicatedDatasetCommitChunkGroupArgs = {
  input: DedicatedDatasetCommitChunkGroupInput;
};


export type MutationDedicatedDatasetCreateChunkGroupArgs = {
  input: DedicatedDatasetCreateChunkGroupInput;
};


export type MutationDedicatedDatasetPushChatCompleteArgs = {
  input: DedicatedDatasetPushChatCompleteInput;
};


export type MutationDedicatedDatasetPushChatStartArgs = {
  input: DedicatedDatasetPushChatStartInput;
};


export type MutationDedicatedDatasetPushChunkCompleteArgs = {
  input: DedicatedDatasetPushChunkCompleteInput;
};


export type MutationDedicatedDatasetPushChunkStartArgs = {
  input: DedicatedDatasetPushChunkStartInput;
};


export type MutationDedicatedDatasetPushFileCompleteArgs = {
  input: DedicatedDatasetPushFileCompleteInput;
};


export type MutationDedicatedDatasetPushFileStartArgs = {
  input: DedicatedDatasetPushFileStartInput;
};


export type MutationDedicatedDatasetUpdateNameArgs = {
  input: DedicatedDatasetUpdateNameInput;
};


export type MutationDedicatedDocumentCompleteUploadArgs = {
  input: DedicatedDocumentCompleteUploadInput;
};


export type MutationDedicatedDocumentDeleteArgs = {
  input: DedicatedDocumentDeleteInput;
};


export type MutationDedicatedDocumentInitializeUploadArgs = {
  input: DedicatedDocumentInitializeUploadInput;
};


export type MutationDedicatedDocumentUpdateUploadProgressArgs = {
  input: DedicatedDocumentUpdateUploadProgressInput;
};


export type MutationDedicatedEndpointAwakeArgs = {
  input: DedicatedEndpointAwakeInput;
};


export type MutationDedicatedEndpointCancelUpdateArgs = {
  input: DedicatedEndpointCancelUpdateInput;
};


export type MutationDedicatedEndpointCreateArgs = {
  input: DedicatedEndpointCreateInput;
};


export type MutationDedicatedEndpointCreateWithHfArgs = {
  input: DedicatedEndpointCreateWithHfInput;
};


export type MutationDedicatedEndpointCreateWithHuggingfaceArgs = {
  input: DedicatedEndpointCreateWithHuggingfaceInput;
};


export type MutationDedicatedEndpointDeleteArgs = {
  input: DedicatedEndpointDeleteInput;
};


export type MutationDedicatedEndpointRestartArgs = {
  input: DedicatedEndpointRestartInput;
};


export type MutationDedicatedEndpointRollbackArgs = {
  input: DedicatedEndpointRollbackInput;
};


export type MutationDedicatedEndpointSleepArgs = {
  input: DedicatedEndpointSleepInput;
};


export type MutationDedicatedEndpointTerminateArgs = {
  input: DedicatedEndpointTerminateInput;
};


export type MutationDedicatedEndpointUpdateArgs = {
  input: DedicatedEndpointUpdateInput;
};


export type MutationDedicatedEndpointUpdateVersionCommentArgs = {
  input: DedicatedEndpointUpdateVersionCommentInput;
};


export type MutationDedicatedFinetuningCreateDemoArgs = {
  input: DedicatedFinetuningCreateDemoInput;
};


export type MutationDedicatedFinetuningDeleteArgs = {
  input: DedicatedFinetuningDeleteInput;
};


export type MutationDedicatedFinetuningTerminateArgs = {
  input: DedicatedFinetuningTerminateInput;
};


export type MutationDedicatedFinetuningUpdateNameArgs = {
  input: DedicatedFinetuningUpdateNameInput;
};


export type MutationDedicatedModelArchiveArgs = {
  input: DedicatedModelArchiveInput;
};


export type MutationDedicatedModelCommitChunkGroupArgs = {
  input: DedicatedModelCommitChunkGroupInput;
};


export type MutationDedicatedModelCreateArgs = {
  input: DedicatedModelCreateInput;
};


export type MutationDedicatedModelCreateChunkGroupArgs = {
  input: DedicatedModelCreateChunkGroupInput;
};


export type MutationDedicatedModelPushAdapterCompleteArgs = {
  input: DedicatedModelPushAdapterCompleteInput;
};


export type MutationDedicatedModelPushAdapterStartArgs = {
  input: DedicatedModelPushAdapterStartInput;
};


export type MutationDedicatedModelPushBaseCompleteArgs = {
  input: DedicatedModelPushBaseCompleteInput;
};


export type MutationDedicatedModelPushBaseStartArgs = {
  input: DedicatedModelPushBaseStartInput;
};


export type MutationDedicatedModelPushChunkCompleteArgs = {
  input: DedicatedModelPushChunkCompleteInput;
};


export type MutationDedicatedModelPushChunkStartArgs = {
  input: DedicatedModelPushChunkStartInput;
};


export type MutationDedicatedModelPushFileCompleteArgs = {
  input: DedicatedModelPushFileCompleteInput;
};


export type MutationDedicatedModelPushFileStartArgs = {
  input: DedicatedModelPushFileStartInput;
};


export type MutationDedicatedProjectAddMemberArgs = {
  input: DedicatedProjectAddMemberInput;
};


export type MutationDedicatedProjectArchiveArgs = {
  input: DedicatedProjectArchiveInput;
};


export type MutationDedicatedProjectCreateArgs = {
  input: DedicatedProjectCreateInput;
};


export type MutationDedicatedProjectRemoveMemberArgs = {
  input: DedicatedProjectRemoveMemberInput;
};


export type MutationDedicatedProjectUpdateNameArgs = {
  input: DedicatedProjectUpdateNameInput;
};


export type MutationDedicatedSubplanSubscribeArgs = {
  input: DedicatedSubplanSubscribeInput;
};


export type MutationDedicatedSubplanUpdateTierArgs = {
  input: DedicatedSubplanUpdateTierInput;
};


export type MutationDedicatedTeamUpdateOnboardingSurveyArgs = {
  input: ClientTeamUpdateOnboardingSurveyInput;
};


export type MutationIntegrationNotionRemoveWorkspaceFromTeamArgs = {
  input: IntegrationNotionRemoveWorkspaceFromTeamInput;
};


export type MutationIntegrationNotionRemoveWorkspaceFromUserArgs = {
  input: IntegrationNotionRemoveWorkspaceFromUserInput;
};


export type MutationIntegrationNotionSyncWorkspaceArgs = {
  input: IntegrationNotionSyncWorkspaceInput;
};


export type MutationServerlessChatCreateArgs = {
  input: ServerlessChatCreateInput;
};


export type MutationServerlessChatDeleteArgs = {
  input: ServerlessChatDeleteInput;
};


export type MutationServerlessChatUpdateHistoryArgs = {
  input: ServerlessChatUpdateHistoryInput;
};


export type MutationServerlessChatUpdateNameArgs = {
  input: ServerlessChatUpdateNameInput;
};


export type MutationServerlessContentUpdateNameArgs = {
  input: ServerlessContentUpdateNameInput;
};


export type MutationServerlessEndpointReportContentArgs = {
  input: ServerlessEndpointReportContentInput;
};


export type MutationServerlessFileCompleteUploadArgs = {
  input: ServerlessFileCompleteUploadInput;
};


export type MutationServerlessFileDeleteArgs = {
  input: ServerlessFileDeleteInput;
};


export type MutationServerlessFileInitializeUploadArgs = {
  input: ServerlessFileInitializeUploadInput;
};


export type MutationServerlessFileUpdateNameArgs = {
  input: ServerlessFileUpdateNameInput;
};


export type MutationServerlessFileUpdateUploadProgressArgs = {
  input: ServerlessFileUpdateUploadProgressInput;
};


export type MutationServerlessKnowledgeCreateArgs = {
  input: ServerlessKnowledgeCreateInput;
};


export type MutationServerlessKnowledgeDeleteArgs = {
  input: ServerlessKnowledgeDeleteInput;
};


export type MutationServerlessKnowledgePurgeArgs = {
  input: ServerlessKnowledgePurgeInput;
};


export type MutationServerlessKnowledgeUpdateNameArgs = {
  input: ServerlessKnowledgeUpdateNameInput;
};


export type MutationServerlessSubplanCancelBasicPlanArgs = {
  input: ServerlessSubplanCancelBasicPlanInput;
};


export type MutationServerlessSubplanStartBasicPlanArgs = {
  input: ServerlessSubplanStartBasicPlanInput;
};


export type MutationServerlessSubplanStartTrialArgs = {
  input: ServerlessSubplanStartTrialInput;
};


export type MutationServerlessSubplanUpdateTierArgs = {
  input: ServerlessSubplanUpdateTierInput;
};

/** An object with unique id field */
export type Node = {
  id: Scalars['ID']['output'];
};

/** Retrieved page information */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** End cursor */
  endCursor?: Maybe<Scalars['Base64']['output']>;
  /** Whether there is a next page */
  hasNextPage: Scalars['Boolean']['output'];
  /** Whether there is a previous page */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Start cursor */
  startCursor?: Maybe<Scalars['Base64']['output']>;
};

export type PermissionVisibility = {
  __typename?: 'PermissionVisibility';
  isVisible: Scalars['Boolean']['output'];
};

/** Product type */
export enum ProductType {
  Dedicated = 'DEDICATED',
  Serverless = 'SERVERLESS'
}

/** Error response for when provided project name already exists */
export type ProjectNameDuplicateError = BaseError & {
  __typename?: 'ProjectNameDuplicateError';
  message: Scalars['String']['output'];
};

/** Error response for when provided project does not exist */
export type ProjectNotExistError = BaseError & {
  __typename?: 'ProjectNotExistError';
  message: Scalars['String']['output'];
};

export enum ProjectState {
  Archived = 'ARCHIVED',
  Created = 'CREATED',
  Deleted = 'DELETED',
  Unknown = 'UNKNOWN'
}

export type Query = {
  __typename?: 'Query';
  /** Backoffice Algosearch */
  backofficeAlgosearchList: BackofficeAlgosearchListResult;
  /** Get denylist item by id */
  clientDenylistItem?: Maybe<ClientDenylist>;
  /** Get denylist items */
  clientDenylistItems?: Maybe<ClientDenylistConnection>;
  /** Return the current login session */
  clientSession?: Maybe<ClientSession>;
  /** Get team by id */
  clientTeam?: Maybe<ClientTeam>;
  /** Paginate through all teams */
  clientTeams?: Maybe<ClientTeamConnection>;
  /** Get user by id */
  clientUser?: Maybe<ClientUser>;
  /** Paginate through all users */
  clientUsers?: Maybe<ClientUserConnection>;
  /** Return the current login session */
  containerImage?: Maybe<ContainerImage>;
  /** Return the current login session */
  containerRepository?: Maybe<ContainerRepository>;
  /** Container Repository list */
  containerRepositoryConnection?: Maybe<ContainerRepositoryConnection>;
  /** Get team by id */
  containerSubplan?: Maybe<ContainerSubplan>;
  /** Paginate through all container using teams */
  containerSubplans?: Maybe<ContainerSubplanConnection>;
  /** Return the current login session */
  containerTag?: Maybe<ContainerTag>;
  /** Get DedicatedAdapter by ID */
  dedicatedAdapter?: Maybe<DedicatedAdapter>;
  /** Get DedicatedDataset by ID */
  dedicatedDataset?: Maybe<DedicatedDatasetInterface>;
  /** Get DedicatedDatasets */
  dedicatedDatasets?: Maybe<DedicatedDatasetConnection>;
  /** Get DedicatedDocument by ID */
  dedicatedDocument?: Maybe<DedicatedDocument>;
  /** Get DedicatedEndpoint by ID */
  dedicatedEndpoint?: Maybe<DedicatedEndpoint>;
  /** Get Model info for any model */
  dedicatedEndpointModelInfo: DedicatedEndpointModelInfoResponse;
  /** Get Model info for tryout with huggingface model */
  dedicatedEndpointTryoutModelInfo: DedicatedEndpointTryOutModelInfo;
  /** Get DedicatedEndpointVersion by ID */
  dedicatedEndpointVersion?: Maybe<DedicatedEndpointVersion>;
  /** Get DedicatedEndpoints */
  dedicatedEndpoints?: Maybe<DedicatedEndpointConnection>;
  /** Get DedicatedFinetuning by ID */
  dedicatedFinetuning?: Maybe<DedicatedFinetuning>;
  /** Get DedicatedFinetunings */
  dedicatedFinetunings?: Maybe<DedicatedFinetuning>;
  /**
   * Return all dedicated instances
   * @deprecated Use dedicated_instances instead
   */
  dedicatedInstanceList?: Maybe<Array<DedicatedInstance>>;
  /** Return all dedicated instances */
  dedicatedInstances?: Maybe<Array<DedicatedInstanceV2>>;
  /** Get DedicatedModel by ID */
  dedicatedModel?: Maybe<DedicatedModel>;
  /** Get DedicatedModels */
  dedicatedModels?: Maybe<DedicatedModelConnection>;
  /** Get a dedicated project by id */
  dedicatedProject?: Maybe<DedicatedProject>;
  /** Get team by id */
  dedicatedSubplan?: Maybe<DedicatedSubplan>;
  /** Paginate through all dedicated using teams */
  dedicatedSubplans?: Maybe<DedicatedSubplanConnection>;
  /** Get DetailedHfModelInfo by ID */
  detailedModel?: Maybe<DetailedHfModelInfo>;
  /** Search DetailedHfModelInfo */
  detailedModelSearch?: Maybe<DetailedHfModelInfoConnection>;
  /** Get git info of HuggingfaceDataset */
  huggingfaceDatasetGitInfo?: Maybe<HuggingfaceGitInfo>;
  /** Search HuggingfaceDatasets */
  huggingfaceDatasetSearch?: Maybe<HuggingfaceDatasetSearchResult>;
  /** Check if model is compatible */
  huggingfaceModelCheckCompatibility: HuggingfaceModelCheckCompatibilityResponse;
  /** Search HuggingfaceModels */
  huggingfaceModelGitInfo?: Maybe<HuggingfaceGitInfo>;
  /** Search HuggingfaceModels */
  huggingfaceModelSearch?: Maybe<HuggingfaceModelSearchResult>;
  /** Paginate team's integrated notion workspaces */
  integrationNotionTeamWorkspaces?: Maybe<IntegrationNotionWorkspaceConnection>;
  /** Paginate user's integrated notion workspaces */
  integrationNotionUserWorkspaces?: Maybe<IntegrationNotionWorkspaceConnection>;
  /** Paginate team's integrated notion workspaces */
  integrationNotionWorkspace?: Maybe<IntegrationNotionWorkspace>;
  /** Is Visible Test endpoint */
  permissionIsVisibleTest?: Maybe<PermissionVisibility>;
  /** Get ServerlessChat by ID */
  serverlessChat?: Maybe<ServerlessChat>;
  /** Get ServerlessContent by ID */
  serverlessContent?: Maybe<ServerlessContent>;
  /** Get serverless info */
  serverlessEndpoint?: Maybe<ServerlessEndpointCatalog>;
  /** Get ServerlessFile by ID */
  serverlessFile?: Maybe<ServerlessFile>;
  /** Get ServerlessKnowledge by ID */
  serverlessKnowledge?: Maybe<ServerlessKnowledge>;
  /** Get team by id */
  serverlessSubplan?: Maybe<ServerlessSubplan>;
  /** Paginate through all serverless using teams */
  serverlessSubplans?: Maybe<ServerlessSubplanConnection>;
  /** Get Serverless Usage */
  serverlessUsage?: Maybe<ServerlessUsage>;
  /** Check if model is compatible */
  wandbModelCheckCompatibility: WandbModelCheckCompatibilityResponse;
};


export type QueryClientDenylistItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryClientDenylistItemsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<ClientDenylistFiltersInput>;
};


export type QueryClientSessionArgs = {
  handle?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryClientTeamArgs = {
  id: Scalars['ID']['input'];
};


export type QueryClientTeamsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<ClientTeamFiltersInput>;
};


export type QueryClientUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryClientUsersArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<ClientUserFiltersInput>;
};


export type QueryContainerRepositoryArgs = {
  repositoryId: Scalars['ID']['input'];
};


export type QueryContainerRepositoryConnectionArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
};


export type QueryContainerSubplanArgs = {
  teamId: Scalars['ID']['input'];
};


export type QueryContainerSubplansArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<ContainerSubplanFiltersInput>;
  sorts?: InputMaybe<ContainerSubplanSortsInput>;
};


export type QueryContainerTagArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDedicatedAdapterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDedicatedDatasetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDedicatedDatasetsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedDatasetFiltersInput>;
};


export type QueryDedicatedDocumentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDedicatedEndpointArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDedicatedEndpointModelInfoArgs = {
  model: DedicatedEndpointModelInfoInput;
};


export type QueryDedicatedEndpointTryoutModelInfoArgs = {
  modelRepo: Scalars['String']['input'];
  modelRepoRevision?: InputMaybe<Scalars['String']['input']>;
  useUserAccount?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDedicatedEndpointVersionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDedicatedEndpointsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedEndpointFiltersInput>;
  sorts?: InputMaybe<DedicatedEndpointSortsInput>;
};


export type QueryDedicatedFinetuningArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDedicatedFinetuningsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedFinetuningFiltersInput>;
};


export type QueryDedicatedInstanceListArgs = {
  adapters?: InputMaybe<Array<Scalars['ID']['input']>>;
  hfModelId?: InputMaybe<Scalars['ID']['input']>;
  hfModelRevision?: InputMaybe<Scalars['String']['input']>;
  nativeModelId?: InputMaybe<Scalars['ID']['input']>;
  teamId?: InputMaybe<Scalars['ID']['input']>;
  wandbArtifactId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDedicatedInstancesArgs = {
  adapters?: InputMaybe<Array<Scalars['ID']['input']>>;
  model?: InputMaybe<DedicatedInstancesModelInput>;
  teamId: Scalars['ID']['input'];
};


export type QueryDedicatedModelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDedicatedModelsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedModelFiltersInput>;
};


export type QueryDedicatedProjectArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDedicatedSubplanArgs = {
  teamId: Scalars['ID']['input'];
};


export type QueryDedicatedSubplansArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<DedicatedSubplanFiltersInput>;
  sorts?: InputMaybe<DedicatedSubplanSortsInput>;
};


export type QueryDetailedModelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDetailedModelSearchArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<HfModelFiltersInput>;
  sorts?: InputMaybe<HfModelSortsInput>;
};


export type QueryHuggingfaceDatasetGitInfoArgs = {
  repoName: Scalars['ID']['input'];
};


export type QueryHuggingfaceDatasetSearchArgs = {
  query: HuggingfaceDatasetSearchQuery;
};


export type QueryHuggingfaceModelCheckCompatibilityArgs = {
  hfModelId: Scalars['ID']['input'];
  hfModelRevision?: InputMaybe<Scalars['ID']['input']>;
  workloadType?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHuggingfaceModelGitInfoArgs = {
  repoName: Scalars['ID']['input'];
};


export type QueryHuggingfaceModelSearchArgs = {
  query: HuggingfaceModelSearchQuery;
};


export type QueryIntegrationNotionTeamWorkspacesArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  teamId: Scalars['ID']['input'];
};


export type QueryIntegrationNotionUserWorkspacesArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryIntegrationNotionWorkspaceArgs = {
  workspaceId: Scalars['ID']['input'];
};


export type QueryPermissionIsVisibleTestArgs = {
  resourceReference: ResourceReference;
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryServerlessChatArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServerlessContentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServerlessEndpointArgs = {
  modelId: Scalars['ID']['input'];
};


export type QueryServerlessFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServerlessKnowledgeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServerlessSubplanArgs = {
  teamId: Scalars['ID']['input'];
};


export type QueryServerlessSubplansArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<ServerlessSubplanFiltersInput>;
  sorts?: InputMaybe<ServerlessSubplanSortsInput>;
};


export type QueryServerlessUsageArgs = {
  teamId: Scalars['ID']['input'];
};


export type QueryWandbModelCheckCompatibilityArgs = {
  artifactId: Scalars['ID']['input'];
  workloadType?: InputMaybe<Scalars['String']['input']>;
};

/** A repository in the registry */
export type RegistryRepository = {
  __typename?: 'RegistryRepository';
  /** Timestamp of when the repository was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Repository description */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Whether the repository is favorited */
  isFavorited?: Maybe<Scalars['Boolean']['output']>;
  /** Repository name */
  name?: Maybe<Scalars['String']['output']>;
  /** Whether the repository is public */
  public?: Maybe<Scalars['Boolean']['output']>;
  /** Repository statistics */
  stats?: Maybe<RegistryRepositoryStats>;
  /** Tags of the repository */
  tags?: Maybe<RegistryRepositoryTagConnection>;
  /** Team of the user */
  team?: Maybe<ClientTeam>;
  /** Timestamp of when the repository was last updated */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the repository */
  updatedBy?: Maybe<ClientUser>;
};


/** A repository in the registry */
export type RegistryRepositoryIsFavoritedArgs = {
  byUser?: InputMaybe<Scalars['ID']['input']>;
};


/** A repository in the registry */
export type RegistryRepositoryTagsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
};

/** Registry repository statistics */
export type RegistryRepositoryStats = {
  __typename?: 'RegistryRepositoryStats';
  downloadCount?: Maybe<Scalars['Int']['output']>;
};

/** Tags in a Repository */
export type RegistryRepositoryTagConnection = {
  __typename?: 'RegistryRepositoryTagConnection';
  /** Returned registration list */
  edges: Array<RegistryRepositoryTagEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of tags */
  totalCount: Scalars['Int']['output'];
};

/** Tags in a Repository */
export type RegistryRepositoryTagEdge = {
  __typename?: 'RegistryRepositoryTagEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['Base64']['output'];
  /** The item of the edge */
  node: RegistryTag;
};

/** A repository in the registry */
export type RegistryTag = {
  __typename?: 'RegistryTag';
  /** Timestamp of when the repository was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Tag description */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Tag name */
  name?: Maybe<Scalars['String']['output']>;
  /** Repository of the user */
  repository?: Maybe<RegistryRepository>;
  /** Tag statistics */
  stats?: Maybe<RegistryTagStats>;
  /** Timestamp of when the repository was last updated */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the repository */
  updatedBy?: Maybe<ClientUser>;
};

/** Registry tag statistics */
export type RegistryTagStats = {
  __typename?: 'RegistryTagStats';
  downloadCount?: Maybe<Scalars['Int']['output']>;
};

export type ResourceReference = {
  endpointId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
  teamId?: InputMaybe<Scalars['ID']['input']>;
};

/** ServerlessChat workload */
export type ServerlessChat = Node & {
  __typename?: 'ServerlessChat';
  /** Timestamp when the chat was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the chat */
  createdBy?: Maybe<ClientUser>;
  /** Chat history */
  history?: Maybe<ServerlessChatHistory>;
  id: Scalars['ID']['output'];
  /** Name of the chat */
  name?: Maybe<Scalars['String']['output']>;
  /** ServerlessChat status */
  status?: Maybe<ServerlessChatStatus>;
  /** Timestamp when the chat was updated */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Input for ServerlessChatCreate */
export type ServerlessChatCreateInput = {
  /** ID of the creator. defaults to current session user */
  creatorId?: InputMaybe<Scalars['String']['input']>;
  /** Initial chat history */
  historyContent: Scalars['JSON']['input'];
  /** Chat name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** ID of the team */
  teamId: Scalars['String']['input'];
};

/** Response payload for ServerlessChatCreate */
export type ServerlessChatCreateResponse = ServerlessChatCreateSuccess | TeamNotExistError | UserPermissionError;

/** Success response for serverless chat creation with HF */
export type ServerlessChatCreateSuccess = {
  __typename?: 'ServerlessChatCreateSuccess';
  chat: ServerlessChat;
  ok: Scalars['Boolean']['output'];
};

/** Input for ServerlessChatDelete */
export type ServerlessChatDeleteInput = {
  id: Scalars['ID']['input'];
};

/** Response payload for ServerlessChatDelete */
export type ServerlessChatDeleteResponse = ServerlessChatDeleteSuccess | TeamNotExistError | UserPermissionError;

/** Success response for serverless chat creation with HF */
export type ServerlessChatDeleteSuccess = {
  __typename?: 'ServerlessChatDeleteSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Catalog for serverless chat endpoint */
export type ServerlessChatEndpointCatalog = {
  __typename?: 'ServerlessChatEndpointCatalog';
  companyLogoUrl?: Maybe<Scalars['String']['output']>;
  contextLength?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isBeta?: Maybe<Scalars['Boolean']['output']>;
  licenseLink?: Maybe<ServerlessEndpointCatalogInfoLink>;
  maxTokenThreshold?: Maybe<Scalars['Int']['output']>;
  modelLink?: Maybe<ServerlessEndpointCatalogInfoLink>;
  modelType?: Maybe<ServerlessEndpointType>;
  name?: Maybe<Scalars['String']['output']>;
  playgroundExamples?: Maybe<Array<ServerlessChatEndpointExampleInput>>;
  playgroundInitialConfig?: Maybe<ServerlessChatEndpointExampleInput>;
  policyLink?: Maybe<ServerlessEndpointCatalogInfoLink>;
  price?: Maybe<ServerlessEndpointPrice>;
  supportHistory?: Maybe<Scalars['Boolean']['output']>;
  supportImage?: Maybe<Scalars['Boolean']['output']>;
  supportParallelTools?: Maybe<Scalars['Boolean']['output']>;
  supportStructuredOutput?: Maybe<Scalars['Boolean']['output']>;
  supportSystemPrompt?: Maybe<Scalars['Boolean']['output']>;
  supportTools?: Maybe<Scalars['Boolean']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
};

/** Example inference request to serverless chat endpoint */
export type ServerlessChatEndpointExampleInput = {
  __typename?: 'ServerlessChatEndpointExampleInput';
  frequencyPenalty: Scalars['Float']['output'];
  imageUrl?: Maybe<ServerlessEndpointImageInput>;
  maxTokens: Scalars['Int']['output'];
  minTokens: Scalars['Int']['output'];
  prompt: Scalars['String']['output'];
  responseFormat?: Maybe<Scalars['JSON']['output']>;
  resumeGeneration: Scalars['Boolean']['output'];
  stop: Array<Scalars['String']['output']>;
  systemPrompt: Scalars['String']['output'];
  temperature: Scalars['Float']['output'];
  tools: Array<ServerlessEndpointToolCall>;
  topP: Scalars['Float']['output'];
};

/** History of a serverless chat */
export type ServerlessChatHistory = {
  __typename?: 'ServerlessChatHistory';
  content?: Maybe<Scalars['JSON']['output']>;
};

/** Status of chat */
export enum ServerlessChatStatus {
  Created = 'CREATED',
  Deleted = 'DELETED'
}

/** Input for ServerlessChatUpdateHistory */
export type ServerlessChatUpdateHistoryInput = {
  content: Scalars['JSON']['input'];
  id: Scalars['ID']['input'];
};

/** Response payload for ServerlessChatUpdateHistory */
export type ServerlessChatUpdateHistoryResponse = ServerlessChatUpdateHistorySuccess | TeamNotExistError | UserPermissionError;

/** Success response for serverless chat creation with HF */
export type ServerlessChatUpdateHistorySuccess = {
  __typename?: 'ServerlessChatUpdateHistorySuccess';
  ok: Scalars['Boolean']['output'];
};

/** Input for ServerlessChatUpdateName */
export type ServerlessChatUpdateNameInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

/** Response payload for ServerlessChatUpdateName */
export type ServerlessChatUpdateNameResponse = ServerlessChatUpdateNameSuccess | TeamNotExistError | UserPermissionError;

/** Success response for serverless chat creation with HF */
export type ServerlessChatUpdateNameSuccess = {
  __typename?: 'ServerlessChatUpdateNameSuccess';
  ok: Scalars['Boolean']['output'];
};

/** ServerlessContent */
export type ServerlessContent = ServerlessContentDocument | ServerlessContentNotion | ServerlessContentWebsite;

/** ServerlessContent base */
export type ServerlessContentBase = {
  /** Chunk */
  chunk?: Maybe<ServerlessContentChunk>;
  /** Timestamp when the Content base was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the Content base */
  createdBy?: Maybe<ClientUser>;
  /** ServerlessContent ID */
  id: Scalars['ID']['output'];
  /** Content base name */
  name?: Maybe<Scalars['String']['output']>;
  /** Phase of the job */
  phase?: Maybe<ServerlessContentPhase>;
  /** ServerlessContent status */
  status?: Maybe<ServerlessContentStatus>;
  /** Timestamp when the Content base was updated */
  syncedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the Content base */
  updatedBy?: Maybe<ClientUser>;
};


/** ServerlessContent base */
export type ServerlessContentBaseChunkArgs = {
  chunkId: Scalars['ID']['input'];
};

/** Serverless Chunk */
export type ServerlessContentChunk = {
  __typename?: 'ServerlessContentChunk';
  text?: Maybe<Scalars['String']['output']>;
};

/** ServerlessContent workload */
export type ServerlessContentDocument = Node & ServerlessContentBase & {
  __typename?: 'ServerlessContentDocument';
  /** Chunk */
  chunk?: Maybe<ServerlessContentChunk>;
  /** Timestamp when the Content base was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the Content base */
  createdBy?: Maybe<ClientUser>;
  /** File */
  file?: Maybe<ServerlessFile>;
  /** ServerlessContent ID */
  id: Scalars['ID']['output'];
  /** Content base name */
  name?: Maybe<Scalars['String']['output']>;
  /** Phase of the job */
  phase?: Maybe<ServerlessContentPhase>;
  /** ServerlessContent status */
  status?: Maybe<ServerlessContentStatus>;
  /** Timestamp when the Content base was updated */
  syncedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the Content base */
  updatedBy?: Maybe<ClientUser>;
};


/** ServerlessContent workload */
export type ServerlessContentDocumentChunkArgs = {
  chunkId: Scalars['ID']['input'];
};

/** ServerlessContent workload */
export type ServerlessContentNotion = Node & ServerlessContentBase & {
  __typename?: 'ServerlessContentNotion';
  /** Chunk */
  chunk?: Maybe<ServerlessContentChunk>;
  /** Timestamp when the Content base was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the Content base */
  createdBy?: Maybe<ClientUser>;
  /** ServerlessContent ID */
  id: Scalars['ID']['output'];
  /** Content base name */
  name?: Maybe<Scalars['String']['output']>;
  /** Phase of the job */
  phase?: Maybe<ServerlessContentPhase>;
  /** ServerlessContent status */
  status?: Maybe<ServerlessContentStatus>;
  /** Timestamp when the Content base was updated */
  syncedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the Content base */
  updatedBy?: Maybe<ClientUser>;
};


/** ServerlessContent workload */
export type ServerlessContentNotionChunkArgs = {
  chunkId: Scalars['ID']['input'];
};

/** Knowledge Phase */
export type ServerlessContentPhase = ServerlessContentPhaseCreated | ServerlessContentPhaseDeleted | ServerlessContentPhaseUpdating;

/** Created phase of a serverless endpoint */
export type ServerlessContentPhaseCreated = BaseServerlessContentPhase & {
  __typename?: 'ServerlessContentPhaseCreated';
  msg: Scalars['String']['output'];
};

/** Deleted phase of a serverless endpoint */
export type ServerlessContentPhaseDeleted = BaseServerlessContentPhase & {
  __typename?: 'ServerlessContentPhaseDeleted';
  msg: Scalars['String']['output'];
};

/** Updating phase of a serverless endpoint */
export type ServerlessContentPhaseUpdating = BaseServerlessContentPhase & {
  __typename?: 'ServerlessContentPhaseUpdating';
  msg: Scalars['String']['output'];
};

/** Status of content base */
export enum ServerlessContentStatus {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Failed = 'FAILED',
  Processing = 'PROCESSING',
  Syncing = 'SYNCING',
  SyncFailed = 'SYNC_FAILED',
  Uploading = 'UPLOADING'
}

export enum ServerlessContentType {
  Document = 'DOCUMENT',
  Notion = 'NOTION',
  Website = 'WEBSITE'
}

/** Input for ServerlessContentUpdateName */
export type ServerlessContentUpdateNameInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

/** Response payload for ServerlessContentUpdateName */
export type ServerlessContentUpdateNameResponse = ServerlessContentUpdateNameSuccess | TeamNotExistError | UserPermissionError;

/** Success response for serverless content creation */
export type ServerlessContentUpdateNameSuccess = {
  __typename?: 'ServerlessContentUpdateNameSuccess';
  ok: Scalars['Boolean']['output'];
};

/** ServerlessContent workload */
export type ServerlessContentWebsite = Node & ServerlessContentBase & {
  __typename?: 'ServerlessContentWebsite';
  /** Chunk */
  chunk?: Maybe<ServerlessContentChunk>;
  /** Timestamp when the Content base was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the Content base */
  createdBy?: Maybe<ClientUser>;
  /** ServerlessContent ID */
  id: Scalars['ID']['output'];
  /** Content base name */
  name?: Maybe<Scalars['String']['output']>;
  /** Phase of the job */
  phase?: Maybe<ServerlessContentPhase>;
  /** ServerlessContent status */
  status?: Maybe<ServerlessContentStatus>;
  /** Timestamp when the Content base was updated */
  syncedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the Content base */
  updatedBy?: Maybe<ClientUser>;
  /** URL of the website */
  url?: Maybe<Scalars['String']['output']>;
};


/** ServerlessContent workload */
export type ServerlessContentWebsiteChunkArgs = {
  chunkId: Scalars['ID']['input'];
};

/** Serverless usage breakdown */
export type ServerlessCostUsageBreakdown = {
  __typename?: 'ServerlessCostUsageBreakdown';
  /** Cost breakdown by day */
  costByDay?: Maybe<CostBreakdownTimeSeries>;
  modelId?: Maybe<Scalars['String']['output']>;
  month: Scalars['Int']['output'];
  teamId: Scalars['ID']['output'];
  year: Scalars['Int']['output'];
};

/** Catalog for serverless endpoint */
export type ServerlessEndpointCatalog = ServerlessChatEndpointCatalog;

/** Info link for serverless endpoint */
export type ServerlessEndpointCatalogInfoLink = {
  __typename?: 'ServerlessEndpointCatalogInfoLink';
  label: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** Image usage of serverless endpoint */
export type ServerlessEndpointImageInput = {
  __typename?: 'ServerlessEndpointImageInput';
  url: Scalars['String']['output'];
};

/** Serverless endpoint price */
export type ServerlessEndpointPrice = {
  __typename?: 'ServerlessEndpointPrice';
  inputPrice: Scalars['Float']['output'];
  outputPrice: Scalars['Float']['output'];
  unit: Scalars['String']['output'];
};

/** Input for ServerlessEndpointReportContent */
export type ServerlessEndpointReportContentInput = {
  content: Scalars['JSON']['input'];
};

/** Tool usage of serverless endpoint */
export type ServerlessEndpointToolCall = {
  __typename?: 'ServerlessEndpointToolCall';
  type: ServerlessEndpointToolType;
};

/** Tool type for serverless endpoint */
export enum ServerlessEndpointToolType {
  CodePythonInterpreter = 'CODE__PYTHON_INTERPRETER',
  FileText = 'FILE__TEXT',
  Function = 'FUNCTION',
  MathCalculator = 'MATH__CALCULATOR',
  MathCalendar = 'MATH__CALENDAR',
  MathStatistics = 'MATH__STATISTICS',
  RagKnowledgebase = 'RAG__KNOWLEDGEBASE',
  WebSearch = 'WEB__SEARCH',
  WebUrl = 'WEB__URL'
}

/** Serverless model type */
export enum ServerlessEndpointType {
  TextGeneration = 'TEXT_GENERATION',
  Unknown = 'UNKNOWN'
}

/** ServerlessFile workload */
export type ServerlessFile = Node & {
  __typename?: 'ServerlessFile';
  /** Artifact URI */
  artifactUri?: Maybe<Scalars['URL']['output']>;
  /** Timestamp when the file was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the file */
  createdBy?: Maybe<ClientUser>;
  /** File Download URL */
  downloadUrl?: Maybe<Scalars['URL']['output']>;
  id: Scalars['ID']['output'];
  /** Metadata of the file */
  metadata?: Maybe<ServerlessFileMetadata>;
  /** Name of the file */
  name?: Maybe<Scalars['String']['output']>;
  /** Phase of the job */
  phase?: Maybe<ServerlessFilePhase>;
  /** ServerlessFile status */
  status?: Maybe<ServerlessFileStatus>;
  /** Timestamp when the file was updated */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Input for ServerlessFileCompleteUpload */
export type ServerlessFileCompleteUploadInput = {
  /** ID of the file */
  fileId: Scalars['ID']['input'];
};

/** Response payload for ServerlessFileCompleteUpload */
export type ServerlessFileCompleteUploadResponse = ServerlessFileCompleteUploadSuccess | TeamNotExistError | UserPermissionError;

/** Success response for serverless file creation with HF */
export type ServerlessFileCompleteUploadSuccess = {
  __typename?: 'ServerlessFileCompleteUploadSuccess';
  file: ServerlessFile;
};

export type ServerlessFileCreateMetadataInput = {
  digest: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  size: Scalars['Int']['input'];
};

/** Response payload for ServerlessFileCreate */
export type ServerlessFileCreateResponse = ServerlessFileCreateSuccess | TeamNotExistError | UserPermissionError;

/** Success response for serverless file creation with HF */
export type ServerlessFileCreateSuccess = {
  __typename?: 'ServerlessFileCreateSuccess';
  file: ServerlessFile;
  uploadInfo?: Maybe<FileUploadInfo>;
};

/** Input for ServerlessFileDelete */
export type ServerlessFileDeleteInput = {
  fileId: Scalars['String']['input'];
};

/** Response payload for ServerlessFileDelete */
export type ServerlessFileDeleteResponse = ServerlessFileDeleteSuccess | TeamNotExistError | UserPermissionError;

/** Success response for serverless file creation with HF */
export type ServerlessFileDeleteSuccess = {
  __typename?: 'ServerlessFileDeleteSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Input for ServerlessFileInitializeUpload */
export type ServerlessFileInitializeUploadInput = {
  /** Metadata of the file */
  metadata: ServerlessFileCreateMetadataInput;
  /** Name of the file, defaults to file name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** ID of the team */
  teamId: Scalars['ID']['input'];
  /** Type of the file */
  type?: InputMaybe<ServerlessFileType>;
};

/** File metadata of a serverless document */
export type ServerlessFileMetadata = {
  __typename?: 'ServerlessFileMetadata';
  digest?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
};

/** File Phase */
export type ServerlessFilePhase = ServerlessFilePhaseCreated | ServerlessFilePhaseDeleted | ServerlessFilePhaseProcessing | ServerlessFilePhaseUploading;

/** Created phase of a serverless endpoint */
export type ServerlessFilePhaseCreated = BaseServerlessFilePhase & {
  __typename?: 'ServerlessFilePhaseCreated';
  msg: Scalars['String']['output'];
};

/** Deleted phase of a serverless endpoint */
export type ServerlessFilePhaseDeleted = BaseServerlessFilePhase & {
  __typename?: 'ServerlessFilePhaseDeleted';
  msg: Scalars['String']['output'];
};

/** Processing phase of a serverless endpoint */
export type ServerlessFilePhaseProcessing = BaseServerlessFilePhase & {
  __typename?: 'ServerlessFilePhaseProcessing';
  msg: Scalars['String']['output'];
};

/** Uploading phase of a serverless endpoint */
export type ServerlessFilePhaseUploading = BaseServerlessFilePhase & {
  __typename?: 'ServerlessFilePhaseUploading';
  msg: Scalars['String']['output'];
  percentage: Scalars['Float']['output'];
  total: Scalars['String']['output'];
  uploaded: Scalars['String']['output'];
};

/** Status of file */
export enum ServerlessFileStatus {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Failed = 'FAILED',
  Processing = 'PROCESSING',
  Unknown = 'UNKNOWN',
  Uploading = 'UPLOADING'
}

export enum ServerlessFileType {
  Audio = 'AUDIO',
  Binary = 'BINARY',
  Document = 'DOCUMENT',
  Image = 'IMAGE',
  Video = 'VIDEO'
}

/** Input for ServerlessFileUpdateName */
export type ServerlessFileUpdateNameInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

/** Response payload for ServerlessFileUpdateName */
export type ServerlessFileUpdateNameResponse = ServerlessFileUpdateNameSuccess | TeamNotExistError | UserPermissionError;

/** Success response for serverless file creation */
export type ServerlessFileUpdateNameSuccess = {
  __typename?: 'ServerlessFileUpdateNameSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Input for ServerlessFileUpdateUploadProgress */
export type ServerlessFileUpdateUploadProgressInput = {
  fileId: Scalars['ID']['input'];
  uploadedBytes: Scalars['Int']['input'];
};

/** ServerlessKnowledge workload */
export type ServerlessKnowledge = Node & {
  __typename?: 'ServerlessKnowledge';
  /** List of contents in the subplan */
  contents?: Maybe<ServerlessKnowledgeContentConnection>;
  /** Timestamp when the Knowledge base was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the Knowledge base */
  createdBy?: Maybe<ClientUser>;
  id: Scalars['ID']['output'];
  /** Knowledge base name */
  name?: Maybe<Scalars['String']['output']>;
  /** Phase of the job */
  phase?: Maybe<ServerlessKnowledgePhase>;
  /** ServerlessKnowledge status */
  status?: Maybe<ServerlessKnowledgeStatus>;
  /** Timestamp when the Knowledge base was updated */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User who updated the Knowledge base */
  updatedBy?: Maybe<ClientUser>;
};


/** ServerlessKnowledge workload */
export type ServerlessKnowledgeContentsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<ServerlessKnowledgeContentFiltersInput>;
  sorts?: InputMaybe<ServerlessKnowledgeContentSortsInput>;
};

/** Serverless contents */
export type ServerlessKnowledgeContentConnection = {
  __typename?: 'ServerlessKnowledgeContentConnection';
  /** Returned project list */
  edges: Array<ServerlessKnowledgeContentEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count */
  totalCount: Scalars['Int']['output'];
};

/** Contents in serverless product */
export type ServerlessKnowledgeContentEdge = {
  __typename?: 'ServerlessKnowledgeContentEdge';
  cursor: Scalars['Base64']['output'];
  node: ServerlessContent;
};

export type ServerlessKnowledgeContentFiltersInput = {
  /** Filter by created timestamp */
  createdDateRange?: InputMaybe<DateRangeInput>;
  /** Filter with corresponding project's id */
  idSearch?: InputMaybe<Scalars['String']['input']>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  /** Filter by project state */
  statuses?: InputMaybe<Array<ServerlessContentStatus>>;
  /** Filter by project state */
  types?: InputMaybe<Array<ServerlessContentType>>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

/** Content input for serverless knowledge creation */
export type ServerlessKnowledgeContentInput = {
  fileId?: InputMaybe<Scalars['ID']['input']>;
  notionPageId?: InputMaybe<Scalars['ID']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ServerlessKnowledgeContentSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: created_at, updated_at, name, status */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Input for ServerlessKnowledgeCreate */
export type ServerlessKnowledgeCreateInput = {
  contents?: InputMaybe<Array<ServerlessKnowledgeContentInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  teamId: Scalars['ID']['input'];
};

/** Response payload for ServerlessKnowledgeCreate */
export type ServerlessKnowledgeCreateResponse = ServerlessKnowledgeCreateSuccess | TeamNotExistError | UserPermissionError;

/** Success response for serverless knowledge creation */
export type ServerlessKnowledgeCreateSuccess = {
  __typename?: 'ServerlessKnowledgeCreateSuccess';
  knowledge?: Maybe<ServerlessKnowledge>;
  ok: Scalars['Boolean']['output'];
};

/** Input for ServerlessKnowledgeDelete */
export type ServerlessKnowledgeDeleteInput = {
  id: Scalars['String']['input'];
};

/** Response payload for ServerlessKnowledgeDelete */
export type ServerlessKnowledgeDeleteResponse = ServerlessKnowledgeDeleteSuccess | TeamNotExistError | UserPermissionError;

/** Success response for serverless knowledge creation with HF */
export type ServerlessKnowledgeDeleteSuccess = {
  __typename?: 'ServerlessKnowledgeDeleteSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Knowledge Phase */
export type ServerlessKnowledgePhase = ServerlessKnowledgePhaseCreated | ServerlessKnowledgePhaseDeleted | ServerlessKnowledgePhaseUpdating;

/** Created phase of a serverless endpoint */
export type ServerlessKnowledgePhaseCreated = BaseServerlessKnowledgePhase & {
  __typename?: 'ServerlessKnowledgePhaseCreated';
  msg: Scalars['String']['output'];
};

/** Deleted phase of a serverless endpoint */
export type ServerlessKnowledgePhaseDeleted = BaseServerlessKnowledgePhase & {
  __typename?: 'ServerlessKnowledgePhaseDeleted';
  msg: Scalars['String']['output'];
};

/** Updating phase of a serverless endpoint */
export type ServerlessKnowledgePhaseUpdating = BaseServerlessKnowledgePhase & {
  __typename?: 'ServerlessKnowledgePhaseUpdating';
  msg: Scalars['String']['output'];
};

/** Input for ServerlessKnowledgePurge */
export type ServerlessKnowledgePurgeInput = {
  id: Scalars['String']['input'];
};

/** Response payload for ServerlessKnowledgePurge */
export type ServerlessKnowledgePurgeResponse = ServerlessKnowledgePurgeSuccess | TeamNotExistError | UserPermissionError;

/** Success response for serverless knowledge creation with HF */
export type ServerlessKnowledgePurgeSuccess = {
  __typename?: 'ServerlessKnowledgePurgeSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Status of knowledge base */
export enum ServerlessKnowledgeStatus {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Updating = 'UPDATING'
}

/** Input for ServerlessKnowledgeUpdateName */
export type ServerlessKnowledgeUpdateNameInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

/** Response payload for ServerlessKnowledgeUpdateName */
export type ServerlessKnowledgeUpdateNameResponse = ServerlessKnowledgeUpdateNameSuccess | TeamNotExistError | UserPermissionError;

/** Success response for serverless knowledge creation */
export type ServerlessKnowledgeUpdateNameSuccess = {
  __typename?: 'ServerlessKnowledgeUpdateNameSuccess';
  ok: Scalars['Boolean']['output'];
};

/** Serverless monthly usage */
export type ServerlessMonthlyUsage = {
  __typename?: 'ServerlessMonthlyUsage';
  month: Scalars['Int']['output'];
  /** monthly requests */
  requests?: Maybe<Scalars['Int']['output']>;
  /** monthly spend */
  spend?: Maybe<Scalars['Decimal']['output']>;
  teamId: Scalars['ID']['output'];
  /** monthly total tokens */
  totalTokens?: Maybe<Scalars['Int']['output']>;
  year: Scalars['Int']['output'];
};


/** Serverless monthly usage */
export type ServerlessMonthlyUsageRequestsArgs = {
  modelId?: InputMaybe<Scalars['String']['input']>;
};


/** Serverless monthly usage */
export type ServerlessMonthlyUsageSpendArgs = {
  modelId?: InputMaybe<Scalars['String']['input']>;
};


/** Serverless monthly usage */
export type ServerlessMonthlyUsageTotalTokensArgs = {
  modelId?: InputMaybe<Scalars['String']['input']>;
};

/** PeriFlow Serverless Product */
export type ServerlessSubplan = BaseProductSubplan & {
  __typename?: 'ServerlessSubplan';
  /** List of chats in the subplan */
  chats?: Maybe<ServerlessSubplanChatConnection>;
  /** List of files in the subplan */
  files?: Maybe<ServerlessSubplanFileConnection>;
  /** Free credit usage */
  freeCreditUsage?: Maybe<ServerlessSubplanFreeCreditUsage>;
  /** List of knowledge in the subplan */
  knowledges?: Maybe<ServerlessSubplanKnowledgeConnection>;
  /** List of members in the organization */
  members?: Maybe<ServerlessSubplanMemberConnection>;
  /**
   * Product state
   * @deprecated Use status field instead
   */
  state?: Maybe<ServerlessSubplanState>;
  /** Product status */
  status?: Maybe<ServerlessSubplanStatus>;
  /** Team */
  team: ClientTeam;
  teamId: Scalars['ID']['output'];
  /**
   * Product tier
   * @deprecated Use status field instead
   */
  tier?: Maybe<ServerlessSubplanTier>;
};


/** PeriFlow Serverless Product */
export type ServerlessSubplanChatsArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<ServerlessSubplanChatFiltersInput>;
  sorts?: InputMaybe<ServerlessSubplanChatSortsInput>;
};


/** PeriFlow Serverless Product */
export type ServerlessSubplanFilesArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<ServerlessSubplanFileFiltersInput>;
  sorts?: InputMaybe<ServerlessSubplanFileSortsInput>;
};


/** PeriFlow Serverless Product */
export type ServerlessSubplanKnowledgesArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
  filters?: InputMaybe<ServerlessSubplanKnowledgeFiltersInput>;
  sorts?: InputMaybe<ServerlessSubplanKnowledgeSortsInput>;
};


/** PeriFlow Serverless Product */
export type ServerlessSubplanMembersArgs = {
  conn?: InputMaybe<BidirectionalConnectionInput>;
};

/** Input for ServerlessSubplanCancelBasicPlan */
export type ServerlessSubplanCancelBasicPlanInput = {
  /** Team ID */
  teamId: Scalars['ID']['input'];
};

/** Serverless chats */
export type ServerlessSubplanChatConnection = {
  __typename?: 'ServerlessSubplanChatConnection';
  /** Returned project list */
  edges: Array<ServerlessSubplanChatEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of waitlist registrations */
  totalCount: Scalars['Int']['output'];
};

/** Chats in serverless product */
export type ServerlessSubplanChatEdge = {
  __typename?: 'ServerlessSubplanChatEdge';
  cursor: Scalars['Base64']['output'];
  node: ServerlessChat;
};

export type ServerlessSubplanChatFiltersInput = {
  /** Filter by created timestamp */
  createdDateRange?: InputMaybe<DateRangeInput>;
  /** Filter with corresponding project's id */
  idSearch?: InputMaybe<Scalars['String']['input']>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  /** Filter by project state */
  statuses?: InputMaybe<Array<ServerlessChatStatus>>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

export type ServerlessSubplanChatSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: created_at, updated_at, name */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Team connection */
export type ServerlessSubplanConnection = {
  __typename?: 'ServerlessSubplanConnection';
  /** Returned teams */
  edges: Array<ServerlessSubplan>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of teams */
  totalCount: Scalars['Int']['output'];
};

/** Error response type for serverless subplan subscription */
export type ServerlessSubplanError = {
  __typename?: 'ServerlessSubplanError';
  message: Scalars['String']['output'];
};

/** Serverless files */
export type ServerlessSubplanFileConnection = {
  __typename?: 'ServerlessSubplanFileConnection';
  /** Returned project list */
  edges: Array<ServerlessSubplanFileEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of waitlist registrations */
  totalCount: Scalars['Int']['output'];
};

/** Files in serverless product */
export type ServerlessSubplanFileEdge = {
  __typename?: 'ServerlessSubplanFileEdge';
  cursor: Scalars['Base64']['output'];
  node: ServerlessFile;
};

export type ServerlessSubplanFileFiltersInput = {
  /** Filter by created timestamp */
  createdDateRange?: InputMaybe<DateRangeInput>;
  /** Filter with corresponding project's id */
  idSearch?: InputMaybe<Scalars['String']['input']>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  /** Filter by project state */
  statuses?: InputMaybe<Array<ServerlessFileStatus>>;
  /** Filter by project state */
  types?: InputMaybe<Array<ServerlessFileType>>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

export type ServerlessSubplanFileSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: created_at, updated_at, name */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type ServerlessSubplanFiltersInput = {
  createdDateRange?: InputMaybe<DateRangeInput>;
  joinedDateRange?: InputMaybe<DateRangeInput>;
  states?: InputMaybe<Array<ServerlessSubplanState>>;
  statuses?: InputMaybe<Array<ServerlessSubplanStatus>>;
  teamIdSearch?: InputMaybe<Scalars['String']['input']>;
  teamNameSearch?: InputMaybe<Scalars['String']['input']>;
  tiers?: InputMaybe<Array<ServerlessSubplanTier>>;
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

/** Free credit usage of product serverless */
export type ServerlessSubplanFreeCreditUsage = {
  __typename?: 'ServerlessSubplanFreeCreditUsage';
  total: Scalars['String']['output'];
  used: Scalars['String']['output'];
};

/** Serverless knowledges */
export type ServerlessSubplanKnowledgeConnection = {
  __typename?: 'ServerlessSubplanKnowledgeConnection';
  /** Returned project list */
  edges: Array<ServerlessSubplanKnowledgeEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count */
  totalCount: Scalars['Int']['output'];
};

/** Knowledges in serverless product */
export type ServerlessSubplanKnowledgeEdge = {
  __typename?: 'ServerlessSubplanKnowledgeEdge';
  cursor: Scalars['Base64']['output'];
  node: ServerlessKnowledge;
};

export type ServerlessSubplanKnowledgeFiltersInput = {
  /** Filter by created timestamp */
  createdDateRange?: InputMaybe<DateRangeInput>;
  /** Filter with corresponding project's id */
  idSearch?: InputMaybe<Scalars['String']['input']>;
  nameSearch?: InputMaybe<Scalars['String']['input']>;
  /** Filter by project state */
  statuses?: InputMaybe<Array<ServerlessKnowledgeStatus>>;
  /** Filter by updated timestamp */
  updatedDateRange?: InputMaybe<DateRangeInput>;
};

export type ServerlessSubplanKnowledgeSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: created_at, updated_at, name */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Users in a Product container */
export type ServerlessSubplanMemberConnection = {
  __typename?: 'ServerlessSubplanMemberConnection';
  /** Returned registration list */
  edges: Array<ServerlessSubplanMemberEdge>;
  /** Page information */
  pageInfo: PageInfo;
  /** Total count of waitlist registrations */
  totalCount: Scalars['Int']['output'];
};

/** User in a ClientTeam */
export type ServerlessSubplanMemberEdge = {
  __typename?: 'ServerlessSubplanMemberEdge';
  cursor: Scalars['Base64']['output'];
  node: ClientUser;
};

/** Response type for serverless subplan subscription */
export type ServerlessSubplanResponse = {
  __typename?: 'ServerlessSubplanResponse';
  freeCredit?: Maybe<ServerlessSubplanFreeCreditUsage>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
};

/** Union of ServerlessSubplanResponse and ServerlessSubplanError */
export type ServerlessSubplanResponseUnion = ServerlessSubplanError | ServerlessSubplanResponse;

export type ServerlessSubplanSortsInput = {
  ascending?: Scalars['Boolean']['input'];
  /** Sort by column: joined_at, updated_at, status */
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Input for ServerlessSubplanStartBasicPlan */
export type ServerlessSubplanStartBasicPlanInput = {
  /** Team ID */
  teamId: Scalars['ID']['input'];
};

/** Input for ServerlessSubplanStartTrial */
export type ServerlessSubplanStartTrialInput = {
  /** Team ID */
  teamId: Scalars['ID']['input'];
};

/** Product container state */
export enum ServerlessSubplanState {
  Approved = 'APPROVED',
  Expired = 'EXPIRED',
  Unknown = 'UNKNOWN',
  Unsubscribed = 'UNSUBSCRIBED'
}

/** Product container status */
export enum ServerlessSubplanStatus {
  BasicExpired = 'BASIC_EXPIRED',
  BasicVerified = 'BASIC_VERIFIED',
  EnterpriseExpired = 'ENTERPRISE_EXPIRED',
  EnterpriseVerified = 'ENTERPRISE_VERIFIED',
  TrialExpired = 'TRIAL_EXPIRED',
  TrialVerified = 'TRIAL_VERIFIED'
}

/** Product container plan */
export enum ServerlessSubplanTier {
  Basic = 'BASIC',
  Enterprise = 'ENTERPRISE',
  Trial = 'TRIAL'
}

/** Input for ServerlessSubplanUpdateTier */
export type ServerlessSubplanUpdateTierInput = {
  /** Team ID */
  teamId: Scalars['ID']['input'];
  /** Serverless Tier */
  tier: ServerlessSubplanTier;
};

/** Serverless usage */
export type ServerlessUsage = {
  __typename?: 'ServerlessUsage';
  /** Cost breakdown */
  costUsageBreakdown?: Maybe<ServerlessCostUsageBreakdown>;
  /** Monthly usage */
  monthlyUsage?: Maybe<ServerlessMonthlyUsage>;
  teamId: Scalars['ID']['output'];
  /** Metric breakdown */
  usageMetricBreakdown?: Maybe<ServerlessUsageMetricBreakdown>;
};


/** Serverless usage */
export type ServerlessUsageCostUsageBreakdownArgs = {
  modelId?: InputMaybe<Scalars['String']['input']>;
  yearMonth: YearMonthInput;
};


/** Serverless usage */
export type ServerlessUsageMonthlyUsageArgs = {
  yearMonth: YearMonthInput;
};


/** Serverless usage */
export type ServerlessUsageUsageMetricBreakdownArgs = {
  bucket?: InputMaybe<Scalars['Int']['input']>;
  dateRange: DateRangeInput;
  modelId?: InputMaybe<Scalars['String']['input']>;
};

/** Serverless usage breakdown */
export type ServerlessUsageMetricBreakdown = {
  __typename?: 'ServerlessUsageMetricBreakdown';
  bucket?: Maybe<Scalars['Int']['output']>;
  end?: Maybe<Scalars['DateTime']['output']>;
  /** Input token usage */
  inputTokenUsage?: Maybe<IntTimeSeries>;
  modelId?: Maybe<Scalars['String']['output']>;
  /** Output token usage */
  outputTokenUsage?: Maybe<IntTimeSeries>;
  /** Request usage */
  requestUsage?: Maybe<IntTimeSeries>;
  start?: Maybe<Scalars['DateTime']['output']>;
  teamId: Scalars['ID']['output'];
  /** Total token usage */
  totalTokenUsage?: Maybe<IntTimeSeries>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Subscribe to secret updates for a team in Container Subplan */
  containerSubplanSecrets: ContainerSubplanSecretResponseUnion;
  /** Subscribe to status and phase updates for a DedicatedEndpoint */
  dedicatedEndpointStatusWithPhaseSubscription: DedicatedEndpointStatusWithPhaseSubscriptionResponseUnion;
  /** Subscribe to full state updates for a DedicatedFinetuning */
  dedicatedFinetuningSubscription: DedicatedFinetuningSubscriptionResponseUnion;
  /** Subscribe to free credit usage for a team in Serverless Subplan */
  serverlessSubplanFreeCreditUsage: ServerlessSubplanResponseUnion;
  tmp: Scalars['Int']['output'];
};


export type SubscriptionContainerSubplanSecretsArgs = {
  interval: Scalars['Int']['input'];
  teamId: Scalars['ID']['input'];
};


export type SubscriptionDedicatedEndpointStatusWithPhaseSubscriptionArgs = {
  endpointId: Scalars['ID']['input'];
  interval: Scalars['Int']['input'];
};


export type SubscriptionDedicatedFinetuningSubscriptionArgs = {
  finetuningId: Scalars['ID']['input'];
  interval: Scalars['Int']['input'];
};


export type SubscriptionServerlessSubplanFreeCreditUsageArgs = {
  interval: Scalars['Int']['input'];
  teamId: Scalars['ID']['input'];
};

/** Supported product types */
export enum SupportedProductType {
  Container = 'CONTAINER',
  Dedicated = 'DEDICATED',
  Serverless = 'SERVERLESS'
}

/** Error response for when team already subscribed to product */
export type TeamAlreadySubscribedError = BaseError & {
  __typename?: 'TeamAlreadySubscribedError';
  message: Scalars['String']['output'];
};

/** Error response for when the team does not exist */
export type TeamNotExistError = BaseError & {
  __typename?: 'TeamNotExistError';
  message: Scalars['String']['output'];
};

/** Error response for when team did not register payment */
export type TeamPaymentNotFoundErrorObj = BaseError & {
  __typename?: 'TeamPaymentNotFoundErrorObj';
  message: Scalars['String']['output'];
};

export type UnionTimeSeries = {
  __typename?: 'UnionTimeSeries';
  data: Array<UnionTimeSeriesObservation>;
};

export type UnionTimeSeriesObservation = {
  __typename?: 'UnionTimeSeriesObservation';
  timestamp: Scalars['DateTime']['output'];
  values: Scalars['Union']['output'];
};

/** User Agent type. Used for distinguishing between different browsers. */
export type UserAgent = {
  __typename?: 'UserAgent';
  /** User agent browser */
  browser: UserAgentBrowser;
  /** User agent device */
  device: UserAgentDevice;
  /** Is bot */
  isBot: Scalars['Boolean']['output'];
  /** Is mobile device */
  isMobile: Scalars['Boolean']['output'];
  /** Is pc device */
  isPc: Scalars['Boolean']['output'];
  /** Is tablet device */
  isTablet: Scalars['Boolean']['output'];
  /** Is touch capable device */
  isTouchCapable: Scalars['Boolean']['output'];
  /** User agent os */
  os: UserAgentOs;
};

/** User agent Browser type */
export type UserAgentBrowser = {
  __typename?: 'UserAgentBrowser';
  family?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

/** User agent Device type */
export type UserAgentDevice = {
  __typename?: 'UserAgentDevice';
  brand?: Maybe<Scalars['String']['output']>;
  family?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
};

/** User agent OS type */
export type UserAgentOs = {
  __typename?: 'UserAgentOS';
  family?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

/** Error response for when the user does not exist */
export type UserNotExistError = BaseError & {
  __typename?: 'UserNotExistError';
  message: Scalars['String']['output'];
};

/** Error response for when user does not have permission */
export type UserPermissionError = BaseError & {
  __typename?: 'UserPermissionError';
  message: Scalars['String']['output'];
};

/** User's team */
export type UserPreference = {
  __typename?: 'UserPreference';
  /** User's product preference */
  productInterest?: Maybe<ClientUserProductInterestChoices>;
};

/** User's team product access info */
export type UserTeamProductAccessInfo = {
  __typename?: 'UserTeamProductAccessInfo';
  container?: Maybe<Scalars['Boolean']['output']>;
  dedicatedEndpoints?: Maybe<Scalars['Boolean']['output']>;
  serverlessEndpoints?: Maybe<Scalars['Boolean']['output']>;
};

/** Requested wandb model's architecture is not supported */
export type WandbModelCheckCompatibilityArchitectureNotSupportedError = BaseError & {
  __typename?: 'WandbModelCheckCompatibilityArchitectureNotSupportedError';
  message: Scalars['String']['output'];
};

/** Requested wandb model cannot be parsed */
export type WandbModelCheckCompatibilityMalformedRepoError = BaseError & {
  __typename?: 'WandbModelCheckCompatibilityMalformedRepoError';
  message: Scalars['String']['output'];
};

/** Requested wandb model is not found */
export type WandbModelCheckCompatibilityNotFoundError = BaseError & {
  __typename?: 'WandbModelCheckCompatibilityNotFoundError';
  message: Scalars['String']['output'];
};

/** Response payload for WandbModelCheckCompatibility */
export type WandbModelCheckCompatibilityResponse = WandbModelCheckCompatibilityArchitectureNotSupportedError | WandbModelCheckCompatibilityMalformedRepoError | WandbModelCheckCompatibilityNotFoundError | WandbModelCheckCompatibilitySuccess;

/** Model is compatible */
export type WandbModelCheckCompatibilitySuccess = {
  __typename?: 'WandbModelCheckCompatibilitySuccess';
  ok: Scalars['Boolean']['output'];
};

export type YearMonthInput = {
  month: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type ClientSessionUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type ClientSessionUserInfoQuery = { __typename?: 'Query', clientSession?: { __typename?: 'ClientSession', user: { __typename?: 'ClientUser', id: string, name?: string | null, email?: string | null } } | null };


export const ClientSessionUserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ClientSessionUserInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientSession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<ClientSessionUserInfoQuery, ClientSessionUserInfoQueryVariables>;