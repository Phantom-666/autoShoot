import https from 'https'
import http from 'http'
import { takeUrl } from './takeUrl'
import { action } from './request'

type urlType = {
  protocol: string
  url: string
  count: number
}
const url = takeUrl(process.argv)

const callback = (body: string) => {
  const data = JSON.parse(body)
  console.log(data)
}

const request = (url: urlType) => {
  switch (url.protocol) {
    case 'http':
      action(http, url.url, callback)
      break

    case 'https':
      for (let i = 0; i < url.count; i++) action(https, url.url, callback)
      break
  }
}

request(url)
