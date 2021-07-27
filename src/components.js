import React from 'react'

import './css/components.css'


/*******************************************************************************
Components
*******************************************************************************/

let updateChoice;

export function Shuffle(arr, n) {
	if (n === undefined) {
		n = arr.length;
	}
	else if (n <= 0) {
		n = arr.length;
		console.warn('Requested samples is not greater than 0. Using full array.');
	}
	else if (n > arr.length) {
		n = arr.length;
		console.warn('Requested more samples than there are available. Using full array.');
	}
	var nInd = n;

	var currIndex = arr.length, tempValue, randIndex;
	// While there remain elements to shuffle...
	while (0 !== currIndex) {
		// Pick a remaining element...
		randIndex = Math.floor(Math.random() * currIndex);
		currIndex -= 1;

		// And swap it with the current element.
		tempValue = arr[currIndex];
		arr[currIndex] = arr[randIndex];
		arr[randIndex] = tempValue;
	}
	return arr.slice(0, nInd);
}

export function Audio({ name, file, audioRef, setAudioEnded }) {
	return (
		<audio 
			className='audio-single' 
			controls 
			ref={audioRef} 
			controlsList="nodownload"
			onEnded={() => {if (typeof(setAudioEnded) !== "undefined") {setAudioEnded(true);}}}>
			<source src={`essae_qualification/user-studies/${name}/audio/${file}`} type='audio/mpeg'/>
		</audio>);
};

export function AudioRadioButton({ name, file, index, choice, setChoice, audioRef, audioEnded, setAudioEnded }) {
	let radioButton = <div className="col-1"></div>;
	if (audioEnded) {
		radioButton = (
				<div className={`check col-1 ${index === choice ? "selected" : ""}`} onClick={() => setChoice(index)}>
					<div className="inside"></div>
				</div>
			);
	}
	return (
		<li className="grid">
			<input type="radio" id={name} value="A" name={name}/>
			{radioButton}
			<label htmlFor={name} className="col-3"><Audio name={name} file={file} audioRef={audioRef} setAudioEnded={setAudioEnded}/></label>
		</li>
	);  
};

export function AudioRadioButtonGroup({ name, files, choice, setChoice, audioRefs, audioEnded, setAudioEnded }) {
	updateChoice = setChoice;
	const audioButton = files.map((item, key) => 
		<AudioRadioButton 
			name={name} 
			file={item} 
			key={key} 
			index={key} 
			choice={choice} 
			setChoice={setChoice}
			audioRef={audioRefs[key]}
			audioEnded={audioEnded}
			setAudioEnded={setAudioEnded}
		/>
	);
	return (
		<ul className="AudioRadioButtonGroup">
			{audioButton}
		</ul>
	);
};

export function Choice({ index, choice, setChoice, label }) {
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
