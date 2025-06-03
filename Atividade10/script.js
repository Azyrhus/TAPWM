const lista = [];
const form = document.getElementById('formFuncionario');
const listaFuncionarios = document.getElementById('listaFuncionarios');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Pegando os valores dos inputs
    const matricula = document.getElementById('matricula').value;
    const nome = document.getElementById('nome').value;
    const funcao = document.getElementById('funcao').value;

    // Criando objeto funcionário (forma literal)
    const funcionario = {
        matricula,
        nome,
        funcao
    };

    // Adicionando no array
    lista.push(funcionario);

    // Atualizando a tela
    renderizarFuncionarios();

    // Limpando formulário
    form.reset();
});

function renderizarFuncionarios() {
    listaFuncionarios.innerHTML = '';

    lista.forEach((f, index) => {
        listaFuncionarios.innerHTML += `
            <div class="funcionario">
                <strong>Funcionário ${index + 1}</strong><br>
                Matrícula: ${f.matricula} <br>
                Nome: ${f.nome} <br>
                Função: ${f.funcao}
            </div>
        `;
    });
}
