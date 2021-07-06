import React, {useEffect, useState} from 'react';
import News, {INews} from "../Common/News";
import moment from "moment";
import AddNews from "../Common/AddNews";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";

const AllNews = () => {
    const {t} = useTranslation();
    const [news, setNews] = useState<Array<INews>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isLogged, setIsLogged] = useState<boolean>(false);

    useEffect(() => {
        getAllNews();
    }, []);

    const getAllNews = () => {
        setIsLoading(true);
        fetch('https://www.kom.tul.cz/api/allNews')
            .then(response => {
                return response.json();
            })
            .then(data => {
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
            })
            .catch(() => {
                toast.error("Chyba serveru");
                setIsLoading(false);
            })
    }

    return (
        <div className="allNews padding">
            <h1 className="mainLabel">{t("main.news.allNews.title")}</h1>
            <News
                news={news}
                getAllNews={getAllNews}
                isLoading={isLoading}
                isLogged={isLogged}
            />
            <AddNews
                getAllNews={getAllNews}
                isLogged={isLogged}
                setIsLogged={setIsLogged}
            />
        </div>
    );
};

export default AllNews;