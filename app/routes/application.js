import Ember from 'ember';

const { get } = Ember;

export default Ember.Route.extend({

  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  },

  actions: {

    signIn() {
      this.get('session').open('firebase', {
        provider: 'password',
        email: 'test@test.com',
        password: '1234',
      });
    },

    signOut() {
      get(this, 'store').unloadAll();

      this.transitionTo('index')
      .then(() => {
        get(this, 'session').close();
      });
    }
  }

});
