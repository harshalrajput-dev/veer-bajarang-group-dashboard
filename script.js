/* ============================================
   VEER BAJARANG GROUP - Dashboard Logic
   Unique IDs (VBG-001 .. VBG-060)
   100% Members (₹5,100) &     50% Members (₹2,100)

   SINGLE SOURCE OF TRUTH RULE:
   every rupee figure shown in the UI is derived
   (reduce/sum) from the source arrays below.
   No collection total is ever typed in by hand.
   ============================================ */

const TARGET_FULL = 5100;
const TARGET_HALF = 2100;

// ─── SOURCE DATA: RECEIPTS (रामेश्वर नगर पावती संग्रह) ───
const receipts = [
  { no: 1, area: "रामेश्वर नगर (गली नं. १, २)", amount: 9714 },
  { no: 2, area: "रामेश्वर नगर (गली नं. १, २)", amount: 8119 },
  { no: 3, area: "रामेश्वर नगर (गली नं. १, २)", amount: 7467 },
];

// ─── SOURCE DATA: GUESTS & SPONSORS (प्रमुख अतिथी व विशेष सहकार्य) ───
const guests = [
  {
    name: "मा.श्री. जिग्नेशभाई पाटील",
    role: "अध्यक्ष, युथफोर गुजरात",
    badge: "विशेष सहकार्य",
    badgeClass: "badge-gold",
    amount: 5000,
    photo: "jignesh-patil.png",
  },
  {
    name: "मा.श्री. सम्राट अभिमन्यू पाटील",
    role: "सामाजिक कार्यकर्ता, उद्योगपती, सुरत",
    badge: "बॅनर सेवा प्रायोजक",
    badgeClass: "badge-orange",
    amount: 51000,
    photo: "samrat-patil.png",
  },
  {
    name: "श्रीमती सांगीताबाई पाटील",
    role: "विशेष सहकार्य",
    badge: "विशेष सहकार्य",
    badgeClass: "badge-gold",
    amount: 500,
    photo: null,
  },
  {
    name: "श्री अमितसिंग राजपूत",
    role: "विशेष सहकार्य",
    badge: "विशेष सहकार्य",
    badgeClass: "badge-gold",
    amount: 500,
    photo: null,
  },
];

