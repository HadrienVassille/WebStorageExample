if(typeof sessionStorage!='undefined') {
    if('message' in sessionStorage) {
        alert("Got the message back");
        document.getElementById('message').value = sessionStorage.message;  // or sessionStorage.getItem("message")
    }
} else {
    alert("sessionStorage is not supported");
}