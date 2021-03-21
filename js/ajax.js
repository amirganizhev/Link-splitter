/*Кнопка отправки на сервер*/
const linkShortening = document.querySelector('.button-to-shorten-links');
/*Форма с ссылкой*/
const reductionForm = document.querySelector('.reduction-form')

linkShortening.onclick = function () {
    /*Валидация формы*/
    const url_reg = /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi;

    if (!url_reg.test(reductionForm.value)) {
        alert("Некорректный URL");
        return false;
    } 

    /*Ajax запрос*/
    
    /*Создание обьекта, для посылание запроса на различные ресурсы*/
    const xhttp = new XMLHttpRequest();
    /*Ссылка на сервер*/
    const url = "ССЫЛКА_НА_СЕРВЕР";
    /*Переменная данных для отправки на сервер*/
    const params = 'url=' + encodeURIComponent(reductionForm.value);
    /*Открытие запроса, асинхронный - true, синхронный - false*/
    xhttp.open('POST', url, false);
    /*Конфигурация запросов заголовков,
    показывает как отправлять данные,
    какие данные как их обрабатывать и тд,
    синтаксис: XMLHttpRequest.setRequestHeader(header, value)*/
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    /*Послание запроса*/
    xhttp.send(params);
    /*Если статус не равен 201, тоесть ошибка, то запрос отправлен неудачно. 
    В остальных случаях все отправится, и ответ от сервера, в формате JSON, выводится обратно в форму*/
    if (xhttp.status !== 201) {
        alert(JSON.parse(xhttp.responseText)["url"]);
    } else {
        reductionForm.value = (window.location + JSON.parse(xhttp.responseText)["short_url"]);
    }

}