// ─── SOURCE DATA: 2025 LEDGER (मागील वर्षाचा हिशोब) ───
const history2025 = [
  { id: 1, name: "ओम मराठे", target: 14000, paid: 14000, status: "paid" },
  { id: 2, name: "कमलेश पाटिल", target: 14000, paid: 14000, status: "paid" },
  { id: 3, name: "राणा राजपूत", target: 14000, paid: 14000, status: "paid" },
  { id: 4, name: "सुनील कोळी", target: 14000, paid: 12900, status: "paid" },
];

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
  { id: "VBG-016", name: "जितेंद्र पाटिल (मयूर)", paid: 5000, membershipType: "100%" },
  { id: "VBG-017", name: "सुनील कोळी", paid: 0, membershipType: "100%" },
  { id: "VBG-018", name: "रोहित मांजरा", paid: 5100, membershipType: "100%" },
  { id: "VBG-019", name: "ओम मराठे", paid: 5100, membershipType: "100%" },
  { id: "VBG-020", name: "रवी सावले", paid: 5100, membershipType: "100%" },
  { id: "VBG-021", name: "नागेंद्र राय", paid: 1000, membershipType: "100%" },

  // Fully Pending
  { id: "VBG-022", name: "सागर सोनवणे", paid: 2100, membershipType: "100%" },
  { id: "VBG-023", name: "महेश दादू पाटिल", paid: 0, membershipType: "100%" },
  { id: "VBG-024", name: "सागर मॉरीस", paid: 5100, membershipType: "100%" },
  { id: "VBG-025", name: "किसन राजपूत", paid: 0, membershipType: "100%" },
  { id: "VBG-026", name: "गौरव राजपूत", paid: 5100, membershipType: "100%" },
  { id: "VBG-027", name: "गुलाब पाटिल मास्टर", paid: 5100, membershipType: "100%" },
  { id: "VBG-028", name: "संदीप पाटिल", paid: 2500, membershipType: "100%" },
  { id: "VBG-029", name: "भूषण राजपूत", paid: 2100, membershipType: "50%" },
  { id: "VBG-030", name: "तुषार पाटिल दादा", paid: 5100, membershipType: "100%" },
  { id: "VBG-032", name: "अजय सोनवणे", paid: 1100, membershipType: "50%" },
  { id: "VBG-033", name: "जंबू पाटिल", paid: 0, membershipType: "100%" },
  { id: "VBG-034", name: "वाल्मीक पाटिल", paid: 2100, membershipType: "100%" },
  { id: "VBG-035", name: "मुकेश पाटिल", paid: 0, membershipType: "100%" },
  { id: "VBG-036", name: "योगेश पाटिल नाना", paid: 5100, membershipType: "100%" },
  { id: "VBG-037", name: "कमलेश पाटिल", paid: 0, membershipType: "100%" },
  { id: "VBG-038", name: "गोपाल भाटु पाटिल", paid: 0, membershipType: "100%" },
  { id: "VBG-040", name: "भूषण बाविस्कर", paid: 5100, membershipType: "100%" },
  { id: "VBG-060", name: "मनोज कोळी (रिक्षावाला)", paid: 2000, membershipType: "100%" },

  // ─── 50% MEMBERS (target ₹2,100) ───

  { id: "VBG-031", name: "भैय्याभाऊ पाटिल", paid: 2100, membershipType: "50%" },
  { id: "VBG-041", name: "उमेश बाबूल", paid: 2100, membershipType: "50%" },
  { id: "VBG-043", name: "तुशाल पाटिल bJP", paid: 0, membershipType: "50%" },
  { id: "VBG-044", name: "जितु पाटिल", paid: 0, membershipType: "50%" },
  { id: "VBG-045", name: "योगेश (56)", paid: 0, membershipType: "50%" },
  { id: "VBG-046", name: "हितेश पारधी", paid: 1000, membershipType: "50%" },
  { id: "VBG-047", name: "गणेश डॉन", paid: 0, membershipType: "50%" },
  { id: "VBG-048", name: "हितेश दादू", paid: 0, membershipType: "50%" },
  { id: "VBG-049", name: "चेतन सावण bJP", paid: 0, membershipType: "50%" },
  { id: "VBG-050", name: "भूरा", paid: 0, membershipType: "50%" },
  { id: "VBG-051", name: "भरत", paid: 1100, membershipType: "50%" },
  { id: "VBG-052", name: "योगेश धोनी", paid: 2100, membershipType: "50%" },
  { id: "VBG-053", name: "विक्की", paid: 0, membershipType: "50%" },
  { id: "VBG-054", name: "समाधान पाटिल (चोपडा)", paid: 2100, membershipType: "50%" },
  { id: "VBG-055", name: "गणेश कोळी", paid: 2100, membershipType: "50%" },
  { id: "VBG-056", name: "हर्षल गोरख कोळी", paid: 2100, membershipType: "50%" },
  { id: "VBG-057", name: "आकाश नानाभाऊ कोळी", paid: 2100, membershipType: "50%" },
  { id: "VBG-058", name: "रोहित रविन्द्र सोनवणे", paid: 1000, membershipType: "50%" },
  { id: "VBG-059", name: "विलास दत्तू पाटिल (सोनू)", paid: 2100, membershipType: "50%" },
  { id: "VBG-039", name: "गणेश बिरडे", paid: 1100, membershipType: "50%" }
  
  
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

// ─── DERIVED TOTALS (plain calculator addition over the source arrays) ───
const sumOf = (list, key) => list.reduce((s, item) => s + (item[key] || 0), 0);

