
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

let respostas_dadas = [];

// to store the data I used forEach() + push()
let infodatabase = [];

imgdatabase.forEach(function(addvalue){
    infodatabase.push(addvalue);
});

console.log(infodatabase);


// to change the quiz images
let IndexImg = 0;

function respondeu(resposta) {
    if (IndexImg < imgdatabase.length) {
        IndexImg++;
        respostas_dadas.push(resposta)
        console.log(respostas_dadas)
        if (respostas_dadas.length == 9) {
            // TODO: Antes de mudarmos para a pagina de resultado. Precisamos 
            // salvar as respostas do usuario.
            // Lembrete: localStorage, JSON.stringify

            localStorage.setItem('respostas_salvas', JSON.stringify(respostas_dadas));         

            window.location.replace("resultado.html");
        } else {
            document.getElementById('img').src = "./assets/img/" + imgdatabase[IndexImg];
        }
    }
};

// to restart the game
function playAgain () {
    window.location.replace("index.html");
}




