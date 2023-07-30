document.querySelectorAll(".questions").forEach((question) =>
  question.addEventListener("click", () => {
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.toggle("active");
    } else {
      document
        .querySelectorAll(".questions")
        .forEach((question) => question.parentNode.classList.remove("active"));
      question.parentNode.classList.add("active");
    }
  })
);
