import React from 'react'
import { Task } from '../Types'
import './App.css';

{/*タスクアイテムはpropsでTaskを受け取る*/}
type Props = {    
  task: Task
}

const App: React.FC<Props> = ({task}) => {

  return (
    <div className="App">{/*{``}←これ何！！*/}
    </div>
  )
}

export default App;