document.addEventListener("DOMContentLoaded", function () {
    let projectCount = 0;
    let certificateCount = 0;
    let educationCount = 0;
  
    const projectSection = document.getElementById("projects-section");
    const certificateSection = document.getElementById("certificates-section");
    const educationSection = document.getElementById("education-section");
  
    document.getElementById("resumeForm").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const location = document.getElementById("location").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const portfolio = document.getElementById("portfolio").value;
      const github = document.getElementById("github").value;
  
      const projects = [...document.querySelectorAll(".project")].map(p => ({
        title: p.querySelector(".proj-title").value,
        date: p.querySelector(".proj-date").value,
        points: p.querySelector(".proj-desc").value.split("\n")
      }));
  
      const certificates = [...document.querySelectorAll(".certificate")].map(c => ({
        title: c.querySelector(".cert-title").value,
        date: c.querySelector(".cert-date").value
      }));
  
      const education = [...document.querySelectorAll(".education")].map(e => ({
        title: e.querySelector(".edu-title").value,
        date: e.querySelector(".edu-date").value,
        points: e.querySelector(".edu-desc").value.split("\n")
      }));
  
      const lang = document.getElementById("lang").value;
      const web = document.getElementById("web").value;
      const db = document.getElementById("db").value;
      const tools = document.getElementById("tools").value;
  
      const resume = document.getElementById("resume");
      resume.classList.remove("hidden");
  
      resume.innerHTML = `
        <h1>${name}</h1>
        <p class="center">${location}</p>
        <div class="contact">${phone} | ${email} | 
          <a href="${portfolio}" target="_blank">Portfolio</a> | 
          <a href="${github}" target="_blank">GitHub</a>
        </div>
  
        <div class="section">
          <h2>Projects</h2>
          ${projects.map(p => `
            <div class="item"><span>${p.title}</span><span>${p.date}</span></div>
            <ul class="item-content">
              ${p.points.map(pt => `<li>${pt}</li>`).join("")}
            </ul>
          `).join("")}
        </div>
  
        <div class="section">
          <h2>Certificates</h2>
          ${certificates.map(c => `
            <div class="item"><span>${c.title}</span><span>${c.date}</span></div>
          `).join("")}
        </div>
  
        <div class="section">
          <h2>Technical Skills</h2>
          <p><strong>Languages:</strong> ${lang}</p>
          <p><strong>Web:</strong> ${web}</p>
          <p><strong>Databases:</strong> ${db}</p>
          <p><strong>Tools/Platform:</strong> ${tools}</p>
        </div>
  
        <div class="section">
          <h2>Education</h2>
          ${education.map(e => `
            <div class="item"><span>${e.title}</span><span>${e.date}</span></div>
            <ul class="item-content">
              ${e.points.map(pt => `<li>${pt}</li>`).join("")}
            </ul>
          `).join("")}
        </div>
      `;
    });
  
    // WORKING BUTTON FUNCTIONS
    document.querySelector('button[onclick="addProject()"]').addEventListener("click", function () {
      projectSection.insertAdjacentHTML("beforeend", `
        <div class="project">
          <input type="text" placeholder="Project Title" class="proj-title" />
          <input type="text" placeholder="Date" class="proj-date" />
          <textarea placeholder="Bullet points (one per line)" class="proj-desc"></textarea>
        </div>
      `);
    });
  
    document.querySelector('button[onclick="addCertificate()"]').addEventListener("click", function () {
      certificateSection.insertAdjacentHTML("beforeend", `
        <div class="certificate">
          <input type="text" placeholder="Certificate Title" class="cert-title" />
          <input type="text" placeholder="Date" class="cert-date" />
        </div>
      `);
    });
  
    document.querySelector('button[onclick="addEducation()"]').addEventListener("click", function () {
      educationSection.insertAdjacentHTML("beforeend", `
        <div class="education">
          <input type="text" placeholder="Institution and Degree" class="edu-title" />
          <input type="text" placeholder="Date" class="edu-date" />
          <textarea placeholder="Details (one per line)" class="edu-desc"></textarea>
        </div>
      `);
    });
  
    // Add one entry initially to avoid empty sections
    document.querySelector('button[onclick="addProject()"]').click();
    document.querySelector('button[onclick="addCertificate()"]').click();
    document.querySelector('button[onclick="addEducation()"]').click();
  });
  