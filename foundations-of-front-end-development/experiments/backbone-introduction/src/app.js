import Backbone from './scripts/backbone';
import _ from './scripts/underscore-esm';

let BookModel = Backbone.Model.extend({
  defaults: {
    title: 'new book',
    author: 'no author yet',
  }
});

let BookView = Backbone.View.extend({
  render: function() {
    let jsonModel = this.model.toJSON();
    this.$el.html(`
    <h2>${jsonModel.title}</h2>
    <span>${jsonModel.author}</span>
    `);
  }
});

let book = new BookModel();

let view = new BookView({
  el: '#book-view',
  model: book
});

view.render();
