import * as React from 'react';
import '../../CSS/Header.css';

interface IProps {
    changePathWay: (value: string) => void
}

const HeaderButtons = (props: IProps) => {
    const headerTabs : Array<string> = ['Katedra', 'Pracovníci', 'Projekty', 'Výuka', 'Laboratoře', 'Spolupráce'];
    return(
        <div className="headerTabs-content">
            {headerTabs.map((elem) =>
                <div className="headerTab" key={elem}>
                    <a className="tabName" href="#" onClick={() => props.changePathWay(elem)}>{elem}</a>
                </div>
            )}
        </div>
    );
}

export default HeaderButtons;