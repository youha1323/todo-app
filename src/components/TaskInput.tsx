import React,{ useState } from 'react';
import { Task } from '../Types';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

//{tasks, setTasks} は分割代入っていう書き方で、propsの数が多くなるのを防ぐことができる
const TaskInput: React.FC<Props> = ({tasks, setTasks}) => {
  const [inputTitle, setInputTitle] = useState('');
  const [count, setCount] = useState(tasks.length + 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    /* e.turget.valueでinputのvalueを取得できる */
    setInputTitle(e.target.value)
  }

  const hundleSubmit = () => {
    setCount(count + 1);

    const newTask : Task = {
      id: count,
      title: inputTitle,
      done: false
    }

      setTasks([newTask, ...tasks]);//作成したnewTasksを追加する
      setInputTitle('');//Formをclearの認識？
  }

  return (
    <div className="input-form">
      <div className="inner">
        <input type="text"
        className="input"
        value={inputTitle}
        onChange={handleInputChange}
        />
        <button　onClick={hundleSubmit} className="btn is-primary">追加</button>
      </div>

    </div>
  )
}

export default TaskInput;