// ==========================================
// VIDEOS: Google Drive files (one cut per SMN ad, HOOK 1 where there are hook variations)
// ==========================================
// Each file must be shared as "Anyone with the link can view".
// `link` takes a full Drive share link ("https://drive.google.com/file/d/FILE_ID/view") or just the FILE_ID.
// Long Forms / Static Ads stay hidden in the category picker until they have at least one item.
// The main showreel is self-hosted (videos/showreel.mp4, a web copy of the master) and plays inside the tablet.

// Full Drive folders, for anyone who wants to browse every version
const DRIVE_FOLDERS = {
  "ALL": "https://drive.google.com/drive/folders/1N7qMV38LzxLYtYrnUBb-5w1abYUUfzTp",
  "UGC ADS": "https://drive.google.com/drive/folders/1H9MjyvrL2Y-MUnl6ICRkfpHbFMxMU0HI",
  "SHORT FORM": "https://drive.google.com/drive/folders/1_leKcgPElJXaGuOK3FwesmtUSgfqVZcw",
  "AI ANIMATION": "https://drive.google.com/drive/folders/1ujqHmwqjMvADzeWcTxrESMZRJbVR92IC",
  "LONG FORMS": "https://drive.google.com/drive/folders/1sYq63sSMmlcy0CHrie0oXN1FLbdzN7mT",
  "STATIC ADS": "https://drive.google.com/drive/folders/1Lafh5ZT6xA1zpYlfC00tjcXFR945naex"
};

// [brand, SMN number, Drive file ID]
const UGC_ADS = [
  ["PRIMAL", 1, "1GWh_xtZ-QGIn77wqnbyLiNhhbgKBJEhu"],
  ["PRIMAL", 2, "1keCo1fLYDeL_UakEWWJ0WCIGtFkn0_Qu"],
  ["PRIMAL", 3, "1ritJdDUKDsIUfYYJNLuKHxlqlQEMqtLY"],
  ["PRIMAL", 4, "1SU1O97cUbt-fVSjRTmg14xSVqSeGtmTN"],
  ["PRIMAL", 5, "1qwTm-hEysJvmlJIvCkKrjvF_a2Z9H3d8"],
  ["PRIMAL", 6, "1e--clCZT4AFK2Adv3CoWrsJfrR_eImmm"],
  ["PRIMAL", 7, "19_bnKM0oihjdIyeII_Em0d0mrmc76Zd8"],
  ["PRIMAL", 8, "1MHwRjDzYUN-6Gsjja3VO_6rWSZO6OJTO"],
  ["PRIMAL", 9, "1B3BI0EmQzQo6PkGfl2-OP98GmuhZ4UG-"],
  ["PRIMAL", 10, "1Nzfhd2E_xf5OgaNCMgC0_OpfCQxG-1Q1"],
  ["FREEBIRD", 16, "1TD_cIvKQuhkVzW23ycmgDoJNh8WmFuBz"],
  ["FREEBIRD", 17, "1wM3AP1AgJiNjhj4KxwNP8lS9agmYbLzk"],
  ["FREEBIRD", 18, "1jgnSngukJqBhdUndbLInrCv-dj0H-rbj"],
  ["FREEBIRD", 21, "1lKI6FdLjYWpMzSG7ZxcnrENDDOiYhqi8"],
  ["FREEBIRD", 22, "1Aphw7yDh7ptpjm0Dvxjzp_zjsvUA1gWd"],
  ["FREEBIRD", 23, "1QUJ-PILOkG6Kt8T3e6wUvWhnPra7yYgb"],
  ["FREEBIRD", 24, "1mALVoi5CQTsGa3Ct8FLfHQ2hGPUqK7Dd"],
  ["FREEBIRD", 25, "14q-nIfmOgRttgqRNX6UNYSF87gTDFsec"],
  ["PREGEN", 1, "1fHov4NvSnB5v0n02OidkWMjn52tt_K_f"],
  ["PREGEN", 2, "1h2Mu6Op-g1Szu0Ztfy-xgUGWaWUx74wv"],
  ["PREGEN", 3, "1yZjJQZ_gJMVM4j15AH6l8sO4EhjZ3LRr"],
  ["PREGEN", 4, "1J6bryVIpslRBdK080g0z18Qydhzqcl7S"],
  ["PREGEN", 5, "1ZmeWgpX8d8CRUT4YqHwywPwCCiMWZuJW"],
  ["ENERGYBITS", 14, "1FIUqNYEuoTwNYFgacMze0Ty9-9lSVXJ-"],
  ["UPROOT CLEAN", 1, "1cnfBRJ2X85Wh2946GtV0VcmFYeitS6lg"]
];

