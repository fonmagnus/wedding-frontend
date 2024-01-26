export const state = () => ({
  secret: '',
  invitee: {},
  lang: 'EN',
  loveGiven: 0,
  isZoomingImage: false,
})

export const mutations = {
  setSecret(state, secret) {
    state.secret = secret;
  },
  setInvitee(state, invitee) {
    state.invitee = invitee;
  },
  setLang(state, lang) {
    state.lang = lang;
  },
  setLoveGiven(state, loveGiven) {
    state.loveGiven = loveGiven;
  },
  setIsZoomingImage(state, isZoomingImage) {
    state.isZoomingImage = isZoomingImage;
  }
}

export const getters = {
  getSecret(state) {
    return state.secret;
  },
  getInvitee(state) {
    return state.invitee;
  },
  getLang(state) {
    return state.lang;
  },
  getLoveGiven(state) {
    return state.loveGiven;
  },
  getIsZoomingImage(state) {
    return state.isZoomingImage;
  }
}

export const actions = {
  setSecret({ commit }, secret) {
    commit('setSecret', secret)
  },
  setInvitee({ commit }, invitee) {
    commit('setInvitee', invitee);
  },
  setLang({ commit }, lang) {
    commit('setLang', lang);
  },
  setLoveGiven({ commit }, loveGiven) {
    commit('setLoveGiven', loveGiven);
  },
  setIsZoomingImage({ commit }, isZoomingImage) {
    commit('setIsZoomingImage', isZoomingImage);
  }
}