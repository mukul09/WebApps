
  
 function randomQuote() {
 $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(quote) {
        $('.quote').html('&ldquo;'+quote.quoteText+'&rdquo;')
        //$('#author').html("-"+quote.quoteAuthor)
        $('#author').html("-"+quote.quoteAuthor);
         
        
        var letters='0123456789ABCDEF';
        var color="#";
        for(var i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
        }
        
        $("body").css({'background-color':color,'color':color});
        $("#random").css({'background-color':'white','color':color});
        $("#tweetQuote").css({'background-color':'white','color':color});

        
            $("#random").hover(function(){
          $(this).css('background-color',color);
          $(this).css('color','white');
        },
                   function(){
          $(this).css('background-color','white');
          $(this).css('color',color);
        } );
        
        $("#tweetQuote").hover(function(){
          $(this).css('background-color',color);
          $(this).css('color','white');
        },
                   function(){
          $(this).css('background-color','white');
          $(this).css('color',color);
        } );
        
        
        
        $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text='+quote.quoteText).attr('target', '_blank');
        
      
      
      
      }
 
    });
}

randomQuote();

//Click on the button to generate another random quote

$('#random').click(function() {
  
    randomQuote();
   
  });