import _, { map } from 'underscore';
import Backbone from 'backbone';

let Generic = new Backbone.Model()

let Book = Backbone.Model.extend({
  defaults: {
    isbn: '',
    title: '',
    author: ''
  }
});

let myBook = new Book();

// myBook.attributes All object fields
// myBook.get('title') get the prop value
// myBook.set('title') set the prop value

// https://pokeapi.co/api/v2/pokemon/7

let Pokemon = Backbone.Model.extend({
  urlRoot: 'https://pokeapi.co/api/v2/pokemon/'
})

let squirtle = new Pokemon({ id: 7 });

squirtle.fetch();

// model.fetch()
// model.save()
// model.destroy()
