function enviarFormulario(event) {
    event.preventDefault();
    alert("Sua reserva esta confirmada!");
    document.querySelector("form").reset();
}

      // limpa o formulário
      document.querySelector("form").reset();