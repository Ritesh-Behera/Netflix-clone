document.querySelectorAll(".faqanswer").forEach((el) => {
    el.style.display = "none"; // Ensure all answers are hidden by default
    el.style.setProperty("display", "none", "important"); // Override hover effect
});

document.querySelectorAll(".faqcard").forEach((faq) => {
    faq.addEventListener("click", function () {
        let answer = this.querySelector(".faqanswer");
        if (answer.style.display === "block") {
            answer.style.display = "none"; // Hide if already shown
        } else {
            answer.style.display = "block"; // Show answer
        }
    });
});
