import { useSelector, useDispatch } from "react-redux";
import { start, stop } from "../store/slices/power/powerSlice";
import { One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten } from '../store/slices/channels/channelSlice';
import Volbuttons from "../component/Buttons/Volbuttons";
import Buttons from "../component/Buttons/Button";



const Home = () => {
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
        <div className="buttons">
          <Buttons onClick={() => dispatch(One())} channel= '1' />
          <Buttons onClick={() => dispatch(Two())} channel= '2' />
          <Buttons onClick={() => dispatch(Three())} channel= '3' />
          <Buttons onClick={() => dispatch(Four())} channel= '4' /> 
          <Buttons onClick={() => dispatch(Five())} channel= '5' />
          <Buttons onClick={() => dispatch(Six())} channel= '6' />
          <Buttons onClick={() => dispatch(Seven())} channel= '7' />
          <Buttons onClick={() => dispatch(Eight())} channel= '8' />
          <Buttons onClick={() => dispatch(Nine())} channel= '9' />
          <Buttons onClick={() => dispatch(Ten())} channel= '0' />
        </div>
        <p className="lists">Vol</p>
        <Volbuttons />
      </div>
    </div>
  )
}

export default Home;
