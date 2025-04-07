let canvasDimensions;
let customFont;

let backgroundPos1;
let backgroundPos2;

let screen;
let sprites;
let soundEffects;
let music;
let screenObjects;

let titleString;

let raisedBtn;

let player;

let gravity;

let grassBlades;
let grassSpeed;

let snake;
let raven;
let enemySpeed;
let currentEnemyType;
let enemyTypes;

let frog;
let frogSpeed;
let frogTimer;
let frogsCollectedThisRun
let totalFrogsCollected;

let offsetTables;

let selectedCharacter;

let characterVariants;
let characterUnlockThresholds;

let gameOver;
let gameOverBtns;

let settings;
let counter;

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
    quitBtn: createButton(""),
    creditsBtn: createButton("")
  };

  const settingsBtnX = canvasDimensions.width / 2 - 117;
  const btnOffset = 250;
  
  screenObjects.title.playBtn.position(settingsBtnX - btnOffset, 330);
  screenObjects.title.playBtn.size(233, 105);
  screenObjects.title.playBtn.mouseClicked(() => screenTransition("characterSelect"));
  screenObjects.title.playBtn.id("playBtn");

  screenObjects.title.settingsBtn.position(settingsBtnX, 330);
  screenObjects.title.settingsBtn.size(233, 105);
  screenObjects.title.settingsBtn.id("settingsBtn");
  screenObjects.title.settingsBtn.mouseClicked(() => screenTransition("settings"));

  screenObjects.title.quitBtn.position(settingsBtnX + btnOffset, 330);
  screenObjects.title.quitBtn.size(233, 105);
  screenObjects.title.quitBtn.id("quitBtn");
  screenObjects.title.quitBtn.mouseClicked(() => window.close());

  screenObjects.title.creditsBtn.position(canvasDimensions.width - 132, 15);
  screenObjects.title.creditsBtn.size(117, 53);
  screenObjects.title.creditsBtn.id("creditsBtn");
  screenObjects.title.creditsBtn.mouseClicked(() => {
    if (screen == "title") {
      screenTransition("credits");
    } else {
      screenTransition("title");
    }
  })
}

function setupCharacterSelect() {
  screenObjects.characterSelect = {
    ashBtn: createButton(""),
    dewBtn: createButton(""),
    jirouBtn: createButton(""),
    milkBtn: createButton(""),
    skipBtn: createButton(""),
  };

  screenObjects.characterSelect.jirouBtn.size(149, 187);
  screenObjects.characterSelect.jirouBtn.id("jirouBtn");
  screenObjects.characterSelect.jirouBtn.position(180, canvasDimensions.height - 177);
  screenObjects.characterSelect.jirouBtn.mouseClicked(() => {
    selectedCharacter = "jirou";
    startGame();
  });
  
  screenObjects.characterSelect.skipBtn.size(212, 185);
  screenObjects.characterSelect.skipBtn.id("skipBtn");
  screenObjects.characterSelect.skipBtn.position(380, canvasDimensions.height - 175);
  screenObjects.characterSelect.skipBtn.mouseClicked(() => {
    selectedCharacter = "skip";
    startGame();
  });
  
  screenObjects.characterSelect.milkBtn.size(266, 191);
  screenObjects.characterSelect.milkBtn.id("milkBtn");
  screenObjects.characterSelect.milkBtn.position(545, canvasDimensions.height - 181);
  screenObjects.characterSelect.milkBtn.style("z-index: 5;")
  screenObjects.characterSelect.milkBtn.mouseClicked(() => {
    selectedCharacter = "milk";
    startGame();
  });

  screenObjects.characterSelect.ashBtn.size(185, 185);
  screenObjects.characterSelect.ashBtn.id("ashBtn");
  screenObjects.characterSelect.ashBtn.position(290, canvasDimensions.height - 164);
  screenObjects.characterSelect.ashBtn.mouseClicked(() => {
    selectedCharacter = "ash";
    startGame();
  });
  
  screenObjects.characterSelect.dewBtn.size(227, 194);
  screenObjects.characterSelect.dewBtn.id("dewBtn");
  screenObjects.characterSelect.dewBtn.position(0, canvasDimensions.height - 184);
  screenObjects.characterSelect.dewBtn.mouseClicked(() => {
    selectedCharacter = "dew";
    startGame();
  });

  screenObjects.characterSelect.jirouBtn.hide();
  screenObjects.characterSelect.skipBtn.hide();
  screenObjects.characterSelect.dewBtn.hide();
  screenObjects.characterSelect.ashBtn.hide();
  screenObjects.characterSelect.milkBtn.hide();

  for (const button in screenObjects.characterSelect) {
    if (Object.prototype.hasOwnProperty.call(screenObjects.characterSelect, button)) {
      const btnElmt = document.getElementById(button);
      
      btnElmt.addEventListener('mouseout', () => {
        if (btnElmt.disabled) return;
        if (raisedBtn) return;
        if (button == "milkBtn") {
          screenObjects.characterSelect[button].style("z-index", 5);
        } else {
          screenObjects.characterSelect[button].style("z-index", 0);
        }
        let pos = screenObjects.characterSelect[button].position();
        screenObjects.characterSelect[button].position(pos.x, pos.y + 10);
        raisedBtn = true;
      })

      btnElmt.addEventListener('mouseover', () => {
        if (!raisedBtn) return;
        if (btnElmt.disabled) return;
        
        screenObjects.characterSelect[button].style("z-index", 99);
        let pos = screenObjects.characterSelect[button].position();
        screenObjects.characterSelect[button].position(pos.x, pos.y - 10);
        raisedBtn = false;
      });
    }
  }
}