const RECEIPT_COLLECTION = sumOf(receipts, "amount"); // रामेश्वर नगर पावती संग्रह एकूण
const GUEST_CONTRIBUTIONS = sumOf(guests, "amount"); // अतिथी व प्रायोजक सहकार्य एकूण
const TOTAL_MEMBERSHIP_100 = sumOf(
  members.filter((m) => m.membershipType === "100%"),
  "paid"
);
const TOTAL_MEMBERSHIP_50 = sumOf(
  members.filter((m) => m.membershipType === "50%"),
  "paid"
);
const COLLECTION_2025 = sumOf(history2025, "paid");
const TOTAL_EXTRA = GUEST_CONTRIBUTIONS + RECEIPT_COLLECTION;
const TOTAL_COLLECTION =
  TOTAL_MEMBERSHIP_100 +
  TOTAL_MEMBERSHIP_50 +
  GUEST_CONTRIBUTIONS +
  RECEIPT_COLLECTION +
  COLLECTION_2025;

// ─── GUESTS & SPONSORS (प्रमुख अतिथी व विशेष सहकार्य) ───
const AVATAR_FALLBACK =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3Ccircle cx=%2750%27 cy=%2750%27 r=%2750%27 fill=%27%23241d54%27/%3E%3Ccircle cx=%2750%27 cy=%2740%27 r=%2717%27 fill=%27%23b8a9d4%27/%3E%3Crect x=%2722%27 y=%2764%27 width=%2756%27 height=%2726%27 rx=%2713%27 fill=%27%23b8a9d4%27/%3E%3C/svg%3E";

function renderGuests() {
  const grid = document.getElementById("guestsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  guests.forEach((g, i) => {
    const card = document.createElement("div");
    card.className = "guest-card";
    card.style.animationDelay = `${i * 60}ms`;

    const photo = g.photo
      ? `<img src="${g.photo}" alt="${g.name}" onerror="this.onerror=null;this.src='${AVATAR_FALLBACK}';" />`
      : `<img src="${AVATAR_FALLBACK}" alt="${g.name}" />`;

    const role = g.role
      ? `<span class="guest-role">${g.role}</span>`
      : "";

    card.innerHTML = `
      <div class="guest-photo">${photo}</div>
      <h3 class="guest-name">${g.name}</h3>
      ${role}
      <span class="guest-badge ${g.badgeClass}">${g.badge}: ${fmt(g.amount)}</span>
    `;
    grid.appendChild(card);
  });

  document.getElementById("guestsTotalBadge").textContent =
    "एकूण सहकार्य: " + fmt(GUEST_CONTRIBUTIONS);
}

