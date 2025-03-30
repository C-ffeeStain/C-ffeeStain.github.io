let canvasDimensions;
let customFont;

let screen;
let sprites;
let sfx;
let music;
let screenObjects;
let score;
let counter;

let titleString;

let playerX;
let playerY;
let playerSize;
let basePlayerY;
let playerVel;
let playerState; // 0 = running, 1 = jumping, 2 = ducking
let playerAnimFrame

let gravity;

let clouds;
let cloudSpeed;

let grassBlades;
let grassSpeed;

let snakes;
let enemySpeed;

let ravens;

let currentEnemyType;
let enemyTypes;

let frogs;
let frogSpeed;
let frogTimer;
let frogsCollectedThisRun
let totalFrogsCollected;

let offsetTables;

let selectedCharacter;

let characterVariants;
let characterUnlockThresholds;

let gameIsOver;
let gameOverBtns;

let settings;

/**
 * Render a string as a title, centered at (x, y)
 * Automatically resizes and repositions text to fit in the window
 * @param {string} string - string to render as title
 * @param {number} x - x position of title
 * @param {number} y - y position of title
 */
function title(string, x, y) {
  const align = textAlign();
  const size = textSize();

  // set custom align and size
  textAlign(CENTER, CENTER);
  textSize(40);

  text(string, x, y);

  // restore original align and size
  textAlign(align.horizontal, align.vertical);
  textSize(size);
}

function setupTitleScreen() {
  screenObjects.title = {
    playBtn: createButton(""),
    settingsBtn: createButton(""),
    quitBtn: createButton("")
  };

  screenObjects.title.playBtn.position(122, 205);
  screenObjects.title.playBtn.size(175, 79);
  screenObjects.title.playBtn.mouseClicked(() => {
    screenTransition("characterSelect");
  });
  screenObjects.title.playBtn.id("playBtn");

  screenObjects.title.settingsBtn.position(312, 205);
  screenObjects.title.settingsBtn.size(175, 79);
  screenObjects.title.settingsBtn.id("settingsBtn");
  screenObjects.title.settingsBtn.mouseClicked(() => {
    screenTransition("settings");
  });

  screenObjects.title.quitBtn.position(502, 205);
  screenObjects.title.quitBtn.size(175, 79);
  screenObjects.title.quitBtn.id("quitBtn");
  screenObjects.title.quitBtn.mouseClicked(() => window.close());
}

function setupCharacterSelect() {
  screenObjects.characterSelect = {
    ashBtn: createButton("Ash"),
    dewBtn: createButton("Dew"),
    jirouBtn: createButton("Jirou"),
    milkBtn: createButton("Milk"),
    skipBtn: createButton("Skip"),
  };

  screenObjects.characterSelect.ashBtn.size(115, 115);
  screenObjects.characterSelect.ashBtn.position(490, 100);
  screenObjects.characterSelect.ashBtn.mouseClicked(() => {
    selectedCharacter = "ash";
    startGame();
  });

  screenObjects.characterSelect.dewBtn.size(115, 115);
  screenObjects.characterSelect.dewBtn.position(620, 100);
  screenObjects.characterSelect.dewBtn.mouseClicked(() => {
    selectedCharacter = "dew";
    startGame();
  });

  screenObjects.characterSelect.jirouBtn.size(115, 115);
  screenObjects.characterSelect.jirouBtn.position(90, 100);
  screenObjects.characterSelect.jirouBtn.mouseClicked(() => {
    selectedCharacter = "jirou";
    startGame();
  });

  screenObjects.characterSelect.milkBtn.size(115, 115);
  screenObjects.characterSelect.milkBtn.position(360, 100);
  screenObjects.characterSelect.milkBtn.mouseClicked(() => {
    selectedCharacter = "milk";
    startGame();
  });

  screenObjects.characterSelect.skipBtn.size(115, 115);
  screenObjects.characterSelect.skipBtn.position(230, 100);
  screenObjects.characterSelect.skipBtn.mouseClicked(() => {
    selectedCharacter = "skip";
    startGame();
  });

  screenObjects.characterSelect.ashBtn.hide();
  screenObjects.characterSelect.dewBtn.hide();
  screenObjects.characterSelect.jirouBtn.hide();
  screenObjects.characterSelect.milkBtn.hide();
  screenObjects.characterSelect.skipBtn.hide();
}

