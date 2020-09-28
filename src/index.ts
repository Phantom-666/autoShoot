import https from 'https'
import http from 'http'
import {takeUrl} from './takeUrl'
import {action} from './request'

type urlType = {
    protocol :string,
    url : string,
    count : number
}
const url = takeUrl(process.argv)

const callback = (body:string) => {
    const data = JSON.parse(body)
    console.log(data)
}

const request = (url:urlType) => {
    if (url.protocol === 'http') {
        action(http, url.url, callback)
    }
    if (url.protocol === 'https') {

        for (let i = 0; i < url.count; i++) {
            action(https, url.url, callback)
        }
    }
}

request(url)