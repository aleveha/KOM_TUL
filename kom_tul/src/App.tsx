import * as React from 'react';
import {useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import LanguageContext from "./Context/LanguageContext";
import AppContentContext from "./Context/AppContentContext";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CSS/App.css';
import i18n from "./locale/translations/i18n";
import {useTranslation} from "react-i18next";

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
        name: 'Department',
        link: '/department'
    },
    {
        name: 'Employees',
        link: '/employees'
    },
    {
        name: 'Projects',
        link: '/projects'
    },
    {
        name: 'Education',
        link: '/education'
    },
    {
        name: 'Laboratories',
        link: '/laboratories'
    },
    {
        name: 'Cooperation',
        link: '/cooperation'
    }
];

const App = () => {
    const [appLanguage, setWebLanguage] = useState<string>('cz');
    const {t} = useTranslation();

    const ChangeLanguage = (value: string) => {
        setWebLanguage(value);
    }

    useEffect(() => {
        i18n.changeLanguage(appLanguage);
    }, [appLanguage]);

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
                    limit={3}
                />
            </AppContentContext.Provider>
        </LanguageContext.Provider>
    );
}

export default App;
