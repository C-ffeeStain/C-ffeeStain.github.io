let option1, option2, option3, option4, option5, option6;
let leo, avan, bryce, yuuto, zayne, derek;
let btnStartY;
let btnOffsetY;
let questions;
let curAnswers;
let curQuestionNum;
let questionText;
let nextBtn;
let screen;
let options;
let leoChibi, avanChibi, bryceChibi, yuutoChibi, zayneChibi, derekChibi;

/**
 * Sets up the next question and the options on the screen.
 *
 * @summary Sets up the next question, shuffles the options, and updates the
 *     screen with the new question and options.
 */
function nextQuestion() {
  curQuestionNum++;
  curAnswers = shuffle(Object.keys(questions[curQuestionNum]["answers"]));
  questionText = questions[curQuestionNum]["question"];

  const options = [option1, option2, option3, option4, option5, option6];
  const defaultStyle = { html: "...", backgroundColor: "#969696" };
  const activeStyle = { backgroundColor: "#F0F0F0" };

  options.forEach((option, index) => {
    if (curAnswers[index]) {
      option.show();
      option.html(curAnswers[index]);
      option.style("background-color", activeStyle.backgroundColor);
      option.mouseClicked(setupOptionClicked(curAnswers[index]));
    } else {
      option.hide();
      // option.html(defaultStyle.html);
      // option.style("background-color", defaultStyle.backgroundColor);
    }
  });
}

function setupOptionClicked(answerText) {
  let answerScoreReceivers = questions[curQuestionNum]["answers"][answerText];
  return () => {
    for (let i = 0; i < answerScoreReceivers.length; i++) {
      if (answerScoreReceivers[i] == "l") leo++;
      if (answerScoreReceivers[i] == "a") avan++;
      if (answerScoreReceivers[i] == "b") bryce++;
      if (answerScoreReceivers[i] == "y") yuuto++;
      if (answerScoreReceivers[i] == "z") zayne++;
      if (answerScoreReceivers[i] == "d") derek++;
    }
    if (curQuestionNum >= 84) {
      screen = "results";
    }
    nextQuestion();
  }
}

