class ApiError extends error{
    constructor(
        statuscode,
        message = "something went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statuscode = statuscode
        this.errors = errors
        this.data = null
        this.message = message
        this.success = false

        if(statck){
            this.statck = statck
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}
