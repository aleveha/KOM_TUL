import {Button, CircularProgress, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {
    Formik,
    FormikProps,
    Form,
} from 'formik';
import * as yup from 'yup';
import {INews} from "./News";
import moment from "moment";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";

const InputNewsSchema = yup.object().shape({
    name: yup.string().min(3, "Too short").max(250, "Too long").required("Required"),
    content: yup.string().min(3, "Too short").max(3000, "Too long").required("Required")
});

const InputNewsForm = (props: { getAllNews: () => void }) => {
    const {t} = useTranslation();
    const [news, setNews] = useState<INews>({date: "", name: "", content: ""});

    const addNews = (values: INews) => {
        return new Promise(((resolve) => {
            fetch('http://www.kom.tul.cz:3000/addNews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
                .then(response => response.json())
                .then(data => resolve(data));
        }))
    }

    return (
        <div className="inputContainer">
            <Formik
                initialValues={news}
                validationSchema={InputNewsSchema}
                onSubmit={(values: INews, actions) => {
                    addNews({...values, date: moment().format('YYYY.MM.DD')})
                        .then(res => {
                            if (typeof res === "boolean") {
                                toast.success(t("main.news.addNews.toast.success"));
                            } else {
                                toast.error(t("main.news.addNews.toast.error"));
                            }
                            setNews({date: "", name: "", content: ""});
                            actions.resetForm();
                            props.getAllNews();
                            actions.setSubmitting(false);
                        });
                }}
            >
                {(props: FormikProps<INews>) => {
                    const {
                        values,
                        touched,
                        errors,
                        handleBlur,
                        handleChange,
                        isSubmitting
                    } = props;
                    return (
                        <Form className="form">
                            <p className="titleSecond">{t("main.news.addNews.newsName")}</p>
                            <TextField
                                type="text"
                                name="name"
                                fullWidth={true}
                                variant="outlined"
                                size="small"
                                multiline={true}
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={errors.name && touched.name && errors.name}
                                error={!!(errors.name && touched.name)}
                            />

                            <p className="titleSecond">{t("main.news.addNews.newsContent")}</p>
                            <TextField
                                type="text"
                                name="content"
                                fullWidth={true}
                                variant="outlined"
                                size="small"
                                multiline={true}
                                value={values.content}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={errors.content && touched.content && errors.content}
                                error={!!(errors.content && touched.content)}
                            />

                            {isSubmitting ?
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    margin: "2rem 0"
                                }}>
                                    <CircularProgress size={50}/>
                                </div> :
                                <div className="buttons">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        style={{margin: "0.5rem", color: "var(--blue)"}}
                                        color="default"
                                    >{t("main.news.addNews.upload")}</Button>
                                </div>}
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default InputNewsForm;