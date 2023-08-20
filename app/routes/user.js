const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const {createUser} = require ('../controllers/user.controller');

router.post('/createUser',[
    check('email','Username is required.').not().isEmpty(),
    check('password','Password is required.').not().isEmpty()
],createUser);

module.exports = router;