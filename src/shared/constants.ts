/** характеристика спектра звезды */
export enum StarSpectralClass {
  /** > 30 000 K */
  O = 'O',
  /** 10 000 - 30 000 K */
  B = 'B',
  /** 7 500 - 10 000 K */
  A = 'A',
  /** 6 000 - 7 500 K */
  F = 'F',
  /** 5 000 - 6 000 K */
  G = 'G',
  /** 3 800 - 5 000 K */
  K = 'K',
  /** 2 500 - 3 800 K */
  M = 'M'
}

/** цвета по спектральному классу */
export const STAR_COLOR_BY_SPECTRAL_CLASS: Record<StarSpectralClass, {color: string, hex: string}> = {
  [StarSpectralClass.O]: {
    color: 'Голубой',
    hex: '#7d9aff'
  },
  [StarSpectralClass.B]: {
    color: 'Бело-голубой',
    hex: '#ccd1ff'
  },
  [StarSpectralClass.A]: {
    color: 'Белый',
    hex: '#ffffff'
  },
  [StarSpectralClass.F]: {
    color: 'Желто-белый',
    hex: '#fce9a8'
  },
  [StarSpectralClass.G]: {
    color: 'Желтый',
    hex: '#ffe264'
  },
  [StarSpectralClass.K]: {
    color: 'Оранжевый',
    hex: '#ffc164'
  },
  [StarSpectralClass.M]: {
    color: 'Красный',
    hex: '#ff8767'
  }
};

/** класс светимости звезды */
export enum StarLuminosityClass {
  /** сверхгигант */
  I = 'I',
  /** яркий гигант */
  II = 'II',
  /** гигант */
  III = 'III',
  /** субгигант */
  IV = 'IV',
  /** карлик */
  V = 'V',
  /** субкарлик */
  VI = 'VI',
  /** белый карлик */
  VII = 'VII'
}

/**
 * Название категории спектральной классификации
 */
export const STAR_LUMINOSITY_CLASS_NAME: Record<StarLuminosityClass, string> = {
  [StarLuminosityClass.I]: 'Сверхгигант',
  [StarLuminosityClass.II]: 'Яркий гигант',
  [StarLuminosityClass.III]: 'Гигант',
  [StarLuminosityClass.IV]: 'Субгигант',
  [StarLuminosityClass.V]: 'Карлик',
  [StarLuminosityClass.VI]: 'Субкарлик',
  [StarLuminosityClass.VII]: 'Белый карлик'
};

/**
 * тип звездной системы (для упрощения сюда включены и
 * черные дыры, и червоточины, и нейтронные звезды)
 */
export enum StarType {
  /** звезда */
  STAR = 'star',
  /** черная дыра */
  BLACK_HOLE = 'black_hole',
  /** нейтронная звезда */
  NEUTRON_STAR = 'neutron_star',
  /** червоточина */
  WORMHOLE = 'wormhole'
}

/** вероятность встретить звездную систему данного типа */
export const STAR_TYPE_PROBABILITY: Record<StarType, number> = {
  [StarType.STAR]: 0.90,
  [StarType.BLACK_HOLE]: 0.05,
  [StarType.NEUTRON_STAR]: 0.04,
  [StarType.WORMHOLE]: 0.01
};

/** название типа звездной системы */
export const StarTypeName: Record<StarType, string> = {
  [StarType.STAR]: 'Звезда',
  [StarType.BLACK_HOLE]: 'Черная дыра',
  [StarType.NEUTRON_STAR]: 'Нейтронная звезда',
  [StarType.WORMHOLE]: 'Червоточина'
};

/** тип черной дыры */
export enum BlackHoleType {
  /** звездная */
  STELLAR = 'stellar',
  /** сверхмассивная */
  SUPERMASSIVE = 'supermassive',
  /** промежуточная */
  INTERMEDIATE = 'intermediate',
  /** микро */
  MICRO = 'micro'
}

/** название типа черной дыры */
export const BLACK_HOLE_TYPE_NAME: Record<BlackHoleType, string> = {
  [BlackHoleType.STELLAR]: 'Звездная',
  [BlackHoleType.SUPERMASSIVE]: 'Сверхмассивная',
  [BlackHoleType.INTERMEDIATE]: 'Промежуточная',
  [BlackHoleType.MICRO]: 'Микро'
};

