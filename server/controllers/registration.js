import userDetail from "../models/UserSchema.js";


// define route handler

const createAccount = async(req, res)=>{
    try{
        //extract title and description from request body
        const {name, email, password, confirmPassword} = req.body;
        // create a new todo obj and insert in db
        const response = await userDetail.create({name, email, password, confirmPassword});
        // send a json response with sucess flag
        res.status(200).json({
            sucess: true,
            data:response,
            message:"Entry created successfully"
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            susccess: false,
            data:"internal error",
            message: err.message,
        })

    }
}

export default createAccount