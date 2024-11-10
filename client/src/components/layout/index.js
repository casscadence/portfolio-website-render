import { Outlet } from 'react-router-dom'
import Topbar from '../topbar'
import './index.scss'

const Layout = ({scrollPercent, loaderName, link, setLink}) => {
  return (
    <div className="App">
      <Topbar scrollPercent={scrollPercent} loaderName={loaderName} link={link} setLink={setLink} />
      <Outlet /> 
    </div>
  )
}

export default Layout