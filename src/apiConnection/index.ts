import axios from "axios";
import { DownloadFile } from "../downloads/DataBase";
import { INews } from "./types";

const API_URL = process.env.REACT_APP_API_URL;
if (API_URL === undefined) {
    throw new Error("API_URL is not defined.");
}

export const getAllNews = async (): Promise<INews[]> => {
    return (await axios.get(API_URL + "/allNews")).data;
};

export const getTopNews = async (): Promise<INews[]> => {
    return (await axios.get(API_URL + "/topNews")).data;
};

export const fileDownloadLink = (file: DownloadFile): string => {
    return `https://www.kom.tul.cz/api/files/${file.shortName}.${file.format}`;
};
