/* ==========================================================================
   LÓGICA DA PLATAFORMA DE PEDIDOS ACESSÍVEL — INTERFACE CLEAN E INTUITIVA
   Centro Universitário Internacional UNINTER – Escola Superior Politécnica
   ========================================================================== */

const CATALOGO_PRODUTOS = [
  { id: 'arroz5kg', nome: 'Arroz Branco 5kg', categoria: 'mercearia', preco: 26.90, icone: '🍚', palavrasChave: ['arroz'] },
  { id: 'feijao1kg', nome: 'Feijão Carioca 1kg', categoria: 'mercearia', preco: 8.50, icone: '🫘', palavrasChave: ['feijao', 'feijão'] },
  { id: 'acucar1kg', nome: 'Açúcar Refinado 1kg', categoria: 'mercearia', preco: 4.80, icone: '🧂', palavrasChave: ['acucar', 'açúcar'] },
  { id: 'cafe500g', nome: 'Café em Pó 500g', categoria: 'mercearia', preco: 18.90, icone: '☕', palavrasChave: ['cafe', 'café'] },
  { id: 'oleo900ml', nome: 'Óleo de Soja 900ml', categoria: 'mercearia', preco: 6.90, icone: '🫗', palavrasChave: ['oleo', 'óleo'] },
  { id: 'macarrao500g', nome: 'Macarrão 500g', categoria: 'mercearia', preco: 4.50, icone: '🍝', palavrasChave: ['macarrao', 'macarrão'] },
  { id: 'leite1l', nome: 'Leite Integral 1L', categoria: 'padaria', preco: 5.40, icone: '🥛', palavrasChave: ['leite'] },
  { id: 'paoforma', nome: 'Pão de Forma', categoria: 'padaria', preco: 7.90, icone: '🍞', palavrasChave: ['pao', 'pão'] },
  { id: 'manteiga200g', nome: 'Manteiga 200g', categoria: 'padaria', preco: 11.50, icone: '🧈', palavrasChave: ['manteiga'] },
  { id: 'queijo300g', nome: 'Queijo Mussarela', categoria: 'padaria', preco: 14.90, icone: '🧀', palavrasChave: ['queijo', 'mussarela'] },
  { id: 'ovos12', nome: 'Dúzia de Ovos (12 un)', categoria: 'hortifruti', preco: 10.90, icone: '🥚', palavrasChave: ['ovo', 'ovos', 'duzia'] },
  { id: 'banana', nome: 'Banana Prata', categoria: 'hortifruti', preco: 6.80, icone: '🍌', palavrasChave: ['banana', 'bananas'] },
  { id: 'maca', nome: 'Maçã Nacional 1kg', categoria: 'hortifruti', preco: 9.90, icone: '🍎', palavrasChave: ['maca', 'maçã'] },
  { id: 'batata', nome: 'Batata Lavada 1kg', categoria: 'hortifruti', preco: 6.20, icone: '🥔', palavrasChave: ['batata'] },
  { id: 'tomate', nome: 'Tomate 1kg', categoria: 'hortifruti', preco: 7.50, icone: '🍅', palavrasChave: ['tomate'] },
  { id: 'frango1kg', nome: 'Peito de Frango 1kg', categoria: 'carnes', preco: 19.90, icone: '🍗', palavrasChave: ['frango', 'peito'] },
  { id: 'carnemoida', nome: 'Carne Moída 500g', categoria: 'carnes', preco: 18.50, icone: '🥩', palavrasChave: ['carne', 'moida'] },
  { id: 'detergente', nome: 'Detergente 500ml', categoria: 'limpeza', preco: 2.80, icone: '🧴', palavrasChave: ['detergente'] },
  { id: 'papel4', nome: 'Papel Higiênico (4 un)', categoria: 'limpeza', preco: 8.90, icone: '🧻', palavrasChave: ['papel', 'higienico'] },
  { id: 'sabonete', nome: 'Sabonete Suave', categoria: 'limpeza', preco: 3.20, icone: '🧼', palavrasChave: ['sabonete'] }
];

