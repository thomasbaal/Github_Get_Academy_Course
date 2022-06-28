


function view() {
    let html = ''; // start med å blanke ut.
    
    html += /*html*/ `       
    <button onclick="viewNewPage('songs')"> Show Song Page </button> <!-- sender med parameteret på alle knapper-->
           <button onclick="viewNewPage('movies')"> Show Movies Page </button>
           <button onclick="viewNewPage('addmovies')"> Add Custom Movies </button>
           <button onclick="viewNewPage('addsongs')"> Add Custom Songs </button>
           <div>${model.view} </div> <!-- fra start så er denne blank -->
    
    
    
    `
    // html.style.display = grid;
    document.getElementById("showInfo").innerHTML = html;
}
function viewNewPage(pagetoview) {
        model.currentPage = pagetoview; 
        updateView()
}

function updateView() {
    if(model.currentPage == 'songs') showSongs();
    if(model.currentPage == 'movies') showMovies();
    if(model.currentPage == 'addmovies') addmoviesView();
    if(model.currentPage == 'addsongs') addSongsView();
}


