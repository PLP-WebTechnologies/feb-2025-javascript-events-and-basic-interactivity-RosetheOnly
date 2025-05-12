// Event: Change Text
document.getElementById("text-btn").addEventListener("click", () => {
    document.getElementById("main-heading").textContent = "Text Changed!";
  });
  
  // Event: Change Color
  document.getElementById("color-btn").addEventListener("click", () => {
    document.body.style.backgroundColor = "#ffeaa7";
  });
  
  // Event: Double-click Secret
  document.getElementById("secret-btn").addEventListener("dblclick", () => {
    alert("🎉 Secret unlocked!");
  });
  
  // Image Slideshow
  const images = [
    "https://via.placeholder.com/200/ff7675",
    "https://via.placeholder.com/200/74b9ff",
    "https://via.placeholder.com/200/55efc4"
  ];
  let current = 0;
  document.getElementById("next-img").addEventListener("click", () => {
    current = (current + 1) % images.length;
    document.getElementById("gallery-img").src = images[current];
  });
  
  // Accordion
  const accHeader = document.querySelector(".accordion-header");
  const accContent = document.querySelector(".accordion-content");
  accHeader.addEventListener("click", () => {
    accContent.style.display = accContent.style.display === "block" ? "none" : "block";
  });
  
  // Keypress Detection
  document.addEventListener("keypress", (e) => {
    console.log(`You pressed: ${e.key}`);
  });
  
  // Form Validation
  const form = document.getElementById("myForm");
  const feedback = document.getElementById("form-feedback");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email");
    const password = document.getElementById("password");
  
    let messages = [];
    if (!email.value.includes("@")) {
      messages.push("Invalid email format.");
    }
  
    if (password.value.length < 8) {
      messages.push("Password must be at least 8 characters.");
    }
  
    feedback.textContent = messages.length ? messages.join(" ") : "Form submitted successfully!";
  });
  
  // Real-time feedback
  document.getElementById("password").addEventListener("input", (e) => {
    const msg = e.target.value.length < 8 ? "Password too short" : "Password length OK";
    document.getElementById("form-feedback").textContent = msg;
  });
  