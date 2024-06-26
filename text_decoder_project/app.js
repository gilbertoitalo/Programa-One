const input1 = document.querySelector('textarea#txt-area1');
const input2 = document.querySelector('textarea#txt-area2');
const message = document.getElementById("msg");

const button1 = document.querySelector('button.btn-1');
const button2 = document.querySelector('button.btn-2');
const noneMessage = document.getElementById('none');
const copyButtonContainer = document.getElementById('copy');

button1.onclick = encrypt;
button2.onclick = decrypt;

noneMessage.innerHTML = '';
input1.focus();

function encrypt() {
    const text = input1.value.trim();
    if (text.length === 0) {
        showMessage('Nenhuma mensagem encontrada');
    } else {
        clearDisplay();
        const encryptedText = text.replace(/e/igm, 'enter')
                                  .replace(/i/igm, 'imes')
                                  .replace(/a/igm, 'ai')
                                  .replace(/o/igm, 'ober')
                                  .replace(/u/igm, 'ufat');
        input2.innerHTML = encryptedText;
        showCopyButton();
    }
}

function decrypt() {
    const text = input1.value.trim();
    if (text.length === 0) {
        showMessage('Nenhuma mensagem encontrada');
    } else {
        clearDisplay();
        const decryptedText = text.replace(/enter/igm, 'e')
                                  .replace(/imes/igm, 'i')
                                  .replace(/ai/igm, 'a')
                                  .replace(/ober/igm, 'o')
                                  .replace(/ufat/igm, 'u');
        input2.innerHTML = decryptedText;
        showCopyButton();
    }
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
    copyButtonContainer.innerHTML = '<button class="button btn-3" onclick="copy()">Copiar</button>';
}

function copy() {
    input2.select();
    document.execCommand('copy');
    message.innerHTML = "O texto copiado já está na área de transferência!";
    input1.value = "";
    input1.focus();
}

function startRecognition() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'pt-BR';
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = function() {
            console.log('Voice recognition started. Try speaking into the microphone.');
        };

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            input1.value = transcript;
        };

        recognition.onerror = function(event) {
            console.error('Error occurred in recognition: ' + event.error);
        };

        recognition.onend = function() {
            console.log('Voice recognition ended.');
        };

        recognition.start();
    } else {
        alert('Seu navegador não suporta a API de reconhecimento de voz.');
    }
}