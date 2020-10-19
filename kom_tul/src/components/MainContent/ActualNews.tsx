import * as React from 'react';
import {useContext, useEffect, useState} from "react";
import LanguageContext from "../../Context/LanguageContext";

interface IProps {

};

interface INews {
    date: string;
    name: string;
}

const ActualNews = (props: IProps) => {
    //styles hooks
    const [numberOfNewsColumns, setNumberOfNewsColumns] = useState<object>({'--numberOfNewsColumns': 3});

    const [news, setNews] = useState<Array<INews> | null>(null);
    const language = useContext(LanguageContext);

    useEffect(() => {
        let number = 3;
        if (news !== null) {
            news.length % 2 === 0 && (number = 2);
        }
        setNumberOfNewsColumns({'--numberOfNewsColumns': number});
    }, [news]);

    return (
        news !== null ? (
            <div className="actualNews padding">
                <h1 className="newsHeader">{language.value === 'CZ' ? "Novinky" : "Actual news"}</h1>
                <div className="newsBlocks" style={numberOfNewsColumns}>
                    {news.map(elem =>
                        <div className="newsBlock" key={news.indexOf(elem)}>
                            <a className="newsBlockContentLink" href="#">
                                <div className="newsBlockContent">
                                    <div className="dateOfPublication">
                                        <p>{elem.date.replace(/-/g, '.')}</p>
                                    </div>
                                    <div className="newsName">
                                        <h3>{elem.name}</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )}
                </div>
                <div className="allNews">
                    <div className="allNewsButton">
                        <a href="#">
                            <span>{language.value === 'CZ' ? "Všechny novinky" : "All news"}</span>
                        </a>
                    </div>
                </div>
            </div>
        ) : null
    );
};

export default ActualNews;