document.addEventListener("DOMContentLoaded", function() {
    // Select the elements from the DOM
    const wordDisplay = document.getElementById("wordDisplay");
    const hoverImage = document.getElementById("hoverImage");
  
    // Define an array of words to cycle through
    const words = ["Libya", "Tripoly", "The Medi Sea", "Corinthia"];
  
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
  
    // Add event listener to the image to call changeWord function on mouseover
    hoverImage.addEventListener("mouseover", changeWord);
  });