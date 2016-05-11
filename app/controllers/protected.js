import Ember from 'ember';

const { get } = Ember;

export default Ember.Controller.extend({

  actions: {
    createProtectedData() {
      let newProtectedData = get(this, 'store').createRecord('protectedData', {
        secret: Math.random().toString(),
      });
      newProtectedData.save();
    }
  }

});
