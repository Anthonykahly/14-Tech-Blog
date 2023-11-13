//Edit
async function editForm(event) {
  event.preventDefault();

  const post_title = document
    .querySelector('input[name="post-title"]')
    .value.trim();
  const post_content = document
    .querySelector('input[name="content"]')
    .value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      postid: id,
      post_title,
      post_content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  }
}

document.querySelector(".edit-post-form").addEventListener("submit", editForm);
