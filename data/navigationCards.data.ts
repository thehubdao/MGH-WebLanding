import { PageLocation } from "../enums/common.enum";
import { NavigationInterface } from "../interfaces/data.interface";

export const NavigationCards: NavigationInterface[] = [
    {
        imageUrl: '/cards/1.png',
        url: PageLocation.MetaVerseExplorer,
        floatImageUrl: '/cards/float/1.png',
        title: 'METAVERSE EXPLORER',
        description:'Browse Virtual Worlds with <br/> unparalleled insights and <br/> simplicity',
        newTab:true
    },
    {
        imageUrl: '/cards/2.png',
        url: PageLocation.Tools,
        floatImageUrl: '/cards/float/2.png',
        title: 'The Hub Platform',
        description:'For a simple Metaverse journey'
    },
    {
        imageUrl: '/cards/3.png',
        url: PageLocation.AboutTheHub,
        floatImageUrl: '/cards/float/3.png',
        title: 'ABOUT THE HUB',
        description:'Learn about the core team and THE HUB ecosytem'
    },
    {
        imageUrl: '/cards/4.png',
        url: PageLocation.JoinUs,
        floatImageUrl: '/cards/float/4.png',
        title: 'JOIN US!',
        description:'Help us shape the future<br/>of the Internet'
    },


]