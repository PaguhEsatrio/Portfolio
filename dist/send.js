const scriptURL = 'https://script.google.com/macros/s/AKfycbx4d6d3rQfNL9XiVQ00HXHvTpXr-9sVPzs8iWdivRCDnUxP5P-lD8NCbNqNSYpdDAMf/exec';
    const form = document.forms['portfolio'];
    const myAlert = document.querySelector('.alert-ku');

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (validateForm()) {
        startLoading();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            form.reset();
            myAlert.classList.toggle('opacity-0');
            console.log('Success!', response)
          })
          .catch(error => console.error('Error!', error.message));
      }
    });

    function validateForm() {
      const nama = document.forms['portfolio']['nama'].value;
      const email = document.forms['portfolio']['email'].value;
      const pesan = document.forms['portfolio']['pesan'].value;

      if (nama === '' || email === '' || pesan === '') {
        alert('Harap lengkapi semua field sebelum mengirim.');
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
      }, 1500);
    }

    const closeButton = document.getElementById('close-button');
    const alertBox = document.getElementById('alert-border-1');
  
    closeButton.addEventListener('click', function () {
      alertBox.classList.add('opacity-0');
    });