/** распространенность типов черных дыр */
export const BLACK_HOLE_TYPE_FREQUENCY: Record<BlackHoleType, number> = {
  [BlackHoleType.STELLAR]: 0.3,
  [BlackHoleType.SUPERMASSIVE]: 0.4,
  [BlackHoleType.INTERMEDIATE]: 0.2,
  [BlackHoleType.MICRO]: 0.1
};

/**
 * распределение звезд по спектральным классам.
 * здесь указана частота встречаемости звезды с данным спектральным классом,
 * а также распределение звезд по классам светимости
 * если не указано распределение по классам светимости, то такие звезды не встречаются
 * либо встречаются ничтожно редко
 */
export const STARS_DISTRIBUTION: Record<StarSpectralClass, number> = {
  [StarSpectralClass.O]: 0.1,
  [StarSpectralClass.B]: 0.1,
  [StarSpectralClass.A]: 0.1,
  [StarSpectralClass.F]: 0.1,
  [StarSpectralClass.G]: 0.15,
  [StarSpectralClass.K]: 0.2,
  [StarSpectralClass.M]: 0.25
};

/** распределение светимостей по спектральному классу */
export const STAR_LUMINOSITY_BY_SPECTRAL_CLASS: Record<
  StarSpectralClass, Partial<Record<StarLuminosityClass, number>>
> = {
  [StarSpectralClass.O]: {
    [StarLuminosityClass.III]: 0.34,
    [StarLuminosityClass.V]: 0.66
  },
  [StarSpectralClass.B]: {
    [StarLuminosityClass.I]: 0.007,
    [StarLuminosityClass.II]: 0.076,
    [StarLuminosityClass.III]: 0.23,
    [StarLuminosityClass.V]: 0.687
  },
  [StarSpectralClass.A]: {
    [StarLuminosityClass.III]: 0.16,
    [StarLuminosityClass.IV]: 0.16,
    [StarLuminosityClass.V]: 0.68
  },
  [StarSpectralClass.F]: {
    [StarLuminosityClass.II]: 0.07,
    [StarLuminosityClass.III]: 0.17,
    [StarLuminosityClass.IV]: 0.27,
    [StarLuminosityClass.V]: 0.49
  },
  [StarSpectralClass.G]: {
    [StarLuminosityClass.II]: 0.013,
    [StarLuminosityClass.III]: 0.131,
    [StarLuminosityClass.IV]: 0.197,
    [StarLuminosityClass.V]: 0.659
  },
  [StarSpectralClass.K]: {
    [StarLuminosityClass.II]: 0.008,
    [StarLuminosityClass.III]: 0.082,
    [StarLuminosityClass.IV]: 0.165,
    [StarLuminosityClass.V]: 0.745
  },
  [StarSpectralClass.M]: {
    [StarLuminosityClass.III]: 0.004,
    [StarLuminosityClass.IV]: 0.001,
    [StarLuminosityClass.V]: 0.995
  }
};

// TODO хрень какая то. подумать
/** тип поверхности */
export enum SurfaceType {
  /** скала */
  ROCK = 'rock',
  /** лед */
  ICE = 'ice',
  /** газ (воздух) */
  GAS = 'gas',
  /** вода */
  WATER = 'water',
  /** песок */
  SAND = 'sand',
  /** лава */
  LAVA = 'lava',
  GRASS = 'grass',
  SNOW = 'snow'
}

/** TODO хрень какая-то. подумать */
export enum BiomeType {
  LUSH = 'lush',
  BARREN = 'barren',
  TOXIC = 'toxic',
  SCORCHED = 'scorched',
  FROZEN = 'frozen',
  RADIOACTIVE = 'radioactive',
  DEAD = 'dead',
  VOLCANIC = 'volcanic',
  OCEAN = 'ocean',
  GAS = 'gas'
}

