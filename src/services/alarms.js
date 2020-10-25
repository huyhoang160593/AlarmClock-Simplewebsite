import axios from 'axios'
const baseUrl = '/api/alarmMessages'


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = async newObject => {
    const response = await axios.post(baseUrl,newObject)
    return response.data
}

const update = async ( id , currentObject) => {
    const response = await axios.put(`${baseUrl}/${id}`, currentObject)
    return response.data
}

const remove = async (id) => {
    await axios.delete(`${baseUrl}/${id}`)
}

const getSDMessage = async (code) => {
    const response = await axios.get(`${baseUrl}/code/${code}`)
    return response.data
}
// eslint-disable-next-line
export default { getAll, create, update, remove, getSDMessage }