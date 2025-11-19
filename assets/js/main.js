document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------
  // PANEL-LOGIK (Projects / Conceptual / CV / Contact)
  // ---------------------------
  const panels = Array.from(document.querySelectorAll(".panel"));
  const sectionsContainer = document.querySelector(".sections");

  if (panels.length) {
    const setActivePanel = (targetPanel) => {
      if (sectionsContainer) {
        sectionsContainer.classList.add("has-active");
      }

      panels.forEach((panel) => {
        const content = panel.querySelector(".panel-content");
        if (!content) return;

        if (panel === targetPanel) {
          panel.classList.add("active");
          panel.classList.remove("shrink");
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          panel.classList.remove("active");
          panel.classList.add("shrink");
          content.style.maxHeight = 0;
        }
      });
    };

    // Startzustand: kein aktives Panel → alle groß, nichts tun

    panels.forEach((panel) => {
      const button = panel.querySelector(".panel-title");
      if (!button) return;

      button.addEventListener("click", () => {
        if (!panel.classList.contains("active")) {
          setActivePanel(panel);
        }
      });
    });
  }

  // ---------------------------
  // PROJECT-STRIP-LOGIK
  // (klickbare Projekte in einer Reihe)
  // ---------------------------
  const projectItems = Array.from(document.querySelectorAll(".project-item"));

  if (projectItems.length) {
    // KEIN Startzustand erzwingen – alles bleibt zunächst inaktiv

    projectItems.forEach((item) => {
      item.addEventListener("click", (event) => {

        // 1) Wenn noch nicht aktiv → nur aktivieren, NICHT weiterleiten
        if (!item.classList.contains("active")) {
          projectItems.forEach((i) => i.classList.remove("active"));
          item.classList.add("active");
          event.preventDefault();   // verhindert Link-Klick
          return;
        }

        // 2) Wenn schon aktiv → weiterleiten zur Projektseite
        const link = item.querySelector(".project-main-photo");
        if (link && link.href) {
          window.location.href = link.href;
        }
      });
    });
  }
});
