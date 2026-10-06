const form = document.querySelector("#bmi-form");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const message = document.querySelector("#form-message");
const result = document.querySelector("#result");
const bmiValue = document.querySelector("#bmi-value");
const bmiCategory = document.querySelector("#bmi-category");

function getCategory(bmi) {
	if (bmi < 16) return "Súlyos soványság";
	if (bmi < 17) return "Mérsékelt soványság";
	if (bmi < 18.5) return "Enyhe soványság";
	if (bmi < 25) return "Normál testsúly";
	if (bmi < 30) return "Túlsúlyos";
	if (bmi < 35) return "Elhízott (I. fokú)";
	if (bmi < 40) return "Elhízott (II. fokú)";
	return "Súlyosan elhízott (III. fokú)";
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	message.textContent = "";

	const weight = Number(weightInput.value);
	const height = Number(heightInput.value);

	if (!Number.isFinite(weight) || !Number.isFinite(height) || weight < 0 || height < 0) {
		message.textContent = "A testsúly és a magasság nem lehet nulla alatti szám.";
		return;
	}
	if (!form.reportValidity()) return;
	if (height === 0) {
		message.textContent = "A magasságnak nullánál nagyobbnak kell lennie a számításhoz.";
		heightInput.focus();
		return;
	}

	const heightInMeters = height / 100;
	const bmi = weight / (heightInMeters * heightInMeters);

	bmiValue.textContent = bmi.toFixed(1);
	bmiCategory.textContent = `Az állapotod: ${getCategory(bmi)}`;
});
