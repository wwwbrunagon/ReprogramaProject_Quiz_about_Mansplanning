
let imgdatabase = [

    '01-sim.png',
    '02-sim.png',
    '03-sim.png',
    '04-sim.png',
    '05-nao.png',
    '06-nao.png',
    '07-sim.png',
    '08-sim.png',
    '09-nao.png',
    '10-sim.png'
];


// to store the data I used forEach() + push()
let infodatabase = [];

imgdatabase.forEach(function(addvalue){
infodatabase.push(addvalue);
});

console.log(infodatabase);


// to change the quiz images
let IndexImg = 1;

function clickbtn() {
    if (IndexImg < 9) {
        IndexImg++;
        document.getElementById('img').src = "./assets/img/" + imgdatabase[IndexImg];
    } else {
    window.location.replace("resultado.html");
    }
};

// to restart the game
function playAgain () {
    window.location.replace("index.html");
}




