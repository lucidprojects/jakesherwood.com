// Array of words
let words = [];

// Word count
let word_count = {};

//Array of abstracts
let abstracts = [];
let abstractsFiltered = [];


//nytimes API stuff
let urlStart = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
// let q = "&q=climate%20change"
let q = "&q=global%20warming"
// let q = "&q=ice%20caps"
let apikey = "&api-key=6ufuxcvEFIqFKn4IIpHuvmG38dcjdriv";
let url = urlStart + q + apikey;

let climateWords = [];
let fontSize;
let word;

function setup() {
  background('white');
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  //load API data
  loadJSON(url, gotData);
  background(45);

}

function draw() {

  if (frameCount % 30 == 1) {

    for (let word in word_count) {
      textSize(word_count[word] * 30);
      fontSize = word_count[word] * 30;
      // console.log(word);

      climateWords.push(new climateText(word, random(10, width - 10), random(10, height - 10), fontSize));


    }


  }

  if (climateWords.length > 0) {
    for (let cw = 0; cw < climateWords.length; cw++) {
      climateWords[cw].display();
    }
  }


  if (climateWords.length > 500) {
    climateWords.splice(0, 200);
  }

  // console.log(climateWords.length);


}

function gotData(data) {
  let articles = data.response.docs;

  for (let i = 0; i < articles.length; i++) {
    abstracts.push(articles[i].abstract);
    // abstracts.push(articles[i].lead_paragraph);

  }


  for (let d of abstracts) {
    // Turn each line into an array of words
    let line = splitTokens(d);
    // Add it to 1 big array
    words = words.concat(line);
  }

  // Clean up all the words
  for (let w in words) {
    let word = words[w];
    word = word.replace(/[@|&|,|.|\“|'|\(|\)|<|>|#]/g, "");
    word = word.toLowerCase();
    word = word.trim();
    if (word.length < 1) words.splice(w, 1);
    else words[w] = word;
  }




  for (let i = 0, l = words.length, w; i < l; i++) {
    w = words[i]
    if (w.length > 6)
      abstractsFiltered.push(w)
  }
  //console.log(abstractsFiltered);


  // Index the words
  for (let word of abstractsFiltered) {
    if (word in word_count) word_count[word]++;
    else word_count[word] = 1;
  }



  // console.log(data.response.docs[1].headline.main);


}



class climateText {
  constructor(word, textX, textY, size) {
    this.word = word;
    this.textX = textX;
    this.textY = textY;
    this.size = size;


  }

  display() {
    if (this.size > 40) fill(255, 0, 0, 255);
    else fill(0);
    textSize(this.size);
    text(this.word, this.textX, this.textY);

  }



}