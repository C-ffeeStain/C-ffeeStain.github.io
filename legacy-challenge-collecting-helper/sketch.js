let pages;
let page;
let selected;
let shown;

let packs;
let packsScreen;

let traits;
let traitsScreen;

let aspirations;
let aspirationsScreen;

let skills;
let skillsScreen;

let collections;
let collectionsScreen;

function title(content, x, y) {
  textStyle(BOLD);
  textSize(30);

  return text(content, x, y);
}

function label(content, x, y) {
  textStyle(NORMAL);
  textSize(15);

  return text(content, x, y);
}

function setupUST(pack, vertOffset, horizOffset) {
  let packTraits = traits[pack];

  if (packTraits != null) {
    packTraits.forEach(trait => {
      if (vertOffset == traitsScreen.secondStart) {
        vertOffset = 0;
        horizOffset += traitsScreen.tabOffset;
      }
      const checkbox = createCheckbox(" " + trait);
      if (selected.traits.indexOf(trait) != -1) {
        checkbox.checked(true);
      }
      checkbox.position(horizOffset, traitsScreen.checkboxStart + traitsScreen.checkboxOffset * horizOffset);
      checkbox.hide();
      pages.uniqueSpouseTraits.checkboxes[trait] = checkbox;
      vertOffset++;
    });
  }

  return { i: vertOffset, x: horizOffset };
}

function setupAD(pack, vertOffset, horizOffset) {
  let packAspirations = aspirations[pack];

  if (packAspirations != null) {
    packAspirations.forEach(aspiration => {
      if (vertOffset == aspirationsScreen.secondStart) {
        vertOffset = 0;
        horizOffset += aspirationsScreen.tabOffset;
      }
      const checkbox = createCheckbox(" " + aspiration);
      if (selected.aspirations.indexOf(aspiration) != -1) {
        checkbox.checked(true);
      }
      checkbox.position(horizOffset, aspirationsScreen.checkboxStart + aspirationsScreen.checkboxOffset * horizOffset);
      checkbox.hide();
      pages.aspirationsDone.checkboxes[aspiration] = checkbox;
      vertOffset++;
    });
  }

  return { i: vertOffset, x: horizOffset };
}

function setupSM(pack, vertOffset, horizOffset) {
  let packSkills = skills[pack];

  if (packSkills != null) {
    packSkills.forEach(skill => {
      if (vertOffset == skillsScreen.secondStart) {
        vertOffset = 0;
        horizOffset += skillsScreen.tabOffset;
      }
      const checkbox = createCheckbox(" " + skill);
      if (selected.skills.indexOf(skill) != -1) {
        checkbox.checked(true);
      }
      checkbox.position(horizOffset, skillsScreen.checkboxStart + skillsScreen.checkboxOffset * horizOffset);
      checkbox.hide();
      pages.skillsMaxed.checkboxes[skill] = checkbox;
      vertOffset++;
    });
  }

  return { i: vertOffset, x: horizOffset };
}

