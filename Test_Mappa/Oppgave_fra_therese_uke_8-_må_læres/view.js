


function view() {
    let html = ''; // start med å blanke ut.
    
    html += /*html*/ `
    <button onclick="viewNewPage('songs')"> Show Song Page </button> <br/> <!-- sender med parameteret på alle knapper-->
           <button onclick="viewNewPage('movies')"> Show Movies Page </button> <br/>
           <button onclick="viewNewPage('addmovies')"> Add Custom Movies </button> <br/>
           <button onclick="viewNewPage('deletemovie')"> Delete Movies </button> <br/>
           <hr style="width: 250px">
           <button onclick="viewNewPage('addsongs')"> Add Custom Songs </button> <br/>
           <div>${model.view} </div> <!-- fra start så er denne blank , !! når man trykker fks på en av knappene så blir det hente opp i denne div tekst felt.--> 
    
    
    `

    // document.getElementById("showInfo") = showInfoDiv;

    document.getElementById("showInfo").innerHTML = html;
}
function viewNewPage(pagetoview) {
        model.currentPage = pagetoview; // her kan man bestemme hva som skal gjøres med parameteret som er tatt med.
        console.log(pagetoview);
        updateView()
}

function updateView() {
    if(model.currentPage == 'songs') showSongs();
    if(model.currentPage == 'movies') showMovies();
    if(model.currentPage == 'addmovies') addMoviesView();
    if(model.currentPage == 'addsongs') addSongsView();
}

function addMoviesView() {
let html = `Tittel: <input type="text" oninput="model.movieInputs.title = this.value"><br>
<br>
år: <input type="text" oninput="model.movieInputs.year = this.value"<br>
<br>
lengde: <input type="Number" oninput="model.movieInputs.runtime = this.value"><br> 
<br>
<button onclick="addMovie()"> legg til film </button> <br>`
model.view = html
view();
}

function addSongsView() {
    let html = `Tittel: <input type="text" oninput="model.songInputs.title = this.value"><br/>
    Lengde: <input type="Number" oninput="model.songInputs.length = this.value"><br/>
    Artist: <input type="text" oninput="model.songInputs.artist = this.value"><br/>
    <button onclick="addSong()"> Legg til film </button> <br/>`
    model.view = html
    view();
}




function showMovies() {
let html = 'Filmer:';
for (let i = 0; i < model.movies.length; i++) {
    html += `<div>${model.movies[i].title +  ' - ' + ' Released: ' + model.movies[i].releaseyear}</div>`
    console.log(i);

    indexed = i;
}
model.view = html
view();
}

function showSongs() {
    let html = 'Sanger';
    for (let i = 0; i < model.songs.length; i++) {
        html += `<div>${model.songs[i].title} </div>`
       
    }
model.view = html;
view();
}

