import useDefault from ".";
const UseDefaultDemo = () => {
  const initialUser = { name: 'Marshall' }
  const defaultUser = { name: 'Mathers' }
  const [user, setUser] = useDefault(defaultUser, initialUser);
  return (
    <div>
      <div>User: {user.name}</div>
      <input onChange={e => setUser({ name: e.target.value })} />
      <button onClick={() => setUser(null)}>set to null</button>
    </div>
  )
}

export default UseDefaultDemo;