/** ресурсы, которые можно добыть на планетах или в звездных системах */
export enum RawResource {
  ALUMINIUM = 'aluminium',
  CARBON = 'carbon',
  COPPER = 'copper',
  GOLD = 'gold',
  IRON = 'iron',
  SILICON = 'silicon',
  TITANIUM = 'titanium',
  URANIUM = 'uranium',
  WATER = 'water',
  HYDROGEN = 'hydrogen',
  OXYGEN = 'oxygen',
  NITROGEN = 'nitrogen',
  HELIUM = 'helium',
  METHANE = 'methane',
  AMMONIA = 'ammonia',
  SULPHUR = 'sulphur',
  PHOSPHORUS = 'phosphorus',
  NICKEL = 'nickel',
  SILVER = 'silver',
  LITHIUM = 'lithium',
  BERYLLIUM = 'beryllium',
  SODIUM = 'sodium',
  MAGNESIUM = 'magnesium',
  POTASSIUM = 'potassium',
  CALCIUM = 'calcium',
  RUBIDIUM = 'rubidium',
  STRONTIUM = 'strontium',
  CAESIUM = 'caesium',
  RADIUM = 'radium',
  FRANCIUM = 'francium',
  SCANDIUM = 'scandium',
  YTTRIUM = 'yttrium',
  LUTETIUM = 'lutetium',
  LAWRENCIUM = 'lawrencium',
  ZIRCONIUM = 'zirconium',
  VANADIUM = 'vanadium',
  NIOBIUM = 'niobium',
  CHROMIUM = 'chromium',
  MANGANESE = 'manganese',
  COBALT = 'cobalt',
  ZINC = 'zinc',
  PALLADIUM = 'palladium',
  IRIDIUM = 'iridium',
  CADMIUM = 'cadmium',
  MERCURY = 'mercury',
  OSMIUM = 'osmium',
  BORON = 'boron',
  FLUORINE = 'fluorine',
  NEON = 'neon',
  CHLORINE = 'chlorine',
  ARGON = 'argon',
  LEAD = 'lead',
  BISMUTH = 'bismuth',
  KRYPTON = 'krypton',
  SELENIUM = 'selenium',
  TIN = 'tin',
  INDIUM = 'indium',
  IODINE = 'iodine',
  XENON = 'xenon',
  THORIUM = 'thorium'
}

/** названия добываемых ресурсов */
export const RAW_RESOURCE_NAME: Record<RawResource, string> = {
  [RawResource.ALUMINIUM]: 'Алюминий',
  [RawResource.CARBON]: 'Углерод',
  [RawResource.COPPER]: 'Медь',
  [RawResource.GOLD]: 'Золото',
  [RawResource.IRON]: 'Железо',
  [RawResource.SILICON]: 'Кремний',
  [RawResource.TITANIUM]: 'Титан',
  [RawResource.URANIUM]: 'Уран',
  [RawResource.WATER]: 'Вода',
  [RawResource.HYDROGEN]: 'Водород',
  [RawResource.OXYGEN]: 'Кислород',
  [RawResource.NITROGEN]: 'Азот',
  [RawResource.HELIUM]: 'Гелий',
  [RawResource.METHANE]: 'Метан',
  [RawResource.AMMONIA]: 'Аммиак',
  [RawResource.SULPHUR]: 'Сера',
  [RawResource.PHOSPHORUS]: 'Фосфор',
  [RawResource.NICKEL]: 'Никель',
  [RawResource.SILVER]: 'Серебро',
  [RawResource.LITHIUM]: 'Литий',
  [RawResource.BERYLLIUM]: 'Бериллий',
  [RawResource.SODIUM]: 'Натрий',
  [RawResource.MAGNESIUM]: 'Магний',
  [RawResource.POTASSIUM]: 'Калий',
  [RawResource.CALCIUM]: 'Кальций',
  [RawResource.RUBIDIUM]: 'Рубидий',
  [RawResource.STRONTIUM]: 'Стронций',
  [RawResource.CAESIUM]: 'Цезий',
  [RawResource.RADIUM]: 'Радий',
  [RawResource.FRANCIUM]: 'Франций',
  [RawResource.SCANDIUM]: 'Скандий',
  [RawResource.YTTRIUM]: 'Иттрий',
  [RawResource.LUTETIUM]: 'Лютеций',
  [RawResource.LAWRENCIUM]: 'Лоуренсий',
  [RawResource.ZIRCONIUM]: 'Цирконий',
  [RawResource.VANADIUM]: 'Ванадий',
  [RawResource.NIOBIUM]: 'Ниобий',
  [RawResource.CHROMIUM]: 'Хром',
  [RawResource.MANGANESE]: 'Марганец',
  [RawResource.COBALT]: 'Кобальт',
  [RawResource.ZINC]: 'Цинк',
  [RawResource.PALLADIUM]: 'Палладий',
  [RawResource.IRIDIUM]: 'Иридий',
  [RawResource.CADMIUM]: 'Кадмий',
  [RawResource.MERCURY]: 'Ртуть',
  [RawResource.OSMIUM]: 'Осмий',
  [RawResource.BORON]: 'Бор',
  [RawResource.FLUORINE]: 'Фтор',
  [RawResource.NEON]: 'Неон',
  [RawResource.CHLORINE]: 'Хлор',
  [RawResource.ARGON]: 'Аргон',
  [RawResource.LEAD]: 'Свинец',
  [RawResource.BISMUTH]: 'Бисмут',
  [RawResource.KRYPTON]: 'Криптон',
  [RawResource.SELENIUM]: 'Селен',
  [RawResource.TIN]: 'Олово',
  [RawResource.INDIUM]: 'Индий',
  [RawResource.IODINE]: 'Йод',
  [RawResource.XENON]: 'Ксенон',
  [RawResource.THORIUM]: 'Торий'
};

