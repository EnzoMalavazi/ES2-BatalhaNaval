# 🧭 Batalha Naval – Projeto de Jogo Web

Este repositório contém o desenvolvimento de um jogo de Batalha Naval feito em HTML, CSS e JavaScript puro, como parte de um projeto acadêmico da disciplina de Engenharia de Software II.

O jogo simula a batalha entre um jogador e o computador com jogadas alternadas, navios de tamanhos variados, e posicionamento aleatório horizontal ou vertical.

## 🧠 Objetivos do Projeto

- Aplicar conceitos de controle de versão com Git
- Trabalhar em equipe utilizando boas práticas de desenvolvimento
- Criar um jogo funcional utilizando HTML, CSS e JavaScript
- Adotar o fluxo GitFlow de maneira simplificada (main e dev)

## 🚀 Como Jogar

1. Clone o repositório ou baixe os arquivos da última versão
2. Abra o arquivo `index.html` no navegador
3. Clique em células do tabuleiro do computador para atacar
4. O computador ataca automaticamente após cada jogada
5. O jogo termina quando todos os navios de um dos lados forem destruídos

## 🎮 Funcionalidades por Versão

### Versão 1 – Estrutura e tabuleiros
- Estrutura HTML com dois tabuleiros (jogador e computador)
- Grid visual com CSS

### Versão 2 – Jogadas básicas
- Jogador pode clicar no tabuleiro do computador
- Feedback visual de acerto ou erro (simulado)

### Versão 3 – Lógica real de navios
- Tabuleiro do computador recebe navios reais de tamanho 1
- Vitória ocorre quando todos são destruídos

### Versão 4 – Jogada automática do computador
- Tabuleiro do jogador também possui navios
- Computador ataca aleatoriamente
- Fim do jogo para vitória de qualquer lado

### Versão 5 – Navios com tamanhos variados e orientação
- Navios de tamanhos 4, 3 e 2
- Posicionamento aleatório horizontal ou vertical
- Contador de partes para definir o vencedor

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- Git + GitHub

## 📁 Estrutura do Repositório

```
.
├── index.html  
├── style.css  
├── script.js  
├── README.md  
├── /documentação (opcional – pode conter os PDFs gerados)  
└── /versões-anteriores (opcional – backups de versões 1 a 4)
```

## 🌱 Fluxo de Trabalho (Git)

- Branch `main`: versão final e estável
- Branch `dev`: local de desenvolvimento
- Cada versão foi comitada na branch dev
- Após testes, foi feito merge da dev para main

## 🧠 Equipe

Enzo Malavazi 
Gabriela Sales
Saymon Souza
Luis Guilherme
## 📝 Licença

Projeto acadêmico sem fins lucrativos.  
Todos os direitos reservados aos integrantes do grupo.

📘 Disciplina: Engenharia de Software II  
📆 Ano: 2025

