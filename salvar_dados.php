<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome     = $_POST['nome'] ?? '';
    $email    = $_POST['email'] ?? '';
    $data     = $_POST['data'] ?? '';
    $hora     = $_POST['hora'] ?? '';
    $pessoas  = $_POST['pessoas'] ?? '';

    $conteudo  = "===== NOVA RESERVA =====\n";
    $conteudo .= "Recebido em: " . date('d/m/Y H:i:s') . "\n";
    $conteudo .= "Nome: $nome\n";
    $conteudo .= "E-mail: $email\n";
    $conteudo .= "Data: $data\n";
    $conteudo .= "Hora: $hora\n";
    $conteudo .= "Pessoas: $pessoas\n";
    $conteudo .= "-------------------------\n\n";

    $arquivo = __DIR__ . '/reservas.txt';
    $arquivoAberto = fopen($arquivo, 'a');
    fwrite($arquivoAberto, $conteudo);
    fclose($arquivoAberto);

    echo "Reserva salva com sucesso!";
} else {
    echo "Acesso inválido!";
}
?>