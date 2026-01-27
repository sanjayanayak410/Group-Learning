import useFetch from '../hooks/useFetch'

const Posts = () => {
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  )

  if (loading) return <p>Loading posts...</p>

  return (
    <div>
      <h3>Posts</h3>
      {data.slice(0, 5).map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  )
}

export default Posts
