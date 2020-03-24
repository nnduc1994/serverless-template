'use strict'

import middy from 'middy'
import { cors } from 'middy/middlewares'
import { defaultJson, boomErrorHandler } from 'common_lib/middleware'

const handler = async event => {
  return "helllo word"
}

const lambda = middy(handler)
  .use(cors())
  .use(defaultJson())
  .use(boomErrorHandler)

export { lambda as handler }
