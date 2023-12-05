// Array of programming languages for each project
const languages = [
    ["HTML", "CSS"],
    ["HTML", "CSS"],
    ["HTML", "CSS"],
    ["HTML", "CSS"]
  ];
  
  // Select all project tiles
  const projectTiles = document.querySelectorAll(".project-tile");
  
  // Loop through project tiles and add programming languages
  projectTiles.forEach((tile, index) => {
    const languagesContainer = tile.querySelector(".project-languages");
    const projectLanguages = languages[index];
  
    if (languagesContainer && projectLanguages) {
      languagesContainer.textContent = projectLanguages.join(", ");
    }
  });