# Rusbé Restaurante

Um projeto de um site para o **Rusbé Restaurante**, um restaurante focado em comida regional brasileira. O site possui uma interface interativa com um sistema simples de reservas de mesas integrado com um backend em PHP.

## 📋 Funcionalidades

*   **Página Inicial (Landing Page):** Informações sobre o restaurante, pratos mais pedidos e cardápio completo.
*   **Sistema de Reservas:**
    *   Formulário para reserva de mesas com verificação de disponibilidade em tempo real.
    *   Limite máximo de 20 pessoas por horário.
    *   Integração com backend via Fetch API (JavaScript) e PHP.
*   **Localização:** Mapa interativo integrado com o Google Maps.
*   **Contatos:** Informações de contato e links diretos para telefone e email.

## 🛠️ Tecnologias Utilizadas

*   **HTML5:** Estruturação semântica do site.
*   **CSS3:** Estilização, layout e design.
*   **JavaScript (Vanilla):** Lógica do frontend para envio assíncrono e verificação das reservas no formulário.
*   **PHP:** Backend para leitura (`ler-reservas.php`) e gravação (`salvar-reserva.php`) das reservas.

## 📁 Estrutura do Projeto

```text
trabalho1/
├── assets/                 # Imagens dos pratos (baiao-de-dois, tacaca, etc.)
├── index.html              # Página principal do site
├── ler-reservas.php        # Script PHP para leitura das reservas salvas
├── README.md               # Documentação do projeto
├── salvar-reserva.php      # Script PHP para processar e salvar novas reservas
├── scripts.js              # Lógica de validação e requisição das reservas
└── style.css               # Folha de estilos
```

## 🚀 Como Executar o Projeto

Como o projeto utiliza PHP para gerenciar o salvamento e a leitura das reservas, é necessário rodar o projeto em um servidor web local.

### Usando o servidor embutido do PHP:
1. Certifique-se de ter o [PHP instalado](https://www.php.net/downloads) em sua máquina.
2. Abra o terminal na pasta do projeto.
3. Inicie o servidor embutido executando o comando:
   ```bash
   php -S localhost:8000
   ```
4. Acesse no seu navegador: `http://localhost:8000/index.html`

### Usando XAMPP, WampServer ou similar:
1. Copie a pasta do projeto `trabalho1` para dentro do diretório do seu servidor web (ex: `htdocs` no XAMPP ou `www` no WampServer).
2. Inicie os serviços do Apache.
3. Acesse no seu navegador: `http://localhost/trabalho1/index.html`
