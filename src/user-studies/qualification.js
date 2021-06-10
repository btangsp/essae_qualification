import React, { useState, useRef } from 'react'
import ReactMarkdown from 'react-markdown'

import { Audio } from '../components'
import { AudioRadioButtonGroup } from '../components'
import { Shuffle } from '../components'
import { MultipleChoice } from '../components'
import { updateChoice } from '../components'

import '../css/user-studies.css'

function clickHandler(index, setIndex) {
	setIndex(index + 1);
	if (index > 0) {
		updateChoice(-1);
	}
}

function Welcome_Page(index, setIndex) {
	return (
		<div className="container grid">
			<div className="section col-all">
				<ReactMarkdown source={`# **Welcome!**\nPlease read the following information 
					carefully before you decide to take part. This will tell you why the 
					research is being done and what you will be asked to do if you take part. 
					Please ask if there is anything that is not clear or if you would like 
					more information.`}
				/>
			</div>
			<div className="section col-2 align-right">
				<a href="#" className="button" onClick={() => clickHandler(index, setIndex)}>Start</a>
			</div>
		</div>
	);
	
}

function Age_Question(index, setIndex, choice, setChoice) {
	let next_button = null;
	if (choice !== -1) {
		next_button = (
			<div className="section col-2 align-right">
				<a href="#" className="button" onClick={() => clickHandler(index, setIndex)}>Next</a>
			</div>
		);
	}
	return (
		<div className="container grid">
			<div className="section col-all">
				<ReactMarkdown source={`**Question ${index}.** Are you at least 18 years old?`}/>
				<MultipleChoice 
					index={index} 
					choice={choice} 
					setChoice={setChoice}
					labels={["Yes", "No"]}
				/>
			</div>
			{next_button}
		</div>
	);
}

function Disorder_Question(index, setIndex, choice, setChoice) {
	let next_button = null;
	if (choice !== -1) {
		next_button = (
			<div className="section col-2 align-right">
				<a href="#" className="button" onClick={() => clickHandler(index, setIndex)}>Next</a>
			</div>
		);
	}
	return (
		<div className="container grid">
			<div className="section col-all">
				<ReactMarkdown source={`**Question ${index}.** Have you ever been diagnosed 
				with hearing loss or a hearing disorder?`}/>
				<MultipleChoice 
					index={index}
					choice={choice}
					setChoice={setChoice}
					labels={["Yes", "No"]}
				/>
			</div>
			{next_button}
		</div>
	);
}

function Calibration_Page(index, setIndex, audioRef, UpdateAudio) {
	return (
		<div className="container grid">
			<div className="section col-all">
				<ReactMarkdown source={`### **Calibration**\n**Please wear your 
					headphones now for calibration.**  \nFirst, set your computer 
					volume to about 25% of maximum.  \nPress the button, then turn 
					up the volume on your computer until the calibration noise 
					is at a loud but comfortable level.  \nFeel free to play the 
					calibration sound as many times as you like.`}/>
				<Audio name={'qualification'} file={'noise_calib_stim.wav'} audioRef={audioRef}/>
				<div className="section col-2 align-right">
					<a href="#" className="button" onClick={() => clickHandler(index, setIndex)}>Next</a>
				</div>
			</div>
		</div>
	);
}

function Question_Pages(index, setIndex, audioRef, UpdateAudio) {
	const [choice, setChoice] = useState(-1);

	switch (index) {
		case 0:
			return Welcome_Page(index, setIndex);
		case 1:
			return Age_Question(index, setIndex, choice, setChoice);
		case 2:
			return Disorder_Question(index, setIndex, choice, setChoice);
		case 3:
			return Calibration_Page(index, setIndex, audioRef, UpdateAudio);
		default:
			return (
				<div className="container">
					<ReactMarkdown source={`Thank you! We will contact you shortly`}/>
				</div>
			);
	}
}

export default function Qualification() {

	const [index, setIndex] = useState(0);

	const audioRef = useRef();

	const UpdateAudio = (source) => {
		if (audioRef.current) {
			audioRef.current.pause();
			audioRef.current.load();
		}
	}

	return (
		<div>
			{Question_Pages(index, setIndex, audioRef, UpdateAudio)}
		</div>
	);
}
