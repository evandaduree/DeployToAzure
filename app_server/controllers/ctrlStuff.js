const stuff = function(req, res) {
    res.render('stuff', {
        equipments:[
            "dragobytte",
            "lakemole",
            "Loue-iza",
            "vaumy-danltrin"
        ]
    });
};

// noinspection JSAnnotator
module.exports = {
    stuff
};