import axios from "axios";

const state = {
    memes: []
};

const getters = {
    memeAll: (state) => state.memes
};

const actions = {
    //GET ALL MEMES
    async fetchAllMemes({ commit }) {
        const response = await axios.get('http://127.0.0.1:5000/meme');
        commit('setMemes', response.data);
        console.log(state.memes)
    },

    //POST A NEW MEME
    async postAMeme({ commit }, singleMeme) {
        const response = await axios.post('http://127.0.0.1:5000/meme', singleMeme);
        console.log(response.data)
        commit('updateMemeState', response.data)

    },

    //UPDATE A EXISTING MEME
    async UpdateMeme(id) {
        const response = await axios.post('http://127.0.0.1:5000/meme', id);
        console.log(response.data)
        // commit('updateMemeState', response.data)

    }
};

const mutations = {
    setMemes: (state, memes) => (state.memes = memes),
    updateMemeState: (state, meme) => state.memes.unshift(meme)
};

export default {
    state,
    getters,
    actions,
    mutations,
}