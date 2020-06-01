import React from 'react';
import { Post } from '../Types';
import Clapbtn from './Clapbtn';

/*タスクアイテムはpropsでPostを受け取る*/
type Props = {    
  post: Post
  handleDone:(post: Post) => void
  handleDelete:(post: Post) => void
}

const PostItem: React.FC<Props> = ({ post, handleDone, handleDelete }) => {

  return (
    <li className={post.done ? 'done' : ''}>
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          //handleDoneは引数postを渡す必要があるので、関数の形にする
          onClick={() => handleDone(post)}
          //初期値の設定
          defaultChecked={ post.done }
        />
        {/*postpropsを受け取るとpost.titleがcheckboxへ一覧で表示する作り*/}
        <span className="checkbox-label">{ post.title}</span>  
      </label>
      <Clapbtn />
      <button
        onClick= {() => handleDelete(post)}
        className="btn is-delete"
      >投稿の破棄</button>
    </li>
  )
}

export default PostItem