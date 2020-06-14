import axios from 'axios';
import { Host } from '../../../config/settings/Connection';
import { useSelector } from 'react-redux';

const save = 'SAVE_DOCTOR_SCHEDULE';
const loading = 'START_DOCTOR_SCHEDULE_LOADING';
const err = 'HAVEING_DOCTOR_SCHEDULE_ERROR';
const reset = 'RESET_DOCTOR_SCHEDULE';

const saveDoctorSchedule = data => {

      return {
            type: save,
            payload: data,
      };
};

const startDoctorScheduleLoadig = () => {
      return {
            type: loading,
      };
};

const haveingError = error => {
      return {
            type: err,
            payload: error,
      };
};

export const resetDoctorSchedule = () => {
      return {
            type: reset,
      };
};

/*
       {
             "limit":"3", 
             "doctor":"5dad6ba6f4ab551864e63f01",
            "date":"2019-11-16T10:24:39.736Z"
       }
*/

export const GettingDocterInfo = (id) => {
      return dispatch => {
            dispatch(startDoctorScheduleLoadig())
            const __params = {
                  limit: limit,
                  //       doctror: id,
                  doctor: '5dad6ba6f4ab551864e63f03',
                  //       date: new Date().toISOString(),
                  date: '2020-04-25T10:24:39.736Z',
            };


            axios.get(`${Host}/doctors/getdoc/${__params.doctor}`)
                  .then(result => {
                        if (result.data.status) {
                              console.log(result.data);
                              dispatch(saveDoctorSchedule(result.data.data.appointments));
                              success({
                                    status: true,
                                    message: 'Schedule data feched successfully.',
                              });
                        } else {
                              faild({
                                    status: false,
                                    message: result.data.error,
                              });
                        }
                  });
      };
}

export const GetDoctorAppointments = (limit = 3, id, success, faild) => {
      return dispatch => {
            dispatch(startDoctorScheduleLoadig())
            const __params = {
                  limit: limit,
                  //       doctror: id,
                  doctor: '5dad6ba6f4ab551864e63f03',
                  //       date: new Date().toISOString(),
                  date: '2020-04-25T10:24:39.736Z',
            };

            const config = {
                  'Content-Type': 'application/json',
            };

            //     axios.post(`${Host}/appointment/get`, __params, config).then(result => {
            axios.get(`${Host}/doctors/getdoc/${__params.doctor}`, __params, config).then(result => {
                  if (result.data.status) {
                        // const data = result.data.user;
                        console.log(result.data);
                        dispatch(saveDoctorSchedule(result.data.data.appointments));
                        success({
                              status: true,
                              message: 'Schedule data feched successfully.',
                        });
                  } else {
                        faild({
                              status: false,
                              message: result.data.error,
                        });
                  }
            });
      };
};

/*
{
	"patient":"John", 
      "time":"3:20 PM", 
      "date":"12, January, 2019", 
      "address":"Park, Los Santos",
      "timeSlot":"5dcbc8b7f3d00c29a8e0d006",
      "email":"anas3rde@gmail.com"
}
*/
export const ApprovePatientAppointFromDoctorDashbord = (
      _parms,
      success,
      faild,
) => {
      return dispatch => {
            const config = {
                  'Content-Type': 'application/json',
            };

            axios.post(`${Host}/appointment/approve`, _params, config).then(result => {
                  if (result.data.status) {
                        // const data = result.data.user;
                        console.log(result);
                        // dispatch(saveDoctorSchedule(data));
                        success({
                              status: true,
                              message: 'Doctor add successfully.',
                        });
                  } else {
                        faild({
                              status: false,
                              message: result.data.error,
                        });
                  }
            });
      };
};

/*
{
	"byPatient":"true",
	"byDoctor":"false",
	"reason":"Have some important work",
	"id":"5dcbc8b7f3d00c29a8e0d007"
}
*/
export const CancelPatientAppointFromDoctorDashbord = (
      _parms,
      success,
      faild,
) => {
      return dispatch => {
            const config = {
                  'Content-Type': 'application/json',
            };

            axios.post(`${Host}/appointment/cancel`, _params, config).then(result => {
                  if (result.data.status) {
                        // const data = result.data.user;
                        console.log(result);
                        // dispatch(saveDoctorSchedule(data));
                        success({
                              status: true,
                              message: 'Doctor add successfully.',
                        });
                  } else {
                        faild({
                              status: false,
                              message: result.data.error,
                        });
                  }
            });
      };
};
