import React, { useEffect } from 'react'
import { useState } from 'react'
import LanguageService from '../../services/LanguageService'
import { Accordion, Button, Dropdown, Form, Grid, Table } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { Formik } from 'formik';

export default function UpdateLanguage({ unemployedId, handleSubModalClick, activeSubModal, updateCv }) {

    const [isUpdate, setIsUpdate] = useState(false)
    const [languages, setLanguages] = useState([])
    const [languageId, setLanguageId] = useState([])
    const [languageName, setLanguageName] = useState([])
    const [languageLevel, setLanguageLevel] = useState([])

    let languageService = new LanguageService()

    const levels = [1, 2, 3, 4, 5]
    const levelOption = levels.map((level) => ({
        key: level,
        text: level,
        value: level
    }))

    const languagesList = ["English", "Dutch", "French", "German", "Turkish", "Spanish", "Portuguese", "Russian", "Korean", "Japanese"]

    const languageOption = languagesList.map((language) => ({
        key: language,
        text: language,
        value: language
    }))

    useEffect(() => {
        languageService.getByUnemployedId(unemployedId).then((result) => {
            setLanguages(result.data.data)
        })
    }, [unemployedId])

    const initialValues = {
        languageName: "",
        languageLevel: ""
    }

    const onSubmit = (values) => {
        values.unemployedId = unemployedId
        languageService.addLanguage(values).then((result) => {
            toast.success(result.data.message)
            languageService.getByUnemployedId(unemployedId).then((result) => setLanguages(result.data.data))
            updateCv()
        }).catch((result) => {
            toast(result.response.data.message)
        })
    }

    const langValues = {
        languageName: languageName,
        languageLevel: languageLevel
    }

    function updateLanguage() {
        languageService.updateLanguage(langValues, languageId).then((result) => {
            toast.success(result.data.message)
            languageService.getByUnemployedId(unemployedId).then((result) => setLanguages(result.data.data))
            updateCv()
            setIsUpdate(false)
        }).catch((result) => {
            toast(result.response.data.message)
        })
    }

    function deleteLanguage() {
        languageService.deleteLanguage(languageId).then((result) => {
            toast.success(result.data.message)
            languageService.getByUnemployedId(unemployedId).then((result) => setLanguages(result.data.data))
            updateCv()
        }).catch((result) => {
            toast(result.response.data.message)
        })
    }

    return (
        <Accordion>
            <Accordion.Title
                style={{ fontSize: "15px", letterSpacing: "1px" }}
                icon={false}
                content="Add Language"
                name="addLanguage"
                active={activeSubModal === "addLanguage"}
                onClick={handleSubModalClick} />
            <Accordion.Content
                active={activeSubModal === "addLanguage"}>
                <Formik initialValues={initialValues} onSubmit={onSubmit} >
                    {({ values, handleSubmit, setFieldValue }) => (
                        <Form onSubmit={handleSubmit}>
                            <Grid stackable padded centered>
                                <Grid.Row textAlign="center">
                                    <Grid.Column width="10">
                                        <Dropdown fluid
                                            placeholder="Language Name"
                                            clearable selection
                                            onChange={(e, data) => setFieldValue("languageName", data.value)}
                                            value={values.languageName}
                                            options={languageOption} />
                                    </Grid.Column>
                                    <Grid.Column width="6">
                                        <Dropdown fluid
                                            placeholder="Language Level"
                                            clearable selection
                                            onChange={(e, data) => setFieldValue("languageLevel", data.value)}
                                            value={values.languageLevel}
                                            options={levelOption} />
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column textAlign="center" width="7">
                                        <Button
                                            circular fluid
                                            style={{ letterSpacing: "2px" }}
                                            type="submit"
                                            color="google plus"
                                            content="Add" />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Accordion.Content>
            <Accordion.Title
                style={{ fontSize: "15px", letterSpacing: "1px" }}
                icon={false}
                content="Update Language"
                name="updateLanguage"
                active={activeSubModal === "updateLanguage"}
                onClick={handleSubModalClick} />
            <Accordion.Content
                style={{ paddingLeft: "4em", paddingRight: "4em" }}
                active={activeSubModal === "updateLanguage"}>
                <Grid stackable padded >
                    <Grid.Row textAlign="center" verticalAlign="middle">
                        <Table className="unemployedTable">
                            {isUpdate ?
                                <Table.Row textAlign="center">
                                    <Table.HeaderCell content="Language Name" />
                                    <Table.HeaderCell content="Language Level" />
                                    <Table.HeaderCell />
                                </Table.Row> :
                                <Table.Row textAlign="center">
                                    <Table.HeaderCell content="Update Language" />
                                    <Table.HeaderCell content="Language Name" />
                                    <Table.HeaderCell content="Language Level" />
                                    <Table.HeaderCell content="Delete" />
                                </Table.Row>}
                            <Table.Body>
                                {isUpdate ?
                                    <Table.Row textAlign="center">
                                        <Table.Cell width="7">
                                            <Dropdown fluid
                                                placeholder="Language Name"
                                                clearable selection
                                                onChange={(e, data) => setLanguageName(data.value)}
                                                options={languageOption} />
                                        </Table.Cell>
                                        <Table.Cell width="4">
                                            <Dropdown fluid
                                                placeholder="Language Level"
                                                clearable selection
                                                onChange={(e, data) => setLanguageLevel(data.value)}
                                                options={levelOption} />
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Button
                                                style={{ letterSpacing: "2px" }}
                                                compact circular
                                                content="Update"
                                                color="green" type="button"
                                                onClick={() => updateLanguage()} />
                                            <Button
                                                style={{ letterSpacing: "2px" }}
                                                compact circular
                                                content="Cancel"
                                                color="youtube" type="button"
                                                onClick={() => setIsUpdate(false)} />
                                        </Table.Cell>
                                    </Table.Row> :
                                    languages.map(language => (
                                        <Table.Row textAlign="center" key={language.languageId}>
                                            <Table.Cell width="2">
                                                <Button
                                                    style={{ letterSpacing: "2px" }}
                                                    fluid compact circular
                                                    content="Update"
                                                    color="green" type="button"
                                                    onClick={() => {
                                                        setLanguageId(language.languageId)
                                                        setIsUpdate(true)
                                                    }} />
                                            </Table.Cell>
                                            <Table.Cell width="6"
                                                content={language.languageName} />
                                            <Table.Cell>
                                                {language.languageLevel}
                                            </Table.Cell>
                                            <Table.Cell >
                                                <Button
                                                    circular compact negative
                                                    icon="x" type="button"
                                                    onClick={() => deleteLanguage()} />
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                            </Table.Body>
                        </Table>
                    </Grid.Row>
                </Grid>
            </Accordion.Content>
        </Accordion>
    )
}