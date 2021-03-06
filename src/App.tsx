import * as React from "react";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { MainContent } from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import LanguageContext, { LanguageType } from "./context/LanguageContext";
import AppContentContext from "./context/AppContentContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CSS/App.css";
import i18n from "./locale/translations/i18n";
import { BrowserRouter as Router } from "react-router-dom";

interface IAppContent {
    name: string;
    link: string;
    children?: Array<IAppContent>;
}

const appContent: Array<IAppContent> = [
    {
        name: "KOM",
        link: "/home",
    },
    {
        name: "Department",
        link: "/department",
    },
    {
        name: "Employees",
        link: "/employees",
    },
    {
        name: "Projects",
        link: "/projects",
    },
    {
        name: "Education",
        link: "/education",
    },
    {
        name: "Laboratories",
        link: "/laboratories",
    },
    {
        name: "Cooperation",
        link: "/cooperation",
    },
];

const App = () => {
    const [appLanguage, setLanguage] = useState<LanguageType>("cz");

    const changeLanguage = (value: LanguageType) => {
        setLanguage(value);
    };

    useEffect(() => {
        i18n.changeLanguage(appLanguage);
    }, [appLanguage]);

    return (
        <Router>
            <LanguageContext.Provider
                value={{ value: appLanguage, changeValue: changeLanguage }}
            >
                <AppContentContext.Provider value={{ value: appContent }}>
                    <div className="App">
                        <div className="WebContent">
                            <Header />
                            <MainContent />
                        </div>
                        <Footer />
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
        </Router>
    );
};

export default App;
