import axios from "axios"
import { API_ENDPOINT, GET_ALL_TAX, GET_ALL_USER, GET_TAX_BY_ID } from "./constant"
import users from '../data/getAllUser.json'
import notdone from '../data/getAllTax.json'
import detail from '../data/getTaxById.json'

export const getAllUser = () => {
    return axios.get(API_ENDPOINT + GET_ALL_USER
    )
    // return users
}

export const getUserById = (id) => {
    return axios.get(API_ENDPOINT + GET_ALL_USER + id
    )
    // return users
}

export const getAllTax = () => {
    return axios.get(API_ENDPOINT + GET_ALL_TAX
    )
    // return notdone
}

export const getTaxById = (id) => {
    return axios.get(API_ENDPOINT + GET_TAX_BY_ID + id
    )
    // return detail
}