// Projects Detailed Database (8 projects matching source file)
const projectsData = {
  "rc-car": {
    title: "3D-Printed RC Car",
    status: "completed",
    result: "I built a functional 3D-printed RC car with my friend.",
    skills: ["CAD", "Radio Frequency Optimisation", "Basic Soldering", "Circuit Making"],
    challenges: "Designing CAD independently for the first time and maximising the controller's limited RF range as well as my first time soldering.",
    image: "./assets/images/rc_car.png",
    fallbackGradient: "linear-gradient(135deg, #1C1917 0%, #0C0A09 100%)",
    links: []
  },
  "weather-balloon": {
    title: "High-Altitude Weather Balloon (IB Personal Project)",
    status: "completed",
    result: "I independently assembled a weather balloon payload and successfully launched and predicted the trajectory.",
    skills: ["Independent Research", "Project Planning", "High-Altitude Logistics", "Data Trajectory Prediction"],
    challenges: "Independent project execution and troubleshooting a payload camera malfunction caused by pre-launch impact shock, which led to no footage capture during flight.",
    image: "./assets/images/weather_balloon.png",
    fallbackGradient: "linear-gradient(135deg, #1C1917 0%, #0C0A09 100%)",
    links: [
      { text: "View MYP PP Report", url: "https://docs.google.com/document/d/1E-pHnjvshnX2U9S1n7bHIt4PVeMTgcQoYrmHkb7EijA/edit?usp=sharing", type: "document" },
      { text: "Grade: Criteria 6-6-6 Report", url: "#", type: "grade" }
    ]
  },
  "axiom-chess": {
    title: "Axiom Chess Engine",
    status: "wip", // Marked as In Progress to reflect active algorithmic live testing
    result: "Developed a Python-based chess engine capable of defeating friends and family. Integrated it with the Lichess API to test against bots.",
    skills: ["Python", "UI Design", "Algorithm Optimisation", "API Integration", "Lichess API"],
    challenges: "Extensive live testing to identify and patch the bot's strategic flaws under real-time constraints.",
    image: "./assets/images/axiom_chess.png",
    fallbackGradient: "linear-gradient(135deg, #292524 0%, #0C0A09 100%)",
    links: [
      { text: "View GitHub Repository", url: "https://github.com/matiasd2028-boop/ChessBot.py", type: "github" }
    ]
  },
  "openclaw-ai": {
    title: "Openclaw AI Assistant",
    status: "wip", // Marked as In Progress to highlight ongoing platform additions
    result: "A fully functional, free and power-efficient personal AI assistant hosted on an SBC.",
    skills: ["SBC Usage (Raspberry Pi 4B)", "AI Agent Deployment", "API Integration", "System Administration"],
    challenges: "Ensuring all external platforms synced properly into a low-power, free personal AI agent with reliable uptime.",
    image: "./assets/images/openclaw_ai.png",
    fallbackGradient: "linear-gradient(135deg, #292524 0%, #1C1917 100%)",
    links: []
  },
  "custom-nas": {
    title: "Custom NAS Server",
    status: "completed",
    result: "Fully functional local server hosting an Immich instance for photo backup.",
    skills: ["Hardware Reutilization", "Configuring Raspberry Pi", "Data Networking", "Linux Server Admin"],
    challenges: "Integrating a recycled laptop HDD with an SBC to create a reliable and secure storage network.",
    image: "./assets/images/custom_nas.png",
    fallbackGradient: "linear-gradient(135deg, #1C1917 0%, #0C0A09 100%)",
    links: []
  },
  "solar-tracker": {
    title: "Automated Sun-Tracking Solar Panel",
    status: "completed",
    result: "Connected solar sensors to an Arduino, driving a servo to align the solar panel and charge a self-sustaining dual-USB battery.",
    skills: ["Basic Coding", "Microcontroller (Arduino)", "Hardware Optimisation", "Renewable Integration"],
    challenges: "Configuring hardware within the reach limits of available cables and layout cable management for clean aesthetics.",
    image: "./assets/images/solar_tracker.png",
    fallbackGradient: "linear-gradient(135deg, #1C1917 0%, #0C0A09 100%)",
    links: []
  },
  "fraud-detector": {
    title: "Credit Card Fraud Detector",
    status: "completed",
    result: "Built a credit card fraud detector ML algorithm using a Kaggle dataset, achieving all performance targets.",
    skills: ["Machine Learning", "Python Programming", "Data Understanding & Wrangling", "Scikit-Learn"],
    challenges: "Handling class imbalance inside data and optimizing features to prevent high false-positive fraud flags.",
    image: "", // Fallback abstract graphic container
    fallbackGradient: "linear-gradient(135deg, #292524 0%, #0C0A09 100%)",
    links: [
      { text: "View GitHub Repository", url: "https://github.com/matiasd2028-boop/Credit-Card-Fraud-Detector/tree/main", type: "github" }
    ]
  },
  "world-cup": {
    title: "World Cup Predictor",
    status: "completed",
    result: "Created a Python-based prediction engine for the World Cup, outputting tournament probabilities and visual charts.",
    skills: ["Python", "Data Wrangling", "Machine Learning", "Data Visualisation"],
    challenges: "Sourcing high-quality data while events unfolded live, and training models to adapt dynamically as the tournament progressed.",
    image: "", // Fallback abstract graphic container
    fallbackGradient: "linear-gradient(135deg, #1C1917 0%, #0C0A09 100%)",
    links: [
      { text: "View GitHub Repository", url: "https://github.com/matiasd2028-boop/World-Cup-Predictor", type: "github" }
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
        t.classList.remove("text-amber-500", "border-amber-500", "bg-amber-950/20");
        t.classList.add("text-gray-400", "border-transparent");
      });
      tab.classList.remove("text-gray-400", "border-transparent");
      tab.classList.add("text-amber-500", "border-amber-500", "bg-amber-950/20");

      const filterValue = tab.getAttribute("data-filter");

      cards.forEach(card => {
        const cardStatus = card.getAttribute("data-status");

        if (filterValue === "all" || cardStatus === filterValue) {
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
  const modalStatus = document.getElementById("modal-status");
  const modalResult = document.getElementById("modal-result");
  const modalSkills = document.getElementById("modal-skills");
  const modalChallenges = document.getElementById("modal-challenges");
  const modalLinks = document.getElementById("modal-links");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-project-id");
      const data = projectsData[id];

      if (!data) return;

      // Populate Title & Status Badge
      modalTitle.innerText = data.title;
      if (data.status === "completed") {
        modalStatus.innerText = "Completed";
        modalStatus.className = "px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 badge-completed";
      } else {
        modalStatus.innerText = "Work In Progress";
        modalStatus.className = "px-2.5 py-0.5 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 badge-wip";
      }

      // Populate Image or Fallback Gradient
      if (data.image) {
        modalImg.src = data.image;
        modalImg.alt = data.title;
        modalImg.style.background = "";
        modalImg.classList.remove("flex", "items-center", "justify-center");
        modalImg.style.display = "block";
      } else {
        modalImg.src = "";
        modalImg.alt = "";
        modalImg.style.display = "none";
        // Create an attractive geometric SVG background representation
        const placeholderDiv = document.createElement("div");
        placeholderDiv.className = "w-full h-full flex flex-col items-center justify-center p-8 text-center text-gray-400 font-medium";
        placeholderDiv.style.background = data.fallbackGradient;
        placeholderDiv.innerHTML = `
          <div class="p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3">
            <svg class="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </div>
          <span class="text-white text-lg font-bold">${data.title}</span>
          <span class="text-xs text-amber-400 mt-1 uppercase tracking-widest font-semibold">Visual Abstract Placeholder</span>
        `;
        
        // Clear previous visual block inside container and append the new one
        const imgParent = modalImg.parentNode;
        const oldPlaceholder = imgParent.querySelector(".visual-placeholder");
        if (oldPlaceholder) oldPlaceholder.remove();
        
        placeholderDiv.classList.add("visual-placeholder", "w-full", "h-64", "md:h-80");
        imgParent.insertBefore(placeholderDiv, modalImg);
      }

      // Populate Result / Overview
      modalResult.innerText = data.result;

      // Populate Skills Chips
      modalSkills.innerHTML = "";
      data.skills.forEach(skill => {
        const chip = document.createElement("span");
        chip.className = "px-3 py-1 text-xs rounded-lg bg-[#14151a] border border-stone-800 text-amber-400/90 font-medium shadow-sm";
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
          btn.className = "flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-md ";

          if (link.type === "github") {
            btn.className += "bg-[#14151a] hover:bg-stone-900 text-white border border-stone-800 shadow-stone-950/50 hover:shadow-amber-500/5";
            btn.innerHTML = `
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.479C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd"/></svg>
              <span>GitHub Code</span>
            `;
          } else if (link.type === "document") {
            btn.className += "bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-[#0c0a09] shadow-amber-900/10 hover:shadow-amber-500/10";
            btn.innerHTML = `
              <svg class="w-5 h-5 text-[#0c0a09]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
              <span>View Report</span>
            `;
          } else if (link.type === "grade") {
            btn.href = "javascript:void(0)";
            btn.className = "bg-emerald-950/20 hover:bg-emerald-950/30 text-emerald-400 border border-emerald-900/40 cursor-default";
            btn.innerHTML = `
              <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>IB Grade: 6 / 6 / 6 (Criterion A, B, C)</span>
            `;
          }
          modalLinks.appendChild(btn);
        });
      }

      // Show Modal with animation
      document.body.classList.add("overflow-hidden"); // Lock body scroll
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
      document.body.classList.remove("overflow-hidden"); // Restore scroll
      
      // Reset image and custom placeholder elements
      modalImg.src = "";
      const parent = modalImg.parentNode;
      const placeholder = parent.querySelector(".visual-placeholder");
      if (placeholder) placeholder.remove();
    }, 300); // Align with CSS transitions
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