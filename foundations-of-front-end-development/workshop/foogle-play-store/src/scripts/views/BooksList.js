import Backbone from 'backbone';

import App from '../bootstrap';

App.views.BooksList = Backbone.View.extend({
  initialize: function (options) {
    this.options = options;
    this.listenTo(this.collection, "change reset", this.render);
  },
  render: function () {

    this.$el.html('<h1>Book List</h1>');

    let bookPath = ``;

    this.$el.append('<ul></ul>');
    let _ul = this.$('ul');

    this.collection.each((model) => {
      _ul.append(
        `<li class="thumb">
          <a href="#category/${this.collection.catId}/book/${model.get('id')}" class="thumb-link">
            <span class="overlay"></span>
            <img src="${model.get('volumeInfo').imageLinks.thumbnail}" alt="Book example image">
          </a>
        </li>`
      );
    });

    return this;
  }
});
