// master list of quotes
var quotes = [
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
  "When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt",
  "Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead",
  "Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson",
  "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
  "Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller",
  "It is during our darkest moments that we must focus to see the light. -Aristotle",
  "Whoever is happy will make others happy too. -Anne Frank",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",
  "You will face many defeats in life, but never let yourself be defeated. -Maya Angelou",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
  "In the end, it's not the years in your life that count. It's the life in your years. -Abraham Lincoln",
  "Never let the fear of striking out keep you from playing the game. -Babe Ruth",
  "Life is either a daring adventure or nothing at all. -Helen Keller",
  "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison",
  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss"
];

const getQuote = () => {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = '<i>' + quotes[randomNumber] + '</i>';
}

getQuote();
