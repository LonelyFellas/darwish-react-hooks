import useSessionStorage from "./useSessionStorage"

const UseStorageDemo = () => {
  const demoId = 1212121

  const {get, save, clear} = useSessionStorage()

  const handleSave = () => {
    save({key: 'admin', value: 'darwish'})
  }

  const handleClear = () => {
    clear('admin')
  }
  return <h1>
    id: {demoId}
    <button onClick={handleSave}>save session storage</button>
    <button onClick={handleClear}>clear</button>
  </h1>
}

export default UseStorageDemo