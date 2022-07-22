function mainView() {
    let html = '';
    html += /*html*/ `
    <button class="btns" onclick="setPage('movies')">Movies Section</button>
    <button class="btns" onclick="setPage('music')">Music Section</button>
    <button class="btns" onclick="setPage('addmovie')">Add Movie</button>
    <button class="btns" onclick="setPage('addmusic')">Add Music</button>
   <div>${model.view}</div>
    
    `;
    
    document.getElementById("showApp").innerHTML = html;
    
}

function setPage(page) {
    model.currentPage = page;
    pageSelect();
}

function pageSelect(page){
    if(model.currentPage == 'movies'){ showSubAppMovies();}
    if(model.currentPage == 'music'){ showSubAppMusic();}
    if(model.currentPage == 'addmovie'){ showSubAppAddMovie();}
    if(model.currentPage == 'addmusic'){ showSubAppAddMusic();}
}


function showSubAppMovies() {
    let html = '';
    html += `<h3>Movie Selection</h3>` 
    for( let i = 0; i < model.movies.length; i++) {
        html += `<div><strong>Tittel: </strong></div>
        <div onclick="deleteMovie(${i})" >${model.movies[i].title}</div>
                 <div><strong>Runtime: </strong>${model.movies[i].runtime}minutes</div>
                 <button onclick="deleteMovie(${i})" >Delete Movie</button>
                 <hr></hr>`
                
    }

    model.view = html;
    mainView();
}

function showSubAppMusic() {
    let html = '';
    html += `<h3>Music Selection</h3>`
    for (let i = 0; i < model.music.length; i++) {
            html += /*html*/ ` <div><strong>Title: </strong></div>
            <div>${model.music[i].title}</div>
            <div><strong>Runtime: </strong></div>
            <div>${model.music[i].runtime}minutes</div>
            <button onclick="deleteMusic(${i})">Delete Music</button>
            <hr> `
            
          
    } ;
    model.view = html;
    mainView();
}

function showSubAppAddMovie() {
    // let isChecked = false;
    let html = '';
    // let btnAdd = document.getElementById("btnAdd");
    // let input1 = document.getElementById("in1");
    // let input2 = document.getElementById("in2");
    // let input3 = document.getElementById("in3");
    
    html += /*html*/ `
    <div><strong>Add Movie</strong></div>
    <input id="in1" type="text" oninput="model.movieInputs.title= this.value"  placeholder="Title:" />
    <input id="in2" type="Number" oninput="model.movieInputs.runtime= this.value"  placeholder="Runtime:" />
    <input id="in3" type="Number" oninput="model.movieInputs.releaseyear = this.value"  placeholder="Releaseyear:" />
    <div style=font-weight:small;>All fields required</div>
    <!-- <button id="btnAdd" class="btns" disabled="true" onclick="addMovie()" >Add Movie</button> -->
    <button id="btnAdd" class="btns" onclick="addMovie()" >Add Movie</button>
     `
    
    
    
    
    // if(model.movieInputs.title == undefined || model.movieInputs.runtime == undefined || model.movieInputs.releaseyear == undefined) {
    //     alert('ikke godkjent')
    // }else {
    //     alert()
    // }
    
    // if(isChecked) {
    //     alert(true)
    // }else 
    // {
    //     '❌'
    // };
     
model.view = html;
mainView();
}





// temp storage --
//document.getElementById("btnAdd").disabled = false;
// ${isChecked}
//
// '✅'
//