import React from 'react';
import StudentList from './StudentList';
import StudentForm from './StudentForm';

const Students: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Students Management</h1>
      <StudentForm />
      <StudentList />
    </div>
  );
};

export default Students;