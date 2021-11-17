import Backbone from 'backbone';

import App from '../bootstrap';

App.routers.Router = Backbone.Router.extend({
  routes: {
    'category/:id/book/:bookId': 'book',
    'category/:id': 'category',
    '': 'home',
    '*default': 'unknown'
  },

  home: function () {
    console.log("Home");
  },
  category: function (id) {
    console.log(`Category [${id}]`);

    App.data.books = new App.models.Books(null, { catId: id });
    console.log(App.data.books.url());

    App.data.currentView = new App.views.BooksList({
      collection: App.data.books
    });

    App.data.books.fetch();
  },
  book: function (id, book) {
    console.log(`Book [${book}] for category [${id}]`);
  }
});
