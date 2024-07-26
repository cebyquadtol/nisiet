function findPosterById(id) {
    return posters.find(poster => poster.id === id);
}

// Example usage:
let foundPoster = findPosterById(1);
console.log(foundPoster); // Output: { id: 1, title: 'First Poster' }
