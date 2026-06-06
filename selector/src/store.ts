import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface Student {
  id: string;
  name: string;
  classId: string;
}

export interface ClassGroup {
  id: string;
  name: string;
}

const CLASSES_KEY = 'app_classes';
const STUDENTS_KEY = 'app_students';

export const useAppStore = () => {
  const [classes, setClasses] = useState<ClassGroup[]>(() => {
    const saved = localStorage.getItem(CLASSES_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [students, setStudents] = useState<Student[]>(() => {
    const saved = localStorage.getItem(STUDENTS_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(CLASSES_KEY, JSON.stringify(classes));
  }, [classes]);

  useEffect(() => {
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));
  }, [students]);

  const addClass = (name: string) => {
    const newClass = { id: uuidv4(), name };
    setClasses([...classes, newClass]);
    return newClass;
  };

  const removeClass = (id: string) => {
    setClasses(classes.filter((c) => c.id !== id));
    setStudents(students.filter((s) => s.classId !== id));
  };

  const addStudent = (name: string, classId: string) => {
    const newStudent = { id: uuidv4(), name, classId };
    setStudents([...students, newStudent]);
    return newStudent;
  };

  const removeStudent = (id: string) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return {
    classes,
    students,
    addClass,
    removeClass,
    addStudent,
    removeStudent,
  };
};
