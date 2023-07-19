import { PageLocation } from "../enums/common.enum";

export interface ProjectInterface {
  imageUrl: string,
  url: PageLocation,
  metaverseLogo: string,
  metaverse: string,
  tag: string,
  title: string
}

export interface NavigationInterface {
  imageUrl: string,
  url: PageLocation,
  floatImageUrl: string,
  title: string
  description: string,
  newTab?: boolean
}