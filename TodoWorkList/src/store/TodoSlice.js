import { createSlice } from "@reduxjs/toolkit"

const TodoSlice = createSlice({
    name: 'todo',
    initialState: [ ],
    reducers: {
        addTodo (state, action) {
            state.push(action.payload)
        },

        del (state, action) {
           return state.filter(item=> item.id !== action.payload)
        },
        update(state,action)
        {
            return state.map(item => item.id ===action.payload.id ? {...item, text:action.payload.text}: item)
        }
      
    }

})
export const { addTodo,del,update } = TodoSlice.actions
export default TodoSlice.reducer