import { useState, useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState();

  const clockSize = `w-[75vw] min-w-[300px] max-w-[800px]`;
  const numberStyles =
    'absolute text-center w-full h-full text-3xl md:text-5xl p-2';
  const handStyles = `absolute rounded-tr-md rounded-tl-md transform origin-bottom left-1/2 bottom-1/2 -translate-x-1/2`;

  let time = new Date();

  useEffect(() => {
    const setTime = () => {
      time.toLocaleTimeString();
      setCurrentTime(time.toLocaleTimeString());
    };

    const interval = setInterval(() => {
      setTime();
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const moveSecond = `rotate-[342deg]`;
  // const moveSecond = `rotate-[${
  //   6 * currentTime?.split(' ')[0]?.split(':')[2]
  // }deg]`;
  console.log(moveSecond);

  const moveMin = () => {};
  const moveHour = () => {};
  return (
    <div className='bg-black text-white min-h-screen text-center border flex flex-col gap-8 items-center justify-center overflow-hidden'>
      <h1>Clock</h1>
      <div>currentTime {currentTime}</div>

      <div className={`grid place-content-center`}>
        <div
          className={`relative bg-slate-600 ${clockSize} rounded-full aspect-square max-w-[90vw] `}
        >
          {/* Numbers */}
          <>
            <div className={`${numberStyles}`}>12</div>
            <div className={`${numberStyles} rotate-[30deg]`}>1</div>
            <div className={`${numberStyles} rotate-[60deg]`}>2</div>
            <div className={`${numberStyles} rotate-[90deg]`}>3</div>
            <div className={`${numberStyles} rotate-[120deg]`}>4</div>
            <div className={`${numberStyles} rotate-[150deg]`}>5</div>
            <div className={`${numberStyles} rotate-[180deg]`}>6</div>
            <div className={`${numberStyles} rotate-[210deg]`}>7</div>
            <div className={`${numberStyles} rotate-[240deg]`}>8</div>
            <div className={`${numberStyles} rotate-[270deg]`}>9</div>
            <div className={`${numberStyles} rotate-[300deg]`}>10</div>
            <div className={`${numberStyles} rotate-[330deg]`}>11</div>
          </>
          {/* Hands */}
          <>
            {/* Hour */}
            <div
              className={`${handStyles} bg-black h-[30%] md:h-[34%] md:w-[15px] w-[10px] rotate-[90deg]`}
            ></div>
            {/* Minute */}
            <div
              className={`${handStyles} absolute h-[37%] md:h-[45%] md:w-[10px] w-[5px] bg-blue-500 rotate-[0deg]`}
            ></div>
            {/* Second */}
            <div
              className={`${handStyles} absolute h-[48%] w-[1px] md:w-[3px] bg-red-500 ${moveSecond}`}
              // className={`${handStyles} absolute h-[48%] w-[1px] md:w-[3px] bg-red-500 rotate-[5deg]`}
            ></div>
            <div
              className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full md:w-8 md:h-8`}
            ></div>
          </>
        </div>
      </div>
    </div>
  );
}

export default App;
