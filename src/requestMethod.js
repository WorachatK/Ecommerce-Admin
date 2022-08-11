import axios from 'axios'

const BASE_URL = "http://localhost:5500/api/"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjBlNDkxYzkwNmExOGY1YjA5OGRjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTk1NDM4OSwiZXhwIjoxNjYwMjEzNTg5fQ.bmRyvFAvs9u9jQrC392UNP6UyR30Yk8_bIG8Un5gd8s"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})