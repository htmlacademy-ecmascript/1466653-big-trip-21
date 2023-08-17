
import MainSection from '../view/main-section-view.js';
import SortEventsFormView from '../view/sort-events-form-view.js';
import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
import EventEditView from '../view/event-edit-view.js';
import {render} from '../render.js';

export default class TripsView {
  mainSectionComponent = new MainSection();
  eventsListComponent = new EventsListView();

  constructor({container}) {
    this.mainContainer = container;
  }

  init() {
    render(this.mainSectionComponent, this.mainContainer);
    render(new SortEventsFormView(), this.mainSectionComponent.getElement());
    render(this.eventsListComponent, this.mainSectionComponent.getElement());
    render(new EventEditView(), this.eventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventView(), this.eventsListComponent.getElement());
    }
  }
}
