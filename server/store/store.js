import { createStore } from 'redux'

const initialState={
    user:{login:null},
    admin:{login:null},
    hospital:{login:null},
    doctor:{login:null},
    refresh:true
}

function reducer(state=initialState, action){
    switch(action.type){
        case 'user': return {...state, user:action.payload};
        case 'admin': return {...state, admin:action.payload};
        case 'hospital': return {...state, hospital:action.payload};
        case 'doctor': return {...state, doctor:action.payload};
        case 'refresh': return {...state, refresh:!state.refresh};
        default: return state;
    }

}

export default createStore(reducer)