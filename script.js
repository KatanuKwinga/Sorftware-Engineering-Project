const numberDropdown = document.getElementById("number-select");
    const maxNumber = 20; // Change this to your desired max number

    for (let i = 1; i <= maxNumber; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        numberDropdown.appendChild(option);
    }