/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER',
  Validation = 'VALIDATION'
}

export enum BizObjectSort {
  Asc = 'ASC',
  DateAsc = 'DATE_ASC',
  DateAscNameAsc = 'DATE_ASC_NAME_ASC',
  DateAscNameDesc = 'DATE_ASC_NAME_DESC',
  DateDesc = 'DATE_DESC',
  DateDescNameAsc = 'DATE_DESC_NAME_ASC',
  DateDescNameDesc = 'DATE_DESC_NAME_DESC',
  DeadlineAsc = 'DEADLINE_ASC',
  DeadlineDesc = 'DEADLINE_DESC',
  Desc = 'DESC',
  Name1AscAndName2Asc = 'NAME1_ASC_AND_NAME2_ASC',
  Name1AscAndName2Desc = 'NAME1_ASC_AND_NAME2_DESC',
  Name1DescAndName2Asc = 'NAME1_DESC_AND_NAME2_ASC',
  Name1DescAndName2Desc = 'NAME1_DESC_AND_NAME2_DESC',
  NameAscResourceNameAsc = 'NAME_ASC_RESOURCE_NAME_ASC',
  ObjectNameAsc = 'OBJECT_NAME_ASC',
  ObjectNameDesc = 'OBJECT_NAME_DESC'
}

export type EditInput = {
  id: Scalars['UUID']['input'];
};

export enum FilterEnumType {
  Between = 'BETWEEN',
  BetweenForInt = 'BETWEEN_FOR_INT',
  Equals = 'EQUALS',
  In = 'IN',
  InColor = 'IN_COLOR',
  InWithLevels = 'IN_WITH_LEVELS',
  Like = 'LIKE'
}

export type FilterItemInput = {
  customFieldId: Scalars['String']['input'];
  filterType: FilterEnumType;
  filterValue: FilterValueInput;
  tabType: TabType;
};