const SUPERMERCADOS_PARCEIROS = [
  {
    id: 'mercado-1',
    nome: 'Supermercado Bom Vizinho',
    endereco: 'Rua das Flores, 240 – Centro',
    distancia: '600m • Entrega Grátis',
    areaEntrega: 'Centro (até 3 km)',
    taxaEntrega: 0.00,
    tempoEstimado: '30 min',
    formasPagamento: ['Dinheiro', 'Cartão', 'PIX', 'Caderneta']
  },
  {
    id: 'mercado-2',
    nome: 'Mercadinho São José',
    endereco: 'Av. Brasil, 890 – Vila Nova',
    distancia: '1,1 km • Taxa R$ 3,00',
    areaEntrega: 'Vila Nova (até 2,5 km)',
    taxaEntrega: 3.00,
    tempoEstimado: '25 min',
    formasPagamento: ['Dinheiro', 'Cartão', 'PIX']
  },
  {
    id: 'mercado-3',
    nome: 'Supermercado Família Unida',
    endereco: 'Rua Sete de Setembro, 1420',
    distancia: '1,8 km • Entrega Grátis',
    areaEntrega: 'Jardim América (até 4 km)',
    taxaEntrega: 0.00,
    tempoEstimado: '40 min',
    formasPagamento: ['Dinheiro', 'Cartão', 'PIX']
  }
];

const LISTAS_MANUSCRITAS_EXEMPLO = [
  {
    id: 'lista-1',
    cabecalhoCaderno: 'Lista da Semana',
    linhasTexto: [
      '1 Arroz 5kg',
      '2 Feijao 1kg',
      '3 Leite Integral',
      '1 Cafe em po 500g',
      '1 Duzia de Ovos',
      '1 Pao de Forma'
    ]
  },
  {
    id: 'lista-2',
    cabecalhoCaderno: 'Padaria e Cafe',
    linhasTexto: [
      '2 Leite Integral',
      '1 Pao de Forma',
      '1 Manteiga 200g',
      '1 Queijo Mussarela',
      '1 Cafe 500g'
    ]
  },
  {
    id: 'lista-3',
    cabecalhoCaderno: 'Almoco e Casa',
    linhasTexto: [
      '1 Peito de Frango 1kg',
      '1 Batata 1kg',
      '1 Tomate 1kg',
      '1 Macarrao 500g',
      '2 Detergente'
    ]
  }
];

const estadoApp = {
  letraGrande: false,
  categoriaAtiva: 'mercearia',
  listaExemploSelecionada: 0,
  origemPedidoAtual: 'Foto da Lista (OCR)',
  carrinho: [],
  mercadoSelecionadoId: 'mercado-1',
  formaPagamentoSelecionada: 'Dinheiro',
  notaAvaliacao: 10,
  usuario: {
    nome: 'Dona Maria',
    telefone: '(41) 99812-3456',
    endereco: 'Rua das Acácias, 45 – Centro',
    referencia: 'Portão verde ao lado da farmácia'
  },
  pedidos: [
    {
      id: 'PED-025',
      dataHora: 'Hoje, 14:10',
      clienteNome: 'Dona Maria',
      clienteTelefone: '(41) 99812-3456',
      clienteEndereco: 'Rua das Acácias, 45 – Centro',
      clienteReferencia: 'Portão verde ao lado da farmácia',
      mercadoId: 'mercado-1',
      mercadoNome: 'Supermercado Bom Vizinho',
      origem: 'Foto da Lista (OCR)',
      pagamento: 'Dinheiro',
      statusPasso: 3,
      avaliacao: 10,
      itens: [
        { id: 'arroz5kg', nome: 'Arroz Branco 5kg', icone: '🍚', qtd: 1, preco: 26.90 },
        { id: 'leite1l', nome: 'Leite Integral 1L', icone: '🥛', qtd: 2, preco: 5.40 },
        { id: 'paoforma', nome: 'Pão de Forma', icone: '🍞', qtd: 1, preco: 7.90 }
      ]
    }
  ],
  pedidoAtivoId: 'PED-025'
};

// ==========================================================================
// CONTROLES DE TAMANHO DE LETRA E VOZ
// ==========================================================================

function alternarTamanhoLetra() {
  estadoApp.letraGrande = !estadoApp.letraGrande;
  const escala = estadoApp.letraGrande ? 1.18 : 1.0;
  document.documentElement.style.setProperty('--font-scale', escala);
  const btn = document.getElementById('fontToggleBtn');
  if (btn) btn.textContent = estadoApp.letraGrande ? 'A−' : 'A+';
}

