export const state = () => ({
  secret: '',
  invitee: {},
  lang: 'EN'
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
  }
}