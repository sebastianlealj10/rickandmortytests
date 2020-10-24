const Page = require('./page');
class CharacterPage extends Page {
    get title () { return $('h1') }
    get name () { return $('input[name="name"]') }
    get btnSubmit () { return $('button[type="submit"]') }

    fillName(name)
    {
        this.name.setValue(name);
    }

    search()
    {
        this.btnSubmit.click();
    }

    navigate(path)
    {
        return super.open(path);
    }
}

module.exports = new CharacterPage();