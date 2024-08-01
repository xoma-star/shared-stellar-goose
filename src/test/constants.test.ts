import {
  STAR_TYPE_PROBABILITY,
  BLACK_HOLE_TYPE_FREQUENCY,
  STARS_DISTRIBUTION,
  STAR_LUMINOSITY_BY_SPECTRAL_CLASS
} from '../shared/constants';

type ProbDictionary = Record<string, number>;

function getValuesSum(payload: ProbDictionary): number {
  return Object.values(payload).reduce((a, b) => a + b, 0);
}

function getValuesDiffBetweenOne(payload: ProbDictionary): number {
  const sum = getValuesSum(payload);
  return Math.abs(1 - sum);
}

function expectProbOne(payload: ProbDictionary) {
  return expect(getValuesDiffBetweenOne(payload)).toBeLessThan(1e-9);
}

test('STAR_TYPE_PROBABILITY', () => {
  expectProbOne(STAR_TYPE_PROBABILITY);
});

test('BLACK_HOLE_TYPE_FREQUENCY', () => {
  expectProbOne(BLACK_HOLE_TYPE_FREQUENCY);
});

test('STARS_DISTRIBUTION', () => {
  expectProbOne(STARS_DISTRIBUTION);
});

test('STAR_LUMINOSITY_BY_SPECTRAL_CLASS', () => {
  Object.values(STAR_LUMINOSITY_BY_SPECTRAL_CLASS)
    .forEach(expectProbOne);
});