function setupSettings() {
  screenObjects.settings = {
    sfxSlider: createSlider(0, 100, settings.sfxVolume),
    musicSlider: createSlider(0, 100, settings.musicVolume),
    resetProgressBtn: createButton("Reset Progress"),
    backBtn: createButton("Return")
  };
  screenObjects.settings.musicSlider.position(230, 90);

  screenObjects.settings.sfxSlider.position(230, 140);

  screenObjects.settings.resetProgressBtn.position(600, canvasDimensions.height - 100);
  screenObjects.settings.resetProgressBtn.size(111, 60);
  screenObjects.settings.resetProgressBtn.mouseClicked(() => {
    totalFrogsCollected = 0;
    saveGame();
  });

  screenObjects.settings.backBtn.position(312, canvasDimensions.height - 100);
  screenObjects.settings.backBtn.size(175, 79);
  screenObjects.settings.backBtn.mouseClicked(() => {
    screenTransition("title");
  });

  screenObjects.settings.musicSlider.hide();
  screenObjects.settings.sfxSlider.hide();
  screenObjects.settings.resetProgressBtn.hide();
  screenObjects.settings.backBtn.hide();
}

function preload() {
  customFont = loadFont("data/ROCKB.TTF");
  sprites = {
    characters: {
      jirou: loadImage("data/images/players/jirou.png"),
      ash: loadImage("data/images/players/ash.png"),
      skip: loadImage("data/images/players/skip.png"),
      milk: loadImage("data/images/players/milk.png"),
      dew: loadImage("data/images/players/dew.png")
    },
    snake: loadImage("data/images/enemies/snake.png"),
    raven: loadImage("data/images/enemies/raven.png"),
    frog: loadImage("data/images/frog.png"),
    stages: [
      loadImage("data/images/bgs/first.png"),
      loadImage("data/images/bgs/second.png"),
      loadImage("data/images/bgs/third.png"),
      loadImage("data/images/bgs/fourth.png"),
      loadImage("data/images/bgs/fifth.png"),
    ],
    clouds: loadImage("data/images/clouds.png"),
    logo: loadImage("data/images/ui/logo.png"),
  };
  sfx = {
    collectFrog: loadSound("data/sfx/collectFrog.wav"),
    hawkScreech: loadSound("data/sfx/hawkScreech.wav"),
    jirouJump: loadSound("data/sfx/jirouJump.wav"),
    mainMenuClk: loadSound("data/sfx/mainMenuClick.wav"),
    mainMenuSel: loadSound("data/sfx/mainMenuSelected.wav"),
    snakeHiss: loadSound("data/sfx/snakeHiss.wav"),
  };

  music = {
    ash: loadSound("data/music/ash music.mp3"),
    dew: loadSound("data/music/dew music.wav"),
    jirou: loadSound("data/music/jirou music.wav"),
    milk: loadSound("data/music/Milk music.mp3"),
    skip: loadSound("data/music/Skip music.mp3"),
  };

  settings = {
    sfxVolume: 100,
    musicVolume: 100
  };
}

function setupSfx(buttons) {
  buttons.forEach(button => {
    button.addEventListener('mouseover', function () {
      sfx.mainMenuSel.play();
    });

    button.addEventListener('click', function () {
      sfx.mainMenuClk.play();
    });
  });
}

function saveGame() {
  let data = {
    settings: settings,
    frogsCollected: totalFrogsCollected
  }

  storeItem("saveData", data);
}

function loadGame() {
  const data = getItem("saveData");

  if (data != null) {
    settings = data.settings;
    totalFrogsCollected = data.frogsCollected;
  }

  for (const [_, soundFile] of Object.entries(music)) {
    soundFile.setVolume(settings.musicVolume / 100);
  }
  for (const [_, soundFile] of Object.entries(sfx)) {
    soundFile.setVolume(settings.sfxVolume / 100);
  }
}

