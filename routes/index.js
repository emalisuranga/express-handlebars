var express = require("express");
var router = express.Router();
var connecion = require("../config/connection.js");

/* GET home page. */
router.get("/", function(req, res, next) {
  connecion.query("SELECT * FROM users", function(err, rows) {
    if (err) throw err;
    // console.log(rows);
    res.render("index", { users: rows });
  });
});

router.post("/addUser", function(req, res) {
  const userData = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    prof: req.body.prof
  };

  // console.log(userData);
  // console.log("HI Emal")
  // res.send('data inserted');
  connecion.query("INSERT INTO users SET ?", userData, function(err, result) {
    if (err) throw err;
    res.redirect("/");
  });
});

router.get("/deleteUser/:id", function(req, res) {
  var userId = req.params.id;
  // console.log(userId);
  // res.send("Id recieved");
  connecion.query("DELETE FROM users WHERE id = ?", [userId], function(
    err,
    rows
  ) {
    if (err) throw err;
    res.redirect("/");
  });
});

router.get("/edit/:id", function(req, res) {
  var userId = req.params.id;
  connecion.query("SELECT * FROM users WHERE id = ?", [userId], function(
    err,
    rows
  ) {
    if (err) throw err;
    res.render("edit", { userdata: rows });
  });
});

router.post("/updeteUser/:id", function(req, res) {
 
    var fname= req.body.fname;
    var lname= req.body.lname;
    var email= req.body.email;
    var prof= req.body.prof;
  
  // console.log(userData);
  var updeteId = req.params.id;
  connecion.query(
    "UPDATE users SET fname =?,lname =?,email =?,prof =? WHERE id =?",
    [fname, lname, email, prof, updeteId],
    function(err, respond) {
      if (err) throw err;
      res.redirect('../../');
      // console.log(updeteId);
    }
  );
});

module.exports = router;
