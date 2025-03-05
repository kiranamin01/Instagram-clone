const avatarImg = document.createElement("img");
const identifier = "janedoe";

avatarImg.src = `https://api.adorable.io/avatars/256/${identifier}/blue.png`;

// document.body.appendChild(avatarImg);

// ---------------------------------------------------------------------------------------------

const people = [
  {
    name: "Aisha Khan",
    gender: "Female",
    profileLink: "",
    city: "Karachi",
  },
  {
    name: "Ethan Miller",
    gender: "Male",
    profileLink: "",
    city: "New York",
  },
  {
    name: "Sofia Rossi",
    gender: "Female",
    profileLink: "",
    city: "Rome",
  },
  {
    name: "Kenji Tanaka",
    gender: "Male",
    profileLink: "",
    city: "Tokyo",
  },
  {
    name: "Olivia Dubois",
    gender: "Female",
    profileLink: "",
    city: "Paris",
  },
  {
    name: "Liam O'Connell",
    gender: "Male",
    profileLink: "",
    city: "Dublin",
  },
  {
    name: "Maria Rodriguez",
    gender: "Female",
    profileLink: "",
    city: "Madrid",
  },
  {
    name: "Noah Petrov",
    gender: "Male",
    profileLink: "",
    city: "Moscow",
  },
  {
    name: "Lena Schmidt",
    gender: "Female",
    profileLink: "",
    city: "Berlin",
  },
  {
    name: "Omar Hassan",
    gender: "Male",
    profileLink: "",
    city: "Cairo",
  },
];

function cleanName(name) {
  return name.replace(/\s+/g, "").toLowerCase(); // Remove spaces and lowercase
}

const updatedPeople = people.map((person) => {
  return {
    ...person,
    profileLink: `https://example.com/${cleanName(person.name)}`,
  };
});
