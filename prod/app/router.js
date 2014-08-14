import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ProductionENV.locationType
});

Router.map(function() {
  this.route('music');
  this.route('blog');
  this.route('contact');
  this.route('faq');
});

export default Router;
