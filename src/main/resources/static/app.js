const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    // Check if the input box is empty
    if (inputBox.value.trim() === '') {
        alert("You must write something to add a task!");
    } else {
        // Create a new list item (li)
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        // Create a span for the "x" (delete button)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for the multiplication sign (used as 'X')
        li.appendChild(span);
    }
    inputBox.value = ""; // Clear the input field
    saveData(); // Save the new state to localStorage
}

// Event listener for clicking on the list container
listContainer.addEventListener("click", function(e) {
    // If the click target is an LI (the task text itself)
    if (e.target.tagName === "LI") {
        // Toggle the 'checked' class to mark as complete/incomplete
        e.target.classList.toggle("checked");
        saveData();
    } 
    // If the click target is a SPAN (the 'X' delete button)
    else if (e.target.tagName === "SPAN") {
        // Remove the parent li element (the entire task)
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Saves the current HTML content of the list to the browser's local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Loads and displays the saved list content when the page opens
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Load tasks on startup
showTask();