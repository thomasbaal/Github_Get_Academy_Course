function addMovie() {
    model.movies.push(model.movieInputs);
    showMovies();
}

function addSong() {
    model.songs.push(model.songInputs);
    showSongs();
}

function deleteMovie(index) {
    model.movies.splice(index, 1);
}