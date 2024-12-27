import React, { useState } from 'react';
import { storage, STORAGE_KEYS } from '../../utils/storage';
import type { Student } from '../../types';

const StudentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    class: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newStudent: Student = {
      id: crypto.randomUUID(),
      ...formData
    };
    storage.add(STORAGE_KEYS.STUDENTS, newStudent);
    setFormData({ name: '', rollNumber: '', class: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700">Roll Number</label>
          <input
            type="text"
            id="rollNumber"
            value={formData.rollNumber}
            onChange={(e) => setFormData(prev => ({ ...prev, rollNumber: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="class" className="block text-sm font-medium text-gray-700">Class</label>
          <input
            type="text"
            id="class"
            value={formData.class}
            onChange={(e) => setFormData(prev => ({ ...prev, class: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Student
        </button>
      </div>
    </form>
  );
};

export default StudentForm;