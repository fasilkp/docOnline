export async function editDoctorProfile(req, res){
    try{
        

    }catch(error){
        console.log(error);
        req.json({err:true, error, message:"something went wrong"})
    }
}