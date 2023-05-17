const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // x, y is the value of distance in X-axis and y-axis resp from the left of screen and top of screen resp, when the button is clicked anywhere
    const x = e.clientX;
    const y = e.clientY;

    // buttonTop and buttonLeft gives the value of the topest and leftest of the target button from the top of the screen and left end of screen resp
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // I want to get the exact location of click in that button
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // I am creating span and adding class, styles to it so that I can position those circles based on click and apply animation to each of them
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    button.appendChild(circle);

    // incorporated settimeout because i want to avoid the old span elements from being accumulated each time I click any part of button
    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});
