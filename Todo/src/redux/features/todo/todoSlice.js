 import { createSlice , nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos :[{
        id:1, text:"hello world"
        
    }
    ]
}


function  sayHello(){
    console.log("say hello");
}


export const  todoSlice =  createSlice({
     name: 'todo',
    initialState,
    reducers:{
        x:sayHello,                 // you can directly pass function reference don't call it
        addTodo:(state,action)=>{
            const  todo = {
                id:nanoid(),
                text:action.payload      // yaha payload me jo bhi dispatch me bheja hai vo aayega jo yaha string bheja hai na ki object
            }
            state.todos.push(todo);
        },


        removeTodo: (state, action) => {
  state.todos = state.todos.filter(
    (todo) => todo.id !== action.payload.id
  );
},

        // updateTodo: (state, action) => {
        //     const { id, text } = action.payload;
        //     const existingTodo = state.todos.find((todo) => todo.id === id);
        //     if (existingTodo) {
        //         existingTodo.text = text;
        //     }
        // }
        
    }

})


export const{x,addTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
