export const STORAGE_KEYS = {
  STUDENTS: 'rms_students',
  CLASSES: 'rms_classes',
  SUBJECTS: 'rms_subjects',
  ATTENDANCE: 'rms_attendance',
  RESULTS: 'rms_results',
  TIMETABLE: 'rms_timetable',
  ANNOUNCEMENTS: 'rms_announcements',
  USERS: 'rms_users',
  CURRENT_USER: 'rms_current_user',
  ASSESSMENT_CONFIG: 'rms_assessment_config',
  SPECIAL_NEEDS: 'rms_special_needs'
};

export const storage = {
  get: <T>(key: string): T[] => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  },
  
  set: <T>(key: string, data: T): void => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  
  add: <T>(key: string, item: T): void => {
    const items = storage.get<T>(key);
    items.push(item);
    storage.set(key, items);
  },
  
  update: <T extends { id: string }>(key: string, id: string, updates: Partial<T>): void => {
    const items = storage.get<T>(key);
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      items[index] = { ...items[index], ...updates };
      storage.set(key, items);
    }
  },
  
  remove: <T extends { id: string }>(key: string, id: string): void => {
    const items = storage.get<T>(key);
    const filtered = items.filter(item => item.id !== id);
    storage.set(key, filtered);
  },

  // Initialize default data
  init: () => {
    // Add sample data for testing
    if (storage.get(STORAGE_KEYS.STUDENTS).length === 0) {
      storage.set(STORAGE_KEYS.STUDENTS, [
        { id: '1', name: 'John Doe', rollNumber: '001', class: '10A' },
        { id: '2', name: 'Jane Smith', rollNumber: '002', class: '10A' }
      ]);
    }

    if (storage.get(STORAGE_KEYS.SUBJECTS).length === 0) {
      storage.set(STORAGE_KEYS.SUBJECTS, [
        { id: '1', name: 'Mathematics', teacher: 'Mr. Johnson', maxScore: 100 },
        { id: '2', name: 'Science', teacher: 'Mrs. Davis', maxScore: 100 }
      ]);
    }

    if (storage.get(STORAGE_KEYS.ATTENDANCE).length === 0) {
      storage.set(STORAGE_KEYS.ATTENDANCE, [
        { date: new Date().toISOString().split('T')[0], studentId: '1', status: 'present' },
        { date: new Date().toISOString().split('T')[0], studentId: '2', status: 'present' }
      ]);
    }

    if (storage.get(STORAGE_KEYS.RESULTS).length === 0) {
      storage.set(STORAGE_KEYS.RESULTS, [
        { id: '1', studentId: '1', subjectId: '1', score: 85, term: '1', date: new Date().toISOString() }
      ]);
    }

    if (storage.get(STORAGE_KEYS.ANNOUNCEMENTS).length === 0) {
      storage.set(STORAGE_KEYS.ANNOUNCEMENTS, [
        {
          id: '1',
          title: 'Welcome to New Term',
          content: 'The new academic term starts next week.',
          date: new Date().toISOString()
        }
      ]);
    }

    if (storage.get(STORAGE_KEYS.ASSESSMENT_CONFIG).length === 0) {
      storage.set(STORAGE_KEYS.ASSESSMENT_CONFIG, [
        { id: '1', type: 'CW', isActive: true, maxScore: 20 },
        { id: '2', type: 'HW', isActive: true, maxScore: 10 },
        { id: '3', type: 'CA', isActive: true, maxScore: 30 },
        { id: '4', type: 'PROJ', isActive: true, maxScore: 40 },
        { id: '5', type: 'EXAM', isActive: true, maxScore: 100 }
      ]);
    }
  }
};