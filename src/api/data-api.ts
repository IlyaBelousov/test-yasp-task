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

export const testData = axios.get<ResponseType>('https://rcslabs.ru/ttrp1.json')


