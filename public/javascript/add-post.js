//Add post
async function newForm(event) {
  event.preventDefault();

  const post_title = document.querySelector('input[name="post-title"]').value;
  const post_content = document.querySelector('input[name="content"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      post_title,
      post_content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  }
}

$("#new-post-form").on("submit", newForm);
