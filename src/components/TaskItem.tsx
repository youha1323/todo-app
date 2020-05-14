import React from 'react'
import { Task } from '../Types'

{/*タスクアイテムはpropsでTaskを受け取る*/}
type Props = {    
  task: Task
}

const TaskItem: React.FC<Props> = ({task}) => {

  return (
    <li>
      <label>
        <input type="checkbox" className="checkbox-input" />
        <span className="checkbox-label">{ task.title}</span>{/*taskpropsを受け取るとtask.titleがcheckboxへ一覧で表示する作り*/}
      </label>
      <button className="btn is-delete">削除</button>
    </li>
  )
}

export default TaskItem;