const express = require('express');
const router = express.Router();

router.get('/foo', (req, res) => {
  return res.send(200).json({ ok: 'get' });
});

router.post('/bar', (req, res) => {
  return res.send(200).json({ ok: 'post' });
});

module.exports = (app) => {
  app.use(
    '/fail',
    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */
    router
  );
};
