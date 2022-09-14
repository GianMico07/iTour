var loader = document.querySelector(".loader-wrapper")

window.addEventListener("load", vanish);

function vanish(){
    loader.classList.add("disappear")
}


// showing Share buttons

function showDiv() {
    document.getElementById('share').style.display = "flex";
    document.getElementById('close').style.display = "flex";
    }

function hideDiv(){
    if (document.getElementById('share').style.display !== "none") {
        document.getElementById('share').style.display = "none";
        document.getElementById('close').style.display = "none";

    }
}