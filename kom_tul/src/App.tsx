import * as React from 'react';
import {useState} from 'react';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import LanguageContext from "./Context/LanguageContext";
import AppContentContext from "./Context/AppContentContext";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CSS/App.css';

interface IAppContent {
    name: string,
    link: string,
    children?: Array<IAppContent>
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

const App = () => {
    const [appLanguage, setWebLanguage] = useState<string>('CZ');

    const ChangeLanguage = (value: string) => {
        setWebLanguage(value);
    }

    return (
        <LanguageContext.Provider value={{value: appLanguage, changeValue: ChangeLanguage}}>
            <AppContentContext.Provider value={{value: appContent}}>
                <div className="App">
                    <div className="WebContent">
                        <Header/>
                        <MainContent/>
                    </div>
                    <Footer/>
                </div>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </AppContentContext.Provider>
        </LanguageContext.Provider>
    );
}

export default App;
