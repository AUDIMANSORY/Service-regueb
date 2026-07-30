// دالة التنقل بين الأقسام الرئيسية
function showMainSection(sectionId, btnElement) {
  const sections = document.querySelectorAll('.main-section');
  sections.forEach(sec => sec.style.display = 'none');

  const navBtns = document.querySelectorAll('.main-nav .nav-btn');
  navBtns.forEach(btn => btn.classList.remove('active'));

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = 'block';
  }
  if (btnElement) {
    btnElement.classList.add('active');
  }

  const deliverySubNav = document.getElementById('delivery-sub-nav');
  if (deliverySubNav) {
    deliverySubNav.style.display = (sectionId === 'delivery-section') ? 'flex' : 'none';
  }

  const craftsmenSubNav = document.getElementById('craftsmen-sub-nav');
  if (craftsmenSubNav) {
    craftsmenSubNav.style.display = (sectionId === 'craftsmen-section') ? 'flex' : 'none';
  }

  const fabBtn = document.getElementById('fabAddBtn');
  if (fabBtn) {
    fabBtn.style.display = (sectionId === 'all-section') ? 'flex' : 'none';
  }
}

// دالة التنقل بين الأقسام الفرعية للخدمات والحرفيين
function showCraftsmenSub(subId, btnElement) {
  const subContents = document.querySelectorAll('.craftsmen-sub-content');
  subContents.forEach(sub => sub.style.display = 'none');

  const subBtns = document.querySelectorAll('#craftsmen-sub-nav .sub-btn');
  subBtns.forEach(btn => btn.classList.remove('active'));

  const targetSub = document.getElementById(subId);
  if (targetSub) {
    targetSub.style.display = 'block';
  }
  if (btnElement) {
    btnElement.classList.add('active');
  }
}

// دالة التنقل بين الأقسام الفرعية للتوصيل
function showDeliverySub(subId, btnElement) {
  const subContents = document.querySelectorAll('.delivery-sub-content');
  subContents.forEach(sub => sub.style.display = 'none');

  const subBtns = document.querySelectorAll('#delivery-sub-nav .sub-btn');
  subBtns.forEach(btn => btn.classList.remove('active'));

  const targetSub = document.getElementById(subId);
  if (targetSub) {
    targetSub.style.display = 'block';
  }
  if (btnElement) {
    btnElement.classList.add('active');
  }
}

// دالة البحث في قسم التكوين والتدريب المهني
function filterTrainingServices() {
  const input = document.getElementById('searchTrainingInput').value.toLowerCase();
  const container = document.getElementById('training-services-container');
  if (!container) return;

  const cards = container.querySelectorAll('.training-card');
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(input) ? 'flex' : 'none';
  });
}

// دالة البحث في قسم الحلويات
function filterSweetsServices() {
  const input = document.getElementById('searchSweetsInput').value.toLowerCase();
  const container = document.getElementById('sweets-services-container');
  if (!container) return;

  const cards = container.querySelectorAll('.sweets-card');
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(input) ? 'flex' : 'none';
  });
}

// دالة البحث في قسم صقل الكرلاج والرخام
function filterPolishingServices() {
  const input = document.getElementById('searchPolishingInput').value.toLowerCase();
  const container = document.getElementById('polishing-services-container');
  if (!container) return;

  const cards = container.querySelectorAll('.polishing-card');
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(input) ? 'flex' : 'none';
  });
}

// دالة البحث في قسم التمريض والصحة
function filterHealthServices() {
  const input = document.getElementById('searchHealthInput').value.toLowerCase();
  const container = document.getElementById('health-services-container');
  if (!container) return;

  const cards = container.querySelectorAll('.health-card');
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(input) ? 'flex' : 'none';
  });
}

// دالة التبديل بين خطوط اللواجات
function switchRoute() {
  const selectedRoute = document.getElementById('routeSelect').value;
  const routeGroups = document.querySelectorAll('.route-group');
  routeGroups.forEach(group => group.style.display = 'none');

  const targetRoute = document.getElementById('route-' + selectedRoute);
  if (targetRoute) {
    if (targetRoute.classList.contains('drivers-grid')) {
      targetRoute.style.display = 'grid';
    } else {
      targetRoute.style.display = 'block';
    }
  }
}

// دالة البحث في سائقي اللواجات
function filterDrivers() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const activeRoute = document.querySelector('.route-group[style*="display: grid"], .route-group:not([style*="display: none"])');
  if (!activeRoute) return;

  const cards = activeRoute.querySelectorAll('.driver-card');
  cards.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = name.includes(input) ? 'flex' : 'none';
  });
}

// دالة البحث في عوامل توصيل الدراجات
function filterBikeDrivers() {
  const input = document.getElementById('searchBikeInput').value.toLowerCase();
  const container = document.getElementById('bike-drivers-container');
  if (!container) return;

  const cards = container.querySelectorAll('.driver-card');
  cards.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = name.includes(input) ? 'flex' : 'none';
  });
}
