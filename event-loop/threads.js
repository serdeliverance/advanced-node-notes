// customizing internal thread pool size for  underlying SO computations (through libuv)
process.env.UV_THREADPOOL_SIZE = 2

const crypto = require('crypto')

/*
    - Node is single threaded on the event loop.
    - But there are functions on the standard library than rely on a thread pool in
    order to compute cpu intensive tasks (like in the following example)
    - This internal thread pool is managed by libuv (which is in charge of matching those threads
    against the underlaying OS, who then will match it to the concrete cpu)
*/

const start = Date.now()

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('1:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('2:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('3:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('4:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('5:', Date.now() - start)
})