/* ============================================
   VEER BAJARANG GROUP - Dashboard Logic
   Unique IDs (VBG-001 .. VBG-059)
   100% Members (₹5,100) &     50% Members (₹2,100)
   ============================================ */

const TARGET_FULL = 5100;
const TARGET_HALF = 2100;

const members = [
  // ─── 100% MEMBERS (target ₹5,100) ───

  // Fully Paid
  { id: "VBG-001", name: "भिकण गोस्वामी", paid: 5100, membershipType: "100%" },
  { id: "VBG-002", name: "चेतन लोहार", paid: 5100, membershipType: "100%" },
  { id: "VBG-003", name: "दीपक पाटिल", paid: 5100, membershipType: "100%" },
  { id: "VBG-004", name: "योगेश शिरसाठ", paid: 5100, membershipType: "100%" },
  { id: "VBG-005", name: "किरण पाटिल लाला", paid: 5100, membershipType: "100%" },
  { id: "VBG-006", name: "नीलेश पाटिल", paid: 5100, membershipType: "100%" },
  { id: "VBG-007", name: "सुनील राजपूत राणा", paid: 5100, membershipType: "100%" },
  { id: "VBG-008", name: "राहुल बैसाने", paid: 5100, membershipType: "100%" },
  { id: "VBG-009", name: "विशाल मराठे", paid: 5100, membershipType: "100%" },
  { id: "VBG-010", name: "प्रकाश मास्टर (गाडी सेवा)", paid: null, membershipType: "100%" },
  { id: "VBG-011", name: "समाधान बोरसे", paid: 5100, membershipType: "100%" },
  { id: "VBG-012", name: "शशिकांत प्रसाद", paid: 5100, membershipType: "100%" },
  { id: "VBG-013", name: "आकाश राजपूत", paid: 5100, membershipType: "100%" },
  { id: "VBG-014", name: "गणेश भोई", paid: 5100, membershipType: "100%" },

  // Partial Paid
  { id: "VBG-015", name: "दीपक पाटिल (रिक्षावाला)", paid: 5000, membershipType: "100%" },
  { id: "VBG-016", name: "जितेंद्र पाटिल (मयूर)", paid: 1000, membershipType: "100%" },
  { id: "VBG-017", name: "सुनील कोळी", paid: 1000, membershipType: "100%" },
  { id: "VBG-018", name: "रोहित मांजरा", paid: 1000, membershipType: "100%" },
  { id: "VBG-019", name: "ओम मराठे", paid: 5100, membershipType: "100%" },
  { id: "VBG-020", name: "रवी सावले", paid: 1000, membershipType: "100%" },
  { id: "VBG-021", name: "नागेंद्र राय", paid: 1000, membershipType: "100%" },

  // Fully Pending
  { id: "VBG-022", name: "सागर सोनवणे", paid: 0, membershipType: "100%" },
  { id: "VBG-023", name: "महेश दादू पाटिल", paid: 0, membershipType: "100%" },
  { id: "VBG-024", name: "सागर मॉरीस", paid: 5100, membershipType: "100%" },
  { id: "VBG-025", name: "किसन राजपूत", paid: 0, membershipType: "100%" },
  { id: "VBG-026", name: "गौरव राजपूत", paid: 0, membershipType: "100%" },
  { id: "VBG-027", name: "गुलाब पाटिल मास्टर", paid: 5100, membershipType: "100%" },
  { id: "VBG-028", name: "संदीप पाटिल", paid: 0, membershipType: "100%" },
  { id: "VBG-029", name: "प्रवीण राजपूत", paid: 0, membershipType: "100%" },
  { id: "VBG-030", name: "तुषार पाटिल दादा", paid: 5100, membershipType: "100%" },
  { id: "VBG-031", name: "भैय्याभाऊ पाटिल", paid: 0, membershipType: "100%" },
  { id: "VBG-032", name: "अजय सोनवणे", paid: 0, membershipType: "100%" },
  { id: "VBG-033", name: "जांबु पाटिल", paid: 0, membershipType: "100%" },
  { id: "VBG-034", name: "वाल्मीक पाटिल", paid: 0, membershipType: "100%" },
  { id: "VBG-035", name: "मुकेश पाटिल", paid: 0, membershipType: "100%" },
  { id: "VBG-036", name: "योगेश पाटिल नाना", paid: 5100, membershipType: "100%" },
  { id: "VBG-037", name: "कमलेश पाटिल", paid: 0, membershipType: "100%" },
  { id: "VBG-038", name: "गोपाल भाटु पाटिल", paid: 0, membershipType: "100%" },
  { id: "VBG-039", name: "गणेश बिरडे", paid: 0, membershipType: "100%" },
  { id: "VBG-040", name: "भूषण बाविस्कर", paid: 5100, membershipType: "100%" },

  // ─── 50% MEMBERS (target ₹2,550) ───

  { id: "VBG-041", name: "उमेश बाबूल", paid: 2100, membershipType: "50%" },
  { id: "VBG-042", name: "मनोज कोळी", paid: 0, membershipType: "50%" },
  { id: "VBG-043", name: "तुशाल पाटिल bJP", paid: 0, membershipType: "50%" },
  { id: "VBG-044", name: "जितु पाटिल", paid: 0, membershipType: "50%" },
  { id: "VBG-045", name: "योगेश (56)", paid: 0, membershipType: "50%" },
  { id: "VBG-046", name: "हितेश पारधी", paid: 0, membershipType: "50%" },
  { id: "VBG-047", name: "गणेश डॉन", paid: 0, membershipType: "50%" },
  { id: "VBG-048", name: "हितेश दादू", paid: 0, membershipType: "50%" },
  { id: "VBG-049", name: "चेतन सावण bJP", paid: 0, membershipType: "50%" },
  { id: "VBG-050", name: "भूरा", paid: 0, membershipType: "50%" },
  { id: "VBG-051", name: "भरत", paid: 0, membershipType: "50%" },
  { id: "VBG-052", name: "योगेश धोनी", paid: 0, membershipType: "50%" },
  { id: "VBG-053", name: "विक्की", paid: 0, membershipType: "50%" },
  { id: "VBG-054", name: "समाधान पाटिल (चोपडा)", paid: 2100, membershipType: "50%" },
  { id: "VBG-055", name: "गणेश कोळी", paid: 2100, membershipType: "50%" },
  { id: "VBG-056", name: "हर्षल गोरख कोळी", paid: 0, membershipType: "50%" },
  { id: "VBG-057", name: "आकाश नानाभाऊ कोळी", paid: 0, membershipType: "50%" },
  { id: "VBG-058", name: "रोहित रविन्द्र सोनवणे", paid: 2100, membershipType: "50%" },
  { id: "VBG-059", name: "विलास दत्तू पाटिल (सोनू)", paid: 1000, membershipType: "50%" },
];

