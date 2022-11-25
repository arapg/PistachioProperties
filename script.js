const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const contactForm = document.querySelector("#contact");
const thankYou = document.querySelector("#thank-you");

document.querySelector('#contact').addEventListener('submit', (e) => {
  //Prevents site from reloading when "Submit" is clicked
  e.preventDefault();

  contactForm.style.display = "none";

  thankYou.style.display = "block";
})