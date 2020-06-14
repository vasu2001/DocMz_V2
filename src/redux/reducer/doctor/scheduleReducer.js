const initialState = {
      isDoctorScheduleLoading: false,
      scheduleData: [],
      error: [],
};

const DoctorScheduleReducer = (state = initialState, action) => {
      switch (action.type) {
            case 'SAVE_DOCTOR_SCHEDULE':
                  console.log('woooooooooooooooooooooooooooooooooooooo')
                  return {
                        scheduleData: [...state.scheduleData, ...action.payload],
                        isDoctorScheduleLoading: false,
                  };
            case 'START_DOCTOR_SCHEDULE_LOADING':
                  return {
                        isDoctorScheduleLoading: true,
                  };
            case 'HAVEING_DOCTOR_SCHEDULE_ERROR':
                  return {
                        error: action.payload,
                        isDoctorScheduleLoading: false,
                  };
            case 'RESET_DOCTOR_SCHEDULE':
                  return {
                        isDoctorScheduleLoading: false,
                        scheduleData: [],
                        error: [],
                  };
            default:
                  return state;
      }
};

export default DoctorScheduleReducer;
