import { HttpException, HttpStatus } from "@nestjs/common"

export class ErrorHandler {
    errorMessage(error) {
        return (new HttpException({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: error,
        }, HttpStatus.INTERNAL_SERVER_ERROR))
    }
}