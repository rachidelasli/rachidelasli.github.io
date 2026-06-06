import React, { useState, useEffect, useRef } from 'react';
import { useAppStore, ClassGroup, Student } from '../store';
import { Shuffle, Trophy, AlertCircle, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function RandomPicker() {
  const { classes, students } = useAppStore();
  const [selectedClassId, setSelectedClassId] = useState<string>('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<Student | null>(null);
  const [currentDisplay, setCurrentDisplay] = useState<string>('???');
  
  const classStudents = students.filter(s => s.classId === selectedClassId);
  const spinTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Reset winner when class changes
  useEffect(() => {
    setWinner(null);
    setCurrentDisplay('???');
    setIsSpinning(false);
    if(spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);
  }, [selectedClassId]);

  // Clean up timeout
  useEffect(() => {
    return () => {
      if(spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);
    };
  }, []);

  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  };

  const handlePickRandom = () => {
    if (classStudents.length === 0 || isSpinning) return;
    
    setWinner(null);
    setIsSpinning(true);
    
    let iterations = 0;
    const maxIterations = 20;
    const speed = 100; // ms

    const spin = () => {
      const randomIndex = Math.floor(Math.random() * classStudents.length);
      setCurrentDisplay(classStudents[randomIndex].name);
      
      iterations++;
      
      if (iterations < maxIterations) {
        spinTimeoutRef.current = setTimeout(spin, speed + (iterations * 10)); // gradually slow down
      } else {
        setIsSpinning(false);
        const finalWinner = classStudents[randomIndex];
        setWinner(finalWinner);
        setCurrentDisplay(finalWinner.name);
        triggerConfetti();
      }
    };

    spin();
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Selection Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
          <Shuffle className="text-blue-600" />
          <span>إعدادات الاختيار العشوائي</span>
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              اختر الفوج:
            </label>
            <select
              value={selectedClassId}
              onChange={(e) => setSelectedClassId(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 outline-none text-lg"
              disabled={isSpinning}
            >
              <option value="">-- يرجى اختيار فوج --</option>
              {classes.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          {selectedClassId && classStudents.length === 0 && (
            <div className="flex items-center gap-2 text-amber-600 bg-amber-50 p-3 rounded-lg border border-amber-200">
              <AlertCircle size={20} />
              <span>هذا الفوج لا يحتوي على أي تلاميذ. يرجى إضافة تلاميذ أولاً.</span>
            </div>
          )}

          {selectedClassId && classStudents.length > 0 && (
            <div className="text-sm text-gray-500 flex justify-between items-center bg-blue-50/50 p-3 rounded-lg">
              <span>عدد التلاميذ في الفوج المختار:</span>
              <span className="font-bold text-lg text-blue-700">{classStudents.length}</span>
            </div>
          )}
        </div>
      </div>

      {/* Presentation Area */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl shadow-xl overflow-hidden relative min-h-[400px] flex flex-col items-center justify-center p-8 text-center border-4 border-white">
        
        {/* Background decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/4 translate-y-1/4"></div>

        {!selectedClassId ? (
          <div className="text-white/80 text-xl font-medium z-10">
            الرجاء تحديد فوج للبدء
          </div>
        ) : classStudents.length > 0 ? (
          <div className="w-full flex flex-col items-center z-10 space-y-12">
            
            {/* The Display Box */}
            <div className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
              <div className="text-blue-100 text-sm mb-4 font-medium uppercase tracking-wider">التلميذ المختار</div>
              
              <div className="h-24 flex items-center justify-center overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDisplay}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className={`text-4xl md:text-5xl font-bold ${winner ? 'text-yellow-400 drop-shadow-md scale-110 transition-transform' : 'text-white'}`}
                  >
                    {currentDisplay}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {winner && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 text-yellow-400"
                >
                  <Trophy size={32} />
                </motion.div>
              )}
            </div>

            {/* The Button */}
            <button
              onClick={handlePickRandom}
              disabled={isSpinning}
              className={`
                group relative inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white transition-all duration-200 
                rounded-full overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-indigo-800
                ${isSpinning ? 'bg-indigo-500 cursor-not-allowed opacity-80' : 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 hover:scale-105 shadow-lg hover:shadow-yellow-500/30 text-indigo-900'}
              `}
            >
              {isSpinning ? (
                <div className="flex items-center gap-3">
                  <RefreshCw className="animate-spin" size={24} />
                  <span>جاري الاختيار...</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Shuffle size={24} className="group-hover:rotate-12 transition-transform" />
                  <span>{winner ? 'اختيار تلميذ آخر' : 'اختر تلميذاً عشوائياً'}</span>
                </div>
              )}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
