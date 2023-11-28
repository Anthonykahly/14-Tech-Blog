const { Comment } = require('../models');

const commentData = [{
        comment_text: "Proin dignissim odio ut finibus commodo. Nam nunc sapien, molestie et odio dignissim,",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Fusce eu odio neque. Maecenas blandit odio quis lacus venenatis, et lobortis urna efficitur.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Nam pellentesque facilisis leo, quis tristique massa pretium vel. ",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "Aliquam lectus elit, tincidunt in venenatis in, sodales vitae odio. ",
        user_id: 4,
        post_id: 4
    },
    {
        comment_text: "Etiam pharetra ante tortor, nec tempus enim gravida vitae.",
        user_id: 5,
        post_id: 5
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;