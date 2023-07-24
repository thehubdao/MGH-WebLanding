import { Project } from "./project.enum";

export const enum CardForm {
  Horizontal = 'horizontal',
  Vertical = 'vertical'
}

export const enum PageLocation{
  MetaVerseExplorer = 'https://app.thehubdao.xyz/metaverseexplorer',
  Home ='/',
  Tools = '/tools',
  AboutTheHub = '/about-the-hub',
  JoinUs = '/join-us',
  Projects = '/projects',
  Soon = '/soon',
  Project1 = '/projects/' + Project.FitchinHouse,
  Project2 = '/projects/' + Project.Cryptoticker,
  Project3 = '/projects/' + Project.EspacioCreador,
  Project4 = '/projects/' + Project.Ekolance,
  Project5 = '/projects/' + Project.CompetitiveGameHub,
  Project6 = '/projects/' + Project.MentholProtocol,
  Project7 = '/projects/' + Project.Ayo,
  Project8 = '/projects/' + Project.MetagameHub, 
  Project9 = '/projects/' + Project.TheHub
}