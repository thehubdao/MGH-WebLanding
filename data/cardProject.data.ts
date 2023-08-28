import { PageLocation } from "../enums/common.enum";
import { ProjectLocation } from "../enums/project.enum";
import { CardProjectInterface } from "../interfaces/data.interface";

export const ProjectsData: CardProjectInterface[] = [
  {
    imageUrl: "/projects/project-1.png",
    url: ProjectLocation.FitchinHouse,
    metaverseLogo: "/projects/logos/decentraland.svg",
    metaverse: "decentraland",
    tag: "headquarter",
    title: "FITCHIN <br />HOUSE"
  },
  {
    imageUrl: "/projects/project-2.png",
    url: ProjectLocation.Cryptoticker,
    metaverseLogo: "/projects/logos/sandbox.svg",
    metaverse: "sandbox",
    tag: "headquarter",
    title: "cryptoticker"
  },
  {
    imageUrl: "/projects/project-3.png",
    url: ProjectLocation.EspacioCreador,
    metaverseLogo: "/projects/logos/decentraland.svg",
    metaverse: "decentraland",
    tag: "gallery",
    title: "espacio <br />creador"
  },
  {
    imageUrl: "/projects/project-4.png",
    url: ProjectLocation.Ekolance,
    metaverseLogo: "/projects/logos/spatial.svg",
    metaverse: "spatial",
    tag: "educational hub",
    title: "ekolance"
  },
  {
    imageUrl: "/projects/project-5.png",
    url: ProjectLocation.CompetitiveGameHub,
    metaverseLogo: "/projects/logos/somnium.svg",
    metaverse: "somnium space",
    tag: "Experience",
    title: "Competitive <br />Game Hub"
  },
  {
    imageUrl: "/projects/project-6.png",
    url: ProjectLocation.MentholProtocol,
    metaverseLogo: "/projects/logos/decentraland.svg",
    metaverse: "decentraland",
    tag: "Metaverse Event",
    title: "Menthol Protocol"
  },
  {
    imageUrl: "/projects/project-7.png",
    url: ProjectLocation.Ayo,
    metaverseLogo: "/projects/logos/sandbox.svg",
    metaverse: "sandbox",
    tag: "Music Experience",
    title: "Ayo <br />& Teo"
  },
  {
    imageUrl: "/projects/project-8.png",
    url: ProjectLocation.MetagameHub,
    metaverseLogo: "/projects/logos/xone.svg",
    metaverse: "xone",
    tag: "Mobile First Experience",
    title: "METAGAMEHUB"
  },
  {
    imageUrl: "/projects/project-9.png",
    url: ProjectLocation.TheHub,
    metaverseLogo: "/projects/logos/spatial.svg",
    metaverse: "spatial",
    tag: "HQ",
    title: "THE HUB"
  },
]