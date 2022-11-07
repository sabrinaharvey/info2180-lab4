window.onload = function(){
    let search = document.getElementsByClassName("btn")[0];
    
   

    search.addEventListener("click", function(element){
        element.preventDefault();
        

        var httpReq = new XMLHttpRequest();
        var charInput = document.getElementById('character').value;
        
        
        var url = "./superheroes.php";

        httpReq.onreadystatechange = function(){
            if(httpReq.readyState === XMLHttpRequest.DONE){
                if(httpReq.status === 200){
                    document.querySelector("#result").innerHTML = this.responseText;
                    
                }
            
                else{
                    alert('There was a problem with the request.');
                }
            }
        }
        httpReq.open('POST', url);
        httpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        httpReq.send('character=' + encodeURIComponent(charInput));
        
    });
}