const AI_ANIMATION = [
  ["ENERGYBITS", 6, "1emwpBq2kvDXYHDZyldG1vee-TJWgCWCR"],
  ["ENERGYBITS", 7, "1UDLr4y8-uUEnj1ZktQD7Tf2y2nAkQaM8"],
  ["ENERGYBITS", 8, "1PGFUFCT544TG7X0kVFrPj7zkeZBbjjd-"],
  ["ENERGYBITS", 9, "1ycxUoI4q4hm9Lyf8m559NDqj4Rdx66gg"],
  ["ENERGYBITS", 10, "1W1g2yiyMcEoPegioi0MOIo9x7HrhKLdE"],
  ["ENERGYBITS", 11, "17nJKFuCdP5TwVf5wWDdXlKteyy6ApA-8"],
  ["ENERGYBITS", 12, "1708mz2cjSgKVsu4cEr33BJze92uWKkMZ"],
  ["ENERGYBITS", 13, "1fMr32uVW2fzXq2yYe1i-iUliUNVEVHJa"],
  ["ENERGYBITS", 15, "1YT5M6a7kNe_5NMM3mvFkbCH9woF-v8SX"],
  ["NEUROBLAST", 7, "189HxxWDwLyMnekfK33vQse9-hp6eg5Sw"],
  ["NEUROBLAST", 8, "10Nz7SLlicPJPVCTMc6-p3pYskdSUJDT-"],
  ["NEUROBLAST", 9, "1r13J4nMXh4W33EFS0rBdZAet2Ir7LXM5"],
  ["NEUROBLAST", 13, "13LS-XR8HYE8eujnrR1VXNS8RZ2UwRUwN"],
  ["NEUROBLAST", 14, "1MasIuhYTeA1uTdkadTrc5YjIk_nGCl6o"],
  ["NEUROBLAST", 15, "1fhTPXyAlc5fD37_zjQ6aMm9jXLWr6_Ad"],
  ["NEUROBLAST", 17, "1NOIeCpHgWRMcw5F-vCBBHaRm5RmPvKkg"],
  ["NEUROBLAST", 19, "1XVB49USwz_Vo5b8BHz-peVxb9ibrPJ_u"],
  ["FREEBIRD", 11, "1lKgjdg_dwenranNQxWnlHlfhwzjfUukK"],
  ["FREEBIRD", 12, "1pzhfATbVqNTbDa3Iqv4IEmYHCT85o3Z8"],
  ["FREEBIRD", 14, "1cWO84S1VdiAsczilhscnrfswge6lE_Vm"],
  ["FREEBIRD", 15, "1eXna2NnT_WaB9to0rNNFQNf8KuE60z6_"],
  ["FREEBIRD", 19, "1VdB5MlvZ1KkRjl-LY22qAHXajdNvRzCj"],
  ["FREEBIRD", 20, "1s0NSAqmtEDbP7pXG2pSQnKRsZ07MVpYw"],
  ["NERVECREAM", 4, "1cR4F8gJvGE0orjpciSeqIrmb_x5eoXcN"]
];

// [title, Drive file ID] — Dad Fitness series
const SHORT_FORM = [
  ["DEPLETED DAD SYNDROME", "131QcCu6bOK8SCPLMtFWUfslWZN8szxmK"],
  ["DISTRACTED PRESENCE", "1E-l-_y5g7EkM5x9YOvkp2s8WcizgD6_K"],
  ["PATERNAL POSTPARTUM", "1pNSfNE53ZUVOLS1xlzI1KQlNhLptyEGx"],
  ["ROLE-SWITCHING", "1xJ6IYSvWOC7fwSv71BcyhV-00Ff7oKA2"],
  ["THE ALCOHOL TRADE-OFF", "1XK_pIqCWGMCEK9s9zAZYX-MkonYuIVZc"],
  ["THE BEDTIME STORY TRADE-OFF", "1ezyTgeo_3G29DeZm58EfSWwwS6RN9PkC"],
  ["THE CAFFEINE CRASH", "1vFPobdF3O05lLFu4V2Y1wcREUCiBfXkb"],
  ["THE CARDIO FALLACY", "1BALUrmK2xY-PiSBrAQypy3g-I_HKed6-"],
  ["THE EFFICIENCY LOOPHOLE", "1C7XduySol2pGNseJIjRfARrNmh7tjAVm"],
  ["THE EMERGENCY STATE", "18VAeymSyS4lozVbvIjhOdbcsuIl7ri6C"],
  ["THE HUNGER LIE", "18ydAmyVsuTplQPIq2LKquHqHL2tY4f7f"],
  ["THE IDENTITY HOOK", "1ibFf5mRiNpAb3S--lIHiGg9ZmkoRgEiI"],
  ["THE PATERNAL GUILT", "16jQxkqTzTiITAxorUBI04EhqSQ-BDeI7"],
  ["THE PROTEIN FIRST LOOPHOLE", "1h5TzB9LYNirtYaTIIdbqIRxyhZBmGv6q"],
  ["THE ROCK MENTALITY", "1JBBf1xiC1JyWrH4x8WKE7nYNju0su9ek"],
  ["THE SCALE TRASH", "1V36OjFOgNszNnvf5mnUd3PlkZ6VthJFr"],
  ["THE SCHOOL RUN SECRET", "1IQL-yOHEJdqf2XY2yqR3O3nrVZcf66bZ"],
  ["THE SITTING TAX", "1qFsdrcO-7lFv9ntZZzstEnM1ZisY8Tp-"],
  ["THE SLEEP LOOPHOLE", "1aYrICNYpH1nyq7Bt-P6p1pHR7kwPjJcx"],
  ["THE SON EFFECT", "15-WijxjQK3Workws2u5sw0CtCnKHgDjb"],
  ["THE TUPPERWARE GUY", "1nA5YVN-4wepK75yzgOqnPnt_WFpTC6EO"],
  ["THE ULTIMATE BS EXCUSE", "1-vWZ4dInOvI0ak386rJIuI1XLXr1yMAD"],
  ["THE ULTIMATE BS EXCUSE V2", "1px47rX9WrRx466nKk6Q1nmRAnxIiMEpF"],
  ["WORKPLACE SAFETY", "1lthEQYdcHRKbyWMuJrR1XUiLOccobUWx"],
  ["YOU ARE A DAD", "1UIJ2cqpJ7OF0tESPRW87k1Tu3Y_akwRH"]
];

