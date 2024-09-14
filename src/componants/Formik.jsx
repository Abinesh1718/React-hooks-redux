import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from 'yup';

const FormikPage = () => {

    const validationSchema = Yup.object({
        firstname: Yup.string().required("First name is required"),
        lastname: Yup.string().required("Last name is required"),
        email: Yup.string().email('Invalid Email').required("Email is required")
    });

    return (
        <div>
            <h1>Form Signup</h1>
            <div >
                <form>


                    <Formik
                        initialValues={{ firstname: "", lastname: "", email: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => console.log(values)}
                    >
                        {({ errors, touched }) => (
                            <Form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', width: '100%' }}>
                                <label style={{ marginBottom: '5px' }}>First Name</label>
                                <Field name='firstname' type='text' style={{ marginBottom: '10px', padding: '5px' }} />
                                {errors.firstname && touched.firstname ? (
                                    <div style={{ color: 'red', marginBottom: '10px' }}>
                                        {errors.firstname}
                                    </div>
                                ) : null}

                                <label style={{ marginBottom: '5px' }}>Last Name</label>
                                <Field name='lastname' type='text' style={{ marginBottom: '10px', padding: '5px' }} />
                                {errors.lastname && touched.lastname ? (
                                    <div style={{ color: 'red', marginBottom: '10px' }}>
                                        {errors.lastname}
                                    </div>
                                ) : null}

                                <label style={{ marginBottom: '5px' }}>Email</label>
                                <Field name='email' type='email' style={{ marginBottom: '10px', padding: '5px' }} />
                                {errors.email && touched.email ? (
                                    <div style={{ color: 'red', marginBottom: '10px' }}>
                                        {errors.email}
                                    </div>
                                ) : null}

                                <button ons type="submit" style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
                                    Submit Form
                                </button>
                            </Form>
                        )}
                    </Formik>
                </form>
            </div>
        </div>
    );
};

export default FormikPage;
