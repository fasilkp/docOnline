import Razorpay from 'razorpay'

let instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function paymentOrder(req, res){
    try{
        var options = {
            amount: 5*100,  // amount in the smallest currency unit
        currency: "INR",
      };
      instance.orders.create(options, function(err, order) {
        console.log(order);
        if(err){
            console.log(err)
            res.json({err:true, message:"server error"})
        }else{
            res.json({err:false, order})
        }
    });
}catch(error){
    res.json({err:true, message:"server error", error})
}

}