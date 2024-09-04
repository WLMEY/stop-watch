import './style.css';
import Stop from './stop';
import Start from './start';
import { useState, useEffect, React } from "react";





const App = () => {

  const [t, sett] = useState(0);
  const [min, setmin] = useState(0)
  const [hr, sethr] = useState(0)
  const [total_min, settotal_min] = useState(0)

  
    useEffect(() => {
      const time_line_100 = document.getElementById("time_line_100");
      const num = document.getElementById("input").value;
      setTimeout(() => {
        sett((t) => t + 1);
        if (t == 59) {
          setmin(min + 1)
          settotal_min(total_min + 1)
          sett(0)
        }

        if (min == 59) {
          sethr(hr + 1)
          setmin(0)
        }

      }, 1000);
      // return () => {
      //   clearInterval()
      // }

    });
  

  function Timer() {
    const num = document.getElementById("input").value;
    const target_hr = Math.floor(num / 60);   // 3.7
    const target_min = Math.floor((target_hr - (num / 60)) * 60)   // 3- 3.7 =0.7 *60=42

    if (target_hr == hr && target_min == min) {
      return(<Stop />)
    } else {
      return(<Start />)
    }
  }
  function time_line() {
    const time_line_100 = document.getElementById("time_line_100");
    const num = document.getElementById("input").value;
    const x = Math.floor((total_min * 100) / num);
    time_line_100.textContent = `${x}%`
  }
  function start_btn() {
    // const str_btn=document.getElementById("str_btn")

    Timer();
    time_line();
  
  }
  function stop_btn() {
    // const stp_btn=document.getElementById("stp_btn")

  }










  return (

    <div className="continer">
      <div className="continer_watch">
        <div className="stop_watch">
          {/* <h1>{t}</h1>
          <h1>:</h1> */}
          <h1>{t}</h1>
          <h1>:</h1>
          <h1>{Math.floor(min)}</h1>
          <h1>:</h1>
          <h1>{Math.floor(hr)}</h1>
        </div>
        <div className="btn">
          <button id='str_btn' onClick={start_btn}>start</button>
          <button id='stp_btn' onClick={stop_btn}>stop</button>
        </div>
      </div>
      <div className="continer_line">
        <div className="time_line">
          <div className="line_1"></div>
          <div className="line_2"></div>
          <h3 id='time_line_100'>100%</h3>
          <span id='finished'>finished</span>
        </div>
        <div className="btn">
          <input id='input' placeholder="000" type="number" />
        </div>
      </div>
    </div>
  );
}

export default App;
