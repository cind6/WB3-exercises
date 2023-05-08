"use strict";

"use strict";

function parseAndDisplayName(name) {
    let spacePos = name.indexOf(" ");
    let firstName = name.slice(0, spacePos);
    let lastName = name.slice(spacePos + 1);
    console.log("Name: " + name);
    console.log("First name: " + firstName);
    console.log("Last name: " + lastName);
  }
  
  parseAndDisplayName("Brenda Kaye");
  parseAndDisplayName("Ian Auston");
  parseAndDisplayName("Siddalee Grace");
  