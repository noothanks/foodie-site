const router = require('express').Router();

router.get('/', (req, res) => {
    return res.render('blog');
})

module.exports = router;