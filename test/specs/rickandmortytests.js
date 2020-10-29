const HomePage = require('../pageobjects/home.page');
const EpisoderPage = require('../pageobjects/episode.page');

describe('Rick and Morty Episodes', () => {
    it('should show the episodes cards', () => {
        const mock = browser.mock('https://bogotatestingnightsrickandmorty.azurewebsites.net/episodes', {
            method:'Get'
        })
        mock.respond([
            {
              "id": 1,
              "name": "Rick Sanchez",
              "status": "Alive",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "location": "Earth (Replacement Dimension)",
              "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              "episode": 40,
              "created": "11/4/2017 6:48:46 PM"
            },
            {
              "id": 8,
              "name": "Adjudicator Rick",
              "status": "Dead",
              "species": "Human",
              "type": "",
              "gender": "Male",
              "location": "Citadel of Ricks",
              "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
              "episode": 40,
              "created": "11/4/2017 8:03:34 PM"
            }
          ])
        HomePage.navigate("");
        HomePage.gotoCharacter();
        EpisoderPage.search();
        expect(EpisoderPage.cardGrid).toBeDisplayed();
        browser.pause(6000);
    });
});




