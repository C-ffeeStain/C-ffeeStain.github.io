let inputGenerations;
let checkFamilyTenthPoint;

let inputMemorials;
let checkCreativeTenthPoint;

let inputHouseholdWorth;
let checkFortuneTenthPoint;

let inputUniqueSpouseTraits;
let checkLoveTenthPoint;

let inputMaxedSkills;
let checkKnowledgeTenthPoint;

let inputAspirationsDone;
let checkAthleticTenthPoint;

let checkAllDeathTypes;
let inputCollectionsCompleted;
let checkCareerTracks;
let checkBranchCareerTracks;
let checkEmotionalPaintingTypes;
let checkConsumableAspirationRewards;

let checkFridgeStove;
let checkBakedAlaska;
let checkMaxedCookingAndCo;
let checkBothFoodAsposSingleSim;
let checkFatSim;
let checkFamilyDinner;
let checkTopOfFoodCareerBranches;
let checkFreshIngrMeal;
let checkMaxQMDParty;
let checkMaxQDorFDate;

let inputMedalPoints;
let checkPopularityTenthPoint;

let inputYouthPotions;

let checkAllCharTraits;
let checkSingleSimAllCharTraits;

let checkFiveTradHoliday;
let checkGoldCelebration;
let checkActiveMembersHoliday;

let selectChosenUniversity;

let selectHandicap;

let inputPoPenalty;
let inputPlPenalty;
let inputSSPenalty;

let btnSave;
let btnLoad;

const clamp = (min, val, max) => Math.min(Math.max(val, min), max);

