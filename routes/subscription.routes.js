import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import { createSubscription, getUserSubscription } from "../contrillers/subscription.controller.js";


const subscriptionRouter=Router();
subscriptionRouter.get('/',(req,res)=>{
    return res.send({
        title:"get all subscriptions "
    })
})

subscriptionRouter.get('/:id',(req,res)=>{
    return res.send({
        title:"get   subscriptions details "
    })
})
subscriptionRouter.post('/',authorize,createSubscription)
subscriptionRouter.put('/:id',(req,res)=>{
    return res.send({
        title:"update  subscriptions "
    })
})

subscriptionRouter.delete('/:id',(req,res)=>{
    return res.send({
        title:"delete  subscriptions "
    })
})


subscriptionRouter.get('/user/:id',authorize,getUserSubscription)

subscriptionRouter.put('/:id/cancel',(req,res)=>{
    return res.send({
        title:"cancel  subscriptions "
    })
})

subscriptionRouter.get('/upcoming-renewals',(req,res)=>{
    return res.send({
        title:"get upcomming renewals "
    })
})
export default subscriptionRouter