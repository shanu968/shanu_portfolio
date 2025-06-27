// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my skills and projects.",
    image: "https://via.placeholder.com/300x200",
    live: "https://yourportfolio.com",
    github: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Todo App",
    description: "A task management app built with vanilla JavaScript.",
    image: "https://via.placeholder.com/300x200",
    live: "https://yourtodoapp.com",
    github: "https://github.com/yourusername/todo-app"
  }
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.live}" target="_blank">Live Demo</a>
    <a href="${project.github}" target="_blank">GitHub</a>
  `;

  container.appendChild(card);
});
  });
});