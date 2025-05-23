function showCourses() {
  const courseSection = document.getElementById("courses");
  if (courseSection) {
    courseSection.scrollIntoView({ behavior: "smooth" });
  }
}

function submitForm(event) {
  event.preventDefault();
  alert("✅ Thank you for registering! Our team will contact you shortly.");
  event.target.reset();
}

// Show WhatsApp icon after 5 seconds
setTimeout(() => {
  document.getElementById("whatsapp-icon").style.display = "flex";
}, 5000);
