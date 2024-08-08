console.log("Script running...")
// Task 1: Intro section
// Select the location button
const locationButton =
  document.getElementById('location');

// Select the empty p tag under the button

const locationText = 
  document.getElementById('locationText')

// Add an event listener on the location button such that when it is clicked, the text in the p tag is "1300 Boynton Ave (moving soon!)"

locationButton.addEventListener('click', () =>
  {
    locationText.textContent = '1300 Boynton Ave(moving soon!)';
  })

// Task 2: Our Values section
// Select the h3 with S under "Our Values"

let S = 
  document.querySelector("#score1")
console.log(S)


// Add an event listener on the h3 such that when it is clicked, the text changes to "Self-Awareness"

S.addEventListener('click', () =>
  {
    S.textContent = 'Self-awarness';
  })
// Task 3: Uniform section
// Select the joggers image

const locationimg = 
  document.getElementById('joggers')

// Add an event listener on the image such that when it is clicked, the src becomes joggers-back.webp

locationimg.addEventListener('click',() => {
  locationimg.src = 'joggers-back.webp';
})


// EXTRA CREDIT
// Set up the DOM manipulation flows for the rest of the SCORE values (consistency, ownership, resilience, excellent)




// Comment out the event listener in the uniform section and do the following instead
// Add an event listener on the image such that when the mouse is over it, the src becomes joggers-back.webp



// Add an event listener on the image such that when the mouse is off it, the src becomes joggers-front.webp




