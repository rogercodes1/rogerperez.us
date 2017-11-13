

var pageCount =0;
var i=0;
var quotePara = document.getElementById("quotePara");
var getQuote = document.getElementById("getQuote");

// Request to get json data where the quotes are located
getQuote.addEventListener("click", function() {
  var ourRequest= new XMLHttpRequest();
  ourRequest.open('GET','http://rogerperez.us/JSON/quotes-1.json');
  ourRequest.onload= function() {
    if (ourRequest.status>= 200 && ourRequest.status<400){
    var ourData= JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  } else{
    console.log("Connection Error, Please try again.")
  }
  };

  ourRequest.send();

});


function renderHTML(data){
  var htmlString="";
  var htmlAuthor="";

  // for (j=0;j<data.length;j++){
  //   remove
  // }
  for (i=0;i<data.length; i++){

    htmlString=data[i].quote;
    htmlAuthor=data[i].author;

  }

  quotePara.textContent = data[pageCount].quote;
  author.textContent = data[pageCount].author;
  pageCount++;

  if (pageCount>data.length-1){
    pageCount=0; //This whill reset the page count so the quote generator can continue going.
    // getQuote.classList.add('hide-me');
  }
  //tweetButton.js

  var getPostQuote=document.getElementById("quotePara").innerHTML, linkElement= document.getElementById("tweet-quote");
  var getAuthor=document.getElementById("author").innerHTML
    $(linkElement).click(function(event){
      event.preventDefault();

      var tweetedLink=window.location.href;
      window.open("http://twitter.com/intent/tweet?hashtags=quotes&" + tweetedLink +
      "&text=" +'"'+ getPostQuote + '"' + "---"+ getAuthor +
      "&via=iRogersb&", "twitterwindow", "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
    });

}
