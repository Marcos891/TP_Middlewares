module.exports = {
    index: (req, res) => {
        return res.render('index');
    },

    about: (req, res) => {
        return res.render('about');
    },

    contac: (req, res) => {
        return res.render('contac');
    },
    music: (req, res) => {
        return res.render('music');
    },
    login: (req, res) => {
        return res.render('login');
    },
    admin: (req, res) => {
        return res.render('admin', {
            user : req.query.user
        });
    }
}