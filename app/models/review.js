import DS from 'ember-data';

export default DS.Model.extend({
  badDriver: DS.attr('boolean'),
  driver: DS.belongsTo('driver', {async: true}),
  description: DS.attr('string'),
  location: DS.attr()
});
