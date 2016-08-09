$(document).ready(function() {
  var quotes = [
    ["We've gone on holiday by mistake.", "Withnail"],
    ["I demand to have some booze!", "Withnail"],
    ["We can't go on like this. I'm a trained actor reduced to the status of a bum.", "Withnail"],
    ["We want the finest wines available to humanity, we want them here and we want them now!", "Withnail"],
    ["Listen, we're bona fide, we're not from London.", "Withnail"],
    ["I'll not have this shag sack insulting me! Let him get his drugs out.", "Withnail"],
    ["I assure I'm not drunk, officer, honestly, I've only had a few ales.", "Withnail"],
    ["Black puddings are no good to us. I want something's flesh!", "Withnail"],
    ["These are the sort of windows faces look in at!", "Withnail"],
    ["I'm in a park and I'm practically dead; what good's the countryside?", "Withnail"],
    ["All right, this is the plan. We get in there and get wrecked, then we eat a pork pie, then we drop a couple of Surmontil-50s each. That means we'll miss out on Monday but come up smiling Tuesday morning.", "Withnail"],
    ["Free to those who can afford it, very expensive to those who can't.", "Withnail"],
    ["Look at this; accident blackspot? These aren't accidents, they're throwing themselves into the road! Throwing themselves into the road gladly to escape all this hideousness.", "Withnail"],
    ["Look at my tongue. It's wearing a yellow sock.", "Withnail"],
    ["Don't threaten me with a dead fish!", "Withnail"],
    [" We are indeed drifting into the arena of the unwell. Making enemies of our own futures.", "Marwood"],
    ["I'm not from London, you know.", "Marwood"],
    ["A coward you are, Withnail! An expert on bulls you are not!", "Marwood"],
    ["We are not drunks, we are multi-millionaires!", "Marwood"],
    ["You're full of Scotch, you silly tool!", "Marwood"],
    ["My thumbs have gone weird!", "Marwood"],
    ["Jesus Christ! Why have you drugged their onions?!", "Marwood"],
    ["It is the most shattering experience of a young man's life when one morning he awakes and quite reasonably says to himself, \"I will never play the Dane.\"", "Uncle Monty"],
    ["Get that damned little swine out of here! It's trying to get itself in with you. Trying for even more advantage. It's obsessed with its gut. It's like a bloody rugby ball now, it will die, it will die!", "Uncle Monty"],
    ["Oh! you little traitors. I think the carrot infinitely more fascinating than the geranium. The carrot has mystery. Flowers are essentially tarts. Prostitutes for the bees. There is a certain je ne sais quoi - oh, so very special - about a firm, young carrot...Excuse me...", "Uncle Monty"],
    ["Oh my boys, my boys, we are at the end of an age! We live in a land of weather forecasts and breakfasts that set in, shat on by Tories, shovelled up by Labour, and here we are, we three; perhaps the last island of beauty... in the world.", "Uncle Monty"],
    ["Here hare here ... here hare here!", "Uncle Monty"],
    ["Sherry? Oh no, we'd be sucked into his trap! He's so mauve, we don't know what he's planning!", "Uncle Monty"],
    ["I sometimes wonder where Norman is now. Probably wintering with his mother in Guildford. A cat, rain, Vim under the sink, and both bars on. But old now, old. There can be no true beauty without decay.", "Uncle Monty"],
    ["I've been preparing myself to forgive you. I think it's time to release you from the légumes, and transfer your talents to the meat.", "Uncle Monty"],
    ["I can never touch raw meat until it's cooked. As a youth, I used to weep in butchers' shops!", "Uncle Monty"],
    ["Come on lads, let's get home, the sky's beginning to bruise. Night must fall and we shall be forced to camp.", "Uncle Monty"],
    ["I don't advise a haircut, man. All hairdressers are in the employment of the government. Hair are your aerials. They pick up signals from the cosmos and transmit them directly into the brain. This is the reason bald-headed men are uptight.", "Danny"],
    ["Change down, man, find your neutral space. You got a rush. It will pass. Be seated.", "Danny"],
    ["If you're hanging on to a rising balloon, you're presented with a difficult decision — let go before it's too late or hang on and keep getting higher, posing the question: how long can you keep a grip on the rope? They're selling hippie wigs in Woolworth's, man. The greatest decade in the history of mankind is over. And as Presuming Ed here has so consistently pointed out, we have failed to paint it black.", "Danny"]
  ]

  var quoteButton = document.getElementById("quotebtn");

  //tweet function
  function tweetQuote(quote, name, hash) {
      var thisQuote = quote,
        thisName = name,
        filmHash = hash,
        quoteTweet = thisName + ": " + thisQuote,
        quoteTweetHash = thisName + ": " + thisQuote + filmHash;
      if (quoteTweetHash.length > 140) {
        // calculate how much to shorten quote by (-5 for 2 x spaces, 1 x hash and 3 x dots )
        var amountToChop = 140 - filmHash.length - 5,
          quoteDots = "...";
        //cut tweet down to 140 chars minus the quoter & film name hashtag
        quoteTweet = quoteTweet.slice(0, amountToChop);
        //check if quote ends mid-word after chopping
        for (var i = quoteTweet.length - 1; i > 0; i--) {
          if (quoteTweet[i] === " ") {
            quoteTweet = quoteTweet.slice(0, i); //take off character
            break;
          }
        }
        quoteTweet += quoteDots;
      }
      $("#tweet_container").empty(); //get rid of any previous Twitter button
      //tweet button
      twttr.widgets.createHashtagButton(
        filmHash,
        document.getElementById("tweet_container"), {
          size: "large",
          text: quoteTweet
        }
      ); // /tweet button
    }
    // /tweet function

  function giveQuote() {
    //set up variables
    var quoteDiv = document.getElementById("quotediv"),
      nameDiv = document.getElementById("namediv"),
      quoteArrayLength = quotes.length,
      filmHash = "WithnailandI",
      randomNum = Math.floor(Math.random() * quoteArrayLength),
      thisQuote = quotes[randomNum][0],
      thisName = quotes[randomNum][1];
    //function
    quoteDiv.innerHTML = thisQuote;
    nameDiv.innerHTML = thisName;
    tweetQuote(thisQuote, thisName, filmHash); // call Twitter function
  }

  giveQuote();
  quoteButton.onclick = giveQuote;

}); // /document.ready()