function setupSettings() {
  screenObjects.settings = {
    sfxSlider: createSlider(0, 100, settings.sfxVolume),
    musicSlider: createSlider(0, 100, settings.musicVolume),
    resetProgressBtn: createButton(""),
    backBtn: createButton("")
  };
  screenObjects.settings.musicSlider.position(230, 90);

  screenObjects.settings.sfxSlider.position(230, 140);

  screenObjects.settings.resetProgressBtn.position(600, canvasDimensions.height - 100);
  screenObjects.settings.resetProgressBtn.size(175, 79);
  screenObjects.settings.resetProgressBtn.id("resetProgressBtn");
  screenObjects.settings.resetProgressBtn.mouseClicked(() => {
    totalFrogsCollected = 0;
    saveGame();
  });

  screenObjects.settings.backBtn.position(312, canvasDimensions.height - 100);
  screenObjects.settings.backBtn.size(175, 79);
  screenObjects.settings.backBtn.id("backBtn")
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
    frogs: {
      jirou: loadImage("data/images/frogs/jirou.png"),
      ash: loadImage("data/images/frogs/ash.png"),
      skip: loadImage("data/images/frogs/skip.png"),
      milk: loadImage("data/images/frogs/milk.png"),
      dew: loadImage("data/images/frogs/dew.png"),
    },
    stages: {
      jirou: loadImage("data/images/bgs/jirou.png"),
      ash: loadImage("data/images/bgs/ash.png"),
      skip: loadImage("data/images/bgs/skip.png"),
      milk: loadImage("data/images/bgs/milk.png"),
      dew: loadImage("data/images/bgs/dew.png"),
    },
    ui: {
      bg: loadImage("data/images/ui/bg.png"),
      logo: loadImage("data/images/ui/logo.png"),
      chibis: {
        jirou: loadImage("data/images/ui/chibis/jirou.png"),
        skip: loadImage("data/images/ui/chibis/skip.png"),
        milk: loadImage("data/images/ui/chibis/milk.png"),
        ash: loadImage("data/images/ui/chibis/ash.png"),
        dew: loadImage("data/images/ui/chibis/dew.png"),
      }
    }
  };
  soundEffects = {
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
      if (button.disabled) return;
      soundEffects.mainMenuSel.play();
    });

    button.addEventListener('click', function () {
      if (button.disabled) return;
      soundEffects.mainMenuClk.play();
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
  for (const [_, soundFile] of Object.entries(soundEffects)) {
    soundFile.setVolume(settings.sfxVolume / 100);
  }
}

function setup() {
  canvasDimensions = {
    width: 800,
    height: 450
  };
  createCanvas(canvasDimensions.width, canvasDimensions.height);

  noSmooth();
  textFont(customFont);

  counter = 0;
  backgroundPos1 = 0;
  backgroundPos2 = canvasDimensions.width;

  enemyTypes = ["raven", "snake"];

  currentEnemyType = enemyTypes[Math.floor(random(2))];
  gameOver = false;

  characterUnlockThresholds = {
    skip: 5,
    milk: 20,
    ash: 40,
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

  player = {
    x: 25,
    y: canvasDimensions.height - 70,
    baseY: canvasDimensions.height - 205,
    velocity: 0,
    size: 150,
    state: 0, // 0 = running, 1 = jumping, 2 = ducking
    animFrame: 0
  };
  gravity = 0.75;
  
  snake = {
    x: 0,
    y: player.baseY + 75,
    animFrame: 0,
    hitboxOffsets: {
      topLeft: [4, 37],
      botRight: [70, 65],
    },
    hissed: false
  };

  enemySpeed = 4;
  raven = {
    x: 0,
    y: player.baseY - 25,
    animFrame: 0,
    hitboxOffsets: {
      topLeft: [1, 5],
      botRight: [70, 65],
    },
    cawed: false
  };

  frog = {
    x: 300,
    y: player.baseY + 80,
    animFrame: 0,
    hitboxOffsets: {
      topLeft: [5, 15],
      botRight: [63, 64]
    },
  };
  frogTimer = 0;
  frogSpeed = 2;
  frogsCollectedThisRun = 0;
  totalFrogsCollected = 0;

  gameOverBtns = {
    mainMenuBtn: createButton(""),
    newRunBtn: createButton("")
  };

  gameOverBtns.mainMenuBtn.position(425, 175);
  gameOverBtns.mainMenuBtn.size(175, 79);
  gameOverBtns.mainMenuBtn.id("mainMenuBtn");
  gameOverBtns.mainMenuBtn.mouseClicked(() => {
    screenTransition("title");
    
    totalFrogsCollected += frogsCollectedThisRun;
    frogsCollectedThisRun = 0;
    gameOver = false;
    gameOverBtns.mainMenuBtn.hide();
    gameOverBtns.newRunBtn.hide();
  });
  gameOverBtns.mainMenuBtn.hide();

  gameOverBtns.newRunBtn.position(195, 175);
  gameOverBtns.newRunBtn.size(195, 79);
  gameOverBtns.newRunBtn.id("newRunBtn");
  gameOverBtns.newRunBtn.mouseClicked(() => {
    totalFrogsCollected += frogsCollectedThisRun;
    frogsCollectedThisRun = 0;
    gameOver = false;
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

  const btns = [
    document.getElementById('playBtn'),
    document.getElementById('settingsBtn'),
    document.getElementById('quitBtn'),
    document.getElementById('resetProgressBtn'),
    document.getElementById('creditsBtn'),
    document.getElementById('backBtn'),
    document.getElementById('newRunBtn'),
    document.getElementById('mainMenuBtn'),
    document.getElementById('jirouBtn'),
    document.getElementById('ashBtn'),
    document.getElementById('dewBtn'),
    document.getElementById('milkBtn'),
    document.getElementById('skipBtn'),
  ];

  setupSfx(btns);

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
      if (screenName == "credits") {
        screenObjects.title.creditsBtn.id("backBtn");
      } else {
        screenObjects.title.creditsBtn.hide();
      }
      break;
    case "credits":
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
      screenObjects.title.creditsBtn.id("creditsBtn");
      screenObjects.title.creditsBtn.show();

      titleString = "Jirou Froghunt 2";

      if (!music.jirou.isLooping()) music.jirou.loop();
      break;
    case "credits":
      screenObjects.title.creditsBtn.id("backBtn");
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

      titleString = "Choose Your Frogboy";
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
  enemySpeed = 4;

  player.y = player.baseY;
  player.state = 0;
  player.animFrame = 0;

  snake.x = canvasDimensions.width + 100;
  snake.animFrame = 0;

  raven.x = canvasDimensions.width + 100;
  raven.animFrame = 0;

  screenTransition("game");
}

function iteratePlayer() {
  player.velocity *= 0.98;
  player.y += player.velocity;
  if (!gameOver) {
    if (player.y < player.baseY) {
      player.state = 1;
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83) /* s key */) {
      player.state = 2;
    } else {
      player.state = 0;
    }
    if (player.y > player.baseY) {
      player.velocity = 0;
      player.y = player.baseY;
    }
    player.velocity += gravity;

    if (counter % 6 == 0) {
      enemySpeed += 0.01;

      frogSpeed = enemySpeed / 3;
    }
    if (counter % 5 == 0) {
      player.animFrame++;
    }
  }
}

function iterateFrogs() {
  if (frogTimer > 0) {
      frogTimer--;
    } else if (!gameOver) {
      frog.x -= frogSpeed;
      if (counter % 10 == 0) {
        frog.animFrame++;
      } 
    }
    if (frog.x < 0) {
      frog.x = canvasDimensions.width + 150;
      frog.animFrame = 0;
      frogTimer = Math.floor(random(240));
    }

    if (detectCollisionWith(frog)) {
      frog.x = -100;
      frogsCollectedThisRun++;
      soundEffects.collectFrog.play();
    }


    drawFrog(frog.x, frog.y, 65, frog.animFrame);
}

function iterateEnemies() {
  if (currentEnemyType == "snake" && !gameOver) {
      snake.x -= enemySpeed;
      if (counter % 6 == 0) {
        snake.animFrame++;
      }
      if (snake.x < -100) {
        snake.animFrame = 0;
        snake.x = canvasDimensions.width + random(0, 50);
        snake.hissed = false;
        currentEnemyType = enemyTypes[Math.floor(random(2))];
      } else if (detectCollisionWith(snake)) {
        gameOver = true;
      }

      if (!snake.hissed && snake.x < canvasDimensions.width - 30) {
          soundEffects.snakeHiss.play();
          snake.hissed = true;
      }
    }
    drawSnake(snake.x, snake.y, 70, snake.animFrame);

    if (currentEnemyType == "raven" && !gameOver) {
      raven.x -= enemySpeed;
      if (counter % 12 == 0) {
        raven.animFrame++;
      }
      if (raven.x < -100) {
        raven.animFrame = 0;
        raven.x = canvasDimensions.width + random(0, 50);
        raven.y = player.baseY - 25;
        if (random(2) > 1) {
          raven.y += 100;
        }
        raven.cawed = false;
        currentEnemyType = enemyTypes[Math.floor(random(2))];
      } else if (detectCollisionWith(raven)) {
        gameOver = true;
      }

      if (!raven.cawed && raven.x < canvasDimensions.width - 30) {
          soundEffects.hawkScreech.play();
          raven.cawed = true;
      }  
    }
    drawRaven(raven.x, raven.y, 70, raven.animFrame);
}

function gameLogic() {
  counter++;

  iteratePlayer();
  iterateEnemies();
  iterateFrogs();
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
  animFrame %= 3;
  copy(sprites.frogs[selectedCharacter], 68 * animFrame, 0, 68, 68, x, y, size, size);
}

function drawRaven(x, y, size, animFrame) {
  animFrame %= 4;

  copy(sprites.raven, 70 * animFrame, 71 * characterVariants[selectedCharacter].raven, 70, 71, x, y, size, size);
}

function detectCollisionWith(enemyData) {
  let playerHitbox = {
    topLeft: [player.x + 30, player.y],
    botRight: [player.x + player.size - 30, player.y + player.size - 10],
  };
  let enemyHitbox = {
    topLeft: [enemyData.x + enemyData.hitboxOffsets.topLeft[0], enemyData.y + enemyData.hitboxOffsets.topLeft[1]],
    botRight: [enemyData.x + enemyData.hitboxOffsets.botRight[0], enemyData.y + enemyData.hitboxOffsets.botRight[1]],
  };

  if (player.state == 2) {
    playerHitbox.topLeft[0] -= 30;
    playerHitbox.botRight[0] += 30;
    playerHitbox.topLeft[1] += 60;
  }

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
  background(sprites.ui.bg);

  switch (screen) {
    case "title":
      // title(titleString, 400, 40);
      let centerX = canvasDimensions.width / 2;
      copy(sprites.ui.logo, 0, 0, 144, 81, centerX - 178, 35, 356, 200)
      
      copy(sprites.ui.chibis.jirou, 0, 0, 42, 42, centerX - 168, 255, 64, 64);
      copy(sprites.ui.chibis.skip, 0, 0, 42, 42, centerX - 100, 255, 64, 64);
      copy(sprites.ui.chibis.milk, 0, 0, 42, 42, centerX - 32, 255, 64, 64);
      copy(sprites.ui.chibis.ash, 0, 0, 42, 42, centerX + 36, 255, 64, 64);
      copy(sprites.ui.chibis.dew, 0, 0, 42, 42, centerX + 104, 255, 64, 64);

      break;
    case "game":
      backgroundPos1--;
      backgroundPos2--;
      console.log(backgroundPos1);
      if (backgroundPos1 <= (-canvasDimensions.width)) {
        backgroundPos1 = canvasDimensions.width;
      }
      if (backgroundPos2 <= -canvasDimensions.width) {
        backgroundPos2 = canvasDimensions.width;
      }
      copy(sprites.stages[selectedCharacter], 0, 0, 288, 162, backgroundPos1, 0, canvasDimensions.width, canvasDimensions.height);
      copy(sprites.stages[selectedCharacter], 0, 0, 288, 162, backgroundPos2, 0, canvasDimensions.width, canvasDimensions.height);
      stroke(0, 0, 0, 0);
      rectMode(CORNER);
      fill(255, 255, 255);

      gameLogic();

      if (player.state == 0) {
        copy(sprites.characters[selectedCharacter], 117 * (player.animFrame % 8), 0, 117, 117, player.x, player.y, player.size, player.size);
      } else if (player.state == 1) {
        copy(sprites.characters[selectedCharacter], 117 * (player.animFrame % 2), 117, 117, 117, player.x, player.y, player.size, player.size);
      } else {
        copy(sprites.characters[selectedCharacter], 234 + 117 * (player.animFrame % 2), 117, 117, 117, player.x, player.y, player.size, player.size);
      }
      // text(frogsCollectedThisRun, 780, 10);
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
      for (const [_, soundFile] of Object.entries(soundEffects)) {
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
        screenObjects.characterSelect.skipBtn.position().x + 5,
        240
      );

      if (screenObjects.characterSelect.milkBtn.attribute("disabled") == "") text(`${characterUnlockThresholds.milk} Frogs\nTo Unlock`,
        screenObjects.characterSelect.milkBtn.size().width / 2 +
        screenObjects.characterSelect.milkBtn.position().x - 40,
        240
      );
      if (screenObjects.characterSelect.ashBtn.attribute("disabled") == "") text(`${characterUnlockThresholds.ash} Frogs\nTo Unlock`,
        screenObjects.characterSelect.ashBtn.size().width / 2 +
        screenObjects.characterSelect.ashBtn.position().x,
        260
      );
      if (screenObjects.characterSelect.dewBtn.attribute("disabled") == "") text(`${characterUnlockThresholds.dew} Frogs\nTo Unlock`,
        screenObjects.characterSelect.dewBtn.size().width / 2 +
        screenObjects.characterSelect.dewBtn.position().x + 25,
        225
      );
      textAlign(LEFT, CENTER);
      textSize(22);
      stroke(0, 0, 0, 255);
      strokeWeight(2);
      const textWidthA = textWidth("Frogs");
      line(10, 37, 30 + textWidthA, 37);
      stroke(0, 0, 0, 0);
      text("Frogs", 20, 20);
      textAlign(CENTER, CENTER);
      textSize(20);
      text(`${totalFrogsCollected}`, textWidthA / 2 + 20, 49);
      break;
    case "credits":

      textSize(25);
      textAlign(CENTER, CENTER);
      stroke(0, 0, 0, 255);
      strokeWeight(3);
      line(360 - textWidth("PRODUCER") / 2, 50, 440 + textWidth("PRODUCER") / 2, 50);
      line(360 - textWidth("PRODUCER") / 2, 130, 440 + textWidth("PRODUCER") / 2, 130);
      line(360 - textWidth("PRODUCER") / 2, 210, 440 + textWidth("PRODUCER") / 2, 210);
      line(360 - textWidth("PRODUCER") / 2, 290, 440 + textWidth("PRODUCER") / 2, 290);
      line(360 - textWidth("PRODUCER") / 2, 370, 440 + textWidth("PRODUCER") / 2, 370);
      stroke(0, 0, 0, 0);
      text("PRODUCER", 400, 30);
      text("ARTIST", 400, 110);
      text("PROGRAMMER", 400, 190);
      text("MUSICIAN", 400, 270);
      text("SPECIAL THANKS", 400, 350);
      textSize(20);
      text("Calyrexs", 400, 70);
      text("CosmicTraveler", 400, 150);
      text("C_ffeeStain", 400, 230);
      text("HMNK", 400, 310);
      text("Original Game Creators", 400, 390);
      break;
    default:
      console.error("invalid screen!!!! do better");
      break;
  }

  if (gameOver) {
    gameOverBtns.mainMenuBtn.show();
    gameOverBtns.newRunBtn.show();

    player.velocity = 0;
    background(sprites.ui.bg);
    
    fill("black");
    title("Game Over!", 400, 40);

    textAlign(CENTER, CENTER);
    let frogsCollectedText = `You collected ${frogsCollectedThisRun} frogs!`;
    if (frogsCollectedThisRun == 1) {
      frogsCollectedText = "You collected 1 frog!";
    }
    text(frogsCollectedText, 400, 140);
  }

}

function keyPressed() {
  if (key == " " && player.y == player.baseY && player.state != 2) {
    player.velocity -= 21.5;
    player.state = 1;
    soundEffects.jirouJump.play();
  }
}