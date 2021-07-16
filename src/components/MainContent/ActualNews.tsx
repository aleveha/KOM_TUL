import * as React from "react";
import { useEffect, useState } from "react";
import moment from "moment";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import NewsContainer, { INews } from "../Common/NewsContainer";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import * as api from "../../apiConnection/index";

const ActualNews = () => {
    const [news, setNews] = useState<INews[]>();
    const { t } = useTranslation();

    useEffect(() => {
        getTopNews();
    }, []);

    const getTopNews = () => {
        api.getTopNews()
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

    return !!news ? (
        <div className="actualNews padding">
            <h1>{t("main.news.actualNews.title")}</h1>
            <NewsContainer
                news={news}
                isLoading={!news}
                getAllNews={getTopNews}
            />
            {news.length > 0 ? (
                <div>
                    <Button
                        variant="contained"
                        style={{
                            margin: "1rem auto 0 auto",
                            color: "var(--blue)",
                        }}
                        component={Link}
                        to="/news">
                        Všechny novinky
                    </Button>
                </div>
            ) : (
                !news && (
                    <div>
                        <h3 className="bluePar" style={{ textAlign: "center" }}>
                            {t("main.news.noNews")}
                        </h3>
                    </div>
                )
            )}
        </div>
    ) : null;
};

export default ActualNews;
