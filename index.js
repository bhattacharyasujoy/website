// Select the HTML element with the class "counter-number" and store it in the 'counter' variable.
const counter = document.querySelector(".counter-number");

// Define an asynchronous function called 'updateCounter'.
async function updateCounter() {
    // Use the 'fetch' function to make an asynchronous HTTP request to the specified Lambda function URL.
    let response = await fetch("lambda url");

    // Parse the response data as JSON using the 'json' method.
    let data = await response.json();

    // Update the content of the 'counter' element with the fetched data.
    counter.innerHTML = `View: ${data}`;
}

// Call the 'updateCounter' function to initiate the data fetching and updating process.
updateCounter();
