function getVal() {
    var id = document.getElementById("value").value;
    console.log("Entered Function")
    console.log(id)
    if (id == "123") {
        window.location.href = "results/index.html";
    } else {
        document.getElementById("message").innerHTML = "Error: No code found";
    }

    
    return id;
}

