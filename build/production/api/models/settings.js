var mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    mainParams: {
        siteName: String,
        siteUrl: String,
        adminUrl: String,
        phone: String
    },
    seoParams:[{
        title:String,
        description:String,
        keywords:String,
        state:String,
        url:String
    }],
    operationParams:[{
        operationType:String,
        date:Date,
        log:String,
        
        history:[{
            date:Date,
            log:String
        }]
    }],
    ymlParams:{
        deliveryCost:Number,
        deliveryDays:String,
        orderBefore:Number,
        prodoductByImage:Boolean,
        store:Boolean,
        pickup:Boolean,
        delivery:Boolean,
        warranty:Boolean,
        bid:Number,
        salesNotes:String
    }
});