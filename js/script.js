/*
    Step 0: Wait for the DOM to fully load before selecting elements:
    - Ensures all elements (like buttons and wrapper) exist before running JS
    - This is a best practice when using vanilla JS
    Link: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
*/
document.addEventListener("DOMContentLoaded", () => {

    /* 
        Step 1: Select the main wrapper element
        - All content for the lesson pages is wrapped in <div class="wrapper">
        - Changing classes here will affect the entire app (all child elements)
        - querySelector selects the first element that matches the CSS selector
        Link: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    */
    const wrapper = document.querySelector('.wrapper');

    /* 
        Step 2: Select the theme buttons by their IDs
        - getElementById() method returns the element with the matching ID
        - These buttons trigger theme switching when clicked
        Link: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
    */
    const lightBtn = document.getElementById('lightBtn');
    const darkBtn = document.getElementById('darkBtn');

    // Select body element
    // document.body => To select the <body> element
    const body = document.body;

    /*
        Step 3: Add click event listener for Light Theme
        - addEventListener() method listens for an event on the element ('click')
        - Arrow function executes when the event occurs
        - classList.add() adds a CSS class
        - classList.remove() removes a CSS class
        - Adding 'light' and removing 'dark' applies the light theme
        Link: 
            - addEventListener: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
            - classList: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
            - Arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    */
    lightBtn.addEventListener('click', () => {
        wrapper.classList.add('light');    // Apply light theme styles
        wrapper.classList.remove('dark');  // Remove dark theme styles if present

        // Set body background for light theme
        // style.backgroundColor => To change the inline CSS background of the body to a light color
        body.style.backgroundColor = "#f2e6d9"; // soft golden-beige
    });

    /* 
        Step 4: Add click event listener for Dark Theme
        - Works similarly to Light Theme, but inverse
        - Adding 'dark' class applies dark styles, removing 'light' ensures no style conflict
    */
    darkBtn.addEventListener('click', () => {
        wrapper.classList.add('dark');     // Apply dark theme styles
        wrapper.classList.remove('light'); // Remove light theme styles

        // Set body background for dark theme
        // style.backgroundColor => To change the inline CSS background of the body to dark color
        body.style.backgroundColor = "#989694"; // dark gray
    });

    /* 
        Step 5: Set default theme on page load
        - Here we use Light Theme as default
        Link: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    */
    wrapper.classList.add('light');
}); // End: DOMContentLoaded
