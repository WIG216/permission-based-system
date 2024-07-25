// export enum ErrorCodes {
//     SERVER_ERROR = 'SERVER_ERROR',
//     INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
//     USER_NOT_FOUND = 'USER_NOT_FOUND',
//     PERMISSION_NOT_FOUND = 'PERMISSION_NOT_FOUND',
//     USER_ALREADY_EXISTS = 'USER_ALREADY_EXISTS',
//     PERMISSION_DENIED = 'PERMISSION_DENIED',
//     INVALID_OBJECT_ID = 'INVALID_OBJECT_ID',
//     UNAUTHORIZED = 'UNAUTHORIZED',
//     FORBIDDEN="FORBIDDEN",
//     INVALID_REFRESH_TOKEN="INVALID_REFRESH_TOKEN",
//     REFRESH_TOKEN_REQUIRED="REFRESH_TOKEN_REQUIRED"
// }

export const errorMessages = {
    internalServerError : 'An unexpected error occurred. Please try again later.',
    notFound : 'Resource not found.',
    unauthorized : 'Unauthorized access.',
    forbidden : 'You do not have permission to access this resource.',
    tokenMissing : 'Authentication token is missing.',
    tokenInvalid : 'Authentication token is invalid.',
    user: {
        userNotFound : 'User not found.',
        invalidCredentials : 'Invalid credentials.',
        emailAlreadyExists : 'Email already exists.',
    }
}

export const errorCodes = {
    internalServerError: 'E1000',
    notFound: 'E1001',
    unauthorized: 'E1002',
    forbidden: 'E1003',
    invalidObjectId: "E1004",
    validationError: "E1005",
    auth: {
        refreshTokenMissing: 'E2000',
        tokenMissing: 'E2001',
        tokenInvalid: 'E2002',
        invalidRefreshToken: "E2003"
    },
    user: {
       notFound: 'E3000',
        invalidCredentials: 'E3001',
        emailAlreadyExists: 'E3002',
    },
    profile: {
        notFound: "E4000"
    },
    permission: {
        alreadyExist: "E4000",
        notFound: "E4001"
    }
};
