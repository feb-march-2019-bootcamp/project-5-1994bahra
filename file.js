import $ from 'jquery'


let colorNum = 0;
let colors = ["red","skyblue", "orange", "purple","#A4C639",'palevioletred','salmon','#FFBF00','#CD9575','#5F9EA0'];
let twitterURL = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=';
let tumblrURL = 'https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DLatin%2BProverb%26content%3DIf%2Bthe%2Bwind%2Bwill%2Bnot%2Bserve%252C%2Btake%2Bto%2Bthe%2Boars.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button';

$(document).ready(function() {
    // there are array of quotes
    let quotes = [{
        author: "Zig Ziglar",
        quote: "If you can dream it, you can achieve it."
      },{
      author: "Dr. Seuss",
      quote: "Don't cry because it's over, smile because it happened."
    }, {
      author: "Oscar Wilde", 
      quote: "Be yourself; everyone else is already taken."
    },
    {
        author: "Steve Jobs", 
        quote: "The only way to do great work is to love what you do." 
      }, {
      author: "Friedrich Nietzche", 
      quote: "He who has a why to live can bear any how." 
    }, {
      author: "André Gide", 
      quote: "It is better to be hated for what you are than to be loved for what you are not."
    }, { 
      author: "Albert Einstein", 
      quote:"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."
    }, {
      author: "Kevin Kruse", 
      quote: "Life isn’t about getting and having, it’s about giving and being."
    }, {
      author: "Mark Twain", 
      quote: "Never put off till tomorrow what may be done day after tomorrow just as well."
    }, {
      author: "Douglas Adams", 
      quote: "I love deadlines. I love the whooshing noise they make as they go by."
    }, {
      author: "Theodore Roosevelt", 
      quote: "Do what you can, with what you have, where you are."
    }, {
      author: "Rumi", 
      quote: "Let the beauty of what you love be what you do."
    }, {
      author: "Khalil Gibran", 
      quote: "Your pain is the breaking of the shell that encloses your understanding."
    }, {
      author: "Søren Kierkegaard", 
      quote: "Life is not a problem to be solved, but a reality to be experienced."
    }, {
      author: "Immanuel Kant", 
      quote: "Immaturity is the incapacity to use one's intelligence without the guidance of another."
    },{
    author: "Babe Ruth", 
      quote: 'Every strike brings me closer to the next home run.'
    }
];
    
function getRandom(min, max) {
    // use Math.round to round  random number generator
return Math.round(Math.random() * (max - min)) + min;
}
// change the color when you change the quote
function chColor(){
      if(colorNum == colors.length)
          colorNum = 0; 
      $("body").css("transition", "background-color 2s ease");
      $("body").css("background-color", colors[colorNum]);
      $(".text").css("transition","color 2s ease" );
      $(".text").css("color", colors[colorNum]);
      $(".button").css("transition", "background-color 2s ease"); 
      $(".button").css("background-color", colors[colorNum]); 
      
    }
// get a new quote
  function getQuote (){
    //   min=0 , max=quotes.length
    let number = getRandom(0,quotes.length); 
 $("#quotetext").html(quotes[number].quote);
 $("#author").html(quotes[number].author); 
    }
    
    getQuote(); 
    $("#new-quote").on("click", function(){
 
    getQuote(); 
    chColor(); 
    colorNum++; 
     
    });
    let randomQuote = getRandom(); 
    let currentQuote = randomQuote.quote;
    let currentAuthor = randomQuote.author;

    $("#tweet-quote").on("click",function()
    { window.open(twitterURL + '"' + currentQuote + '"_ '+ currentAuthor); 
    });
    $("#tumblr-quote").on("click",function()
    { window.open(tumblrURL + '"' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)); 
    });
});
  