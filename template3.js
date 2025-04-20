document.getElementById("cv-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const $ = (id) => document.getElementById(id);
    $("cv-output").classList.remove("hidden");

    $("cv-name").innerText = $("name").value;
    $("cv-email").innerText = $("email").value;
    $("cv-phone").innerText = $("phone").value;
    $("cv-linkedin").href = $("linkedin").value;
    $("cv-linkedin").innerText = $("linkedin").value;
    $("cv-github").href = $("github").value;
    $("cv-github").innerText = $("github").value;

    // Technical Skills: "Category: skill1, skill2"
    const skillsText = $("skills").value.split("\n");
    $("cv-skills").innerHTML = skillsText.map(line => {
        const [category, skills] = line.split(":");
        return category && skills ? `<li><strong>${category.trim()}:</strong> ${skills.trim()}</li>` : '';
    }).join("");

    // Achievements
    $("cv-achievements").innerHTML = $("achievements").value
        .split("\n").map(a => `<li>${a.trim()}</li>`).join("");

    // PROJECTS
    const projectLines = $("projects").value.trim().split("\n");
    $("cv-projects").innerHTML = projectLines.map(line => {
        const parts = line.split("|").map(p => p.trim());
        if (parts.length < 4) return ''; // skip invalid lines
        return `<div class="project-entry">
            <strong>${parts[0]}</strong> <span class="project-date">${parts[1]}</span><br>
            <em>${parts[2]}</em><br>${parts[3]}
        </div>`;
    }).join("");

    // EDUCATION
    const eduLines = $("education").value.trim().split("\n");
    $("cv-education").innerHTML = eduLines.map(line => {
        const [school, degree, location, duration, score] = line.split("|").map(p => p.trim());
        return school && degree && location && duration && score ? `<li class="edu-entry">
            <div class="edu-left"><strong>${school}</strong><br>${degree} — ${location}</div>
            <div class="edu-right">${duration}<br>${score}</div>
        </li>` : '';
    }).join("");

    // CERTIFICATIONS
    const certLines = $("certifications").value.trim().split("\n");
    $("cv-certifications").innerHTML = certLines.map(line => {
        const [title, platform, date, link] = line.split("|").map(p => p.trim());
        return title && platform && date && link ? `<li class="cert-entry">
            <div class="cert-left"><strong>${title}</strong> — ${platform} — <a href="${link}" target="_blank">Verify</a></div>
            <div class="cert-right">${date}</div>
        </li>` : '';
    }).join("");
});
