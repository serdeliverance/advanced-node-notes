const https = require('https')

/*
    - In this example, we can see that all the http request are executed almost at the same time
    - It may look strange because we are running more than 4 operations at once. Remember, we have 4 threads in the thread pools.
        So, how can it run all of them computations like if it were on parallel?)
    - answer: libuv delegates network IO to the OS, which implements those calls in an async non-blocking way
*/

const start = Date.now()

function doRequest() {
    https.request('https://www.google.com', res => {
        res.on('data', () => {})
        res.on('end', () => {
            console.log(Date.now() - start)
        })
    }).end()
}

doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()