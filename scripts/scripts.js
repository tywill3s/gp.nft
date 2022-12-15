function getVal() {
    var value = document.getElementById("value");
    var id = value.value;
    console.log(id);
    if (id == "123") {

        document.getElementById("output_results").style.opacity = 1;
        document.getElementById("output_results").style.zIndex = 1;

        var name = document.getElementById("name");
        var identify = document.getElementById("identification");
        var description = document.getElementById("description");
        var image = "estimg.gif";
        document.getElementById('image').src=image;

        
        name.innerHTML = '"UMA"';
        name.style.color = "black";
        name.style.fontFamily = "Arial";
        identify.innerHTML = "gp" + id;
        description.innerHTML = '"Uma" was our first ever design and launch. <br>It encompasses everything we value.';
        value.remove();

    } else if (id == "000"){
        document.getElementById("output_results").style.opacity = 1;
        document.getElementById("output_results").style.zIndex = 1;
        value.remove();


    } else {
        document.getElementById("message").innerHTML = "Error: No code found";
        value.style.color = "red";
    }

}

function redirect() {
    window.open("https://ghost-pins.com", '_blank');
}

function resetMessage(){
    document.getElementById("message").innerHTML = "";
}

function logKey(key) {
    console.log(key.key);
    if (key.key == "Enter") {
        getVal()
    } else {
        if (key.key == "Backspace") {
            document.getElementById("value").style.color ="white";
            document.getElementById("output_results").style.opacity = 0;
        }
    }
    var value = document.getElementById("value").value;
    if (value =="") {
        setTimeout(resetMessage, 1000);
    }
}