// [series, number, Drive file ID] — selected statics. The viewer image is self-hosted in images/statics/<FILE_ID>.jpg
const STATIC_ADS = [
  ["MOUTHWASH", "A-03", "1vHF_MKuF3Yu27UY9nP32plyJQFqfjpJh"],
  ["MOUTHWASH", "A-06", "1O_PbI7O8_52I2ScScbSpyH4W7ntn-RfL"],
  ["MOUTHWASH", "A-09", "1t3NSqrkO7puEzX_bwUK5IJr_a4j7DUMZ"],
  ["MOUTHWASH", "A-13", "1-Dr4s5OiCmTgsY5udTNW2xOQFEG5osbQ"],
  ["MOUTHWASH", "A-16", "19SKHO44prLHffERw9PIb81xk7ICmgzzO"],
  ["MOUTHWASH", "A-17", "1pedVWBgpoUTAfwZt1N-EAXmXCuwq3XlB"],
  ["SNEAKERS", "B-02", "1Pc4JzQI0E5BwkhU1TVevdumlCBrsvS1F"],
  ["SNEAKERS", "B-04", "16BzosJgn6gcCeROCiMer-PmPG-dOl9Qu"],
  ["SNEAKERS", "B-07", "1ghgEBKxp6He27ql7KUoTSZ1rUb1hp5QQ"],
  ["SNEAKERS", "B-11", "1iybdVM3UXbtV1cZ1SIqrjkqgWlb8D_BO"],
  ["SNEAKERS", "B-13", "1FpgnyPAK6dFLKVjaHC_3amqAm87OYyyk"],
  ["SNEAKERS", "B-15", "1YLWet1DUt6zYRuiq-8Im8rhBaHueC9Jy"]
];

// Add Long Forms ("16:9 VIDEO") here as { title, category, format, link }
const EXTRA_ITEMS = [];

const portfolioItems = [
  ...UGC_ADS.map(([brand, smn, link]) => ({ title: `${brand} · AD ${String(smn).padStart(2, "0")}`, category: "UGC ADS", format: "9:16 REEL", link })),
  ...AI_ANIMATION.map(([brand, smn, link]) => ({ title: `${brand} · AD ${String(smn).padStart(2, "0")}`, category: "AI ANIMATION", format: "9:16 REEL", link })),
  ...SHORT_FORM.map(([title, link]) => ({ title, category: "SHORT FORM", format: "9:16 REEL", link })),
  ...STATIC_ADS.map(([series, num, link]) => ({ title: `${series} · ${num}`, category: "STATIC ADS", format: "STATIC", link, image: `images/statics/${link}.jpg` })),
  ...EXTRA_ITEMS
].map((item, i) => ({ id: i + 1, ...item }));

const categoryMetadata = {
  "ALL": { tools: "CAPCUT + CANVA + AI", format: `${portfolioItems.length} REELS & ADS` },
  "UGC ADS": { tools: "CAPCUT + NANO BANANA PRO", format: "UGC & DIRECT-RESPONSE" },
  "SHORT FORM": { tools: "CAPCUT + DESCRIPT", format: "9:16 TIKTOK / REELS" },
  "AI ANIMATION": { tools: "HEYGEN + HIGGSFIELD + ELEVENLABS", format: "AI ANIMATION & VOICE" },
  "LONG FORMS": { tools: "CAPCUT + COLOR GRADE", format: "16:9 BRAND & REAL ESTATE" },
  "STATIC ADS": { tools: "CANVA + NANO BANANA PRO", format: "AD CREATIVES & COVERS" }
};

// "All" view deals one card from each category in turn so the mix stays varied
const interleavedItems = (() => {
  const byCategory = {};
  portfolioItems.forEach(item => (byCategory[item.category] ||= []).push(item));
  const queues = Object.values(byCategory);
  const out = [];
  while (queues.some(q => q.length)) queues.forEach(q => q.length && out.push(q.shift()));
  return out;
})();

// Categories with no projects yet are dropped from the picker (and come back once items are added)
const categoriesOrder = ["ALL", "UGC ADS", "SHORT FORM", "AI ANIMATION", "LONG FORMS", "STATIC ADS"]
  .filter(cat => cat === "ALL" || portfolioItems.some(item => item.category === cat));

