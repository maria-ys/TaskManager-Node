
class customAPIError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

const createCustomError = (msg, code)=>{
    return new customAPIError(msg, code);
}

module.exports = {
    customAPIError,
    createCustomError
}