function setup() {
  createCanvas(850, 1150);

  textFont("Monospace");
  textSize(25);

  // Family

  inputGenerations = createInput("0", "number");
  inputGenerations.position(20, 45);
  inputGenerations.size(35);

  checkFamilyTenthPoint = createCheckbox(" 10 kids in 1 generation");
  checkFamilyTenthPoint.position(20, 75);

  // Creative

  inputMemorials = createInput("0", "number");
  inputMemorials.position(20, 135);
  inputMemorials.size(35);

  checkCreativeTenthPoint = createCheckbox(" 2/3 creative aspirations done by 1 Sim");
  checkCreativeTenthPoint.position(20, 165)

  inputHouseholdWorth = createInput("0", "number");
  inputHouseholdWorth.position(20, 225);
  inputHouseholdWorth.size(90);

  checkFortuneTenthPoint = createCheckbox(" ALL business perks");
  checkFortuneTenthPoint.position(20, 255);

  // Love

  inputUniqueSpouseTraits = createInput("0", "number");
  inputUniqueSpouseTraits.position(20, 315);
  inputUniqueSpouseTraits.size(35);

  checkLoveTenthPoint = createCheckbox("Bear the 10th heir")
  checkLoveTenthPoint.position(20, 355);

  // Knowledge

  inputMaxedSkills = createInput("0", "number");
  inputMaxedSkills.position(20, 435);
  inputMaxedSkills.size(35);

  checkKnowledgeTenthPoint = createCheckbox(" ALL skills maxed");
  checkKnowledgeTenthPoint.position(20, 465);

  // Athletic

  inputAspirationsDone = createInput("0", "number");
  inputAspirationsDone.position(20, 530);
  inputAspirationsDone.size(35);

  checkAthleticTenthPoint = createCheckbox(" ALL aspirations completed");
  checkAthleticTenthPoint.position(20, 560);

  // Popularity

  inputMedalPoints = createInput("0", "number");
  inputMedalPoints.position(20, 625);
  inputMedalPoints.size(35);

  checkPopularityTenthPoint = createCheckbox("Have a single Sim get a gold medal in all the<br>different types of parties AND a gold medal on<br>a date");
  checkPopularityTenthPoint.position(20, 655);

  // Deviance

  inputYouthPotions = createInput("0", "number");
  inputYouthPotions.position(20, 750)
  inputYouthPotions.size(35)

  // Parenthood

  checkAllCharTraits = createCheckbox("Get ALL upbringing traits (both positive &<br>negative) at some point in the family");
  checkAllCharTraits.position(15, 815);

  checkSingleSimAllCharTraits = createCheckbox("Have a single Sim grow up with all 5 traits<br>manifesting (they don't all have to be positive)");
  checkSingleSimAllCharTraits.position(15, 860);

  // Food

  checkFridgeStove = createCheckbox("Buy and fully upgrade most expensive fridge &<br>stove");
  checkFridgeStove.position(435, 40);

  checkBakedAlaska = createCheckbox("Make a highest quality version of Baked<br>Alaska (or equivalent dish)");
  checkBakedAlaska.position(435, 85);

  checkMaxedCookingAndCo = createCheckbox("Max cooking, baking (Get to Work), gourmet<br>cooking, and mixology skills");
  checkMaxedCookingAndCo.position(435, 130);

  checkBothFoodAsposSingleSim = createCheckbox("Complete both food aspirations on a single Sim");
  checkBothFoodAsposSingleSim.position(435, 175);

  checkFatSim = createCheckbox("Have a Sim get fat from your family's cooking");
  checkFatSim.position(435, 205);

  checkFamilyDinner = createCheckbox("Have 6+ Sims eating at the same time");
  checkFamilyDinner.position(435, 235);

  checkTopOfFoodCareerBranches = createCheckbox("Reach the top of both food career branches");
  checkTopOfFoodCareerBranches.position(435, 265);

  checkFreshIngrMeal = createCheckbox("Cook a meal with 2+ fresh ingredients that are<br>of the highest quality");
  checkFreshIngrMeal.position(435, 295);

  checkMaxQMDParty = createCheckbox("Create a max-quality meal/drink for a Sim<br>during a single date");
  checkMaxQMDParty.position(435, 345);

  checkMaxQDorFDate = createCheckbox("Create and serve a max-quality party-sized<br>meal and a max-quality drink during a single party");
  checkMaxQDorFDate.position(435, 395);

  // Nature

  checkAllDeathTypes = createCheckbox("Have all death types occur on the legacy lot")
  checkAllDeathTypes.position(430, 470);

  inputCollectionsCompleted = createInput("0", "number");
  inputCollectionsCompleted.position(430, 500);
  inputCollectionsCompleted.size(35);

  checkCareerTracks = createCheckbox("Reach the top level of each career track");
  checkCareerTracks.position(430, 530);

  checkBranchCareerTracks = createCheckbox("Reach the top level of both branches of<br>every career track");
  checkBranchCareerTracks.position(430, 560);

  checkEmotionalPaintingTypes = createCheckbox("Collect every single emotional painting type");
  checkEmotionalPaintingTypes.position(430, 610);

  checkConsumableAspirationRewards = createCheckbox("Have every consumable aspiration reward on the<br>lot");
  checkConsumableAspirationRewards.position(430, 640);

  // Seasons

  checkFiveTradHoliday = createCheckbox("Have 1 of the 2 holidays reach 5 traditions");
  checkFiveTradHoliday.position(15, 940);

  checkGoldCelebration = createCheckbox("Have an heir reach gold level celebration<br>status for a 5-tradition family holiday.");
  checkGoldCelebration.position(15, 965);

  checkActiveMembersHoliday = createCheckbox("Have all active members of your household<br>reach gold level celebration status for a family<br>holiday");
  checkActiveMembersHoliday.position(15, 1007);

  // Discover University

  selectChosenUniversity = createSelect(false);
  selectChosenUniversity.option("Either");
  selectChosenUniversity.option("Foxbury Institute");
  selectChosenUniversity.option("University of Britechester");
  selectChosenUniversity.position(450, 720);

  // Handicaps

  selectHandicap = createSelect(false);
  selectHandicap.option("Normal");
  selectHandicap.option("Extreme Start");
  selectHandicap.option("Ultra Extreme Start")
  selectHandicap.position(450, 810)

  // Penalties

  inputPoPenalty = createInput("0", "number");
  inputPoPenalty.position(435, 900);
  inputPoPenalty.size(35);

  inputPlPenalty = createInput("0", "number");
  inputPlPenalty.position(435, 935);
  inputPlPenalty.size(35);

  inputSSPenalty = createInput("0", "number");
  inputSSPenalty.position(435, 970);
  inputSSPenalty.size(35);

  btnSave = createButton("Save");
  btnSave.mouseClicked(saveValues);

  btnLoad = createButton("Load from Device");
  btnLoad.mouseClicked(loadValues);

  loadValues();
}

