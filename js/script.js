let linkShortening = document.querySelector('.button-to-shorten-links');
let reductionForm = document.querySelector('.reduction-form')

linkShortening.onclick = function () {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '', false);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    const body = 'url=' + encodeURIComponent(reductionForm.value);
    xhr.send(body);
    if (xhr.status !== 201) {
        alert(JSON.parse(xhr.responseText)["url"]);
    } else {
        reductionForm.value = (window.location + JSON.parse(xhr.responseText)["short_url"]);
    }
}