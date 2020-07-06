import React from "react";

const Result = (props) => {
	const percent = Math.ceil(props.points / props.totalQuestion * 100);
	let result = '';
	if (percent >= 80) {
		result = 'експерт';
	} else if (percent < 40) {
		result = 'новачок';
	} else {
		result = 'серднячок';
	}
	return (
		<div className="resultWrapper">
			<h2>Результат</h2>
			<p>Привильних відповідей: <b>{props.points}</b> з <b>{props.totalQuestion}</b></p>
			<p>Що становить: <b>{percent}%</b></p>
			<p>Ви <b>{result}</b> в кіберспорті!</p>
		</div>
	);
};

export default Result;