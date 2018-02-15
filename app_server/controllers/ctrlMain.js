const index = function(req, res) {
    res.render('index', { title: 'Guild Wars'});
};

module.exports = {
    index
};