import {
    GET_REGISTRATIONS_REQUEST,
    GET_REGISTRATIONS_SUCCESS,
    GET_REGISTRATIONS_FAILURE,
    DELETE_REGISTRATION_REQUEST,
    DELETE_REGISTRATION_SUCCESS,
    DELETE_REGISTRATION_FAILURE,
} from './actionTypes';

export const getRegistrationsRequest = () => ({
    type: GET_REGISTRATIONS_REQUEST,
});

export const getRegistrationsSuccess = list => ({
    type: GET_REGISTRATIONS_SUCCESS,
    payload: { list },
});

export const getRegistrationsFailure = () => ({
    type: GET_REGISTRATIONS_FAILURE,
});

export const deleteRegistrationRequest = item => ({
    type: DELETE_REGISTRATION_REQUEST,
    payload: { item },
});

export const deleteRegistrationSuccess = id => ({
    type: DELETE_REGISTRATION_SUCCESS,
    payload: { id },
});

export const deleteRegistrationFailure = item => ({
    type: DELETE_REGISTRATION_FAILURE,
    payload: { item },
});
