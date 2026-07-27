let currentMainCategory = 'all';

// التصفية الكبرى (الكل / خدمات / توصيل)
function selectMainCategory(catName, btn) {
  currentMainCategory = catName;

  // تحديث الزر النشط
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const deliverySubBar = document.getElementById('deliverySubBar');

  // إظهار وإخفاء شريط التوصيل الفرعي
  if (catName === 'توصيل') {
    deliverySubBar.style.display = 'flex';
  } else {
    deliverySubBar.style.display = 'none';
  }

  // فلترة البطاقات
  const cards = document.querySelectorAll('.ad-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (catName === 'all' || cardCat === catName) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// التصفية الفرعية لـ (أصحاب الموتورات / السيارات / اللواج)
function filterSubCategory(subType, btn) {
  document.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const cards = document.querySelectorAll('.ad-card[data-category="توصيل"]');
  cards.forEach(card => {
    const cardSub = card.getAttribute('data-sub');
    if (subType === 'all-delivery' || cardSub === subType) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// بحث نصي
function filterAds() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.ad-card');

  cards.forEach(card => {
    const title = card.querySelector('.ad-title').innerText.toLowerCase();
    if (title.includes(input)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// نشر إعلان تجريبي
function handleAdPublish(e) {
  e.preventDefault();
  const pubBtn = document.getElementById('pubBtn');
  pubBtn.innerText = 'جاري النشر... ⏳';
  pubBtn.disabled = true;

  setTimeout(() => {
    alert('✅ تم نشر إعلانك بنجاح على الواجهة!');
    window.location.href = 'index.html';
  }, 800);
}

// مشاركة رابط الإعلان
function shareAd() {
  const url = window.location.href;
  const text = `تفقد هذا الإعلان على منصة Service Regueb: ${url}`;
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
}
const API_URL = 'https://ad-manager-express--salhiyahya9119.replit.app';
async function signup(name, phone, password) {
  const res = await fetch(`${API_URL}/api/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phone, password })
  });
  const data = await res.json();
  alert(data.message || data.error);
}
async function login(phone, password) {
  const res = await fetch(`${API_URL}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, password })
  });
  const data = await res.json();
  if (data.token) {
    localStorage.setItem('token', data.token);
    alert('تم تسجيل الدخول بنجاح!');
  } else {
    alert(data.error);
  }
}
async function getAds() {
  const res = await fetch(`${API_URL}/api/ads`);
  const ads = await res.json();
  console.log(ads);
}
