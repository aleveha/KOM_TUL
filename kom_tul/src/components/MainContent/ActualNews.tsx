import * as React from 'react';
import {useContext, useEffect, useState} from "react";
import LanguageContext from "../../Context/LanguageContext";

interface INews {
    date: string;
    name: string;
}

const ActualNews = () => {
    const language = useContext(LanguageContext);
    const [news, setNews] = useState<Array<INews> | null>(null);

    return (
        news !== null ? (
            <div className="actualNews padding">
                <h1 className="newsHeader">{language.value === 'CZ' ? "Novinky" : "Actual news"}</h1>
                <div className="newsBlocks">
                    {news.map(elem =>
                        <div className="newsBlock" key={news.indexOf(elem)}>
                            <div className="newsBlockContentLink">
                                <div className="newsBlockContent">
                                    <div className="dateOfPublication">
                                        <p>{elem.date.replace(/-/g, '.')}</p>
                                    </div>
                                    <div className="newsName">
                                        <h3>{elem.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="allNews">
                    <div className="allNewsButton">
                        <div>
                            <span>{language.value === 'CZ' ? "Všechny novinky" : "All news"}</span>
                        </div>
                    </div>
                </div>
            </div>
        ) : null
    );
};

export default ActualNews;