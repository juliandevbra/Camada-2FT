import { useReducer } from "react";

const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return {count: action.payload}
        default:
            throw new Error();
    }
}

function Counter() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <p> Count: {state.count}</p>
            <button disabled={state.count === 0} onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'reset', payload: initialState.count})}>Reset</button>
        </>
    );
}
export default Counter