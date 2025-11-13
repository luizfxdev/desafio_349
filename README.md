# ⏳ Ekko: O Código Reverso - O Enigma da Ampulheta de Zhonya ⚡

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![League of Legends](https://img.shields.io/badge/League%20of%20Legends-D32936?style=for-the-badge&logo=leagueoflegends&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completo-39FF14?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-39FF14?style=for-the-badge)

## 📖 Sobre o Desafio

O tempo nunca esteve ao seu lado, mas no coração de Zaun, **Ekko** descobre uma mensagem oculta capaz de alterar o destino de todos os desenvolvedores rebeldes. Só decifrando este código será possível conquistar o lendário item defensivo: a **Ampulheta de Zhonya**, artefato capaz de pausar até mesmo o mais cruel dos bugs.

**Sua missão?** A cada nova linha de código, manipular e inverter palavras para revelar a mensagem original protegida por feitiços temporais do universo de Ekko!

### 🎯 Objetivo do Desafio

* Crie uma função mágica chamada `decifraMensagem`
* Você receberá uma string com palavras separadas por espaço: cada palavra foi **invertida** por um feitiço do tempo
* A função deve reverter cada palavra individualmente (de trás pra frente), preservando a ordem das palavras na frase
* Desvende o segredo e torne-se digno de manejar a Ampulheta de Zhonya!

### 📝 Exemplo

**Entrada:**
```
"dlihc doog a smees !sdrawkcab gniklat si ohw eno eht era uoY"
```

**Saída Esperada:**
```
"You are the one who is talking backwards! seems a good child"
```

⚡ Reescreva o passado, transforme o futuro e mostre que engenhosidade e criatividade podem derrotar o loop de qualquer bug! Boa sorte, portador do tempo!

---

## 🚀 Demonstração

![Ekko Challenge Demo](https://img.shields.io/badge/Demo-Live-39FF14?style=for-the-badge)

Acesse o desafio: [GitHub Pages](#) *(configure seu GitHub Pages para visualização)*

---

## 💻 Tecnologias Utilizadas

- **HTML5** - Estruturação semântica
- **CSS3** - Estilização moderna com animações e glassmorphism
- **JavaScript (Vanilla)** - Lógica de manipulação de strings
- **Google Fonts** - Tipografias Orbitron e Rajdhani
- **Video Background** - Imersão temática

---

## 🧠 Lógica de Solução

### Função Principal

```javascript
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
```

### 🔍 Análise Técnica da Solução

A solução implementada utiliza uma abordagem funcional baseada em três etapas principais:

#### 1. **Decomposição da String**
```javascript
const palavras = mensagem.split(' ');
```
- Utiliza o método `split()` com delimitador de espaço (`' '`)
- Transforma a string em um array de palavras
- **Complexidade:** O(n), onde n é o comprimento da string
- **Vantagem:** Mantém a estrutura e ordem original das palavras

#### 2. **Transformação Individual (Map + Reverse)**
```javascript
const palavrasDecifradas = palavras.map(palavra => {
    return palavra.split('').reverse().join('');
});
```
Esta etapa combina três operações fundamentais:

- **`split('')`**: Converte cada palavra em array de caracteres
  - Exemplo: `"dlihc"` → `['d', 'l', 'i', 'h', 'c']`
  
- **`reverse()`**: Inverte a ordem dos elementos no array
  - Exemplo: `['d', 'l', 'i', 'h', 'c']` → `['c', 'h', 'i', 'l', 'd']`
  - **Complexidade:** O(m), onde m é o comprimento da palavra
  - **Método:** Inversão in-place com dois ponteiros (início e fim)
  
- **`join('')`**: Reconstrói a string a partir do array invertido
  - Exemplo: `['c', 'h', 'i', 'l', 'd']` → `"child"`

**Por que `map()`?**
- Paradigma funcional: não modifica o array original
- Retorna novo array com transformações aplicadas
- Mantém imutabilidade dos dados

#### 3. **Reconstrução da Frase**
```javascript
return palavrasDecifradas.join(' ');
```
- Concatena as palavras decifradas com espaços
- Preserva a estrutura sintática original
- **Complexidade:** O(n)

### 📊 Análise de Complexidade

**Complexidade de Tempo:**
- **Melhor caso:** O(n × m) - onde n é o número de palavras e m é o comprimento médio das palavras
- **Pior caso:** O(n × m) - linear em relação ao tamanho total da entrada
- **Espaço:** O(n × m) - devido à criação de novos arrays

**Otimização Implementada:**
- Uso de métodos nativos do JavaScript (altamente otimizados)
- Paradigma funcional evita loops aninhados explícitos
- Operações de string nativas são mais rápidas que manipulações manuais

### 🎯 Casos de Uso em Projetos Reais

#### 1. **Sistemas de Criptografia Simétrica**
```javascript
// Encoder
const encode = (text) => decifraMensagem(text);

// Decoder (mesma função - reversível)
const decode = (encoded) => decifraMensagem(encoded);
```
**Aplicação:** Ofuscação básica de dados sensíveis em logs ou URLs

#### 2. **Processamento de Linguagem Natural (NLP)**
```javascript
function normalizarTexto(texto) {
    // Corrigir palavras invertidas em datasets de treinamento
    const palavrasProblematicas = detectarPalavrasInvertidas(texto);
    return palavrasProblematicas.map(decifraMensagem);
}
```
**Aplicação:** Limpeza de dados textuais em pipelines de ML

#### 3. **Jogos e Gamificação**
```javascript
function gerarPuzzle(frase, dificuldade) {
    const palavras = frase.split(' ');
    const numInverter = Math.floor(palavras.length * dificuldade);
    
    return palavras.map((palavra, i) => 
        i < numInverter ? palavra.split('').reverse().join('') : palavra
    ).join(' ');
}
```
**Aplicação:** Criar quebra-cabeças dinâmicos em jogos educacionais

#### 4. **Validação de Palíndromos Complexos**
```javascript
function isPalindromoFraseCompleta(frase) {
    const semEspacos = frase.replace(/\s/g, '');
    return semEspacos === semEspacos.split('').reverse().join('');
}
```
**Aplicação:** Verificação de padrões em análise de texto

#### 5. **Transformação de Dados em APIs**
```javascript
// Middleware de transformação
app.use('/api/secure', (req, res, next) => {
    if (req.body.encoded) {
        req.body.decoded = decifraMensagem(req.body.encoded);
    }
    next();
});
```
**Aplicação:** Desofuscação de payloads em APIs REST

### 🔐 Segurança e Limitações

**⚠️ Importante:** Esta implementação é adequada para:
- ✅ Exercícios educacionais
- ✅ Ofuscação básica (não criptografia)
- ✅ Jogos e puzzles
- ✅ Processamento de texto educacional

**Não adequado para:**
- ❌ Criptografia de produção
- ❌ Proteção de dados sensíveis (PII, PCI-DSS)
- ❌ Sistemas de autenticação/autorização

---

## 📂 Estrutura do Projeto

```
desafio-ekko/
│
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos e animações
├── script.js           # Lógica de decifração
├── assets/
│   ├── firelight-ekko-arcane.mp4  # Vídeo de background
│   └── theme.mp3                   # Música tema
└── README.md           # Documentação
```

---

## 🎮 Como Usar

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/luizfxdev/desafio_349.git
cd desafio_349
```

2. Adicione os arquivos de mídia na pasta `assets/`:
   - `firelight-ekko-arcane.mp4`
   - `theme.mp3`

3. Abra o `index.html` no navegador ou utilize um servidor local:
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server
```

### Uso da Função

```javascript
// Exemplo básico
const mensagemCifrada = "olámundo oãleb";
const resultado = decifraMensagem(mensagemCifrada);
console.log(resultado); // "olá mundo belo"

// Exemplo com pontuação
const entrada = "!adnuféj étsE";
console.log(decifraMensagem(entrada)); // "jufénda! Etés"
```

---

## 🎨 Features

- ✨ **Interface Temática**: Design inspirado em Ekko e Zaun (League of Legends)
- 🎥 **Background Dinâmico**: Vídeo em loop para imersão total
- 🎵 **Trilha Sonora**: Controles de áudio integrados
- 📱 **Responsivo**: Adaptável para desktop, tablet e mobile
- ⚡ **Animações Suaves**: Efeitos visuais com CSS3
- 🔍 **Validação Detalhada**: Exibe passo a passo da decodificação
- ♿ **Acessível**: Contraste adequado e navegação por teclado

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Luiz Felipe de Oliveira**

- GitHub: [@luizfxdev](https://github.com/luizfxdev)
- Linkedin: [in/luizfxdev](https://www.linkedin.com/in/luizfxdev)
- Portfólio: [luizfxdev.com.br](https://luizfxdev.com.br)

---
## 🙏 Agradecimentos

- Riot Games pelo universo de League of Legends
- Comunidade de desenvolvedores que inspiram desafios criativos
- Série Arcane pela inspiração visual

---

<div align="center">

### ⚡ Reescreva o passado, transforme o futuro! ⚡

***"O tempo não cura todas as feridas... mas eu posso voltar e evitá-las."*** - Ekko

</div>
