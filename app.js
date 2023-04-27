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

	const validateForm = () => {
		const nameErrorPara = document.getElementById("nameError");
		const numberErrorPara = document.getElementById("numberError");
		const dateErrorPara = document.getElementById("dateError");
		const cvvErrorPara = document.getElementById("cvvError");

		let nameError = false;
		let numberError = false;
		let dateError = false;
		let cvvError = false;

		if (cardholderNameInput.value === "") {
			nameError = true;
		}

		if (cardholderNumberInput.value === "") {
			numberError = true;
		} else if (cardholderNumberInput.value.length != 16) {
			numberError = true;
		} else if (!/^\d+$/.test(cardholderNumberInput.value)) {
			numberError = true;
		}

		if (
			cardholderMounthInput.value === "" ||
			cardholderYearInput.value === ""
		) {
			dateError = true;
		} else if (
			cardholderMounthInput.value.length > 2 ||
			cardholderYearInput.value.length > 2
		) {
			dateError = true;
		} else if (
			cardholderMounthInput.value > 12 ||
			cardholderYearInput.value < 23
		) {
			dateError = true;
		}

		if (cardholderCvvInput.value === "") {
			cvvError = true;
		}

		if (nameError) {
			nameErrorPara.classList.remove("hidden");
			nameErrorPara.innerText = `Can't be blank`;
		} else {
			nameErrorPara.classList.add("hidden");
			nameErrorPara.innerText = "";
		}

		if (numberError) {
			numberErrorPara.classList.remove("hidden");
			if (cardholderNumberInput.value === "") {
				numberErrorPara.innerText = `Can't be blank`;
			} else if (cardholderNumberInput.value.length != 16) {
				numberErrorPara.innerText = `Must contain 16 digits`;
			} else if (!/^\d+$/.test(cardholderNumberInput.value)) {
				numberErrorPara.innerText = `Wrong format, numbers only`;
			}
		} else {
			numberErrorPara.classList.add("hidden");
			numberErrorPara.innerText = "";
		}

		if (dateError) {
			dateErrorPara.classList.remove("hidden");
			if (
				cardholderMounthInput.value === "" ||
				cardholderYearInput.value === ""
			) {
				dateErrorPara.innerText = `Can't be blank`;
			} else if (
				cardholderMounthInput.value.length > 2 ||
				cardholderYearInput.value.length > 2
			) {
				dateErrorPara.innerText = `Must contain 2 digits`;
			} else if (
				cardholderMounthInput.value > 12 ||
				cardholderYearInput.value < 23
			) {
				dateErrorPara.innerText = `Must contain a valid number`;
			}
		} else {
			dateErrorPara.classList.add("hidden");
			dateErrorPara.innerText = "";
		}

		if (cvvError) {
			cvvErrorPara.classList.remove("hidden");
			cvvErrorPara.innerText = `Can't be blank`;
		} else {
			cvvErrorPara.classList.add("hidden");
			cvvErrorPara.innerText = "";
		}

		if (nameError || numberError || dateError || cvvError) {
			return true;
		}
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
