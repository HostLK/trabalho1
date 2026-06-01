function enviarFormulario(event) {
    event.preventDefault();
    alert("Sua reserva esta confirmada!");
    document.querySelector("form").reset();
}

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