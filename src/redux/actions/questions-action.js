export const setQuestions = (questions) => ({type: "SET-QUESTIONS", questions});
export const setTempAnswer = (tempAnswer) => ({type: "SET-TEMP-ANSWER", tempAnswer});
export const toggleBuuton = (toggle) => ({type: "TOGGLE-BUTTON", toggle});
export const nextQuestion = () => ({type: "NEXT-QUESTION"});
export const setPoints = () => ({type: "SET-POINTS"});
export const finished = () => ({type: "FINISHED"});