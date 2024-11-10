import './index.scss'

const AnimatedLoader = ({ loaderName }) => {
  return (
    <div className={`loader ${loaderName}`}>
      <div key={loaderName} className="loader-container">
        <div className="square topleft"></div>
        <div className="square top"></div>
        <div className="square topright"></div>
        <div className="square left"></div>
        <div className="spacer"></div>
        <div className="square right"></div>
        <div className="square bottomleft"></div>
        <div className="square bottom"></div>
        <div className="square bottomright"></div>
      </div>
    </div>
  )
}

export default AnimatedLoader