function setup() {
  canvasDimensions = {
    width: 800,
    height: 300
  };
  createCanvas(canvasDimensions.width, canvasDimensions.height);

  noSmooth();
  textFont(customFont);

  enemyTypes = ["raven", "snake"];

  currentEnemyType = enemyTypes[Math.floor(random(2))];
  gameIsOver = false;

  characterUnlockThresholds = {
    jirou: 0,
    skip: 1,
    milk: 2,
    ash: 3,
    dew: 69
  };

  selectedCharacter = "jirou";

  characterVariants = {
    ash: {
      snake: 1, // black
      raven: 1, // red
    },
    dew: {
      snake: 0, // green
      raven: 2, // green
    },
    jirou: {
      snake: 2, // orange
      raven: 0, // black
    },
    milk: {
      snake: 3, // blue
      raven: 3, // white
    },
    skip: {
      snake: 4, // yellow
      raven: 4, // yellow
    },
  };

  titleString = "Jirou Froghunt 2";

  counter = 0;
  score = counter;
  playerSize = 40;
  playerX = 25;
  playerY = canvasDimensions.height - 70;
  basePlayerY = playerY;
  playerVel = 0;
  gravity = 0.75;
  offsetTables = {
    cloud: [
      [0, 0],
      [512, 0],
      [0, 512],
      [512, 512],
    ]
  };
  cloudSpeed = 2;
  clouds = [
    {
      variant: random(0, 4),
      x: random(0, canvasDimensions.width),
      y: random(-10, 5)
    },
    {
      variant: random(0, 4),
      x: random(0, canvasDimensions.width),
      y: random(-10, 5)
    },
    {
      variant: random(0, 4),
      x: random(0, canvasDimensions.width),
      y: random(-10, 5)
    },
    {
      variant: random(0, 4),
      x: random(0, canvasDimensions.width + 100),
      y: random(-30, 5)
    }
  ];
  snakes = [{
    x: 0,
    y: playerY - 25,
    animFrame: 0,
    hitboxOffsets: {
      topLeft: [4, 37],
      botRight: [70, 65],
    },
    hissed: false
  }];

  enemySpeed = 5;
  ravens = [{
    x: 0,
    y: playerY - 125,
    animFrame: 0,
    hitboxOffsets: {
      topLeft: [1, 5],
      botRight: [70, 65],
    },
    cawed: false
  }];

  frogs = [{
    x: 300,
    y: playerY - 25,
    animFrame: 0,
    hitboxOffsets: {
      topLeft: [14, 10],
      botRight: [50, 50]
    },
  }];
  frogTimer = 0;
  frogSpeed = 2;
  frogsCollectedThisRun = 0;
  totalFrogsCollected = 0;

  gameOverBtns = {
    mainMenuBtn: createButton("Return to Main Menu"),
    newRunBtn: createButton("Start New Run")
  };

  gameOverBtns.mainMenuBtn.position(425, 175);
  gameOverBtns.mainMenuBtn.size(175, 79);
  gameOverBtns.mainMenuBtn.mouseClicked(() => {
    screenTransition("title");
    
    totalFrogsCollected += frogsCollectedThisRun;
    frogsCollectedThisRun = 0;
    gameIsOver = false;
    gameOverBtns.mainMenuBtn.hide();
    gameOverBtns.newRunBtn.hide();
  });
  gameOverBtns.mainMenuBtn.hide();

  gameOverBtns.newRunBtn.position(195, 175);
  gameOverBtns.newRunBtn.size(195, 79);
  gameOverBtns.newRunBtn.mouseClicked(() => {
    totalFrogsCollected += frogsCollectedThisRun;
    frogsCollectedThisRun = 0;
    gameIsOver = false;
    gameOverBtns.mainMenuBtn.hide();
    gameOverBtns.newRunBtn.hide();
    
    startGame();
  });
  gameOverBtns.newRunBtn.hide();

  screenObjects = {};
  loadGame();

  setupTitleScreen();
  setupCharacterSelect();
  setupSettings();

  setupSfx([
    document.getElementById('playBtn'),
    document.getElementById('settingsBtn'),
    document.getElementById('quitBtn')
  ]);

  window.addEventListener("click", pageClicked);


  screen = "title";

  textSize(30);
  textAlign(RIGHT, TOP);

}

function pageClicked() {
  music.jirou.loop();
  window.removeEventListener("click", pageClicked);
}

