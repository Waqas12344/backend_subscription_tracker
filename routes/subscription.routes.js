import { Router } from "express";


const subscriptionRouter=Router();
subscriptionRouter.post('/',(req,res)=>{
    return res.send({
        title:"get all subscriptions "
    })
})

subscriptionRouter.get('/:id',(req,res)=>{
    return res.send({
        title:"get   subscriptions details "
    })
})
subscriptionRouter.post('/',(req,res)=>{
    return res.send({
        title:"create the subscription "
    })
})
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


subscriptionRouter.get('/user/:id',(req,res)=>{
    return res.send({
        title:"get all user   subscriptions "
    })
})

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