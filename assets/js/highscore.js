function showScore() {
    var score = JSON.parse(localStorage.getItem("highScore"));
    score.sort( function (x, y) { return y.score - x.score;} );
    
}