function setup() {
  createCanvas(400, 500);
  screen = "quiz";

  questions = shuffle([{ "question": "How do you like to spend your weekend?", "answers": { "Hanging out with friends": "l", "Doing chores": "a", "Gaming": "b", "Sleeping": "y", "Going out": "z", "TV & Chill": "d" } }, { "question": "What is your ideal vacation?", "answers": { "Roadtrip": "l", "Beach": "a", "Big City": "b", "Theme Park": "y", "Mountains": "z", "Stay-cation": "d" } }, { "question": "What's your favorite ice cream flavor?", "answers": { "Strawberry": "l", "Mint Chocolate": "a", "Cookies & Cream": "b", "Rocky Road": "y", "Chocolate": "z", "Vanilla": "d" } }, { "question": "What's your favorite drink?", "answers": { "Milk": "l", "Water": "a", "Alcohol": "b", "Soda": "y", "Juice": "z", "Coffee": "d" } }, { "question": "What do you usually have for breakfast?", "answers": { "Cereal": "l", "Toast": "a", "Bacon": "b", "Rice Meal": "y", "Pancakes": "z", "Eggs": "d" } }, { "question": "Can you cook?", "answers": { "Do eggs count?": "l", "I took cooking classes": "a", "I make a mean grilled cheese!": "b", "I burn cereal": "y", "Call me Master Chef!": "z", "Since I was little": "d" } }, { "question": "What's your preferred movie genre?", "answers": { "Comedy": "l", "Fantasy": "a", "Action": "b", "Horror": "y", "Mystery": "z", "Romance": "d" } }, { "question": "What was your favorite subject in school?", "answers": { "Math": "l", "Economics": "a", "History": "b", "Recess": "y", "Science": "z", "Physical Education": "d" } }, { "question": "What's your favorite color?", "answers": { "Yellow": "l", "Blue": "a", "Orange": "b", "Pink": "y", "Purple": "z", "Red": "d" } }, { "question": "How do you like to commute?", "answers": { "Bike": "l", "Boat": "a", "Bus": "b", "Train": "y", "Plane": "z", "Car": "d" } }, { "question": "If you could have a superpower, what would it be?", "answers": { "Super Speed": "l", "X-Ray Vision": "a", "Invisibility": "b", "Flight": "y", "Mind Control": "z", "Super Strength": "d" } }, { "question": "What kind of weather do you enjoy the most?", "answers": { "Sunny": "l", "Cloudy": "a", "Windy": "b", "Rainy": "y", "Stormy": "z", "Snowy": "d" } }, { "question": "What would you bring to a deserted island?", "answers": { "Fishing Pole": "l", "Swimsuit": "a", "Phone": "b", "Life Jacket": "y", "Lighter": "z", "Machete": "d" } }, { "question": "If you could learn a musical instrument, what would it be?", "answers": { "Percussion": "l", "Piano": "a", "Drums": "b", "Flute": "y", "Saxophone": "z", "Guitar": "d" } }, { "question": "What kind of music do you listen to?", "answers": { "Pop": "l", "Classical": "a", "Country": "b", "Rock": "y", "Jazz": "z", "R&B": "d" } }, { "question": "If you could have only one decoration on your desk, what would you choose?", "answers": { "Action Figure": "l", "Nothing": "a", "Trophy": "b", "Fidget Toy": "y", "Mood Light": "z", "Picture": "d" } }, { "question": "What's the best way to cook a potato?", "answers": { "Baked": "l", "Fried": "a", "Mashed": "b", "Croquettes": "y", "Roasted": "z", "Salad": "d" } }, { "question": "What are you wearing to a party?", "answers": { "A dino onesie. RAWR!": "l", "The best time to wear a striped sweater": "a", "A trusty beer hat": "b", "My birthday suit!": "y", "Dress to impress": "z", "What I always wear": "d" } }, { "question": "When taking a shower, what do you reach for to clean yourself?", "answers": { "A 'tabo'": "l", "A bar of soap": "a", "Nothing, just plain water": "b", "My dick": "y", "A loofah": "z", "Body wash": "d" } }, { "question": "What sort of video games do you like to play?", "answers": { "RPG": "l", "Strategy": "a", "Shooter": "b", "Battle Royale": "y", "Dating Sim": "z", "Fighting Games": "d" } }, { "question": "If you only had one device, what would you pick?", "answers": { "Desktop": "l", "Laptop": "a", "Tablet": "b", "Console": "y", "Phone": "z", "Smartwatch": "d" } }, { "question": "What would you order at a fast food chain?", "answers": { "Taco": "l", "Fries": "a", "Burger": "b", "Riceballs": "y", "Fried Chicken": "z", "Chicken Nuggets": "d" } }, { "question": "What's your favorite fantasy class?", "answers": { "Mage": "l", "Healer": "a", "Barbarian": "b", "Rogue": "y", "Hunter": "z", "Paladin": "d" } }, { "question": "What unpopular food combination do you love?", "answers": { "Peanut Butter and Jelly": "l", "Ice Cream and Fries": "a", "Hot Sauce and Beer": "b", "Dried Fish and Chocolate Porridge": "y", "Watermelon and Feta Cheese": "z", "Grilled Cheese and Ketchup": "d" } }, { "question": "What's a fun party game?", "answers": { "Board Games": "l", "Card Games": "a", "Beer Pong": "b", "Twister": "y", "Truth or Dare": "z", "Arm Wrestling": "d" } }, { "question": "When sleeping, you usually sleep on your...", "answers": { "Side": "lz", "Back": "ad", "Stomach": "by" } }, { "question": "What's the best time of the day?", "answers": { "Morning": "la", "Night": "bz", "Afternoon": "yd" } }, { "question": "Cats or Dogs?", "answers": { "Both!": "ld", "Cats": "az", "Dogs": "by" } }, { "question": "When I play sports, I do it to...", "answers": { "Play with my teammates": "ly", "Showoff and win.": "ab", "Get healthy and fit.": "zd" } }, { "question": "How do you pass the time between classes?", "answers": { "Socializing": "l", "Studying": "a", "Drinking": "b", "Snacking": "y", "By Myself": "z", "Working Out": "d" } }, { "question": "You win the lottery...", "answers": { "Share with the closest people": "l", "Investments": "a", "Enjoy the luxurious lifestyle": "b", "Charity": "y", "No amount of money can bring happiness": "z", "Retire and live comfortably": "d" } }, { "question": "When having a conflict with someone.. ", "answers": { "I concede to get it over with": "l", "I tend to get emotional": "a", "I call a friend to vent": "b", "I try to distract or ignore it": "y", "I need my own space": "z", "I try to resolve it immediately": "d" } }, { "question": "The ideal way to spend a birthday...", "answers": { "Spend it with a small group of family and friends": "l", "Anything as long as it involves other people too": "a", "Have a huge party inviting lots of people": "b", "Doesn't matter. I keep forgetting": "y", "Experience something new": "z", "I don't make it a big deal": "d" } }, { "question": "What's the best thing about a party?", "answers": { "Hanging with friends or people I already know": "l", "Planning the food, decorations and activities": "a", "Getting drunk and acting foolish": "b", "Dancing, joking, and playing games": "y", "Opportunity to meet new people": "z", "Nothing. It's loud and stressful": "d" } }, { "question": "If you were to be the center of attention, it's because...", "answers": { "People like me": "l", "I'm recognized for an achievement": "a", "I did something embarrassing": "b", "I'm entertaining": "y", "I have good looks": "z", "I have a reputation": "d" } }, { "question": "What is most likely to make you feel hurt?", "answers": { "Feeling left out": "l", "Having my work criticized": "a", "Being humiliated": "b", "Being secretly unwanted": "y", "Getting rejected": "z", "When someone I care about is hurt": "d" } }, { "question": "What's the most comfortable way to communicate online?", "answers": { "A little bit of everything but with emojis": "l", "Text messaging": "a", "An alternate account": "b", "Not an option": "y", "Video Call": "z", "Voice Call": "d" } }, { "question": "What is your love language?", "answers": { "Acts of Service": "l", "Words of affirmation": "a", "Physical touch": "b", "Anything": "y", "Giving and receiving Gifts": "z", "Quality time": "d" } }, { "question": "What weakness would you like to improve on?", "answers": { "Worrying about what others think": "l", "Overthinking": "a", "Being true to yourself": "b", "Impatience and impulsiveness": "y", "Being superficial": "z", "Trust issues": "d" } }, { "question": "What do you envision to be your best personal achievement?", "answers": { "A happy social circle": "l", "Loving yourself": "a", "Overcoming Adversity": "b", "A fulfilling and worthwhile job": "y", "A stable relationship": "z", "A healthy mind and stable body": "d" } }, { "question": "What do you want your legacy to be?", "answers": { "Be remembered by my loved ones": "l", "Change someone's life for the better": "a", "To live an authentic life and be an example": "b", "Make an impact on the world": "y", "I just want to live my life": "z", "To develop a deep and meaningful connection": "d" } }, { "question": "College is...", "answers": { "To make lifetime friends": "l", "To grow and learn": "a", "A waste of money": "b", "A chance for a better future": "y", "Not worth my time": "z", "For a dream career": "d" } }, { "question": "What does a relationship mean to you?", "answers": { "It's as simple as loving and caring for each other": "l", "Motivating each other to be their best versions": "a", "Being true to ourselves without judgment": "b", "Being accepted by each other despite all the flaws": "y", "Giving each other space to pursue individual interests": "z", "Having each other's backs through the good and bad": "d" } }, { "question": "Time...", "answers": { "Time is never enough": "l", "Time must be used wisely": "a", "Time is money": "b", "Hammer time!": "y", "Time is but a stubborn illusion": "z", "Time waits for no one": "d" } }, { "question": "Purpose is found...", "answers": { "With a special someone": "l", "Where you least expect it": "a", "Where you lost it": "b", "Within yourself": "y", "When you seek for it": "z", "When the time is right": "d" } }, { "question": "What role do you play in your friendships?", "answers": { "I offer support where I can": "l", "I find solutions and help fix things": "a", "I keep it real and tell things how they are": "b", "I like to make my friends laugh": "y", "What friendship?": "z", "They always come to me for advice": "d" } }, { "question": "What would you do if someone wronged you?", "answers": { "I remember and learn from it": "l", "I hold grudges": "a", "I would seek revenge": "b", "I try to forget it": "y", "Karma is real": "z", "I forgive and let go": "d" } }, { "question": "The biggest regret would be… ", "answers": { "Living for others' expectations": "l", "Not living in the moment": "a", "Not living my truth": "b", "Not standing up for myself": "y", "Chasing the wrong things": "z", "Not spending more time with people I love": "d" } }, { "question": "When you make a promise… ", "answers": { "I make sure to fulfill it": "la", "I don't make promises": "bd", "I do the best I can, and accept things may happen": "yz" } }, { "question": "How competitive are you?", "answers": { "I like a challenge": "ld", "Not at all": "ay", "I want to win!": "bz" } }, { "question": "If you could time travel, where would you go?", "answers": { "present": "lz", "future": "ab", "past": "yd" } }, { "question": "Do you prefer to be around introverts or extroverts?", "answers": { "Both": "lz", "Introvert": "ad", "Extrovert": "by" } }, { "question": "What scent do you find attractive?", "answers": { "Baked Goods": "l", "Soap": "a", "Sweat": "b", "Gasoline": "y", "Fruit": "z", "Pine": "d" } }, { "question": "Size… ", "answers": { "Size doesn't matter": "l", "Pick on someone your own size": "a", "Size is everything": "b", "Comes in all shapes and sizes": "y", "Try something on for size": "z", "Size queen": "d" } }, { "question": "How often should you shower?", "answers": { "When dirty": "l", "At least twice a day": "a", "When I feel like it": "b", "Once a week": "y", "Once a day": "z", "Hygiene is key": "d" } }, { "question": "What muscles are the most appealing?", "answers": { "Legs": "l", "Back": "a", "Glutes": "b", "Arms": "y", "Abs": "z", "Chest": "d" } }, { "question": "Masturbation is...", "answers": { "Very nice": "l", "Perfectly normal": "a", "Gay": "b", "Five times a day": "y", "Just foreplay": "z", "Good for the body": "d" } }, { "question": "What facial feature endears you the most?", "answers": { "Cheeks": "l", "Eyes": "a", "Hair": "b", "Ears": "y", "Lips": "z", "Jaw": "d" } }, { "question": "Which specific body part do you think is interesting?", "answers": { "Feet": "l", "Waist": "a", "Thighs": "b", "Shoulders": "y", "Hands": "z", "Neck": "d" } }, { "question": "At what pace do you prefer activities to be?", "answers": { "Normal": "l", "Gentle": "a", "Rough": "b", "Fast": "y", "Slow": "z", "Powerful": "d" } }, { "question": "Sex education is... ", "answers": { "A good TV show": "l", "Learned at school": "a", "Non-existent": "b", "What I'm studying right now": "y", "My next lesson": "z", "Through experience": "d" } }, { "question": "What is something that both hurts and feels good?", "answers": { "Spanking": "l", "Getting a D+": "a", "The day after": "b", "Sounding": "y", "Hair Pulling": "z", "Choking": "d" } }, { "question": "Are you a big spoon or a little spoon?", "answers": { "Big Spoon": "la", "Depends on the mood.": "by", "Little Spoon": "zd" } }, { "question": "Preferred Undies?", "answers": { "Jockstraps": "ld", "Briefs": "ay", "Boxers": "bz" } }, { "question": "What do you wear to bed?", "answers": { "Pajamas": "ld", "Undies": "ab", "Nothing": "yz" } }, { "question": "What's your height preference for a partner?", "answers": { "Shorter": "ly", "Doesn't matter": "ab", "Taller": "zd" } }, { "question": "Hickies?", "answers": { "No way": "lby", "Yes, please": "azd" } }, { "question": "Fitness...", "answers": { "Does walking count?": "l", "It's part of a healthy daily routine": "a", "Getting out of bed": "b", "Dick in yo' mouth": "y", "Sex burns calories": "z", "People at the gym know me": "d" } }, { "question": "What useless power would you have?", "answers": { "Control Squirrels": "l", "See three seconds into the future": "a", "Stench Generation": "b", "Digest Anything": "y", "Read my own mind": "z", "Grow arm hair at will": "d" } }, { "question": "What secret agent alias sounds most interesting to you?", "answers": { "Neo Mendez": "l", "Speedo Sound Sonic": "a", "Deedee Megadoodoo": "b", "Youtoob Mizushima": "y", "Feel Coolsong": "z", "James Manscape": "d" } }, { "question": "What drag name resonates to you the most?", "answers": { "Toes Tickles": "l", "Marie Cumdump": "a", "Busty Ray Bottoms": "b", "Was Abby": "y", "Myschlong Jordan": "z", "Daddy Thirdleg": "d" } }, { "question": "What's your spirit animal?", "answers": { "Golden retriever with an energy drink": "l", "Socially awkward penguin": "a", "Hungover orangutan": "b", "Crispy cum sock": "y", "Kink Panther": "z", "A rock with googly eyes": "d" } }, { "question": "What mythical creature would you like to ride?", "answers": { "Cerberus": "l", "Hydra": "a", "Centaur": "b", "Chimera": "y", "Pegasus": "z", "Minotaur": "d" } }, { "question": "What's your password?", "answers": { "My birthday": "l", "A randomly generated password": "a", "FunnyJoke69$": "b", "password123": "y", "My phone numbe reversed": "z", "I don't need one": "d" } }, { "question": "If you were a pizza topping, what would you be?", "answers": { "Mushroom - I'm a fun-gi, get it?": "l", "Cheese - For four times the stickiness": "a", "Olives - You either love me or hate me": "b", "Pineapple - Everyone fucking hates me": "y", "Salami - I'm packed with meat and heat": "z", "Onions - I'll make you cry with every layer you peel": "d" } }, { "question": "During a zombie apocalypse… ", "answers": { "Accept the end of the world": "l", "Fortify a safehouse / Find a hideout": "a", "Secure myself a weapon": "b", "Eat them before they eat you": "y", "Gather supplies": "z", "Look for survivors": "d" } }, { "question": "If everyone's hair on their head turns into pasta, which works best?", "answers": { "Fusilli - For those luscious curls": "l", "Lasagna - I can stack it": "a", "Farfalle - It's shaped like a ribbon": "b", "Ravioli - I can put stuff inside it": "y", "Spaghetti - I can style it": "z", "Macaroni - It's short enough to maintain": "d" } }, { "question": "How do you answer your phone?", "answers": { "Hi, how are you?": "l", "Who is this?": "a", "What do you want?": "b", "No, this is Patrick": "y", "Hey! What's up?": "z", "Hello?": "d" } }, { "question": "In the hit BL game, Camp Buddy - which is your first route?", "answers": { "Hiro": "l", "Hunter": "a", "Yoichi": "b", "Keitaro": "y", "Natsumi": "z", "Taiga": "d" } }, { "question": "The best way to say goodbye is ", "answers": { "Hasta la vista, baby.": "l", "Maty the force be with you...": "a", "Sashay... Away.": "b", "Brofist!": "y", "To be continued...": "z", "Live long and prosper.": "d" } }, { "question": "What petty offense would you most likely be caught for?", "answers": { "Jaywalking": "l", "Bribery": "a", "Public Intoxication": "b", "Indecent Exposure": "y", "Love Affair": "z", "Trespassing": "d" } }, { "question": "An old lady and a baby are tied to a railroad track… ", "answers": { "Save the old lady": "l", "There's no train in that scenario": "a", "Choo-choo!": "b", "Lie down on the tracks as well": "y", "Save both": "z", "Save the baby": "d" } }, { "question": "How do you think the world will end?", "answers": { "Solar flare": "l", "A great flood": "a", "Zero birth rate": "b", "Nuclear explosion": "y", "With you~": "z", "Plague": "d" } }, { "question": "If you were to be reincarnated, what would you be?", "answers": { "Cheesecake": "l", "Slime": "a", "Glory Hole": "b", "Overlord": "y", "No thanks": "z", "Sword": "d" } }, { "question": "If your ass was a tree, what tree would it be?", "answers": { "Willow?": "ly", "My ass wouldn't ever be a tree.": "ad", "What the...": "bz" } }]);

  curQuestionNum = -1;

  leo = avan = bryce = yuuto = zayne = derek = 0;
  leoChibi = loadImage("icons/leo.webp")
  avanChibi = loadImage("icons/avan.webp")
  bryceChibi = loadImage("icons/bryce.webp")
  yuutoChibi = loadImage("icons/yuuto.webp")
  zayneChibi = loadImage("icons/zayne.webp")
  derekChibi = loadImage("icons/derek.webp")

  btnStartY = 145;
  btnOffsetY = 55;

  option1 = createButton("Hanging out with friends")
  option1.style("border", "none")
  option1.style("font-family", "arial")
  option1.style("height", "45px")
  option1.style("width", "350px")
  option1.position(25, btnStartY)

  option2 = createButton("Doing chores")
  option2.style("border", "none")
  option2.style("font-family", "arial")
  option2.style("height", "45px")
  option2.style("width", "350px")
  option2.position(25, btnStartY + btnOffsetY)

  option3 = createButton("Gaming")
  option3.style("border", "none")
  option3.style("font-family", "arial")
  option3.style("height", "45px")
  option3.style("width", "350px")
  option3.position(25, btnStartY + btnOffsetY * 2)

  option4 = createButton("Sleeping")
  option4.style("border", "none")
  option4.style("font-family", "arial")
  option4.style("height", "45px")
  option4.style("width", "350px")
  option4.position(25, btnStartY + btnOffsetY * 3)

  option5 = createButton("Going out")
  option5.style("border", "none")
  option5.style("font-family", "arial")
  option5.style("height", "45px")
  option5.style("width", "350px")
  option5.position(25, btnStartY + btnOffsetY * 4)

  option6 = createButton("TV & Chill")
  option6.style("border", "none")
  option6.style("font-family", "arial")
  option6.style("height", "45px")
  option6.style("width", "350px")
  option6.position(25, btnStartY + btnOffsetY * 5)

  options = [option1, option2, option3, option4, option5, option6];

  frameCount = 0;
  nextQuestion();
}

