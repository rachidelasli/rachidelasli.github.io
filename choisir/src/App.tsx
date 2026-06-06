import { useState, useEffect } from 'react';

interface Student {
  id: number;
  name: string;
}

interface Group {
  id: number;
  name: string;
  color: string;
  students: Student[];
}

function App() {
  const [groups, setGroups] = useState<Group[]>([
    {
      id: 1,
      name: 'الفوج الأول',
      color: 'bg-blue-500',
      students: [],
    },
    {
      id: 2,
      name: 'الفوج الثاني',
      color: 'bg-green-500',
      students: [],
    },
  ]);

  const [newStudentName, setNewStudentName] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<{
    student: Student;
    group: Group;
  } | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [selectedGroupForPick, setSelectedGroupForPick] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<'pick' | 'settings'>('pick');

  // PWA Install Prompt
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setShowInstallPrompt(false);
    }
    setDeferredPrompt(null);
  };

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('studentGroups');
    if (savedData) {
      setGroups(JSON.parse(savedData));
    }
  }, []);

  // Save data to localStorage whenever groups change
  useEffect(() => {
    localStorage.setItem('studentGroups', JSON.stringify(groups));
  }, [groups]);

  const addStudent = () => {
    if (newStudentName.trim() && selectedGroup !== null) {
      const newStudent: Student = {
        id: Date.now(),
        name: newStudentName.trim(),
      };

      setGroups((prev) =>
        prev.map((group) =>
          group.id === selectedGroup
            ? { ...group, students: [...group.students, newStudent] }
            : group
        )
      );
      setNewStudentName('');
    }
  };

  const removeStudent = (groupId: number, studentId: number) => {
    setGroups((prev) =>
      prev.map((group) =>
        group.id === groupId
          ? { ...group, students: group.students.filter((s) => s.id !== studentId) }
          : group
      )
    );
  };

  const selectRandomStudent = () => {
    // Only select from the chosen group
    if (selectedGroupForPick === null) {
      return;
    }

    const chosenGroup = groups.find(g => g.id === selectedGroupForPick);
    if (!chosenGroup || chosenGroup.students.length === 0) {
      return;
    }

    setIsAnimating(true);
    setShowConfetti(false);
    setSelectedStudent(null);

    // Animation effect - cycle through students in the chosen group
    let count = 0;
    const maxCount = 20;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * chosenGroup.students.length);
      setSelectedStudent({ 
        student: chosenGroup.students[randomIndex], 
        group: chosenGroup 
      });
      count++;

      if (count >= maxCount) {
        clearInterval(interval);
        const finalIndex = Math.floor(Math.random() * chosenGroup.students.length);
        setSelectedStudent({ 
          student: chosenGroup.students[finalIndex], 
          group: chosenGroup 
        });
        setIsAnimating(false);
        setShowConfetti(true);
        
        // Hide confetti after 3 seconds
        setTimeout(() => setShowConfetti(false), 3000);
      }
    }, 100);
  };

  const clearAllStudents = () => {
    if (confirm('هل أنت متأكد من حذف جميع التلاميذ؟')) {
      setGroups((prev) =>
        prev.map((group) => ({ ...group, students: [] }))
      );
      setSelectedStudent(null);
      setSelectedGroupForPick(null);
    }
  };

  const getTotalStudents = () => {
    return groups.reduce((acc, group) => acc + group.students.length, 0);
  };

  const getStudentsCountForGroup = (groupId: number) => {
    return groups.find(g => g.id === groupId)?.students.length || 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-4" dir="rtl">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: ['#ff0', '#f00', '#0f0', '#00f', '#f0f', '#0ff'][
                    Math.floor(Math.random() * 6)
                  ],
                }}
              />
            </div>
          ))}
        </div>
      )}

      <div className="max-w-2xl mx-auto">
        {/* Install Prompt */}
        {showInstallPrompt && (
          <div className="fixed top-4 left-4 right-4 z-40 bg-yellow-400 rounded-xl shadow-lg p-4 flex items-center justify-between">
            <div className="text-gray-800 text-sm">
              <span className="font-bold">📱</span> ثبت التطبيق على هاتفك
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowInstallPrompt(false)}
                className="px-3 py-1 text-gray-600 hover:bg-yellow-500 rounded-lg"
              >
                لاحقاً
              </button>
              <button
                onClick={handleInstall}
                className="px-4 py-1 bg-gray-800 text-white rounded-lg font-medium"
              >
                تثبيت
              </button>
            </div>
          </div>
        )}

        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
            🎲 اختيار تلميذ عشوائي
          </h1>
          <p className="text-blue-100 text-sm md:text-base">
            اختر تلميذًا عشوائيًا من الأفواج
          </p>
        </header>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-6 bg-white/20 backdrop-blur-sm rounded-xl p-2">
          <button
            onClick={() => setCurrentPage('pick')}
            className={`flex-1 py-3 rounded-lg font-bold transition-all ${
              currentPage === 'pick'
                ? 'bg-white text-purple-600 shadow-lg'
                : 'text-white hover:bg-white/20'
            }`}
          >
            🎯 صفحة الاختيار
          </button>
          <button
            onClick={() => setCurrentPage('settings')}
            className={`flex-1 py-3 rounded-lg font-bold transition-all ${
              currentPage === 'settings'
                ? 'bg-white text-purple-600 shadow-lg'
                : 'text-white hover:bg-white/20'
            }`}
          >
            ⚙️ الإعدادات
          </button>
        </div>

        {/* Pick Page */}
        {currentPage === 'pick' && (
          <div className="space-y-6">
            {/* Selected Student Display */}
            {selectedStudent && (
              <div className="bg-white rounded-2xl shadow-2xl p-6 text-center transform transition-all duration-300">
                <div className="text-6xl mb-4">🏆</div>
                <p className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
                  التلميذ (ة) المختار(ة) :
                </p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
                  {selectedStudent.student.name}
                </h2>
                <p className={`text-white px-6 py-3 rounded-full inline-block text-lg font-bold ${selectedStudent.group.color}`}>
                  {selectedStudent.group.name}
                </p>
              </div>
            )}

            {/* Random Selection Button - Directly under selected student */}
            <button
              onClick={selectRandomStudent}
              disabled={isAnimating || selectedGroupForPick === null || getStudentsCountForGroup(selectedGroupForPick) === 0}
              className={`w-full py-4 rounded-xl text-xl font-bold text-white shadow-lg transform transition-all duration-200
                ${isAnimating || selectedGroupForPick === null || getStudentsCountForGroup(selectedGroupForPick) === 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 active:scale-95'
                }`}
            >
              {isAnimating ? '🔄 جاري الاختيار...' : '🎯 اختيار عشوائي'}
            </button>

            {/* Group Selection */}
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
                اختر الفوج
              </h3>
              <div className="flex gap-4 justify-center flex-wrap">
                {groups.map((group) => (
                  <button
                    key={group.id}
                    onClick={() => setSelectedGroupForPick(group.id)}
                    disabled={group.students.length === 0}
                    className={`px-6 py-3 rounded-xl font-bold text-white shadow-lg transform transition-all duration-200 min-w-[140px]
                      ${group.students.length === 0
                        ? 'bg-gray-300 cursor-not-allowed opacity-50'
                        : selectedGroupForPick === group.id
                        ? `${group.color} scale-105 ring-4 ring-white ring-opacity-50`
                        : `${group.color} opacity-80 hover:opacity-100 hover:scale-105`
                      }`}
                  >
                    <div className="text-lg">{group.name}</div>
                    <div className="text-sm opacity-90">{group.students.length} تلميذ</div>
                  </button>
                ))}
              </div>
              {selectedGroupForPick !== null && (
                <p className="text-center text-green-600 font-medium mt-4">
                  ✅ الفوج المحدد: {groups.find(g => g.id === selectedGroupForPick)?.name}
                </p>
              )}
            </div>

            {/* Quick Stats */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="flex justify-around text-white">
                {groups.map((group) => (
                  <div key={group.id} className="text-center">
                    <p className="text-2xl font-bold">{group.students.length}</p>
                    <p className="text-sm opacity-80">{group.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Settings Page */}
        {currentPage === 'settings' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4">إدارة التلاميذ</h3>
              <p className="text-gray-600 text-sm mb-4">
                أضف أو احذف التلاميذ من كل فوج
              </p>
            </div>

            {groups.map((group) => (
              <div
                key={group.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Group Header */}
                <div className={`${group.color} p-4`}>
                  <h3 className="text-xl font-bold text-white flex items-center justify-between">
                    <span>{group.name}</span>
                    <span className="bg-white/30 px-3 py-1 rounded-full text-sm">
                      {group.students.length} تلميذ
                    </span>
                  </h3>
                </div>

                {/* Add Student Form */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newStudentName}
                      onChange={(e) => setNewStudentName(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addStudent()}
                      placeholder="اسم التلميذ"
                      className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button
                      onClick={() => {
                        setSelectedGroup(group.id);
                        if (newStudentName.trim()) {
                          addStudent();
                        }
                      }}
                      disabled={!newStudentName.trim()}
                      className="px-6 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-bold transition-colors"
                    >
                      إضافة
                    </button>
                  </div>
                </div>

                {/* Students List */}
                <div className="p-4 max-h-64 overflow-y-auto">
                  {group.students.length === 0 ? (
                    <p className="text-gray-400 text-center py-4">
                      لا يوجد تلاميذ في هذا الفوج
                    </p>
                  ) : (
                    <ul className="space-y-2">
                      {group.students.map((student) => (
                        <li
                          key={student.id}
                          className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-gray-800">{student.name}</span>
                          <button
                            onClick={() => removeStudent(group.id, student.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-100 p-2 rounded-full transition-colors"
                            title="حذف"
                          >
                            ✕
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}

            {/* Clear All Button */}
            {getTotalStudents() > 0 && (
              <button
                onClick={clearAllStudents}
                className="w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-colors shadow-lg"
              >
                🗑️ حذف جميع التلاميذ
              </button>
            )}
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-8 text-white/60 text-sm">
          <p>تم التطوير بواسطة مساعد الذكاء الاصطناعي</p>
          <p className="mt-1">💡 يمكن تثبيت هذا التطبيق على هاتفك</p>
        </footer>
      </div>

      {/* Custom CSS for confetti animation */}
      <style>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti linear forwards;
        }
      `}</style>
    </div>
  );
}

export default App;
