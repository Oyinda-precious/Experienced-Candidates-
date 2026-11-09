// Mini-project: filter candidates with 3+ years of experience

//  A list (array) of 10 candidates. Each candidate is an object.
const candidates = [
  {
    name: "Tolu Adebayo",
    yearsOfExperience: 5,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  { name: "Chidi Okafor", yearsOfExperience: 1, skills: ["HTML", "CSS"] },
  { name: "Amina Bello", yearsOfExperience: 3, skills: ["React", "Node.js"] },
  {
    name: "Kemi Ogunleye",
    yearsOfExperience: 2,
    skills: ["JavaScript", "Git"],
  },
  {
    name: "Emeka Nwosu",
    yearsOfExperience: 7,
    skills: ["Node.js", "MongoDB", "Express"],
  },
  {
    name: "Fatima Yusuf",
    yearsOfExperience: 4,
    skills: ["React", "TypeScript"],
  },
  { name: "Seun Adeyemi", yearsOfExperience: 0, skills: ["HTML"] },
  { name: "Ngozi Eze", yearsOfExperience: 6, skills: ["Python", "SQL"] },
  { name: "Ibrahim Musa", yearsOfExperience: 2, skills: ["CSS", "Figma"] },
  {
    name: "Bisi Akande",
    yearsOfExperience: 3,
    skills: ["JavaScript", "React", "Node.js"],
  },
];

// Filter: keep only candidates with 3 or more years of experience.
const experiencedCandidates = candidates.filter(function (candidate) {
  return candidate.yearsOfExperience >= 3;
});

// NEW: grab the empty <ul> from the HTML page
const list = document.getElementById("candidate-list");

//  Print their names.
console.log("Candidates with 3+ years of experience:");

//  NEW: for each candidate, create an <li>, put the name in it, add it to the list
experiencedCandidates.forEach(function (candidate) {
  const item = document.createElement("li");
  item.textContent = candidate.name;
  list.appendChild(item);
  console.log("- " + candidate.name);
});

//  NEW: show the total in the <p> tag
document.getElementById("total").textContent =
  "Total: " + experiencedCandidates.length + " out of " + candidates.length;
console.log(
  "Total: " + experiencedCandidates.length + " out of " + candidates.length,
);
