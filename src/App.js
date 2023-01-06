import { useState, useEffect } from 'react';

function App() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [currentTime, setCurrentTime] = useState('');

  const clockSize = `min-w-[300px] max-w-[55vw] w-[75vw]`;
  const numberStyles =
    'absolute text-center w-full h-full text-3xl md:text-5xl p-2';
  const handStyles =
    'absolute rounded-full transform origin-bottom left-1/2 bottom-1/2 -translate-x-1/2';

  useEffect(() => {
    const interval = setInterval(() => {
      let time = new Date().toLocaleTimeString();

      let hrs = time.split(' ')[0].split(':')[0];
      let mins = time.split(' ')[0].split(':')[1];
      let secs = time.split(' ')[0].split(':')[2];

      setHour(Number(hrs));
      setMinute(Number(mins));
      setSecond(Number(secs));

      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const moveSecond = `${6 * second}deg`;
  const moveMin = `${6 * (minute + second / 60)}deg`;

  const moveHour = `${30 * (hour + minute / 60)}deg`;

  console.log(moveMin);

  return (
    <div className='flex min-h-screen flex-col items-center  justify-center gap-8 overflow-hidden bg-black text-center text-white'>
      <div>currentTime {currentTime}</div>

      <div className={`grid place-content-center`}>
        <div
          className={`relative bg-slate-600 ${clockSize} aspect-square max-w-[90vw] rounded-full `}
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
              style={{ rotate: moveHour }}
              className={`${handStyles} h-[30%] w-[5px]  bg-black md:h-[34%] md:w-[10px]`}
            ></div>
            {/* Minute */}
            <div
              style={{ rotate: moveMin }}
              className={`${handStyles} absolute h-[37%] w-[3px] bg-blue-500 md:h-[45%] md:w-[6px]`}
            ></div>
            {/* Second */}
            <div
              style={{ rotate: moveSecond }}
              className={`${handStyles} absolute h-[48%] w-[1px] bg-red-500 md:w-[2px] `}
            ></div>
            <div
              className={`absolute top-1/2 left-1/2 h-4 w-4 -translate-y-1/2 -translate-x-1/2 rounded-full bg-black md:h-10 md:w-10`}
            />
          </>
        </div>
      </div>
    </div>
  );
}

export default App;
