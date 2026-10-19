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

const categoriesOrder = ["ALL", "E-COMMERCE", "SHORT FORM", "AI PRODUCTION", "COMMERCIALS", "THUMBNAILS"];
const categoryIcons = {
  "ALL": "⊞",
  "E-COMMERCE": "◆",
  "SHORT FORM": "▶",
  "AI PRODUCTION": "✦",
  "COMMERCIALS": "▣",
  "THUMBNAILS": "◻"
};

// Start at index 2 ("SHORT FORM") or 0 ("ALL") — using circular wrap so cards always fan out on BOTH left and right sides!
let currentCategoryIndex = 0;

const gridEl = document.getElementById("archive-grid");
const catCards = document.querySelectorAll(".cf-card");
const statsTitle = document.getElementById("stats-title");
const statsCount = document.getElementById("stats-count");
const statsTools = document.getElementById("stats-tools");
const statsFormat = document.getElementById("stats-format");
const topbarCount = document.getElementById("topbar-count");
const headerFileCount = document.getElementById("header-file-count");
const progressFill = document.getElementById("cf-progress-fill");
const miniIcon = document.getElementById("cf-mini-icon");

function updateCategoryBadges() {
  catCards.forEach(card => {
    const cat = card.dataset.category;
    const count = cat === "ALL"
      ? portfolioItems.length
      : portfolioItems.filter(i => i.category === cat).length;
    const badge = card.querySelector(".cf-count-badge");
    if (badge) badge.textContent = `${count} FILES`;
  });
}

// Circular 3D Coverflow so there are ALWAYS cards fanned out on both the Left and Right (just like Spotify photo)
function updateCoverflow3D(activeIndex) {
  const total = catCards.length;

  catCards.forEach((card, idx) => {
    // Calculate circular shortest distance so cards wrap symmetrically Left (-2, -1) and Right (+1, +2)
    let offset = idx - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const absOffset = Math.abs(offset);

    if (offset === 0) {
      // Center Spotlight Card
      card.style.transform = `translateX(0px) translateZ(70px) rotateY(0deg) scale(1)`;
      card.style.zIndex = 30;
      card.style.opacity = 1;
      card.style.filter = "blur(0px) brightness(1)";
      card.style.pointerEvents = "auto";
      card.classList.add("active");
    } else if (absOffset <= 2) {
      // 2 Cards fanned out on the Left (-1, -2) and 2 Cards fanned out on the Right (+1, +2)
      const direction = Math.sign(offset);
      const translateX = direction * (155 + (absOffset - 1) * 115);
      const translateZ = -absOffset * 80;
      const rotateY = -direction * (22 + absOffset * 6);
      const scale = 1 - absOffset * 0.11;

      card.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
      card.style.zIndex = 30 - absOffset * 5;
      card.style.opacity = absOffset === 1 ? 0.88 : 0.55;
      card.style.filter = `blur(${absOffset === 1 ? 0.6 : 1.8}px) brightness(${absOffset === 1 ? 0.78 : 0.52})`;
      card.style.pointerEvents = "auto";
      card.classList.remove("active");
    } else {
      // Hidden back card
      card.style.transform = `translateX(0px) translateZ(-220px) scale(0.6)`;
      card.style.zIndex = 1;
      card.style.opacity = 0;
      card.style.pointerEvents = "none";
      card.classList.remove("active");
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

    row.addEventListener("mouseleave", () => { isDown = false; });
    row.addEventListener("mouseup", () => { isDown = false; });

    row.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - row.offsetLeft;
      const walk = (x - startX) * 1.8;
      row.scrollLeft = scrollLeft - walk;
    });

    row.addEventListener("wheel", (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
        e.preventDefault();
        row.scrollLeft += e.deltaX !== 0 ? e.deltaX : e.deltaY;
      }
    }, { passive: false });
  });
}

function renderArchive(filterCategory = "ALL") {
  if (!gridEl) return;

  const filtered = filterCategory === "ALL"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filterCategory);

  // Only split into TWO rows if there are at least 20 videos (10+ per row to fill the screen width).
  // Otherwise (like E-Commerce with 12 files), keep them in ONE full horizontal scrollable row!
  const useSingleRow = filtered.length < 20;
  const row1Items = useSingleRow ? filtered : filtered.filter((_, idx) => idx % 2 === 0);
  const row2Items = useSingleRow ? [] : filtered.filter((_, idx) => idx % 2 !== 0);

  // Only center the row if it has fewer than 10 cards (so 12 cards can scroll smoothly from the left)
  const rowClass = filtered.length < 10 ? "archive-row centered-row" : "archive-row";

  gridEl.innerHTML = `
    <div class="${rowClass}" id="archive-row-1">
      ${row1Items.map(createCardHTML).join("")}
    </div>
    ${row2Items.length > 0 ? `
    <div class="archive-row" id="archive-row-2">
      ${row2Items.map(createCardHTML).join("")}
    </div>` : ""}
  `;

  attachRowScrollListeners();

  const count = filtered.length;
  if (statsTitle) statsTitle.textContent = filterCategory === "ALL" ? "ALL ARCHIVE" : filterCategory;
  if (statsCount) statsCount.textContent = count;
  if (headerFileCount) headerFileCount.textContent = count;
  if (topbarCount) topbarCount.textContent = `ALL (${portfolioItems.length})`;

  const meta = categoryMetadata[filterCategory] || categoryMetadata["ALL"];
  if (statsTools) statsTools.textContent = meta.tools;
  if (statsFormat) statsFormat.textContent = meta.format;

  if (progressFill) {
    const pct = ((currentCategoryIndex + 1) / categoriesOrder.length) * 100;
    progressFill.style.width = `${pct}%`;
  }
  if (miniIcon) {
    miniIcon.textContent = categoryIcons[filterCategory] || "⊞";
  }
}

function setActiveCategory(category) {
  currentCategoryIndex = categoriesOrder.indexOf(category);
  if (currentCategoryIndex === -1) currentCategoryIndex = 0;
  updateCoverflow3D(currentCategoryIndex);
  renderArchive(category);
}

catCards.forEach(card => {
  card.addEventListener("click", () => {
    setActiveCategory(card.dataset.category);
  });
});

const viewAllBtn = document.querySelector(".view-all-btn");
if (viewAllBtn) {
  viewAllBtn.addEventListener("click", () => setActiveCategory("ALL"));
}

const resetBtn = document.getElementById("reset-cat");
if (resetBtn) {
  resetBtn.addEventListener("click", () => setActiveCategory("ALL"));
}

const prevBtn = document.getElementById("prev-cat");
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    currentCategoryIndex = (currentCategoryIndex - 1 + categoriesOrder.length) % categoriesOrder.length;
    setActiveCategory(categoriesOrder[currentCategoryIndex]);
  });
}

const nextBtn = document.getElementById("next-cat");
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    currentCategoryIndex = (currentCategoryIndex + 1) % categoriesOrder.length;
    setActiveCategory(categoriesOrder[currentCategoryIndex]);
  });
}

// Initial Render
updateCategoryBadges();
setActiveCategory("ALL");