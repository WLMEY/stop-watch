import './style.css';
import { useState, useEffect ,React } from "react";
const App=()=>{
  
  const [t, sett] =useState(0);
  // const add_t = () => {
  //     sett(t+5)
  // }

  // useEffect(()=>{
  // setInterval(add_t,900)




  useEffect(() => {
    setTimeout(() => {
      sett((t) => t + 1);
    }, 1000);






  return()=>{
      clearInterval()
  }

  },)


  return (
   
    <div className="continer">
      <div className="continer_watch">
        <div className="stop_watch">
          {/* <h1>{t}</h1>
          <h1>:</h1> */}
          <h1>{t}</h1>
          <h1>:</h1>
          <h1>{Math.floor(t/60)}</h1>
          <h1>:</h1>
          <h1>{Math.floor(t/(60*60))}</h1>
        </div>
        <div className="btn">
          <button>start</button>
          <button>stop</button>
        </div>
      </div>
      <div className="continer_line">
        <div className="time_line">
          <div className="line_1"></div>
          <div className="line_2"></div>
          <h3>100%</h3>
          <span>finished</span>
        </div>
        <div className="btn">
        <input placeholder="inter time minute" type="number" />
        </div>
      </div>
    </div>
  );
}

export default App;
