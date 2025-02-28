function buttonAddUSTClicked() {
    let trait = inputUniqueSpouseTraits.value();
    if (trait == "") {
      alert("You have to input the name of a trait first!");
      return;
    }
    if (uniqueSpouseTraits.indexOf(trait) != -1) {
      alert("That trait is already listed!");
      return;
    }
    alert(`Added ${trait} to the list of unique traits.`)
    uniqueSpouseTraits.push(trait);
  }
  
  function buttonRemUSTClicked() {
    let trait = inputUniqueSpouseTraits.value();
    if (trait == "") {
      alert("You have to input the name of a trait first!");
      return;
    }
  
    if (uniqueSpouseTraits.indexOf(trait) == -1) {
      alert("That trait is not listed!");
      return;
    }
  
    alert(`Removed ${trait} from the list of unique traits.`);
    uniqueSpouseTraits.splice(uniqueSpouseTraits.indexOf(trait), 1);
  }
  
  function buttonSeeUSTClicked() {
    if (uniqueSpouseTraits.length == 0) {
      alert("No unique traits. Add some and try again.");
    }
    alert("Unique Traits:\n" + uniqueSpouseTraits.join("\n"));
  }
  
  function buttonAddMSClicked() {
    let skill = inputMaxedSkills.value();
    if (skill == "") {
      alert("You have to input the name of a skill first!");
      return;
    }
    if (maxedSkills.indexOf(skill) != -1) {
      alert("That skill is already listed!");
      return;
    }
    alert(`Added ${skill} to the list of maxed skills.`)
    maxedSkills.push(skill);
  }
  
  function buttonRemMSClicked() {
    let skill = inputMaxedSkills.value();
    if (skill == "") {
      alert("You have to input the name of a skill first!");
      return;
    }
  
    if (maxedSkills.indexOf(skill) == -1) {
      alert("That skill is not listed!");
      return;
    }
  
    alert(`Removed ${skill} from the list of maxed skills.`);
    maxedSkills.splice(maxedSkills.indexOf(skill), 1);
  }
  
  function buttonSeeMSClicked() {
    if (maxedSkills.length == 0) {
      alert("No maxed skills. Add some and try again.");
    }
    alert("Maxed Skills:\n" + maxedSkills.join("\n"));
  }
  
  function buttonAddADClicked() {
    let aspiration = inputAspirationsDone.value();
    if (aspiration == "") {
      alert("You have to input the name of an aspiration first!");
      return;
    }
    if (aspirationsDone.indexOf(aspiration) != -1) {
      alert("That aspiration is already listed! Use 'Remove' to get rid of it.");
      return;
    }
    alert(`Added ${aspiration} to the list of maxed skills, use Remove with the same name to remove it.`)
    aspirationsDone.push(aspiration);
  }
  
  function buttonRemADClicked() {
    let aspiration = inputAspirationsDone.value();
    if (aspiration == "") {
      alert("You have to input the name of a aspiration first!");
      return;
    }
  
    if (aspirationsDone.indexOf(aspiration) == -1) {
      alert("That aspiration is not listed!");
      return;
    }
  
    alert(`Removed ${aspiration} from the list of finished aspirations.`);
    aspirationsDone.splice(aspirationsDone.indexOf(aspiration), 1);
  }
  
  function buttonSeeADClicked() {
    if (aspirationsDone.length == 0) {
      alert("No done aspirations. Add some and try again.");
    }
    alert("done aspirations:\n" + aspirationsDone.join("\n"));
  }