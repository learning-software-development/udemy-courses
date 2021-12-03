import 'normalize.css';
import '../styles/main.scss';

import Backbone from 'backbone';

import App from './bootstrap';

import './models/Book';
import './models/Books';
import './views/BooksList';
import './views/BookDetail';
import './views/TopBar';
import './routers/Router';

App.data.router = new App.routers.Router();

new App.views.TopBar({
  el: '[data-id=topbar]'
});

Backbone.history.start();
