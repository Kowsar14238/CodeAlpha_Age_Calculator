function calculateAge() {
    let birthDateInput = document.getElementById("dateOfBirth");
    let birthDateValue = birthDateInput.value;

    // Check if the birth date is empty
    if (!birthDateValue) {
        document.getElementById("error").style.display = "block";
        document.getElementById("result").innerHTML = "";
        document.getElementById("error").innerHTML = "Please select your birth date";
        return; // Exit the function early
    }

    let birthDate = new Date(birthDateValue);
    let today = new Date();

    // Check if birth date is after today's date
    if (birthDate > today) {
        document.getElementById("error").style.display = "block";
        document.getElementById("result").innerHTML = "";
        return; // Exit the function early
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust months and years if the current day is before the birth day
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    // Adjust days if it's negative
    if (days < 0) {
        let prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += prevMonthLastDay;
        months--;
    }

    //Handle special case when birth date is the same as today's date
    if (years === 0 && months === 0 && days === 0) {
        document.getElementById("result").innerHTML = "Your current age is: 0 day";
    } else {
        let ageString = "";

        if (years > 0) {
            ageString += years + " year" + (years !== 1 ? "s" : "") + " ";
        }
        if (months > 0) {
            ageString += months + " month" + (months !== 1 ? "s" : "") + " ";
        }
        if (days > 0) {
            ageString += days + " day" + (days !== 1 ? "s" : "");
        }

        document.getElementById("result").innerHTML = "Your current age is: " + ageString;
    }
    document.getElementById("error").style.display = "none";
}

// Set max date to today
document
    .getElementById("dateOfBirth")
    .setAttribute("max", new Date().toISOString().split("T")[0]);
