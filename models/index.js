const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post, {
  foreignKey: "userid",
});
Post.belongsTo(User, {
  foreignKey: "userid",
  onDelete: "cascade",
});

Comment.belongsTo(User, {
  foreignKey: "userid",
  onDelete: "cascade",
});

Comment.belongsTo(Post, {
  foreignKey: "postid",
  onDelete: "cascade",
});

User.hasMany(Comment, {
  foreignKey: "userid",
  onDelete: "cascade",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
});
module.exports = { User, Post, Comment };
