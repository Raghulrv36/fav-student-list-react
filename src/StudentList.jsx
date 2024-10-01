import React, { useState } from 'react';

const StudentList = (props) => {
  const students = props.students;
  const setStudents = props.setStudents;

  const favorites = props.favorites;
  const setFavorites = props.setFavorites;

  // useState for user input
  const [newStudent, setnewStudent] = useState('');

  // getting data from user input
  const handleChange = (event) => {
    setnewStudent(event.target.value);
  };

  // adding new student's name to students array
  function addStudent() {
    setStudents([...students, { id: students.length + 1, name: newStudent }]);
    setnewStudent(''); // clear input after adding
  }

  const addFavorite = (id) => {
    const selectedStudent = students.find((student) => student.id === id);
    const isAlreadyFavorite = favorites.some((favorite) => favorite.id === id);

    if (selectedStudent && !isAlreadyFavorite) {
      const updatedFavorites = [...favorites, selectedStudent];
      setFavorites(updatedFavorites);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-8">Student List</h2>

      <div className="mb-6 flex space-x-2">
        <input
          value={newStudent}
          onChange={handleChange}
          className="p-2 w-64 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-white"
          placeholder="Enter student name"
          type="text"
        />
        <button
          onClick={addStudent}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg"
        >
          Add Student
        </button>
      </div>

      <ul className="w-full max-w-lg bg-white rounded-lg shadow-lg p-4 space-y-4">
        {students.map((student) => (
          <div key={student.id} className="flex justify-between items-center">
            <li className="text-lg font-medium">{student.name}</li>
            <button
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                favorites.some((fav) => fav.id === student.id)
                  ? 'bg-green-500 text-white cursor-not-allowed'
                  : 'bg-yellow-500 text-white hover:bg-yellow-600'
              }`}
              onClick={() => addFavorite(student.id)}
              disabled={favorites.some((fav) => fav.id === student.id)}
            >
              {favorites.some((fav) => fav.id === student.id)
                ? 'Favorited'
                : 'Add to Favorites'}
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
