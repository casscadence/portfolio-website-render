import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Layout from './components/layout'
import './app.scss'
import Project from './components/project'
import Testing from './components/testing'
import AnimatedLoader from './components/animatedloader'

const App = () => {

  const [scrollPercent, setScrollPercent] = useState(0);
  const [loaderName, setLoaderName] = useState('');
  const [link, setLink] = useState('');

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout scrollPercent={scrollPercent} setScrollPercent={setScrollPercent} loaderName={loaderName} link={link} setLink={setLink} />}>
          <Route index element={<Home scrollPercent={scrollPercent} setScrollPercent={setScrollPercent} loaderName={loaderName} setLoaderName={setLoaderName} setLink={setLink} />} />
          <Route path="/:selectionId/:projectId" element={<Project scrollPercent={scrollPercent} setScrollPercent={setScrollPercent} setLoaderName={setLoaderName} link={link} />} />
          <Route path="/testing" element={<Testing scrollPercent={scrollPercent} setScrollPercent={setScrollPercent} setLoaderName={setLoaderName} link={link} />} />
        </Route>
      </Routes>
      <AnimatedLoader loaderName={loaderName} />
    </>
  )
}

export default App