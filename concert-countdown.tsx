import React, { useState, useEffect } from 'react';
import { Timer, Music } from 'lucide-react';

const ConcertCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const concertDate = new Date('2024-12-13T19:00:00');
  const names = ['Alex', 'Tori'];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = concertDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{backgroundColor: '#96D3E7'}} className="max-w-lg mx-auto p-6 rounded-xl shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <Music className="w-8 h-8 text-teal-700" />
        <h1 className="text-2xl font-bold text-center text-teal-700">Billie Eilish Concert</h1>
        <Timer className="w-8 h-8 text-teal-700" />
      </div>

      <div className="text-center mb-6">
        <p className="text-lg text-teal-800">Get ready {names.join(' & ')}!</p>
        <p className="text-sm text-teal-700">December 13, 2024 at 7:00 PM</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="bg-white/50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold mb-1 text-teal-800">{value}</div>
            <div className="text-xs text-teal-700 uppercase">{unit}</div>
          </div>
        ))}
      </div>

      <div className="text-center animate-pulse">
        <p className="text-sm text-teal-800">
          Time to perfect those lyrics! 🎤✨
        </p>
      </div>
    </div>
  );
};

export default ConcertCountdown;
