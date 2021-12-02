import Backbone from 'backbone';
import _ from 'underscore';

import App from '../bootstrap';

App.views.BookDetail = Backbone.View.extend({
  template: _.template(Backbone.$('script[data-id=book-detail-view]').html()),
  initialize: function () {
    this.listenTo(this.model, "change", this.render);
  },
  render: function () {
    let _book = this.model.get('volumeInfo');
    let _authors = _book.authors ? `<em>${_book.authors.join()}</em> -` : '';
    let _publisher = _book.publisher ? `${_book.publisher} - Publisher` : '';

    // this.$el.html(`
    //   <header class="book-header l-content l-content-constrained l-row">
    //     <div class="l-column thumb-image">
    //       <img src="${_book.imageLinks.thumbnail}" alt="Book example image">
    //     </div>
    //     <div class="l-column">
    //       <div class="title">${_book.title}</div>
    //       <div>
    //         ${_authors} ${_book.publishedDate} <br>
    //         ${_publisher}
    //       </div>
    //     </div>
    //   </header>
    //   <div class="book-content l-content l-content-constrained standout">
    //     <h1 class="title">Description</h1>
    //     <p>${_book.description}</p>
    //   </div>
    // `);

    this.$el.html(this.template({
      _book,
      _authors,
      _publisher
    }));

    return this;
  }
});