function saveValues() {
  let anActualObj = {
    "inputGenerations": inputGenerations.value(),
    "checkFamilyTenthPoint": checkFamilyTenthPoint.checked(),
    "inputMemorials": inputMemorials.value(),
    "checkCreativeTenthPoint": checkCreativeTenthPoint.checked(),
    "inputHouseholdWorth": inputHouseholdWorth.value(),
    "checkFortuneTenthPoint": checkFortuneTenthPoint.checked(),
    "inputUniqueSpouseTraits": inputUniqueSpouseTraits.value(),
    "checkLoveTenthPoint": checkLoveTenthPoint.checked(),
    "inputMaxedSkills": inputMaxedSkills.value(),
    "checkKnowledgeTenthPoint": checkKnowledgeTenthPoint.checked(),
    "inputAspirationsDone": inputAspirationsDone.value(),
    "checkAthleticTenthPoint": checkAthleticTenthPoint.checked(),
    "checkAllDeathTypes": checkAllDeathTypes.checked(),
    "inputCollectionsCompleted": inputCollectionsCompleted.value(),
    "checkCareerTracks": checkCareerTracks.checked(),
    "checkBranchCareerTracks": checkBranchCareerTracks.checked(),
    "checkEmotionalPaintingTypes": checkEmotionalPaintingTypes.checked(),
    "checkConsumableAspirationRewards": checkConsumableAspirationRewards.checked(),
    "checkFridgeStove": checkFridgeStove.checked(),
    "checkBakedAlaska": checkBakedAlaska.checked(),
    "checkMaxedCookingAndCo": checkMaxedCookingAndCo.checked(),
    "checkBothFoodAsposSingleSim": checkBothFoodAsposSingleSim.checked(),
    "checkFatSim": checkFatSim.checked(),
    "checkFamilyDinner": checkFamilyDinner.checked(),
    "checkTopOfFoodCareerBranches": checkTopOfFoodCareerBranches.checked(),
    "checkFreshIngrMeal": checkFreshIngrMeal.checked(),
    "checkMaxQMDParty": checkMaxQMDParty.checked(),
    "checkMaxQDorFDate": checkMaxQDorFDate.checked(),
    "inputMedalPoints": inputMedalPoints.value(),
    "checkPopularityTenthPoint": checkPopularityTenthPoint.checked(),
    "inputYouthPotions": inputYouthPotions.value(),
    "checkAllCharTraits": checkAllCharTraits.checked(),
    "checkSingleSimAllCharTraits": checkSingleSimAllCharTraits.checked(),
    "checkFiveTradHoliday": checkFiveTradHoliday.checked(),
    "checkGoldCelebration": checkGoldCelebration.checked(),
    "checkActiveMembersHoliday": checkActiveMembersHoliday.checked(),
    "selectChosenUniversity": selectChosenUniversity.selected(),
    "selectHandicap": selectHandicap.selected(),
    "inputPoPenalty": inputPoPenalty.value(),
    "inputPlPenalty": inputPlPenalty.value(),
    "inputSSPenalty": inputSSPenalty.value()
  }
  storeItem("legacyData", anActualObj);
}

function loadValues() {
  let data = getItem("legacyData");

  inputGenerations.value(data.inputGenerations);
  checkFamilyTenthPoint.checked(data.checkFamilyTenthPoint);
  inputMemorials.value(data.inputMemorials);
  checkCreativeTenthPoint.checked(data.checkCreativeTenthPoint);
  inputHouseholdWorth.value(data.inputHouseholdWorth);
  checkFortuneTenthPoint.checked(data.checkFortuneTenthPoint);
  inputUniqueSpouseTraits.value(data.inputUniqueSpouseTraits);
  checkLoveTenthPoint.checked(data.checkLoveTenthPoint);
  inputMaxedSkills.value(data.inputMaxedSkills);
  checkKnowledgeTenthPoint.checked(data.checkKnowledgeTenthPoint);
  inputAspirationsDone.value(data.inputAspirationsDone);
  checkAthleticTenthPoint.checked(data.checkAthleticTenthPoint);
  checkAllDeathTypes.checked(data.checkAllDeathTypes);
  inputCollectionsCompleted.value(data.inputCollectionsCompleted);
  checkCareerTracks.checked(data.checkCareerTracks);
  checkBranchCareerTracks.checked(data.checkBranchCareerTracks);
  checkEmotionalPaintingTypes.checked(data.checkEmotionalPaintingTypes);
  checkConsumableAspirationRewards.checked(data.checkConsumableAspirationRewards);
  checkFridgeStove.checked(data.checkFridgeStove);
  checkBakedAlaska.checked(data.checkBakedAlaska);
  checkMaxedCookingAndCo.checked(data.checkMaxedCookingAndCo);
  checkBothFoodAsposSingleSim.checked(data.checkBothFoodAsposSingleSim);
  checkFatSim.checked(data.checkFatSim);
  checkFamilyDinner.checked(data.checkFamilyDinner);
  checkTopOfFoodCareerBranches.checked(data.checkTopOfFoodCareerBranches);
  checkFreshIngrMeal.checked(data.checkFreshIngrMeal);
  checkMaxQMDParty.checked(data.checkMaxQMDParty);
  checkMaxQDorFDate.checked(data.checkMaxQDorFDate);
  inputMedalPoints.value(data.inputMedalPoints);
  checkPopularityTenthPoint.checked(data.checkPopularityTenthPoint);
  inputYouthPotions.value(data.inputYouthPotions);
  checkAllCharTraits.checked(data.checkAllCharTraits);
  checkSingleSimAllCharTraits.checked(data.checkSingleSimAllCharTraits);
  checkFiveTradHoliday.checked(data.checkFiveTradHoliday);
  checkGoldCelebration.checked(data.checkGoldCelebration);
  checkActiveMembersHoliday.checked(data.checkActiveMembersHoliday);
  selectChosenUniversity.selected(data.selectChosenUniversity);
  selectHandicap.selected(data.selectHandicap);
  inputPoPenalty.value(data.inputPoPenalty);
  inputPlPenalty.value(data.inputPlPenalty);
  inputSSPenalty.value(data.inputSSPenalty);
}

