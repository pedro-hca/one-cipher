// DARK THEME

const chk = document.getElementById("chk")

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

// BUTTONS

var inputbox = document.querySelector(".input_box");
var outputbox = document.querySelector(".output_box");

// FUNCTION ENCRYPT

function encryptBtn() {
    const encryptText = encrypt(inputbox.value);
    outputbox.value = encryptText;
    inputbox.value = "";
}

function encrypt(stringEncrypt) {
    let matrizCode = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringEncrypt = stringEncrypt.toLowerCase();

    for(let i = 0; i < matrizCode.length; i++) {
        if(stringEncrypt.includes(matrizCode[i][0])) {
            stringEncrypt = stringEncrypt.replaceAll(matrizCode[i][0], matrizCode[i][1]);
        }
    }

    return stringEncrypt
}

// FUNCTION DECRYPT

function decryptBtn() {
    const decryptText = decrypt(outputbox.value);
    outputbox.value = decryptText;
    inputbox.value = "";
}

function decrypt(stringDecrypt) {
    let matrizCode = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringDecrypt = stringDecrypt.toLowerCase();

    for(let i = 0; i < matrizCode.length; i++) {
        if(stringDecrypt.includes(matrizCode[i][1])) {
            stringDecrypt = stringDecrypt.replaceAll(matrizCode[i][1], matrizCode[i][0]);
        }
    }

    return stringDecrypt
}


// FUNCTION COPY


function copyBtn() {
    if (outputbox.value.length === 0) {
        outputbox.innerHTML = "You need to encrypt or decrypt something first to copy"
    }else {
        let copyText = document.getElementById("output__box").value;
        navigator.clipboard.writeText(copyText)
        // .then(() => {
        //     outputbox.value = ("Copied to clipboard");
        // })
    }
}
