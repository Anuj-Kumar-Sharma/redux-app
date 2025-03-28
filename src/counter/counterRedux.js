import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    count: 10,
};

export const COUNTER_ACTION_TYPES = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
};

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case COUNTER_ACTION_TYPES.INCREMENT:
            return { count: state.count + 1 };
        case COUNTER_ACTION_TYPES.DECREMENT:
            const payload = action.payload;
            console.log(payload);
            return { count: state.count - payload.by };
        default:
            return state;
    }
}

const store = configureStore({
    reducer: { counter: counterReducer },
    devTools: true
});

export default store;
