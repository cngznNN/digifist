var input_color = document.querySelectorAll('div.input-color');
var selected_color = null;

input_color.forEach(function (item) {
	item.addEventListener('click', function (event) {
		selected_color = this.dataset.group;
		removeAll();
		this.classList.add('active');
	});
});

const removeAll = () => {
	input_color.forEach(function (item) {
		if (item.dataset.group == selected_color) item.classList.remove('active');
	});
};