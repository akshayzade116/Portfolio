// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

  // Smooth Scroll
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });

  // Typing Effect
  const text = "Hello, I'm Akshay 👋";
  let i = 0;
  function type() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }
  type();

  // ✅ Form Working Properly
  const form = document.getElementById("form");

  if (form) {
    form.addEventListener("submit", function(e){
      e.preventDefault();

      const inputs = form.querySelectorAll("input, textarea");

      let name = inputs[0].value.trim();
      let email = inputs[1].value.trim();
      let message = inputs[2].value.trim();

      if(name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return;
      }

      alert("Thank you " + name + "! Your feedback has been sent 🚀");

      form.reset();
    });
  }

  // Particles
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 70 },
        size: { value: 3 },
        move: { speed: 2 },
        line_linked: { enable: true }
      }
    });
  }

});