/** базовая распространенность добываемых ресурсов */
export const RAW_RESOURCE_RARITY: Record<RawResource, number> = {
  [RawResource.ALUMINIUM]: 1,
  [RawResource.CARBON]: 1,
  [RawResource.AMMONIA]: 0.7,
  [RawResource.COPPER]: 0.5,
  [RawResource.GOLD]: 0,
  [RawResource.HELIUM]: 0.9,
  [RawResource.HYDROGEN]: 1,
  [RawResource.IRON]: 0.8,
  [RawResource.METHANE]: 0.4,
  [RawResource.NICKEL]: 0,
  [RawResource.NITROGEN]: 0.8,
  [RawResource.OXYGEN]: 0.7,
  [RawResource.PHOSPHORUS]: 0,
  [RawResource.SILICON]: 1,
  [RawResource.SILVER]: 0.5,
  [RawResource.SULPHUR]: 0.5,
  [RawResource.TITANIUM]: 0,
  [RawResource.URANIUM]: 0.4,
  [RawResource.WATER]: 0.2,
  [RawResource.LITHIUM]: 0,
  [RawResource.BERYLLIUM]: 0,
  [RawResource.SODIUM]: 0,
  [RawResource.MAGNESIUM]: 0,
  [RawResource.POTASSIUM]: 0,
  [RawResource.CALCIUM]: 0,
  [RawResource.RUBIDIUM]: 0,
  [RawResource.STRONTIUM]: 0,
  [RawResource.CAESIUM]: 0,
  [RawResource.RADIUM]: 0.6,
  [RawResource.FRANCIUM]: 0,
  [RawResource.SCANDIUM]: 0,
  [RawResource.YTTRIUM]: 0,
  [RawResource.LUTETIUM]: 0,
  [RawResource.LAWRENCIUM]: 0,
  [RawResource.ZIRCONIUM]: 0,
  [RawResource.VANADIUM]: 0,
  [RawResource.NIOBIUM]: 0,
  [RawResource.CHROMIUM]: 0,
  [RawResource.MANGANESE]: 0,
  [RawResource.COBALT]: 0.6,
  [RawResource.ZINC]: 0.6,
  [RawResource.PALLADIUM]: 0,
  [RawResource.IRIDIUM]: 0,
  [RawResource.CADMIUM]: 0,
  [RawResource.MERCURY]: 0,
  [RawResource.OSMIUM]: 0,
  [RawResource.BORON]: 0,
  [RawResource.FLUORINE]: 0,
  [RawResource.NEON]: 0,
  [RawResource.CHLORINE]: 0.6,
  [RawResource.ARGON]: 0,
  [RawResource.LEAD]: 0.6,
  [RawResource.BISMUTH]: 0,
  [RawResource.KRYPTON]: 0,
  [RawResource.SELENIUM]: 0,
  [RawResource.TIN]: 0.6,
  [RawResource.INDIUM]: 0,
  [RawResource.IODINE]: 0,
  [RawResource.XENON]: 0,
  [RawResource.THORIUM]: 0
};

