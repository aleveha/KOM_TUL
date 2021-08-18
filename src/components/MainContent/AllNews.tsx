import React, { useEffect, useState } from "react";
import NewsContainer from "../Common/NewsContainer";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import * as api from "../../apiConnection";
import { INews } from "../../apiConnection/types";

const AllNews = () => {
    const { t } = useTranslation();
    const [news, setNews] = useState<INews[]>();

    useEffect(() => {
        api.getAllNews()
            .then((data) => {
                setNews(data.length > 0 ? data.reverse() : []);
            })
            .catch(() => {
                toast.error("Chyba serveru");
            });
    }, []);

    return (
        <div className="allNews padding">
            <h1 className="mainLabel">{t("main.news.allNews.title")}</h1>
            <NewsContainer news={news ? news : []} isLoading={!news} />
        </div>
    );
};

export default AllNews;
