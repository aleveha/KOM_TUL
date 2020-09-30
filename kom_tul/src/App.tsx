import * as React from 'react';
import {useEffect, useState} from 'react';
import './CSS/App.css';
import Header from "./components/Header/Header";
import HistoryWay from "./components/MainContent/HistoryWay";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import LanguageContext from "./Context/LanguageContext";
import PathContext from "./Context/PathContext";
import AppContentContext from "./Context/AppContentContext";
import {useLocation} from 'react-router-dom';


interface IAppContent {
    name: string,
    link: string,
    children: Array<IAppContent>
}

interface IPath {
    name: string,
    path: string
}

const App = () => {
    // const headerTabs: Array<string> = ['Katedra', 'Pracovníci', 'Projekty', 'Výuka', 'Laboratoře', 'Spolupráce'];
    const appContent: Array<IAppContent> = [
        {
            name: 'KOM',
            link: '/home',
            children: []
        },
        {
            name: 'Katedra',
            link: '/department',
            children: [
                {
                    name: 'Novinky',
                    link: '/news',
                    children: []
                }
            ]
        },
        {
            name: 'Pracovníci',
            link: '/employees',
            children: []
        },
        {
            name: 'Projekty',
            link: '/projects',
            children: []
        },
        {
            name: 'Výuka',
            link: '/education',
            children: []
        },
        {
            name: 'Laboratoře',
            link: '/laboratories',
            children: []
        },
        {
            name: 'Spolupráce',
            link: '/cooperation',
            children: []
        }
    ];

    const [appLanguage, setWebLanguage] = useState<string>('CZ');
    const [pathWay, setPathWay] = useState<Array<IPath>>([{name: 'KOM', path: '/home'}]);
    const ChangeLanguage = (value: string) => {
        setWebLanguage(value);
    }
    const ChangePathWay = () => {
        setPathWay(MakePathObject);
    }

    useEffect(() => {
        console.log('System language ' + appLanguage)
    }, [appLanguage]);

    const MakePathObject = () => {
        const location = useLocation();
        let tempObj: Array<IAppContent> = [...appContent];
        let tempArr: Array<IPath> = [...pathWay];
        let erase = true;
        location.pathname.split("/").forEach(linkPart => {
            if (linkPart !== "") {
                for (let element of tempObj) {
                    if (element.link === "/" + linkPart) {
                        if (erase) {
                            tempArr.splice(1, tempArr.length);
                            erase = false;
                        }
                        linkPart !== "home" && tempArr.push({name: element.name, path: element.link});
                        tempObj = [...element.children];
                        break;
                    }
                }
            }
        });
        return tempArr;
    };

    return (
        <LanguageContext.Provider value={{value: appLanguage, changeValue: ChangeLanguage}}>
            <PathContext.Provider value={{value: pathWay, changeValue: ChangePathWay}}>
                <AppContentContext.Provider value={{value: appContent}}>
                    <div className="App">
                        <Header/>
                        <div className="WebContent">
                            <HistoryWay/>
                            <MainContent/>
                            <Footer/>
                        </div>
                    </div>
                </AppContentContext.Provider>
            </PathContext.Provider>
        </LanguageContext.Provider>
    );
}

export default App;
