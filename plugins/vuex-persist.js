import VuexPersistence from 'vuex-persist';

export default ({ store }) => {
  new VuexPersistence({
    key: ['getSecret'],
    storage: window.localStorage,
    modules: ['data'],
  }).plugin(store);

  new VuexPersistence({
    key: ['getInvitee'],
    storage: window.localStorage,
    modules: ['data'],
  }).plugin(store);

  new VuexPersistence({
    key: ['getLang'],
    storage: window.localStorage,
    modules: ['data'],
  }).plugin(store);

  new VuexPersistence({
    key: ['getLoveGiven'],
    storage: window.localStorage,
    modules: ['data'],
  }).plugin(store);

  new VuexPersistence({
    key: ['getIsZoomingImage'],
    storage: window.localStorage,
    modules: ['data'],
  }).plugin(store);
};