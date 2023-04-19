import { useSelector, useDispatch } from "react-redux";
import { start, stop } from "../slices/power/powerSlice";
import Butttons from "./Butttons";
import Volbuttons from "./Volbuttons";



const General = () => {
    const count = useSelector((state) => state.counter.count);
    const power = useSelector((state) => state.switch.power);
    const channel = useSelector((state) => state.channels.channel);
    const dispatch = useDispatch();

    const handleClick = () => {
      if ( power === 'off' ){
        dispatch(start())
      } else if ( power === 'on' ){
        dispatch(stop())
        alert(`power off!`)
      }
      return (null);
    }

  return (
    <div>
      <div className="everything">
        <div className="lists">
          { power === 'on' 
          ?
          <>
          <p>Power: {power}</p>
          <p>Channel: {channel}</p>
          <p>Volume: {count}</p>
          </>
          :
          ''
        }
        </div>
        <div className="power-container">
          <button className="power-switch" onClick={handleClick}>Power</button>
        </div>
        <Butttons />
        <p className="lists">Vol</p>
        <Volbuttons />
      </div>
    </div>
  )
}

export default General;
