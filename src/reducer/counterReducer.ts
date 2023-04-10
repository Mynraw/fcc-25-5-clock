type Action =
    | { type: 'INCREASE_BREAK' }
    | { type: 'DECREASE_BREAK' }
    | { type: 'INCREASE_SESSION' }
    | { type: 'DECREASE_SESSION' }

export const counterReducer = (state: any, action: Action) => {
    switch (action.type) {
        case 'INCREASE_BREAK':
            return {...state, breakLength: state.breakLength + 1};
        case 'DECREASE_BREAK':
            return {...state, breakLength: state.breakLength - 1};
        case 'INCREASE_SESSION':
            return {...state, countLength: state.countLength + 1, timer: state.timer + 60};
        case 'DECREASE_SESSION':
            return {...state, countLength: state.countLength - 1, timer: state.timer - 60};
        default:
            throw Error("No such action.");
    }
}