function screenTransition(screenName) {
  saveGame();

  const OLD_SCREEN = screen;
  switch (OLD_SCREEN) {
    case "title":
      screenObjects.title.playBtn.hide();
      screenObjects.title.settingsBtn.hide();
      screenObjects.title.quitBtn.hide();
      break;
    case "settings":
      screenObjects.settings.sfxSlider.hide();
      screenObjects.settings.musicSlider.hide();
      screenObjects.settings.resetProgressBtn.hide();
      screenObjects.settings.backBtn.hide();
      break;
    case "characterSelect":
      screenObjects.characterSelect.ashBtn.hide();
      screenObjects.characterSelect.dewBtn.hide();
      screenObjects.characterSelect.jirouBtn.hide();
      screenObjects.characterSelect.milkBtn.hide();
      screenObjects.characterSelect.skipBtn.hide();

      music.jirou.stop();
      break;
    case "game":
      music[selectedCharacter].stop();
      break;
    default:
      console.error("invalid screen!!!! do better");
      return;
  }
  switch (screenName) {
    case "title":
      fill(0, 0, 0);
      screenObjects.title.playBtn.show();
      screenObjects.title.settingsBtn.show();
      screenObjects.title.quitBtn.show();

      titleString = "Jirou Froghunt 2";

      if (!music.jirou.isLooping()) music.jirou.loop();
      break;
    case "characterSelect":
      screenObjects.characterSelect.jirouBtn.show();
      screenObjects.characterSelect.skipBtn.show();
      screenObjects.characterSelect.milkBtn.show();
      screenObjects.characterSelect.ashBtn.show();
      screenObjects.characterSelect.dewBtn.show();

      if (totalFrogsCollected < characterUnlockThresholds.skip) {
        screenObjects.characterSelect.skipBtn.attribute("disabled", "");
      } else {
        screenObjects.characterSelect.skipBtn.removeAttribute("disabled");
      }
      if (totalFrogsCollected < characterUnlockThresholds.milk) {
        screenObjects.characterSelect.milkBtn.attribute("disabled", "");
      } else {
        screenObjects.characterSelect.milkBtn.removeAttribute("disabled");
      }
      if (totalFrogsCollected < characterUnlockThresholds.ash) {
        screenObjects.characterSelect.ashBtn.attribute("disabled", "");
      } else {
        screenObjects.characterSelect.ashBtn.removeAttribute("disabled");
      }
      if (totalFrogsCollected < characterUnlockThresholds.dew) {
        screenObjects.characterSelect.dewBtn.attribute("disabled", "");
      } else {
        screenObjects.characterSelect.dewBtn.removeAttribute("disabled");
      }

      titleString = "Choose Your Character";
      break;
    case "settings":
      screenObjects.settings.sfxSlider.show();
      screenObjects.settings.musicSlider.show();
      screenObjects.settings.resetProgressBtn.show();
      screenObjects.settings.backBtn.show();
      break;
    case "game":
      music[selectedCharacter].loop();
      break;
    default:
      console.error("invalid screen!!!! do better");
      return;
  }
  screen = screenName;
}

function startGame() {
  // reset game specific variables
  counter = 0;
  score = 0;

  enemySpeed = 5;
  cloudSpeed = 2;

  playerY = basePlayerY;
  playerState = 0;
  playerAnimFrame = 0;

  snakes.forEach(snakeData => {
    snakeData.x = canvasDimensions.width + 100;
    snakeData.animFrame = 0;
  });

  ravens.forEach(ravenData => {
    ravenData.x = canvasDimensions.width + 100;
    ravenData.animFrame = 0;
  });

  clouds.forEach(cloudData => {
    cloudData.variant = Math.floor(random(0, 4));
    cloudData.x = canvasDimensions.width + random(0, 512);
    cloudData.y = random(-10, 5);
  });

  screenTransition("game");
}

