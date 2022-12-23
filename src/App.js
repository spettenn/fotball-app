import react from 'react';
import './App.css';
import SectionOne from './sections/section-one';
import SectionTwo from './sections/section-two';

function App() {
	document.body.addEventListener('pointermove', (e) => {
		const { currentTarget: el, clientX: x, clientY: y } = e;
		const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
		el.style.setProperty('--posX', x - l - w / 2);
		el.style.setProperty('--posY', y - t - h / 2);
	});
	return (
		<div className='App'>
			<SectionOne />
			<SectionTwo />
		</div>
	);
}

export default App;