function falarTexto(texto) {
  if (!('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texto);
    u.lang = 'pt-BR';
    u.rate = 0.95;
    window.speechSynthesis.speak(u);
  } catch (e) {}
}

function ouvirTelaAtual() {
  const ativa = document.querySelector('.app-screen.active');
  if (!ativa) return;
  const titulo = ativa.querySelector('.screen-heading h3');
  const sub = ativa.querySelector('.screen-heading p');
  falarTexto(`${titulo ? titulo.innerText : ''}. ${sub ? sub.innerText : ''}`);
}

// ==========================================================================
// NAVEGAÇÃO ENTRE TELAS E ABAS
// ==========================================================================

function alternarModoPlataforma(modo) {
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === modo);
  });
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `view-${modo}`);
  });
  if (modo === 'mercado') {
    renderizarPainelSupermercado();
  }
}

function irParaTelaApp(idTela) {
  document.querySelectorAll('.app-screen').forEach(sc => {
    sc.classList.toggle('active', sc.id === idTela);
  });

  // Atualiza barra inferior
  const mapaNav = {
    'screen-home': 'nav-home',
    'screen-camera': 'nav-home',
    'screen-form': 'nav-home',
    'screen-review': 'nav-home',
    'screen-checkout': 'nav-home',
    'screen-tracking': 'nav-tracking',
    'screen-profile': 'nav-profile'
  };
  const idNavAtivo = mapaNav[idTela] || 'nav-home';
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === idNavAtivo);
  });

  const container = document.querySelector('.app-screen-container');
  if (container) container.scrollTop = 0;

  if (idTela === 'screen-camera') desenharCadernoManuscrito(estadoApp.listaExemploSelecionada);
  else if (idTela === 'screen-form') renderizarGradeSimplificada();
  else if (idTela === 'screen-review') renderizarConferenciaCarrinho();
  else if (idTela === 'screen-checkout') renderizarCheckoutSupermercados();
  else if (idTela === 'screen-tracking') renderizarAcompanhamentoPedido();
  else if (idTela === 'screen-profile') preencherFormularioCadastro();
}

// ==========================================================================
// LEITURA DE IMAGEM (OCR) DA LISTA DE COMPRAS
// ==========================================================================

function selecionarListaExemplo(indice) {
  estadoApp.listaExemploSelecionada = indice;
  document.querySelectorAll('.preset-pill').forEach((btn, idx) => {
    btn.classList.toggle('selected', idx === indice);
  });
  desenharCadernoManuscrito(indice);
}

function desenharCadernoManuscrito(indice) {
  const canvas = document.getElementById('handwrittenCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const lista = LISTAS_MANUSCRITAS_EXEMPLO[indice] || LISTAS_MANUSCRITAS_EXEMPLO[0];

  ctx.fillStyle = '#FFFDF5';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = '#E2E8F0';
  ctx.lineWidth = 1;
  for (let y = 44; y < canvas.height; y += 32) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  ctx.strokeStyle = '#FCA5A5';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(36, 0);
  ctx.lineTo(36, canvas.height);
  ctx.stroke();

  ctx.fillStyle = '#0F172A';
  ctx.font = 'bold 17px "Segoe Print", "Comic Sans MS", cursive, sans-serif';
  ctx.fillText(lista.cabecalhoCaderno, 48, 34);

  ctx.font = '17px "Segoe Print", "Comic Sans MS", cursive, sans-serif';
  ctx.fillStyle = '#334155';
  lista.linhasTexto.forEach((linha, idx) => {
    ctx.fillText(linha, 48, 68 + idx * 32);
  });
}

function processarUploadImagemReal(evento) {
  const arquivo = evento.target.files && evento.target.files[0];
  if (!arquivo) return;

  const leitor = new FileReader();
  leitor.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      const canvas = document.getElementById('handwrittenCanvas');
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const prop = Math.min(canvas.width / img.width, canvas.height / img.height);
      const larg = img.width * prop;
      const alt = img.height * prop;
      ctx.drawImage(img, (canvas.width - larg) / 2, (canvas.height - alt) / 2, larg, alt);
      executarReconhecimentoOCR(true);
    };
    img.src = e.target.result;
  };
  leitor.readAsDataURL(arquivo);
}

