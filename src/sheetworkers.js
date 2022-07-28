/* const { on } = require("events"); */

/* const { on } = require("events"); */

/* global data, getTranslationByKey, getAttrs, setAttrs, on, getSectionIDs, generateRowID, removeRepeatingRow */
const sheetVersion = "1.0";
const sheetName = "Fortunua RPG";
const getTranslation = (key) => (getTranslationByKey(key) || "NO_TRANSLATION_FOUND");

const playbooks = ["agente", "auriga", "decurion", "dux", "episcopus", "evocatus", "senator"];
playbooks.forEach(button=> { on(`clicked:${button}`, function() {
    setAttrs({ playbook: button});
  });
});

const tablist = ["tabcharacter","tabadvancement","tabnotes", "tabplaybook"]; 
tablist.forEach(button => { on(`clicked:${button}`, function() { 
  setAttrs({ tab: button }); 
  }); 
});

const defaultbondlist = ["slaves1", "slaves2", "slaves3", "slaves4", "urbanpoor1", "urbanpoor2", "urbanpoor3", "urbanpoor4", "freeborn1", "freeborn2", "freeborn3", "freeborn4", "legio1", "legio2", "legio3", "legio4", "notarii1", "notarii2", "notarii3", "notarii4", "curiales1", "curiales2", "curiales3", "curiales4", "senator1", "senator2", "senator3", "senator4", "virillustris1", "virillustris2", "virillustris3", "virillustris4", "imperial1", "imperial2", "imperial3", "imperial4" ];
on('sheet:opened', function () {
  getAttrs(defaultbondlist, function(values) {
    let slaves1 = parseInt(values.slaves1)||0;
    let slaves2 = parseInt(values.slaves2)||0;
    let slaves3 = parseInt(values.slaves3)||0;
    let slaves4 = parseInt(values.slaves4)||0;
    let urbanpoor1 = parseInt(values.urbanpoor1)||0;
    let urbanpoor2 = parseInt(values.urbanpoor2)||0;
    let urbanpoor3 = parseInt(values.urbanpoor3)||0;
    let urbanpoor4 = parseInt(values.urbanpoor4)||0;
    let freeborn1 = parseInt(values.freeborn1)||0;
    let freeborn2 = parseInt(values.freeborn2)||0;
    let freeborn3 = parseInt(values.freeborn3)||0;
    let freeborn4 = parseInt(values.freeborn4)||0;
    let legio1 = parseInt(values.legio1)||0;
    let legio2 = parseInt(values.legio2)||0;
    let legio3 = parseInt(values.legio3)||0;
    let legio4 = parseInt(values.legio4)||0;
    let notarii1 = parseInt(values.notarii1)||0;
    let notarii2 = parseInt(values.notarii2)||0;
    let notarii3 = parseInt(values.notarii3)||0;
    let notarii4 = parseInt(values.notarii4)||0;
    let curiales1 = parseInt(values.curiales1)||0;
    let curiales2 = parseInt(values.curiales2)||0;
    let curiales3 = parseInt(values.curiales3)||0;
    let curiales4 = parseInt(values.curiales4)||0;
    let senator1 = parseInt(values.senator1)||0;
    let senator2 = parseInt(values.senator2)||0;
    let senator3 = parseInt(values.senator3)||0;
    let senator4 = parseInt(values.senator4)||0;
    let virillustris1 = parseInt(values.virillustris1)||0;
    let virillustris2 = parseInt(values.virillustris2)||0;
    let virillustris3 = parseInt(values.virillustris3)||0;
    let virillustris4 = parseInt(values.virillustris4)||0;
    let imperial1 = parseInt(values.imperial1)||0;
    let imperial2 = parseInt(values.imperial2)||0;
    let imperial3 = parseInt(values.imperial3)||0;
    let imperial4 = parseInt(values.imperial4)||0;
    setAttrs({
      "slaves1": slaves1,
      "slaves2": slaves2,
      "slaves3": slaves3,
      "slaves4": slaves4,
      "urbanpoor1": urbanpoor1,
      "urbanpoor2": urbanpoor2,
      "urbanpoor3": urbanpoor3,
      "urbanpoor4": urbanpoor4,
      "freeborn1": freeborn1,
      "freeborn2": freeborn2,
      "freeborn3": freeborn3,
      "freeborn4": freeborn4,
      "legio1": legio1,
      "legio2": legio2,
      "legio3": legio3,
      "legio4": legio4,
      "notarii1": notarii1,
      "notarii2": notarii2,
      "notarii3": notarii3,
      "notarii4": notarii4,
      "curiales1": curiales1,
      "curiales2": curiales2,
      "curiales3": curiales3,
      "curiales4": curiales4,
      "senator1": senator1,
      "senator2": senator2,
      "senator3": senator3,
      "senator4": senator4,
      "virillustris1": virillustris1,
      "virillustris2": virillustris2,
      "virillustris3": virillustris3,
      "virillustris4": virillustris4,
      "imperial1": imperial1,
      "imperial2": imperial2,
      "imperial3": imperial3,
      "imperial4": imperial4
    });
  });
});

