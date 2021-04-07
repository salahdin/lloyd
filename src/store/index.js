import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


require('firebase/auth')


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        }

    },
    actions: {
        signupUser({ commit }, payload) {
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    userCreds => {
                        const newUser = {
                            id: userCreds.user.uid,
                            regMeetups: []
                        }
                        commit('setUser', newUser)
                    }
                )
                .catch(
                    error => {
                        console.log(error)
                    }

                )
        },
        signinUser({ commit }, payload) {
            return new Promise((resolve, reject) => {
                firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                    .then((userCreds) => {
                        const User = {
                            id: userCreds.user.uid,
                            regMeetups: []
                        }
                        commit('setUser', User)

                    }).then((response) => {
                        resolve(response)
                    })
                    .catch((error) => {
                        console.log(error)
                        reject(error)
                    })

                })
            }
        },
        getters: {
            user(state) {
                return state.user
            }
        }


    })