// star wars, LIVRE, acao, aventura, fantasia, ficcao cientifica
// panico na floresta, 14, terror, thriller
// senhor dos aneis, 12, aventura, drama, fantasia
// perfect blue, 16, drama, misterio, terror, thriller
// akira, 14, acao, ficcao cienfica


let campoIdade;
let campoFantasia;

function setup() {
    createCanvas(400, 400);
    campoIdade = createInput("15");
    campoFantasia = createCheckbox("Gosta de Fantasia ?");
}
function draw() {
    background(220);
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia) {
    if(idade >= 10) {
        if(idade >= 14) {
            return "O menino que descobriu o vento";
        } else {
            if(gostaDeFantasia){
                return "As aventuras de Pi";
            } else {
                return "Depois da chuva";
            }
        }
    } else {
        return "A viagem de Chihiro";
    }
}
