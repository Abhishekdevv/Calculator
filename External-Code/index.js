// Disables the input textarea
 $("input").prop('disabled', true);
//  Button click function
 $(".btn").click(function() { 
     let clickedBtn = $(this).text(); 
     console.log(clickedBtn)
     
     $(this).addClass("fade");
     setInterval(() => {
        $(this).removeClass("fade");
     }, 300);
    
     let inputValue = $("#inputDiv").val();
    
        if (clickedBtn==="⌫"){
     
                $("input").val("")
           
            }
           else if (clickedBtn==="x"){
     
               clickedBtn="*"
               $("#inputDiv").val( $("#inputDiv").val()+ clickedBtn)   
          
           }
           else if (clickedBtn==="÷"){
     
            clickedBtn="/"
            $("#inputDiv").val( $("#inputDiv").val()+ clickedBtn)   
       
        }
            else if (clickedBtn==="="){
  
               $("#inputDiv2").val( eval($("#inputDiv").val())) 
          
           }
            
        else {
           $("#inputDiv").val($( 
              "#inputDiv").val() + $(this ).text()); }
    } 
    
  
); 



// Keyboard function

$(document).keydown(function(event){
console.log(event.key)
let key = event.key



switch (key) {
    case ("0"):
        $("#inputDiv").val($("#inputDiv").val()+key);
        $(btn0).addClass("fade");
     setInterval(() => {
        $(btn0).removeClass("fade");
     }, 300);
        break;

        case ("1"):
            $("#inputDiv").val($("#inputDiv").val()+key)
            $(btn1).addClass("fade");
     setInterval(() => {
        $(btn1).removeClass("fade");
     }, 300);
        break;
        case ("2"):
        $("#inputDiv").val($("#inputDiv").val()+key)
        $(btn2).addClass("fade");
     setInterval(() => {
        $(btn2).removeClass("fade");
     }, 300);
        break;

        case ("3"):
             $("#inputDiv").val($("#inputDiv").val()+key)
            $(btn3).addClass("fade");
     setInterval(() => {
        $(btn3).removeClass("fade");
     }, 300);
        break;
        case ("4"):
             $("#inputDiv").val($("#inputDiv").val()+key)
            $(btn4).addClass("fade");
     setInterval(() => {
        $(btn4).removeClass("fade");
     }, 300);
        break;
        case ("5"):
             $("#inputDiv").val($("#inputDiv").val()+key)
            
            $(btn5).addClass("fade");
     setInterval(() => {
        $(btn5).removeClass("fade");
     }, 300);
        break;
        case ("6"):
            $("#inputDiv").val($("inp#inputDivut").val()+key)
            
            $(btn6).addClass("fade");
     setInterval(() => {
        $(btn6).removeClass("fade");
     }, 300);
        break;
        case ("7"):
             $("#inputDiv").val($("#inputDiv").val()+key)
            $(btn7).addClass("fade");
            setInterval(() => {
               $(btn7).removeClass("fade");
            }, 300);
        break;
        case ("8"):
             $("#inputDiv").val($("#inputDiv").val()+key)
            $(btn8).addClass("fade");
            setInterval(() => {
               $(btn8).removeClass("fade");
            }, 300);
        break;
        case ("9"):
             $("#inputDiv").val($("#inputDiv").val()+key)
            $(btn9).addClass("fade");
            setInterval(() => {
               $(btn9).removeClass("fade");
            }, 300);
        break;
        case ("÷"):
             $("#inputDiv").val($("#inputDiv").val()+ key)
            $(btnDivide).addClass("fade");
            setInterval(() => {
               $(btnDivide).removeClass("fade");
            }, 300);
        break;
        case ("x"):
             $("#inputDiv").val($("#inputDiv").val()+key)
            $(btnx).addClass("fade");
            setInterval(() => {
               $(btnx).removeClass("fade");
            }, 300);
        break;
        case ("-"):
             $("#inputDiv").val($("#inputDiv").val()+key)

            $(btnMinus).addClass("fade");
            setInterval(() => {
               $(btnMinus).removeClass("fade");
            }, 300);
        break;
        case ("+"):
             $("#inputDiv").val($("#inputDiv").val()+key)
            $(btnPlus).addClass("fade");
            setInterval(() => {
               $(btnPlus).removeClass("fade");
            }, 300);
        break;
        case ("="):
         $("#inputDiv2").val( eval($("#inputDiv").val())) 
            $(btnEqual).addClass("fade");
            setInterval(() => {
               $(btnEqual).removeClass("fade");
            }, 300);
            case ("Enter"):
         $("#inputDiv2").val( eval($("#inputDiv").val())) 
            
        break;
        case ("Backspace"):
            $("input").val("");
            $(btnBackSpace).addClass("fade");
            setInterval(() => {
               $(btnBackSpace).removeClass("fade");
            }, 300);
        break;
    default:
        break;
}

});


// if (inputValue === 0) {
//    $("#inputDiv").val($(this).text()); }
   
//    else 