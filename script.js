const form = document.getElementById('carbon-form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get input values
    const meatConsumption = parseFloat(document.getElementById('meat').value);
    const milesDriven = parseFloat(document.getElementById('miles').value);
    const electricityUsage = parseFloat(document.getElementById('electricity').value);

    // Calculate carbon footprint (Replace with your specific calculations)
    // These are simplified calculations, you might need more accurate factors
    const meatCarbonFootprint = meatConsumption * 2.9; // kg CO2e/kg meat (approximate)
    const transportationCarbonFootprint = milesDriven * 0.4; // kg CO2e/mile (approximate)
    const electricityCarbonFootprint = electricityUsage * 0.4; // kg CO2e/kWh (approximate)

    const totalCarbonFootprint = meatCarbonFootprint + transportationCarbonFootprint + electricityCarbonFootprint;

    // Display the result
    result.textContent = `Your estimated carbon footprint is: ${totalCarbonFootprint.toFixed(2)} kg CO2e`;
});