function gameLogic() {
  counter++;

  playerVel *= 0.98;
  playerY += playerVel;
  if (!gameIsOver) {
    if (playerY < basePlayerY) {
      playerState = 1;
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83) /* s key */) {
      playerState = 2;
    } else {
      playerState = 0;
    }
    if (playerY > basePlayerY) {
      playerVel = 0;
      playerY = basePlayerY;
    }
    playerVel += gravity;

    if (counter % 6 == 0) {
      enemySpeed += 0.01;
      cloudSpeed += 0.01;

      frogSpeed = enemySpeed / 3;
    } else if (counter % 6 == 0) {
      playerAnimFrame++;
    }
  }


  snakes.forEach(snakeData => {
    if (currentEnemyType == "snake" && !gameIsOver) {
      snakeData.x -= enemySpeed;
      if (counter % 6 == 0) {
        snakeData.animFrame++;
      }
      if (snakeData.x < -100) {
        snakeData.animFrame = 0;
        snakeData.x = canvasDimensions.width + random(0, 50);
        snakeData.hissed = false;
        currentEnemyType = enemyTypes[Math.floor(random(2))];
      } else if (detectCollisionWith(snakeData)) {
        gameOver();
      }

      if (!snakeData.hissed && snakeData.x < canvasDimensions.width) {
        if (random(100) < 5) {
          sfx.snakeHiss.play();
          snakeData.hissed = true;
        }
      }
    }
    drawSnake(snakeData.x, snakeData.y, 70, snakeData.animFrame);
  });

  ravens.forEach(ravenData => {
    if (currentEnemyType == "raven" && !gameIsOver) {
      ravenData.x -= enemySpeed;
      if (counter % 6 == 0) {
        ravenData.animFrame++;
      }
      if (ravenData.x < -100) {
        ravenData.animFrame = 0;
        ravenData.x = canvasDimensions.width + random(0, 50);
        if (Math.floor(random(2)) == 1) {
          ravenData.y = playerY - 15;
        }
        ravenData.cawed = false;
        currentEnemyType = enemyTypes[Math.floor(random(2))];
      } else if (detectCollisionWith(ravenData)) {
        gameOver();
      }

      if (!ravenData.cawed && ravenData.x < canvasDimensions.width) {
        if (random(100) < 5) {
          sfx.hawkScreech.play();
          ravenData.cawed = true;
        }
      }  
    }
    drawRaven(ravenData.x, ravenData.y, 70, ravenData.animFrame);
  })

  frogs.forEach(frogData => {
    if (frogTimer > 0) {
      frogTimer--;
    } else if (!gameIsOver) {
      frogData.x -= frogSpeed;
      if (counter % 5 == 0) frogData.animFrame++;
    }
    if (frogData.x < 0) {
      frogData.x = canvasDimensions.width + 150;
      frogData.animFrame = 0;
      frogTimer = Math.floor(random(240));
    }

    if (detectCollisionWith(frogData)) {
      frogData.x = -100;
      frogsCollectedThisRun++;
      sfx.collectFrog.play();
    }

    drawFrog(frogData.x, frogData.y, 65, frogData.animFrame);
  });
}

function gameOver() {
  gameIsOver = true;
}

/**
 * Render a cloud at position (x, y) with size.
 * Supports four cloud variants.
 * @param {number} variant - cloud variant number (0-3)
 * @param {number} x - x position of cloud
 * @param {number} y - y position of cloud
 * @param {number} size - size of cloud
 */
function drawCloud(variant, x, y, size) {
  variant = Math.floor(variant % 4);
  let offsets = offsetTables.cloud[variant];
  copy(sprites.clouds, offsets[0], offsets[1], 512, 512, x, y, size, size);
}

/**
 * Render a snake at position (x, y) with size, with a given animation frame (0-3)
 * Supports five snake variants.
 * @param {number} x - x position of snake
 * @param {number} y - y position of snake
 * @param {number} size - size of snake
 * @param {number} animFrame - animation frame number (0-3)
 */
function drawSnake(x, y, size, animFrame) {
  animFrame %= 4;
  copy(sprites.snake, 70 * animFrame, 71 * characterVariants[selectedCharacter].snake, 70, 71, x, y, size, size);
}

function drawFrog(x, y, size, animFrame) {
  animFrame %= 4;
  copy(sprites.frog, 95 * animFrame, 0, 95, 95, x, y, size, size);
}

function drawRaven(x, y, size, animFrame) {
  animFrame %= 4;

  copy(sprites.raven, 70 * animFrame, 71 * characterVariants[selectedCharacter].raven, 70, 71, x, y, size, size);
}

function detectCollisionWith(enemyData) {
  let playerHitbox = {
    topLeft: [playerX + 2, playerY],
    botRight: [playerX + playerSize, playerY + playerSize],
  };
  let enemyHitbox = {
    topLeft: [enemyData.x + enemyData.hitboxOffsets.topLeft[0], enemyData.y + enemyData.hitboxOffsets.topLeft[1]],
    botRight: [enemyData.x + enemyData.hitboxOffsets.botRight[0], enemyData.y + enemyData.hitboxOffsets.botRight[1]],
  };

  if (playerState == 2) playerHitbox.topLeft[1] += 20;

  let inRangeX = (enemyHitbox.topLeft[0] < playerHitbox.botRight[0])
    && (enemyHitbox.botRight[0] > playerHitbox.topLeft[0]);

  let inRangeY = (enemyHitbox.topLeft[1] < playerHitbox.botRight[1])
    && (enemyHitbox.botRight[1] > playerHitbox.topLeft[1]);

  if (inRangeX && inRangeY) {
    // fill(0, 255, 0);
    return true;
  }

  // stroke(0, 0, 0, 255);
  // rectMode(CORNERS)
  // rect(enemyHitbox.topLeft[0], enemyHitbox.topLeft[1], enemyHitbox.botRight[0], enemyHitbox.botRight[1])
  // rect(playerHitbox.topLeft[0], playerHitbox.topLeft[1], playerHitbox.botRight[0], playerHitbox.botRight[1]);

  return false;
}

