/* uma funçao basica onde criamos uam operação somatoria
entre x1 e x2*/
function somar(x1, x2){
    return x1 + x2
}
let resultado = somar(1, 2);
console.log(resultado);

/* Uma funçao dentro da função, o eval é uma funçao criada pelo js (ou seja uma função nativa) para interpretar
sinais e indentificar operaçoes*/

function calcular(y1, y2, operador){

    return eval(`${y1} ${operador} ${y2}`);
    
    }
    let resposta = calcular(1, 2, "+");
    
    
    console.log(resposta);

    /* Uma funçao anonima, é uma função que não possui nome, que é executada apenas na hora que
    ela é criada, sem aparecer novamente no codigo*/

(function (y1, y2, operador){

    return eval(`${y1} ${operador} ${y2}`);
    
    })(1, 2, "+");

/* Uma funçao anonima, é uma função que não possui nome, que é executada apenas na hora que
    ela é criada, sem aparecer novamente no codigo*/
 let calc = (z1, z2, operador) => {

        return eval(`${z1} ${operador} ${z2}`);
        
        }
        let respostaIII = calc(1, 2, "+");
        
        
        console.log(respostaIII);
    
    
    
   