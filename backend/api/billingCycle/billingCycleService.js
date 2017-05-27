const _ = require('lodash')
const BillingCyle = require('./billingCycle')

BillingCyle.methods(['get', 'post', 'put', 'delete'])
BillingCyle.updateOptions({ 
    new: true, 
    runValidators: true
})

BillingCyle.after('post', sendErrorOrNext).after('put', sendErrorOrNext)

function sendErrorOrNext(req, res, next) {
    const bundle = res.locals.bundle

    if(bundle.errors) {
        var errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

function parseErrors(nodeRestFulErrors) {
    const errors = []
    _.forIn(nodeRestFulErrors, error => errors.push(error.message))
    return errors
}

BillingCyle.route('count', function(req, res, next) {
    BillingCyle.count(function(error, value) {
        if(error)
            res.status(500).json({ errors: [error] })
        else
            res.json({ value })
    })
})

module.exports = BillingCyle