export type FilterSortInput = {
  filters?: InputMaybe<Array<KeyValuePairOfObjectTypeAndListOfFilterItemInput>>;
  mainSort?: InputMaybe<BizObjectSort>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

export type FilterValueInput = {
  dateFrom?: InputMaybe<Scalars['DateTime']['input']>;
  dateTo?: InputMaybe<Scalars['DateTime']['input']>;
  isForeachDay: Scalars['Boolean']['input'];
  rangeIntFrom?: InputMaybe<Scalars['Int']['input']>;
  rangeIntTo?: InputMaybe<Scalars['Int']['input']>;
  stringValue: Array<Scalars['String']['input']>;
  tagWithLevels: Array<KeyValuePairOfStringAndListOfStringInput>;
  timeTolerance?: InputMaybe<Scalars['Int']['input']>;
};

export type KeyValuePairOfObjectTypeAndListOfFilterItemInput = {
  key: ObjectType;
  value: Array<FilterItemInput>;
};

export type KeyValuePairOfStringAndListOfStringInput = {
  key: Scalars['String']['input'];
  value: Array<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  edit: ResourcePayload;
};


export type MutationEditArgs = {
  input: EditInput;
};

export enum ObjectType {
  Achievement = 'ACHIEVEMENT',
  Adaptation = 'ADAPTATION',
  Attendance = 'ATTENDANCE',
  Ba = 'BA',
  Booking = 'BOOKING',
  BypassSheet = 'BYPASS_SHEET',
  BypassSheetHr = 'BYPASS_SHEET_HR',
  BypassSheetOsAiT = 'BYPASS_SHEET_OS_AI_T',
  BypassSheetOxo = 'BYPASS_SHEET_OXO',
  BypassSheetRm = 'BYPASS_SHEET_RM',
  Candidate = 'CANDIDATE',
  CareerDevelopmentDay = 'CAREER_DEVELOPMENT_DAY',
  CareerDevelopmentDayLike = 'CAREER_DEVELOPMENT_DAY_LIKE',
  Common = 'COMMON',
  CustomField = 'CUSTOM_FIELD',
  CustomFieldReference = 'CUSTOM_FIELD_REFERENCE',
  CustomFieldValue = 'CUSTOM_FIELD_VALUE',
  Diary = 'DIARY',
  Dictionary = 'DICTIONARY',
  DictionaryValue = 'DICTIONARY_VALUE',
  Direction = 'DIRECTION',
  DismissalRequest = 'DISMISSAL_REQUEST',
  ExitInterview = 'EXIT_INTERVIEW',
  Gratitude = 'GRATITUDE',
  IndividualDevelopmentPlan = 'INDIVIDUAL_DEVELOPMENT_PLAN',
  IndividualDevelopmentPlanItem = 'INDIVIDUAL_DEVELOPMENT_PLAN_ITEM',
  KeyResource = 'KEY_RESOURCE',
  Meeting = 'MEETING',
  MeetingBeforeCdd = 'MEETING_BEFORE_CDD',
  MeetingMentorship = 'MEETING_MENTORSHIP',
  MeetingOneToOne = 'MEETING_ONE_TO_ONE',
  MeetingOnAdaptation = 'MEETING_ON_ADAPTATION',
  MeetingOnCdd = 'MEETING_ON_CDD',
  MeetingOnExitInterview = 'MEETING_ON_EXIT_INTERVIEW',
  MeetingOnMentoring = 'MEETING_ON_MENTORING',
  MeetingOnTraining = 'MEETING_ON_TRAINING',
  MeetingOnWorkEfficiency = 'MEETING_ON_WORK_EFFICIENCY',
  MeetingWithManager = 'MEETING_WITH_MANAGER',
  Mentee = 'MENTEE',
  Mentor = 'MENTOR',
  Mentoring = 'MENTORING',
  MentoringKnowledgeTransfer = 'MENTORING_KNOWLEDGE_TRANSFER',
  MentoringOfManagment = 'MENTORING_OF_MANAGMENT',
  MentoringRookie = 'MENTORING_ROOKIE',
  Mentorship = 'MENTORSHIP',
  None = 'NONE',
  Permission = 'PERMISSION',
  PersonnelReserve = 'PERSONNEL_RESERVE',
  Pm = 'PM',
  PositionResponse = 'POSITION_RESPONSE',
  Project = 'PROJECT',
  Qa = 'QA',
  QuestionaireQaTeam = 'QUESTIONAIRE_QA_TEAM',
  Questionnaire = 'QUESTIONNAIRE',
  QuestionnaireAdaptation = 'QUESTIONNAIRE_ADAPTATION',
  QuestionnaireAdaptationRm = 'QUESTIONNAIRE_ADAPTATION_RM',
  QuestionnaireBa = 'QUESTIONNAIRE_BA',
  QuestionnaireBaSelf = 'QUESTIONNAIRE_BA_SELF',
  QuestionnaireBaTeam = 'QUESTIONNAIRE_BA_TEAM',
  QuestionnaireCddFeedback = 'QUESTIONNAIRE_CDD_FEEDBACK',
  QuestionnaireLead = 'QUESTIONNAIRE_LEAD',
  QuestionnaireLeadBa = 'QUESTIONNAIRE_LEAD_BA',
  QuestionnaireLeadResult = 'QUESTIONNAIRE_LEAD_RESULT',
  QuestionnaireLeadSe = 'QUESTIONNAIRE_LEAD_SE',
  QuestionnaireLeadSelf = 'QUESTIONNAIRE_LEAD_SELF',
  QuestionnaireLeadTeam = 'QUESTIONNAIRE_LEAD_TEAM',
  QuestionnaireMentoring = 'QUESTIONNAIRE_MENTORING',
  QuestionnaireMentoringLead = 'QUESTIONNAIRE_MENTORING_LEAD',
  QuestionnaireMentoringMentee = 'QUESTIONNAIRE_MENTORING_MENTEE',
  QuestionnaireMentoringMentor = 'QUESTIONNAIRE_MENTORING_MENTOR',
  QuestionnaireMentorship = 'QUESTIONNAIRE_MENTORSHIP',
  QuestionnairePm = 'QUESTIONNAIRE_PM',
  QuestionnaireQa = 'QUESTIONNAIRE_QA',
  QuestionnaireQaAutomation = 'QUESTIONNAIRE_QA_AUTOMATION',
  QuestionnaireQaAutoSelf = 'QUESTIONNAIRE_QA_AUTO_SELF',
  QuestionnaireQaAutoTeam = 'QUESTIONNAIRE_QA_AUTO_TEAM',
  QuestionnaireQaSelf = 'QUESTIONNAIRE_QA_SELF',
  QuestionnaireRmCollegues = 'QUESTIONNAIRE_RM_COLLEGUES',
  QuestionnaireRmSelf = 'QUESTIONNAIRE_RM_SELF',
  QuestionnaireRmTeam = 'QUESTIONNAIRE_RM_TEAM',
  QuestionnaireSe = 'QUESTIONNAIRE_SE',
  QuestionnaireSeSelf = 'QUESTIONNAIRE_SE_SELF',
  QuestionnaireSeTeam = 'QUESTIONNAIRE_SE_TEAM',
  QuestionnaireSeV2 = 'QUESTIONNAIRE_SE_V2',
  QuestionnaireSoft = 'QUESTIONNAIRE_SOFT',
  QuestionnaireSoftSelf = 'QUESTIONNAIRE_SOFT_SELF',
  QuestionnaireSupport = 'QUESTIONNAIRE_SUPPORT',
  Record = 'RECORD',
  Resource = 'RESOURCE',
  ResourceOffer = 'RESOURCE_OFFER',
  Se = 'SE',
  SecretSanta = 'SECRET_SANTA',
  ShareResource = 'SHARE_RESOURCE',
  Task = 'TASK',
  Trainee = 'TRAINEE',
  Training = 'TRAINING',
  User = 'USER',
  WfAction = 'WF_ACTION'
}

export type Query = {
  __typename?: 'Query';
  resources: ResourcesPayload;
  users: Array<UserPayload>;
};


export type QueryResourcesArgs = {
  input: FilterSortInput;
};

export type ResourcePayload = {
  __typename?: 'ResourcePayload';
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
};

export type ResourcesPayload = {
  __typename?: 'ResourcesPayload';
  count: Scalars['Int']['output'];
  list: Array<ResourcePayload>;
};

export enum TabType {
  Adaptation = 'ADAPTATION',
  Additional = 'ADDITIONAL',
  Attendance = 'ATTENDANCE',
  Available = 'AVAILABLE',
  Basic = 'BASIC',
  CareerDevelopmentDay = 'CAREER_DEVELOPMENT_DAY',
  Color = 'COLOR',
  ComfortableRm = 'COMFORTABLE_RM',
  Comment = 'COMMENT',
  ComplianceWithCompanyGoals = 'COMPLIANCE_WITH_COMPANY_GOALS',
  DeadlinesRm = 'DEADLINES_RM',
  EmployeeMotivation = 'EMPLOYEE_MOTIVATION',
  ExitInterview = 'EXIT_INTERVIEW',
  Experience = 'EXPERIENCE',
  Expertize = 'EXPERTIZE',
  ExpertKnowl = 'EXPERT_KNOWL',
  ExpertKnowledge = 'EXPERT_KNOWLEDGE',
  Gratitude = 'GRATITUDE',
  ImplementationStrategyOfCompany = 'IMPLEMENTATION_STRATEGY_OF_COMPANY',
  Independence = 'INDEPENDENCE',
  IndividualDevelopmentPlan = 'INDIVIDUAL_DEVELOPMENT_PLAN',
  Initiative = 'INITIATIVE',
  Involved = 'INVOLVED',
  LinkedResources = 'LINKED_RESOURCES',
  Loyality = 'LOYALITY',
  LoyalityToCompany = 'LOYALITY_TO_COMPANY',
  LoyalityToCompanyCollegues = 'LOYALITY_TO_COMPANY_COLLEGUES',
  Meeting = 'MEETING',
  MenteeDiary = 'MENTEE_DIARY',
  Mentoring = 'MENTORING',
  MentoringSoft = 'MENTORING_SOFT',
  Mentorship = 'MENTORSHIP',
  MentorDiary = 'MENTOR_DIARY',
  MotivationAndEducationOfEmployee = 'MOTIVATION_AND_EDUCATION_OF_EMPLOYEE',
  None = 'NONE',
  Personality = 'PERSONALITY',
  PersonnelReserve = 'PERSONNEL_RESERVE',
  PresentationAndCommunicationSkills = 'PRESENTATION_AND_COMMUNICATION_SKILLS',
  PresentationAndCommunicationSkillsCollegues = 'PRESENTATION_AND_COMMUNICATION_SKILLS_COLLEGUES',
  PresentationSkills = 'PRESENTATION_SKILLS',
  Private = 'PRIVATE',
  ProfessionalSkill = 'PROFESSIONAL_SKILL',
  Questionnaire = 'QUESTIONNAIRE',
  Quick = 'QUICK',
  ReadyForChanges = 'READY_FOR_CHANGES',
  ReadyToChanges = 'READY_TO_CHANGES',
  Record = 'RECORD',
  Resource = 'RESOURCE',
  ResultRm = 'RESULT_RM',
  SelfEducation = 'SELF_EDUCATION',
  StrategyRealization = 'STRATEGY_REALIZATION',
  System = 'SYSTEM',
  TeamPlayer = 'TEAM_PLAYER',
  TeamPlayerCollegues = 'TEAM_PLAYER_COLLEGUES',
  Training = 'TRAINING',
  Unreal = 'UNREAL'
}

export type UserPayload = {
  __typename?: 'UserPayload';
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  login: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type GetResourcesQueryVariables = Exact<{
  input: FilterSortInput;
}>;


export type GetResourcesQuery = { __typename?: 'Query', resources: { __typename?: 'ResourcesPayload', count: number, list: Array<{ __typename?: 'ResourcePayload', id: any, name: string, email: string }> } };


export const GetResourcesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetResources"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterSortInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resources"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<GetResourcesQuery, GetResourcesQueryVariables>;