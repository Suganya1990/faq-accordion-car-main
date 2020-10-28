



//event handler

var  acc = document.getElementsByClassName('accordion__question');
var div  = document.getElementsByClassName('accordion__card');


for(var i  = 0; i< acc.length; i++){
   
    acc[i].addEventListener("click", function(i) {
    
    

        this.classList.toggle("active");
        var panel = this.nextElementSibling; 

        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
            this.children[0].style.transform ='scaleY(-1)';
            
   
          
        } else{
            panel.style.maxHeight = panel.scrollHeight + 'px';
            this.children[0].style.transform ='scaleY(1)';
            div[0].style.height+= panel.style.scrollHeight + 'px'
            
        }
    });

    
}

