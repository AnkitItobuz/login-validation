import userDetail from "../models/UserSchema.js";


// define route handler
const getUser = async(req, res)=>{
    try{
        //fetch all to items from database
        const todo = await userDetail.find();
        res.status(200).json({
            success: true,
            data: todo,
            message: "Entire todo data is fetched successfully"
        })

    }
    catch(err){
       console.error(err);
       res.status(500).json({
                  success: false,
                  error: err.message,
                  message: "Internal server error"
              })
    }
}

export default getUser