/** создаваемые ресурсы */
export enum ComponentResource {
  GLASS = 'glass',
  METAL_PLATE = 'metal-plate',
  REINFORCED_METAL_PLATE = 'reinforced-metal-plate',
  ALLOY = 'alloy',
  CIRCUIT_BOARD = 'circuit-board',
  WIRING = 'wiring',
  RUBBER = 'rubber',
  CONTAINER = 'container'
}

/** названия создаваемых ресурсов */
export const COMPONENT_RESOURCE_NAME: Record<ComponentResource, string> = {
  [ComponentResource.GLASS]: 'Стекло',
  [ComponentResource.METAL_PLATE]: 'Металлическая пластина',
  [ComponentResource.REINFORCED_METAL_PLATE]: 'Усиленная металлическая пластина',
  [ComponentResource.ALLOY]: 'Сплав',
  [ComponentResource.CIRCUIT_BOARD]: 'Микросхема',
  [ComponentResource.WIRING]: 'Проводка',
  [ComponentResource.RUBBER]: 'Резина',
  [ComponentResource.CONTAINER]: 'Универсальный контейнер'
};

/** модули колоний */
export enum BuildingResource {
  DRILLING_RIG = 'drilling-rig',
  BOREHOLE = 'borehole',
  REFINERY = 'refinery',
  STORAGE = 'storage',
  FACTORY = 'factory',
  POWER_PLANT = 'power-plant',
  COMMUNICATIONS = 'communications',
  SHIPYARD = 'shipyard'
}

/** названия модулей колонии */
export const BuildingResourceName: Record<BuildingResource, string> = {
  [BuildingResource.DRILLING_RIG]: 'Буровая установка',
  [BuildingResource.BOREHOLE]: 'Скважина',
  [BuildingResource.REFINERY]: 'Перегонный завод',
  [BuildingResource.COMMUNICATIONS]: '',
  [BuildingResource.FACTORY]: '',
  [BuildingResource.STORAGE]: '',
  [BuildingResource.SHIPYARD]: '',
  [BuildingResource.POWER_PLANT]: ''
};

/** создаваемые предметы */
type CraftableResource = RawResource | ComponentResource;
type CraftRequirements = Partial<Record<CraftableResource, Partial<Record<CraftableResource, number>>>>;

/** затраты на создание одной штуки какого-то предмета */
export const CRAFT_REQUIREMENTS: CraftRequirements = {
  [ComponentResource.GLASS]: {
    [RawResource.SILICON]: 1,
    [RawResource.OXYGEN]: 1
  },
  [ComponentResource.METAL_PLATE]: {
    [RawResource.IRON]: 1
  },
  [ComponentResource.ALLOY]: {
    [RawResource.IRON]: 1,
    [RawResource.CARBON]: 1,
    [RawResource.TITANIUM]: 1
  },
  [ComponentResource.REINFORCED_METAL_PLATE]: {
    [ComponentResource.METAL_PLATE]: 1,
    [ComponentResource.ALLOY]: 1
  },
  [ComponentResource.CIRCUIT_BOARD]: {
    [RawResource.COPPER]: 1,
    [RawResource.SILICON]: 1
  },
  [ComponentResource.WIRING]: {
    [RawResource.COPPER]: 1,
    [ComponentResource.RUBBER]: 1
  },
  [ComponentResource.RUBBER]: {
    [RawResource.CARBON]: 1,
    [RawResource.WATER]: 1
  },
  [ComponentResource.CONTAINER]: {
    [ComponentResource.METAL_PLATE]: 1,
    [ComponentResource.GLASS]: 1,
    [RawResource.ALUMINIUM]: 1
  }
};

/** базовая вероятность возникновения звездной системы */
export const BASE_SYSTEM_APPEAR_PROBABILITY = 0.05;

/** времена года */
export enum TimeOfYear {
  WINTER = 'winter',
  SPRING = 'spring',
  SUMMER = 'summer',
  AUTUMN = 'autumn'
}

/** названия времени года */
export const TIME_OF_YEAR_NAME: Record<TimeOfYear, string> = {
  [TimeOfYear.WINTER]: 'Зима',
  [TimeOfYear.SPRING]: 'Весна',
  [TimeOfYear.SUMMER]: 'Лето',
  [TimeOfYear.AUTUMN]: 'Осень'
};