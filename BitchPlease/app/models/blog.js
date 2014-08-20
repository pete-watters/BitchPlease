import DS from 'ember-data';

export default DS.Model.extend({
    post_title: DS.attr('string'),
    post_date: DS.attr('string'),
    post_body: DS.attr('string')
});