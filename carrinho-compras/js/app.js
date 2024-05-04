let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML ='';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar(){
// Recuperar valores: nome do produto, quantidade e valor.
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split ('R$')[1];
let quantidade = document.getElementById('quantidade').value;

//Calcular o preço, o nosso sub total
let preco = quantidade * valorUnitario;
let carrinho = document.getElementById('lista-produtos');
//Adicionar no carrinho
carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
</section>`;

//Atualizar o valor total da compra
totalGeral = totalGeral + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${totalGeral}`
quantidade = document.getElementById('quantidade').value = 0;
}
//Limpar o carrinho
function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML ='';
    document.getElementById('valor-total').textContent = 'R$ 0';
    }