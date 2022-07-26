import React, { useState, useEffect } from 'react';

const TypingText = ({text, speed, loop}) => {

	const [Text, setText] = useState("");
	const [Count, setCount] = useState(0);

	useEffect(() => {
		let typingText = text ? text : "";//기본값
		let typingSpeed = speed ? speed : 100;//기본값
		const interval = setInterval(() => {
			setText((Text)=>{
				let updated = Text;
				updated = Text + typingText[Count];
				return updated;
			});
			setCount(Count + 1);
		}, typingSpeed);
		Count === typingText.length && clearInterval(interval);

		return () => clearInterval(interval);
	})


	return (
		<p className="title word-keep" >{ Text }</p>
	)
};

export default TypingText;
