// Elementos do DOM
const inputText = document.getElementById('input-text');
const decipherBtn = document.getElementById('decipher-btn');
const returnBtn = document.getElementById('return-btn');
const resultSection = document.getElementById('result-section');
const resultContent = document.getElementById('result-content');
const themeAudio = document.getElementById('theme-audio');
const playAudioBtn = document.getElementById('play-audio');
const pauseAudioBtn = document.getElementById('pause-audio');

// Controles de áudio
playAudioBtn.addEventListener('click', () => {
  themeAudio.play();
  playAudioBtn.style.opacity = '0.5';
  pauseAudioBtn.style.opacity = '1';
});

pauseAudioBtn.addEventListener('click', () => {
  themeAudio.pause();
  pauseAudioBtn.style.opacity = '0.5';
  playAudioBtn.style.opacity = '1';
});

// Função principal de decifração
function decifraMensagem(mensagem) {
  // Divide a mensagem em palavras
  const palavras = mensagem.split(' ');

  // Inverte cada palavra individualmente
  const palavrasDecifradas = palavras.map(palavra => {
    return palavra.split('').reverse().join('');
  });

  // Retorna as palavras decifradas unidas
  return palavrasDecifradas.join(' ');
}

// Função para exibir o resultado detalhado
function exibirResultado(entrada, saida) {
  const palavras = entrada.split(' ');

  let html = '<div class="step-by-step">';
  html += '<div class="step-item">';
  html += '<div class="step-title">📥 Entrada Recebida:</div>';
  html += `<div class="step-detail">"${entrada}"</div>`;
  html += '</div>';

  html += '<div class="step-item">';
  html += '<div class="step-title">🔍 Análise da Mensagem:</div>';
  html += `<div class="step-detail">Total de palavras detectadas: ${palavras.length}</div>`;
  html += '</div>';

  html += '<div class="step-item">';
  html += '<div class="step-title">⏳ Processamento Temporal (inversão palavra por palavra):</div>';
  html += '</div>';

  palavras.forEach((palavra, index) => {
    const palavraDecifrada = palavra.split('').reverse().join('');
    html += '<div class="step-item">';
    html += `<div class="step-title">Palavra ${index + 1}:</div>`;
    html += `<div class="step-detail">"${palavra}" → "${palavraDecifrada}"</div>`;
    html += '</div>';
  });

  html += '<div class="step-item">';
  html += '<div class="step-title">✅ Validação Completa:</div>';
  html +=
    '<div class="step-detail">Todas as palavras foram invertidas com sucesso. Preservada a ordem original das palavras na frase.</div>';
  html += '</div>';

  html += '</div>';

  html += '<div class="final-result">';
  html += '<div class="final-label">🏆 MENSAGEM DECIFRADA - AMPULHETA DE ZHONYA DESBLOQUEADA! 🏆</div>';
  html += `<div class="final-output">"${saida}"</div>`;
  html += '</div>';

  resultContent.innerHTML = html;

  // Scroll suave para o resultado
  setTimeout(() => {
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

// Event listener para o botão DECIFRAR
decipherBtn.addEventListener('click', () => {
  const entrada = inputText.value.trim();

  if (!entrada) {
    resultContent.innerHTML =
      '<p class="placeholder-text" style="color: #ff4444;">⚠️ Por favor, insira uma mensagem cifrada para decodificar!</p>';
    return;
  }

  // Processa a mensagem
  const saida = decifraMensagem(entrada);

  // Exibe o resultado detalhado
  exibirResultado(entrada, saida);
});

// Event listener para o botão RETORNAR
returnBtn.addEventListener('click', () => {
  inputText.value = '';
  resultContent.innerHTML =
    '<p class="placeholder-text">Aguardando a mensagem cifrada para iniciar a decodificação temporal...</p>';
  inputText.focus();
});

// Permite decifrar ao pressionar Enter no input
inputText.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    decipherBtn.click();
  }
});

// Foco inicial no input
window.addEventListener('load', () => {
  inputText.focus();
});
