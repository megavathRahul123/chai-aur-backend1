//this is built because of API error handling

class Apierror extends Error {
    constructor(
        statusCode, 
        message="something went wrong",
    errors=[],  //mulltiple errors
    statck = ""   //error stact
        
    ){
    super(message)   //over write the message
    this.statusCode = statusCode
    this.data =null
    this.message = message
    this.errors = errors
    this.success = false;

    if(statck){
        this.statck = statck
    }
    else{
        Error.captureStackTrace(this, this.constructor)
    }

}
}


export default Apierror;