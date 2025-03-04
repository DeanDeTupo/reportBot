const DICTIONARY = {
  fotographer: 'Фотограф',
  kassir: 'Кассир',
  R1: 'Р1',
  R2: 'Р2',
  R3: 'Р3',
  R4: 'Р4',
  ZUZU: 'ЗуЗу',
  N3: 'Н3',
  N5: 'Н5',
  MKR: 'МКР',
  MKN: 'МКН',
  MK: 'МК',
  CAFE: 'Кафе',
  FREUD: 'Фрейд',
  VELICAN: 'Великан',
  POBEG: 'Побег',
  KOSMOS: 'Космос',
  ILLUSIONS: 'Иллюзии',
  STRAH: 'Страх',
  STEKLO: 'Стекло',
  DVD: 'ДВД',
  MOVIE: 'Муви',
  BMF: 'БМФ',
};

const REPORT_LIST = [
  {
    profession: 'fotographer',
    location_order: [
      'VELICAN',
      'POBEG',
      'ILLUSIONS',
      'STRAH',
      'STEKLO',
      'KOSMOS',
      'DVD',
      'MOVIE',
      'BMF',
    ],
  },
  {
    profession: 'kassir',
    location_order: [
      'R1',
      'R2',
      'R3',
      'N3',
      'N5',
      'MKN',
      'MKR',
      'ZUZU',
      'FREUD',
    ],
  },
];

module.exports = { DICT: DICTIONARY, REPORT_ORDER_LIST: REPORT_LIST };
