import React from "react";

const Questions = (props) => {

	return (
		<div className="questionsWrapper">
			<h2>На скільки ти кіберспортивний експерт</h2>
			<p>Запитання № {props.numberQuestion}</p>
			<p>{props.questions[props.numberQuestion - 1].question}</p>
			{props.questions[props.numberQuestion - 1].answers.map((item, i) =>
				<div key={i}>
					<input
						type="radio"
						value={item}
						name="answer"
						checked={props.tempAnswer === item}
						onChange={props.handleSetAnswer}
					/> {item}
				</div>
			)}
			<span>{props.numberQuestion}/{props.totalQuestion}</span>
			{props.totalQuestion !== props.numberQuestion ?
				<button onClick={props.handleNextQuestion} disabled={props.isDisabled}>Продовжити</button> :
				<button onClick={props.handleFinish} disabled={props.isDisabled}>Завершити</button>
			}
		</div>
	);
};

export default Questions;
