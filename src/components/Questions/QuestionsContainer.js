import React from "react";
import Questions from "./Questions";
import {connect} from "react-redux";
import {
	finished,
	nextQuestion,
	setTempAnswer,
	setPoints,
	setQuestions,
	setTotalQuestion, toggleBuuton
} from "../../redux/reducers/question-reducer";
import Result from "./Result/Result";
import * as axios from "axios";

class QuestionsContainer extends React.Component {

	componentDidMount() {
		axios.get('./questions.json')
			.then(response => {
				const data = Object.values(response.data);
				this.props.setQuestions(data);
				this.props.setTotalQuestion(data.length);
			})
	}

	handleSetAnswer = (e) => {
		this.props.setTempAnswer(e.target.value);
		this.props.toggleBuuton(false);
	};

	handleNextQuestion = () => {
		this.props.toggleBuuton(true);
		let n = this.props.numberQuestion - 1;
		if (this.props.tempAnswer === this.props.questions[n].correct_answers) {
			this.props.setPoints();
		}
		this.props.nextQuestion();
	};

	handleFinish = () => {
		let n = this.props.numberQuestion - 1;
		if (this.props.tempAnswer === this.props.questions[n].correct_answers) {
			this.props.setPoints();
		}
		this.props.finished();
	};

	render() {
		if (this.props.isFinish) {
			return (
				<Result totalQuestion={this.props.totalQuestion}
				        points={this.props.points}
				/>
			);
		} else {
			return (
				<Questions questions={this.props.questions}
				           numberQuestion={this.props.numberQuestion}
				           totalQuestion={this.props.totalQuestion}
				           tempAnswer={this.props.tempAnswer}
				           isDisabled={this.props.isDisabled}
				           handleSetAnswer={this.handleSetAnswer}
				           handleNextQuestion={this.handleNextQuestion}
				           handleFinish={this.handleFinish}
				/>
			);
		}
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
		setTotalQuestion,
		setTempAnswer,
		toggleBuuton,
		nextQuestion,
		setPoints,
		finished
	})(QuestionsContainer);
