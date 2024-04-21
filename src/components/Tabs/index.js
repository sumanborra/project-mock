import './index.css'

const Tabs = props => {
  const {dataTabs, id, changeTabId} = props
  const lineStyle = id === dataTabs.menuCategoryId ? 'under-line' : ''
  const changeTab = event => {
    changeTabId(event.target.id)
    // console.log(event.target.id)
  }
  return (
    <li
      className={`list-items-tabs ${lineStyle}`}
      onClick={changeTab}
      id={dataTabs.menuCategoryId}
    >
      {dataTabs.menuCategory}
    </li>
  )
}
export default Tabs
