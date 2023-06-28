// Function to convert temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert temperature from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get user input values
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;

    // Perform temperature conversion
    let result;
    if (unit === 'celsius') {
        const fahrenheit = celsiusToFahrenheit(temperature);
        result = `${temperature} Celsius = ${fahrenheit.toFixed(2)} Fahrenheit`;
    } else {
        const celsius = fahrenheitToCelsius(temperature);
        result = `${temperature} Fahrenheit = ${celsius.toFixed(2)} Celsius`;
    }

    // Display the conversion result
    document.getElementById('result').textContent = result;
}

// Add event listener to the form
document.getElementById('temperatureForm').addEventListener('submit', handleSubmit);
