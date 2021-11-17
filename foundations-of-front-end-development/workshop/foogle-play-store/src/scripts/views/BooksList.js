import Backbone from 'backbone';

import App from '../bootstrap';

App.views.BooksList = Backbone.View.extend({
  initialize: function (options) {
    this.options = options;
  },
  render: function () {
    console.log("BooksList:render");

    this.$el.html('<h1>Books List</h1>');
    return this;
  }
});
