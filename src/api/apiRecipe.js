import axios from "axios"
import { API_ENDPOINT, GET_CONFIX, GET_TREE_BY_ID } from "./constant"
import detail from '../data/getConfig.json'


export const getConfix = () => {
    return axios.get(API_ENDPOINT + GET_CONFIX
    )
    // return detail
}


export const postConfig = (body) => {
    return axios.post(API_ENDPOINT + GET_CONFIX, body
    )

}