
export const scheduleReducer = (state, action) => {
    switch (action.type) {
        case 'mon': return {...state, mon:[...state.mon, action.payload]}
        case 'tue': return {...state, tue:[...state.tue, action.payload]}
        case 'wed': return {...state, wed:[...state.wed, action.payload]}
        case 'thu': return {...state, thu:[...state.thu, action.payload]}
        case 'fri': return {...state, fri:[...state.fri, action.payload]}
        case 'sat': return {...state, sat:[...state.sat, action.payload]}
        case 'sun': return {...state, sun:[...state.sun, action.payload]}
        case 'rmMon': return {...state, mon:[...state.mon.splice(action.payload, 1)]}
        default:
            return state;
    }
};