import Backbone from 'backbone';

import App from '../bootstrap';

App.views.TopBar = Backbone.View.extend({
  events: {
    'click [data-id=categories-toggle]': 'toggleCategories',
    'click [data-id=category]': 'selectCategory'
  },

  toggleCategories: function (event) {
    event.preventDefault();
    Backbone.$('[data-id=categories]').toggleClass('is-block');
  },
  selectCategory: function (event) {
    Backbone.$('[data-id=categories]').removeClass('is-block');
  }
});
