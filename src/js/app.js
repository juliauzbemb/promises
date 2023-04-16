import GameSavingLoader from "./loader.js";

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  console.error(error);
});