document.querySelectorAll(".cf-card").forEach(card => {
  if (!categoriesOrder.includes(card.dataset.category)) card.remove();
});
document.querySelectorAll(".cf-card .cf-tag").forEach((tag, i) => {
  tag.textContent = `PLAYLIST // ${String(i + 1).padStart(2, "0")}`;
});
const categoryIcons = {
  "ALL": "⊞",
  "UGC ADS": "◆",
  "SHORT FORM": "▶",
  "AI ANIMATION": "✦",
  "LONG FORMS": "▣",
  "STATIC ADS": "◻"
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

const coverflowStage = document.getElementById("category-cards");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function updateCoverflow3D(activeIndex) {
  const total = catCards.length;
  // Tighten the fan on narrow screens so side cards stay inside the stage
  const spread = coverflowStage ? Math.min(1, coverflowStage.clientWidth / 820) : 1;

  catCards.forEach((card, idx) => {
    let offset = idx - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const absOffset = Math.abs(offset);

    if (offset === 0) {
      // Center Spotlight Card
      card.style.transform = `perspective(1200px) translateX(0px) rotateY(0deg) scale(1)`;
      card.style.zIndex = 30;
      card.style.opacity = 1;
      card.style.filter = "blur(0px) brightness(1)";
      card.style.pointerEvents = "auto";
      card.classList.add("active");
    } else if (absOffset <= 2) {
      // Side Fan Cards (Left & Right) — using per-card perspective so hitboxes stay 100% clickable!
      const direction = Math.sign(offset);
      const translateX = direction * (165 + (absOffset - 1) * 115) * spread;
      const rotateY = -direction * (24 + absOffset * 6);
      const scale = 1 - absOffset * 0.14;

      card.style.transform = `perspective(1200px) translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`;
      card.style.zIndex = 30 - absOffset * 5;
      card.style.opacity = absOffset === 1 ? 0.88 : 0.55;
      card.style.filter = `blur(${absOffset === 1 ? 0.4 : 1.5}px) brightness(${absOffset === 1 ? 0.8 : 0.55})`;
      card.style.pointerEvents = "auto";
      card.classList.remove("active");
    } else {
      // Hidden back card
      card.style.transform = `perspective(1200px) translateX(0px) scale(0.5)`;
      card.style.zIndex = 1;
      card.style.opacity = 0;
      card.style.pointerEvents = "none";
      card.classList.remove("active");
    }
  });
}

// Pull the file ID out of any Google Drive link format (or accept a bare ID)
function driveId(link) {
  if (!link) return null;
  const match = link.match(/\/d\/([\w-]{10,})/) || link.match(/[?&]id=([\w-]{10,})/);
  if (match) return match[1];
  return /^[\w-]{10,}$/.test(link.trim()) ? link.trim() : null;
}

function driveThumb(id, width = 480) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;
}

// Thumbnails are saved locally in images/thumbs/<FILE_ID>.jpg; if one is missing, try Drive once, then show the plain tile
const THUMB_VERSION = 2; // bump after re-downloading thumbnails so browsers drop cached copies
const THUMB_ONERROR = "if (this.dataset.fallback) { this.src = this.dataset.fallback; this.removeAttribute('data-fallback'); } else { this.remove(); }";

