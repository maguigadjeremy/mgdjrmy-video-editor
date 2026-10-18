const portfolioItems = [
  { id: 1, title: "QUICKSWEEP 4", category: "E-COMMERCE", format: "9:16 REEL" },
  { id: 2, title: "HIPPOCRATES DOC", category: "SHORT FORM", format: "9:16 REEL" },
  { id: 3, title: "COMPUTER SHOWCASE", category: "THUMBNAILS", format: "STATIC" },
  { id: 4, title: "LUXURY ESTATE 14", category: "COMMERCIALS", format: "9:16 REEL" },
  { id: 5, title: "SAVARY 7 AD", category: "E-COMMERCE", format: "9:16 REEL" },
  { id: 6, title: "FORCED FOR THE FARM", category: "SHORT FORM", format: "9:16 REEL" },
  { id: 7, title: "SHORTFORM PODCAST", category: "SHORT FORM", format: "9:16 REEL" },
  { id: 8, title: "LAST CROWS FILM", category: "AI PRODUCTION", format: "9:16 REEL" },
  { id: 9, title: "STRONG COFFEE AD", category: "E-COMMERCE", format: "9:16 REEL" },
  { id: 10, title: "AUTO REPAIR HOOK", category: "SHORT FORM", format: "9:16 REEL" },
  { id: 11, title: "FITNESS SHORT 8", category: "AI PRODUCTION", format: "9:16 REEL" },
  { id: 12, title: "PACKAGING REVEAL", category: "E-COMMERCE", format: "9:16 REEL" },
  { id: 13, title: "SLIMORA 8", category: "E-COMMERCE", format: "9:16 REEL" },
  { id: 14, title: "DECEMBER AI STORY", category: "AI PRODUCTION", format: "9:16 REEL" },
  { id: 15, title: "PONG SOLES 1", category: "THUMBNAILS", format: "STATIC" },
  { id: 16, title: "PRODUCT UNBOX CUT", category: "E-COMMERCE", format: "9:16 REEL" },
  { id: 17, title: "ORVIA LABS 5", category: "E-COMMERCE", format: "9:16 REEL" },
  { id: 18, title: "STREETWEAR AD 21", category: "THUMBNAILS", format: "STATIC" },
  { id: 19, title: "RS CLIENT 32", category: "COMMERCIALS", format: "9:16 REEL" },
  { id: 20, title: "TECHTERIO 10", category: "E-COMMERCE", format: "9:16 REEL" },
  { id: 21, title: "HEYGEN AVATAR V3", category: "AI PRODUCTION", format: "9:16 REEL" },
  { id: 22, title: "ROVINA 19", category: "E-COMMERCE", format: "9:16 REEL" },
  { id: 23, title: "RUNWAY GEN-3 OPENER", category: "AI PRODUCTION", format: "9:16 REEL" },
  { id: 24, title: "BEAUTY RESCUE", category: "THUMBNAILS", format: "STATIC" },
  { id: 25, title: "EDENVIA 18", category: "E-COMMERCE", format: "9:16 REEL" },
  { id: 26, title: "RETENTION PACING 09", category: "SHORT FORM", format: "9:16 REEL" },
  { id: 27, title: "KARTEL AD 1", category: "COMMERCIALS", format: "9:16 REEL" },
  { id: 28, title: "ELEVENLABS NARRATIVE", category: "AI PRODUCTION", format: "9:16 REEL" },
  { id: 29, title: "EDENVIA 32", category: "E-COMMERCE", format: "9:16 REEL" },
  { id: 30, title: "FOUNDER STORY CUT", category: "COMMERCIALS", format: "9:16 REEL" },
  { id: 31, title: "ADCHEFS 5", category: "SHORT FORM", format: "9:16 REEL" },
  { id: 32, title: "VIVINT 32", category: "SHORT FORM", format: "9:16 REEL" },
  { id: 33, title: "CIGNAL ULTRA", category: "THUMBNAILS", format: "STATIC" },
  { id: 34, title: "SLIMORA 3", category: "E-COMMERCE", format: "9:16 REEL" },
  { id: 35, title: "AI MOTION REEL 04", category: "AI PRODUCTION", format: "9:16 REEL" },
  { id: 36, title: "BRAND LAUNCH 26", category: "COMMERCIALS", format: "9:16 REEL" }
];

const categoryMetadata = {
  "ALL": { tools: "PREMIERE + CAPCUT + AI", format: "36 REELS & STATICS" },
  "E-COMMERCE": { tools: "PREMIERE PRO + AFTER EFFECTS", format: "DIRECT-RESPONSE ADS" },
  "SHORT FORM": { tools: "CAPCUT PRO + PREMIERE PRO", format: "9:16 TIKTOK / REELS" },
  "AI PRODUCTION": { tools: "HEYGEN + RUNWAY + ELEVENLABS", format: "AI SYNTHESIS & VOICE" },
  "COMMERCIALS": { tools: "PREMIERE PRO + COLOR GRADE", format: "BRAND & REAL ESTATE" },
  "THUMBNAILS": { tools: "PHOTOSHOP + AI GENERATIVE", format: "AD CREATIVES & COVERS" }
};

