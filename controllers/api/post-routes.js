const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.post('/', withAuth, (req, res) => {

});

// update post
router.put('/:id', withAuth, (req, res) => {

});

router.delete('/:id', withAuth, (req, res) => {

});

module.exports = router;