import useFetch from '../hooks/useFetch'

const Users = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  )

  if (loading) return <p>Loading users...</p>
  if (error) return <p>Error!</p>

  return (
    <div>
      <h3>Users</h3>
      {data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default Users
