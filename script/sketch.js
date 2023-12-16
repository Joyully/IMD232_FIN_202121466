let angles = [];
let isMouseClicked = false;

let texts = [
  'Yes',
  'No',
  'It is certain',
  'Most likely',
  'My reply is no',
  'Ask again later',
  'As i see it yes',
];
let selectedText = '';
let initialTextDisplayed = false;

function setup() {
  setCanvasContainer('canvas', 200, 200, true);
  background('gainsboro');
}

function draw() {
  background('gainsboro');

  if (isMouseClicked) {
    translate(mouseX, mouseY);
  } else {
    translate(width / 2, height / 2);
  }

  for (let i = 0; i < 10; i++) {
    stroke(getRandomColor());
    for (let n = 0; n < 360; n += 2) {
      let x = random(50, 150);
      let xx = random(150, 350);
      push();
      rotate(radians(n));
      strokeCap(SQUARE);
      strokeWeight(4);
      line(x, 0, xx, 0);
      pop();
    }
  }

  if (isMouseClicked) {
    strokeWeight(1);
    fill(20);
    textSize(15);
    textAlign(CENTER, CENTER);

    text(random(texts), 0, 0);
    selectedText = random(texts);
  } else {
    strokeWeight(30);
    fill('blue');
    stroke(255, 255, 255, 0.5);
    textSize(20);
    if (!initialTextDisplayed) {
      textAlign(CENTER, CENTER);

      text(random(texts), 0, 0);
      initialTextDisplayed = true;
    } else {
      textAlign(CENTER, CENTER);

      text(selectedText, 0, 0);
    }
  }
}

function mousePressed() {
  isMouseClicked = true;
}

function mouseReleased() {
  isMouseClicked = false;
}

function getRandomColor() {
  if (isMouseClicked) {
    colorMode(HSL);
    return lerpColor(color(30), color(random(255), 50, 50), 1);
  } else {
    return color(10);
  }
}
