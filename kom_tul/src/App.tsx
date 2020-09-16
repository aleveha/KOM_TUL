import * as React from 'react';
import {useEffect, useState} from 'react';
import './CSS/App.css';
import Header from "./components/Header/Header";

function App() {
    const languages : Array<string> = ['CZ', 'EN'];
    const [appLanguage, setWebLanguage] = useState<string>(languages[0]);

    const ChangeLanguage = (value: string) => {
        setWebLanguage(value);
    }

    useEffect(() => {console.log('System language ' + appLanguage)}, [appLanguage])

    return (
    <div className="App">
      <Header
        appLang={appLanguage}
        changeLang={ChangeLanguage}
      />
    </div>
  );
}

export default App;
