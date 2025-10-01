function itemHover() {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const img = item.querySelector(".item_img img");

    item.addEventListener("mouseenter", () => {
      img.classList.add("img-hover");   // aplica o efeito
      item.classList.add("item-overlay");
    });

    item.addEventListener("mouseleave", () => {
      img.classList.remove("img-hover");
      item.classList.remove("item-overlay");
    });
  });
}

export default itemHover;
