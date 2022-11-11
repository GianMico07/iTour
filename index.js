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


function ShowWFDiv() {
    document.getElementById('weather-forecast-cont').style.display = "flex";
    // function myFunction(x) {
    //     if (x.matches) { // If media query matches
    //         document.getElementById('weather-forecast-cont').style.display = "none";
    //         document.getElementById('mb-wf-cont').style.display = "flex";
    //     } else {
    //         document.getElementById('weather-forecast-cont').style.display = "flex";
    //     }
    //   }
      
    //   var x = window.matchMedia("(max-width: 720px)")
    //   myFunction(x) // Call listener function at run time
    //   x.addListener(myFunction) // Attach listener function on state changes



    // document.getElementById('weather-forecast-cont').style.display = "flex";
    document.getElementById('close').style.display = "flex";
    }

function HideWFDiv(){
    if (document.getElementById('weather-forecast-cont').style.display !== "none"){
        document.getElementById('weather-forecast-cont').style.display = "none";
        document.getElementById('close').style.display = "none";
        
    }
}

var menuList=document.getElementById("menuList");
        menuList.style.maxHeight ="0px";
        function togglemenu(){
            if (menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight ="200px";
            }

            else {
                menuList.style.maxHeight ="0px";
            }
        }


        