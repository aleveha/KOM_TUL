import * as React from "react";
import { memo, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import NewsContainer from "../../../Common/NewsContainer";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import * as api from "../../../../apiConnection";
import { INews } from "../../../../apiConnection/types";

const ActualNewsComponent = () => {
    const [news, setNews] = useState<INews[]>();
    const { t } = useTranslation();

    useEffect(() => {
        api.getTopNews()
            .then((data) => setNews(data.length > 0 ? data.reverse() : []))
            .catch(() => toast.error(t("toastify.error")));
    }, []);

    return !!news ? (
        <div className="actualNews padding">
            <h1>{t("main.news.actualNews.title")}</h1>
            <NewsContainer news={news} isLoading={!news} />
            {news.length > 0 ? (
                <div>
                    <Button
                        variant="contained"
                        style={{
                            margin: "1rem auto 0 auto",
                            color: "var(--blue)",
                        }}
                        component={Link}
                        to="/news"
                    >
                        {t("main.news.actualNews.allNewsButton")}
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

export const ActualNews = memo(ActualNewsComponent);
