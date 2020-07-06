const initialState = {
	questions: [
		{
			"question": '',
			"answers": [],
			"correct_answers": ''
		},
	],
	numberQuestion: 1,
	totalQuestion: 5,
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
				questions: action.questions
			};

		case "SET-TOTAL-QUESTIONS":
			return {
				...state,
				totalQuestion: action.totalQuestion
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

export const setQuestions = (questions) => ({type: "SET-QUESTIONS", questions});
export const setTempAnswer = (tempAnswer) => ({type: "SET-TEMP-ANSWER", tempAnswer});
export const setTotalQuestion = (totalQuestion) => ({type: "SET-TOTAL-QUESTIONS", totalQuestion});
export const toggleBuuton = (toggle) => ({type: "TOGGLE-BUTTON", toggle});
export const nextQuestion = () => ({type: "NEXT-QUESTION"});
export const setPoints = () => ({type: "SET-POINTS"});
export const finished = () => ({type: "FINISHED"});

export default questionReducer;