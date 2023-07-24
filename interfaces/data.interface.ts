import { ExternalLink, PageLocation } from "../enums/common.enum";

export interface PersonCarrouselInterface{
  name: string,
  role: string,
  description: string,
  url: string,
  alt: string
}

export interface PartnersAndInvestorsInterface{
  url: string,
  
}

export interface CardProjectInterface {
  imageUrl: string;
  url: PageLocation | ExternalLink;
  metaverseLogo: string;
  metaverse: string;
  tag: string;
  title: string;
}

export interface NavigationInterface {
  imageUrl: string;
  url: PageLocation | ExternalLink;
  floatImageUrl: string;
  title: string
  description: string;
  newTab?: boolean;
}

export interface ProjectInterface{
  tag: string;
  title: string;
  fontTitle: number,
  summaryContent: string;
  approachContent:string;
  project: string;
  client: string;
  year: string;
  projectType: string;
  info: string[]
  urlProject: string;
  projectWebsite?: string,
  imgUrl: string[];
  result:string;
}