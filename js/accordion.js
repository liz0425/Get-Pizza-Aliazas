const storyTabs = document.querySelectorAll(".storyTab");

storyTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const content = tab.nextElementSibling;

    document.querySelectorAll(".storyContent").forEach((item) => {
      if (item !== content) {
        item.classList.add("hidden");
      }
    });

    content.classList.toggle("hidden");
  });
});