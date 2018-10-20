$(document).ready(function(){
  var decimal=true;
  var number="";
  var sign=true;
  var optr=true;
  var numberTwo="";
  var selectedOperator="";
  var len;
  
  //all clear
 $(".AC").click(function(){
   number="";
   numberTwo="";
   $(".answer").text("0");
   $(".history").text("0");
   decimal=true;
   optr=true;
   sign=true;
 });
  
  
  //delete
  $(".DEL").click(function(){
    len=$(".answer").text().length;
    
   if($(".answer").text().slice(len-1,len)==".")
    decimal=true;
    else if($(".answer").text().slice(len-1,len)==selectedOperator)
    {
        number=$(".answer").text().slice(0,len)
        $(".answer").text(number);
        optr=true;
    }
    else if(len==1&&sign==false)
      {
        sign=true;
      }
    
      
        number=number.substring(0,number.length-1);
         $(".answer").text(number);
      
  });
    
  //digits
  $(".number").click(function(){
    if(number.length<13) //to the input of numbers
    {
        number+=$(this).val();
        $(".answer").text(number);
        //console.log(number);
    }
  });
  
  //decimal
  $(".dot").click(function(){
    if(decimal===true)
      {
       number+=$(this).val(); 
        $(".answer").text(number);
        decimal=false;
      }
    else{
      $(".answer").text(number);
    }
  });
  
 //operators
  $(".operator").click(function(){
    if(optr===true&&$(".answer").text().length>0)
    {selectedOperator=$(this).val();
     numberTwo=number;
    number+=selectedOperator;
    $(".answer").text(number);
     number="";
     optr=false;
     decimal=true;
     sign=true;
    }
    
    
    
  });
  
  //change of sign
  $(".sign").click(function(){
   if(sign==true)
    {
        number="-"+number;
        sign=false; 
      $(".answer").text(number);
    } 
    else
     {
       number=number.substring(1,number.length);
       sign=true; 
       $(".answer").text(number);
     }
  });
  
  
  //evaluation
  $("#equalButton").click(function(){
    if(optr===false)
    {
      if(selectedOperator=="+")
     { number=parseFloat(number) + parseFloat(numberTwo);
      number=number.toFixed(2);
    }
    
    else if(selectedOperator=="-")
    {number=parseFloat(numberTwo) - parseFloat(number);
      number=number.toFixed(2);
   
    }
    else if(selectedOperator=="*")
      number = (parseFloat(numberTwo) * parseFloat(number)).toPrecision(3);
    
    else if(selectedOperator=="/")
    {number=parseFloat(numberTwo) /
    parseFloat(number);
      number=number.toPrecision(5);
    }
      
    else if(selectedOperator=="^")
   number=Math.pow(numberTwo,number).toPrecision(5);
    
      $(".answer").text(number);
      numberTwo=number;
    console.log(numberTwo);
      optr=true;
      //decimal=true;
    }
  });
  
  $(".sign").click(function(){
    if(sign==true)
      {
        
      }
    else
      {
        
      }
  });
  
  
});