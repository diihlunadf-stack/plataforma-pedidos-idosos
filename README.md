# 📱 Compra Fácil Idoso – Plataforma de Pedidos Acessível

Aplicativo móvel e plataforma web desenvolvida conforme todos os requisitos do documento acadêmico da **UNINTER – Escola Superior Politécnica (ESP)**: *"Plataforma de Pedidos Acessível: Facilitando Compras para Idosos Residentes Sozinhos"*.

---

## 🚀 Como Executar o Aplicativo

O aplicativo foi construído como um **Web App Mobile (PWA)** autocontido, sem necessidade de instalar servidores complexos:

1. Basta abrir o arquivo [`index.html`](./index.html) em qualquer navegador (Google Chrome, Microsoft Edge, celular Android ou iPhone).
2. Para executar o módulo Python isolado de leitura de imagem (`pytesseract` + `Pillow` da página 6 do PDF), utilize o arquivo [`ocr_lista_compras.py`](./ocr_lista_compras.py).

---

## ✅ Requisitos do PDF Implementados na Plataforma

1. **Interface Mobile Acessível ("Menos é mais" – Páginas 4, 5 e 7)**:
   - Fontes ampliadas com controle dinâmico de tamanho (`A+` e `A−`) e modo de **Alto Contraste (`🌗`)**.
   - **Leitura por Voz em Português (`🔊 Ouvir Tela` e `Ouvir Minha Lista`)** para auxiliar idosos com baixa visão ou dificuldade de leitura.
   - Poucos botões, frases curtas e diretas, e navegação linear em 3 passos simples.
   - **Canal de Apoio Humano** fixo no rodapé do celular (orientação por telefone/WhatsApp, conforme Consideração Final #3).

2. **Duas Formas de Inserir o Pedido (Página 4, Etapa 2)**:
   - **📷 1. Fotografar Lista de Compras (OCR + IA)**: Permite tirar foto com a câmera do celular, enviar imagem da lista manuscrita ou testar instantaneamente com **3 listas manuscritas de caderno simuladas na tela**. Extrai os itens linha por linha, interpreta quantidades e preenche o pedido para conferência em menos de 2 minutos (redução de 80% no esforço de digitação).
   - **👆 2. Formulário Simplificado de Botões Grandes**: Adição de itens por categorias essenciais (*Mercearia, Leite e Pão, Feira e Ovos, Carnes, Limpeza*) com apenas 1 toque.

3. **Cadastro dos 3 Supermercados Parceiros e Fluxo Ponta a Ponta (Páginas 2, 4 e 5, Etapa 3)**:
   - 3 estabelecimentos cadastrados (*Supermercado Bom Vizinho*, *Mercadinho São José* e *Supermercado Família Unida*) com catálogo de produtos, preços, endereço, raio de entrega e formas de pagamento na entrega (*Dinheiro, Cartão na maquininha, PIX e Caderneta*).
   - **🏪 Painel do Supermercado Parceiro**: Recebe os pedidos de forma legível e organizada (reduzindo a taxa de erro de 25% para < 3%), permitindo confirmar estoque, separar produtos e despachar para entrega em tempo real.

4. **Acompanhamento dos Pedidos e Avaliação da Experiência (Páginas 2 e 5, Etapas 4 e 5)**:
   - Linha do tempo visual no celular do idoso (*Enviado → Estoque Confirmado → Separando Produtos → Saiu para Entrega → Entregue*).
   - Sistema de avaliação de 1 a 10 ao final do pedido.
   - Aba dedicada **📊 Metodologia, Resultados & Código OCR (PDF)** exibindo todas as métricas do projeto e o script Python original.
