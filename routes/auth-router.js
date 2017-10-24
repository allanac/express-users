const express = require('express');
// const bcrypt = require('bcrypt');
const passport = require('passport');

const UserModel = require('../models/user-model.js');

const router = express.Router();

router.get('/signup', (req, res, next) => {
    res.render('auth-views/signup-form.ejs');
});

router.post('validate-signup', (req, res, next) => {
      if (req.body.signupEmail)

});







module.exports = router;
