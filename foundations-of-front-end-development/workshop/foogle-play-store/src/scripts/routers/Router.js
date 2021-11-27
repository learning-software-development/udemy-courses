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

    this._cleanUpCurrentView();
    App.data.books = new App.models.Books(null, { catId: id });
    console.log(App.data.books.url());

    App.data.currentView = new App.views.BooksList({
      collection: App.data.books
    });

    this._activateBookListPanel();
    Backbone.$('[data-id=book-list]').append(App.data.currentView.$el);

    App.data.books.fetch({ reset: true });
  },
  book: function (id, bookId) {
    console.log(`Book [${bookId}] for category [${id}]`);

    this._cleanUpCurrentView();
    App.data.book = new App.models.Book({ id: bookId });
    console.log(App.data.book.url());

    App.data.currentView = new App.views.BookDetail({
      model: App.data.book
    });

    this._activateBookDetailPanel();
    Backbone.$('[data-id=book-detail]').append(App.data.currentView.$el);

    App.data.book.fetch();
  },
  unknown: function () {
    console.log('Unknown route ...');
  },

  _activateBookListPanel: () => {
    Backbone.$('[data-id=book-wrapper] .is-block').removeClass('is-block');
    Backbone.$('[data-id=book-list]').addClass('is-inline-block');
  },
  _activateBookDetailPanel: () => {
    Backbone.$('[data-id=book-wrapper] .is-inline-block').removeClass('is-inline-block');
    Backbone.$('[data-id=book-detail]').addClass('is-block');
  },
  _cleanUpCurrentView: () => {
    if (App.data.currentView) {
      App.data.currentView.remove();
      App.data.currentView = null;
    }
  }
});
