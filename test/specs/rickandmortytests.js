const HomePage = require('../pageobjects/home.page');
const CharacterPage = require('../pageobjects/character.page');

describe('Rick and Morty Home Page', () => {
    it('should show the Bogota Testing Night Title', () => {
        HomePage.navigate("");
        HomePage.gotoCharacter();
        const mock = browser.mock('https://bogotatestingnightsrickandmorty.azurewebsites.net/character', {
            method:'post'
        })
        mock.respond([{"id":1,"name":"Rick Sanchez","status":"Alive","species":"Human","type":"","gender":"Male","location":"Earth (Replacement Dimension)","image":"https://rickandmortyapi.com/api/character/avatar/1.jpeg","episode":40,"created":"11/4/2017 6:48:46 PM"}])
        CharacterPage.fillName("rick");
        CharacterPage.search();
        browser.pause(6000);
    });
});




