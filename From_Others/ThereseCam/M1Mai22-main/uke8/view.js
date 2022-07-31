function view(){
    let html = '';
    html += `<button onclick="changePage('songs')"> vis Sanger </button>
    <button onclick="changePage('movies')"> vis Filmer </button>
    <button onclick="changePage('addmovies')"> legg til Filmer </button>
    <div>${model.view} </div>
    `
    document.getElementById('output').innerHTML = html
}
function changePage(page){
    model.currentPage = page;
    updateView()
}
function updateView(){
    if(model.currentPage == 'movies') showMovies();
    if(model.currentPage == 'songs') showSongs();
    if(model.currentPage == 'addmovies') addMovieView();
}

function addMovieView(){
    let html = `tittel: <input type="text" oninput="model.movieInputs.title = this.value"><br>
    år: <input type="text" oninput="model.movieInputs.year = this.value"><br>
    lengde: <input type="text" oninput="model.movieInputs.duration = this.value"> <br>
    <button onclick="addMovie()"> legg til</button>`
    model.view = html
    view()
}

function showMovies(){
    let html = 'FILMER';
    for(let i = 0; i < model.movies.length; i++){
        html += `<div> 
        tittel: ${model.movies[i].title}

        <button onclick="deleteMovie(${i})"> fjern film</button> </div> <hr>
       `
    }
    model.view = html;
    view();
}
function showSongs(){
    let html = 'SANGER';
    for(let i = 0; i < model.songs.length; i++){
        html += `<div> tittel: ${model.songs[i].title} </div>`
    }
    model.view = html;
    view();

}