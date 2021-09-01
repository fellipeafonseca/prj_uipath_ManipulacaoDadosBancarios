var dados = [
    ['456321', 'Pedro', 'Silva', 'pedro@iprocess.com.br', '(88) 98870-1884'],
    ['965124', 'Maria', 'Aparecida', 'maria@iprocess.com.br', '(87) 98453-5369'],
    ['742639', 'Carlos', 'Figueiredo', 'carlos@iprocess.com.br', '(71) 99880-1738'],
    ['562134', 'Jonas', 'Andrade', 'jonas@iprocess.com.br', '(47) 98818-7144'],
    ['918392', 'Carla', 'Borges', 'carla@iprocess.com.br', '(71) 99346-9642'],

    ['260491', 'Danilo', 'Batista', 'danilo@iprocess.com.br', '(65) 98944-7657'],
    ['321456', 'Gabriel', 'Santos', 'gabriel@iprocess.com.br', '(67) 99458-7855'],
    ['124965', 'Mariana', 'Souza', 'mariana@iprocess.com.br', '(91) 98987-4423'],
    ['639742', 'João', 'Pereira', 'joao@iprocess.com.br', '(51) 99775-0645'],
    ['134562', 'Lucas', 'Rodrigues', 'lucas@iprocess.com.br', '(86) 98826-2588'],

    ['392918', 'Carolina', 'Oliveira', 'carolina@iprocess.com.br', '(68) 99296-8571'],
    ['491260', 'Cristina', 'Lima', 'cristina@iprocess.com.br', '(84) 98789-2327']
];

var tamanhoPagina = 5;
var pagina = 0;

function paginar() {
    $('table > tbody > tr').remove();
    var tbody = $('table > tbody');
    for (var i = pagina * tamanhoPagina; i < dados.length && i < (pagina + 1) *  tamanhoPagina; i++) {
        tbody.append(
            $('<tr>')
                .append($('<td>').append($('<div>').append(dados[i][0])))
                .append($('<td>').append($('<div>').append(dados[i][1])))
                .append($('<td>').append($('<div>').append(dados[i][2])))
                .append($('<td>').append($('<div>').append(dados[i][3])))
                .append($('<td>').append($('<div>').append(dados[i][4])))
        )
    }
    $('#numeracao').text('Página ' + (pagina + 1) + ' de ' + Math.ceil(dados.length / tamanhoPagina));
}

function ajustarBotoes() {
    // $('#proximo').prop('class', (dados.length <= tamanhoPagina || pagina > dados.length / tamanhoPagina - 1) ? 'disabled' : null);
    // $('#anterior').prop('class', (dados.length <= tamanhoPagina || pagina == 0) ? 'disabled' : null);

    if (dados.length <= tamanhoPagina || pagina > dados.length / tamanhoPagina - 1) {
        $('#proximo').remove();
    } else {
        if (!$('#proximo').length) {
            $('.buttons').append( '<button id="proximo">Próximo &rsaquo;</button>' );
            criarBotaoProximo();
        } 
    }

    if (dados.length <= tamanhoPagina || pagina == 0) {
        $('#anterior').remove();
    } else {
        if (!$('#anterior').length) {
            $('.buttons').prepend( '<button id="anterior">&lsaquo; Anterior</button>' );
            criarBotaoAnterior();
        }
    }
}

function criarBotaoProximo() {
    $('#proximo').click(function() {
        if (pagina < dados.length / tamanhoPagina - 1) {
            pagina++;
            paginar();
            ajustarBotoes();
        }
    });
}

function criarBotaoAnterior() {
    $('#anterior').click(function() {
        if (pagina > 0) {
            pagina--;
            paginar();
            ajustarBotoes();
        }
    });
}

$(function() {
    criarBotaoProximo();
    criarBotaoAnterior();
    paginar();
    ajustarBotoes();
});