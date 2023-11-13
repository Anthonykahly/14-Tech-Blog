const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");
router.get("/", (req, res) => {
  Comment.findAll({})
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  if (req.session) {
    Comment.create({
      comment: req.body.comment,
      postid: req.body.postid,
      userid: req.session.userid,
    })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        res.status(400).json(err);
      });
  }
});

router.put("/:id", withAuth, (req, res) => {
  Comment.update(
    {
      comment: req.body.comment,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: "No comment matching this ID" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: "No comment matching this ID" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
module.exports = router;
