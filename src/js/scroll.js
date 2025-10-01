function scrollInit() {
  const header = document.getElementById("header-id");
  const faq = document.getElementById("faqs-id");
  if (!header || !faq) return;

  window.addEventListener('scroll', function() {
      let scrollActiveEvent = window.scrollY;
      if (scrollActiveEvent >= 100) {
          header.style.display = "none";
          faq.style.position = "fixed";
          faq.style.top = "10px"; 
      } else {
          header.style.display = "block"; 
          faq.style.position = "static"; 
      }
  });
}

export default scrollInit;
