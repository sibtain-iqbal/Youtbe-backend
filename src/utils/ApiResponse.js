class ApiResponse {
    constructor(statusCode, data, message="Scucees0"){
        this.statusCode = statusCode,
        this.data  = data,
        this.message = message
        this.success = statusCode <400
    }
}