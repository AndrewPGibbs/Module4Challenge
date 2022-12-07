function showScore() {
    var score = JSON.parse(localStorage.getItem("highScore"));
    score.sort( function (x, y) { return y.score - x.score;} );
     for( var i = 0; i<score.length; i++) {
        var scoreList = document.createElement('li');
     }
}