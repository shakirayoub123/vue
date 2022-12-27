import {createStore} from "vuex";


const store=createStore({
    state(){
        return{
            counter:0
        }
    },
    mutations: {
        // state parameter will be  automatically given by state
        //     increment(state){
        //         state.counter=state.counter+2;
        //
        //     }
        // },
        // mutation with payload(it could be anything number string )
        increase(state, payload) {
            state.counter = state.counter + payload.value
        }
        },
    getters:{
        finalCounter(state){
            return state.counter*3;
        },
        normalizedCounter(_,getters){
            const finalCounter=getters.finalCounter;
            if(finalCounter<0){
                return 0;
            }
            if(finalCounter > 100){
                return 100;
            }
            return finalCounter
        }
    }
    })

export default  store