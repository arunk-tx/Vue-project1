import { createStore } from "vuex";


const store = createStore({
    state:{
        email: localStorage.getItem('email'),
        notes: []
    },
    getters:{
        totalNotes(state) {
            return state.notes.length;
        },
        getEmail(state) {
            return state.email;
        }
    },
    mutations:{
        UPDATE_EMAIL(state, email){
            console.log("Stste", email)
            state.email = email
            localStorage.setItem("email",email);
        },
        SAVE_NOTE(state,title) {
            state.notes.push(title);
        },
        DELETE_TODO(state, todoItem) {
            //let index = state.todos.indexOf(todoItem);
            let index = todoItem
            console.log("index", index)
            state.notes.splice(index, 1);
        },
    },
    actions:{
        saveNote({commit}, title) {
            commit('SAVE_NOTE',title);
        },
        deleteTodo({ commit }, todoItem) {
            commit('DELETE_TODO', todoItem);
        },
        updateEmail({commit}, email) {
            commit('UPDATE_EMAIL', email);
        },
    }
});

export default store;