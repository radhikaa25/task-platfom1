const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
    
    res.status(200).json({ message: 'User signed up successfully' });
});

module.exports = router;