const defaultattributelist = ["fortitude1", "fortitude2", "fortitude3", "fortitude4", "perceptio1", "perceptio2", "perceptio3", "perceptio4", "kharisma1", "kharisma2", "kharisma3", "kharisma4", "civitas1", "civitas2", "civitas3", "civitas4", "religiochristian1", "religiochristian2", "religiochristian3", "religiochristian4", "religiopagan1", "religiopagan2", "religiopagan3", "religiopagan4"];
on('sheet:opened', function(){
  console.log("into open");
  getAttrs(defaultattributelist, function(values) {
    console.log("into get");
    console.log("fortitude1 = " + values.fortitude1 + "before");
    let fortitude1 = parseInt(values.fortitude1)||0;
    console.log("fortitude1 = " + fortitude1 + "after");
    let fortitude2 = parseInt(values.fortitude2)||0;
    let fortitude3 = parseInt(values.fortitude3)||0;
    let fortitude4 = parseInt(values.fortitude4)||0;
    let perceptio1 = parseInt(values.perceptio1)||0;
    let perceptio2 = parseInt(values.perceptio2)||0;
    let perceptio3 = parseInt(values.perceptio3)||0;
    let perceptio4 = parseInt(values.perceptio4)||0;
    let kharisma1 = parseInt(values.kharisma1)||0;
    let kharisma2 = parseInt(values.kharisma2)||0;
    let kharisma3 = parseInt(values.kharisma3)||0;
    let kharisma4 = parseInt(values.kharisma4)||0;
    let civitas1 = parseInt(values.civitas1)||0;
    let civitas2 = parseInt(values.civitas2)||0;
    let civitas3 = parseInt(values.civitas3)||0;
    let civitas4 = parseInt(values.civitas4)||0;
    let religiochristian1 = parseInt(values.religiochristian1)||0;
    let religiochristian2 = parseInt(values.religiochristian2)||0;
    let religiochristian3 = parseInt(values.religiochristian3)||0;
    let religiochristian4 = parseInt(values.religiochristian4)||0;
    let religiopagan1 = parseInt(values.religiopagan1)||0;
    let religiopagan2 = parseInt(values.religiopagan2)||0;
    let religiopagan3 = parseInt(values.religiopagan3)||0;
    let religiopagan4 = parseInt(values.religiopagan4)||0;
    setAttrs({
      "fortitude1": fortitude1,
      "fortitude2": fortitude2,
      "fortitude3": fortitude3,
      "fortitude4": fortitude4,
      "perceptio1": perceptio1,
      "perceptio2": perceptio2,
      "perceptio3": perceptio3,
      "perceptio4": perceptio4,
      "kharisma1": kharisma1,
      "kharisma2": kharisma2,
      "kharisma3": kharisma3,
      "kharisma4": kharisma4,
      "civitas1": civitas1,
      "civitas2": civitas2,
      "civitas3": civitas3,
      "civitas4": civitas4,
      "religiochristian1": religiochristian1,
      "religiochristian2": religiochristian2,
      "religiochristian3": religiochristian3,
      "religiochristian4": religiochristian4,
      "religiopagan1": religiopagan1,
      "religiopagan2": religiopagan2,
      "religiopagan3": religiopagan3,
      "religiopagan4": religiopagan4
    });
    console.log("after setting");
  });
});

