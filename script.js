// Scroll animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

// ML Prediction
async function predict() {
  const data = {
    age: document.getElementById("age").value,
    income: document.getElementById("income").value,
    credit_score: document.getElementById("credit").value,
    loan_amount: document.getElementById("loan").value
  };

  const res = await fetch("https://ml-cloud-project.onrender.com/predict", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });

  const result = await res.json();
  document.getElementById("result").innerText = JSON.stringify(result);
}