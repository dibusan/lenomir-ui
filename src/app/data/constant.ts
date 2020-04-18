import {WebsitesSummary} from '../interfaces/WebsiteSummary';
import {UrlSummary} from '../interfaces/UrlSummary';
import {JobSummary} from '../interfaces/JobSummary';
import {JobRecord, UrlRecord} from '../interfaces/JobRecord';


export let WEBSITES_SUMMARY: WebsitesSummary = {
  total: 25
};

export let URL_SUMMARY: UrlSummary = {
  marketable: 3,
  clean: 19,
  analyzing: 76
};

export let jobSummary1: JobSummary = {
  id: 1,
  success: 12,
  failure: 356,
  todo: 10,
  website: 'example.com',
  started_at: new Date(2020, 0o1, 0o1, 17, 0o0, 0o1),
  finished_at: new Date(2020, 0o1, 0o1, 17, 0o3, 0o4),
};
export let jobSummary2: JobSummary = {
  id: 2,
  success: 300,
  failure: 22,
  todo: 20,
  website: 'example.com',
  started_at: new Date(2020, 0o1, 0o1, 17, 0o0, 0o1),
  finished_at: new Date(2020, 0o1, 0o1, 17, 0o3, 0o4),
};
export let jobSummary3: JobSummary = {
  id: 3,
  success: 324,
  failure: 224,
  todo: 30,
  website: 'example.com',
  started_at: new Date(2020, 0o1, 0o1, 17, 0o0, 0o1),
  finished_at: new Date(2020, 0o1, 0o1, 17, 0o3, 0o4),
};
export let LAST_JOB_SUMMARY: JobSummary = {
  id: 4,
  success: 3,
  failure: 2,
  todo: 23,
  website: 'example.com',
  started_at: new Date(2020, 0o1, 0o1, 17, 0o0, 0o1),
  finished_at: new Date(2020, 0o1, 0o1, 17, 0o3, 0o4),
};

export let urlRecord1: UrlRecord = {
  url: 'https://www.cde.ca.gov/sdprofile/details.aspx?cds=39103970000000',
  extractedData: [
    {
      County: 'San Joaquin',
      District: 'San Joaquin County Office of Education  List of active district\'s schools',
      'CDS Code': '39 10397 0000000',
      'District Address': '2922 Transworld Dr.  Stockton, CA 95206-3974   Google Map  Link opens new browser tab',
      'Mailing Address': 'PO Box 213030  Stockton, CA 95213-9030',
      'Phone Number': '(209) 468-4800',
      'Fax Number': '(209) 468-4819',
      Email: 'Information Not Available',
      'Web Address': 'www.sjcoe.org  Link opens new browser tab',
      Superintendent: 'Mr. James Mousalimas  County Superintendent of Schools (209) 468-9107 jstanton@sjcoe.net',
      'Chief Business Official': 'Scott Anderson Deputy Superintendent (209) 468-4807 scanderson@sjcoe.net',
      Status: 'Active',
      'District Type': 'County Office of Education (COE)',
      'Low Grade': 'P',
      'High Grade': '12',
      'NCES/Federal District ID': '0691031',
      'Statistical Info': 'Link to District Profile',
      'CDS Coordinator(Contact for Data Updates)': 'Lucy Greaney(209) 468-4802 Update Data Request'
    },
    {
      County: 'San Joaquin',
      District: 'San Joaquin County Office of Education  List of active district\'s schools',
      'CDS Code': '39 10397 0000000',
      'District Address': '2922 Transworld Dr.  Stockton, CA 95206-3974   Google Map  Link opens new browser tab',
      'Mailing Address': 'PO Box 213030  Stockton, CA 95213-9030',
      'Phone Number': '(209) 468-4800',
      'Fax Number': '(209) 468-4819',
      Email: 'Information Not Available',
      'Web Address': 'www.sjcoe.org  Link opens new browser tab',
      Superintendent: 'Mr. James Mousalimas  County Superintendent of Schools (209) 468-9107 jstanton@sjcoe.net',
      'Chief Business Official': 'Scott Anderson Deputy Superintendent (209) 468-4807 scanderson@sjcoe.net',
      Status: 'Active',
      'District Type': 'County Office of Education (COE)',
      'Low Grade': 'P',
      'High Grade': '12',
      'NCES/Federal District ID': '0691031',
      'Statistical Info': 'Link to District Profile',
      'CDS Coordinator(Contact for Data Updates)': 'Lucy Greaney(209) 468-4802 Update Data Request'
    }
  ]
};

export let jobFullRecord1: JobRecord = {
  summary: jobSummary1,
  urls: [
    urlRecord1,
    urlRecord1
  ]
};
export let jobFullRecord2: JobRecord = {
  summary: jobSummary2,
  urls: [
    urlRecord1,
    urlRecord1
  ]
};
export let jobFullRecord3: JobRecord = {
  summary: jobSummary3,
  urls: [
    urlRecord1,
    urlRecord1
  ]
};

