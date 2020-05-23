import React from 'react';
import PostItem from './PostItem';
import { Post } from '../Types';

/*タスクアイテムはpropsでPostを受け取る*/
type Props = {    
  posts: Post[]
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
}

const PostList: React.FC<Props> = ({ posts, setPosts }) => {

  const handleDone = (post: Post) => {
    setPosts(prev => prev.map(t =>
      t.id === post.id
        ? { ...post, done: !post.done }
        : t
      ))
    }

    const handleDelete = (post: Post) => {
      //filterを使ってidが合致しないものを返す
      setPosts(prev => prev.filter(t =>
        t.id !== post.id
      ))
    }

  return (
    <div className="inner">
      {
        posts.length <= 0 ? '投稿された紹介はありません。' :
        <ul className="post-list">
          { posts.map(post => (
            <PostItem
                key={post.id}
                post={post}
                handleDone={handleDone}
                handleDelete={handleDelete}
            />
          )) }
        </ul>
      }

    </div>
  )
}

export default PostList;