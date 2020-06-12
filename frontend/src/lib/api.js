import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

export const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

export const getServices = () => {
  return axios.get(`${baseUrl}/menu/`)
}

export const getMyBookings = () => {
  return axios.get(`${baseUrl}/booking/`, withHeaders())
}

export const postNewBooking = (data) => {
  return axios.post(`${baseUrl}/booking/`, data, withHeaders())
}

