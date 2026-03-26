// Heng Kimjuy Energy - Gallery and lightbox module

// Module state
var galleryImages = [];
var currentImageIndex = 0;
var previouslyFocusedElement = null;
var touchStartX = 0;
var touchEndX = 0;

/**
 * Initialize gallery — set up keyboard and touch event listeners.
 */
function initGallery() {
  galleryImages = Array.from(document.querySelectorAll('#gallery img[loading="lazy"]'));

  document.addEventListener('keydown', function (e) {
    var lightbox = document.getElementById('lightbox');
    if (!lightbox || lightbox.classList.contains('hidden')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      navigateLightbox(-1);
    } else if (e.key === 'ArrowRight') {
      navigateLightbox(1);
    } else if (e.key === 'Tab') {
      trapFocus(e);
    }
  });

  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }
}

/**
 * Open the lightbox overlay with the given image.
 */
function openLightbox(imageSrc, altText) {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  if (!lightbox || !lightboxImg) return;

  previouslyFocusedElement = document.activeElement;

  lightboxImg.src = imageSrc;
  lightboxImg.alt = altText || '';

  for (var i = 0; i < galleryImages.length; i++) {
    if (galleryImages[i].src === imageSrc) {
      currentImageIndex = i;
      break;
    }
  }

  // Show: remove hidden, add flex
  lightbox.classList.remove('hidden', 'lightbox-exit');
  lightbox.classList.add('flex', 'lightbox-enter');
  document.body.classList.add('lightbox-open');

  var closeBtn = lightbox.querySelector('button[aria-label="Close"]');
  if (closeBtn) closeBtn.focus();
}

/**
 * Close the lightbox overlay — immediate, no animation dependency.
 */
function closeLightbox() {
  var lightbox = document.getElementById('lightbox');
  if (!lightbox || lightbox.classList.contains('hidden')) return;

  // Hide: remove flex, add hidden
  lightbox.classList.remove('flex', 'lightbox-enter');
  lightbox.classList.add('hidden');
  document.body.classList.remove('lightbox-open');

  if (previouslyFocusedElement && previouslyFocusedElement.focus) {
    previouslyFocusedElement.focus();
  }
}

/**
 * Navigate to the next or previous image in the gallery.
 */
function navigateLightbox(direction) {
  if (galleryImages.length === 0) return;
  currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
  var lightboxImg = document.getElementById('lightbox-img');
  var img = galleryImages[currentImageIndex];
  if (lightboxImg && img) {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || '';
  }
}

function handleSwipe() {
  var swipeDistance = touchEndX - touchStartX;
  if (Math.abs(swipeDistance) > 50) {
    navigateLightbox(swipeDistance < 0 ? 1 : -1);
  }
}

function trapFocus(e) {
  var lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  var focusable = lightbox.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusable.length === 0) return;
  var first = focusable[0];
  var last = focusable[focusable.length - 1];
  if (e.shiftKey) {
    if (document.activeElement === first) { e.preventDefault(); last.focus(); }
  } else {
    if (document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
}
