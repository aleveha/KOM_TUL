import * as React from 'react';
import {useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import LanguageContext from "./Context/LanguageContext";
import PathContext from "./Context/PathContext";
import AppContentContext from "./Context/AppContentContext";
import {useLocation} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CSS/App.css';
import mobileCheck from "./components/Common/mobileCheck";
import HistoryWay from "./components/MainContent/HistoryWay";

interface IAppContent {
    name: string,
    link: string,
    children?: Array<IAppContent>
}

interface IPath {
    name: string,
    path: string
}

const appContent: Array<IAppContent> = [
    {
        name: 'KOM',
        link: '/home'
    },
    {
        name: 'Katedra',
        link: '/department'
    },
    {
        name: 'Pracovníci',
        link: '/employees'
    },
    {
        name: 'Projekty',
        link: '/projects'
    },
    {
        name: 'Výuka',
        link: '/education'
    },
    {
        name: 'Laboratoře',
        link: '/laboratories'
    },
    {
        name: 'Spolupráce',
        link: '/cooperation'
    }
];

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})

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
                        element.children && (tempObj = [...element.children]);
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
                        <div className="WebContent">
                            <Header/>
                            {!mobileCheck() && <HistoryWay/>}
                            <MainContent />
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
