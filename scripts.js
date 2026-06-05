      // limpa o formulário
      document.querySelector("form").reset();

function enviarFormulario(event) {
    event.preventDefault();
    const dados = new FormData(event.target);

    fetch('salvar-dados.php', {
        method: 'POST',
        body: dados
    })
    .then(resposta => resposta.text())
    .then(() => {
        alert('✅ Reserva feita com sucesso!');
        event.target.reset();
    })
    .catch(() => {
        alert('❌ Erro ao enviar!');
    });
}

// Defina o limite de vagas por horário (ajuste conforme necessário)
const LIMITE_POR_HORARIO = 20;

// Função para ler os dados salvos (simula leitura do arquivo reserva.txt)
function lerReservas() {
  const dados = localStorage.getItem('reserva') || '[]';
  return JSON.parse(dados);
}

// Função para salvar os dados (simula gravação no arquivo reserva.txt)
function salvarReserva(dadosReserva) {
  const reservas = lerReservas();
  reservas.push(dadosReserva);
  localStorage.setItem('reserva', JSON.stringify(reservas));
}

// Função que verifica a disponibilidade no horário escolhido
function verificarDisponibilidade(data, hora, quantidadePessoas) {
  const reservas = lerReservas();
  
  // Soma todas as pessoas que já reservaram para a mesma data e horário
  const totalNoHorario = reservas.reduce((soma, reserva) => {
    if (reserva.data === data && reserva.hora === hora) {
      return soma + Number(reserva.pessoas);
    }
    return soma;
  }, 0);

  // Verifica se ultrapassa o limite
  if (totalNoHorario + Number(quantidadePessoas) > LIMITE_POR_HORARIO) {
    return { disponivel: false, mensagem: '❌ Não há mais vagas disponíveis para esse horário!' };
  }

  return { disponivel: true, mensagem: '✅ Reserva realizada com sucesso!' };
}

// Função chamada ao enviar o formulário
function enviarFormulario(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Captura os valores dos campos
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;
  const pessoas = document.getElementById('pessoas').value;

  // Verifica disponibilidade
  const resultado = verificarDisponibilidade(data, hora, pessoas);

  // Exibe mensagem para o usuário
  alert(resultado.mensagem);

  // Se estiver disponível, salva a reserva
  if (resultado.disponivel) {
    salvarReserva({ nome, email, data, hora, pessoas });
    // Limpa o formulário após salvar
    document.querySelector('.form-reserva').reset();
  }
}
