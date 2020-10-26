const SET_QUESTION = '@@control-reducer/SET_QUESTION'
const SET_ANSWER = '@@control-reducer/SET_ANSWER'
const SET_LEVEL_RESULT = '@@control-reducer/SET_LEVEL_RESULT'
const SET_NEW_LEVEL = '@@control-reducer/SET_NEW_LEVEL'
const SET_SCORE = '@@control-reducer/SET_SCORE'
const SET_NUMBER_OF_TRY = '@@control-reducer/SET_NUMBER_OF_TRY'
const NEW_GAME = '@@control-reducer/NEW_GAME'

const initialState = {
    score: 0,
    currentLevel: 0,
    currentNumberOfTrys: 0,
    answer: null,
    question: null,
    result: false,
}

export const controlReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTION:
            return {
                ...state,
                question: action.question
            }
        case SET_ANSWER:
            return {
                ...state,
                answer: action.answer
            }
        case SET_LEVEL_RESULT:
            return {
                ...state,
                result: true
            }

        case SET_NEW_LEVEL:
            return {
                ...state,
                currentLevel: state.currentLevel + 1,
                currentNumberOfTrys: 0,
                answer: null,
                question: null,
                result: false
            }
        case SET_NUMBER_OF_TRY:
            return{
                ...state,
                currentNumberOfTrys: action.number
            }

        case SET_SCORE:
            return {
                ...state,
                score: state.score + action.score
            }

        case NEW_GAME:
            return initialState

        default:
            return state
    }
}

export const setQuestion = (question) => ({type: SET_QUESTION, question})
export const setAnswer = (answer) => ({type: SET_ANSWER, answer})
export const setLevelResult = () => ({type: SET_LEVEL_RESULT})
export const setNewLevel = () => ({type: SET_NEW_LEVEL})
export const setScore = (score) => ({type: SET_SCORE, score})
export const setNumberOfTrys = (number) => ({type:SET_NUMBER_OF_TRY, number})
export const startNewGame = () => ({type: NEW_GAME})