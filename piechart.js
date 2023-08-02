// // Get the input elements
// const inputValueInput = document.querySelector('.InputValue input');
// const maxValueInput = document.querySelector('.MaxValue input');
// const percentageText = document.querySelector('.PercentageText');

// // Add event listeners to input fields
// inputValueInput.addEventListener('input', updateGraph);
// maxValueInput.addEventListener('input', updateGraph);

// function updateGraph() {
//   const inputValue = parseFloat(inputValueInput.value);
//   const maxValue = parseFloat(maxValueInput.value);
  
//   // Calculate percentage
//   const percentage = (inputValue / maxValue) * 100;
  
//   // Update the graph text
//   percentageText.textContent = `${percentage.toFixed(2)}%`;
  
//   // Update the graph bar
//   const rectangle1 = document.querySelector('.Rectangle1');
//   rectangle1.style.height = `${percentage}%`;
// }

// // Initial update to set the graph based on default input values
// updateGraph();