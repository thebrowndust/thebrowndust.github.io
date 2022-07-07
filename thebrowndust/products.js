let inp=localStorage.getItem('i');
//console.log(typeof(inp));
$('.try-'+inp+'').css('display','flex');

/*switch(inp){
    case '0' :  $('.try-'+0+'').css('display','flex');
             //document.getElementsByClassName("try-0").style.display="flex" 
             break;
    case '1' : $('.try-'+1+'').css('display','flex'); 
             break;
    case '2' : $('.try-'+2+'').css('display','flex');
             break;
    case '3' : $('.try-'+3+'').css('display','flex');
             break;
    case '4' : $('.try-'+4+'').css('display','flex');
             break;
    case '5' : $('.try-'+5+'').css('display','flex');
             break;
    case '6' : $('.try-'+6+'').css('display','flex');
             break;
    case '7' : $('.try-'+7+'').css('display','flex');
             break;
    case '8' : $('.try-'+8+'').css('display','flex');
             break;
    case '9' : $('.try-'+9+'').css('display','flex');
             break;
    case '10' : $('.try-'+10+'').css('display','flex');
             break;
    case '11' : $('.try-'+11+'').css('display','flex');
             break;
    case '12' : $('.try-'+12+'').css('display','flex');
             break;
    case '13' : $('.try-'+13+'').css('display','flex');
             break;
    case '14' : $('.try-'+14+'').css('display','flex');
             break;
    case '15' : $('.try-'+15+'').css('display','flex');
             break;
    case '16' : $('.try-'+16+'').css('display','flex');
             break;
    case '17' : $('.try-'+17+'').css('display','flex');
             break;

}*/
//window.onload = function(){
   
    var imge=document.getElementsByClassName('imge');
    var smallimg=document.getElementsByClassName('smallimg');
   
    /*smallimg[0].onclick=function(){
        imge[0].src = smallimg[0].src;
    }
     smallimg[1].onclick=function(){
        imge[0].src = smallimg[1].src;
    }*/
    
   /* smallimg[3].onclick=function(){
        imge[2].src = smallimg[3].src;
    }
    smallimg[4].onclick=function(){
        imge[2].src = smallimg[4].src;
    }
    smallimg[5].onclick=function(){
        imge[3].src = smallimg[5].src;
    }
    smallimg[6].onclick=function(){
        imge[3].src = smallimg[6].src;
    }
    smallimg[7].onclick=function(){
        imge[3].src = smallimg[7].src;
    }
    smallimg[9].onclick=function(){
        imge[5].src = smallimg[9].src;
    }
    smallimg[10].onclick=function(){
        imge[5].src = smallimg[10].src;
    }
    smallimg[11].onclick=function(){
        imge[5].src = smallimg[11].src;
    }
    smallimg[12].onclick=function(){
        imge[6].src = smallimg[12].src;
    }
    smallimg[13].onclick=function(){
        imge[6].src = smallimg[13].src;
    }
    smallimg[16].onclick=function(){
        imge[9].src = smallimg[16].src;
    }
    smallimg[17].onclick=function(){
        imge[9].src = smallimg[17].src;
    }
    smallimg[19].onclick=function(){
        imge[11].src = smallimg[19].src;
    }
    smallimg[20].onclick=function(){
        imge[11].src = smallimg[20].src;
    }
     
    smallimg[25].onclick=function(){
        imge[16].src = smallimg[25].src;
    }
    smallimg[26].onclick=function(){
        imge[16].src = smallimg[26].src;
    }  
    smallimg[27].onclick=function(){
        imge[17].src = smallimg[27].src;
    }
    smallimg[28].onclick=function(){
        imge[17].src = smallimg[28].src;
    }*/


function changeimg(main,small){
    smallimg[small].onclick=function(){
        imge[main].src = smallimg[small].src;
    }
    smallimg[small].onclick=function(){
        imge[main].src = smallimg[small].src;
    }
}
//}