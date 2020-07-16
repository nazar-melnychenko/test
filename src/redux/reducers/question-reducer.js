const initialState = {
	questions: [
		{
			"question": '',
			"answers": [],
			"correct_answers": ''
		},
	],
	numberQuestion: 1,
	totalQuestion: 0,
	tempAnswer: null,
	points: 0,
	isFinish: false,
	isDisabled: true
};

const questionReducer = (state = initialState, action) => {

	switch (action.type) {

		case "SET-QUESTIONS":
			return {
				...state,
				questions: action.questions,
				totalQuestion: action.questions.length
			};

		case "TOGGLE-BUTTON":
			return {
				...state,
				isDisabled: action.toggle
			};

		case "SET-TEMP-ANSWER":
			return {
				...state,
				tempAnswer: action.tempAnswer
			};

		case "NEXT-QUESTION":
			return {
				...state,
				numberQuestion: ++state.numberQuestion,
			};

		case "SET-POINTS":
			return {
				...state,
				points: ++state.points
			};

		case "FINISHED":
			return {
				...state,
				isFinish: true
			};

		default:
			return state;

	}
};

export default questionReducer;