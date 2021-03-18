import React, {useEffect, useState} from 'react';
import News, {INews} from "../Common/News";
import moment from "moment";
import AddNews from "../Common/AddNews";

const AllNews = () => {
    const [news, setNews] = useState<Array<INews>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isLogged, setIsLogged] = useState<boolean>(false);

    useEffect(() => {
        getAllNews();
    }, []);

    const getAllNews = () => {
        setIsLoading(true);
        fetch('http://www.kom.tul.cz:3000/allNews')
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
        <div className="allNews padding">
            <h1 className="mainLabel">Novinky</h1>
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