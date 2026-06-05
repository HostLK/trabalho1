<?php
$caminhoArquivo = 'reserva.txt';
$listaReservas = [];

// Se o arquivo existe e não está vazio
if (file_exists($caminhoArquivo) && filesize($caminhoArquivo) > 0) {
  // Lê todo o conteúdo do arquivo
  $conteudo = file_get_contents($caminhoArquivo);
  
  // Separa as reservas usando o marcador final
  $blocos = explode("====================", $conteudo);

  foreach ($blocos as $bloco) {
    // Ignora blocos vazios
    if (trim($bloco) === '') continue;

    // Extrai os dados de cada linha
    preg_match('/Nome: (.*)/', $bloco, $nome);
    preg_match('/E-mail: (.*)/', $bloco, $email);
    preg_match('/Data: (.*)/', $bloco, $data);
    preg_match('/Hora: (.*)/', $bloco, $hora);
    preg_match('/Pessoas: (.*)/', $bloco, $pessoas);

    // Adiciona na lista apenas se encontrou os dados principais
    if (isset($nome[1], $data[1], $hora[1], $pessoas[1])) {
      $listaReservas[] = [
        'nome' => trim($nome[1]),
        'email' => trim($email[1]),
        'data' => trim($data[1]),
        'hora' => trim($hora[1]),
        'pessoas' => trim($pessoas[1])
      ];
    }
  }
}

// Devolve os dados para o JavaScript como JSON
header('Content-Type: application/json');
echo json_encode($listaReservas);
?>