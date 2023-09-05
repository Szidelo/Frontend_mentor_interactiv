window.addEventListener("DOMContentLoaded", (event) => {
	// -------------Toggle between states and error messages--------------------------

	const confirmButton = document.getElementById("confirmBtn");
	const continueButton = document.getElementById("continueBtn");
	const form = document.querySelector(".form-wrapper");
	const completedForm = document.querySelector(".completed-form");

	const toggleFormVisibility = () => {
		form.classList.toggle("hidden");
		completedForm.classList.toggle("hidden");
	};

// Function to validate cardholder name
const validateName = () => {
    const cardholderNameInput = document.getElementById("cardholder-name");
    const nameErrorPara = document.getElementById("nameError");

    if (cardholderNameInput.value === "") {
        nameErrorPara.classList.remove("hidden");
        nameErrorPara.innerText = "Can't be blank";
        return true;
    }

    nameErrorPara.classList.add("hidden");
    nameErrorPara.innerText = "";
    return false;
};

// Function to validate cardholder number
const validateNumber = () => {
    const cardholderNumberInput = document.getElementById("card-number");
    const numberErrorPara = document.getElementById("numberError");

    if (cardholderNumberInput.value === "") {
        numberErrorPara.classList.remove("hidden");
        numberErrorPara.innerText = "Can't be blank";
        return true;
    } else if (cardholderNumberInput.value.length !== 16 || !/^\d+$/.test(cardholderNumberInput.value)) {
        numberErrorPara.classList.remove("hidden");
        numberErrorPara.innerText = "Must contain 16 digits and only numbers";
        return true;
    }

    numberErrorPara.classList.add("hidden");
    numberErrorPara.innerText = "";
    return false;
};

// Function to validate card expiration date
const validateDate = () => {
    const cardholderMounthInput = document.getElementById("card-mounth");
    const cardholderYearInput = document.getElementById("card-year");
    const dateErrorPara = document.getElementById("dateError");

    if (cardholderMounthInput.value === "" || cardholderYearInput.value === "") {
        dateErrorPara.classList.remove("hidden");
        dateErrorPara.innerText = "Can't be blank";
        return true;
    } else if (cardholderMounthInput.value.length > 2 || cardholderYearInput.value.length > 4 || cardholderMounthInput.value > 12 || cardholderYearInput.value < 23) {
        dateErrorPara.classList.remove("hidden");
        dateErrorPara.innerText = "Must contain a valid date";
        return true;
    }

    dateErrorPara.classList.add("hidden");
    dateErrorPara.innerText = "";
    return false;
};

// Function to validate CVV
const validateCVV = () => {
    const cardholderCvvInput = document.getElementById("card-cvv");
    const cvvErrorPara = document.getElementById("cvvError");

    if (cardholderCvvInput.value === "") {
        cvvErrorPara.classList.remove("hidden");
        cvvErrorPara.innerText = "Can't be blank";
        return true;
    }

    cvvErrorPara.classList.add("hidden");
    cvvErrorPara.innerText = "";
    return false;
};

// Function to validate the entire form
const validateForm = () => {
    const nameError = validateName();
    const numberError = validateNumber();
    const dateError = validateDate();
    const cvvError = validateCVV();

    return nameError || numberError || dateError || cvvError;
};


	confirmButton.addEventListener("click", (event) => {
		event.preventDefault();
		if (!validateForm()) {
			toggleFormVisibility();
		}
	});

	continueButton.addEventListener("click", () => {
		toggleFormVisibility();
	});

	//-------------------Binding inputs with card img-----------------------

	const cardholderNameInput = document.getElementById("cardholder-name");
	const cardholderNumberInput = document.getElementById("card-number");
	const cardholderMounthInput = document.getElementById("card-mounth");
	const cardholderYearInput = document.getElementById("card-year");
	const cardholderCvvInput = document.getElementById("card-cvv");

	const showNameOnCard = () => {
		const nameOnCard = document.getElementById("nameOnCard");

		const cardholderName = cardholderNameInput.value;
		nameOnCard.innerText = cardholderName;

		if (cardholderName === "") {
			return (nameOnCard.innerText = "Jane Appleseed");
		}
	};

	const showNumberOnCard = () => {
		const numberOnCard = document.getElementById("numberOnCard");
		const cardholderNumber = cardholderNumberInput.value;

		const formattedNumber = cardholderNumber
			.replace(/(.{4})/g, "$1 ") // add space after every 4 digits
			.trim(); // remove leading/trailing whitespace
		numberOnCard.innerText = formattedNumber;
	};

	const showMounthOnCard = () => {
		const mounthOnCard = document.getElementById("mounth");
		const cardholderMounth = `${cardholderMounthInput.value}/`;

		mounthOnCard.innerText = cardholderMounth;
	};

	const showYearOnCard = () => {
		const yearOnCard = document.getElementById("year");
		const cardholderYear = cardholderYearInput.value;

		yearOnCard.innerText = cardholderYear;
	};

	const showCvvOnCard = () => {
		const cvvOnCard = document.getElementById("cvv");
		const cardholderCvv = cardholderCvvInput.value;

		cvvOnCard.innerText = cardholderCvv;
	};

	cardholderNameInput.addEventListener("keyup", () => {
		showNameOnCard();
	});

	cardholderNumberInput.addEventListener("keyup", () => {
		showNumberOnCard();
	});

	cardholderMounthInput.addEventListener("keyup", () => {
		showMounthOnCard();
	});

	cardholderYearInput.addEventListener("keyup", () => {
		showYearOnCard();
	});

	cardholderCvvInput.addEventListener("keyup", () => {
		showCvvOnCard();
	});
});
