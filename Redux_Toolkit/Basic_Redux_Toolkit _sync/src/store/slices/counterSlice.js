import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countValue: 0
}

const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        // NOTE: object literal function
        incrementHandler(state, action) {
            ++state.countValue
        },
        // NOTE: arrow function
        // incrementHandler: (state, action) => {
        //     ++state.countValue
        // }
        decrementHandler(state, action) {
            --state.countValue
        }
    }

})

const { actions, reducer } = counterSlice
export const { incrementHandler,decrementHandler } = actions
export default reducer