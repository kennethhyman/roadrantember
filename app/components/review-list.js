import Ember from 'ember';

export default Ember.Component.extend({
	isExpanded: true,

	actions: {
		toggleExpand: function(){
			this.set('isExpanded', !this.get('isExpanded'));
		}
	}
});
