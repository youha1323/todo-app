import React,{ useState } from 'react';
import { Post } from '../Types';
import formatDate from './formatDate';

type Props = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
}

enum DateFormat {
  YY_MM_DD_dd_HH_mm = 'YYYY/MM/DD(dd) HH:mm',
}

//{posts, setPosts} は分割代入っていう書き方で、propsの数が多くなるのを防ぐことができる
const PostInput: React.FC<Props> = ({posts, setPosts}) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputTime, setInputTime] = useState('');
  const [count, setCount] = useState(posts.length + 1);
  const today = formatDate(new Date(), DateFormat.YY_MM_DD_dd_HH_mm);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    /* e.turget.valueでinputのvalueを取得できる */
    setInputTitle(e.target.value)
    setInputTime(today)
  }

  const hundleSubmit = () => {

    if(inputTitle.length >= 5){
      setCount(count + 1);
      
      const newPost : Post = {
        id: count,
        title: inputTitle+inputTime,
        done: false,
      }

      setPosts([newPost, ...posts]);//作成したnewPostsを追加する

      setInputTitle('');//Formをclear

    }else{
      alert("5文字以上入力してください");
    }
  }

  return (
    <div className="input-form">
      <div className="inner">
        <input type="text"
        className="input"
        value={inputTitle}
        onChange={handleInputChange}
        placeholder="皆に紹介してください！"
        />
        <button　onClick={hundleSubmit} className="btn is-primary">投稿</button>
      </div>
    </div>
  )
}

export default PostInput;