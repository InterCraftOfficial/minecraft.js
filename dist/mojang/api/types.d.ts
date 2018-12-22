/**
 * This represents the account response from the Mojang servers
 */
export interface IAccount {
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
    user?: {
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
export interface IServiceStatus {
    [service: string]: string;
}
export interface IUsernameUuid {
    id: string;
    name: string;
}
export interface INameRecord {
    name: string;
    changedToAt?: number;
}
export interface IPlayer {
    id: string;
    name: string;
    legacy: boolean;
    demo: boolean;
}
export interface IProfile {
    id: string;
    name: string;
    properties: Array<IProperty>;
}
export interface IProperty {
    name: string;
    value: string;
    signature?: string;
}
export interface ITexturePropertyValue {
    timestamp: number;
    profileId: string;
    profileName: string;
    signatureRequired?: boolean;
    textures: {
        SKIN?: {
            url: string;
            metadata?: {
                model: "slim";
            };
        };
        CAPE?: {
            url: string;
        };
    };
}
