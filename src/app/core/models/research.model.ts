import { CovidInfo } from './covid-info.model';

export class Research {
  id: string;
  lastRefreshedOn: Date;
  publicTitle: string;
  scientificTitle?: string;
  acronym?: string;
  primarySponsor?: string;
  dateRegistration?: Date;
  webAddress: string;
  otherRecords: boolean;
  inclusionAgeMin?: number;
  inclusionAgeMinType:
    | 'years'
    | 'months'
    | 'weeks'
    | 'weeks of pregnacy'
    | 'days'
    | 'hours'
    | 'minutes'
    | 'no limit';
  inclusionAgeMax?: number;
  inclusionAgeMaxType:
    | 'years'
    | 'months'
    | 'weeks'
    | 'weeks of pregnacy'
    | 'days'
    | 'hours'
    | 'minutes'
    | 'no limit';
  inclusionGender?: 'Both' | 'Male' | 'Female';
  dateEnrollement?: Date;
  studyDesign?: string;
  contactFirstname?: string;
  contactLastname?: string;
  contactAddress?: string;
  contactEmail?: string;
  contactTel?: string;
  contactAffiliation?: string;
  inclusionCriteria?: string;
  exclusionCriteria?: string;
  condition?: string;
  intervention?: string;
  primaryOutcome?: string;
  secondaryOutcome?: string;
  resultsDatePosted?: Date;
  resultsDateCompleted?: Date;
  resultsUrlLink?: string;
  retrospectiveFlag: boolean;
  bridgingFlag: boolean;
  bridgedType: boolean;
  results: boolean;
  views?: number;
  recruitmentStatus: {
    value: string;
    id: number;
  };
  phase: {
    value: string;
    id: number;
  };
  sourceRegister: {
    value: string;
    id: number;
  };
  studyType: {
    value: string;
    id: number;
  };
  targetSizes: {
    count: number;
    id: number;
    targetSizeGroup: {
      value: string;
      id: number;
    };
  }[];
  countries: {
    id: number;
    country: {
      value: string;
      id: number;
      covidInfo: CovidInfo;
    };
  }[];

  constructor() {
    this.id = '';
    this.lastRefreshedOn = new Date();
    this.publicTitle = '';
    this.scientificTitle = '';
    this.acronym = '';
    this.primarySponsor = '';
    this.dateRegistration = new Date();
    this.webAddress = '';
    this.otherRecords = false;
    this.inclusionAgeMin = 0;
    this.inclusionAgeMinType = 'no limit';
    this.inclusionAgeMax = 0;
    this.inclusionAgeMaxType = 'no limit';
    this.inclusionGender = 'Both';
    this.dateEnrollement = new Date();
    this.studyDesign = '';
    this.contactFirstname = '';
    this.contactLastname = '';
    this.contactAddress = '';
    this.contactEmail = '';
    this.contactTel = '';
    this.contactAffiliation = '';
    this.inclusionCriteria = '';
    this.exclusionCriteria = '';
    this.condition = '';
    this.intervention = '';
    this.primaryOutcome = '';
    this.secondaryOutcome = '';
    this.resultsDatePosted = new Date();
    this.resultsDateCompleted = new Date();
    this.resultsUrlLink = '';
    this.retrospectiveFlag = false;
    this.bridgingFlag = false;
    this.bridgedType = false;
    this.results = false;
    this.views = 0;
    (this.recruitmentStatus = {
      value: '',
      id: 0,
    }),
      (this.phase = {
        value: '',
        id: 0,
      }),
      (this.sourceRegister = {
        value: '',
        id: 0,
      }),
      (this.studyType = {
        value: '',
        id: 0,
      }),
      (this.targetSizes = []),
      (this.countries = []);
  }
}
