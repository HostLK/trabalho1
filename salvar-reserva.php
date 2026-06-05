<?php
// Caminho do arquivo onde os dados serão salvos
$caminhoArquivo = 'reserva.txt';

// Pega os dados enviados pelo JavaScript
$dadosRecebidos = json_decode(file_get_contents('php://input'), true);

// Formata os dados no padrão que você solicitou
$conteudoReserva = "=======RESERVA=======\n" .
                   "Nome: {$dadosRecebidos['nome']}\n" .
                   "E-mail: {$dadosRecebidos['email']}\n" .
                   "Data: {$dadosRecebidos['data']}\n" .
                   "Hora: {$dadosRecebidos['hora']}\n" .
                   "Pessoas: {$dadosRecebidos['pessoas']}\n" .
                   "====================\n\n";

// Grava no arquivo (adiciona no final e garante segurança)
file_put_contents($caminhoArquivo, $conteudoReserva, FILE_APPEND | LOCK_EX);

// Não tem mais mensagem aqui, só salva mesmo
?>