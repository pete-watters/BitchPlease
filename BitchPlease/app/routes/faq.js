import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
 model: function() {
 this.store.push('faq',{id:1,question:'Is this a question?',answer:'Of course it is.'});
 this.store.push('faq',{id:2,question:'What time is it?',answer:'It is now.'});
 return this.store.all('faq');
 }
});