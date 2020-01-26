const express = require('express');
const router = express.Router();

// Create 예: 회원가입시, 로그인시
router.post('/', (req, res) => {
    res.json({
        msg: "product post"
    });
});

// Read
router.get('/', (req, res) => {
    res.json({
        msg: "product get"
    });
});

// Update
router.patch('/', (req, res) => {
    res.json({
        msg: "product patch"
    });
});

// Delete
router.delete('/', (req, res) => {
    res.json({
        msg: "product delete"
    });
});

module.exports = router;