const gridEl = document.getElementById("archive-grid");
const catCards = document.querySelectorAll(".cat-card");
const statsTitle = document.getElementById("stats-title");
const statsCount = document.getElementById("stats-count");
const statsTools = document.getElementById("stats-tools");
const statsFormat = document.getElementById("stats-format");
const topbarCount = document.getElementById("topbar-count");
const headerFileCount = document.getElementById("header-file-count");

const categoriesOrder = ["ALL", "E-COMMERCE", "SHORT FORM", "AI PRODUCTION", "COMMERCIALS", "THUMBNAILS"];
let currentCategoryIndex = 0;

// Update category card count badges dynamically on load
function updateCategoryBadges() {
  catCards.forEach(card => {
    const cat = card.dataset.category;
    const count = cat === "ALL"
      ? portfolioItems.length
      : portfolioItems.filter(i => i.category === cat).length;
    const badgeSpans = card.querySelectorAll(".cat-card-top span");
    if (badgeSpans.length > 1) {
      badgeSpans[1].innerHTML = `&times;${count}`;
    }
  });
}

function createCardHTML(item) {
  return `
    <article class="work-card">
      <div class="work-thumb">
        <span class="play-mini">&#9654;</span>
        <span class="thumb-code">FILE #${String(item.id).padStart(2, '0')}</span>
        <span class="thumb-code">${item.format}</span>
      </div>
      <div class="work-info">
        <span class="work-cat">${item.category}</span>
        <h4 class="work-title">${item.title}</h4>
      </div>
    </article>
  `;
}

// Attach independent click-and-drag + horizontal wheel scrolling to each row
function attachRowScrollListeners() {
  const rows = document.querySelectorAll(".archive-row");

  rows.forEach(row => {
    let isDown = false;
    let startX;
    let scrollLeft;

    row.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - row.offsetLeft;
      scrollLeft = row.scrollLeft;
    });

    row.addEventListener("mouseleave", () => {
      isDown = false;
    });

    row.addEventListener("mouseup", () => {
      isDown = false;
    });

    row.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - row.offsetLeft;
      const walk = (x - startX) * 1.8;
      row.scrollLeft = scrollLeft - walk;
    });

    // Optional: Allow Shift + Mouse Wheel or Horizontal Trackpad swipe per row
    row.addEventListener("wheel", (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
        e.preventDefault();
        row.scrollLeft += e.deltaX !== 0 ? e.deltaX : e.deltaY;
      }
    }, { passive: false });
  });
}

function renderArchive(filterCategory = "ALL") {
  const filtered = filterCategory === "ALL"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filterCategory);

  // Split items evenly between Row 1 (even index) and Row 2 (odd index)
  const row1Items = filtered.filter((_, idx) => idx % 2 === 0);
  const row2Items = filtered.filter((_, idx) => idx % 2 !== 0);

  gridEl.innerHTML = `
    <div class="archive-row" id="archive-row-1">
      ${row1Items.map(createCardHTML).join("")}
    </div>
    ${row2Items.length > 0 ? `
    <div class="archive-row" id="archive-row-2">
      ${row2Items.map(createCardHTML).join("")}
    </div>` : ""}
  `;

  // Activate independent scrolling for both rows
  attachRowScrollListeners();

  // Update Stats & Counters
  const count = filtered.length;
  statsTitle.textContent = filterCategory === "ALL" ? "ALL FILES" : filterCategory;
  statsCount.textContent = count;
  topbarCount.textContent = `${count} FILES`;
  headerFileCount.textContent = count;

  const meta = categoryMetadata[filterCategory] || categoryMetadata["ALL"];
  statsTools.textContent = meta.tools;
  statsFormat.textContent = meta.format;
}

function setActiveCategory(category) {
  currentCategoryIndex = categoriesOrder.indexOf(category);
  catCards.forEach(card => {
    card.classList.toggle("active", card.dataset.category === category);
  });
  renderArchive(category);
}

catCards.forEach(card => {
  card.addEventListener("click", () => {
    setActiveCategory(card.dataset.category);
  });
});

document.querySelector(".view-all-btn").addEventListener("click", () => {
  setActiveCategory("ALL");
});

document.getElementById("reset-cat").addEventListener("click", () => {
  setActiveCategory("ALL");
});

document.getElementById("prev-cat").addEventListener("click", () => {
  currentCategoryIndex = (currentCategoryIndex - 1 + categoriesOrder.length) % categoriesOrder.length;
  setActiveCategory(categoriesOrder[currentCategoryIndex]);
});

document.getElementById("next-cat").addEventListener("click", () => {
  currentCategoryIndex = (currentCategoryIndex + 1) % categoriesOrder.length;
  setActiveCategory(categoriesOrder[currentCategoryIndex]);
});

// Initial Setup
updateCategoryBadges();
renderArchive("ALL");