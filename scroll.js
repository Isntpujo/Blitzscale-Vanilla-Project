document.querySelectorAll(".sal-scroll").forEach((el) => {
  el.setAttribute("data-sal", "slide-up");
  el.setAttribute("data-sal-delay", "50");
  el.setAttribute("data-sal-duration", "1000");
  el.setAttribute("data-sal-repeat", "true");
});

sal();
