var scriptURL = "https://script.google.com/macros/s/AKfycbzlnxDB7bXMm0KZmbRuJoiSLEzNUDqH3jBZj3iyacA9M-ysVlnCX3v62emwGvPw7-uY/exec";

var form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => document.getElementById('form_alert').innerHTML = "Data has stored")
        .catch(error => document.getElementById('form_alert').innerHTML = "Data has not stored")
})