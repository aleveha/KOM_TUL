import axios from "axios";
import { INews } from "../components/Common/NewsContainer";
import { IUser } from "../components/Common/LoginForm";
import { DownloadFile } from "../downloads/DataBase";

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

export const addNews = async (news: INews): Promise<INews> => {
    return (await axios.post(API_URL + "/addNews", news)).data;
};

export const deleteNews = async (news: INews): Promise<boolean> => {
    return (await axios.delete(API_URL + "/deleteNews", { data: news })).data;
};

export const checkUser = async (user: IUser): Promise<boolean> => {
    return (await axios.post(API_URL + "/checkUser", user)).data;
};

export const addUser = async (user: IUser): Promise<IUser> => {
    return (await axios.post(API_URL + "/addUser", user)).data;
};

export const fileDownloadLink = (file: DownloadFile): string => {
    return API_URL + `/files/${file.shortName}.${file.format}`;
};
