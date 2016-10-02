import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPISerializer.extend({
	payloadKeyFromModelName(modelName){
		return Ember.String.singularize(Ember.String.capitalize(modelName));
	}
});
