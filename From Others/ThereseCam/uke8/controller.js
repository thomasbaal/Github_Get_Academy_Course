function addMovie(){
    model.movies.push(model.movieInputs);
    showMovies();
}

function deleteMovie(index){
    model.movies.splice(index, 1);
    showMovies();

}

function change(index){
    model.movies[index].title = 'Endret'
}