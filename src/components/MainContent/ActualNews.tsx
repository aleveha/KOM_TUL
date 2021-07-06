import * as React from 'react';
import {useEffect, useState} from "react";
import moment from "moment";
import {Button} from "@material-ui/core";
import {Link} from 'react-router-dom';
import News from "../Common/News";
import {INews} from "../Common/News";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";

const ActualNews = () => {
    const [news, setNews] = useState<Array<INews>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { t } = useTranslation();

    useEffect(() => {
        getNews();
    }, []);

    const getNews = () => {
        fetch('https://www.kom.tul.cz/api/topNews')
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (!data.name) {
                    setNews(
                        data.map((row: INews) => {
                            return {
                                id: row.id,
                                date: moment(row.date).format('DD.MM.YYYY'),
                                name: row.name,
                                content: row.content
                            }
                        })
                    );
                    setIsLoading(false);
                }
            })
            .catch(() => {
                toast.error("Chyba serveru")
                setIsLoading(false);
            })
    }

    return (
        news !== [] ? (
            <div className="actualNews padding">
                <h1>{t('main.news.actualNews.title')}</h1>
                <News news={news} isLoading={isLoading} />
                {news.length > 0 ?
                    <div>
                        <Button
                            variant="contained"
                            style={{margin: "1rem auto 0 auto", color: "var(--blue)"}}
                            component={Link}
                            to="/news"
                        >Všechny novinky</Button>
                    </div> :
                    !isLoading &&
                    <div>
                        <h3 className="bluePar" style={{textAlign: "center"}}>
                            {t('main.news.noNews')}
                        </h3>
                    </div>
                }
            </div>
        ) : null
    );
};

export default ActualNews;