function setup() {
  createCanvas(800, 750);

  textFont("Monospace");
  textSize(25);


  selected = {
    packs: [],
    traits: [],
    skills: [],
    aspirations: [],
  }

  shown = {
    traits: [],
    skills: [],
    aspirations: [],
  }

  packsScreen = {
    checkboxStart: 75,
    checkboxOffset: 25,
    secondStart: 11,
    tabOffset: 265
  }

  pages = {
    selectButton: null,
    nextBtn: null,
    prevBtn: null,
    selectPacks: {
      checkboxes: [],
    },
    uniqueSpouseTraits: {
      checkboxes: []
    },
    aspirationsDone: {
      checkboxes: []
    },
    collectionsCompleted: {
      checkboxes: []
    },
    skillsMaxed: {
      checkboxes: []
    }
  }

  traits = {
    "Base Game": [
      "Active",
      "Ambitious",
      "Art Lover",
      "Bookworm",
      "Bro",
      "Cheerful",
      "Childish",
      "Clumsy",
      "Creative",
      "Erratic",
      "Evil",
      "Family-Oriented",
      "Foodie",
      "Geek",
      "Genius",
      "Gloomy",
      "Glutton",
      "Good",
      "Goofball",
      "Hates Children",
      "Hot-Headed",
      "Jealous",
      "Kleptomaniac",
      "Lazy",
      "Loner",
      "Loves Outdoors",
      "Loyal",
      "Mean",
      "Music Lover",
      "Neat",
      "Noncommittal",
      "Outgoing",
      "Perfectionist",
      "Practice Makes Perfect",
      "Romantic",
      "Self-Assured",
      "Slob",
      "Snob",
      "Vegetarian",
    ],
    "Cats & Dogs": [
      "Cat Lover",
      "Dog Lover"
    ],
    "City Living": [
      "Unflirty"
    ],
    "Cottage Living": [
      "Animal Enthusiast",
      "Lactose Intolerant"
    ],
    "Eco Lifestyle": [
      "Freegan",
      "Green Fiend",
      "Maker",
      "Recycle Disciple"
    ],
    "For Rent": [
      "Cringe",
      "Generous",
      "Nosy",
      "Wise"
    ],
    "Get Famous": [
      "Self-Absorbed"
    ],
    "Get Together": [
      "Dance Machine",
      "Insider"
    ],
    "High School Years": [
      "Overachiever",
      "Party Animal",
      "Socially Awkward"
    ],
    "Horse Ranch": [
      "Horse Lover"
    ],
    "Island Living": [
      "Child of the Islands",
      "Child of the Ocean"
    ],
    "Life & Death": [
      "Chased by Death",
      "Macabre",
      "Skeptical"
    ],
    "Lovestruck": [
      "Lovebug",
      "Romantically Reserved"
    ],
    "Outdoor Retreat": [
      "Squeamish"
    ],
    "Snowy Escape": [
      "Adventurous",
      "Proper"
    ],
    "Spa Day": [
      "High Maintenance"
    ],
    "StrangerVille": [
      "Paranoid"
    ]
  }

  aspirations = {
    "Base Game": [
      "Angling Ace",
      "Artistic Prodigy",
      "Rambunctious Scamp",
      "Social Butterfly",
      "Bestselling Author",
      "Bodybuilder",
      "Chief of Mischief",
      "Computer Whiz",
      "Fabulously Wealthy",
      "Freelance Botanist",
      "Friend of the World",
      "Joke Star",
      "Mansion Baron",
      "Master Chef",
      "Master Mixologist",
      "Musical Genius",
      "Neighborhood Confidante",
      "Nerd Brain",
      "Outdoor Extraordinaire",
      "Painter Extraordinaire",
      "Party Animal",
      "Public Enemy",
      "Renaissance Sim",
      "Serial Romantic",
      "Soulmate",
      "Successful Lineage",
      "The Curator",
      "Villainous Valentine",
      "Whiz Kid",
    ],
    "Bust the Dust": [
      "Fabulously Filthy",
      "Perfectly Pristine"
    ],
    "Cats & Dogs": [
      "Friend of the Animals"
    ],
    "City Living": [
      "City Native"
    ],
    "Cottage Living": [
      "Country Caretaker"
    ],
    "Crystal Creations": [
      "Crystal Crafter"
    ],
    "Discover University": [
      "Academic"
    ],
    "Eco Lifestyle": [
      "Eco Innovator",
      "Master Maker"
    ],
    "For Rent": [
      "Discerning Dweller",
      "Five-Star Property Owner",
      "Fount of Tomarani Knowledge",
      "Seeker of Secrets"
    ],
    "Get Famous": [
      "Master Actor/Actress",
      "World-Famous Celebrity"
    ],
    "Get Together": [
      "Leader of the Pack"
    ],
    "Growing Together": [
      "Creative Genius",
      "Mind and Body",
      "Playtime Captain",
      "Slumber Party Animal"
    ],
    "High School Years": [
      "Admired Icon",
      "Drama Llama",
      "Goal Oriented",
      "Live Fast"
    ],
    "Home Chef Hustle Stuff": [
      "Appliance Wiz",
      "Market Magnate"
    ],
    "Horse Ranch": [
      "Championship Rider",
      "Expert Nectar Maker"
    ],
    "Island Living": [
      "Beach Life"
    ],
    "Jungle Adventure": [
      "Archaeology Scholar",
      "Jungle Explorer"
    ],
    "Life & Death": [
      "Ghost Historian"
    ],
    "Lovestruck": [
      "Paragon Partner",
      "Romantic Explorer"
    ],
    "Nifty Knitting": [
      "Lord/Lady of the Knits"
    ],
    "Outdoor Retreat": [
      "Outdoor Enthusiast"
    ],
    "Parenthood": [
      "Super Parent"
    ],
    "Realm of Magic": [
      "Purveyor of Potions",
      "Spellcraft & Sorcery"
    ],
    "Snowy Escape": [
      "Mt. Komorebi Sightseer"
    ],
    "Spa Day": [
      "Inner Peace",
      "Self-Care Specialist",
      "Zen Guru"
    ],
    "Star Wars: Journey to Batuu": [
      "Enforcer of Order",
      "Galactic Privateer",
      "Hope vs. Order",
      "Paragon of Hope",
    ],
    "StrangerVille": [
      "StrangerVille Mystery"
    ],
    "Vampires": [
      "Good Vampire",
      "Master Vampire",
      "Vampire Family"
    ],
    "Werewolves": [
      "Emissary of the Collective",
      "Lone Wolf",
      "Werewolf Initiate",
      "Wildfang Renegade"
    ]
  }

  skills = {
    "Base Game": [
      "Charisma",
      "Comedy",
      "Communication (Toddler)",
      "Cooking",
      "Creativity (Child)",
      "Fishing",
      "Fitness",
      "Logic",
      "Gardening",
      "Gourmet Cooking",
      "Guitar",
      "Handiness",
      "Imagination (Toddler)",
      "Mental (Child)",
      "Mischief",
      "Mixology",
      "Motor (Child)",
      "Movement (Toddler)",
      "Painting",
      "Photography",
      "Piano",
      "Potty (Toddler)",
      "Programming",
      "Rocket Science",
      "Social (Child)",
      "Thinking (Toddler)",
      "Video Games",
      "Violin",
      "Writing",
    ],
    "Bowling Night Stuff": [
      "Bowling"
    ],
    "Cats & Dogs": [
      "Pet Training",
      "Veterinarian"
    ],
    "City Living": [
      "Singing"
    ],
    "Cottage Living": [
      "Cross-Stitch"
    ],
    "Discover University": [
      "Research & Debate",
      "Robotics"
    ],
    "Eco Living": [
      "Fabrication",
      "Juice Fizzing",
    ],
    "Get Famous": [
      "Acting",
      "Media Production"
    ],
    "Get to Work": [
      "Baking",
    ],
    "Get Together": [
      "Dancing",
      "DJ Mixing"
    ],
    "High School Years": [
      "Entrepreneur"
    ],
    "Horse Ranch": [
      "Nectar Making",
      "Riding",
    ],
    "Jungle Adventure": [
      "Archaeology",
      "Selvadoradian Culture",
    ],
    "Nifty Knitting": [
      "Knitting"
    ],
    "Outdoor Retreat": [
      "Herbalism",
    ],
    "Parenthood": [
      "Parenting"
    ],
    "Seasons": [
      "Flower Arranging"
    ],
    "Snowy Escape": [
      "Rock Climbing",
      "Skiing",
      "Snowboarding",
    ],
    "Spa Day": [
      "Wellness"
    ],
    "Vampires": [
      "Pipe Organ",
      "Vampire Lore"
    ],
  };

  packs = [
    "Bowling Night Stuff",
    "Bust the Dust",
    "Cats & Dogs",
    "City Living",
    "Cottage Living",
    "Crystal Creations",
    "Discover University",
    "Eco Lifestyle",
    "For Rent",
    "Get Famous",
    "Get to Work",
    "Get Together",
    "Growing Together",
    "High School Years",
    "Home Chef Hustle Stuff",
    "Horse Ranch",
    "Island Living",
    "Jungle Adventure",
    "Life & Death",
    "Lovestruck",
    "Nifty Knitting",
    "Outdoor Retreat",
    "Parenthood",
    "Seasons",
    "Snowy Escape",
    "Spa Day",
    "Realm of Magic",
    "Star Wars: Journey to Batuu",
    "StrangerVille",
    "Vampires",
    "Werewolves"
  ];
  shown.aspirations = aspirations["Base Game"];
  shown.skills = skills["Base Game"];
  shown.traits = traits["Base Game"];

  loadValues();

  traitsScreen = {
    checkboxStart: 75,
    checkboxOffset: 20,
    secondStart: 19,
    tabOffset: 205
  };

  let i = 0;
  let x = 10;

  traits["Base Game"].forEach(trait => {
    if (i == traitsScreen.secondStart) {
      i = 0;
      x += traitsScreen.tabOffset;
    }

    const checkbox = createCheckbox(" " + trait);
    if (selected.traits.indexOf(trait) != -1) {
      checkbox.checked(true);
    }
    checkbox.position(x, traitsScreen.checkboxStart + traitsScreen.checkboxOffset * i);
    checkbox.hide();
    pages.uniqueSpouseTraits.checkboxes[trait] = checkbox;
    i++;
  });

  let pI = 0;
  let pX = 10;

  let aI = 0;
  let aX = 10;

  let sI = 0;
  let sX = 10;

  aspirationsScreen = {
    checkboxStart: 75,
    checkboxOffset: 20,
    secondStart: 30,
    tabOffset: 265
  };

  aspirations["Base Game"].forEach(aspiration => {
    if (aI == aspirationsScreen.secondStart) {
      aI = 0;
      aX += aspirationsScreen.tabOffset;
    }

    const checkbox = createCheckbox(" " + aspiration);
    if (selected.aspirations.indexOf(aspiration) != -1) {
      checkbox.checked(true);
    }
    checkbox.position(aX, aspirationsScreen.checkboxStart + aspirationsScreen.checkboxOffset * aI);
    checkbox.hide();
    pages.aspirationsDone.checkboxes[aspiration] = checkbox;
    aI++;
  });

  skillsScreen = {
    checkboxStart: 75,
    checkboxOffset: 20,
    secondStart: 30,
    tabOffset: 225
  };

  skills["Base Game"].forEach(skill => {
    if (sI == skillsScreen.secondStart) {
      sI = 0;
      sX += skillsScreen.tabOffset;
    }

    const checkbox = createCheckbox(" " + skill);
    if (selected.skills.indexOf(skill) != -1) {
      checkbox.checked(true);
    }
    checkbox.position(sX, skillsScreen.checkboxStart + skillsScreen.checkboxOffset * sI);
    checkbox.hide();
    pages.skillsMaxed.checkboxes[skill] = checkbox;
    sI++;
  });

  packs.forEach(packName => {
    if (pI == packsScreen.secondStart) {
      pI = 0;
      pX += packsScreen.tabOffset;
    }
    const checkbox = createCheckbox(" " + packName);
    if (selected.packs.indexOf(packName) != -1) {
      checkbox.checked(true);
    }
    checkbox.position(pX, packsScreen.checkboxStart + packsScreen.checkboxOffset * pI);
    pages.selectPacks.checkboxes[packName] = checkbox;

    let USTvals = setupUST(packName, i, x);

    x = USTvals.x;
    i = USTvals.i;

    let ADvals = setupAD(packName, aI, aX);

    aX = ADvals.x;
    aI = ADvals.i;

    let SMvals = setupSM(packName, sI, sX);

    sX = SMvals.x;
    sI = SMvals.i;

    pI++;
  });

  page = "Select Packs";

  pages.selectButton = createButton("Select");
  pages.selectButton.position(300, 580);
  pages.selectButton.size(200, 50);
  pages.selectButton.mouseClicked(selectButtonClicked);

  pages.nextBtn = createButton(">");
  pages.nextBtn.position(725, 682);
  pages.nextBtn.size(45, 45);
  pages.nextBtn.mouseClicked(nextBtnClicked);
  pages.nextBtn.hide();

  pages.prevBtn = createButton("<");
  pages.prevBtn.position(25, 682);
  pages.prevBtn.size(45, 45);
  pages.prevBtn.mouseClicked(prevBtnClicked);
  pages.prevBtn.hide();

}

