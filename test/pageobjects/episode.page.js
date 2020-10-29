const Page = require('./page');
class EpisodePage extends Page {
    get title () { return $('h1') }
    get btnSubmit () { return $('button[type="submit"]') }
    get cardGrid () { return $('.MuiGrid-item') }


    search()
    {
        this.btnSubmit.click();
    }

    navigate(path)
    {
        return super.open(path);
    }
}

module.exports = new EpisodePage();