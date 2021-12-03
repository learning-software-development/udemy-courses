import Backbone from 'backbone';

import App from '../bootstrap';

App.views.BooksList = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, "change reset", this.render);
  },
  render: function () {
    this.$el.html('<h1 class="ml-5">Book List</h1>');

    this.$el.append('<ul class="thumbs-list"></ul>');
    let _ul = this.$('ul');

    this.collection.each((model) => {
      _ul.append(`
        <li class="thumb">
          <a href="#category/${this.collection.catId}/book/${model.get('id')}" class="thumb-link">
            <span class="overlay"></span>
            <img src="${model.get('volumeInfo').imageLinks.thumbnail}" alt="Book example image">
          </a>
        </li>
      `);
    });

    return this;
  }
});
