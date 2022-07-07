
/*function changeimg(i,j){
    switch(i,j){
         case (0,0): imge[0].src = smallimg[0].src;
         break;
         case 0,1: imge[0].src = smallimg[1].src;
         break;
         case 0,2: imge[0].src = smallimg[2].src;
         break;
    }
}*/   

//sorting
let list =document.querySelectorAll('.list');
let column= document.querySelectorAll('.column');
for(let i=0; i<list.length; i++){ 
    list[i].addEventListener('click', function(){
        for(let j=0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');  
        let dataFilter = this.getAttribute('data-filter');
        for(let k=0; k<column.length; k++){
            column[k].classList.remove('active');
            column[k].classList.add('hide');
   
   
            if(column[k].getAttribute('data-item') == dataFilter || 
            dataFilter == "all"){
                column[k].classList.remove('hide');
                column[k].classList.add('active');
            }
        }
    })
}

						   

/* going to detailed products*/

function funcu(inp){
    let inn =inp;
    localStorage.setItem('i',inn);   
    window.document.location="products.html";    
}






//next page buttons
/*
var counter = 0;
var c;
var li=document.getElementsByClassName('active');
//if(li.dataFilter.value == active){
var elems = document.getElementsByClassName('column');
for (var i=0;i<elems.length;i+=1){
  elems[i].style.display = 'block';
}


 
$('.column').hide();
for(counter=0; counter<=8 ;counter++){   
    $('#column-'+counter+'').show();  
    $('.back').hide();
}

$('body').on('click', '.next', function() {
    $('.column').hide();
    if(counter >= 8 && counter <=15) {     
        for(counter=9; counter<=15 ;counter++){ 
          $('#column-'+counter+'').show();  
		  $('.back').show(); 
          $('.next').hide();                
        }
	} 
});


$('body').on('click', '.back', function() {   
    $('.column').hide();
    if(counter >= 8 && counter <=16) { 
        for(counter=8; counter>=0 ;counter--){ 
          $('#column-'+counter+'').show();  
		  $('.back').hide();
          c=counter;
        }
	};	
});

*/