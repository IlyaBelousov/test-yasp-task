import axios from "axios";

export type InstanceDataType = {
    front: number
    back: number
    db: number
}
export type ResponseType = {
    title: string
    dev: InstanceDataType
    test: InstanceDataType
    prod: InstanceDataType
    norm: number
}
const instance = axios.create({
    baseURL:'https://rcslabs.ru/ttrp1.json',
    withCredentials:true
})
export const testData = instance.get<ResponseType>('')