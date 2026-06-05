// Defina o limite de vagas por horário (ajuste conforme necessário)
const LIMITE_POR_HORARIO = 20;

// Verifica quantas pessoas já reservaram na mesma data e horário
async function verificarDisponibilidade(dataEscolhida, horaEscolhida, qtdPessoas) {
  try {
    // Pega todas as reservas que já estão salvas no arquivo, via PHP
    const resposta = await fetch('ler-reservas.php');
    const reservas = await resposta.json();

    // Soma todas as pessoas do mesmo dia e horário
    const totalOcupado = reservas.reduce((soma, reserva) => {
      if (reserva.data === dataEscolhida && reserva.hora === horaEscolhida) {
        return soma + Number(reserva.pessoas);
      }
      return soma;
    }, 0);

    // Verifica se vai ultrapassar o limite
    if (totalOcupado + Number(qtdPessoas) > LIMITE_POR_HORARIO) {
      return {
        permitido: false,
        mensagem: '❌ Não há mais vagas disponíveis para esse horário!'
      };
    }

    return {
      permitido: true,
      mensagem: '✅ Reserva realizada com sucesso!'
    };

  } catch (erro) {
    console.error('Erro ao verificar:', erro);
    return {
      permitido: false,
      mensagem: '⚠️ Erro ao consultar o sistema. Tente novamente.'
    };
  }
}

// Função executada ao clicar em "Reservar Mesa"
async function enviarFormulario(event) {
  event.preventDefault(); // Impede recarregar a página

  // Captura os dados do formulário
  const dadosReserva = {
    nome: document.getElementById('nome').value,
    email: document.getElementById('email').value,
    data: document.getElementById('data').value,
    hora: document.getElementById('hora').value,
    pessoas: document.getElementById('pessoas').value
  };

  // Verifica antes de salvar
  const resultado = await verificarDisponibilidade(dadosReserva.data, dadosReserva.hora, dadosReserva.pessoas);
  alert(resultado.mensagem); // ✅ AQUI É A ÚNICA MENSAGEM QUE VAI APARECER

  // Se tiver vaga, envia para o PHP salvar no arquivo
  if (resultado.permitido) {
    await fetch('salvar-reserva.php', { // <- Tirei o alerta daqui
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dadosReserva)
    });

    // Limpa o formulário
    document.querySelector('.form-reserva').reset();
  }
}