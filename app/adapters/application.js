import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:4000',
  namespace: 'api'
});
