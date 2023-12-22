fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const headers = Object.keys(data.products[Object.keys(data.products)[0]]);
    const availableFields = document.getElementById("available-fields");
    const displayFields = document.getElementById("display-fields");

    const addOptionsToDisplay = () => {
      const selectedOptions = Array.from(availableFields.selectedOptions);
      selectedOptions.forEach((option) => {
        if (!displayFields.querySelector(`option[value="${option.value}"]`)) {
          displayFields.appendChild(option.cloneNode(true));
        }
      });
    };

    const removeOptionsFromDisplay = () => {
      const selectedOptions = Array.from(displayFields.selectedOptions);
      selectedOptions.forEach((option) => {
        displayFields.removeChild(option);
      });
    };

    headers.forEach((field) => {
      availableFields.innerHTML += `<option value="${field}">${field}</option>`;
    });

    document
      .getElementById("add-field")
      .addEventListener("click", addOptionsToDisplay);
    document
      .getElementById("remove-field")
      .addEventListener("click", removeOptionsFromDisplay);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
