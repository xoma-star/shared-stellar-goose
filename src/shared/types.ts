import {
  BlackHoleType, RawResource,
  StarLuminosityClass,
  StarSpectralClass,
  StarType,
  TimeOfYear
} from './constants';

/**
 * Данные о звездной системе (в т.ч., где центральным телом является черная дыра, нейтронная звезда и т.д.)
 */
export interface SystemData<T extends StarType = StarType.STAR> {
  /** название системы */
  name: string;
  /** тип системы */
  starType: T;
  /** класс светимости (для звезд) */
  luminosityClass?: T extends StarType.STAR ? StarLuminosityClass : never;
  /** спектральный класс (для звезд) */
  spectralClass?: T extends StarType.STAR ? StarSpectralClass : never;
  /** тип черной дыры */
  blackHoleType?: T extends StarType.BLACK_HOLE ? BlackHoleType : never;
  /** планеты */
  planets: PlanetData[];
}

/**
 * Данные о планете
 */
export interface PlanetData {
  /** название планеты */
  name: string;
  /** ресурсы и их распространенность */
  resources: Partial<Record<RawResource, number>>;
  /** средняя температура на планете */
  temperature: number;
  /** средний уровень радиации (от 1 до 10) */
  radiationLevel: number;
  /** сила тяжести, g (на земле 1 g) */
  gravity: number;
  /** атмосферное давление (% от земного) */
  pressure: number;
  /** средний уровень токсинов (от 0 до 10) */
  toxicityLevel: number;
  /** продолжительность суток (часов) */
  dayLength: number;
  /** кол-во дней в году */
  yearLength: number;
  /** уровень тектонической активности (от 0 до 10) */
  tectonicActivity: number;
  /** магнитное поле (µT) */
  magneticField: number;
  /** радиус планеты (доля от базового размера) */
  size: number;
  /** время года */
  season: TimeOfYear;
  /** орбитальная позиция */
  orbitalPosition: {x: number; y: number};
}