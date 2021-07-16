import React, { useEffect, useState } from "react";
import NewsContainer, { INews } from "../Common/NewsContainer";
import moment from "moment";
import AddNews from "../Common/AddNews";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import * as api from "../../apiConnection";

const AllNews = () => {
    const { t } = useTranslation();
    const [news, setNews] = useState<INews[]>();
    const [isLogged, setIsLogged] = useState<boolean>(false);

    useEffect(() => {
        getAllNews();
    }, []);

    const getAllNews = () => {
        api.getAllNews()
            .then((data) => {
                setNews(
                    data.length > 0
                        ? data.map((row: INews) => {
                              return {
                                  id: row.id,
                                  date: moment(row.date).format("DD.MM.YYYY"),
                                  name: row.name,
                                  content: row.content,
                              };
                          })
                        : []
                );
            })
            .catch(() => {
                toast.error("Chyba serveru");
            });
    };

    return (
        <div className="allNews padding">
            <h1 className="mainLabel">{t("main.news.allNews.title")}</h1>
            <NewsContainer
                news={news ? news : []}
                getAllNews={getAllNews}
                isLoading={!news}
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
