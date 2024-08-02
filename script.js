const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você trabalha em uma empresa que realiza pesquisas envolvendo a desenvoltura genética e você é convidado e realizar a parte de testes de uma dessas pesquisas, uma droga potencializadora. Nada é certo ainda sobre os efeitos colaterais das pessoas em contato com essa droga, então você deve decidir entre:",
        alternativas: [
            {
                texto: "Realizar uma convocação com a comunidade e esclarecer o que virá a seguir, mas se negarem a participação você pode ser demitido e corre o risco de ser preso por querer realizar tal experimento.",
                afirmacao: "Você"
            },
            {
                texto: "Você pode simplesmente chamar um grupo de pessoas e fazê-las ingerir essa droga sem que elas saibam, iniciando assim o experimento.",
                afirmacao: "Você"
            }
        ]
    },
    {
        enunciado: "Você decide ir atrás de um grupo de pessoas com deficiências mentais leves. Assim você pode descobrir se essa droga apenas aprimora a característica mais forte, e se ela pode anular doenças já existentes. O grupo está em sua posse neste momento",
        alternativas: [
            {
                texto: "Agora com as cobaias e as doses em mãos você decide injetar pequenas doses, aplicando em uma pessoa a cada semana para ter alguma reação.",
                afirmacao: "é"
            },
            {
                texto: "Você tranca aquelas pessoas contra a própria vontade e realiza injeta a droga mesmo assim, afinal, é pelo bem da ciência.ocê tranca aquelas pessoas contra a própria vontade e realiza injeta a droga mesmo assim, afinal, é pelo bem da ciência.",
                afirmacao: "é"
            }
        ]
    },
    {
        enunciado: "Ao injetar a droga contra a vontade daquelas pessoas elas apresentam um comportamento agressivo elevado, separando cada um por si. Com pouco tempo da injeção as pessoas sem exceção apresentaram a perca de consciência (entraram em um sono profundo):",
        alternativas: [
            {
                texto: "Você apenas espera para analisar o que virá acontecer, se eles continuarem nesse instinto primitivo você simplesmente irá abandonar eles na Índia.",
                afirmacao: "taxado como"
            },
            {
                texto: "Você injetou mais droga na corrente sanguínea deles , mas como o corpo deles já haviam recebido uma dose anteriormente eles oscilaram entre picos de adrenalina absurdas. Resultando assim na morte instantânea de alguns deles, aqueles que sobreviveram te viram como uma ameaça",
                afirmacao: "taxado como"
            }
        ]
    },
    {
        enunciado: "Você descontente com o resultado decide aumentar a dose, acreditando que ela anteriormente serviu apenas para escandalizar os ânimos primitivos deles.",
        alternativas: [
            {
                texto: "Você soltou eles na Índia como forma de reiniciar a pesquisa, eles começaram a fazer e vender comida na beira da rua (a procedência dos alimentos é extremamente duvidosa).",
                afirmacao: "um ciêntista medíocre que perde oportunidades."
            },
            {
                texto: "Você os alimentou com mais uma dose",
                afirmacao: "uma pessoa como sérios problemas pisiquiátricos (a droga será injetada em você desta vez)"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Ao final...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
