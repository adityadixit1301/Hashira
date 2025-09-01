// Function to convert a number from any base to base 10
function convertToBase10(value, base) {
  return parseInt(value, base);
}

// Function to find polynomial coefficients from roots
function findCoefficients(roots) {
  const n = roots.length;
  // Initialize coefficients for a polynomial of degree 0: P(x) = 1
  let coeffs = [1]; 

  for (let i = 0; i < n; i++) {
    const r = roots[i]; // Current root
    let newCoeffs = new Array(coeffs.length + 1).fill(0);
    
    // Multiply the current polynomial (represented by coeffs) by (x - r)
    for (let j = 0; j < coeffs.length; j++) {
      // The x term
      newCoeffs[j + 1] += coeffs[j];
      // The -r term
      newCoeffs[j] -= r * coeffs[j];
    }
    coeffs = newCoeffs;
  }
  
  return coeffs;
}

// Second Test Case from the images
const testCase2 = {
  "keys": {
    "n": 10,
    "k": 7
  },
  "1": { "base": "6", "value": "13444211440455345511" },
  "2": { "base": "15", "value": "aed7015a346d635" },
  "3": { "base": "15", "value": "6aeeb69631c227c" },
  "4": { "base": "16", "value": "e1b5e05623d881f" },
  "5": { "base": "8", "value": "316034514573652620673" },
  "6": { "base": "3", "value": "2122212201122002221120200210011020220200" },
  "7": { "base": "3", "value": "20120221122211000100210021102001201112121" },
  "8": { "base": "6", "value": "20220554335330240002224253" },
  "9": { "base": "12", "value": "45153788322a1255483" },
  "10": { "base": "7", "value": "1101613130313526312514143" }
};

// Extract roots from the test case
const rootData = Object.keys(testCase2).filter(key => key !== "keys");
const roots = rootData.map(key => {
  const base = testCase2[key].base;
  const value = testCase2[key].value;
  return convertToBase10(value, base);
});

// Calculate the coefficients
const coefficients = findCoefficients(roots);

// Output the coefficients
console.log("Roots (in base 10):", roots);
console.log("Coefficients of the polynomial (from highest degree to lowest):", coefficients);
