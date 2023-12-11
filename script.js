const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	results = fruit.filter(val => {
		return val.toLowerCase().includes(str.toLowerCase());
	});
	// console.log(results);
	return results;
}

function hideSuggestions() {
	while (suggestions.firstChild) {
		suggestions.removeChild(suggestions.firstChild);
	}
}

function searchHandler(e) {
	// input.value holds the text inside the input\
	showSuggestions(search(input.value), input.value);
}

function showSuggestions(results, inputVal) {
	// console.log(results);

	hideSuggestions();

	// if the user backspaces and leaves the search empty, then there should be no suggestions
	if (inputVal === "") {
		return;
	}

	results.forEach(val => {
		// console.log(val);
		const newLi = document.createElement("li");
		newLi.innerText = val;
		suggestions.append(newLi);
	});
}

function useSuggestion(e) {
	// on click, copy the suggestion into the search bar
	// delete current suggestions
	// if the user back spaces, it should reappear

	console.log(e.target.innerText);
	input.value = e.target.innerText;
	hideSuggestions();
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);