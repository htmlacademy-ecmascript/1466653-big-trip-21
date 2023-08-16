import { RenderPosition, render } from './render.js';
import LogoView from './view/logo-view.js';
import FiltersListView from './view/filters-list-view.js';
import NewEventButtonView from './view/new-event-btn-view.js';
import TripInfoView from './view/trip-info-view.js';

const header = document.querySelector('.page-header__container');
const filtersContainer = document.querySelector('.trip-controls__filters');
const headerMainContainer = document.querySelector('.trip-main');
// const tripEvents = document.querySelector('.trip-events');

render(new LogoView(), header, RenderPosition.AFTERBEGIN);
render(new FiltersListView(), filtersContainer);
render(new TripInfoView(), headerMainContainer, RenderPosition.AFTERBEGIN);
render(new NewEventButtonView(), headerMainContainer);
// render(, tripEvents);
