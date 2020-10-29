const Page = require('./page');
class HomePage extends Page {
    get title () { return $('h1') }
    get episode () { return $('a[href="/episode"]')}

    navigate(path)
    {
        return super.open(path);
    }

    gotoCharacter()
    {
        this.episode.click();
    }
}

module.exports = new HomePage();