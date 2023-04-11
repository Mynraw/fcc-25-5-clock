type Action =
    | { type: 'INCREASE_BREAK' }
    | { type: 'DECREASE_BREAK' }
    | { type: 'INCREASE_SESSION' }
    | { type: 'DECREASE_SESSION' }
    | { type: 'PAUSE_SESSION' }
    | { type: 'RESET_SESSION' }
    | { type: 'START_SESSION' }
    | { type: 'BREAK_TURN' }

export const counterReducer = (state: any, action: Action) => {
    switch (action.type) {
        case 'INCREASE_BREAK':
            return {...state, breakLength: state.breakLength + 1};
        case 'DECREASE_BREAK':
            return {...state, breakLength: state.breakLength - 1};
        case 'INCREASE_SESSION':
            return {...state, countLength: state.countLength + 1, seconds: state.seconds + 60, timer: Math.floor((state.seconds + 60) / 60) + ':' + ('0' + Math.floor((state.seconds + 60) % 60)).slice(-2)};
        case 'DECREASE_SESSION':
            return {...state, countLength: state.countLength - 1, seconds: state.seconds - 60, timer: Math.floor((state.seconds - 60) / 60) + ':' + ('0' + Math.floor((state.seconds - 60) % 60)).slice(-2)};
        case 'PAUSE_SESSION':
            return {...state, isStopped: !state.isStopped};
        case 'RESET_SESSION':
            return {...state, breakLength: 5, countLength: 25, seconds: 1500, timer: '25:00'};
        case 'START_SESSION':
            return {...state, seconds: state.seconds - 1, timer: Math.floor(state.seconds / 60) + ':' + ('0' + Math.floor(state.seconds % 60)).slice(-2)};
        case 'BREAK_TURN':
            return {...state, seconds: state.breakLength * 60, timer: Math.floor((state.breakLength * 60)/ 60) + ':' + ('0' + Math.floor((state.seconds - 1) % 60)).slice(-2), breaksTurn: true};
        default:
            throw Error("No such action.");
    }
}
