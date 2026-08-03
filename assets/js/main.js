// Projects Detailed Database (8 projects matching source file)
const projectsData = {
  "rc-car": {
    title: "3D-Printed RC Car",
    status: "completed",
    category: "Hardware & Robotics",
    categoryKey: "hardware",
    result: "Built a functional 3D-printed RC car with RF control system and custom circuit design in collaboration.",
    skills: ["CAD", "RF Optimization", "Soldering", "Circuit Design"],
    challenges: "Independent CAD design for the first time, maximizing limited RF controller range, and initial soldering experience.",
    image: "./assets/images/rc_car.png",
    fallbackGradient: "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
    links: []
  },
  "weather-balloon": {
    title: "High-Altitude Weather Balloon (IB Personal Project)",
    status: "completed",
    category: "Hardware & Engineering",
    categoryKey: "hardware",
    result: "Independently assembled weather balloon payload, successfully launched and predicted trajectory.",
    skills: ["Independent Research", "Project Planning", "High-Altitude Logistics", "Trajectory Prediction"],
    challenges: "Solo project execution and troubleshooting payload camera malfunction from pre-launch impact shock.",
    image: "./assets/images/weather_balloon.png",
    fallbackGradient: "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
    links: [
      { text: "View MYP PP Report", url: "https://docs.google.com/document/d/1E-pHnjvshnX2U9S1n7bHIt4PVeMTgcQoYrmHkb7EijA/edit?usp=sharing", type: "document" },
      { text: "Grade: 6/6/6", url: "#", type: "grade" }
    ]
  },
  "axiom-chess": {
    title: "Axiom Chess Engine",
    status: "wip",
    category: "Software & Systems",
    categoryKey: "software",
    result: "Python-based chess engine capable of defeating casual players. Integrated with Lichess API for automated bot testing.",
    skills: ["Python", "Algorithm Design", "API Integration", "Lichess API"],
    challenges: "Extensive live testing to identify and patch strategic flaws under real-time constraints.",
    image: "./assets/images/axiom_chess.png",
    fallbackGradient: "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
    links: [
      { text: "GitHub Repository", url: "https://github.com/matiasd2028-boop/ChessBot.py", type: "github" }
    ]
  },
  "openclaw-ai": {
    title: "Openclaw AI Assistant",
    status: "wip",
    category: "Software & Systems",
    categoryKey: "software",
    result: "Fully functional, free, power-efficient personal AI assistant hosted on SBC hardware.",
    skills: ["Raspberry Pi 4B", "AI Agent Deployment", "API Integration", "System Administration"],
    challenges: "Ensuring all external platforms synced properly into a low-power, reliable personal AI agent.",
    image: "./assets/images/openclaw_ai.png",
    fallbackGradient: "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
    links: []
  },
  "custom-nas": {
    title: "Custom NAS Server",
    status: "completed",
    category: "Software & Networking",
    categoryKey: "software",
    result: "Fully functional local server running Immich instance for photo backup with recycled hardware.",
    skills: ["Hardware Reuse", "Raspberry Pi Configuration", "Networking", "Linux Administration"],
    challenges: "Integrating recycled laptop HDD with SBC to create reliable, secure storage network.",
    image: "./assets/images/custom_nas.png",
    fallbackGradient: "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
    links: []
  },
  "solar-tracker": {
    title: "Automated Sun-Tracking Solar Panel",
    status: "completed",
    category: "Hardware & Robotics",
    categoryKey: "hardware",
    result: "Arduino-controlled servo system aligning solar panel with sunlight, charging self-sustaining dual-USB battery.",
    skills: ["Arduino Programming", "Sensor Integration", "Hardware Optimization", "Renewable Energy"],
    challenges: "Configuring hardware within cable reach limits and implementing clean cable management.",
    image: "./assets/images/solar_tracker.png",
    fallbackGradient: "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
    links: []
  },
  "fraud-detector": {
    title: "Credit Card Fraud Detector",
    status: "completed",
    category: "Data Science & ML",
    categoryKey: "data-science",
    result: "ML algorithm using Kaggle dataset achieving all performance targets with class imbalance handling.",
    skills: ["Machine Learning", "Python", "Data Wrangling", "Scikit-Learn"],
    challenges: "Handling class imbalance in data and optimizing features to prevent high false-positive fraud flags.",
    image: "",
    fallbackGradient: "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
    links: [
      { text: "GitHub Repository", url: "https://github.com/matiasd2028-boop/Credit-Card-Fraud-Detector/tree/main", type: "github" }
    ]
  },
  "world-cup": {
    title: "World Cup Predictor",
    status: "completed",
    category: "Data Science & ML",
    categoryKey: "data-science",
    result: "Python-based prediction engine outputting tournament probabilities with dynamic model adaptation.",
    skills: ["Python", "Data Wrangling", "Machine Learning", "Data Visualization"],
    challenges: "Sourcing quality data during live events and training models to adapt dynamically as tournament progressed.",
    image: "",
    fallbackGradient: "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
    links: [
      { text: "GitHub Repository", url: "https://github.com/matiasd2028-boop/World-Cup-Predictor", type: "github" }
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setupTabFilters();
  setupModal();
});

// Setup Project Grid Filtering
function setupTabFilters() {
  const tabs = document.querySelectorAll(".filter-tab");
  const cards = document.querySelectorAll(".project-card");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Toggle Active Tab Style
      tabs.forEach(t => {
        t.classList.remove("active");
      });
      tab.classList.add("active");

      const filterValue = tab.getAttribute("data-filter");

      cards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");

        if (filterValue === "all" || cardCategory === filterValue) {
          card.classList.remove("filtered-out");
        } else {
          card.classList.add("filtered-out");
        }
      });
    });
  });
}

