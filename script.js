document.addEventListener("DOMContentLoaded", () => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((projetos) => {
        const container = document.querySelector(".projetos-container");
  
        projetos.forEach((projeto) => {
          const card = document.createElement("div");
          card.classList.add("projeto-card");
  
          card.innerHTML = `
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
            <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>
            <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
          `;
  
          container.appendChild(card);
        });
      })
      .catch((err) => {
        console.error("Erro ao carregar projetos:", err);
      });
  });
  