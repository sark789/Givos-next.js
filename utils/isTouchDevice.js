function isTouchDevice() {
  return (
    typeof window !== "undefined" &&
    window.outerWidth < 1200 &&
    ("ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0)
  );
}

export default isTouchDevice;
