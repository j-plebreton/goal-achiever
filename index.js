const goalSelection = document.getElementById("goal-selection");
const compatibleEnvironmentsList = document.getElementById(
    "compatible-environments-list"
);

fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        // Populate the goal selection dropdown
        data.goals.forEach((goal) => {
            const option = document.createElement("option");
            option.text = goal;
            option.value = goal;
            goalSelection.appendChild(option);
        });

        // Display a list of compatible environments when the user selects some goals
        goalSelection.addEventListener("change", () => {
            // Get all selected goals
            const selectedGoals = Array.from(
                goalSelection.selectedOptions,
                (option) => option.value
            );

            // Find the compatible environments that support all selected goals
            const compatibleEnvironments = data.evnironments.filter(
                (environment) =>
                    selectedGoals.every((goal) =>
                        environment.goals.includes(goal)
                    )
            );

            // Display the compatible environments in a list
            compatibleEnvironmentsList.innerHTML = compatibleEnvironments
                .map((environment) => `<li>${environment.name}</li>`)
                .join("");
        });
    })
    .catch((error) => console.error(error));
