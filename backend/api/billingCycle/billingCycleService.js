const BillingCyle = require('./billingCycle')

BillingCyle.methods(['get', 'post', 'put', 'delete'])
BillingCyle.updateOptions({ 
    new: true, 
    runValidators: true
})

BillingCyle.route('count', function(req, res, next) {
    BillingCyle.count(function(error, value) {
        if(error)
            res.status(500).json({ errors: [error] })
        else
            res.json({ value })
    })
})

module.exports = BillingCyle