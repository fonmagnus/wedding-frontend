export const state = () => ({
  secret: '',
  invitee: {},
})

export const mutations = {
  setSecret(state, secret) {
    state.secret = secret;
  },
  setInvitee(state, invitee) {
    state.invitee = invitee;
  }
}

export const getters = {
  getSecret(state) {
    return state.secret;
  },
  getInvitee(state) {
    return state.invitee;
  }
}

export const actions = {
  setSecret({ commit }, secret) {
    commit('setSecret', secret)
  },
  setInvitee({ commit }, invitee) {
    commit('setInvitee', invitee);
  },
}