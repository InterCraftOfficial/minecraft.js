/**
 * This represents the account response from the Mojang servers
 */
export interface IRefreshResponse {
    accessToken: string;
    clientToken: string;
    selectedProfile: {
        agent: string;
        id: string;
        name: string;
        userId: string;
        createdAt: number;
        legacyProfile: boolean;
        suspended: boolean;
        tokenId: string;
        paid: boolean;
        migrated: boolean;
    };
}
/**
 * This represents the account response from the Mojang servers
 */
export interface IAuthenticateResponse extends IRefreshResponse {
    user: undefined | {
        id: string;
        email: string;
        username: string;
        registerIp: string;
        registeredAt: number;
        passwordChangedAt: number;
        dateOfBirth: number;
        suspended: boolean;
        blocked: boolean;
        secured: boolean;
        migrated: boolean;
        emailVerified: boolean;
        legacyUser: boolean;
        verifiedByParent: boolean;
        hashed: boolean;
        fromMigratedUser: boolean;
    };
}