window.addEventListener("beforeunload", function(event) {
  saveValues();
})

function calculateFamilyPoints() {
  let familyScore = clamp(0, parseInt(inputGenerations.value(), 10), 9);
  if (checkFamilyTenthPoint.checked()) {
    familyScore++;
  }
  return familyScore;
}

function calculateCreativePoints() {
  let creativeScore = parseInt(inputMemorials.value(), 10);
  if (checkCreativeTenthPoint.checked()) {
    creativeScore++;
  }
  return clamp(0, creativeScore, 10);
}

function calculateFortunePoints() {
  let fortunePoints = 0;
  const householdWorth = parseInt(inputHouseholdWorth.value(), 10);
  const milestones = [75000, 120000, 200000, 320000, 510000, 830000, 1300000, 2100000, 3500000, 5700000];
  for (let i = 0; i < milestones.length; i++) {
    if (householdWorth >= milestones[i]) {
      fortunePoints++;
    }
  }
  if (checkFortuneTenthPoint.checked()) {
    fortunePoints++;
  }
  return clamp(0, fortunePoints, 10);
}

function calculateLovePoints() {
  let lovePoints = clamp(0, Math.floor(parseInt(inputUniqueSpouseTraits.value()) / 3), 9);
  if (checkLoveTenthPoint.checked()) {
    lovePoints++;
  }
  return lovePoints;
}

function calculateKnowledgePoints() {
  let knowledgePoints = clamp(0, Math.floor(parseInt(inputMaxedSkills.value()) / 3), 9);
  if (checkKnowledgeTenthPoint.checked()) {
    knowledgePoints++;
  }
  return knowledgePoints;
}

function calculateAthleticPoints() {
  let athleticScore = clamp(0, Math.floor(parseInt(inputAspirationsDone.value(), 10) / 4), 9);
  if (checkAthleticTenthPoint.checked()) {
    athleticScore++;
  }
  return athleticScore;
}

function calculatePopularityPoints() {
  let popularityScore = clamp(
    0,
    Math.floor(parseInt(inputMedalPoints.value(), 10) / 9),
    9
  );

  if (checkPopularityTenthPoint.checked()) {
    popularityScore++;
  }

  return popularityScore;
}

function calculateDeviancePoints() {
  let devianceScore = Math.floor(parseInt(inputYouthPotions.value(), 10) / 2);

  return clamp(0, devianceScore, 10);
}

function calculateParenthoodPoints() {
  let parenthoodScore = 0;

  if (checkAllCharTraits.checked()) {
    parenthoodScore++;
  }
  if (checkSingleSimAllCharTraits.checked()) {
    parenthoodScore++;
  }

  return parenthoodScore;
}

function calculateSeasonsPoints() {
  let seasonsScore = 0;
  const seasonsCheckboxes = [
    checkFiveTradHoliday,
    checkActiveMembersHoliday,
    checkGoldCelebration
  ];

  seasonsCheckboxes.forEach(checkbox => {
    if (checkbox.checked()) {
      seasonsScore++;
    }
  });

  return seasonsScore;
}

