// Heng Kimjuy Energy - Main initialization

document.addEventListener('DOMContentLoaded', function () {
  initI18n();
  initNavigation();
  initGallery();
  updateOpenStatus();
  setInterval(updateOpenStatus, 60000);
});

function updateOpenStatus() {
  var now = new Date();
  var day = now.getDay(); // 0=Sun
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var currentTime = hours * 60 + minutes;
  var openTime = 8 * 60 + 30;  // 08:30
  var closeTime = 18 * 60 + 30; // 18:30
  var isOpen = day !== 0 && currentTime >= openTime && currentTime < closeTime;

  var dot = document.getElementById('status-dot');
  var text = document.getElementById('status-text');
  if (dot) {
    dot.className = isOpen
      ? 'w-2 h-2 bg-green-400 rounded-full animate-pulse'
      : 'w-2 h-2 bg-red-400 rounded-full';
  }
  if (text) {
    var lang = document.documentElement.lang || 'th';
    var labels = { th: ['เปิดให้บริการ', 'ปิดให้บริการ'], en: ['Open', 'Closed'], zh: ['营业中', '已关门'] };
    var l = labels[lang] || labels.th;
    text.textContent = isOpen ? l[0] : l[1];
  }
}