function saveValues() {
  console.log("saving bitch")

  packs.forEach(packName => {
    const packSkills = skills[packName];
    const packAspirations = aspirations[packName];
    const packTraits = traits[packName];

    if (packSkills != null) {
      packSkills.forEach(skillName => {
        const checkbox = pages.skillsMaxed.checkboxes[skillName];
        if (checkbox.checked() && selected.skills.indexOf(skillName) == -1) {
          selected.skills.push(skillName);
        }
      });
    }

    if (packAspirations != null) {
      packAspirations.forEach(aspirationName => {
        const checkbox = pages.aspirationsDone.checkboxes[aspirationName];
        if (checkbox.checked() && selected.aspirations.indexOf(aspirationName) == -1) {
          selected.aspirations.push(aspirationName);
        }
      });
    }

    if (packTraits != null) {
      packTraits.forEach(traitName => {
        const checkbox = pages.uniqueSpouseTraits.checkboxes[traitName];
        if (checkbox.checked() && selected.traits.indexOf(traitName) == -1) {
          selected.traits.push(traitName);
        }
      });
    }
  });

  traits["Base Game"].forEach(traitName => {
    const checkbox = pages.uniqueSpouseTraits.checkboxes[traitName];
    if (checkbox.checked() && selected.traits.indexOf(traitName) == -1) {
      selected.traits.push(traitName);
    }
  });

  skills["Base Game"].forEach(skill => {
    const checkbox = pages.skillsMaxed.checkboxes[skill];
    if (checkbox.checked() && selected.skills.indexOf(skill) == -1) {
      selected.traits.push(skill);
    }
  });

  aspirations["Base Game"].forEach(aspiration => {
    const checkbox = pages.aspirationsDone.checkboxes[aspiration];
    if (checkbox.checked() && selected.aspirations.indexOf(aspiration) == -1) {
      selected.aspirations.push(aspiration);
    }
  });

  storeItem("legacyCollectingData", selected);
}

