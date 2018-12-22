export interface ILauncherProfiles {
    analyticsFailcount?: number;
    analyticstoken?: string;
    clientToken?: string;
    selectedProfile?: string;
    settings?: ISettings;
    launcherVersion?: ILauncherVersion;
    profiles?: IProfiles;
    selectedUser?: ISelectedUser;
}
export interface ISettings {
    enableAnalytics?: boolean;
    enableAdvanced?: boolean;
    keepLauncherOpen?: boolean;
    showMenu?: boolean;
    locale?: string;
    profileSorting?: string;
    showGameLog?: boolean;
    crashAssistance?: boolean;
    enableSnapshots?: boolean;
    enableHistorical?: boolean;
}
export interface ILauncherVersion {
    name: string;
    format: number;
    profilesFormat: number;
}
export interface IProfiles {
    [key: string]: {
        name?: string;
        type: "latest-release" | "latest-snapshot" | "custom";
        created?: string;
        lastUsed: string;
        lastVersionId?: string;
        gameDir?: string;
        javaDir?: string;
        javaArgs?: string;
        resolution?: {
            width: number;
            height: number;
        };
    };
}
export interface IAuthDatabase {
    [id: string]: {
        accessToken: string;
        username: string;
        profiles: {
            [uuid: string]: {
                displayName: string;
            };
        };
    };
}
export interface ISelectedUser {
    account: string;
    profile: string;
}
