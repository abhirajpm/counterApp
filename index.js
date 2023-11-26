let firstScoreEl = document.getElementById("score-1")
let secondScoreEl = document.getElementById("score-2")
let firstScore=0
let secondScore=0
function incFirstScoreByOne(){
    firstScore+=1
    firstScoreEl.textContent=firstScore
}
function incSecondScoreByOne(){
    secondScore+=1
    secondScoreEl.textContent=secondScore
}
function incFirstScoreByTwo(){
    firstScore+=2
    firstScoreEl.textContent=firstScore
}
function incSecondScoreByTwo(){
    secondScore+=2
    secondScoreEl.textContent=secondScore
}
function incFirstScoreByThree(){
    firstScore+=3
    firstScoreEl.textContent=firstScore
}
function incSecondScoreByThree(){
    secondScore+=3
    secondScoreEl.textContent=secondScore
}
function reset(){
    firstScore=0
    secondScore=0
    firstScoreEl.textContent=0
    secondScoreEl.textContent=0
}