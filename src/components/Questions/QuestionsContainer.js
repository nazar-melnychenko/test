import React from "react";
import Questions from "./Questions";
import {connect} from "react-redux";
import {
	finished,
	nextQuestion,
	setTempAnswer,
	setPoints,
	setQuestions,
	toggleBuuton
} from "../../redux/actions/questions-action";
import Result from "../Result/Result";
import * as axios from "axios";

class QuestionsContainer extends React.Component {

	componentDidMount() {
		axios.get('./questions.json')
			.then(response => {
				const data = Object.values(response.data);
				this.props.setQuestions(data);
			})
	}

	handleSetAnswer = (e) => {
		this.props.setTempAnswer(e.target.value);
		this.props.toggleBuuton(false);
	};

	setAnswerPoint = () => {
		let n = this.props.numberQuestion - 1;
		if (this.props.tempAnswer === this.props.questions[n].correct_answers) {
			this.props.setPoints();
		}
	};

	handleNextQuestion = () => {
		this.props.toggleBuuton(true);
		this.setAnswerPoint();
		this.props.nextQuestion();
	};

	handleFinish = () => {
		this.setAnswerPoint();
		this.props.finished();
	};

	render() {
		return (
			<>
				{this.props.isFinish
					? <Result totalQuestion={this.props.totalQuestion} points={this.props.points}/>
					: <Questions questions={this.props.questions}
					             numberQuestion={this.props.numberQuestion}
					             totalQuestion={this.props.totalQuestion}
					             tempAnswer={this.props.tempAnswer}
					             isDisabled={this.props.isDisabled}
					             handleSetAnswer={this.handleSetAnswer}
					             handleNextQuestion={this.handleNextQuestion}
					             handleFinish={this.handleFinish}
					/>
				}
			</>
		);
	};
}

const mapStateToProps = (state) => {
	return {
		questions: state.questionPage.questions,
		numberQuestion: state.questionPage.numberQuestion,
		totalQuestion: state.questionPage.totalQuestion,
		points: state.questionPage.points,
		tempAnswer: state.questionPage.tempAnswer,
		isFinish: state.questionPage.isFinish,
		isDisabled: state.questionPage.isDisabled
	};
};

export default connect(mapStateToProps,
	{
		setQuestions,
		setTempAnswer,
		toggleBuuton,
		nextQuestion,
		setPoints,
		finished
	})(QuestionsContainer);
