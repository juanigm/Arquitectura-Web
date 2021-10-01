const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.json({"tittle": "Wlcome"});
});

module.exports = router;