async function executarReconhecimentoOCR(veioDeUpload = false) {
  const statusBox = document.getElementById('ocrStatusBox');
  const statusText = document.getElementById('ocrStepsContent');
  if (statusBox) statusBox.classList.add('visible');
  if (statusText) statusText.textContent = 'Reconhecendo itens da foto...';

  await new Promise(r => setTimeout(r, 650));

  let linhasReconhecidas = [];
  if (veioDeUpload && window.Tesseract) {
    try {
      const canvas = document.getElementById('handwrittenCanvas');
      const res = await window.Tesseract.recognize(canvas, 'por');
      if (res && res.data && res.data.text) {
        const extraidas = res.data.text.split('\n').map(l => l.trim()).filter(l => l.length > 2);
        if (extraidas.length > 0) linhasReconhecidas = extraidas;
      }
    } catch (e) {}
  }

  if (linhasReconhecidas.length === 0) {
    const preset = LISTAS_MANUSCRITAS_EXEMPLO[estadoApp.listaExemploSelecionada] || LISTAS_MANUSCRITAS_EXEMPLO[0];
    linhasReconhecidas = [...preset.linhasTexto];
  }

  estadoApp.origemPedidoAtual = 'Foto da Lista (OCR)';
  estadoApp.carrinho = interpretarLinhasListaCompras(linhasReconhecidas);

  if (statusBox) statusBox.classList.remove('visible');
  falarTexto(`Lista reconhecida com ${estadoApp.carrinho.length} produtos.`);
  irParaTelaApp('screen-review');
}