function createCardHTML(item) {
  const id = driveId(item.link);
  return `
    <article class="work-card${id ? " has-video" : ""}" data-id="${item.id}"${id ? ` tabindex="0" role="button" aria-label="Play ${item.title}"` : ""}>
      <div class="work-thumb">
        ${id ? `<img class="work-thumb-img" src="images/thumbs/${id}.jpg?v=${THUMB_VERSION}" data-fallback="${driveThumb(id)}" alt="" loading="lazy" onerror="${THUMB_ONERROR}">` : ""}
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

let autoScrollAnimationId = null;

// Build an infinitely repeatable set of cards for a row
function buildInfiniteRowHTML(items) {
  if (items.length === 0) return "";

  // Ensure the base set has at least 12 cards so it spans wider than the viewport
  let baseSet = [...items];
  while (baseSet.length < 12) {
    baseSet = baseSet.concat(items);
  }

  // Triple the base set: [Left Buffer] + [Center Active Track] + [Right Buffer]
  const infiniteSet = [...baseSet, ...baseSet, ...baseSet];
  return infiniteSet.map(createCardHTML).join("");
}

function attachRowScrollListeners() {
  if (autoScrollAnimationId) {
    cancelAnimationFrame(autoScrollAnimationId);
  }

  const rows = document.querySelectorAll(".archive-row");
  const rowStates = [];

  rows.forEach((row, index) => {
    const state = {
      el: row,
      isDown: false,
      isHovered: false,
      startX: 0,
      scrollLeft: 0,
      // Row 1 drifts right-to-left (+0.35px/frame), Row 2 drifts left-to-right (-0.35px/frame)
      speed: index % 2 === 0 ? 0.35 : -0.35,
      pos: 0,
      pausedUntil: 0 // Auto-drift pauses while the user scrolls by touch / trackpad
    };

    // Start in the middle third so the user can immediately drag left OR right infinitely
    requestAnimationFrame(() => {
      const oneThird = row.scrollWidth / 3;
      row.scrollLeft = oneThird;
      state.pos = oneThird;
    });

    // Keep scroll position endlessly wrapped inside the middle third
    const wrapInfiniteScroll = () => {
      const oneThird = row.scrollWidth / 3;
      if (oneThird <= 0) return;

      let shift = 0;
      if (row.scrollLeft <= 10) shift = oneThird;
      else if (row.scrollLeft >= oneThird * 2 - 10) shift = -oneThird;
      if (shift === 0) return;

      row.scrollLeft += shift;
      state.scrollLeft += shift; // Keep an in-progress mouse drag anchored after the jump
      state.pos = row.scrollLeft;
    };

    // Mouse hover / drag only — touch devices use native scrolling (handled below)
    row.addEventListener("pointerenter", (e) => {
      if (e.pointerType === "mouse") state.isHovered = true;
    });

    row.addEventListener("pointerleave", (e) => {
      if (e.pointerType !== "mouse") return;
      state.isHovered = false;
      state.isDown = false;
    });

    row.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse") return;
      state.isDown = true;
      state.dragged = false;
      state.startX = e.pageX;
      state.scrollLeft = row.scrollLeft;
    });

    // A click that ends a drag shouldn't open a video
    row.addEventListener("click", (e) => {
      if (state.dragged) {
        e.stopPropagation();
        state.dragged = false;
      }
    }, true);

    row.addEventListener("pointerup", (e) => {
      if (e.pointerType !== "mouse") return;
      state.isDown = false;
      state.pos = row.scrollLeft;
    });

    row.addEventListener("pointermove", (e) => {
      if (!state.isDown) return;
      e.preventDefault();
      if (Math.abs(e.pageX - state.startX) > 5) state.dragged = true;
      const walk = (e.pageX - state.startX) * 1.6;
      row.scrollLeft = state.scrollLeft - walk;
      wrapInfiniteScroll();
      state.pos = row.scrollLeft;
    });

    // Touch: hold the drift while a finger is on the row
    row.addEventListener("touchstart", () => {
      state.pausedUntil = Infinity;
    }, { passive: true });

    row.addEventListener("touchend", () => {
      state.pausedUntil = performance.now() + 1500;
      state.pos = row.scrollLeft;
    }, { passive: true });

    // Any scroll we didn't cause (swipe momentum, trackpad) pauses the drift and keeps the loop wrapped
    row.addEventListener("scroll", () => {
      if (Math.abs(row.scrollLeft - state.pos) < 2) return;
      if (state.pausedUntil !== Infinity) state.pausedUntil = performance.now() + 1500;
      wrapInfiniteScroll();
      state.pos = row.scrollLeft;
    }, { passive: true });

    row.addEventListener("wheel", (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
        e.preventDefault();
        row.scrollLeft += e.deltaX !== 0 ? e.deltaX : e.deltaY;
        wrapInfiniteScroll();
        state.pos = row.scrollLeft;
      }
    }, { passive: false });

    rowStates.push(state);
  });

  // Minimal continuous auto-drift loop
  function animateAutoScroll() {
    const now = performance.now();
    rowStates.forEach(state => {
      if (!prefersReducedMotion.matches && !state.isDown && !state.isHovered && now >= state.pausedUntil) {
        const oneThird = state.el.scrollWidth / 3;
        if (oneThird > 0) {
          state.pos += state.speed;

          if (state.pos >= oneThird * 2) {
            state.pos -= oneThird;
          } else if (state.pos <= 0) {
            state.pos += oneThird;
          }

          state.el.scrollLeft = state.pos;
        }
      }
    });
    autoScrollAnimationId = requestAnimationFrame(animateAutoScroll);
  }

  autoScrollAnimationId = requestAnimationFrame(animateAutoScroll);
}

function renderArchive(filterCategory = "ALL") {
  if (!gridEl) return;

  const filtered = filterCategory === "ALL"
    ? interleavedItems
    : portfolioItems.filter(item => item.category === filterCategory);

  // Only split into TWO rows if there are at least 20 videos (10+ per row to fill the screen width).
  // Otherwise (like UGC Ads with 12 files), keep them in ONE full horizontal scrollable row!
  const useSingleRow = filtered.length < 20;
  const row1Items = useSingleRow ? filtered : filtered.filter((_, idx) => idx % 2 === 0);
  const row2Items = useSingleRow ? [] : filtered.filter((_, idx) => idx % 2 !== 0);

  gridEl.innerHTML = `
    <div class="archive-row" id="archive-row-1">
      ${buildInfiniteRowHTML(row1Items)}
    </div>
    ${row2Items.length > 0 ? `
    <div class="archive-row" id="archive-row-2">
      ${buildInfiniteRowHTML(row2Items)}
    </div>` : ""}
  `;

  attachRowScrollListeners();

  const count = filtered.length;
  if (statsTitle) statsTitle.textContent = filterCategory === "ALL" ? "ALL ARCHIVE" : filterCategory;
  if (statsCount) statsCount.textContent = count;
  if (headerFileCount) headerFileCount.textContent = count;
  if (topbarCount) topbarCount.textContent = `ALL (${portfolioItems.length})`;

  const driveLink = document.getElementById("drive-folder-link");
  if (driveLink) driveLink.href = DRIVE_FOLDERS[filterCategory] || DRIVE_FOLDERS["ALL"];

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

function setActiveCategory(category, keepPovLocked = true) {
  const coverflowEl = document.getElementById("categories");
  // 1. Measure exact screen position of the Coverflow deck BEFORE row height changes
  const beforeTop = (keepPovLocked && coverflowEl)
    ? coverflowEl.getBoundingClientRect().top
    : null;

  currentCategoryIndex = categoriesOrder.indexOf(category);
  if (currentCategoryIndex === -1) currentCategoryIndex = 0;
  updateCoverflow3D(currentCategoryIndex);
  renderArchive(category);

  // 2. Instantly lock POV so the Coverflow deck doesn't move a single pixel on screen
  if (beforeTop !== null && coverflowEl) {
    const afterTop = coverflowEl.getBoundingClientRect().top;
    const heightDelta = afterTop - beforeTop;

    if (Math.abs(heightDelta) > 1) {
      const htmlEl = document.documentElement;
      const prevScrollBehavior = htmlEl.style.scrollBehavior;
      htmlEl.style.scrollBehavior = "auto"; // Instant compensation without smooth-scroll lag
      window.scrollBy(0, heightDelta);
      htmlEl.style.scrollBehavior = prevScrollBehavior;
    }
  }
}

// ==========================================
// CLICK-ONLY 3D COVERFLOW & PLAYER CONTROLS
// ==========================================
function stepCategory(direction) {
  currentCategoryIndex = (currentCategoryIndex + direction + categoriesOrder.length) % categoriesOrder.length;
  setActiveCategory(categoriesOrder[currentCategoryIndex]);
}

// 1. Swipe / drag across the deck to step categories
let swipeStartX = null;
let didSwipe = false;

if (coverflowStage) {
  coverflowStage.addEventListener("pointerdown", (e) => {
    swipeStartX = e.clientX;
    didSwipe = false;
  });

  coverflowStage.addEventListener("pointerup", (e) => {
    if (swipeStartX === null) return;
    const dx = e.clientX - swipeStartX;
    swipeStartX = null;
    if (Math.abs(dx) > 40) {
      didSwipe = true;
      stepCategory(dx < 0 ? 1 : -1);
    }
  });

  coverflowStage.addEventListener("pointercancel", () => {
    swipeStartX = null;
  });
}

// 2. Direct Card Click (ignored when the click ends a swipe)
catCards.forEach(card => {
  card.addEventListener("click", () => {
    if (didSwipe) {
      didSwipe = false;
      return;
    }
    setActiveCategory(card.dataset.category);
  });
});

// Re-fit the fan when the viewport changes size
window.addEventListener("resize", () => updateCoverflow3D(currentCategoryIndex));

// 3. Bottom Glass Player Buttons
const viewAllBtn = document.querySelector(".view-all-btn");
if (viewAllBtn) viewAllBtn.addEventListener("click", () => setActiveCategory("ALL"));

const resetBtn = document.getElementById("reset-cat");
if (resetBtn) resetBtn.addEventListener("click", () => setActiveCategory("ALL"));

const prevBtn = document.getElementById("prev-cat");
if (prevBtn) prevBtn.addEventListener("click", () => stepCategory(-1));

const nextBtn = document.getElementById("next-cat");
if (nextBtn) nextBtn.addEventListener("click", () => stepCategory(1));

// ==========================================
// MOBILE NAV TOGGLE
// ==========================================
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

function setNavOpen(open) {
  navLinks.classList.toggle("open", open);
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => setNavOpen(!navLinks.classList.contains("open")));
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => setNavOpen(false));
  });
}

// ==========================================
// NAVBAR: ACTIVE TAB, SCROLL PROGRESS, LOCAL CLOCK
// ==========================================
const navTabs = document.querySelectorAll(".nav-links a");
const progressBar = document.getElementById("nav-progress-fill");
const navClock = document.getElementById("nav-clock");
let navTicking = false;

function updateNavOnScroll() {
  navTicking = false;

  // Highlight the last section whose top has passed just under the navbar
  let activeId = null;
  navTabs.forEach(tab => {
    const section = document.querySelector(tab.getAttribute("href"));
    if (section && section.getBoundingClientRect().top <= 120) activeId = tab.getAttribute("href");
  });

  // The last section may never reach the top, so light it up once the page bottom is reached
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (navTabs.length && max > 0 && window.scrollY >= max - 2) {
    activeId = navTabs[navTabs.length - 1].getAttribute("href");
  }
  navTabs.forEach(tab => tab.classList.toggle("active", tab.getAttribute("href") === activeId));

  if (progressBar) {
    progressBar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  }
}

window.addEventListener("scroll", () => {
  if (!navTicking) {
    navTicking = true;
    requestAnimationFrame(updateNavOnScroll);
  }
}, { passive: true });
updateNavOnScroll();

function updateNavClock() {
  if (!navClock) return;
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Manila",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date());
  navClock.textContent = `PH ${time}`;
}

updateNavClock();
setInterval(updateNavClock, 30000);

// ==========================================
// AUDIO WAVEFORM (About timeline, A1 track)
// ==========================================
const waveform = document.getElementById("waveform");

if (waveform) {
  let bars = "";
  // Deterministic "music-like" shape so it looks the same on every load
  for (let i = 0; i < 140; i++) {
    const level = 18 + Math.abs(Math.sin(i * 0.37) * Math.cos(i * 0.11)) * 72 + (i % 7 === 0 ? 10 : 0);
    bars += `<span style="height:${Math.min(level, 100).toFixed(0)}%"></span>`;
  }
  waveform.innerHTML = bars;
}

// ==========================================
// CONTACT FORM (mailto — works on static hosting)
// ==========================================
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const subject = `New project inquiry — ${data.get("name")}`;
    const body = `${data.get("message")}\n\n— ${data.get("name")}\n${data.get("email")}`;
    window.location.href = `mailto:${contactForm.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

// ==========================================
// COPY-TO-CLIPBOARD CONTACT ROWS (e.g. Discord username)
// ==========================================
document.querySelectorAll(".copy-link").forEach(btn => {
  const label = btn.querySelector(".cl-copy");
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      if (label) label.textContent = "COPIED ✓";
    } catch {
      if (label) label.textContent = "COPY FAILED";
    }
    btn.classList.add("copied");
    setTimeout(() => {
      btn.classList.remove("copied");
      if (label) label.textContent = "COPY";
    }, 1800);
  });
});

