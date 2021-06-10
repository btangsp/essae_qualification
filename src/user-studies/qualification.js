import React, { useState, useRef } from 'react'
import ReactMarkdown from 'react-markdown'

import { Audio } from '../components'
import { AudioRadioButtonGroup } from '../components'
import { Shuffle } from '../components'
import { MultipleChoice } from '../components'
import { updateChoice } from '../components'

import '../css/user-studies.css'

const shuffledData = Shuffle(["IOS", "ISO", "OIS", "OSI", "SIO", "SOI"]);

function clickHandler(index, setIndex, setChoice, UpdateAudio, setAudioEnded) {
	setIndex(index + 1);
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
				<a href="#" className="button" onClick={() => clickHandler(index, setIndex, setChoice)}>Next</a>
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
				<a href="#" className="button" onClick={() => clickHandler(index, setIndex, setChoice)}>Next</a>
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
	if (choice !== -1) {
		next_button = (
			<div className="section col-2 align-right">
				<a href="#" className="button" onClick={() => clickHandler(index, setIndex, setChoice, UpdateAudio, setAudioEnded)}>Next</a>
			</div>
		);
	}
	let file = "antiphase_HC_" + shuffledData[index] + ".wav";
	return (
		<div className="container grid">
			<div className="section col-all">
				<ReactMarkdown source={`**Question 3.** When you hit play, you will hear three sounds 
					separated by silences.  \nSimply judge WHICH SOUND WAS QUIETEST 
					 \u2014 1, 2, or 3? (${index + 1} of ${shuffledData.length})`}/>
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
	if (index_h < shuffledData.length) {
		return HeadphoneCheck_Page(index_h, setIndex_h, choice, setChoice, audioRef, UpdateAudio, audioEnded, setAudioEnded);
	}
	else {
		setIndex(index + 1);
		return;
	}
}

function Question_Pages(index, setIndex, audioRef, UpdateAudio) {
	const [choice, setChoice] = useState(-1);
	const [audioEnded, setAudioEnded] = useState(false);
	const [index_h, setIndex_h] = useState(0);

	switch (index) {
		case 0:
			return Welcome_Page(index, setIndex);
		case 1:
			return Age_Question(index, setIndex, choice, setChoice);
		case 2:
			return Disorder_Question(index, setIndex, choice, setChoice);
		case 3:
			return Calibration_Page(index, setIndex, audioRef, UpdateAudio, audioEnded, setAudioEnded);
		case 4:
			return HeadphoneCheck_Pages(index, setIndex, choice, setChoice, audioRef, UpdateAudio, audioEnded, setAudioEnded, index_h, setIndex_h);
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
