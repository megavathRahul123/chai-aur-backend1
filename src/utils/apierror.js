//this is built because of API error handling

class ApiError extends Error {
    constructor(
    statusCode, 
    message="something went wrong",//default message
    errors=[],  //mulltiple errors
    stack= ""   //error stact
        
    ){
    super(message)   //over write the message//custom message
    this.statusCode = statusCode              
    this.data =null
    this.message = message
    this.errors = errors
    this.success = false;

    if(stack){ 
        this.stack = stack
    }
    else{
        Error.captureStackTrace(this, this.constructor)
    }

}
}


export default ApiError;
/*
const error = new ApiError(404, "User not found");
console.log(error.statusCode);      
Output: 404
*/