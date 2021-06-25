"use strict";

//alert('hello');

//const result = confirm("Are you here?");
//console.log(result);

//const answer = +prompt("What is your age?", "18");
//console.log(answer + 5);

//const answers = [];
//answers [0] = prompt('What is your name?', '');
//answers [1] = prompt('What is your surname?', '');
//answers [2] = prompt('How old are you?', '');

//document.write(answers);

//const category = 'toys';

//console.log(`https://someurl.com/${category}/5`);

//const user = "Ivan";
//alert (`Hello, ${user}`);
    
//console.log('arr' + " - object" );

// const isChecked = false,
 //      isClose = false;
//console.log(isChecked || !isClose);

//console.log (2 + 2 * 2 == 8);

const numberOfFilms = +prompt ('Сколько фильмов вы уже смотрели?','');
console.log(numberOfFilms);

const personalMovieDB = {
      count: numberOfFilms,
      movies: {},
      actors:{},
      genres: [],
      privat: false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?','');

personalMovieDB.movies [a] = b;
personalMovieDB.movies [c] = d;

console.log(personalMovieDB);