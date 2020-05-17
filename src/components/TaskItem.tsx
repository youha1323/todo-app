import React from 'react';
import { Task } from '../Types';

/*タスクアイテムはpropsでTaskを受け取る*/
type Props = {    
  task: Task
  handleDone:(task: Task) => void
  handleDelete:(task: Task) => void
}

const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete }) => {

  return (
    <li className={task.done ? 'done' : ''}>
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          //handleDoneは引数taskを渡す必要があるので、関数の形にする
          onClick={() => handleDone(task)}
          //初期値の設定
          defaultChecked={ task.done }
        />
        {/*taskpropsを受け取るとtask.titleがcheckboxへ一覧で表示する作り*/}
        <span className="checkbox-label">{ task.title}</span>  
      </label>
      <button
        onClick= {() => handleDelete(task)}
        className="btn is-delete"
      >削除</button>
    </li>
  )
}

export default TaskItem