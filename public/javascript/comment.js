//Comment
async function commentForm(event) {
  event.preventDefault();
  const comment = document
    .querySelector('input[name="comment-body"]')
    .value.trim();
  const postid = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comment) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        postid,
        comment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      document.querySelector("#comment-form").style.display = "block";
    }
  }
}

document.querySelector(".comment-form").addEventListener("submit", commentForm);
