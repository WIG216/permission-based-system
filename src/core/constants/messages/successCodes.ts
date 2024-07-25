// export enum SuccessCodes {
//     USER_CREATED = 'USER_CREATED',
//     USER_DELETED = 'USER_DELETED',
//     USERS_RETRIEVED = 'USERS_RETRIEVED',
//     USER_RETRIEVED = 'USER_RETRIEVED',
//     USER_UPDATED = 'USER_UPDATED',
//     PERMISSION_RETRIEVED = 'PERMISSION_RETRIEVED',
//     PERMISSIONS_RETRIEVED = 'PERMISSIONS_RETRIEVED',
//     LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL',
// }

export const successMessages ={
    operationSuccessful : 'Operation completed successfully.',
    user: {
        userCreated : 'User created successfully.',
        userUpdated : 'User updated successfully.',
        userDeleted : 'User deleted successfully.',
    },
    auth: {

        loginSuccessful : 'Login successful.',
        logoutSuccessful : 'Logout successful.',
    }
}

export const successCodes  = {
    operationSuccessful: 'S1000',
    auth: {
        loginSuccessful: 'S2000',
        logoutSuccessful: 'S2001',
        accessTokenRegenerated: 'S2002',
    },
    user: {
        created: 'S3000',
        updated: 'S3001',
        deleted: 'S3002',
    },
    profile: {
        created: 'S4000',
        updated: 'S4001',
        deleted: 'S4002',
    },
    permission: {
        created: 'S4000',
        updated: 'S4001',
        deleted: 'S4002',
    }
};