const defaultpathoslist = ["pathos1", "pathos2", "pathos3", "pathos4", "pathos5", "pathos6", "pathos7", "pathos8", "pathos9", "pathos10"];
on('sheet:opened', function(){
  console.log("into open");
  getAttrs(defaultpathoslist, function(values) {
    console.log("into get");
    console.log("pathos1 = " + values.pathos1 + "before");
    let pathos1 = parseInt(values.pathos1)||0;
    console.log("pathos1 = " + pathos1 + "after");
    let pathos2 = parseInt(values.pathos2)||0;
    let pathos3 = parseInt(values.pathos3)||0;
    let pathos4 = parseInt(values.pathos4)||0;
    let pathos5 = parseInt(values.pathos5)||0;
    let pathos6 = parseInt(values.pathos6)||0;
    let pathos7 = parseInt(values.pathos7)||0;
    let pathos8 = parseInt(values.pathos8)||0;
    let pathos9 = parseInt(values.pathos9)||0;
    let pathos10 = parseInt(values.pathos10)||0;
    setAttrs({
      "pathos1": pathos1,
      "pathos2": pathos2,
      "pathos3": pathos3,
      "pathos4": pathos4,
      "pathos5": pathos5,
      "pathos6": pathos6,
      "pathos7": pathos7,
      "pathos8": pathos8,
      "pathos9": pathos9,
      "pathos10": pathos10
    });
    console.log("after setting");
  });
});

const defaultconditionlist = ["conditionrage", "conditionpeaceful", "conditionreckless", "conditionprudent", "conditionobsessed", "conditionlucid", "conditionparanoid", "conditiontrustful", "conditionanxious", "conditioncalm", "conditionlistless", "conditionactive", "conditiondespair", "conditionhopeful", "conditiondetached", "conditionconnected"];
on('sheet:opened', function(){
  console.log("into open");
  getAttrs(defaultconditionlist, function(values) {
    console.log("into get");
    console.log("conditionrage = " + values.conditionrage + "before");
    let conditionrage = parseInt(values.conditionrage)||0;
    console.log("conditionrage = " + conditionrage + "after");
    let conditionpeaceful = parseInt(values.conditionpeaceful)||0;
    let conditionreckless = parseInt(values.conditionreckless)||0;
    let conditionprudent = parseInt(values.conditionprudent)||0;
    let conditionobsessed = parseInt(values.conditionobsessed)||0;
    let conditionlucid = parseInt(values.conditionlucid)||0;
    let conditionparanoid= parseInt(values.conditionparanoid)||0;
    let conditiontrustful = parseInt(values.conditiontrustful)||0;
    let conditionanxious = parseInt(values.conditionanxious)||0;
    let conditioncalm = parseInt(values.conditioncalm)||0;
    let conditionlistless = parseInt(values.conditionlistless)||0;
    let conditionactive = parseInt(values.conditionactive)||0;
    let conditiondespair = parseInt(values.conditiondespair)||0;
    let conditionhopeful = parseInt(values.conditionhopeful)||0;
    let conditiondetached= parseInt(values.conditiondetached)||0;
    let conditionconnected = parseInt(values.conditionconnected)||0;
    setAttrs({
      "conditionrage": conditionrage,
      "conditionpeaceful": conditionpeaceful,
      "conditionreckless": conditionreckless,
      "conditionprudent": conditionprudent,
      "conditionobsessed": conditionobsessed,
      "conditionlucid": conditionlucid,
      "conditionparanoid": conditionparanoid,
      "conditiontrustful": conditiontrustful,
      "conditionanxious": conditionanxious,
      "conditioncalm": conditioncalm,
      "conditionlistless": conditionlistless,
      "conditionactive": conditionactive,
      "conditiondespair": conditiondespair,
      "conditionhopeful": conditionhopeful,
      "conditiondetached": conditiondetached,
      "conditionconnected": conditionconnected
    });
    console.log("after setting");
  });
});

const emptyprogressbarlist = ["improvementempty", "resilienceempty", "traumaempty", "cohortevocatusempty", "cohortdecurionempty", "gangempty", "fansempty", "freedomempty"];
emptyprogressbarlist.forEach(button => { on(`clicked:${button}`, function() { 
  console.log("into button");
  console.log([button]);
  if([button] == "improvementempty") {
    setAttrs({ improvement: 0 });
  } else if([button] == "resilienceempty") {
    setAttrs({ resilience: 0 });
  } else if([button] == "traumaempty") {
    setAttrs({ trauma: 0 });
  } else if([button] == "cohortevocatusempty") {
    setAttrs({ cohortevocatus: 0 });
  } else if([button] == "cohortdecurionempty") {
    setAttrs({ cohortdecurion: 0 });
  } else if([button] == "gangempty") {
    setAttrs({ gang: 0 });
  } else if([button] == "fansempty") {
    setAttrs({ fans: 0 });
  } else if([button] == "freedomempty") {
    setAttrs({freedom: 0});
  }
  });
});

