var movieList = [];
var programList = [];

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;

}

Movie.prototype.getData = function () {
    return this.title + ", " + this.genre + ", " + this.length;

}



// document.querySelector("#createMovie").addEventListener("click", createMovie) moze i ovako!!!!

document.querySelector("#createMovie").addEventListener("click", function () {
    createMovie()
})

function createMovie() {
    var movieTitleInput = document.querySelector("#movie-title");
    var movieLengthInput = document.querySelector("#movie-length");
    var genresSelect = document.querySelector("#movie-genre");
    var genreOption = genresSelect.options[genresSelect.selectedIndex].text;
    var movie = new Movie(movieTitleInput.value, genreOption, movieLengthInput.value);

    movieList.push(movie);

    makeList(movieList);

    var newEl = document.createElement("option");
    var newText = document.createTextNode(movie.title);
    newEl.appendChild(newText);
    var someList = document.querySelector("#movie-date");
    someList.appendChild(newEl);
}

var div = document.querySelector('.output');
div.appendChild
var list = document.createElement('ul');
div.appendChild(list)


function makeList(Arr) {
    var li = document.createElement('li');
    li.textContent = Arr[Arr.length - 1].getData();
    list.appendChild(li);
}

function Program(date) {
    this.date = new Date(date);

}
Program.prototype.getData = function () {
    return this.date;

}

document.querySelector("#createProgram").addEventListener("click", function (event) {
    createProgram();
})

function createProgram() {
    var date = document.querySelector("#date");
    var program = new Program(date.value);
    var newEl = document.createElement("option")
    var newText = document.createTextNode(date.value);
    newEl.appendChild(newText)
    var someList = document.querySelector("#program-list");
    someList.appendChild(newEl);
    programList.push(program);

}