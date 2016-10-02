import DS from 'ember-data';

export default DS.Model.extend({
  licensePlate: DS.attr('string'),
  reviews: DS.attr()
});
