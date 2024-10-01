import React from 'react';

const FavoriteList = (props) => {
  const students = props.students;
  const setStudents = props.setStudents;

  const favorites = props.favorites;
  const setFavorites = props.setFavorites;

  // Function to remove a student from the favorites list
  const removeFavorite = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex flex-col items-center p-10">
      <h2 className="text-3xl font-bold text-white mb-8">Favorite Students</h2>

      {favorites.length > 0 ? (
        <ul className="w-full max-w-lg bg-white rounded-lg shadow-lg p-4 space-y-4">
          {favorites.map(favorite => (
            <div key={favorite.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">
              <li className="text-lg font-medium">{favorite.name}</li>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg"
                onClick={() => removeFavorite(favorite.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <p className="text-white text-xl">No favorite students yet.</p>
      )}
    </div>
  );
};

export default FavoriteList;
