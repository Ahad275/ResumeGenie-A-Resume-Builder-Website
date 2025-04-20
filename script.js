// Resume Generator
function generateResume() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const summary = document.getElementById("summary").value.trim();

    if (!name || !email || !phone || !summary) {
        alert("Please fill in all fields to generate your resume.");
        return;
    }

    document.getElementById("output-name").innerText = name;
    document.getElementById("output-email").innerText = email;
    document.getElementById("output-phone").innerText = phone;
    document.getElementById("output-summary").innerText = summary;

    const resumeSection = document.getElementById("resume-output");
    resumeSection.classList.remove("hidden");
    resumeSection.classList.add("fade-in");
}

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const status = document.getElementById("form-status");
    status.style.display = "block";
    status.style.color = "#28a745";
    status.textContent = "✅ Thanks for reaching out! We'll contact you soon.";

    // Optionally animate the message
    status.classList.add("slide-in");

    this.reset();

    setTimeout(() => {
        status.style.display = "none";
        status.classList.remove("slide-in");
    }, 4000);
});
