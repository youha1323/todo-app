import React,{ useState } from 'react';
import { Post } from '../Types';

type Props = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
}

//{posts, setPosts} は分割代入っていう書き方で、propsの数が多くなるのを防ぐことができる
const PostInput: React.FC<Props> = ({posts, setPosts}) => {
  const [inputTitle, setInputTitle] = useState('');
  const [count, setCount] = useState(posts.length + 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    /* e.turget.valueでinputのvalueを取得できる */
    setInputTitle(e.target.value)
  }

  const hundleSubmit = () => {
    setCount(count + 1);

    const newPost : Post = {
      id: count,
      title: inputTitle,
      done: false
    }

      setPosts([newPost, ...posts]);//作成したnewPostsを追加する
      setInputTitle('');//Formをclearの認識？
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
        <button　onClick={hundleSubmit} className="btn is-primary">追加</button>
      </div>

    </div>
  )
}

export default PostInput;