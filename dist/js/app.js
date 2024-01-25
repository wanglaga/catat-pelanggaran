const scriptURL = 'https://script.google.com/macros/s/AKfycbzm3x4iv5LzAyZhob3Z0lcfNHX4H1U3gJZ7njuoHbtlLPte3qleQpkV-KKZrbqWVJzr/exec'
const form = document.forms['Pelanggaran SMP DW'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');

form.addEventListener('submit', e => {
    e.preventDefault()
    btnLoading.classList.toggle('hidden');
    btnKirim.classList.toggle('hidden');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            btnLoading.classList.toggle('hidden');
            btnKirim.classList.toggle('hidden');
            location.replace('sukses.html');
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})