import React from 'react'

import './css/components.css'


/*******************************************************************************
Components
*******************************************************************************/

let updateChoice;

export function Audio({ name, file }) {
	return (
		<audio className='audio-single' controls>
			<source src={`user-studies/${name}/audio/${file}`} type='audio/mpeg'/>
		</audio>);
};

export function Choice({ index, choice, setChoice, label }) {
	console.log(choice);
	return (
		<li className="grid">
			<input type="radio" id={index} />
			<div className={`check col-1 ${index === choice ? "selected" : ""}`} onClick={() => setChoice(index)}>
				<div className="inside"></div>
			</div>
			<label className="col-3" onClick={() => setChoice(index)}>{label}</label>
		</li>
	);
};

export function MultipleChoice({ choice, setChoice, labels }) {
	updateChoice = setChoice;
	const multipleChoice = labels.map((item, key) =>
		<Choice 
			key={key}
			index={key}
			choice={choice}
			setChoice={setChoice}
			label={item}
		/>
	);
	return (
		<ul className="MultipleChoice">
			{multipleChoice}
		</ul>
	);
};

export {updateChoice};
