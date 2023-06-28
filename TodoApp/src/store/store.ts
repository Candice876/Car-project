 import {defineStore} from 'pinia'
 import axios from 'axios'
 import router from '../router/router'

 interface Todo{
    id:string,
    todoItem:string
 }

 export const TodoStore = defineStore('todo',{
    state:()=>({
        Todos: [] as Todo[],
        todo: {} as Todo,
    }),

    getters:{
        getTodos: (state) => state.Todos,
        getTodo: (state) => state.todo
    },

    actions:{

      async fetch_todos(){
        try{
            let URL:string  = 'http://localhost:5000/todos'
            
            let result = await axios.get(URL)
            if(result.data){ this.Todos = result.data }
        }catch(error){
            alert(error)
        }
      },

      async GetTodoByID(ID:string){
        try{
            let URL:string  = `http://localhost:5000/byid?id=${ID}`
            
            let result = await axios.get(URL)

            if(result.data){ 
                this.todo = result.data
                router.push('/edit') 
            }
        }catch(error){
            alert(error)
        }
      },

      async AddTodo(TodoItem:string){
        try{
            let URL:string = "http://localhost:5000/addtodos"

            let result = await axios.post(URL,{
                todoItem:TodoItem
            })

            if(result.status === 200){ router.push('/')  }
        }catch(error){
            alert(error)
        }
      },

      async Edit_Todo(todo:Todo){
        try{
          let URL:string = `http://localhost:5000/Edit`
          
          let result = await axios.patch(URL,{
            id:todo.id,
            todoItem: todo.todoItem
          })

          if(result.status === 200){ router.push('/') }
        }catch(error){
            alert(error)
        }
      },

      async DeleteTodo(Id:string){
        try{
            let URL:string  = `http://localhost:5000/delete?id=${Id}`

            let result = await axios.delete(URL)

            if(result.status === 200){ router.push('/') }
        }catch(error){
            alert(error)
        }
      }

    }
 })