// we select the output elements
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day= document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn")

// select input elements
let isValid = false;

const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");

// select the error elements
const error_year = document.querySelector(".error-year");
const error_month = document.querySelector(".error-month");
const error_day = document.querySelector(".error-day");

input_day.addEventListener("input", (e) =>{
    if (+input_day.value > 31) {
        error_day.textContent = "Must be a valid date";
        isValid = false;
        return;
    } else{
        isValid = true;
        error_day.textContent = "";
    }

    if(+input_day.value === 0) {
        isValid = false;
        error_day.textContent = "this field is required";
        isValid = false;
        return;
    } else {
        error_day.textContent = "";
    }
});

input_month.addEventListener("input", (e) =>{
    if (+input_month.value > 12) {
        error_month.textContent = "Must be a valid month";
        isValid = false;
        return;
    } else{
        isValid = true;
        error_month.textContent = "";
    }

    if(+input_month.value === 0) {
        isValid = false;
        error_month.textContent = "this field is required";
        isValid = false;
        return;
    } else {
        error_month.textContent = "";
    }
});

input_year.addEventListener("input", (e) =>{
    const  ageYear = new Date().getFullYear();
    if (+input_year.value > ageYear) {
        error_year.textContent = "Year cannot be in the future";
        isValid = false;
        return;
    } else{
        isValid = true;
        error_year.textContent = "";
    }

    if(+input_year.value === 0) {
        isValid = false;
        error_year.textContent = "this field is required";
        isValid = false;
        return;
    } else {
        error_year.textContent = "";
    }
});

// Calculate age on form submission
submit_btn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission or page reload

    if (!isValid) {
        return; // Exit if input validation fails
    }

    const birthYear = +input_year.value;
    const birthMonth = +input_month.value;
    const birthDay = +input_day.value;

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // Months are 0-based in JavaScript
    const currentDay = today.getDate();

    let ageYear = currentYear - birthYear;
    let ageMonth = currentMonth - birthMonth;
    let ageDay = currentDay - birthDay;

    // Adjust for cases where current date is before the birth date
    if (ageDay < 0) {
        ageMonth--;
        ageDay += new Date(currentYear, currentMonth - 1, 0).getDate(); // Get days in the previous month
    }

    if (ageMonth < 0) {
        ageYear--;
        ageMonth += 12;
    }

    // Output the calculated age
    output_year.textContent = `${ageYear}`;
    output_month.textContent = `${ageMonth}`;
    output_day.textContent = `${ageDay}`;
});
