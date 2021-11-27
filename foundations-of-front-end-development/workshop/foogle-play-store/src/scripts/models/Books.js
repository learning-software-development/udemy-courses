import Backbone from 'backbone';

import App from '../bootstrap';

App.models.Books = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.options = options;
    this.catId = this.options.catId;
  },
  url: function () {
    return `api/books_${this.options.catId}.json`;
  }
});
