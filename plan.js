function showPlan(planNumber) {
    // Hide all plans
    const plans = document.querySelectorAll('.plan');
    plans.forEach(plan => plan.style.display = 'none');

    // Show selected plan
    const selectedPlan = document.getElementById('plan' + planNumber);
    if(selectedPlan) {
        selectedPlan.style.display = 'table';
    }
}

// Show Plan 1 by default
showPlan(1);
