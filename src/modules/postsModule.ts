import { createAction, PayloadAction} from '@reduxjs/toolkit'
import { Post } from '../Types'

type State = {
    count : number
    posts : Post[]
}

const initialState: State = {
  count: 2,
  posts:[
    {
      id: 2,
      title: '次のTodo',
      done: false
    },{
      id: 1,
      title: '最初のTodo',
      done: true
    }
  ]
}
