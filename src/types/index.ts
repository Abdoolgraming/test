export interface Student {
  id: string;
  name: string;
  class: string;
  rollNumber: string;
}

export interface Class {
  id: string;
  name: string;
  teacher: string;
  subjects: string[];
}

export interface Subject {
  id: string;
  name: string;
  teacher: string;
  maxScore: number;
}

export interface Attendance {
  date: string;
  studentId: string;
  status: 'present' | 'absent';
}

export interface Result {
  id: string;
  studentId: string;
  subjectId: string;
  score: number;
  term: string;
  date: string;
}

export interface TimeTableEntry {
  day: string;
  period: number;
  subjectId: string;
  teacherId: string;
  classId: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
}