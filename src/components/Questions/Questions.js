import React from "react";
import "./Questions.sass";
import * as PropTypes from "prop-types";

const Questions = (props) => {

	return (
		<div className="questionsWrapper">
			<h1>На скільки ти кіберспортивний експерт</h1>
			<p className="number">Запитання № {props.numberQuestion}</p>
			<p className="question">{props.questions[props.numberQuestion - 1].question}</p>
			{props.questions[props.numberQuestion - 1].answers.map((item, i) =>
				<div className="answers" key={i}>
					<input
						id={i}
						type="radio"
						value={item}
						name="answer"
						checked={props.tempAnswer === item}
						onChange={props.handleSetAnswer}
					/>
					<label htmlFor={i}>{item}</label>
				</div>
			)}
			<div className="footer">
				<span>{props.numberQuestion}/{props.totalQuestion}</span>
				{props.totalQuestion !== props.numberQuestion ?
					<button onClick={props.handleNextQuestion} disabled={props.isDisabled}>Продовжити</button> :
					<button onClick={props.handleFinish} disabled={props.isDisabled}>Завершити</button>
				}
			</div>
			<div className="message">Щоб продовжити, виберіть одну з відповідей!</div>
		</div>
	);
};

Questions.propTypes = {
	questions: PropTypes.array.isRequired,
	numberQuestion: PropTypes.number.isRequired,
	totalQuestion: PropTypes.number.isRequired,
	tempAnswer: PropTypes.string,
	isDisabled: PropTypes.bool.isRequired,
};

export default Questions;