function calculateFoodPoints() {
  let foodScore = 0;
  const foodPossiblePoints = [
    checkFridgeStove,
    checkBakedAlaska,
    checkMaxedCookingAndCo,
    checkBothFoodAsposSingleSim,
    checkFatSim,
    checkFamilyDinner,
    checkTopOfFoodCareerBranches,
    checkFreshIngrMeal,
    checkMaxQDorFDate,
    checkMaxQMDParty
  ];

  foodPossiblePoints.forEach(possiblePoint => {
    if (possiblePoint.checked()) {
      foodScore++;
    }
  });

  return foodScore;
}

function calculateNaturePoints() {
  let natureScore = 0;
  const naturePossiblePoints = [
    checkAllDeathTypes,
    checkCareerTracks,
    checkBranchCareerTracks,
    checkEmotionalPaintingTypes,
    checkConsumableAspirationRewards
  ];
  naturePossiblePoints.forEach(possiblePoint => {
    if (possiblePoint.checked()) {
      natureScore++;
    }
  });

  const collectionMilestones = [1, 2, 5, 9, 13];
  const collectionsCompleted = parseInt(inputCollectionsCompleted.value(), 10);
  collectionMilestones.forEach(milestone => {
    if (collectionsCompleted >= milestone) {
      natureScore++;
    }
  });

  return natureScore;
}

function calculateUniversityPoints() {
  let uniScore = selectChosenUniversity.selected() != "Either" ? 1 : 0;

  return uniScore;
}

function calculateHandicapPoints() {
  let handicapBonus;

  switch (selectHandicap.selected()) {
    case "Extreme Start":
      handicapBonus = 1;
      break;
    case "Ultra Extreme Start":
      handicapBonus = 2;
      break;
    default:
      handicapBonus = 0;
      break;
  }

  return handicapBonus;
}

function calculatePenaltyPoints() {
  let penalty = -(
    parseInt(inputPoPenalty.value(), 10)
    + parseInt(inputPlPenalty.value(), 10)
    + parseInt(inputSSPenalty.value(), 10)
  );

  return Math.min(penalty, 0);
}

function title(content, x, y) {
  textStyle(BOLD);
  textSize(25);

  return text(content, x, y);
}

function label(content, x, y) {
  textStyle(NORMAL);
  textSize(15);

  return text(content, x, y);
}

function draw() {
  background(220);
  textAlign(LEFT);

  title("Family", 10, 30);
  label("Young Adult Heirs", 72, 61);

  title("Creative", 10, 120);
  label("Generational Memorials", 77, 151);

  title("Fortune", 10, 210);
  label("Household Worth", 125, 241);

  title("Love", 10, 300);
  label("Unique Spouse Traits", 70, 331);

  title("Knowledge", 10, 420);
  label("Skills Maxed", 70, 451);

  title("Athletic", 10, 515);
  label("Aspirations Done", 70, 546);

  title("Popularity", 10, 610);
  label("Medal Points", 70, 640);

  title("Deviance", 10, 735);
  label("Potions of Youth", 70, 765);

  title("Parenthood", 10, 810);

  title("Seasons", 10, 930);

  line(420, 10, 420, 1070);

  title("Food", 430, 30);

  title("Nature", 430, 460);
  label("Collections Completed", 480, 515);

  title("Discover University", 430, 705);
  label("Legacy University", 455, 765);

  title("Handicap", 430, 795);
  label("Start Option", 455, 855);

  title("Penalties", 430, 885);
  label("Power Shut-Offs", 485, 915);
  label("Plumbing Shut-Offs", 485, 950);
  label("Children Taken Away", 485, 985);

  line(365, 1070, 365, 1220);
  line(485, 1070, 485, 1270);
  line(365, 1070, 485, 1070);

  textAlign(CENTER);
  label("Total Points", 425, 1095);
  title(clamp(0,
    calculateFamilyPoints() + calculateCreativePoints() + calculateFortunePoints()
    + calculateLovePoints() + calculateKnowledgePoints() + calculateAthleticPoints()
    + calculatePopularityPoints() + calculateDeviancePoints() + calculateParenthoodPoints()
    + calculateSeasonsPoints() + calculateFoodPoints() + calculateNaturePoints()
    + calculateUniversityPoints() + calculateHandicapPoints() + calculatePenaltyPoints(),
    108), 425, 1135);

}
