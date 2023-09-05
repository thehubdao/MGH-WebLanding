export enum ProjectLocation{
    FitchinHouse= '/projects/fitchin-house',
    Cryptoticker = '/projects/cryptoticker',
    EspacioCreador = '/projects/espacio-creador',
    Ekolance = '/projects/ekolance',
    CompetitiveGameHub = '/projects/competitive-game-hub',
    MentholProtocol = '/projects/menthol-protocol',
    Ayo = '/projects/ayo-and-teo',
    MetagameHub = '/projects/metagamehub',
    TheHub = '/projects/the-hub'
}

export type ProjectOptionsKey = keyof typeof ProjectOption;

export enum ProjectOption{
    decentraland = "Decentraland",
    sandbox = "Sandbox",
    spatial = "Spatial",
    'somnium-space' = "Somnium Space",
    'xone-games' = "Xone games",
    experiences = "Experiences",
    galleries = "Galleries",
    headquarters = "Headquarters",
    weareables = "Weareables"
}
