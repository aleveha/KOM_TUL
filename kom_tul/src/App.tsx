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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface IAppContent {
    name: string,
    link: string,
    children: Array<IAppContent>
}

interface IPath {
    name: string,
    path: string
}

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

const App = () => {
    let location = useLocation();

    useEffect(() => {
        setPathWay(MakePathObject());
    }, [location]);

    const MakePathObject = () => {
        let tempObj: Array<IAppContent> = [...appContent];
        let tempArr: Array<IPath> = [];
        let erase = true;
        const pathArr = location.pathname.split("/");
        pathArr.splice(0, 1);
        pathArr.forEach(linkPart => {
            if (linkPart !== "") {
                for (let element of tempObj) {
                    if (element.link === "/" + linkPart) {
                        if (erase) {
                            tempArr.length = 0;
                            erase = false;
                            !location.pathname.includes("home") && tempArr.push({name: "KOM", path: "/home"});
                        }
                        tempArr.push({name: element.name, path: element.link});
                        tempObj = [...element.children];
                        break;
                    }
                }
            } else if (linkPart === "" && pathArr.length === 1) {
                tempArr.push({name: "KOM", path: "/home"});
            }
        });
        return tempArr;
    };

    const [appLanguage, setWebLanguage] = useState<string>('CZ');
    const [pathWay, setPathWay] = useState<Array<IPath>>(MakePathObject);

    const ChangeLanguage = (value: string) => {
        setWebLanguage(value);
    }

    const ChangePathWay = () => {
        setPathWay(MakePathObject);
    }

    useEffect(() => {
        console.log('System language ' + appLanguage)
    }, [appLanguage]);

    return (
        <LanguageContext.Provider value={{value: appLanguage, changeValue: ChangeLanguage}}>
            <PathContext.Provider value={{value: pathWay, changeValue: ChangePathWay}}>
                <AppContentContext.Provider value={{value: appContent}}>
                    <div className="App">
                        <Header/>
                        <div className="WebContent">
                            <HistoryWay/>
                            <MainContent/>
                        </div>
                        <Footer/>
                    </div>
                    <ToastContainer />
                </AppContentContext.Provider>
            </PathContext.Provider>
        </LanguageContext.Provider>
    );
}

export default App;
