let tileCount = 30;
let moduleAlpha = 40;
let maxDistance = 500;
let angles = [];
let isMouseClicked = false;
let texts = [
  'Yes',
  'No',
  'It is certain',
  'Most likely',
  'My reply is no',
  'Ask again later',
  'As I see it, yes',
];
let selectedText = '';
let initialTextDisplayed = false;
let cx;
let cy;

function setup() {
  cx = width * 1;
  cy = height * 1;
  setCanvasContainer('canvas', cx, cy, true);
  background('gainsboro');
}

function draw() {
  clear();
  background('gainsboro');

  moduleColor = color(0, 0, 0, moduleAlpha);

  stroke(moduleColor);

  // 원만 있으니 심심해서 마우스에 반응하는 배경 추가
  // 참고 _ http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_1_2_03
  // 사각형에서 원으로 변경하고 투명도 줌
  for (let gridY = 0; gridY < width * 1.1; gridY += width * 0.03) {
    for (let gridX = 0; gridX < height * 1.1; gridX += width * 0.03) {
      let diameter = dist(mouseX, mouseY, gridX, gridY);
      diameter = (diameter / maxDistance) * (width * 0.05);
      push();
      noFill();
      strokeWeight(2);
      translate(gridX, gridY, diameter * 5);
      ellipse(0, 0, diameter, diameter);
      pop();
    }
  }
  stroke(moduleColor);

  //클릭하면 원이 마우스를 따라오게
  if (isMouseClicked) {
    translate(mouseX, mouseY);
  } else {
    translate(width / 2, height / 2);
  }

  //원 모양 참고
  //https://youtu.be/UZoVBMgzULk?si=VOEQ2hWawZ67TzHD
  //thedotisblack creative coding @thedotisblack
  for (let i = 0; i < 10; i++) {
    stroke(getRandomColor());
    for (let n = 0; n < 360; n += 2) {
      let x = random((width * 0.1) / 1.4, width * 0.4) / 1.4;
      let xx = random((width * 0.4) / 2, (width * 0.7) / 2);
      push();
      rotate(radians(n));
      strokeCap(SQUARE);
      strokeWeight(4);
      line(x, 0, xx, 0);
      pop();
    }
  }

  //텍스트
  if (isMouseClicked) {
    strokeWeight(1);
    fill(20);
    textSize(15);
    textAlign(CENTER, CENTER);

    selectedText = random(texts);
    text(selectedText, 0, 0);
  } else {
    strokeWeight(width * 0.035);
    fill('blue');
    stroke(255, 255, 255, 150);
    textSize(width * 0.025);
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

function keyReleased() {
  if (key == 's' || key == 'S') {
    // Your 's' key released code here
  }
}

function mousePressed() {
  isMouseClicked = true;
}

function mouseReleased() {
  isMouseClicked = false;
}

function windowResized() {
  resizeCanvas(windowWidth * 0.8, windowHeight * 0.8);
}

//랜덤 색상
function getRandomColor() {
  if (isMouseClicked) {
    colorMode(HSL);
    let hslColor = lerpColor(color(0, 100, 100), color(random(255), 50, 50), 1);
    colorMode(RGB); // RGB 모드로 되돌림
    return hslColor;
  } else {
    return color(10);
  }
}
