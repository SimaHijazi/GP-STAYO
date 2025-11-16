/* ==== EDIT / SAVE ==== */
const editBtn = document.querySelector("#editBtn");
const saveBtn = document.querySelector("#saveBtn");
const fields = document.querySelectorAll(".form-control");

editBtn.addEventListener("click", () => {
  fields.forEach(f => f.disabled = false);

  editBtn.style.display = "none";
  saveBtn.style.display = "inline-block";
});

saveBtn.addEventListener("click", () => {
  fields.forEach(f => f.disabled = true);

  saveBtn.style.display = "none";
  editBtn.style.display = "inline-block";

  alert("Profile updated successfully!");
});

/* ==== CHANGE PROFILE IMAGE ==== */
const changeImgBtn = document.getElementById("changeImgBtn");
const imageUpload = document.getElementById("imageUpload");
const profileImage = document.getElementById("profileImage");

changeImgBtn.addEventListener("click", () => {
  imageUpload.click();
});

imageUpload.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    profileImage.src = URL.createObjectURL(file);
  }
});

/* ==== SCROLL REVEAL ==== */
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.2 });

revealItems.forEach(el => observer.observe(el));
