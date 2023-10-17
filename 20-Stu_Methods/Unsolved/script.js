let constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
let planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
let star = "polaris";

// WRITE YOUR CODE BELOW

constellations.push("Canis Major");

let destroyPlanet = planets.pop();

let combinedArray = constellations.concat(planets);

let bigLetters = star.match(/[A-Z]/g);

let bigLettersString = capitalLetters.join('');

console.log(bigLettersString);