function loadValues() {
  let obj = getItem("legacyCollectingData");

  console.log(obj)

  if (obj != null) {
    selected = obj;
  }
}

window.addEventListener("beforeunload", function () {
  saveValues();
})

function selectButtonClicked() {
  selected.packs = [];
  shown.traits = traits["Base Game"];

  packs.forEach(packName => {
    const checkbox = pages.selectPacks.checkboxes[packName];
    if (checkbox.checked()) {
      selected.packs.push(packName);

      let packAspirations = aspirations[packName];
      let packSkills = skills[packName];
      let packTraits = traits[packName];

      if (packAspirations != null) {
        shown.aspirations = sort(shown.aspirations.concat(packAspirations));
      }
      if (packSkills != null) {
        shown.skills = sort(shown.skills.concat(packSkills));
      }
      console.log(packTraits);
      if (packTraits != null) {
        shown.traits = sort(shown.traits.concat(packTraits));
      }
    }
  });

  if (page == "Select Packs") {
    let i = 0;
    let x = 10;

    shown.traits.forEach(trait => {
      if (i == traitsScreen.secondStart) {
        i = 0;
        x += traitsScreen.tabOffset;
      }
      const checkbox = pages.uniqueSpouseTraits.checkboxes[trait];
      checkbox.position(x, traitsScreen.checkboxStart + traitsScreen.checkboxOffset * i);
      i++;
    });

    i = 0;
    x = 10;

    shown.aspirations.forEach(aspiration => {
      if (i == aspirationsScreen.secondStart) {
        i = 0;
        x += aspirationsScreen.tabOffset;
      }
      const checkbox = pages.aspirationsDone.checkboxes[aspiration];
      checkbox.position(x, aspirationsScreen.checkboxStart + aspirationsScreen.checkboxOffset * i);
      i++;
    });

    i = 0;
    x = 10;

    shown.skills.forEach(skill => {
      if (i == skillsScreen.secondStart) {
        i = 0;
        x += skillsScreen.tabOffset;
      }
      const checkbox = pages.skillsMaxed.checkboxes[skill];
      checkbox.position(x, skillsScreen.checkboxStart + skillsScreen.checkboxOffset * i);
      i++;
    });


    transition("Unique Spouse Traits");
  } else {
    transition("Select Packs");
  }
}

