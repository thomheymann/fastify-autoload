'use strict'

export default function (f, opts, next) {
  f.get('/something', (request, reply) => {
    reply.send({ something: 'else' })
  })

  next()
}