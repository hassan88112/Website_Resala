jQuery(document).ready (function(){   
    "use strict";
    $('#slider-carousel').carouFredSel({
        
       responsive :true,
        width:'100%',
        circular:true,
        scroll:{
        items:1,
        duration:500,
        pauseOnHover:true,
        },
        auto:true,
        items:
               {
                         visible:{
                         min:1,
                         max:1
                         },
                         height :"variable"
                         },
                         pagination:{
                         
                         container:".sliderpager",
                         pageAnchorBuilder:false
                         
                         }
});
     $(window).scroll(function(){    
         var top = $(window).scrollTop();
         if(top >=60 ){       
             $("header").addClass('second');
         }
         else
                          if($("header").hasClass('second')){
                          $("header").removeClass('second'); 
         } 
     });
       $('a').smoothScroll(); 
    $('#menu').slicknav({
        lable:'',
    }); 
});