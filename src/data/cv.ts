export interface Experience {
  title: string;
  company: string;
  type?: string;
  period: string;
  description?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface Volunteer {
  organization: string;
  role: string;
  period: string;
}

export const experience: Experience[] = [
  {
    title: 'Kommunikasjonsrådgiver og innholdsprodusent',
    company: 'Småkraft',
    type: 'Deltid',
    period: 'nov. 2023 - Nå',
    description: 'Tekstproduksjon, historiefortelling og innholdsproduksjon, inkludert oppdatering av nettside med WordPress og utarbeidelse av årlig bærekraftsrapport.',
  },
  {
    title: 'Kommunikasjonsmedarbeider praktikant',
    company: 'Miljøstiftelsen ZERO',
    period: 'okt. 2024 - des. 2024',
    description: 'Deltok i kommunikasjonsteamets daglige arbeidsoppgaver, med innholdsproduksjon til nettside, LinkedIn og Instagram.',
  },
  {
    title: 'Vitenskapelig assistent',
    company: 'Kristiania',
    type: 'Prosjektbasert',
    period: 'okt. 2023 - apr. 2024',
    description: 'Arbeidet som vitenskapelig assistent på ulike forskningsprosjekter ved Institutt for kommunikasjon, inkludert transkribering av dybdeintervju og koding av kvantitative data.',
  },
  {
    title: 'Idrettspedagog',
    company: 'Læringsverkstedet Myrvoll idrettsbarnehage',
    type: 'Heltid',
    period: 'aug. 2021 - jan. 2023',
    description: 'Planlegging og utføring av idrettspedagogiske planer, teamarbeid og pedagogisk kommunikasjon.',
  },
  {
    title: 'Administrasjonsmedarbeider praktikant',
    company: 'Norges Volleyballforbund',
    period: 'okt. 2018',
    description: 'Deltok i administrasjonens daglige arbeid, spesielt innen kommunikasjon og markedsføring.',
  },
];

export const education: Education[] = [
  {
    institution: 'Kristiania',
    degree: 'Master i strategisk kommunikasjon',
    period: '2023 - d.d.',
  },
  {
    institution: 'OsloMet',
    degree: 'Design og kommunikasjon i digitale medier',
    period: '2022 - 2023',
    details: 'Deltid',
  },
  {
    institution: 'Norges idrettshøgskole',
    degree: 'Praktisk-pedagogisk utdanning (PPU)',
    period: '2021 - 2022',
  },
  {
    institution: 'Norges idrettshøgskole',
    degree: 'Bachelor i idrettsvitenskap',
    period: '2017 - 2020',
    details: 'Fordypning i Sport Management. Utveksling ved University of Queensland.',
  },
];

export const volunteer: Volunteer[] = [
  {
    organization: 'DNT Oslo og Omegn',
    role: 'Infoteam',
    period: '2024',
  },
  {
    organization: 'Kommunikasjonsforeningen Student Oslo',
    role: 'Styremedlem',
    period: '2023 - 2024',
  },
  {
    organization: 'Kosmorama filmfestival',
    role: 'Medieprodusent',
    period: '2013',
  },
];
