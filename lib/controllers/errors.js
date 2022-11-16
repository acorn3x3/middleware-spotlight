const { Router } = require('express');

module.exports = Router()
  .get('/teapot', (req, res, next) => {
    next({
      status: 418,
      message:
        'I am a teapot, short and stout, here is my error handler, here is my ERROR AT {',
    });
  })
  .get('/payment', (req, res, next) => {
    next({ status: 402, message: 'I am a teapot' });
  });