function normalizarTexto(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function interpretarLinhasListaCompras(linhas) {
  const itens = [];
  linhas.forEach(bruta => {
    const limpa = bruta.trim();
    if (!limpa) return;
    const match = limpa.match(/^(\d+)\s+(.*)$/);
    let qtd = 1;
    let nomeBusca = limpa;
    if (match) {
      qtd = Math.max(1, Math.min(20, parseInt(match[1], 10)));
      nomeBusca = match[2];
    }
    const norm = normalizarTexto(nomeBusca);
    let prod = CATALOGO_PRODUTOS.find(p =>
      p.palavrasChave.some(c => norm.includes(normalizarTexto(c))) ||
      normalizarTexto(p.nome).includes(norm)
    );
    if (!prod) {
      prod = {
        id: 'item-' + Math.random().toString(36).substring(2, 6),
        nome: nomeBusca,
        icone: '🛍️',
        preco: 9.90
      };
    }
    const jaTem = itens.find(i => i.id === prod.id);
    if (jaTem) jaTem.qtd += qtd;
    else itens.push({ id: prod.id, nome: prod.nome, icone: prod.icone, preco: prod.preco, qtd });
  });
  return itens;
}

// ==========================================================================
// CONFERÊNCIA E PRODUTOS SIMPLIFICADOS
// ==========================================================================

function renderizarConferenciaCarrinho() {
  const container = document.getElementById('cartItemsContainer');
  const totalEl = document.getElementById('reviewTotalValue');
  const subBanner = document.getElementById('ocrSummaryBanner');
  if (!container) return;

  if (subBanner) {
    subBanner.textContent = estadoApp.carrinho.length > 0
      ? `${estadoApp.carrinho.length} produtos prontos para entrega`
      : 'Sua lista está vazia';
  }

  container.innerHTML = '';
  let soma = 0;

  estadoApp.carrinho.forEach(item => {
    const subtotal = item.preco * item.qtd;
    soma += subtotal;

    const div = document.createElement('div');
    div.className = 'clean-item-card';
    div.innerHTML = `
      <div class="clean-item-info">
        <h4>${item.icone} ${item.nome}</h4>
        <p>R$ ${subtotal.toFixed(2).replace('.', ',')}</p>
      </div>
      <div class="stepper-box">
        <button class="stepper-btn" onclick="alterarQuantidadeItem('${item.id}', -1)">−</button>
        <span class="stepper-val">${item.qtd}</span>
        <button class="stepper-btn" onclick="alterarQuantidadeItem('${item.id}', 1)">+</button>
      </div>
    `;
    container.appendChild(div);
  });

  if (totalEl) totalEl.textContent = `R$ ${soma.toFixed(2).replace('.', ',')}`;
}

function alterarQuantidadeItem(idProd, delta) {
  const item = estadoApp.carrinho.find(i => i.id === idProd);
  if (!item) return;
  item.qtd += delta;
  if (item.qtd <= 0) {
    estadoApp.carrinho = estadoApp.carrinho.filter(i => i.id !== idProd);
  }
  renderizarConferenciaCarrinho();
}

function selecionarCategoria(cat) {
  estadoApp.categoriaAtiva = cat;
  document.querySelectorAll('.cat-chip').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderizarGradeSimplificada();
}

function renderizarGradeSimplificada() {
  const grid = document.getElementById('quickProductsGrid');
  const badge = document.getElementById('formCartCountBadge');
  if (!grid) return;

  const totalItens = estadoApp.carrinho.reduce((acc, i) => acc + i.qtd, 0);
  if (badge) badge.textContent = totalItens;

  grid.innerHTML = '';
  CATALOGO_PRODUTOS.filter(p => p.categoria === estadoApp.categoriaAtiva).forEach(prod => {
    const itemCarrinho = estadoApp.carrinho.find(i => i.id === prod.id);
    const qtd = itemCarrinho ? itemCarrinho.qtd : 0;

    const card = document.createElement('div');
    card.className = 'clean-item-card';
    card.innerHTML = `
      <div class="clean-item-info">
        <h4>${prod.icone} ${prod.nome}</h4>
        <p>R$ ${prod.preco.toFixed(2).replace('.', ',')}</p>
      </div>
      <button class="add-pill-btn" onclick="adicionarProdutoRapido('${prod.id}')">
        ${qtd > 0 ? `✓ ${qtd} na lista` : '+ Adicionar'}
      </button>
    `;
    grid.appendChild(card);
  });
}

function adicionarProdutoRapido(idProd) {
  const prod = CATALOGO_PRODUTOS.find(p => p.id === idProd);
  if (!prod) return;
  if (estadoApp.carrinho.length === 0) estadoApp.origemPedidoAtual = 'Seleção na Tela';

  const existente = estadoApp.carrinho.find(i => i.id === prod.id);
  if (existente) existente.qtd += 1;
  else estadoApp.carrinho.push({ id: prod.id, nome: prod.nome, icone: prod.icone, preco: prod.preco, qtd: 1 });

  renderizarGradeSimplificada();
}

// ==========================================================================
// FINALIZAÇÃO E SUPERMERCADOS PARCEIROS
// ==========================================================================

function renderizarCheckoutSupermercados() {
  const listaMercados = document.getElementById('partnerMarketsList');
  const listaPagamentos = document.getElementById('paymentMethodsList');
  const resumoValores = document.getElementById('checkoutSummaryTotals');
  if (!listaMercados) return;

  listaMercados.innerHTML = '';
  SUPERMERCADOS_PARCEIROS.forEach(m => {
    const sel = m.id === estadoApp.mercadoSelecionadoId;
    const card = document.createElement('div');
    card.className = `selectable-card ${sel ? 'selected' : ''}`;
    card.onclick = () => {
      estadoApp.mercadoSelecionadoId = m.id;
      renderizarCheckoutSupermercados();
    };
    card.innerHTML = `
      <div>
        <h4>${m.nome}</h4>
        <p>${m.distancia} • ${m.tempoEstimado}</p>
      </div>
      <span style="font-size:1.1rem;">${sel ? '✅' : '⚪'}</span>
    `;
    listaMercados.appendChild(card);
  });

  const mercadoAtual = SUPERMERCADOS_PARCEIROS.find(m => m.id === estadoApp.mercadoSelecionadoId) || SUPERMERCADOS_PARCEIROS[0];
  listaPagamentos.innerHTML = '';
  mercadoAtual.formasPagamento.forEach(fp => {
    const sel = fp === estadoApp.formaPagamentoSelecionada;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `payment-pill ${sel ? 'selected' : ''}`;
    btn.onclick = () => {
      estadoApp.formaPagamentoSelecionada = fp;
      renderizarCheckoutSupermercados();
    };
    btn.textContent = fp;
    listaPagamentos.appendChild(btn);
  });

  const subtotal = estadoApp.carrinho.reduce((acc, i) => acc + i.preco * i.qtd, 0);
  const total = subtotal + mercadoAtual.taxaEntrega;
  if (resumoValores) {
    resumoValores.innerHTML = `
      <span>Total com entrega</span>
      <strong>R$ ${total.toFixed(2).replace('.', ',')}</strong>
    `;
  }
}

function enviarPedidoAoSupermercado() {
  if (estadoApp.carrinho.length === 0) return;

  const mercado = SUPERMERCADOS_PARCEIROS.find(m => m.id === estadoApp.mercadoSelecionadoId) || SUPERMERCADOS_PARCEIROS[0];
  const novoId = 'PED-' + String(estadoApp.pedidos.length + 25).padStart(3, '0');

  const novoPedido = {
    id: novoId,
    dataHora: 'Agora mesmo',
    clienteNome: estadoApp.usuario.nome,
    clienteTelefone: estadoApp.usuario.telefone,
    clienteEndereco: estadoApp.usuario.endereco,
    clienteReferencia: estadoApp.usuario.referencia,
    mercadoId: mercado.id,
    mercadoNome: mercado.nome,
    origem: estadoApp.origemPedidoAtual,
    pagamento: estadoApp.formaPagamentoSelecionada,
    statusPasso: 1,
    avaliacao: null,
    itens: JSON.parse(JSON.stringify(estadoApp.carrinho))
  };

  estadoApp.pedidos.unshift(novoPedido);
  estadoApp.pedidoAtivoId = novoPedido.id;
  atualizarContadorPedidosMercado();

  falarTexto(`Pedido enviado para ${mercado.nome}.`);
  irParaTelaApp('screen-tracking');
  renderizarPainelSupermercado();
}

// ==========================================================================
// ACOMPANHAMENTO DO PEDIDO E PERFIL
// ==========================================================================

function renderizarAcompanhamentoPedido() {
  const pedido = estadoApp.pedidos.find(p => p.id === estadoApp.pedidoAtivoId) || estadoApp.pedidos[0];
  const container = document.getElementById('trackingContentBox');
  if (!container || !pedido) return;

  const etapas = [
    { passo: 1, titulo: 'Pedido recebido pelo mercado' },
    { passo: 2, titulo: 'Estoque confirmado' },
    { passo: 3, titulo: 'Separando seus produtos' },
    { passo: 4, titulo: 'Saiu para entrega' },
    { passo: 5, titulo: 'Entregue na sua casa' }
  ];

  const htmlSteps = etapas.map(et => {
    let cls = '';
    let icone = '•';
    if (pedido.statusPasso > et.passo || pedido.statusPasso === 5) {
      cls = 'done';
      icone = '✓';
    } else if (pedido.statusPasso === et.passo) {
      cls = 'current';
      icone = '●';
    }
    return `
      <div class="clean-step ${cls}">
        <div class="clean-step-dot">${icone}</div>
        <span>${et.titulo}</span>
      </div>
    `;
  }).join('');

  const total = pedido.itens.reduce((acc, i) => acc + i.preco * i.qtd, 0);

  container.innerHTML = `
    <div class="clean-item-card">
      <div class="clean-item-info">
        <h4>${pedido.mercadoNome}</h4>
        <p>${pedido.id} • R$ ${total.toFixed(2).replace('.', ',')} (${pedido.pagamento})</p>
      </div>
    </div>

    <div class="clean-timeline">
      ${htmlSteps}
    </div>

    ${pedido.statusPasso < 5 ? `
      <button class="btn-outline-clean" onclick="simularAvancoStatusPedido('${pedido.id}')">
        Avançar Etapa da Entrega
      </button>
    ` : ''}
  `;
}

function simularAvancoStatusPedido(idPedido) {
  const pedido = estadoApp.pedidos.find(p => p.id === idPedido);
  if (!pedido || pedido.statusPasso >= 5) return;
  pedido.statusPasso += 1;
  renderizarAcompanhamentoPedido();
  renderizarPainelSupermercado();
}

function selecionarNotaAvaliacao(nota) {
  estadoApp.notaAvaliacao = nota;
  document.querySelectorAll('.rate-pill').forEach(btn => {
    btn.classList.toggle('selected', parseInt(btn.dataset.score, 10) === nota);
  });
}

function salvarAvaliacaoIdoso() {
  const msg = document.getElementById('ratingFeedbackSaved');
  if (msg) {
    msg.style.display = 'block';
    msg.textContent = `Avaliação ${estadoApp.notaAvaliacao}/10 enviada. Obrigado!`;
  }
}

function preencherFormularioCadastro() {
  document.getElementById('inputNomeIdoso').value = estadoApp.usuario.nome;
  document.getElementById('inputTelefoneIdoso').value = estadoApp.usuario.telefone;
  document.getElementById('inputEnderecoIdoso').value = estadoApp.usuario.endereco;
  document.getElementById('inputReferenciaIdoso').value = estadoApp.usuario.referencia;
}

function salvarCadastroIdoso() {
  estadoApp.usuario.nome = document.getElementById('inputNomeIdoso').value.trim() || estadoApp.usuario.nome;
  estadoApp.usuario.telefone = document.getElementById('inputTelefoneIdoso').value.trim() || estadoApp.usuario.telefone;
  estadoApp.usuario.endereco = document.getElementById('inputEnderecoIdoso').value.trim() || estadoApp.usuario.endereco;
  estadoApp.usuario.referencia = document.getElementById('inputReferenciaIdoso').value.trim() || estadoApp.usuario.referencia;

  document.getElementById('homeGreetingName').textContent = `Olá, ${estadoApp.usuario.nome}`;
  document.getElementById('homeGreetingAddress').textContent = `📍 ${estadoApp.usuario.endereco}`;
  irParaTelaApp('screen-home');
}

// ==========================================================================
// PAINEL DO SUPERMERCADO PARCEIRO
// ==========================================================================

function atualizarContadorPedidosMercado() {
  const badge = document.getElementById('partnerOrdersBadge');
  if (badge) badge.textContent = estadoApp.pedidos.length;
}

function renderizarPainelSupermercado() {
  const containerPedidos = document.getElementById('partnerOrdersContainer');
  const containerMercados = document.getElementById('partnerStoresRegistry');
  if (!containerPedidos) return;

  const nomesStatus = {
    1: 'Novo Pedido',
    2: 'Estoque Confirmado',
    3: 'Separando Produtos',
    4: 'Saiu para Entrega',
    5: 'Entregue'
  };

  containerPedidos.innerHTML = '';
  estadoApp.pedidos.forEach(ped => {
    const total = ped.itens.reduce((acc, i) => acc + i.preco * i.qtd, 0);
    const card = document.createElement('div');
    card.className = 'partner-order-card';

    const itensHtml = ped.itens.map(i => `
      <li style="margin-bottom:4px;">
        <strong>${i.qtd}x ${i.nome}</strong> — R$ ${(i.preco * i.qtd).toFixed(2).replace('.', ',')}
      </li>
    `).join('');

    card.innerHTML = `
      <div class="partner-order-header">
        <div>
          <strong>${ped.id} • ${ped.mercadoNome}</strong>
          <div style="font-size:0.85rem; color:var(--text-secondary);">${ped.clienteNome} • ${ped.clienteEndereco}</div>
        </div>
        <span class="status-pill ${ped.statusPasso === 5 ? 'delivered' : ''}">${nomesStatus[ped.statusPasso]}</span>
      </div>

      <ul style="list-style:none; font-size:0.92rem;">
        ${itensHtml}
      </ul>

      <div style="font-size:0.9rem; color:var(--text-secondary);">
        Pagamento: <strong>${ped.pagamento}</strong> • Total: <strong>R$ ${total.toFixed(2).replace('.', ',')}</strong>
      </div>

      <div class="partner-actions-row">
        <button class="action-step-btn ${ped.statusPasso === 2 ? 'primary' : ''}" onclick="definirStatusPeloMercado('${ped.id}', 2)">Confirmar Estoque</button>
        <button class="action-step-btn ${ped.statusPasso === 3 ? 'primary' : ''}" onclick="definirStatusPeloMercado('${ped.id}', 3)">Separar Produtos</button>
        <button class="action-step-btn ${ped.statusPasso === 4 ? 'primary' : ''}" onclick="definirStatusPeloMercado('${ped.id}', 4)">Enviar Entrega</button>
        <button class="action-step-btn ${ped.statusPasso === 5 ? 'primary' : ''}" onclick="definirStatusPeloMercado('${ped.id}', 5)">Concluir Entrega</button>
      </div>
    `;
    containerPedidos.appendChild(card);
  });

  if (containerMercados) {
    containerMercados.innerHTML = SUPERMERCADOS_PARCEIROS.map(m => `
      <div class="metric-box">
        <div style="font-weight:700; font-size:1rem;">🏪 ${m.nome}</div>
        <div class="metric-label">${m.endereco} • ${m.areaEntrega}</div>
      </div>
    `).join('');
  }
}

function definirStatusPeloMercado(idPedido, novoPasso) {
  const ped = estadoApp.pedidos.find(p => p.id === idPedido);
  if (!ped) return;
  ped.statusPasso = novoPasso;
  renderizarPainelSupermercado();
  renderizarAcompanhamentoPedido();
}

window.addEventListener('DOMContentLoaded', () => {
  desenharCadernoManuscrito(0);
  renderizarGradeSimplificada();
  renderizarPainelSupermercado();
  atualizarContadorPedidosMercado();
});
