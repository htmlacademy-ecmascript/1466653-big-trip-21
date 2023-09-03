export default class OffersModel {
  constructor (service) {
    this.offers = service.getOffers();
  }

  getOffers() {
    return this.offers;
  }

  getByType(type) {
    return this.offers.find((offer) => offer.type === type);
  }

  getByTypeAndIds(offerType, offerIds) {
    let filteredOffers = [];

    filteredOffers = this.getByType(offerType).offers.filter((offer) => offerIds.includes(offer.id));

    return filteredOffers;
  }
}
