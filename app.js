// initial count
let count = 0

const value = document.getElementById('value')
const buttons = document.querySelectorAll('.btn')

buttons.forEach(button => {
	button.addEventListener('click', e => {
		const action = e.currentTarget.getAttribute('data-action')
		if (action === 'increase') {
			++count
		}else if(action === 'decrease') {
			--count
		}else { count = 0 }

		if (count > 0) {
			setValueColorTo('lightblue')
		}else if(count < 0) {
			setValueColorTo('tomato')
		}else {
			setValueColorTo('black')
		}

		value.textContent = count
	})
})

function setValueColorTo(color) {
	value.style.color = color
}