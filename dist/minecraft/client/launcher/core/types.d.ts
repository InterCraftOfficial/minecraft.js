export interface ILauncherProfiles {
    analyticsFailcount?: number;
    analyticsToken?: string;
    clientToken: string;
    selectedProfile?: string;
    authenticationDatabase: IAuthDatabase;
    launcherVersion: ILauncherVersion;
    profiles: IProfiles;
    settings?: ISettings;
    selectedUser?: ISelectedUser;
}
export interface ISettings {
    crashAssistance?: boolean;
    enableAdvanced?: boolean;
    enableAnalytics?: boolean;
    enableHistorical?: boolean;
    enableSnapshots?: boolean;
    keepLauncherOpen?: boolean;
    locale?: string;
    profileSorting?: string;
    showGameLog?: boolean;
    showMenu?: boolean;
}
export interface ILauncherVersion {
    name: string;
    format: number;
    profilesFormat: number;
}
export interface IProfiles {
    [key: string]: IProfile;
}
export interface IProfile {
    name?: string;
    type: "latest-release" | "latest-snapshot" | "custom";
    created?: string;
    lastUsed?: string;
    lastVersionId?: string;
    gameDir?: string;
    javaDir?: string;
    javaArgs?: string;
    resolution?: {
        width: number;
        height: number;
    };
}
export interface IAuthDatabase {
    [id: string]: IUser;
}
export interface IUser {
    accessToken: string;
    username: string;
    profiles: {
        [uuid: string]: {
            displayName: string;
        };
    };
}
export interface ISelectedUser {
    account: string;
    profile: string;
}