// ==========================================
// VIDEO PLAYER POPUP (Google Drive embeds)
// ==========================================
const videoModal = document.getElementById("video-modal");
const vmScreen = document.getElementById("vm-screen");
const vmTitle = document.getElementById("vm-title");
const vmMeta = document.getElementById("vm-meta");
let vmLastFocus = null;

function openVideo({ link, title, meta, shape, image }) {
  const id = driveId(link);
  if (!id || !videoModal) return;

  vmLastFocus = document.activeElement;
  vmTitle.textContent = title;
  vmMeta.textContent = meta;
  vmScreen.dataset.shape = shape; // "vertical" | "wide" | "image"
  vmScreen.innerHTML = shape === "image"
    ? `<img src="${image || driveThumb(id, 1600)}" data-fallback="${driveThumb(id, 1600)}" alt="${title}" onerror="${THUMB_ONERROR}">`
    : `<iframe src="https://drive.google.com/file/d/${id}/preview" title="${title}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;

  videoModal.hidden = false;
  document.body.classList.add("modal-open");
  videoModal.querySelector(".vm-close").focus();
}

function closeVideo() {
  if (!videoModal || videoModal.hidden) return;
  videoModal.hidden = true;
  vmScreen.innerHTML = ""; // Removing the iframe stops playback
  document.body.classList.remove("modal-open");
  if (vmLastFocus) vmLastFocus.focus();
}

function openPortfolioItem(card) {
  const item = portfolioItems.find(i => i.id === Number(card.dataset.id));
  if (!item || !driveId(item.link)) return;
  openVideo({
    link: item.link,
    title: item.title,
    meta: `${item.category} · ${item.format}`,
    shape: item.format === "STATIC" ? "image" : item.format.startsWith("16:9") ? "wide" : "vertical",
    image: item.image
  });
}

if (gridEl) {
  gridEl.addEventListener("click", (e) => {
    const card = e.target.closest(".work-card.has-video");
    if (card) openPortfolioItem(card);
  });
  gridEl.addEventListener("keydown", (e) => {
    const card = e.target.closest(".work-card.has-video");
    if (card && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      openPortfolioItem(card);
    }
  });
}

if (videoModal) {
  videoModal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeVideo();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeVideo();
  });
}

// ==========================================
// SHOWREEL: auto-plays muted inside the tablet
// ==========================================
const showreelVideo = document.getElementById("showreel-video");
const soundBtn = document.getElementById("sr-sound");

if (showreelVideo && soundBtn) {
  const soundLabel = soundBtn.querySelector(".sr-sound-label");
  let heardFromStart = false;

  const setSound = on => {
    showreelVideo.muted = !on;
    soundBtn.setAttribute("aria-pressed", String(on));
    soundBtn.classList.toggle("on", on);
    soundLabel.textContent = on ? "SOUND ON" : "SOUND OFF";
  };

  // First unmute restarts the reel so the viewer hears it from the top
  const toggleSound = () => {
    const turnOn = showreelVideo.muted;
    if (turnOn && !heardFromStart) {
      showreelVideo.currentTime = 0;
      heardFromStart = true;
    }
    setSound(turnOn);
    showreelVideo.play().catch(() => {});
  };

  soundBtn.addEventListener("click", e => {
    e.stopPropagation();
    toggleSound();
  });
  showreelVideo.addEventListener("click", toggleSound);

  // Only play while the tablet is on screen (saves battery/CPU); respect reduced motion
  if (!prefersReducedMotion.matches) {
    let inView = false;
    new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) showreelVideo.play().catch(() => {});
      else showreelVideo.pause();
    }, { threshold: 0.35 }).observe(showreelVideo);

    // Browsers pause muted video in background tabs; pick it back up when the visitor returns
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible" && inView) showreelVideo.play().catch(() => {});
    });
  }
}

// ==========================================
// INTRO LOADER + SCROLL REVEALS
// ==========================================
// Elements fade/slide/zoom in as they enter the viewport and back out when they leave,
// so the motion replays when scrolling in either direction. Uses the Web Animations API on
// `opacity`, `translate` and `scale` only, so it never fights the cards' own hover `transform`s.
const REVEAL_KEYFRAMES = {
  "fade-up": { from: { translate: "0 40px" }, to: { translate: "0 0" } },
  "fade-down": { from: { translate: "0 -30px" }, to: { translate: "0 0" } },
  "fade-left": { from: { translate: "50px 0" }, to: { translate: "0 0" } },
  "fade-right": { from: { translate: "-50px 0" }, to: { translate: "0 0" } },
  "zoom-in": { from: { scale: "0.88" }, to: { scale: "1" } },
  "zoom-out-up": { from: { scale: "1.12", translate: "0 30px" }, to: { scale: "1", translate: "0 0" } }
};

// [selector, effect, stagger between matches (ms), base delay (ms)]
const REVEAL_PLAN = [
  [".navbar", "fade-down"],
  [".hero .script-intro", "fade-right", 0, 100],
  [".hero-title", "zoom-out-up", 0, 200],
  [".hero-subtitle", "fade-up", 0, 350],
  [".hero-bio", "fade-up", 0, 450],
  [".hero-actions", "fade-up", 0, 550],
  [".hero-photo", "zoom-in", 0, 300],
  [".showreel-left > *", "fade-up", 100],
  [".showreel-right", "zoom-in", 0, 150],
  [".archive-meta", "fade-down"],
  [".archive-title", "zoom-in", 0, 100],
  [".archive-grid", "fade-up", 0, 200],
  [".coverflow-showcase", "zoom-in"],
  [".section-divider", "fade-right"],
  [".process-heading, .section-heading", "zoom-in"],
  [".process-intro, .tools-intro, .contact-intro", "fade-up", 0, 150],
  [".process-track", "fade-right", 0, 100],
  [".process-step", "fade-up", 120],
  [".value-card", "zoom-in", 120],
  [".edit-window", "fade-up"],
  [".meta-table div", "fade-left", 70, 200],
  [".tool-card", "fade-up", 70],
  [".contact-left .status-pill", "fade-right"],
  [".contact-links li", "fade-up", 80],
  [".contact-form", "fade-left", 0, 150],
  [".site-footer", "fade-up"]
];

const revealState = new Map(); // element -> { effect, delay, shown, anim }

function playReveal(el, show) {
  const state = revealState.get(el);
  if (!state || state.shown === show) return;
  state.shown = show;

  const { from, to } = REVEAL_KEYFRAMES[state.effect];
  const hidden = { opacity: 0, ...from };
  const visible = { opacity: 1, ...to };
  if (state.anim) state.anim.cancel();
  state.anim = el.animate(show ? [hidden, visible] : [visible, hidden], {
    duration: show ? 1000 : 450,
    delay: show ? state.delay : 0,
    easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    fill: "both"
  });
  el.classList.remove("reveal"); // the animation now owns opacity
}

function setupReveals() {
  REVEAL_PLAN.forEach(([selector, effect, stagger = 0, base = 0]) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      if (revealState.has(el)) return;
      revealState.set(el, { effect, delay: base + i * stagger, shown: false, anim: null });
      el.classList.add("reveal");
    });
  });
}

function startReveals() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => playReveal(entry.target, entry.isIntersecting));
  }, { rootMargin: "0px 0px -50px 0px" });
  revealState.forEach((_, el) => observer.observe(el));
}

const pageLoader = document.getElementById("page-loader");

function finishLoader(onDone) {
  if (!pageLoader) return onDone();
  const fill = document.getElementById("loader-fill");
  const pct = document.getElementById("loader-pct");
  const duration = 900;
  const start = performance.now();

  const tick = now => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    if (fill) fill.style.width = `${eased * 100}%`;
    if (pct) pct.textContent = `${Math.round(eased * 100)}%`;
    if (t < 1) return requestAnimationFrame(tick);
    pageLoader.classList.add("done");
    setTimeout(onDone, 250);
  };
  requestAnimationFrame(tick);
}

if (prefersReducedMotion.matches) {
  if (pageLoader) pageLoader.remove();
} else {
  setupReveals();
  finishLoader(startReveals);
}

// Initial Render
updateCategoryBadges();
setActiveCategory("ALL", false);