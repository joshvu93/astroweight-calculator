// Write your JavaScript code here!
var planets = [
    ["Pluto", 0.06],
    ["Neptune", 1.148],
    ["Uranus", 0.917],
    ["Saturn", 1.139],
    ["Jupiter", 2.64],
    ["Mars", 0.3895],
    ["Moon", 0.1655],
    ["Earth", 1],
    ["Venus", 0.9032],
    ["Mercury", 0.377],
    ["Sun", 27.9]
];
var planetsList = planets.reverse();
planetsList.forEach(menu);

function menu(item) {
    var st = document.createElement("option");
    st.value = item[0];
    document.getElementById("planets").appendChild(st).textContent = item[0];
}

function calculateWeight(weight, planetName) {
    var planetName = document.getElementById("planets").selectedIndex;
    var newWeight = planets[planetName][1];
    return weight * newWeight;
}

function handleClickEvent() {
    // 3. Create a variable called userWeight and assign the value of the user's weight.
    var userWeight = (document.getElementById("user-weight").value)
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
    var planetName = (document.getElementById("planets").value)
    // 5. Create a variable called result and assign the value of the new calculated weight.
    var result = calculateWeight(userWeight, planetName)
    // 6. Write code to display the message shown in the screenshot.
    var message = document.getElementById("output").innerHTML = "If you were on " + planetName + "," + " you would weigh " + result +
        "lbs!";
    alert(message);
}

    // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

    // Bonus Challenges
    // 8. Reverse the drop down order so that the sun is first.
    // 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)
