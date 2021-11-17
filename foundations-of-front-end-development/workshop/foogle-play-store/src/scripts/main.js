import 'normalize.css';
import '../styles/main.scss';

import Backbone from 'backbone';

import App from './bootstrap';

import './views/BooksList';
import './models/Books';
import './routers/Router';

App.data.router = new App.routers.Router();
Backbone.history.start();
