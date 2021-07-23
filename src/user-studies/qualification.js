import React, { useState, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
// import { Redirect } from "react-router-dom";


import { Audio } from '../components'
import { AudioRadioButtonGroup } from '../components'
import { Shuffle } from '../components'
import { MultipleChoice } from '../components'
import { updateChoice } from '../components'

import '../css/user-studies.css'

const shuffledData = Shuffle(["IOS", "ISO", "OIS", "OSI", "SIO", "SOI"]);

function clickHandler(index, setIndex, setChoice, UpdateAudio, setAudioEnded, isEarlyFinish) {
	if (isEarlyFinish) {
		setIndex('early_finish');
	}
	else {
		setIndex(index + 1);	
	}
	if (setChoice !== undefined) {
		updateChoice(-1);
	}
	if (UpdateAudio !== undefined) {
		UpdateAudio();
	}
	if (setAudioEnded !== undefined) {
		setAudioEnded(false);
	}
}

function Consent_Page(index, setIndex) {
	return (
		<div className="container grid">
			<div className="section col-all">
				<ReactMarkdown source={`# **Welcome!**\nPlease read the 
					following information carefully before you decide to take 
					part. This will tell you why the research is being done 
					and what you will be asked to do if you take part.
					
					 \n\nWe are conducting a research 
					study to evaluate the quality of an audio processing algorithm.
					If you agree to participate, you 
					will be asked to fill out a brief questionnaire about your 
					age, your hearing ability, and the listening setup 
					you intend to use for our study. You will then be asked to 
					evaluate a series of audio samples.

					 \n\nThe entire interaction is completely 
					anonymous. We will NOT collect any personally identifiable 
					identifiers. Your participation in this study does not 
					involve any risk to you beyond that of your everyday 
					life.

					\n\nBy pressing **I Agree**, you confirm you are 
					willing to participate in this research. However, you are 
					free to withdraw your participation at anytime. If you 
					have any questions or 
					feedback, please contact the principal investigator, Bryan 
					Pardo, at pardo@northwestern.edu.`}
				/>
			</div>
			<div className="section col-2 align-right">
				<a href="#" className="button" onClick={() => clickHandler(index, setIndex)}>I Agree</a>
			</div>
		</div>
	);
	
}

function Age_Question(index, setIndex, choice, setChoice) {
	let next_button = null;
	let isEarlyFinish = false;
	if (choice !== -1) {
		if (choice === 1) {
			isEarlyFinish = true;
		}
		next_button = (
			<div className="section col-2 align-right">
				<a href="#" className="button" onClick={() => clickHandler(index, setIndex, setChoice, undefined, undefined, isEarlyFinish)}>Next</a>
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
	let isEarlyFinish = false;
	if (choice !== -1) {
		if (choice === 0) {
			isEarlyFinish = true;
		}
		next_button = (
			<div className="section col-2 align-right">
				<a href="#" className="button" onClick={() => clickHandler(index, setIndex, setChoice, undefined, undefined, isEarlyFinish)}>Next</a>
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

function Calibration_Page(index, setIndex, audioRef, UpdateAudio, audioEnded, setAudioEnded) {
	let next_button = null;
	if (audioEnded) {
		next_button = (
			<div className="section col-2 align-right">
				<a href="#" className="button" onClick={() => clickHandler(index, setIndex, undefined, UpdateAudio, setAudioEnded)}>Next</a>
			</div>
		);
	}
	return (
		<div className="container grid">
			<div className="section col-all">
				<ReactMarkdown source={`### **Calibration**\n**Please wear your 
					headphones now for calibration.**  \nFirst, set your computer 
					volume to about 25% of maximum.  \nPress the button, then turn 
					up the volume on your computer until the calibration noise 
					is at a loud but comfortable level.  \nFeel free to play the 
					calibration sound as many times as you like.`}/>
				<Audio 
					name={'qualification'} 
					file={'noise_calib_stim.wav'} 
					audioRef={audioRef} 
					setAudioEnded={setAudioEnded}/>
				<ReactMarkdown source={`Press **Next** when you are satisfied with the volume level.`}/>
				{next_button}
			</div>
		</div>
	);
}

function ListeningDevice_Question(index, setIndex, choice, setChoice) {
	let next_button = null;
	let isEarlyFinish = false;
	if (choice !== -1) {
		if (choice !== 0) {
			isEarlyFinish = true;
		}
		next_button = (
			<div className="section col-2 align-right">
				<a href="#" className="button" onClick={() => clickHandler(index, setIndex, setChoice, undefined, undefined, isEarlyFinish)}>Next</a>
			</div>
		);
	}
	return (
		<div className="container grid">
			<div className="section col-all">
				<ReactMarkdown source={`**Question ${index}.** Which listening device are you currently using?`}/>
				<MultipleChoice 
					index={index}
					choice={choice}
					setChoice={setChoice}
					labels={["Headphones/Earbuds", "Stand-Alone Speakers", "Built-In-Device Speakers", "Other"]}
				/>
			</div>
			{next_button}
		</div>
	);
}

function Environment_Question(index, setIndex, choice, setChoice) {
	let next_button = null;
	let isEarlyFinish = false;
	if (choice !== -1) {
		if (choice === 1) {
			isEarlyFinish = true;
		}
		next_button = (
			<div className="section col-2 align-right">
				<a href="#" className="button" onClick={() => clickHandler(index, setIndex, setChoice, undefined, undefined, isEarlyFinish)}>Next</a>
			</div>
		);
	}
	return (
		<div className="container grid">
			<div className="section col-all">
				<ReactMarkdown source={`**Question ${index}.** Are you in a quiet environment?`}/>
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

function HeadphoneCheck_Page(index, setIndex, choice, setChoice, audioRef, UpdateAudio, audioEnded, setAudioEnded) {
	let multiple_choice = null;
	if (audioEnded) {
		multiple_choice = (
			<MultipleChoice
				index={index}
				choice={choice}
				setChoice={setChoice}
				labels={["FIRST sound was QUIETEST", "SECOND sound was QUIETEST", "THIRD sound was QUIETEST"]}/>
		);
	}
	let next_button = null;
	let isEarlyFinish = false;
	if (choice !== shuffledData[index].indexOf('S')) {
		isEarlyFinish = true;
	}
	if (choice !== -1) {
		next_button = (
			<div className="section col-2 align-right">
				<a href="#" className="button" onClick={() => clickHandler(index, setIndex, setChoice, UpdateAudio, setAudioEnded, isEarlyFinish)}>Next</a>
			</div>
		);
	}
	let file = "antiphase_HC_" + shuffledData[index] + ".wav";
	return (
		<div className="container grid">
			<div className="section col-all">
				<ReactMarkdown source={`**Listening Test ${index + 1} of ${shuffledData.length}.** When you hit play, you will hear three sounds 
					separated by silences.  \nSimply judge WHICH SOUND WAS QUIETEST 
					 \u2014 1, 2, or 3?`}/>
				<Audio
					name={'qualification'}
					file={file}
					audioRef={audioRef}
					setAudioEnded={setAudioEnded}/>
				{multiple_choice}
				{next_button}
			</div>
		</div>
	);
}

function HeadphoneCheck_Pages(index, setIndex, choice, setChoice, audioRef, UpdateAudio, audioEnded, setAudioEnded, index_h, setIndex_h) {
	if (index_h === 'early_finish') {
		setIndex('early_finish');
		return;
	}
	if (index_h < shuffledData.length) {
		return HeadphoneCheck_Page(index_h, setIndex_h, choice, setChoice, audioRef, UpdateAudio, audioEnded, setAudioEnded);
	}
	else {
		setIndex(index + 1);
		return;
	}
}

function EarlyFinish_Page() {
	return (
		<div className="container">
			<ReactMarkdown source={`Thank you for your participation. Please enter 
				the following code into the HIT.`}/>
			<h1>3F1N1</h1>
		</div>
	);
}

function Question_Pages(index, setIndex, audioRef, UpdateAudio) {
	const [choice, setChoice] = useState(-1);
	const [audioEnded, setAudioEnded] = useState(false);
	const [index_h, setIndex_h] = useState(0);

	switch (index) {
		case 0:
			return Consent_Page(index, setIndex);
		case 1:
			return Age_Question(index, setIndex, choice, setChoice);
		case 2:
			return Disorder_Question(index, setIndex, choice, setChoice);
		case 3:
			return ListeningDevice_Question(index, setIndex, choice, setChoice);
		case 4:
			return Environment_Question(index, setIndex, choice, setChoice);
		case 5:
			return Calibration_Page(index, setIndex, audioRef, UpdateAudio, audioEnded, setAudioEnded);
		case 6:
			return HeadphoneCheck_Pages(index, setIndex, choice, setChoice, audioRef, UpdateAudio, audioEnded, setAudioEnded, index_h, setIndex_h);
		case 'early_finish':
			return EarlyFinish_Page();
		default:
			return (
				// <Redirect to={'/essae_training/'} />
				<div className="container">
					<ReactMarkdown source={`Click next to start the training section.`}/>
					<a href="https://btangsp.github.io/essae_training/" className="button">Next</a>
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
