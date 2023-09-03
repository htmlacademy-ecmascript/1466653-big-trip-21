import { createElement } from '../render.js';
import { getDateTimeFieldText } from '../helpers/utils.js';
import { OFFER_TYPES, CITIES } from '../mock/const.js';

function createOfferTypeSelectorsTemplate() {
  return OFFER_TYPES.map((offerType) => `
  <div class="event__type-item">
    <input id="event-type-${offerType.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${offerType.toLowerCase()}">
    <label class="event__type-label  event__type-label--${offerType.toLowerCase()}" for="event-type-${offerType.toLowerCase()}-1">${offerType}</label>
  </div>
  `).join('');
}

function createAvailableOffersTemplate(availableOffers, selectedOffers = []) {
  if (availableOffers.length === 0) {
    return '';
  }

  return `
  <section class="event__section  event__section--offers">
  <h3 class="event__section-title  event__section-title--offers">Offers</h3>

  <div class="event__available-offers">
    ${availableOffers.map((offer) => {
    const isOfferSelected = selectedOffers.includes(offer.id);
    const offerTitle = offer.title.toLowerCase().split(' ').join('-');

    return `
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offerTitle}-1" type="checkbox" name="event-offer-${offerTitle}" ${isOfferSelected ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-${offerTitle}-1">
          <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>
    `;
  }).join('')}
    </div>
  </section>
  `;
}

function createDestinationPhotosTemplate(pictures) {
  if (!pictures) {
    return '';
  }

  return `
    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${pictures.map((pic) => `
          <img class="event__photo" src="${pic.src}" alt="${pic.description}">
        `).join('')}
      </div>
    </div>`;
}

function createDestinationTemplate(destination) {
  if (!destination) {
    return '';
  }

  return `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      ${destination.description ? `<p class="event__destination-description">${destination.description}</p>` : ''}

      ${destination.pictures.length > 0 ? createDestinationPhotosTemplate(destination.pictures) : ''}
    </section>`;
}

function createEventEditTemplate(point, destination, availableOffers, selectedOffers) {
  const startDateTimeText = getDateTimeFieldText(point.dateFrom);
  const endDateTimeText = getDateTimeFieldText(point.dateTo);

  return `
  <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${point.type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>

              ${createOfferTypeSelectorsTemplate()}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${point.type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination ? destination.name : ''}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${CITIES.map((city) => `<option value="${city}"></option>`).join('')}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startDateTimeText}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endDateTimeText}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${point.basePrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>

      <section class="event__details">
        ${createAvailableOffersTemplate(availableOffers, selectedOffers)}
        ${createDestinationTemplate(destination)}
      </section>
    </form>
  </li>
  `;
}

export default class EventEditView {
  constructor({ point, destination, availableOffers, selectedOffers = [] }) {
    this.point = point;
    this.destination = destination;
    this.availableOffers = availableOffers;
    this.selectedOffers = selectedOffers;
  }

  getTemplate() {
    return createEventEditTemplate(this.point, this.destination, this.availableOffers, this.selectedOffers);
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
