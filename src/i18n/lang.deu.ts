import {LanguageConfig} from './interfaces';

const units = {
  Pack: ['pack', 'packung', 'pck', 'pck.', 'päckchen'],
  Messerspitze: ['messerspitze', 'msp', 'msp.'],
  Gramm: ['gramm', 'g', 'g.'],
  Milligramm: ['milligramm', 'mg', 'mg.'],
  Kilogramm: ['kilogramm', 'kg', 'kg.'],
  Milliliter: ['milliliter', 'ml', 'ml.'],
  Liter: ['liter', 'l', 'l.', 'lt'],
  Teelöffel: ['Teelöffel', 'tl', 'tl.'],
  Esslöffel: ['esslöffel', 'el', 'el.', 'essl', 'essl.'],
  Unze: ['unze', 'oz', 'oz.'],
  Pfund: ['pfund', 'lb', 'lb.', 'lbs', 'lbs.', 'Lb', 'Lbs'],
  Dutzend: ['dutzend'],
  Dose: ['dose', 'dosen', 'dose(n)', 'dose/n'],
  Tasse: ['tasse', 'tassen', 'tasse(n)', 'tasse/n'],
  Prise: ['prise', 'prisen', 'prise(n)', 'prise/n'],
  Stück: ['stück', 'stücke', 'stück(e)', 'stück/e'],
  Scheibe: ['Scheibe', 'Scheibe/n', 'Scheibe(n)'],
  Tropf: ['tropfen', 'tropf', 'tropf(en)', 'tropf/en'],
  Zehe: ['Zehe', 'Zeh'],
  Nelke: ['Nelke'],
  Stange: ['stangen', 'stange', 'stange(n)', 'stange/n'],
  Schuss: ['schuss', 'schusse', 'schuss(e)', 'schuss/e'],
  Flasche: ['flaschen', 'flasche', 'flasche(n)', 'flasche/n'],
} as {[key: string]: string[]};

const pluralUnits = {
  Pack: 'Packung',
  Messerspitze: 'Messerspitzen',
  Gramm: 'Gramm',
  Milligramm: 'Milligramm',
  Kilogramm: 'Kilogramm',
  Milliliter: 'Milliliter',
  Liter: 'Liter',
  Teelöffel: 'Teelöffel',
  Esslöffel: 'Esslöffel',
  Unze: 'Unzen',
  Pfund: 'Pfund',
  Dutzend: 'Dutzend',
  Dose: 'Dosen',
  Tasse: 'Tassen',
  Prise: 'Prisen',
  Stück: 'Stücke',
  Scheibe: 'Schieben',
  Tropf: 'Tropfen',
  Zehe: 'Zehen',
  Nelke: 'Nelken',
  Stange: 'Stagen',
  Schuss: 'Schusse',
  Flasche: 'Flaschen',
} as {[key: string]: string};

const symbolUnits = {
  Pack: 'Pck',
  Messerspitze: 'Msp',
  Gramm: 'g',
  Milligramm: 'mg',
  Kilogramm: 'kg',
  Milliliter: 'ml',
  Liter: 'L',
  Teelöffel: 'TL',
  Esslöffel: 'EL',
  Unze: 'oz',
  Pfund: 'lb',
  Dutzend: '',
  Dose: '',
  Tasse: '',
  Prise: '',
  Stück: '',
  Scheibe: '',
  Tropf: '',
  Zehe: '',
  Nelke: '',
  Stange: '',
  Schuss: '',
  Flasche: '',
} as {[key: string]: string};

const prepositions = ['von'];
const joiners = ['bis'];

const toTaste: string[] = [];

const numbersSmall: {[key: string]: number} = {
  null: 0,
  ein: 1,
  eins: 1,
  eine: 1,
  einen: 1,
  zwei: 2,
  drei: 3,
  vier: 4,
  fünf: 5,
  sechs: 6,
  sieben: 7,
  acht: 8,
  neun: 9,
  zehn: 10,
  elf: 11,
  zwölf: 12,
  dreizehn: 13,
  vierzehn: 14,
  fünfzehn: 15,
  sechszehn: 16,
  siebzehn: 17,
  achtzehn: 18,
  neunzehn: 19,
  zwanzig: 20,
  dreizig: 30,
  vierzif: 40,
  fünfzig: 50,
  sechzig: 60,
  siebzig: 70,
  achtzig: 80,
  neunzig: 90,
};

const numbersMagnitude: {[key: string]: number} = {
  hundert: 100,
  tausend: 1000,
  million: 1000000,
  milliarde: 1000000000,
  billion: 1000000000000,
};

export const LangDeu: LanguageConfig = {
  units,
  pluralUnits,
  symbolUnits,
  prepositions,
  joiners,
  toTaste,
  numbersSmall,
  numbersMagnitude,
};