function draw() {
  background(220);


  if (screen == "quiz") {
    textFont("Arial");
    textWrap(WORD);
    textSize(35);
    textAlign(CENTER, TOP);
    textStyle(BOLD);
    text("Question " + (curQuestionNum + 1), 200, 20);
    textSize(20);
    textStyle(NORMAL);
    text(questionText, 0, 75, 400);
  } else {
    option1.hide();
    option2.hide();
    option3.hide();
    option4.hide();
    option5.hide();
    option6.hide();

    console.log("here!")
    textFont("Arial");
    textWrap(WORD);
    textSize(35);
    textAlign(CENTER, TOP);
    fill("#000000");
    text("Results", 0, 20, 400);
    textAlign(LEFT, CENTER);
    image(leoChibi, 75, 130, 64, 60);
    text(leo, 145, 170)
    image(avanChibi, 205, 130, 64, 57);
    text(avan, 275, 170);
    image(bryceChibi, 75, 210, 64, 54);
    text(bryce, 145, 240);
    image(yuutoChibi, 210, 200, 63.5, 64);
    text(yuuto, 275, 240);
    image(zayneChibi, 75, 290, 58, 64);
    text(zayne, 145, 325);
    image(derekChibi, 205, 290, 60.5, 64);
    text(derek, 275, 325);
    stroke(0, 0);
    fill(0, 255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("To play again, reload the page.", 200, 475);

  }
}