// ─── RECEIPT COLLECTION (रामेश्वर नगर) ───
function renderReceipts() {
  const body = document.getElementById("receiptBody");
  body.innerHTML = "";

  document.getElementById("totalMembers").textContent = receipts.length;
  document.getElementById("totalCollected").textContent = fmt(RECEIPT_COLLECTION);
  document.getElementById("totalPending").textContent = fmt(0);
  document.getElementById("netBalance").textContent = fmt(getExpenseNetBalance());
  document.getElementById("receiptTotalBadge").textContent = "एकूण पावती जमा: " + fmt(RECEIPT_COLLECTION) + " ✅ पूर्ण";
  document.getElementById("receiptNavLabel").textContent = "पावती संग्रह (" + fmt(RECEIPT_COLLECTION) + ")";

  receipts.forEach((r, i) => {
    const row = document.createElement("tr");
    row.style.animationDelay = `${i * 30}ms`;
    row.innerHTML = `
      <td><span class="member-id">पावती #${r.no}</span></td>
      <td>${r.area}</td>
      <td>${fmt(r.amount)}</td>
      <td><span class="status-badge status-paid">✅ जमा / पूर्ण</span></td>
    `;
    body.appendChild(row);
  });

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td colspan="2"><strong>एकूण पावती जमा</strong></td>
    <td><strong>${fmt(RECEIPT_COLLECTION)}</strong></td>
    <td><span class="status-badge status-paid">✅ पूर्ण</span></td>
  `;
  body.appendChild(totalRow);
}

// ─── EXPENSES (ખર્ચ હિશોબ) ───
const expenses = [
  { name: "गणपती बाप्पाची मुर्ती", total: 40100, paid: 40100 },
  { name: "श्री म्युझिकल बँड", total: 67000, paid: 67000 },
  { name: "मंडप", total: 46000, paid: 46000 },
  { name: "छत्री", total: 7000, paid: 7000 },
  { name: "गणपती डायमंड डेकोरेट", total: 9000, paid: 9000 },
  { name: "महाराज पूजा", total: 1100, paid: 1100 },
  { name: "फटाके", total: 10080, paid: 10080 },
  { name: "गणपती बाप्पा हार अँड बुके", total: 1400, paid: 1400 },
  { name: "बँड वाल्यांच जेवण (सकाळी + रात्री)", total: 2500, paid: 2500 },
  { name: "कॅमेरा विडिओ वाला", total: 2000, paid: 2000 },
  { name: "रशीद बुक", total: 850, paid: 850 },
  { name: "दोरी वायरसाठी", total: 400, paid: 400 },
  { name: "बॅनर", total: 6000, paid: 6000 },
  { name: "स्वागत साठी केस गमच्छा", total: 900, paid: 900 },
  { name: "सेटिंग तार", total: 100, paid: 100 },
  { name: "किरकोळ", total: 100, paid: 100 },
  { name: "गणपती कपडा", total: 500, paid: 500 },
  { name: "किरकोळ", total: 100, paid: 100 },
  { name: "किरकोळ", total: 950, paid: 950 },
  { name: "I card", total: 4200, paid: 4200 },
  { name: "बँड वाले माणसांना प्लेट, वाटी, ग्लास", total: 250, paid: 250 },
  { name: "लारा", total: 6000, paid: 6000 },
  { name: "मंगलमूर्ती", total: 500, paid: 500 },
  { name: "पाणी बाटली", total: 300, paid: 300 },
  { name: "ક્રેન (Crane)", total: 1400, paid: 1400 },
  { name: "बाप्पा उचलण्याचे माणसे", total: 300, paid: 300 },
  { name: "चहा रात्र", total: 300, paid: 300 },
  { name: "५x१२ बॅनर आणि रिंग", total: 2500, paid: 2500 },
  { name: "भांडे पोर्टल ऑनलाइन", total: 600, paid: 600 },
  { name: "लहान मुलांना भेटवस्तू", total: 200, paid: 200 },
  { name: "लहान मुलांसाठी भेटवस्तू दुसरी दिवशी", total: 250, paid: 250 },
  { name: "गणपती बाप्पाचे आगमन साठी फोकस जनरेटर", total: 400, paid: 400 },
  { name: "झेंडा परदा ", total: 500, paid: 500 },
  { name: "गणपती नारद", total: 100, paid: 100 },
  { name: "पुजारी महाराज", total: 1100, paid: 1100 },
  { name: "शेवटच्या दिवशी रात्री चहासाठी", total: 300, paid: 300 },
  { name: "फुगे बँड वर लावण्याचे", total: 200, paid: 200 },
  { name: "झेंडा पारधा सिलाई", total: 500, paid: 500 },
  { name: "गणपती बाप्पाची पिशवी", total: 450, paid: 450 },
  { name: "पियोपी माती", total: 100, paid: 100 },
  { name: "सेंटिंग तार", total: 100, paid: 100 },
  { name: "रांगोळी", total: 80, paid: 80 },
  { name: "किरकोळ", total: 100, paid: 100 },
  { name: "ट्रॅक्टर डिझेल", total: 1000, paid: 1000 },
  { name: "ट्रॅक्टर ड्रॉइव्हिंग", total: 1000, paid: 1000 },
  { name: "लारा वेल्डिंग", total: 300, paid: 300 },
  { name: "सिंगर बक्षीस बँड", total: 1000, paid: 1000 },
  { name: "4 क्लिप गाडी", total: 2500, paid: 2500 },
  { name: "बँड पूजा", total: 120, paid: 120 },
  { name: "वायर spiro", total: 150, paid: 150 },
  { name: "फुले", total: 200, paid: 200 },
  { name: "गणपती बाप्पा डेकोरेट साठी धुवा", total: 3000, paid: 3000 },
  { name: "पाणी बाटली बँड", total: 300, paid: 300 },
  { name: "खट्टा", total: 100, paid: 100 },
  { name: "गणपती बाप्पा पूजा", total: 670, paid: 670 },
  { name: "तेल, घी, नारळ", total: 350, paid: 350 },
  { name: "फळ (नगीनचे पान)", total: 180, paid: 180 },
  { name: "किरण पाटील ट्रस्ट", total: 25000, paid: 25000 },
  { name: "बँड (worker)", total: 300, paid: 300 },
  { name: "पानी बॉटल", total: 150, paid: 150 },
  { name: "रिक्षा (gas)", total: 100, paid: 100 },
  { name: "वर्कर", total: 500, paid: 500 },
  { name: "बॅनर", total: 2100, paid: 2100 },
  { name: "पुजारी महाराज स्थापना", total: 1100, paid: 1100 },
  { name: "गणपती बाप्पा प्रसाद", total: 350, paid: 350 },
  { name: "गणपती बाप्पा किरकोळ समान", total: 350, paid: 350 },
  { name: "पाण्याची बाटली", total: 300, paid: 300 },
  { name: "रंग", total: 80, paid: 80 },
  { name: "बाप्पा प्रसाद", total: 200, paid: 200 },
  { name: "बँड वर बाटली", total: 300, paid: 300 },
  { name: "तेलाचा दिवा", total: 100, paid: 100 },
  { name: "फुले स्वागत", total: 200, paid: 200 },
  { name: "છત્રી पाण्याची बाटली", total: 200, paid: 200 },
  { name: "જનરેટર પોવર", total: 400, paid: 400 },
  { name: "ચહા", total: 100, paid: 100 },
  { name: "દૂધ સત્યનારાયણ પૂજા", total: 180, paid: 180 },
  { name: "સત્યનારાયણ", total: 200, paid: 200 },
  { name: "લહાન મુલાંસાઠી ભેટવસ્તૂ", total: 350, paid: 350 },
  { name: "બૅન્ડ વર ચહા", total: 200, paid: 200 },
  { name: "સમ્રાટ ભાઈંસાઠી ભેટવસ્તૂ", total: 200, paid: 200 },
  { name: "ગણપતિબાપ્પા પ્રસાદ", total: 200, paid: 200 },
  { name: "કિરકોળ", total: 200, paid: 200 },
  { name: "સત્યનારાયણ કા ખર્ચ", total: 500, paid: 500 },
  { name: "(लाला) બૅનર", total: 2000, paid: 0 },
  { name: "गणपती बाप्पा धोती", total: 500, paid: 500 },
  { name: "पोलिस बॅनर", total: 1100, paid: 1100 },
  { name: "सत्यनारायण महाराज", total: 3100, paid: 3100 },
  { name: "मुलांचे गेम", total: 500, paid: 500 },
  { name: "श्री स्वामी समर्थ (दादा लाईट डेकोरेट)", total: 18000, paid: 0 },
  { name: "Dj साउंड (लाला)", total: 7000, paid: 0 },
  { name: "सत्यनारायण पूजा", total: 1250, paid: 1250 },
  { name: "सत्यनारायण भंडारा सामान", total: 4200, paid: 4200 },
  { name: "शाकभाजी भंडारा", total: 1550, paid: 1550 },
  { name: "टोपी अँड शॉल", total: 825, paid: 825 },
  { name: "गॅस बाटला", total: 510, paid: 510 },
  { name: "भांडे पोर्टर घेऊन जाणे", total: 600, paid: 600 },
  { name: "लहान मुलांचे गिफ्ट", total: 450, paid: 450 },
  { name: "गणपती बाप्पाचे आगमन साठी फोकस ", total: 400, paid: 400 },
  { name: "स्पीकर फाटून गेल्याचे (8 व्या दिवशी)", total: 1900, paid: 1900 },
  { name: "फटाके", total: 860, paid: 860 },
  { name: "गणपती उचलण्याचे (4 kip gadi)", total: 2600, paid: 2600 },
  { name: "डिझेल गाडी", total: 2000, paid: 2000 },
  { name: "गुलाल", total: 200, paid: 200 },
  { name: "गणपती विसर्जन", total: 6100, paid: 6100 },
  { name: "उसाचा रस", total: 400, paid: 400 },
  { name: "दररोज ची बाप्पांना फुलहार", total: 2000, paid: 2000 }
];

const TOTAL_EXPENSES_AGREED = expenses.reduce((s, e) => s + e.total, 0);
const TOTAL_EXPENSES_PAID = expenses.reduce((s, e) => s + e.paid, 0);
const TOTAL_EXPENSES_PENDING = TOTAL_EXPENSES_AGREED - TOTAL_EXPENSES_PAID; // श्री स्वामी समर्थ ₹13,000 + Dj साउंड ₹7,000

function getExpenseNetBalance() {
  return TOTAL_COLLECTION - TOTAL_EXPENSES_PAID;
}

function isBudgetDeficit() {
  return getExpenseNetBalance() < TOTAL_EXPENSES_PENDING;
}

function updateBudgetDeficitAlert() {
  const banner = document.getElementById("deficitBanner");
  const bannerText = document.getElementById("deficitBannerText");
  const netCard = document.querySelector(".net-card");
  const deficit = isBudgetDeficit();

  if (!deficit) {
    banner.style.display = "none";
    netCard.classList.remove("deficit-alert");
    return;
  }

  const netBal = getExpenseNetBalance();
  const shortfall = TOTAL_EXPENSES_PENDING - netBal;
  bannerText.textContent =
    `ઘટ ચેતવણી: કુલ બાકી ખર્ચ (${fmt(TOTAL_EXPENSES_PENDING)}) સામે હાથ પરની સિલક (${fmt(netBal)}) ઓછી છે. ${fmt(shortfall)} ની રકમ ખૂટે છે!`;
  banner.style.display = "flex";
  netCard.classList.add("deficit-alert");
}

function playWarningBeep() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const beep = (t, freq, dur) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + dur);
    };
    beep(ctx.currentTime, 860, 0.18);
    beep(ctx.currentTime + 0.28, 520, 0.26);
    setTimeout(() => ctx.close().catch(() => {}), 900);
  } catch (e) { /* audio not available */ }
}

function renderExpenses() {
  const body = document.getElementById("expenseBody");
  body.innerHTML = "";

  document.getElementById("expenseTotalBadge").textContent =
    `एकूण तयार: ${fmt(TOTAL_EXPENSES_AGREED)} | भरलेले: ${fmt(TOTAL_EXPENSES_PAID)} | बाकी: ${fmt(TOTAL_EXPENSES_PENDING)}`;
  document.getElementById("totalMembers").textContent = expenses.length;
  document.getElementById("totalCollected").textContent = fmt(TOTAL_COLLECTION);
  document.getElementById("totalPending").textContent = fmt(TOTAL_EXPENSES_PENDING);
  document.getElementById("netBalance").textContent = fmt(getExpenseNetBalance());
  updateBudgetDeficitAlert();

  expenses.forEach((e, i) => {
    const row = document.createElement("tr");
    row.style.animationDelay = `${i * 30}ms`;
    const pending = e.total - e.paid;
    const pendingClass = pending === 0 ? "pending-amount-zero" : "pending-amount-red";
    let statusStr;
    if (pending === 0) statusStr = `<span class="status-badge status-paid">✅ पूर्ण</span>`;
    else if (pending < e.total) statusStr = `<span class="status-badge status-partial">🔄 अर्ध</span>`;
    else statusStr = `<span class="status-badge status-pending">⏳ बाकी</span>`;
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${e.name}</td>
      <td>${fmt(e.total)}</td>
      <td>${fmt(e.paid)}</td>
      <td class="${pendingClass}">${fmt(pending)}</td>
      <td>${statusStr}</td>
    `;
    body.appendChild(row);
  });

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td colspan="2"><strong>एकूण खर्च</strong></td>
    <td><strong>${fmt(TOTAL_EXPENSES_AGREED)}</strong></td>
    <td><strong>${fmt(TOTAL_EXPENSES_PAID)}</strong></td>
    <td class="pending-amount-red"><strong>${fmt(TOTAL_EXPENSES_PENDING)}</strong></td>
    <td><span class="status-badge status-pending">⏳ बाकी ${fmt(TOTAL_EXPENSES_PENDING)}</span></td>
  `;
  body.appendChild(totalRow);
}

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
  const collected =
    currentMembership === "all" ? TOTAL_COLLECTION : s.collected;
  document.getElementById("totalCollected").textContent = fmt(collected);
  document.getElementById("totalPending").textContent = fmt(s.pending);
  document.getElementById("netBalance").textContent = fmt(TOTAL_COLLECTION - TOTAL_EXPENSES_PAID);
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
  const controlsSection = document.querySelector(".controls-section");
  const membersTableSection = document.querySelector(".table-section");
  const receiptSection = document.getElementById("receiptSection");
  const expenseSection = document.getElementById("expenseSection");

  if (currentMembership === "receipts") {
    controlsSection.style.display = "none";
    membersTableSection.style.display = "none";
    receiptSection.style.display = "block";
    expenseSection.style.display = "none";
    renderReceipts();
    return;
  }

  if (currentMembership === "expenses") {
    controlsSection.style.display = "none";
    membersTableSection.style.display = "none";
    receiptSection.style.display = "none";
    expenseSection.style.display = "block";
    renderExpenses();
    return;
  }

  controlsSection.style.display = "";
  membersTableSection.style.display = "";
  receiptSection.style.display = "none";
  expenseSection.style.display = "none";

  const data = getFilteredData();
  renderTable(data);
  renderSummary(data);
}

// Initial summary + table
const allData = enriched;
renderSummary(allData);
updateTable();

// Initial guests & sponsors (amounts derived from the guests array)
renderGuests();

// Evaluate the budget deficit banner on load, not only on the expenses tab
updateBudgetDeficitAlert();

// Membership tab targets are derived from the single TARGET_* constants
document.getElementById("navType100").textContent =
  "100% Membership (" + fmt(TARGET_FULL) + ")";
document.getElementById("navType50").textContent =
  "50% Membership (" + fmt(TARGET_HALF) + ")";

// Sync receipt badge & nav label from dynamic receipt total
document.getElementById("receiptTotalBadge").textContent = "एकूण पावती जमा: " + fmt(RECEIPT_COLLECTION) + " ✅ पूर्ण";
document.getElementById("receiptNavLabel").textContent = "पावती संग्रह (" + fmt(RECEIPT_COLLECTION) + ")";

// Animate initial summary with full totals
const allSummary = computeSummary(allData);
animateValue(document.getElementById("totalMembers"), allSummary.count);
animateValue(document.getElementById("totalCollected"), TOTAL_COLLECTION, "₹");
animateValue(document.getElementById("totalPending"), allSummary.pending, "₹");
animateValue(document.getElementById("netBalance"), TOTAL_COLLECTION - TOTAL_EXPENSES_PAID, "₹");

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
    if (type === "100") currentMembership = "100%";
    else if (type === "50") currentMembership = "50%";
    else if (type === "receipts") currentMembership = "receipts";
    else if (type === "expenses") {
      currentMembership = "expenses";
      if (isBudgetDeficit()) playWarningBeep();
    }
    else currentMembership = "all";
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
   (history2025 array lives in the source data
    block at the top of this file)
   ============================================ */
const historyEnriched = history2025.map((m) => {
  const status = m.paid >= m.target ? "paid" : m.paid > 0 ? "partial" : "pending";
  return { ...m, pending: m.target - m.paid, status };
});

const hGoal = historyEnriched.reduce((s, m) => s + m.target, 0);
const hCollected = historyEnriched.reduce((s, m) => s + m.paid, 0);
const hRemaining = historyEnriched.reduce((s, m) => s + m.pending, 0);

document.getElementById("hGoal").textContent = "₹" + hGoal.toLocaleString("en-IN");
document.getElementById("hCollected").textContent = "₹" + hCollected.toLocaleString("en-IN");
document.getElementById("hRemaining").textContent = "₹" + hRemaining.toLocaleString("en-IN");
document.getElementById("pendingRupeesBadge").textContent = "Pending Rupees " + fmt(hRemaining);

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
