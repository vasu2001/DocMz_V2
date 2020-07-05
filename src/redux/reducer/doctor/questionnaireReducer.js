const initialState = {
  isLoading: false,
  questionDetails: [],
  questionnaireAdded: false,
  error: '',
  gettingQuestionnaire: false,
  questions: [],
  errorGettingQuestionnaire: false,
};

const QuestionnaireReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDING_QUESTIONNAIRE':
      return {
        ...state,
        isLoading: true,
        questionnaireAdded: false,
      };
    case 'QUESTIONNAIRE_ADDED':
      return {
        ...state,
        isLoading: false,
        questionDetails: action.payload,
        questionnaireAdded: true,
      };
    case 'ERROR_ADDING_QUESTIONNAIRE':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case 'GETTING_QUESTIONNAIRE':
      return {
        ...state,
        gettingQuestionnaire: true,
      };
    case 'GOT_QUESTIONNAIRE':
      return {
        ...state,
        gettingQuestionnaire: false,
        questions: action.payload,
      };
    case 'ERROR_GETTING_QUESTIONNAIRE':
      return {
        ...state,
        gettingQuestionnaire: false,
        errorGettingQuestionnaire: action.payload,
      };
    default:
      return state;
  }
};

export default QuestionnaireReducer;
