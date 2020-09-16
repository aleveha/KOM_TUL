import * as React from 'react';
import '../../CSS/Header.css';


const HeaderButtons = () => {
    const headerTabs : Array<string> = ['Katedra', 'Pracovníci', 'Projekty', 'Výuka', 'Laboratoře', 'Spolupráce'];
    return(
        <div className="headerTabs-content">
            {headerTabs.map((elem) =>
                <div className="headerTab" key={elem}>
                    <a className="tabName" href="#">{elem}</a>
                </div>
            )}
        </div>
    );
}

export default HeaderButtons;