function nextBtnClicked() {
  if (page == "Unique Spouse Traits") {
    transition("Aspirations Done");
  } else if (page == "Aspirations Done") {
    transition("Skills Maxed");
  } else {
    transition("Unique Spouse Traits");
  }
}

function prevBtnClicked() {
  if (page == "Unique Spouse Traits") {
    transition("Skills Maxed");
  } else if (page == "Aspirations Done") {
    transition("Unique Spouse Traits");
  } else if (page == "Skills Maxed") {
    transition("Aspirations Done");
  }
}

function transition(newPage) {
  oldPage = page;

  if (oldPage == "Select Packs") {
    packs.forEach(packName => {
      pages.selectPacks.checkboxes[packName].hide();
    });
    pages.selectButton.size(100, 30);
    pages.selectButton.position(665, 10);
    pages.selectButton.html("Select Packs");

    pages.nextBtn.show();
    pages.prevBtn.show();

  }
  if (newPage == "Select Packs") {
    packs.forEach(packName => {
      pages.selectPacks.checkboxes[packName].show();
    });
    pages.selectButton.size(200, 50);
    pages.selectButton.position(300, 580);
    pages.selectButton.html("Select");

    pages.nextBtn.hide();
    pages.prevBtn.hide();
  }

  if (oldPage == "Unique Spouse Traits") {
    shown.traits.forEach(trait => {
      pages.uniqueSpouseTraits.checkboxes[trait].hide();
    });

  }
  if (newPage == "Unique Spouse Traits") {
    shown.traits.forEach(trait => {
      pages.uniqueSpouseTraits.checkboxes[trait].show();
    });
  }

  if (oldPage == "Aspirations Done") {
    shown.aspirations.forEach(aspiration => {
      pages.aspirationsDone.checkboxes[aspiration].hide();
    });

  }
  if (newPage == "Aspirations Done") {
    shown.aspirations.forEach(aspiration => {
      pages.aspirationsDone.checkboxes[aspiration].show();
    });
  }

  if (oldPage == "Skills Maxed") {
    shown.skills.forEach(skill => {
      pages.skillsMaxed.checkboxes[skill].hide();
    });

  }
  if (newPage == "Skills Maxed") {
    shown.skills.forEach(skill => {
      pages.skillsMaxed.checkboxes[skill].show();
    });
  }

  page = newPage;
}

function draw() {
  background(220);
  title(page, 15, 35);
  line(15, 50, 780, 50);
}
