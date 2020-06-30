import axios from 'axios';
import {Host} from '../../utils/connection';
import Moment from 'moment';
import dateArray from 'moment-array-dates';

const SAVE = 'SAVE_PATIENT_INFO';
const ERRORS = 'HAVEING_ERROR_IN_PATIENT_ACCOUNT_REDUCER';
const LOADING = 'START_PATIENT_ACCOUNT_LOADING';
const RESET = 'RESET_PATIENT_ACCOUNT_REDUCER';
const SAVE_FEV_DOC = 'SAVE_PATIENT_FEV_DOC';
const SAVE_FAMILY_MEMBER = 'SAVE_PATIENT_FAMILY_MEMBER';
const PROFILE_PIC_UPLOADED = 'PROFILE_PIC_UPLOADED';
const START_APPOINTMENT_SLOT_LOADING = 'START_APPOINTMENT_SLOT_LOADING';
const APPOINTMENT_SLOT_LOADED = 'APPOINTMENT_SLOT_LOADED';
const APPOINTMENT_SLOT_ERROR = 'APPOINTMENT_SLOT_ERROR';

const saveUserAccount = (data) => {
  return {
    type: SAVE,
    payload: data,
  };
};

const saveFevDoc = (data) => {
  return {
    type: SAVE_FEV_DOC,
    payload: data,
  };
};

const saveFamilyMember = (data) => {
  return {
    type: SAVE_FAMILY_MEMBER,
    payload: data,
  };
};

const startLoading = () => {
  return {
    type: LOADING,
  };
};

const havingError = (err) => {
  return {
    type: ERRORS,
    payload: err,
  };
};

const profilePicUploaded = (data) => {
  return {
    type: PROFILE_PIC_UPLOADED,
    payload: data,
  };
};

const startAppointmentSlotLoading = () => {
  return {
    type: START_APPOINTMENT_SLOT_LOADING,
  };
};
const appointmentSlotLoaded = (appointmentSlot) => {
  return {
    type: APPOINTMENT_SLOT_LOADED,
    payload: appointmentSlot,
  };
};
const appointmentSlotError = (error) => {
  return {
    type: APPOINTMENT_SLOT_ERROR,
    payload: error,
  };
};
export const resetUserAccountReducer = () => {
  return {
    type: RESET,
  };
};

export const GetPatientInfo = (id) => {
  return (dispatch) => {
    console.log('authAction > GetPatientInfor');
    dispatch(startLoading());

    axios
      .get(`${Host}/patient/getinfo/${id}`)
      .then((result) => {
        if (result.status) {
          // console.log(result.data.data);
          dispatch(saveUserAccount(result.data.data));
        }
      })
      .catch((err) => {
        dispatch(havingError(err));
      });
  };
};

export const GetFevDoc = (docId) => {
  return async (dispatch) => {
    const preAdd = {
      specialty: 788,
      city: 'New York',
      _id: docId,
    };

    await axios
      .post(`${Host}/doctors/search`, preAdd)
      .then((res) => {
        console.log('************** patientAccotioon **********');
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const AddFevDoc = (docId, patientId) => {
  return async (dispatch) => {
    const config = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const _data = {
      id: patientId,
      docId: docId,
    };

    await axios
      .post(`${Host}/patient/favourite/add`, _data, config)
      .then((result) => {
        if (result.status) {
          console.log('Successfully Add your fev doctor.');
          GetPatientInfo(patientId);
        }
      })
      .catch((err) => {
        dispatch(haveingError(err));
      });
  };
};

export const RemoveFevDoc = (docId, patientId) => {
  return async (dispatch) => {
    const config = {
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const _data = {
      id: patientId,
      docId: docId,
    };

    try {
      const request = axios.post(
        `${Host}/patient/favourite/remove`,
        _data,
        config,
      );
      console.log(request);
      dispatch(GetPatientInfo(patientId));
    } catch (e) {
      console.log(e);
    }
  };
};

export const RemoveAppointment = (data) => {
  return async (dispatch) => {
    const config = {
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    try {
      const request = await axios.post(
        `${Host}/appointment/cancel`,
        data,
        config,
      );
      console.log('#######################');
      console.log(request.data);
    } catch (e) {
      console.log('******************');
      console.log(e);
    }
  };
};

export const GetFamilyMember = (id) => {
  return (dispatch) => {
    dispatch(startLoading());
    console.log(id);

    const config = {
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const _data = {
      metaId: id, //"5eb31e07e078c64910b9d29e",
      // metaId: '5eb31e07e078c64910b9d29e',
    };

    axios
      .post(`${Host}/patient/member/get`, _data, config)
      .then((res) => {
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
        console.log(res.data);
        dispatch(saveFamilyMember(res.data.data.members));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const AddFamilyMember = (obj, success, faild) => {
  return async (dispatch) => {
    dispatch(startLoading());
    const config = {
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    // obj.metaId = '5eb31e07e078c64910b9d29e';

    await axios
      .post(`${Host}/patient/member/add`, obj, config)
      .then((result) => {
        if (result.status) {
          console.log('Successfully Add your Family member.');
          success();
          GetFamilyMember(obj.metaId);
        }
      })
      .catch((err) => {
        dispatch(havingError(err));
      });
  };
};

export const RemoveFamilyMember = (docId, patientId) => {
  return async (dispatch) => {
    const config = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const _data = {
      id: patientId,
      docId: docId,
    };

    await axios
      .post(`${Host}/patient/favourite/remove`, _data, config)
      .then((result) => {
        if (result.status) {
          console.log('Successfully remove fev doctor.');
          GetPatientInfo(patientId);
        }
      })
      .catch((err) => {
        dispatch(haveingError(err));
      });
  };
};

export const UploadProfilePic = (id, ImageData) => {
  return (dispatch) => {
    dispatch(startLoading());
    const Image = {
      uri: ImageData.uri,
      type: ImageData.type,
      name: ImageData.fileName,
    };
    const data = new FormData();
    data.append('myFile', Image);
    data.append('id', id);
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: data,
    };
    fetch(`${Host}/patient/upload/image`, config)
      .then((responseStatus) => {
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
        console.log(responseStatus);
        dispatch(profilePicUploaded(Image));
      })
      .catch((err) => {
        console.log(err);
        dispatch(havingError(err));
      });
  };
};

export const GetAppointmentSlot = (dates, id, setRange) => {
  return async (dispatch) => {
    dispatch(startAppointmentSlotLoading());
    const config = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const data = {
      dates,
      id,
    };
    await axios
      .post(`${Host}/doctors/appointment/date`, data, config)
      .then((result) => {
        if (result.status) {
          const modifiedFormatData = result.data.data.map((item) => {
            const {_id, appointments} = item;
            return {
              date: _id,
              appointments,
            };
          });

          console.log(modifiedFormatData);
          // const range = dateArray.range(
          //   modifiedFormatData[0].date,
          //   modifiedFormatData[modifiedFormatData.length - 1].date,
          //   'dddd, Do',
          //   true,
          // );
          // setRange(range);
          dispatch(appointmentSlotLoaded(modifiedFormatData));
        }
      })
      .catch((err) => {
        dispatch(appointmentSlotError(err));
      });
  };
};
