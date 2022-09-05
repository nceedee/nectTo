let loader = document.getElementById("preloader");

window.addEventListener("load" , function(){
    loader.style.display = 'none';
    loader.style.overflowY = 'hidden'
            
})


const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector(".toast"),
title = toast.querySelector("span"),
subTitle = toast.querySelector("p"),
wifiIcon = toast.querySelector(".icon"),
closeIcon = toast.querySelector(".close-icon");

window.onload = ()=>{
    function ajax(){
        let xhr = new XMLHttpRequest(); //CREATING NEW XML OBJECT
        xhr.open("GET" , "https://jsonplaceholder.typicode.com/posts" , true);
        xhr.onload = ()=>{
            if(xhr.status === 200 && xhr.status < 300){
                toast.classList.remove("offline");
                title.innerHTML = "You 're Online now";
                subTitle.innerHTML = "Hurray! Internet is connected.";
                wifiIcon.innerHTML = "<i class = 'fa-solid fa-wifi'></i>"
                closeIcon.onclick = ()=>{
                    wrapper.classList.add("hide");
                }
                setTimeout(()=>{
                    wrapper.classList.add("hide");
                }, 5000);
            }else{
                offline();
            }
        }
        xhr.onerror = ()=>{
            offline();
        }
        xhr.send();
    }
    function offline(){
        wrapper.classList.remove("hide");
        toast.classList.add("offline");
        title.innerHTML = "You 're offline now" 
        subTitle.innerHTML = "Oops! Internet is disconnected.";
        wifiIcon.innerHTML = " <i class='fa-solid fa-plane'></i>"

    }

    setInterval(()=>{
        ajax()
    } , 100)
}


function clicked(){
    this.document.getElementById("click").style.color="red"
}

