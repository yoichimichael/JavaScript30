const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;

function handleCheck(e) {
	// Check if they had the shift key down
	// AND check that they are checking it
	console.log(e)
	let inBetween = false;
	if(e.shiftKey && this.checked) {
		// loop over every single checkbox
		checkboxes.forEach(checkbox => {
			console.log(checkbox)
			if(checkbox === this || checkbox === lastChecked) {

				// toggles inBetween
				inBetween = !inBetween;
				// console.log("starting to check for inBetween")
			}

			if(inBetween) {
				checkbox.checked = true;
			}
		})
	}
	lastChecked = this;
}

// click events will fire even when if use your keyboard 
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

/*
	1. assign checkboxes into variable
	2. add event listeners to checkboxes
	3. declare lastChecked variable, but don't assign a value
	4. declare and write handleCheck method. This method will:
		- assign a value of 'this' to lastChecked
		- if the the shift key is depressed while the box is checked, a loop over each box will be started
			- if the box is between a previously checked box AND the current box being checked, those boxes will also be checked
		a. declare a toggle variable to determine wether
*/