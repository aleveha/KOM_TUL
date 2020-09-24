import * as React from 'react';
import {useEffect, useState} from 'react';
import './CSS/App.css';
import Header from "./components/Header/Header";
import HistoryWay from "./components/MainContent/HistoryWay";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
    const languages: Array<string> = ['CZ', 'EN'];
    const [appLanguage, setWebLanguage] = useState<string>(languages[0]);
    const [pathWay, setPathWay] = useState<Array<string>>(['KOM']);

    const headerTabs: Array<string> = ['Katedra', 'Pracovníci', 'Projekty', 'Výuka', 'Laboratoře', 'Spolupráce'];

    const ChangeLanguage = (value: string) => {
        setWebLanguage(value);
    }

    const ChangePathWay = (value: Array<string>) => {
        setPathWay(value);
    }

    useEffect(() => {
        console.log('System language ' + appLanguage)
    }, [appLanguage]);

    return (
        <div className="App">
            <Header
                appLang={appLanguage}
                changeLang={ChangeLanguage}
                changePathWay={ChangePathWay}
                pathWay={pathWay}
                tabs={headerTabs}
            />
            <div className="WebContent">
                <HistoryWay pathWay={pathWay}/>
                <MainContent
                    appLanguage={appLanguage}
                    pathWay={pathWay}
                    changePathWay={ChangePathWay}
                />
                <Footer tabs={headerTabs}/>
            </div>
        </div>
    );
}

export default App;
