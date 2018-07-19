function sendMessage(msg) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/message', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function () {
        // do something to response
        console.log(this.responseText);
    };
    xhr.send();

}