import React, { useLayoutEffect } from 'react'
import TaskItem from './TaskItem'
import { Task } from '../Types'

{/*タスクアイテムはpropsでTaskを受け取る*/}
type Props = {    
  tasks: Task[]
}

const TaskList: React.FC<Props> = ({ tasks }) => {

  return (
    <div className="inner">
      {
        tasks.length <= 0 ? '登録されたTodoはありません。' :
        <ul className="task-list">
          { tasks.map(task => (
            <TaskItem
                key={task.id}
                task={task}
            />
          )) }
        </ul>
      }

    </div>
  )
}

export default TaskList;