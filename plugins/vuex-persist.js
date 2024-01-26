import VuexPersistence from 'vuex-persist';

export default ({ store }) => {
  new VuexPersistence({
    key: ['getSecret', 'getInvitee', 'getLang', 'getLoveGiven', 'getIsZoomingImage'],
    storage: window.localStorage,
    modules: ['data'],
  }).plugin(store);
};