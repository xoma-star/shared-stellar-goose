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
export interface SystemData<T extends StarType> {
  /** название системы */
  readonly name: string;
  /** тип системы */
  readonly starType: T;
  /** класс светимости (для звезд) */
  readonly luminosityClass?: T extends StarType.STAR ? StarLuminosityClass : never;
  /** спектральный класс (для звезд) */
  readonly spectralClass?: T extends StarType.STAR ? StarSpectralClass : never;
  /** тип черной дыры */
  readonly blackHoleType?: T extends StarType.BLACK_HOLE ? BlackHoleType : never;
  /** планеты */
  readonly planets: PlanetData[];
  /** долгота */
  readonly x: number;
  /** широта */
  readonly y: number;
  /** сид системы */
  readonly id: string;
}

/**
 * Данные о планете
 */
export interface PlanetData {
  /** название планеты */
  readonly name: string;
  /** ресурсы и их распространенность */
  readonly resources: Partial<Record<RawResource, number>>;
  /** средняя температура на планете */
  readonly temperature: number;
  /** средний уровень радиации (от 1 до 10) */
  readonly radiationLevel: number;
  /** сила тяжести, g (на земле 1 g) */
  readonly gravity: number;
  /** атмосферное давление (% от земного) */
  readonly pressure: number;
  /** средний уровень токсинов (от 0 до 10) */
  readonly toxicityLevel: number;
  /** продолжительность суток (часов) */
  readonly dayLength: number;
  /** кол-во дней в году */
  readonly yearLength: number;
  /** уровень тектонической активности (от 0 до 10) */
  readonly tectonicActivity: number;
  /** магнитное поле (µT) */
  readonly magneticField: number;
  /** радиус планеты (доля от базового размера) */
  readonly size: number;
  /** время года */
  readonly season: TimeOfYear;
  /** орбитальная позиция */
  readonly orbitalPosition: {readonly x: number; readonly y: number};
}