// Setup Details Modal
function setupModal() {
  const cards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("project-modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalContentBox = document.getElementById("modal-content-box");
  const closeBtn = document.getElementById("modal-close-btn");

  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalBadgesContainer = document.getElementById("modal-badges-container");
  const modalResult = document.getElementById("modal-result");
  const modalSkills = document.getElementById("modal-skills");
  const modalChallenges = document.getElementById("modal-challenges");
  const modalLinks = document.getElementById("modal-links");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-project-id");
      const data = projectsData[id];

      if (!data) return;

      // Populate Title
      modalTitle.innerText = data.title;
      
      // Populate Status and Category Badges
      modalBadgesContainer.innerHTML = "";
      
      // 1. Status Badge
      const statusBadge = document.createElement("span");
      if (data.status === "completed") {
        statusBadge.innerText = "Completed";
        statusBadge.className = "px-2 py-0.5 text-[9px] font-mono font-semibold rounded-sm bg-status-live/10 text-status-live border border-status-live/20 uppercase";
      } else {
        statusBadge.innerText = "In Progress";
        statusBadge.className = "px-2 py-0.5 text-[9px] font-mono font-semibold rounded-sm bg-status-wip/10 text-status-wip border border-status-wip/20 uppercase";
      }
      modalBadgesContainer.appendChild(statusBadge);

      // 2. Category Badge
      const categoryBadge = document.createElement("span");
      categoryBadge.innerText = data.category;
      categoryBadge.className = "px-2 py-0.5 text-[9px] font-mono font-semibold rounded-sm bg-bg-tertiary text-text-secondary border border-border-subtle uppercase";
      modalBadgesContainer.appendChild(categoryBadge);

      // Populate Image or Fallback
      const imgParent = modalImg.parentNode;
      const oldPlaceholder = imgParent.querySelector(".visual-placeholder");
      if (oldPlaceholder) oldPlaceholder.remove();

      if (data.image) {
        modalImg.src = data.image;
        modalImg.alt = data.title;
        modalImg.style.display = "block";
      } else {
        modalImg.src = "";
        modalImg.alt = "";
        modalImg.style.display = "none";
        
        const placeholderDiv = document.createElement("div");
        placeholderDiv.className = "visual-placeholder w-full h-full flex items-center justify-center p-8 text-center";
        placeholderDiv.innerHTML = `
          <div>
            <div class="w-14 h-14 mx-auto mb-4 rounded-sm bg-bg-secondary border border-border-subtle flex items-center justify-center">
              <svg class="w-7 h-7 text-text-muted" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <span class="text-base font-semibold text-text-primary">${data.title}</span>
            <span class="block text-xs text-text-muted mt-1 font-mono uppercase tracking-wider">${data.category}</span>
          </div>
        `;
        imgParent.insertBefore(placeholderDiv, modalImg);
      }

      // Populate Result / Overview
      modalResult.innerText = data.result;

      // Populate Skills Chips
      modalSkills.innerHTML = "";
      data.skills.forEach(skill => {
        const chip = document.createElement("span");
        chip.className = "tech-tag";
        chip.innerText = skill;
        modalSkills.appendChild(chip);
      });

      // Populate Challenges
      modalChallenges.innerText = data.challenges || "Continuous iterative deployment and system tuning.";

      // Populate Action Links Buttons
      modalLinks.innerHTML = "";
      if (data.links && data.links.length > 0) {
        data.links.forEach(link => {
          const btn = document.createElement("a");
          btn.href = link.url;
          btn.target = "_blank";
          btn.className = "inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-semibold transition-all border ";

          if (link.type === "github") {
            btn.className += "bg-bg-tertiary hover:bg-bg-secondary text-text-primary border-border-subtle hover:border-border-default";
            btn.innerHTML = `
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.479C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd"/></svg>
              <span>View Code</span>
            `;
          } else if (link.type === "document") {
            btn.className += "bg-text-primary hover:bg-bg-secondary text-bg-primary border-transparent hover:border-border-subtle";
            btn.innerHTML = `
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
              <span>View Report</span>
            `;
          } else if (link.type === "grade") {
            btn.href = "javascript:void(0)";
            btn.className = "bg-bg-tertiary text-text-secondary border-border-subtle cursor-default";
            btn.innerHTML = `
              <svg class="w-4 h-4 text-status-live" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>${link.text}</span>
            `;
          }
          modalLinks.appendChild(btn);
        });
      }

      // Show Modal with animation
      document.body.classList.add("overflow-hidden");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      
      // Force repaint
      modal.offsetHeight;

      modalOverlay.classList.remove("opacity-0");
      modalOverlay.classList.add("opacity-100");
      modalContentBox.classList.remove("opacity-0", "scale-95");
      modalContentBox.classList.add("opacity-100", "scale-100");
    });
  });

  // Close Modal Handler
  function closeModal() {
    modalOverlay.classList.remove("opacity-100");
    modalOverlay.classList.add("opacity-0");
    modalContentBox.classList.remove("opacity-100", "scale-100");
    modalContentBox.classList.add("opacity-0", "scale-95");

    setTimeout(() => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.classList.remove("overflow-hidden");
      
      // Reset image and custom placeholder elements
      modalImg.src = "";
      const parent = modalImg.parentNode;
      const placeholder = parent.querySelector(".visual-placeholder");
      if (placeholder) placeholder.remove();
    }, 200);
  }

  closeBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);

  // Close on ESC key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}
