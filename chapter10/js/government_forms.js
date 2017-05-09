/*
Government forms
*/

const governmentForms = [
  {
    name: "Plutocracy",
    definition: "Rule by the weathly"
  },
  {
    name: "Oligarchy",
    definition: "Rule by a small number of people"
  },
  {
    name: "Kleptocracy",
    definition: "Rule by the thieves"
  },
  {
    name: "Theocracy",
    definition: "Rule by a religious elite"
  },
  {
    name: "Democracy",
    definition: "Rule by the people"
  },
  {
    name: "Autocracy",
    definition: "Rule by a single person"
  }
];

// Filtering by name, then mapping to names
const formsEndingWithCy = governmentForms
  .filter(form => form.name.endsWith("cy"))
  .map(form => form.name);

console.log(formsEndingWithCy);
