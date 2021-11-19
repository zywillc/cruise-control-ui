/* Copyright 2017-2019 LinkedIn Corp. Licensed under the BSD 2-Clause License (the "License"). See License in the project root for license information. */
var pw = process.env.CREDENTIALS_KCC_ADMIN_PW
module.exports = {
  NODE_ENV: '"production"',
  CREDENTIALS_KCC_ADMIN_PW: '"' + pw + '"'
}
