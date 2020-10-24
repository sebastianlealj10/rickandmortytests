const Page = require('./page');
class HomePage extends Page {
    get title () { return $('h1') }
    get character () { return $('a[href="/character"]')}

    navigate(path)
    {
        return super.open(path);
    }

    gotoCharacter()
    {
        this.character.click();
    }
}

module.exports = new HomePage();