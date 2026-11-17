# 🛒 Compra Fácil — Plataforma de Pedidos Acessível

**Plataforma de Pedidos Acessível: Facilitando Compras para Idosos Residentes Sozinhos**  
Projeto Extensionista — **Centro Universitário Internacional UNINTER (Escola Superior Politécnica)**

> 🌐 **Acesse a aplicação online (Vercel):** [plataforma-pedidos-idosos.vercel.app](https://plataforma-pedidos-idosos.vercel.app)  
> *(Caso sua URL na Vercel tenha um nome diferente, basta atualizar o link acima.)*

---

## 🎯 Objetivo

Facilitar a realização de compras de supermercado por idosos que residem sozinhos, reduzindo barreiras digitais por meio de uma interface limpa, intuitiva e acessível — com destaque para o envio de **foto da lista de compras escrita à mão** interpretada automaticamente por **OCR (Reconhecimento Óptico de Caracteres)**.

---

## ✨ Funcionalidades Principais

A aplicação reúne **três visões integradas** no navegador:

### 1. 📱 Aplicativo do Idoso
- **Acessibilidade integrada:** botão para aumentar o tamanho da fonte (`A+`) e leitura em voz alta da tela atual (`🔊`).
- **Fotografar Lista (OCR):** envio de foto do aparelho ou teste com listas manuscritas de exemplo, convertidas automaticamente em itens no carrinho com **Tesseract.js**.
- **Escolher Produtos:** catálogo simplificado separado por categorias (*Mercearia, Padaria, Feira, Carnes e Limpeza*).
- **Conferência e Finalização:** revisão de quantidades, escolha do supermercado parceiro próximo e pagamento na entrega (*Dinheiro, Cartão, PIX ou Caderneta*).
- **Acompanhamento e Avaliação:** status do pedido em tempo real, cadastro de endereço/referência e avaliação da experiência.

### 2. 🏪 Painel do Supermercado Parceiro
- Visualização dos pedidos recebidos já organizados a partir da leitura OCR.
- Controle dos estabelecimentos parceiros cadastrados e atualização do andamento das entregas.

### 3. 📊 Dados do Projeto e Referência OCR em Python
- Painel com os indicadores levantados no projeto extensionista.
- Referência da função de leitura de imagem/OCR em Python utilizando `pytesseract` e `Pillow`.

---

## 📈 Indicadores do Projeto

| Indicador | Resultado |
| :--- | :--- |
| **Redução de digitação** | **-80%** (tempo de pedido reduzido de 12 min para menos de 2 min com foto da lista) |
| **Autonomia dos usuários** | **90%** conseguiram finalizar o pedido sem auxílio já na segunda tentativa |
| **Taxa de erros nos pedidos** | **< 3%** nos 3 mercados parceiros (ante 25% por telefone) |
| **Satisfação média** | **Nota 9,1 / 10** (24 de 25 pedidos entregues) |

---

## 🛠️ Tecnologias Utilizadas

- **HTML5, CSS3 e JavaScript (Vanilla)** — aplicação web estática e responsiva
- **Tesseract.js (v5)** — reconhecimento de texto em imagens (OCR) direto no navegador
- **Web Speech API** — leitura em voz alta para acessibilidade
- **Web App Manifest (`manifest.json`)** — suporte a instalação estilo aplicativo no celular
- **Vercel** — hospedagem com HTTPS automático e deploy contínuo via GitHub

---

## 📁 Estrutura de Arquivos

```text
plataforma-pedidos-idosos/
├── index.html      # Estrutura das 3 visões (Aplicativo, Supermercado e Dados do Projeto)
├── styles.css      # Estilos responsivos e recursos visuais de acessibilidade
├── app.js          # Lógica de OCR, catálogo, carrinho, pedidos e leitura em voz alta
├── manifest.json   # Metadados PWA para uso em dispositivos móveis
└── README.md       # Documentação do projeto
```

---

## 🚀 Como Executar Localmente

Por ser uma aplicação estática pura, não exige instalação de dependências:

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` diretamente no navegador (ou utilize uma extensão como *Live Server*).

---

## ☁️ Hospedagem

Este projeto está configurado para deploy estático gratuito na **Vercel**, conectado diretamente a este repositório no **GitHub**. Qualquer atualização comitada na branch principal gera uma nova publicação automaticamente.
