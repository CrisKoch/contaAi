var id = 0;
var venda = {};
var listaVendas = [];

function salvarDados() {

  var produto = document.getElementById("produto").value;
  var valor = document.getElementById("valor").value;
  var dataContratacao = document.getElementById("dataContratacao").value;
  var matricula = document.getElementById("matricula").value;
  //var funci =  document.getElementById("funci").value;
  //document.getElementById("funci").value = matricula;
  //funci.innerHTML = matricula;



  if (!(produto == '' || valor == '' || dataContratacao == '')) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var btn = document.createElement("button");
    td1.innerHTML = produto;
    td2.innerHTML = valor;
    td3.innerHTML = dataContratacao;
    btn.innerHTML = "X";

    // aqui e passado "this" para a função, e this é o botao
    btn.setAttribute('onclick', 'deletar(this)');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(btn);
    tr.id = 'linha' + id;
    id++;
    document.getElementById("campo").appendChild(tr);

    //cria objeto venda, uma instância de venda
    venda = {
      id, produto, valor, dataContratacao, matricula
    };

    //cria uma lista de objetos
    listaVendas.push(venda);
    console.log(listaVendas);

    //testando localStorage
    localStorage. setItem(matricula, JSON. stringify(listaVendas));
    let vendaString = localStorage. getItem(matricula);
    console.log(vendaString);

    //limpa campos assim que salva uma venda
    limparCampos();
  } else {
    alert('Todos os campos precisam estar preenchidos !!');
  }
}
function limparCampos() {
  var produto = document.getElementById("produto");
  var valor = document.getElementById("valor");
  var dataContratacao = document.getElementById("dataContratacao");
  var matricula = document.getElementById("matricula");

  produto.value = '';
  valor.value = '';
  dataContratacao.value = '';
  matricula.value = '';

}

function deletar(botao) {
  var tabela = document.getElementById('campo');
  // a partir do botao, pega a linha com parentNode, e o indice da linha com rowIndex
  tabela.deleteRow(botao.parentNode.rowIndex);
}

// FUNCAO PARA BAIXAR ARQUIVO - NESSE CASO, EM JSON
//var dados = ["mizuk","programação","animes"];

function baixarArquivo(name) {
  var link = document.createElement('a');
  link.href = 'data:application/octet-stream;charset=utf-8,' + JSON.stringify(listaVendas);
  link.download = name;
  link.click();
} 

//consegui baixar a lista de objetos. 
//converter para arquivo em tabela
