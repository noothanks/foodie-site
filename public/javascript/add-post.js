async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('input[name="content"]').value;
  const steps = document.querySelector('input[name="steps"]').value;

  

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
      steps
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/blog");
    return response;
  } else {
    alert(response.statusText);
  }
  console.log(steps);
  console.log(response);
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
