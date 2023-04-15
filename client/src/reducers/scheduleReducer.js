
export const scheduleReducer = (state, action) => {
    switch (action.type) {
        case 'mon': return {...state, mon:[...state.mon, payload]}
        case 'tue': return {...state, tue:[...state.tue, payload]}
        case 'wed': return {...state, wed:[...state.wed, payload]}
        case 'thu': return {...state, thu:[...state.thu, payload]}
        case 'fri': return {...state, fri:[...state.fri, payload]}
        case 'sat': return {...state, sat:[...state.sat, payload]}
        case 'sun': return {...state, sun:[...state.sun, payload]}
        default:
            return state;
    }
};