import React from 'react'
import { Container, Grid, Header, Icon } from 'semantic-ui-react'

export default function ServiceSection() {
    return (
        <div id="services" className="section serviceSection">
            <Container className="serviceContainer">
                <Grid stackable textAlign='center'>
                    <Grid.Row className="serviceMainGridRow">
                        <Grid.Column mobile='16' tablet='12' computer='11' largeScreen="13" >
                            <Header className="serviceHeader" dividing as='h2'>What is HRMS?</Header>
                            <Header.Content className='serviceMainContent'>A human resources management system (HRMS) or human resources information system (HRIS) or human capital management (HCM) is a form of human resources (HR) software that combines a number of systems and processes to ensure the easy management of human resources, business processes and data. Human resources software is used by businesses to combine a number of necessary HR functions, such as storing employee data, managing payroll, recruitment, benefits administration, time and attendance, employee performance management, and tracking competency and training records.
                            </Header.Content>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row style={{ marginTop: "15px" }}>
                        <Grid.Column>
                            <Grid verticalAlign="middle" columns="2" stackable divided container>
                                <Grid.Row className="serviceGridColumn" >
                                    <Grid.Column mobile="8" tablet="4" computer="2" largeScreen="3">
                                        <Icon className="serviceGridIcon" circular color="blue" inverted name="street view" />
                                    </Grid.Column>
                                    <Grid.Column mobile="8" tablet="12" computer="14" largeScreen="13">
                                        <Header.Content className='serviceSubContent'> You can post job advertisements for your company. Set your criteria and hire people with the qualifications you're looking for. </Header.Content>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row className="serviceGridColumn" >
                                    <Grid.Column mobile="8" tablet="4" computer="2" largeScreen="3">
                                        <Icon className="serviceGridIcon" circular color="blue" inverted name="building outline" />
                                    </Grid.Column>
                                    <Grid.Column mobile="8" tablet="12" computer="14" largeScreen="13">
                                        <Header.Content className='serviceSubContent'> You can browse job postings and details. You can create a CV and apply for any job you want. </Header.Content>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row className="serviceGridColumn" >
                                    <Grid.Column mobile="8" tablet="4" computer="2" largeScreen="3">
                                        <Icon className="serviceGridIcon" circular color="blue" inverted name="code branch" />
                                    </Grid.Column>
                                    <Grid.Column mobile="8" tablet="12" computer="14" largeScreen="13">
                                        <Header.Content className='serviceSubContent'> You can become a member of our system as a volunteer. You can help us reach more people by helping us develop the project. </Header.Content>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}
