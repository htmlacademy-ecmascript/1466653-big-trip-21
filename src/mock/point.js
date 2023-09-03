import { getRandomInteger } from '../helpers/utils';

const Price = {
  MIN: 1000,
  MAX: 2000,
};

function createPoint (destinationId, type, offerIds) {
  return {
    id: crypto.randomUUID(),
    basePrice: getRandomInteger(Price.MIN, Price.MAX),
    dateFrom: new Date(),
    dateTo: new Date(2023, 8, getRandomInteger(1, 28)),
    destination: destinationId,
    isFavorite: !!getRandomInteger(0, 1),
    offers: offerIds,
    type: type,
  };
}

export { createPoint };
