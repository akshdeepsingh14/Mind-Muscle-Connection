function showPlan(num) {
    const plans = document.querySelectorAll(".plan");
    const buttons = document.querySelectorAll(".plan-btn");

    plans.forEach(plan => plan.style.display = "none");
    document.getElementById(`plan${num}`).style.display = "table";

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}

// Show first plan by default
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("plan1").style.display = "table";
    document.querySelectorAll(".plan-btn")[0].classList.add("active");
});
