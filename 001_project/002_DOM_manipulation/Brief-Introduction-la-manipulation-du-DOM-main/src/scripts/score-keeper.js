let scoreP1 = 0;
let scoreP2 = 0;
let maxScore = 0;
let winner = '';
document.getElementById('maxScore').addEventListener(value,updateScore())
function addpoint(Player){
    if(Player == 1 && scoreP2 < maxScore && scoreP1 < maxScore){
        scoreP1++;
        updateScore()
        if(scoreP1 >= maxScore){
            winner = 'joueur 1';
            return alert('le Joueur 1 a gagné')
        }
    }
    else if(Player == 2 && scoreP1 < maxScore && scoreP2 < maxScore){
        scoreP2++;
        updateScore()
        if(scoreP2 >= maxScore){
            winner = 'joueur 2';
            return alert('le Joueur 2 a gagné')
        }
    }
    else if(scoreP1 >= maxScore || scoreP2 >= maxScore){
        return alert('le joueur ' + winner + ' a deja gagné')
    }
    else{
        return alert('function addpoint(invalid player)');
    }
}
function updateScore(){
    document.getElementById('scorePointP1').textContent = '' + scoreP1;
    document.getElementById('scorePointP2').textContent = '' + scoreP2;
    document.getElementById('maxScorePointP1').textContent = '' + maxScore;
    document.getElementById('maxScorePointP2').textContent = '' + maxScore;
}
function maxScoreReset(){
    maxScore = 0;
    scoreP1 = 0;
    scoreP2 = 0;
    winner = '';
    updateScore();
    document.getElementById('maxScore').value = 0;
}
function maxScoreUpdate(){
    maxScore = document.getElementById('maxScore').value;
    scoreP1 = 0;
    scoreP2 = 0;
    updateScore();
}