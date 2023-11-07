  // Mendeteksi gesture pinch-zoom pada perangkat mobile
  document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
  });

  // Mendeteksi event scroll pada elemen dengan kelas "scrollable"
  var scrollableElements = document.getElementsByClassName('scrollable');
  for (var i = 0; i < scrollableElements.length; i++) {
    scrollableElements[i].addEventListener('wheel', function (e) {
      e.preventDefault();
      this.scrollLeft += e.deltaY;
    });
  }
