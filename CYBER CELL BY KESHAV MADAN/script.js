function expandBox(box) {
    const isExpanded = box.style.transform === "scale(1.2)";
  
    if (isExpanded) {
      box.style.transform = "scale(1)"; /* Return box to normal size */
      box.style.zIndex = "0"; /* Reset box z-index */
      box.style.boxShadow = "none"; /* Reset box shadow */
    } else {
      box.style.transform = "scale(1.2)"; /* Enlarge clicked box */
      box.style.zIndex = "1"; /* Bring box to the front */
      box.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.8)"; /* Enhance shadow */
  
      const allBoxes = document.querySelectorAll(".team-member");
      allBoxes.forEach((item) => {
        if (item !== box) {
          item.style.transform = "scale(0.9)"; /* Shrink other boxes */
          item.style.zIndex = "0"; /* Push other boxes to the back */
        }
      });
    }
  }
  