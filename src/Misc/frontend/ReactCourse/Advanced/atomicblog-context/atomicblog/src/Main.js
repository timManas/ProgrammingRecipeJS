import { memo, useState } from 'react'
import { usePosts } from './PostContext'

const Main = memo(function Main() {
  return (
    <main>
      <FormAddPost />
      <Posts />
    </main>
  )
})

function FormAddPost() {
  const { onAddPost } = usePosts()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = function (e) {
    e.preventDefault()
    if (!body || !title) return
    onAddPost({ title, body })
    setTitle('')
    setBody('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Post title'
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder='Post body'
      />
      <button>Add post</button>
    </form>
  )
}

function Posts() {
  return (
    <section>
      <List />
    </section>
  )
}

function List() {
  const { posts } = usePosts()

  return (
    <>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      {/* <Test /> */}
    </>
  )
}

export default Main
