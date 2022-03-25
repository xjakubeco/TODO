

// $(document).ready(function() {

//        $("#container").slideUp(1500).slideDown(1500);
// });

// $(function()    {

// $("#btn1").on("mouseover", function() {
   
//      $("p").text("pes");
// });



// });

var allToDo = [];

$(function() {
    $("#btn1").on("click", function() {
         
           var str = $("#input").val();
             allToDo.push(str);
              
                $("#todo").text(allToDo);
                
                
            
          
    
    
    
});
     


});
     

