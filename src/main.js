import { RenderPosition, render } from './render.js';
import LogoView from './view/logo-view.js';
import TripFiltersView from './view/trip-filters-view.js';
import NewEventButtonView from './view/new-event-btn-view.js';
import TripInfoView from './view/trip-info-view.js';
import TripsView from './presenter/trips-presenter.js';

const header = document.querySelector('.page-header__container');
const filtersContainer = document.querySelector('.trip-controls__filters');
const headerMainContainer = document.querySelector('.trip-main');
const tripEventsContainer = document.querySelector('main > .page-body__container');
const eventsListPresenter = new TripsView({container: tripEventsContainer});

render(new LogoView(), header, RenderPosition.AFTERBEGIN);
render(new TripFiltersView(), filtersContainer);
render(new TripInfoView(), headerMainContainer, RenderPosition.AFTERBEGIN);
render(new NewEventButtonView(), headerMainContainer);

eventsListPresenter.init();
