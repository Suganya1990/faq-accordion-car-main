



//event handler

var  acc = document.getElementsByClassName('accordion__question');
var div  = document.getElementsByClassName('accordion__card');


for(var i  = 0; i< acc.length; i++){
   
    acc[i].addEventListener("click", function(i) {
    
    

        this.classList.toggle("active");
        var panel = this.nextElementSibling; 

        if(panel.style.maxHeight){
            this.style.fontWeight='400';
            this.style.color='hsl(240, 6%, 50%)';
            panel.style.maxHeight = null;
            this.children[0].style.transform ='scaleY(1)';
            
   
          
        } else{
            console.log(this)
            this.style.fontWeight='700';
            this.style.color='Black';
            panel.style.maxHeight = panel.scrollHeight + 'px';
            this.children[0].style.transform ='scaleY(-1)';
     
        }
    });

    
}

