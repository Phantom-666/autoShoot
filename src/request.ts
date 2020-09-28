const action = (protocol:any, url:string, callback:Function) => {
    const req = protocol.request(url, (res:any) => {
        let body = ''
        res.on('data', (chunk:string) => body += chunk)
        res.on('end', () => callback(body))
      })
      req.on('error', (e:Error) => {
        console.error(`problem with request: ${e.message}`)
      })
      
      req.end()
}


export {action}