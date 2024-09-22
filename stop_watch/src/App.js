// import './style.css';
// import Stop from './stop';
// import Start from './start';
// import { useState, useEffect, React } from "react";
// import {   render } from '@testing-library/react';





// const App = () => {

//   const [t, sett] = useState(0);
//   const [min, setmin] = useState(0)
//   const [hr, sethr] = useState(0)
//   const [total_min, settotal_min] = useState(0)


//   useEffect(() => {
//     const time_line_100 = document.getElementById("time_line_100");
//     const num = document.getElementById("input").value;
//     const myInterval = setInterval(() => {
//       sett((t) => t + 1);
//       if (t == 59) {
//         setmin(min + 1)
//         settotal_min(total_min + 1)
//         sett(0)
//       }

//       if (min == 59) {
//         sethr(hr + 1)
//         setmin(0)
//       }

//     }, 1000);
// return ()=>clearInterval(myInterval);

//   });


//   function Timer() {
//     const num = document.getElementById("input").value;
//     const target_hr = Math.floor(num / 60);   // 3.7
//     const target_min = Math.floor((target_hr - (num / 60)) * 60)   // 3- 3.7 =0.7 *60=42

//     if (target_hr == hr && target_min == min) {
//       return (<Stop />)
//     } else {
//       return (<Start />)
//     }
//   }
//   function time_line() {
//     const time_line_100 = document.getElementById("time_line_100");
//     const num = document.getElementById("input").value;
//     const x = Math.floor((total_min * 100) / num);
//     time_line_100.textContent = `${x}%`
//   }
//   function start_btn() {
//     // const str_btn=document.getElementById("str_btn")

//     // Timer;
//     // time_line;

//   }
//   function stop_btn() {
//     // const stp_btn=document.getElementById("stp_btn")
//     // clearInterval(myInterval)
//   }



//   return (

//     <div className="continer">
//       <div className="continer_watch">
//         <div className="stop_watch">
//           {/* <h1>{t}</h1>
//           <h1>:</h1> */}
//           <h1>{t}</h1>
//           <h1>:</h1>
//           <h1>{Math.floor(min)}</h1>
//           <h1>:</h1>
//           <h1>{Math.floor(hr)}</h1>
//         </div>
//         <div className="btn">
//           <button id='str_btn' onClick={start_btn}>start</button>
//           <button id='stp_btn' onClick={stop_btn}>stop</button>
//         </div>
//       </div>
//       <div className="continer_line">
//         <div className="time_line">
//           <div className="line_1"></div>
//           <div className="line_2"></div>
//           <h3 id='time_line_100'>100%</h3>
//           <span id='finished'>finished</span>
//         </div>
//         <div className="btn">
//           <input id='input' placeholder="000" type="number" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




// ChatGPT

// import './style.css';
// import Stop from './stop';
// import Start from './start';
// import { useState, useEffect } from "react";

// const App = () => {

//   const [t, sett] = useState(0);
//   const [min, setmin] = useState(0);
//   const [hr, sethr] = useState(0);
//   const [total_min, settotal_min] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       sett((prevT) => {
//         if (prevT === 59) {
//           setmin((prevMin) => {
//             if (prevMin === 59) {
//               sethr((prevHr) => prevHr + 1);
//               return 0;
//             }
//             return prevMin + 1;
//           });
//           settotal_min((prevTotalMin) => prevTotalMin + 1);
//           return 0;
//         }
//         return prevT + 1;
//       });
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, [t, min, hr]);

//   function Timer() {
//     const num = parseInt(document.getElementById("input").value, 10);
//     const target_hr = Math.floor(num / 60);
//     const target_min = num % 60;

//     if (target_hr === hr && target_min === min) {
//       return <Stop />;
//     } else {
//       return <Start />;
//     }
//   }

//   function time_line() {
//     const time_line_100 = document.getElementById("time_line_100");
//     const num = parseInt(document.getElementById("input").value, 10);
//     const x = Math.floor((total_min * 100) / num);
//     time_line_100.textContent = `${x}%`;
//   }

//   function start_btn() {
//     Timer();
//     time_line();
//   }

//   function stop_btn() {
//     // Stop functionality
//   }

//   return (
//     <div className="continer">
//       <div className="continer_watch">
//         <div className="stop_watch">
//           <h1>{t}</h1>
//           <h1>:</h1>
//           <h1>{Math.floor(min)}</h1>
//           <h1>:</h1>
//           <h1>{Math.floor(hr)}</h1>
//         </div>
//         <div className="btn">
//           <button id='str_btn' onClick={start_btn}>start</button>
//           <button id='stp_btn' onClick={stop_btn}>stop</button>
//         </div>
//       </div>
//       <div className="continer_line">
//         <div className="time_line">
//           <div className="line_1"></div>
//           <div className="line_2"></div>
//           <h3 id='time_line_100'>100%</h3>
//           <span id='finished'>finished</span>
//         </div>
//         <div className="btn">
//           <input id='input' placeholder="000" type="number" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;








import './style.css';
import Stop from './stop';
import Start from './start';
import { useState, useEffect } from "react";

const App = () => {

  const [t, sett] = useState(0);
  const [min, setmin] = useState(0);
  const [hr, sethr] = useState(0);
  const [total_min, settotal_min] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const myInterval = setInterval(() => {
      sett((t) => t + 1);
      if (t === 59) {
        setmin(min + 1);
        settotal_min(total_min + 1);
        sett(0);
      }
      if (min === 59) {
        sethr(hr + 1);
        setmin(0);
      }
    }, 1000);

    setIntervalId(myInterval);

    return () => clearInterval(myInterval);
  }, [t, min, hr, total_min]);

  function Timer() {
    const target_hr = Math.floor(inputValue / 60);
    const target_min = inputValue % 60;

    if (target_hr === hr && target_min === min) {
      return <Stop />;
    } else {
      return <Start />;
    }
  }

  function time_line() {
    const time_line_100 = document.getElementById("time_line_100");
    const x = Math.floor((total_min * 100) / inputValue);
    time_line_100.textContent = `${x}%`;
  }

  function start_btn() {
    Timer();
    time_line();
  }

  function stop_btn() {
    clearInterval(intervalId);
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="continer">
      <div className="continer_watch">
        <div className="stop_watch">
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
          <input id='input' placeholder="000" type="number" onChange={handleInputChange} value={inputValue} />
        </div>
      </div>
    </div>
  );
}

export default App;
