function deleteMovie(index) {
    model.movies.splice(index, 1);
   showSubAppMovies();
}

function deleteMusic(index) {
    model.music.splice(index, 1);
    showSubAppMusic();
}

function addMovie() {
    model.movies.push(model.movieInputs)
    console.log('--------Added Movie to Database------');
    console.log(model.movieInputs);
    showSubAppAddMovie();
}

function btnEnableOrDisable(btnStatus) {
    buttonStatus = btnStatus
     console.log(btnStatus);
 
 }