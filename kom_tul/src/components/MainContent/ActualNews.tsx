import * as React from 'react';
import { useEffect, useState} from "react";

interface IProps {
    appLanguage: string;
};

interface INews {
    date: string;
    name: string;
}

const ActualNews = (props: IProps) => {
    //styles hooks
    const [numberOfNewsColumns, setNumberOfNewsColumns] = useState<object>({'--numberOfNewsColumns': 3});

    const [news, setNews] = useState<Array<INews> | null>(null);

    useEffect(() => {
        setNews([
            {
                date: '10-09-2020',
                name: 'Náhradní termín školení BOZP a PO pro studenty prvních ročníků'
            },
            {
                date: '11-09-2020',
                name: 'Cenu Zdeny Rábové získali Aneta Helešicová a Jan Vlk'
            },
            {
                date: '12-09-2020',
                name: 'VUT Rábové získali Aneta Helešicová a Jan Vlk Cenu Zdeny Rábové získali Aneta Helešicová a Jan Vlk deny Rábové získali Aneta Helešicová a Jan Vlk'
            }
        ]);
    }, []);

    useEffect(() => {
        let number = 3;
        if (news !== null) {
            news.length % 2 === 0 && (number = 2);
        }
        setNumberOfNewsColumns({'--numberOfNewsColumns': number});
    }, [news?.length]);

    return (
        <div className="actualNews padding">
            {news !== null &&
            <h1 className="newsHeader">{props.appLanguage === 'CZ' ? "Novinky" : "Actual news"}</h1>}
            <div className="newsBlocks" style={numberOfNewsColumns}>
                {news !== null ? news.map(elem =>
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
                ) : null}
            </div>
            {news !== null &&
            <div className="allNews">
                <div className="allNewsButton">
                    <a href="#">
                        <span>{props.appLanguage === 'CZ' ? "Všechny novinky" : "All news"}</span>
                    </a>
                </div>
            </div>}
        </div>
    );
};

export default ActualNews;