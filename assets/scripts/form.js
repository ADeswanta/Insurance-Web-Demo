function tampilkanError(message, messageId = "errMessage") {
    let errElm = document.getElementById(messageId);
    let errMessage = document.querySelector(`${messageId} .msg`);

    if (message != "") {
        errMessage.innerText = message;
        errElm.classList.remove("hidden");
    } else {
        errElm.classList.add("hidden");
    }
}

function tampilkanFieldError(msg, id) {
    if (msg != "") {
        document.getElementById(`${id}`).parentNode.classList.add("invalid");
        document.getElementById(`${id}`).oninput = (e) => {
            document.getElementById(`${id}`).parentNode.classList.remove("invalid");
            document.getElementById(`${id}`).oninput = null;
        };
        document.getElementById(`${id}Err`).innerText = msg;
    } else {
        document.getElementById(`${id}`).parentNode.classList.remove("invalid");
        document.getElementById(`${id}Err`).innerText = "";
    }
}

function validateForm(data) {

}

function checkFileInput(input) {
  const fileNameSpan = input.parentElement.querySelector('.inputGroup.file .upload');
  if (input.files.length > 0) {
    fileNameSpan.textContent = input.files[0].name;
  } else {
    fileNameSpan.textContent = 'Upload file...';
  }
}

const fileInputs = document.querySelectorAll('.inputGroup.file input[type="file"]');
fileInputs.forEach(input => {
  checkFileInput(input);

  input.addEventListener('change', () => checkFileInput(input));
});