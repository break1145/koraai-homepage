import { GRID_STYLES } from '../constants/homeConfig'

const BackgroundLayers = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,102,255,0.1)_0%,transparent_70%),radial-gradient(ellipse_at_bottom_left,rgba(30,70,235,0.08)_0%,transparent_70%)]"></div>
      
      {/* 动态网格背景 */}
      <div className="absolute inset-0 opacity-[0.15] z-[1]">
        <div className="absolute inset-0" style={GRID_STYLES}></div>
      </div>
    </>
  )
}

export default BackgroundLayers