import React, { useState } from 'react';
import { useAppStore, ClassGroup } from '../store';
import { Plus, Trash2, Users as UsersIcon, UserPlus, ChevronLeft } from 'lucide-react';

export default function ManageClasses() {
  const { classes, students, addClass, removeClass, addStudent, removeStudent } = useAppStore();
  const [newClassName, setNewClassName] = useState('');
  const [selectedClass, setSelectedClass] = useState<ClassGroup | null>(null);
  const [newStudentName, setNewStudentName] = useState('');

  const handleAddClass = (e: React.FormEvent) => {
    e.preventDefault();
    if (newClassName.trim()) {
      addClass(newClassName.trim());
      setNewClassName('');
    }
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (newStudentName.trim() && selectedClass) {
      addStudent(newStudentName.trim(), selectedClass.id);
      setNewStudentName('');
    }
  };

  const classStudents = selectedClass 
    ? students.filter(s => s.classId === selectedClass.id)
    : [];

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Classes List Section */}
      <div className={`w-full md:w-1/3 flex flex-col gap-4 ${selectedClass ? 'hidden md:flex' : 'flex'}`}>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[calc(100vh-12rem)] min-h-[400px]">
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <UsersIcon size={20} className="text-blue-600" />
              لائحة الأفواج
            </h2>
          </div>
          
          <div className="p-4 border-b border-gray-100">
            <form onSubmit={handleAddClass} className="flex gap-2">
              <input
                type="text"
                placeholder="اسم الفوج الجديد..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                value={newClassName}
                onChange={(e) => setNewClassName(e.target.value)}
              />
              <button
                type="submit"
                disabled={!newClassName.trim()}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="إضافة فوج"
              >
                <Plus size={20} />
              </button>
            </form>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            {classes.length === 0 ? (
              <div className="text-center text-gray-500 mt-10">
                لا توجد أفواج حالياً. قم بإضافة فوج جديد.
              </div>
            ) : (
              <ul className="space-y-1">
                {classes.map(c => (
                  <li key={c.id}>
                    <div 
                      className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedClass?.id === c.id 
                          ? 'bg-blue-50 border border-blue-200' 
                          : 'hover:bg-gray-50 border border-transparent'
                      }`}
                      onClick={() => setSelectedClass(c)}
                    >
                      <span className="font-semibold text-gray-800">{c.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                          {students.filter(s => s.classId === c.id).length} تلميذ
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if(window.confirm('هل أنت متأكد من حذف هذا الفوج؟ سيتم حذف جميع التلاميذ داخله.')) {
                              removeClass(c.id);
                              if(selectedClass?.id === c.id) setSelectedClass(null);
                            }
                          }}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded transition-colors"
                          title="حذف الفوج"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Students List Section */}
      <div className={`w-full md:w-2/3 flex flex-col gap-4 ${!selectedClass ? 'hidden md:flex' : 'flex'}`}>
        {!selectedClass ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center h-[calc(100vh-12rem)] min-h-[400px] text-gray-400">
            <UsersIcon size={64} className="mb-4 text-gray-300" />
            <p className="text-lg">الرجاء اختيار فوج من القائمة لعرض وإدارة تلاميذه</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[calc(100vh-12rem)] min-h-[400px]">
            <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center gap-3">
              <button 
                className="md:hidden text-gray-500 hover:text-gray-900"
                onClick={() => setSelectedClass(null)}
              >
                <ChevronLeft size={24} className="rtl:-scale-x-100" />
              </button>
              <h2 className="text-lg font-bold flex items-center gap-2">
                <span className="text-gray-500 font-normal text-sm">تلاميذ الفوج:</span>
                <span className="text-blue-600">{selectedClass.name}</span>
              </h2>
            </div>
            
            <div className="p-4 border-b border-gray-100 bg-blue-50/50">
              <form onSubmit={handleAddStudent} className="flex gap-2 max-w-md">
                <input
                  type="text"
                  placeholder="اسم التلميذ..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={!newStudentName.trim()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors font-medium"
                >
                  <UserPlus size={20} />
                  <span>إضافة</span>
                </button>
              </form>
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-gray-50/30">
              {classStudents.length === 0 ? (
                <div className="text-center text-gray-500 mt-10">
                  لا يوجد تلاميذ في هذا الفوج حالياً.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {classStudents.map((s, index) => (
                    <div 
                      key={s.id}
                      className="bg-white border border-gray-200 p-3 rounded-lg flex justify-between items-center shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-400 font-mono">{index + 1}</span>
                        <span className="font-medium text-gray-800">{s.name}</span>
                      </div>
                      <button
                        onClick={() => removeStudent(s.id)}
                        className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-1"
                        title="حذف التلميذ"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
