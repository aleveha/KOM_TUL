import { Form, Formik, FormikProps } from "formik";
import * as yup from "yup";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import React, { FC } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import * as api from "../../apiConnection";
import { IUser } from "./LoginForm";

const LoginSchema = yup.object().shape({
    login: yup
        .string()
        .min(3, "Too short")
        .max(200, "Too long")
        .required("Required"),
    password: yup
        .string()
        .min(3, "Too short")
        .max(200, "Too long")
        .required("Required"),
});

interface ILoginForm {
    setUser: (value: IUser) => void;
    setIsLogged: (value: boolean) => void;
    setAddNewUser: (value: boolean) => void;
}

const AddNewUser: FC<ILoginForm> = (props) => {
    const { setUser, setIsLogged, setAddNewUser } = props;
    const { t } = useTranslation();

    const addUser = async (value: IUser): Promise<IUser | null> => {
        return await api.addUser(value);
    };

    return (
        <div className="loginContainer">
            <Formik
                initialValues={{ login: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={(values: IUser, actions) => {
                    addUser(values).then((res) => {
                        if (res) {
                            setUser(values);
                            setIsLogged(false);
                            setAddNewUser(false);
                            toast.success("Uzivatel pridan");
                        } else {
                            toast.error("Neco se nepovedlo!");
                        }
                        actions.setSubmitting(false);
                    });
                }}>
                {(props: FormikProps<IUser>) => {
                    const {
                        values,
                        touched,
                        errors,
                        handleBlur,
                        handleChange,
                        isSubmitting,
                    } = props;
                    return (
                        <Form className="form">
                            <p className="titleSecond">
                                {t("main.news.addNews.login")}
                            </p>
                            <TextField
                                type="text"
                                name="login"
                                fullWidth={true}
                                variant="outlined"
                                size="small"
                                value={values.login}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={
                                    errors.login &&
                                    touched.login &&
                                    errors.login
                                }
                                error={!!(errors.login && touched.login)}
                            />

                            <p className="titleSecond">
                                {t("main.news.addNews.password")}
                            </p>
                            <TextField
                                type="text"
                                name="password"
                                fullWidth={true}
                                variant="outlined"
                                size="small"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={
                                    errors.password &&
                                    touched.password &&
                                    errors.password
                                }
                                error={!!(errors.password && touched.password)}
                            />

                            {isSubmitting ? (
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "2rem 0",
                                    }}>
                                    <CircularProgress size={50} />
                                </div>
                            ) : (
                                <div className="buttons">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        style={{
                                            margin: "0.5rem",
                                            color: "var(--blue)",
                                        }}
                                        color="default">
                                        {t("dialog.addNewUser")}
                                    </Button>
                                </div>
                            )}
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default AddNewUser;
