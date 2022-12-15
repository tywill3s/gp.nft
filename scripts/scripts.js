function getVal() {
    var id = document.getElementById("value").value;
    console.log("Entered Function");
    console.log(id);
    var title = document.getElementById("identification");
    if (id == "123") {
        window.location.href = "results/index.html";
        title.value = "WAHOO";
    } else {
        document.getElementById("message").innerHTML = "Error: No code found";
    }

    
    return id;
}


function redirect() {
    window.open("https://ghost-pins.com", '_blank');
}
