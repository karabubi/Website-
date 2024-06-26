document.addEventListener("DOMContentLoaded", function() {
    // Select the elements from the DOM
    const wordDisplay = document.getElementById("wordDisplay");
    const changeButton = document.getElementById("changeButton");
  
    // Define an array of words to cycle through
    const words = ["Goodbye", "Hola", "Bonjour", "Ciao", "Namaste"];
  
    // Initialize index to 0 (first word in array)
    let currentWordIndex = 0;
  
    // Function to change the word
    function changeWord() {
      // Update the text content of the element
      wordDisplay.textContent = words[currentWordIndex];
  
      // Move to the next word in the array
      currentWordIndex++;
  
      // If we've reached the end of the array, loop back to the beginning
      if (currentWordIndex >= words.length) {
        currentWordIndex = 0;
      }
    }
  
    // Add event listener to the button to call changeWord function on click
    changeButton.addEventListener("click", changeWord);
  });

  





