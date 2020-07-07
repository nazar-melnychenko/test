import React from "react";
import "./Result.sass";
import * as PropTypes from "prop-types";

const Result = (props) => {
	const percent = Math.ceil(props.points / props.totalQuestion * 100);
	let result = "";
	if (percent >= 80) {
		result = "експерт";
	} else if (percent < 40) {
		result = "новачок";
	} else {
		result = "серднячок";
	}
	return (
		<div className="resultWrapper">
			<h1>Результат</h1>
			<p>Привильних відповідей: <b>{props.points}</b> з <b>{props.totalQuestion}</b></p>
			<p>Що становить: <b>{percent}%</b></p>
			<p>Ви <b>{result}</b> в кіберспорті!</p>
		</div>
	);
};

Result.propTypes = {
	totalQuestion: PropTypes.number.isRequired,
	points: PropTypes.number.isRequired
};

export default Result;