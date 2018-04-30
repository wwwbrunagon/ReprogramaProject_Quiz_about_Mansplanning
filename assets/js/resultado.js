//localStorage guarda texto

respostas_do_usuario = JSON.parse(localStorage.getItem('respostas_salvas'));

const RESPOSTAS_CORRETAS = [
	1, // 1
	1, // 2
	1, // 3
	1, // 4
	0, // 5
	0, // 6
	1, // 7
	1, // 8
	0, // 9
	1  // 10
]



document.querySelectorAll('#acertos > p').forEach( function (item, index) {
 item.innerHTML = '<span> ' + ((index == 9) ?' ':' 0') + '' + (index+1) + ' </span> ' + ((RESPOSTAS_CORRETAS[index] === respostas_do_usuario[index]) ? 'ACERTOU' : 'ERROU') ;

});

let corretas_qtd = 0;

RESPOSTAS_CORRETAS.forEach((resposta_correta, index) => { 
	console.log({'resposta_correta': resposta_correta, 'index': index})
	if (respostas_do_usuario[index] === resposta_correta) {
		corretas_qtd++;
	}
})

document.querySelector('#resultado').innerText = corretas_qtd + ' ACERTOS'


// to restart the game
function playAgain () {
    window.location.replace("index.html");
}


