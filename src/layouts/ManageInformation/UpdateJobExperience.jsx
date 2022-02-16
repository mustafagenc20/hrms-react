import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { Accordion, Button, Checkbox, Container, Form, Grid, Label, Message, Table } from 'semantic-ui-react'
import JobExperienceService from '../../services/JobExperienceService'
import { toast } from 'react-toastify'
import { Formik } from 'formik'

export default function UpdateJobExperience({ unemployedId, activeSubModal, handleSubModalClick, updateCv }) {

    const [isUpdate, setIsUpdate] = useState(false)
    const [jobExperiences, setJobExperiences] = useState([])
    const [experienceId, setExperienceId] = useState([])

    let jobExperienceService = new JobExperienceService()

    useEffect(() => {
        jobExperienceService.getByUnemployedIdOrderByLeaveDate(unemployedId).then((result) => {
            setJobExperiences(result.data.data)
        })
    }, [unemployedId])

    const initialValues = {
        workplaceName: "",
        positionName: "",
        startDate: "",
        leaveDate: ""
    }

    const schema = yup.object({
        workplaceName: yup.string().required("This field is required").min(20, "Min 20 character"),
        positionName: yup.string().required("This field is required").min(5, "Min 5 character"),
        startDate: yup.date().required("This field is required"),
        leaveDate: yup.date()
    })

    const onSubmit = (values) => {
        values.unemployedId = unemployedId
        jobExperienceService.addJobExperience(values).then((result) => {
            toast.success(result.data.message)
            jobExperienceService.getByUnemployedIdOrderByLeaveDate(unemployedId).then((result) => {
                setJobExperiences(result.data.data)
            })
            updateCv()
        }).catch((result) => {
            toast(result.response.data.message)
        })
    }

    const updateSubmit = (values) => {
        values.unemployedId = unemployedId
        jobExperienceService.updateJobExperience(experienceId, values).then((result) => {
            toast.success(result.data.message)
            jobExperienceService.getByUnemployedIdOrderByLeaveDate(unemployedId).then((result) => {
                setJobExperiences(result.data.data)
            })
            updateCv()
            setIsUpdate(false)
        }).catch((result) => {
            toast(result.response.data.message)
        })
    }

    function deleteJobExperience(experienceId) {
        jobExperienceService.deleteJobExperience(experienceId).then((result) => {
            toast.success(result.data.message)
            jobExperienceService.getByUnemployedIdOrderByLeaveDate(unemployedId).then((result) => {
                setJobExperiences(result.data.data)
            })
            updateCv()
        }).catch((result) => {
            toast(result.response.data.message)
        })
    }

    return (
        <Accordion>
            <Accordion.Title
                style={{ fontSize: "15px", letterSpacing: "2px" }}
                icon={false}
                content="Add Job Experience"
                name="addJobExperience"
                active={activeSubModal === "addJobExperience"}
                onClick={handleSubModalClick} />
            <Accordion.Content
                active={activeSubModal === "addJobExperience"}
                style={{ paddingLeft: "4em", paddingRight: "4em" }}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={onSubmit}>
                    {({ values, errors, touched, handleSubmit, handleChange }) => (
                        <Form onSubmit={handleSubmit}>
                            <Table className="unemployedTable">
                                <Table.Row textAlign="center">
                                    <Table.HeaderCell content="Company Name" />
                                    <Table.HeaderCell content="Position" />
                                </Table.Row>
                                <Table.Body>
                                    <Table.Row verticalAlign="middle" textAlign="center">
                                        <Table.Cell>
                                            <Form.Input
                                                style={{ padding: "2px" }}
                                                name="workplaceName"
                                                placeholder="Company Name"
                                                onChange={handleChange}
                                                value={values.workplaceName} />
                                            {touched.workplaceName && errors.workplaceName && (
                                                <Message className="errorMessage" negative size="tiny">
                                                    <Message.Content
                                                        style={{ paddingBottom: "5px" }}
                                                        content={errors.workplaceName} />
                                                </Message>)}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Form.Input
                                                style={{ padding: "2px" }}
                                                name="positionName"
                                                placeholder="Position"
                                                onChange={handleChange}
                                                value={values.positionName} />
                                            {touched.positionName && errors.positionName && (
                                                <Message className="errorMessage" negative size="tiny">
                                                    <Message.Content style={{ paddingBottom: "5px" }} content={errors.positionName} />
                                                </Message>)}
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row textAlign="center">
                                        <Table.HeaderCell content="Start Date" />
                                        <Table.HeaderCell content="Leave Date" />
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Form.Input
                                                style={{ marginTop: "14px" }}
                                                type="date" name="startDate"
                                                value={values.startDate}
                                                onChange={handleChange} />
                                            {touched.startDate && errors.startDate && (
                                                <Message className="errorMessage" negative size="tiny">
                                                    <Message.Content style={{ paddingBottom: "5px" }} content={errors.startDate} />
                                                </Message>)}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Form.Input
                                                type="date" name="leaveDate"
                                                value={values.leaveDate}
                                                onChange={handleChange} />
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            <Button
                                style={{ letterSpacing: "2px" }}
                                circular size="large"
                                type="submit"
                                color="google plus"
                                content="Add Job Experience" />
                        </Form>
                    )}
                </Formik>
            </Accordion.Content>

            <Accordion.Title
                style={{ fontSize: "15px", letterSpacing: "2px" }}
                icon={false}
                content="Update Job Experience"
                name="updateJobExperience"
                active={activeSubModal === "updateJobExperience"}
                onClick={handleSubModalClick} />
            <Accordion.Content
                active={activeSubModal === "updateJobExperience"}
                style={{ paddingRight: "3em", paddingLeft: "3em" }}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={updateSubmit}>
                    {({ values, errors, touched, handleSubmit, handleChange }) => (
                        <Form onSubmit={handleSubmit}>
                            <Grid stackable padded>
                                <Grid.Row textAlign="center" verticalAlign="middle">
                                    <Table className="unemployedTable" verticalAlign="middle" >
                                        {isUpdate ?
                                            <Table.Row textAlign="center">
                                                <Table.HeaderCell content="Company Name" />
                                                <Table.HeaderCell content="Position" />
                                            </Table.Row> :
                                            <Table.Row textAlign="center">
                                                <Table.HeaderCell content="Update" />
                                                <Table.HeaderCell content="Company Name" />
                                                <Table.HeaderCell content="Position" />
                                                <Table.HeaderCell content="Start Date" />
                                                <Table.HeaderCell content="Leave Date" />
                                                <Table.HeaderCell content="Delete" />
                                            </Table.Row>}
                                        <Table.Body>
                                            {isUpdate ?
                                                <React.Fragment>
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            <Form.Input
                                                                style={{ padding: "2px" }}
                                                                name="workplaceName"
                                                                placeholder="Company Name"
                                                                onChange={handleChange}
                                                                value={values.workplaceName} />
                                                            {touched.workplaceName && errors.workplaceName && (
                                                                <Message className="errorMessage" negative size="tiny">
                                                                    <Message.Content
                                                                        style={{ paddingBottom: "5px" }}
                                                                        content={errors.workplaceName} />
                                                                </Message>)}
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            <Form.Input
                                                                style={{ padding: "2px" }}
                                                                name="positionName"
                                                                placeholder="Position"
                                                                onChange={handleChange}
                                                                value={values.positionName} />
                                                            {touched.positionName && errors.positionName && (
                                                                <Message className="errorMessage" negative size="tiny">
                                                                    <Message.Content style={{ paddingBottom: "5px" }} content={errors.positionName} />
                                                                </Message>)}
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row textAlign="center">
                                                        <Table.HeaderCell content="Start Date" />
                                                        <Table.HeaderCell content="Leave Date" />
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            <Form.Input
                                                                style={{ marginTop: "14px" }}
                                                                type="date" name="startDate"
                                                                value={values.startDate}
                                                                onChange={handleChange} />
                                                            {touched.startDate && errors.startDate && (
                                                                <Message className="errorMessage" negative size="tiny">
                                                                    <Message.Content style={{ paddingBottom: "5px" }} content={errors.startDate} />
                                                                </Message>)}
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            <Form.Input
                                                                type="date" name="leaveDate"
                                                                value={values.leaveDate}
                                                                onChange={handleChange} />
                                                        </Table.Cell>
                                                    </Table.Row>
                                                </React.Fragment> :
                                                jobExperiences.map(experience => (
                                                    <Table.Row textAlign="center">
                                                        <Table.Cell width="2">
                                                            <Button
                                                                style={{ letterSpacing: "2px" }}
                                                                fluid compact circular
                                                                content="Update"
                                                                color="green" type="button"
                                                                onClick={() => {
                                                                    setExperienceId(experience.experienceId)
                                                                    setIsUpdate(true)
                                                                }} />
                                                        </Table.Cell>
                                                        <Table.Cell content={experience.workplaceName} />
                                                        <Table.Cell content={experience.positionName} />
                                                        <Table.Cell content={experience.startDate} />
                                                        <Table.Cell content={
                                                            experience.leaveDate === null ?
                                                                "In progress" : experience.leaveDate
                                                        } />
                                                        <Table.Cell>
                                                            <Button
                                                                type="button"
                                                                compact circular
                                                                negative icon="x"
                                                                onClick={() =>
                                                                    deleteJobExperience(experience.experienceId)} />
                                                        </Table.Cell>
                                                    </Table.Row>
                                                ))}
                                        </Table.Body>
                                    </Table>
                                </Grid.Row>
                                {isUpdate ?
                                    <Grid.Row textAlign="center" verticalAlign="middle">
                                        <Container>
                                            <Button
                                                style={{ letterSpacing: "2px" }}
                                                circular size="large"
                                                type="submit"
                                                color="google plus"
                                                content="Update" />
                                            <Button
                                                style={{ letterSpacing: "2px" }}
                                                circular size="large"
                                                type="button" color="vk"
                                                content="Cancel"
                                                onClick={() => setIsUpdate(false)} />
                                        </Container>
                                    </Grid.Row> : null}
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Accordion.Content>
        </Accordion>
    )
}
