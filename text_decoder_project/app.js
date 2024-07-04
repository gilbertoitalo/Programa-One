document.addEventListener('DOMContentLoaded', () => {

const input1 = document.querySelector('textarea#txt-area1');
const input2 = document.querySelector('textarea#txt-area2');
const message = document.getElementById("msg");

const button1 = document.querySelector('button.btn-1');
const button2 = document.querySelector('button.btn-2');
const micButton = document.getElementById('mic-btn');
const noneMessage = document.getElementById('none');
const copyButton = document.getElementById('copy');

let previousText = '';

if (button1) {
    button1.onclick = encrypt;
}     
if (button2) {
    button2.onclick = decrypt;
}
if (micButton) { 
    micButton.onclick = startRecognition;
}
if (copyButton){
    copyButton.onclick = copy;      
}


noneMessage.innerHTML = '';
input1.focus();

function encrypt() {
    const text = input1.value.trim();
    if (!isValidText(text)){
        showMessage('Texto inválido. Use apenas letras minúsculas e sem acento. ');
            return;     
    }
    if (text.length === 0) {
        showMessage('Nenhuma mensagem encontrada');
    } else {
        clearDisplay();
        const encryptedText = text.replace(/e/igm, 'enter')
                                  .replace(/i/igm, 'imes')
                                  .replace(/a/igm, 'ai')
                                  .replace(/o/igm, 'ober')
                                  .replace(/u/igm, 'ufat');
        input2.value = encryptedText;
        showCopyButton();
    }
}

function decrypt() {
    const text = input1.value.trim();
    if (!isValidText(text)){
        showMessage('Texto inválido. Use apenas letras minúsculas e sem acento. ');
            return;     
    }

    if (text.length === 0) {
        showMessage('Nenhuma mensagem encontrada');
    } else {
        clearDisplay();
        const decryptedText = text.replace(/enter/igm, 'e')
                                  .replace(/imes/igm, 'i')
                                  .replace(/ai/igm, 'a')
                                  .replace(/ober/igm, 'o')
                                  .replace(/ufat/igm, 'u');
        input2.value = decryptedText;
        showCopyButton();
    }
}

function isValidText(text){
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function showMessage(msg) {
    noneMessage.innerHTML = `<h2 id="none">${msg}</h2>`;
    input1.focus();
}

function clearDisplay() {
    noneMessage.innerHTML = '';
    document.querySelector('img.icone').style.display = 'none';
    input2.innerHTML = '';
}

function showCopyButton() {
    copyButton.innerHTML = '<button class="button btn-3" onclick="copy()">Copiar</button>';
}

async function copy() {
    try {
        await navigator.clipboard.writeText(input2.value);
        message.innerHTML = "O texto copiado com sucesso!";
        input1.value = "";
        input1.focus();
    } catch (err) {
        console.error('Falha ao copiar texto: ', err);
        message.innerHTML = "Falha ao copiar texto. Tente novamente.";
    }
}

function startRecognition() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'pt-BR';
        recognition.continuous = false;
        recognition.interimResults = true;

        recognition.onstart = function() {
            console.log('Voice recognition started. Try speaking into the microphone.');
        };

        recognition.onresult = function(event) { 
            console.log('Voice recognition result received', event.results);
            let transcript = '';
            for (let i = 0; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript + '';
            }
            transcript = normalizeText(transcript.trim());
            input1.value = transcript;
            console.log('Transcribed text: ' , transcript);
        };

        recognition.onerror = function(event) {
            console.error('Error occurred in recognition: ' + event.error);
            if (event.error === 'no-speech') {
                alert('Nenhuma fala detectada. Por favor, fale claramente no microfone.');
            }
        }

        recognition.onend = function() {
            console.log('Voice recognition ended.');
        };

        recognition.start();
        console.log('Recognition started');
    } else {
        alert('Seu navegador não suporta a API de reconhecimento de voz. Recomendamos Google Chorme ou Mozilla Firefox');
        console.error('API de voz nao suportada');
    }
}

function normalizeText(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

input1.addEventListener('input',clearArea2);

function clearArea2(){
    const currentText = input1.value.trim();
    if  (currentText !== previousText){
        input2.value = '';
        previousText = currentText
    }
}

});

