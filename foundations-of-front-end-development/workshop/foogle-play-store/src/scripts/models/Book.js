import Backbone from 'backbone';

import App from '../bootstrap';

App.models.Book = Backbone.Model.extend({
  url: function () {
    return `api/book_${this.get('id')}.json`;
  }
});