// Enrich data — uses the correct target per membership type
function getTarget(m) {
  return m.membershipType === "50%" ? TARGET_HALF : TARGET_FULL;
}

const enriched = members.map((m) => {
  if (m.paid === null) {
    return { ...m, paid: null, pending: null, status: "service", target: null };
  }
  const target = getTarget(m);
  const pending = target - m.paid;
  let status;
  if (m.paid >= target) status = "paid";
  else if (m.paid > 0) status = "partial";
  else status = "pending";
  return { ...m, pending, status, target };
});

// ─── SUMMARY HELPERS ───
const fmt = (n) => "₹" + n.toLocaleString("en-IN");

function computeSummary(list) {
  const financial = list.filter((m) => m.status !== "service");
  return {
    count: list.length,
    collected: financial.reduce((s, m) => s + m.paid, 0),
    pending: financial.reduce((s, m) => s + m.pending, 0),
  };
}

function renderSummary(data) {
  const s = computeSummary(data);
  document.getElementById("totalMembers").textContent = s.count;
  document.getElementById("totalCollected").textContent = fmt(s.collected);
  document.getElementById("totalPending").textContent = fmt(s.pending);
}

// Animate counter
function animateValue(el, end, prefix = "") {
  const duration = 1200;
  const start = 0;
  const startTime = performance.now();

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (end - start) * eased);
    el.textContent = prefix + current.toLocaleString("en-IN");
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// DOM refs
const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");
const filterBtns = document.querySelectorAll(".filter-btn");
const membershipBtns = document.querySelectorAll(".membership-btn");

let currentFilter = "all";
let currentMembership = "all"; // "all" | "100%" | "50%"

function statusBadge(status) {
  const labels = {
    paid: "✅ पूर्ण",
    partial: "🔄 अर्ध",
    pending: "⏳ बाकी",
    service: "🚛 गाडी सेवा",
  };
  return `<span class="status-badge status-${status}">${labels[status]}</span>`;
}

