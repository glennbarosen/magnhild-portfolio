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
}

export const experience: Experience[] = [
  {
    title: 'Kommunikasjonsrådgiver og innholdsprodusent',
    company: 'Småkraft AS',
    type: 'Deltid',
    period: 'nov. 2023 - Nå',
  },
  {
    title: 'Praktikant',
    company: 'Miljøstiftelsen ZERO',
    period: 'okt. 2024 - des. 2024',
  },
  {
    title: 'Vitenskapelig assistent',
    company: 'Kristiania',
    period: 'nov. 2023 - mar. 2024',
    description: 'Vitenskapelig assistent på ulike forskningsprosjekt ved institutt for kommunikasjon.',
  },
  {
    title: 'Idrettspedagog',
    company: 'Myrvoll Idrettsbarnehage',
    type: 'Heltid',
    period: 'aug. 2021 - des. 2022',
  },
  {
    title: 'Miljøarbeider',
    company: 'Oslo kommune',
    type: 'Deltid',
    period: 'apr. 2018 - nov. 2020',
  },
];

export const education: Education[] = [
  {
    institution: 'Kristiania',
    degree: 'Master\'s degree, Strategisk kommunikasjon',
    period: 'aug. 2023 - jun. 2025',
  },
  {
    institution: 'OsloMet – storbyuniversitetet',
    degree: 'Design og kommunikasjon i digitale medier',
    period: 'aug. 2022 - jun. 2023',
  },
];
