const router = require('express').Router();

const authCheck = (req, res, next) => {
  if (!req.user) {
    //if user is not logged in
    res.redirect('/auth/google');
  } else {
    //if logged in
    next();
  }
};

router.get('/', authCheck, (req, res) => {
  res.status(200).json(req.user.username);
});

router.get('/logged', async (req, res) => {
  try {
    if (!req.user) {
      console.log('not logged in');
    } else {
      console.log(req.user);
    }
    // res.status(200).json(await Product.find({ category: req.params.id }));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
