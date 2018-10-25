/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 



// Get the average of all rates with 2 decimals 
function ratesAverage(array){
  var sum = array.reduce(function(accum,currentValue) {
    var rate = accum + currentValue.rate;
    return rate;
  },0);
  return sum/array.length;
}

// Get the average of Drama Movies
function getDramaMovies(array){
  var filtered = array.filter(function(x){
    return x.genre.indexOf('Drama') > -1;
  })
}

function dramaMoviesRate(array){
  var filtered = array.filter(function(x){
    if (x.genre.indexOf('Drama') === -1) {
      return undefined;
    } else {
      return x.genre.indexOf('Drama') > -1;
    }
  });
  if (filtered.length === 0) {
    return undefined;
  } else {
    return Math.round(ratesAverage(filtered) * 100) / 100;
  }
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
var dramaMovies = getDramaMovies(movies);

function howManyMovies(dramaMovies){
  var filtered = dramaMovies.filter(function(x){
    if (x.director.indexOf('Steven Spielberg') === -1) {
      return undefined;
    } else {
      return x.director.indexOf('Steven Spielberg') > -1;
    }
  });
  if (filtered.length === 0) {
    return undefined;
  } else {
    return 'Steven Spielberg directed ' + filtered.length + ' drama movies!'
    ;
  }
}

// Order by title and print the first 20 titles
var sortedMovies = movies.title.sort(function(a,b){
  if (title.a > title.b) return -1;
  if (title.a < title.b) return 1;
  return 0;
});

function orderAlphabetically() {

}


// Best yearly rate average
function bestYearAvg() {
  
}