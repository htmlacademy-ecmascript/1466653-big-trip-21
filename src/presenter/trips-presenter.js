import SortFormView from '../view/sort-form-view.js';
import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
import EventEditView from '../view/event-edit-view.js';
import { render } from '../render.js';

export default class TripsPresenter {
  eventsListComponent = new EventsListView();

  constructor({ container, pointsModel, destinationsModel, offersModel }) {
    this.mainContainer = container;
    this.pointsModel = pointsModel;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];

    render(new SortFormView(), this.mainContainer);
    render(this.eventsListComponent, this.mainContainer);
    render(
      new EventEditView({
        point: this.points[0],
        destination: this.destinationsModel.getById(this.points[0].destination),
        offers: this.offersModel.getByType(this.points[0].type),
      }),
      this.eventsListComponent.getElement());

    for (let i = 1; i < this.points.length; i++) {
      const offersOfPoint = [];
      const offersOfType = this.offersModel.getByType(this.points[i].type);

      if (offersOfType.offers) {
        offersOfType.offers.forEach((offer) => {
          if (this.points[i].offers.includes(offer.id)) {
            offersOfPoint.push(offer);
          }
        });
      }

      render(
        new EventView({
          point: this.points[i],
          destination: this.destinationsModel.getById(this.points[i].destination),
          offers: offersOfPoint,
        }),
        this.eventsListComponent.getElement()
      );
    }
  }
}
