const express = require('express'),
      bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotions: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});

promoRouter.route('/:promoId')
    .all(function (req, res, next) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })

    .get(function (req, res, next) {
        res.end('Will send details of the promotions: ' + req.params.promoId + ' to you!');
    })

    .put(function (req, res, next) {
        res.write('Updating the promotions: ' + req.params.promoId + '\n');
        res.end('Will update the promotions: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete(function (req, res, next) {
        res.end('Deleting promotions: ' + req.params.promoId);
    });

module.exports = promoRouter;