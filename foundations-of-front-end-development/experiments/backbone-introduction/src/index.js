import Backbone from 'backbone';

let BookModel = Backbone.Model.extend({
  defaults: {
    title: 'new book',
    author: 'no author yet',
  }
});

let BookView = Backbone.View.extend({
  render: () => {
    this.$el.html("<h2>The Book Title</h2>");
  }
});

let book = new BookModel();

let view = new BookView({
  el: '#book-view'
});

view.render();
