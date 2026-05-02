// Scroll reveal
const elements = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
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