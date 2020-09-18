import * as React from 'react';
import {useEffect, useState} from 'react';
import './CSS/App.css';
import Header from "./components/Header/Header";
import HistoryWay from "./components/MainContent/HistoryWay";

function App() {
    const languages: Array<string> = ['CZ', 'EN'];
    const [appLanguage, setWebLanguage] = useState<string>(languages[0]);
    const [pathWay, setPathWay] = useState<Array<string>>(['KOM', 'Katedra']);

    const ChangeLanguage = (value: string) => {
        setWebLanguage(value);
    }

    const ChangePathWay = (value: string) => {

    }

    useEffect(() => {
        console.log('System language ' + appLanguage)
    }, [appLanguage])

    return (
        <div className="App">
            <Header
                appLang={appLanguage}
                changeLang={ChangeLanguage}
                changePathWay={ChangePathWay}
            />
            <HistoryWay pathWay={pathWay}/>
        </div>
    );
}

export default App;