function draw() {
  background("#99E65F");

  switch (screen) {
    case "title":

      // title(titleString, 400, 40);
      copy(sprites.logo, 0, 0, 144, 81, 256, 15, 288, 162)
      break;
    case "game":

      copy(sprites.stages[0], 0, 0, 800, 300, 0, 0, 800, 300);
      fill("#1DFF00");
      stroke(0, 0, 0, 0);
      rectMode(CORNER);
      rect(0, canvasDimensions.height - 50, canvasDimensions.width, 50);
      fill(255, 255, 255);
      clouds.forEach(cloudData => {
        if (!gameIsOver) {
          cloudData.x -= cloudSpeed;
          if (cloudData.x < -260) {
            cloudData.variant = Math.floor(random(0, 4));
            cloudData.x = canvasDimensions.width + random(0, 512);
            cloudData.y = random(-10, 5);
          }
        }
        drawCloud(cloudData.variant, cloudData.x, cloudData.y, 128);
      });

      gameLogic();
      copy(sprites.characters[selectedCharacter], 95 * (playerAnimFrame % 4), 95 * playerState, 95, 95, playerX, playerY, playerSize, playerSize);
      text(frogsCollectedThisRun, 780, 10);
      break;
    case "settings":
      title("Settings", 400, 40);

      textAlign(LEFT, CENTER);
      text("Music Volume", 10, 100);
      text("SFX Volume", 10, 150);

      settings.sfxVolume = screenObjects.settings.sfxSlider.value();
      settings.musicVolume = screenObjects.settings.musicSlider.value();

      for (const [_, soundFile] of Object.entries(music)) {
        soundFile.setVolume(settings.musicVolume / 100);
      }
      for (const [_, soundFile] of Object.entries(sfx)) {
        soundFile.setVolume(settings.sfxVolume / 100);
      }
      break;
    case "characterSelect":
      title(titleString, 400, 40);

      textSize(15);
      textAlign(CENTER, CENTER);
      if (screenObjects.characterSelect.skipBtn.attribute("disabled") == "") text(
        `${characterUnlockThresholds.skip} Frog\nTo Unlock`,
        screenObjects.characterSelect.skipBtn.size().width / 2 +
        screenObjects.characterSelect.skipBtn.position().x,
        237
      );

      if (screenObjects.characterSelect.milkBtn.attribute("disabled") == "") text(`${characterUnlockThresholds.milk} Frogs\nTo Unlock`,
        screenObjects.characterSelect.milkBtn.size().width / 2 +
        screenObjects.characterSelect.milkBtn.position().x,
        // textWidth("To Unlock"),
        237
      );
      if (screenObjects.characterSelect.ashBtn.attribute("disabled") == "") text(`${characterUnlockThresholds.ash} Frogs\nTo Unlock`,
        screenObjects.characterSelect.ashBtn.size().width / 2 +
        screenObjects.characterSelect.ashBtn.position().x,
        // textWidth("To Unlock"),
        237
      );
      if (screenObjects.characterSelect.dewBtn.attribute("disabled") == "") text(`${characterUnlockThresholds.dew} Frogs\nTo Unlock`,
        screenObjects.characterSelect.dewBtn.size().width / 2 +
        screenObjects.characterSelect.dewBtn.position().x,
        // textWidth("To Unlock"),
        237
      );
      break;
    default:
      console.error("invalid screen!!!! do better");
      break;
  }

  if (gameIsOver) {
    gameOverBtns.mainMenuBtn.show();
    gameOverBtns.newRunBtn.show();

    playerVel = 0;
    fill("#99E65F");
    rectMode(CORNER);
    rect(0, 0, canvasDimensions.width, canvasDimensions.height);
    
    fill("black");
    title("Game Over!", 400, 40);

    textAlign(CENTER, CENTER);
    text(`You collected ${frogsCollectedThisRun} frog(s)!`, 400, 140);
  }

}

function keyPressed() {
  if (key == " " && playerY == basePlayerY) {
    playerVel -= 13;
    playerState = 1;
    sfx.jirouJump.play();
  }
}