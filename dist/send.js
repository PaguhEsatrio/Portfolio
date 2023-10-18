const scriptURL = 'https://script.google.com/macros/s/AKfycbx4d6d3rQfNL9XiVQ00HXHvTpXr-9sVPzs8iWdivRCDnUxP5P-lD8NCbNqNSYpdDAMf/exec';
const form = document.forms['portfolio'];
const myAlert = document.querySelector('.alert-ku');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (validateForm()) {
    startLoading();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        form.reset();
        myAlert.classList.toggle('hidden');
        console.log('Success!', response)
      })
      .catch(error => console.error('Error!', error.message));
  }
});

const alertSalah = document.querySelector('.alert-salah');

function validateForm() {
  const nama = document.forms['portfolio']['nama'].value;
  const email = document.forms['portfolio']['email'].value;
  const pesan = document.forms['portfolio']['pesan'].value;

  if (nama === '' || email === '' || pesan === '') {
    alertSalah.classList.toggle('hidden');
    return false;
  }
  return true;
}

function startLoading() {
  var loadingIcon = document.getElementById('loadingIcon');
  var buttonText = document.getElementById('buttonText');

  loadingIcon.style.display = 'inline-block';
  buttonText.innerText = 'Loading...';

  // Simulate loading for 2 seconds
  setTimeout(function () {
    // Reset the button to initial state
    loadingIcon.style.display = 'none';
    buttonText.innerText = 'Kirim';
  }, 2000);
}

const closeButton = document.getElementById('close-button');
const closeButton1 = document.getElementById('close-button1');
const alertBox = document.getElementById('alert-ku');
const closeAlertSalah = document.getElementById('alert-salah');

closeButton.addEventListener('click', function () {
  alertBox.classList.add('hidden');
});

closeButton1.addEventListener('click', function () {
  closeAlertSalah.classList.add('hidden');
});