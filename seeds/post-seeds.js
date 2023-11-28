const { Post } = require("../models");

const postData = [
  {
    title: "Lorem ipsum dolor sit amet",
    post_content:
      "consectetur adipiscing elit. Vestibulum ut elit eget dolor dapibus cursus ultricies vel felis.",
    user_id: 1,
  },
  {
    title: "Morbi ut sollicitudin mauris",
    post_content:
      "Duis condimentum tincidunt augue, vel iaculis neque lobortis at. Maecenas elementum ultrices orci, maximus laoreet turpis euismod pretium.",
    user_id: 2,
  },
  {
    title: "Vivamus id venenatis ipsum",
    post_content:
      "Maecenas ultricies non diam eu ornare. Donec sed libero pellentesque, accumsan risus vitae, aliquet ante. Sed ullamcorper.",
    user_id: 3,
  },
  {
    title: "Suspendisse non lectus tincidunt",
    post_content:
      "quis efficitur dui semper quis. Ut auctor urna diam, non suscipit metus pretium nec. Cras nec diam non leo faucibus imperdiet.",
    user_id: 4,
  },
  {
    title: "Morbi at rhoncus risus",
    post_content:
      "Duis gravida massa id enim volutpat, vitae ullamcorper ligula condimentum. Vestibulum libero lacus.",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
