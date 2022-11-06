window.onload = function(){
    let search = document.getElementsByClassName("btn")[0];

    search.addEventListener("click", function(element){
        element.preventDefault();

        var httpReq = new XMLHttpRequest();

        var url = "./superheroes.php";

        httpReq.onreadystatechange = function(){
            if(httpReq.readyState === XMLHttpRequest.DONE){
                if(httpReq.status === 200){
                    alert(this.responseText);
                    document.querySelector("#container").innerHTML = this.responseText;
                    
                }
            
                else{
                    alert('There was a problem with the request.');
                }
            }
        }
        httpReq.open('GET', url, true);
        httpReq.send();
        
    });
}

