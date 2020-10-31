// npm install overmind overmind-react
// yarn add overmind overmind-react

import {createOvermind} from "overmind";
import {createHook} from "overmind-react";

export const useOvermind = createHook();
export const overmind = createOvermind({
    state: {
        counter: 0,
        data: []
    },
    actions: {
        increase({state}, number) {
            state.counter += number
        },
        setData({state}, data) {
            state.data = data;
        }
    }
});
