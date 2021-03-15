import React, {useEffect, useState} from 'react';
import News, {INews} from "../Common/News";
import moment from "moment";
import {VpnKey} from "@material-ui/icons";

const AllNews = () => {
    const [news, setNews] = useState<Array<INews>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getAllNews();
    }, []);

    const getAllNews = () => {
        fetch('http://localhost:3000/allNews')
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
    }

    return (
        <div className="padding">
            <h1 className="mainLabel">Novinky</h1>
            <News news={news} isLoading={isLoading}/>
            <div>
                <VpnKey />
            </div>
        </div>
    );
};

export default AllNews;