function renderTable(data) {
  tableBody.innerHTML = "";
  if (data.length === 0) {
    noResults.style.display = "block";
    return;
  }
  noResults.style.display = "none";

  data.forEach((m, i) => {
    const row = document.createElement("tr");
    row.style.animationDelay = `${i * 30}ms`;

    if (m.status === "service") {
      row.innerHTML = `
        <td><span class="member-id">${m.id}</span></td>
        <td>${m.name}</td>
        <td class="service-amount">—</td>
        <td class="service-amount">—</td>
        <td>${statusBadge(m.status)}</td>
      `;
    } else {
      const pendingClass = m.pending === 0 ? "pending-amount-zero" : "pending-amount-red";
      row.innerHTML = `
        <td><span class="member-id">${m.id}</span></td>
        <td>${m.name}</td>
        <td>${fmt(m.paid)}</td>
        <td class="${pendingClass}">${fmt(m.pending)}</td>
        <td>${statusBadge(m.status)}</td>
      `;
    }

    tableBody.appendChild(row);
  });
}

function getFilteredData() {
  const query = searchInput.value.trim().toLowerCase();
  let data = enriched;

  // Membership type filter
  if (currentMembership !== "all") {
    data = data.filter((m) => m.membershipType === currentMembership);
  }

  // Status filter
  if (currentFilter !== "all") {
    data = data.filter((m) => m.status === currentFilter);
  }

  // Search
  if (query) {
    data = data.filter(
      (m) =>
        m.name.toLowerCase().includes(query) ||
        m.id.toLowerCase().includes(query)
    );
  }

  return data;
}

function updateTable() {
  const data = getFilteredData();
  renderTable(data);
  renderSummary(data);
}

// Initial summary + table
const allData = enriched;
renderSummary(allData);
updateTable();

// Animate initial summary with full totals
const allSummary = computeSummary(allData);
animateValue(document.getElementById("totalMembers"), allSummary.count);
animateValue(document.getElementById("totalCollected"), allSummary.collected, "₹");
animateValue(document.getElementById("totalPending"), allSummary.pending, "₹");

// Filters
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    updateTable();
  });
});

// Membership type sub-tabs
membershipBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    membershipBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const type = btn.dataset.type;
    currentMembership = type === "all" ? "all" : type === "100" ? "100%" : "50%";
    currentFilter = "all";
    filterBtns.forEach((b) => b.classList.remove("active"));
    document.querySelector('.filter-btn[data-filter="all"]').classList.add("active");
    updateTable();
  });
});

// Search
searchInput.addEventListener("input", updateTable);

/* ============================================
   2025 HISTORY & PENDING BALANCE
   ============================================ */
const history2025 = [
  { id: 1, name: "ओम मराठे", paid: 14000, status: "paid" },
  { id: 2, name: "कमलेश पाटिल", paid: 14000, status: "paid" },
  { id: 3, name: "राणा राजपूत", paid: 2000, status: "partial" },
  { id: 4, name: "सुनील कोळी", paid: 10000, status: "partial" },
];

const H_TARGET = 14000;

const historyEnriched = history2025.map((m) => ({
  ...m,
  pending: H_TARGET - m.paid,
}));

// Displayed summary values (as per official 2025 records)
const hCollected = 40000;
const hRemaining = 16000;

document.getElementById("hCollected").textContent = "₹" + hCollected.toLocaleString("en-IN");
document.getElementById("hRemaining").textContent = "₹" + hRemaining.toLocaleString("en-IN");

function historyStatusBadge(status) {
  const labels = {
    paid: "पूर्ण जमा (Paid)",
    partial: "अंशतः जमा (Partial)",
    pending: "पुरा बाकी (Fully Pending)",
  };
  return `<span class="status-badge status-${status}">${labels[status]}</span>`;
}

const historyBody = document.getElementById("historyBody");

historyEnriched.forEach((m) => {
  const pendingClass = m.pending === 0 ? "pending-amount-zero" : "pending-amount-red";
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${m.id}</td>
    <td>${m.name}</td>
    <td>${fmt(m.paid)}</td>
    <td class="${pendingClass}">${fmt(m.pending)}</td>
    <td>${historyStatusBadge(m.status)}</td>
  `;
  historyBody.appendChild(row);
});

/* ============================================
   TAB SWITCHING
   ============================================ */
const tabBtns = document.querySelectorAll(".tab-btn");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const target = btn.dataset.tab;
    document.getElementById("tab-main").style.display = target === "main" ? "block" : "none";
    document.getElementById("tab-history").style.display = target === "history" ? "block" : "none";
  });
});
