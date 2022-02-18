import React from 'react'
import { Container, Grid, Header, Item, Image, Icon, Divider, Menu } from 'semantic-ui-react'
import myImage from './homeImages/mustafagenc.png'
import myTeach from './homeImages/patrickgeudens.JPG'
import teamImage from './homeImages/team.png'

export default function TeamSection() {
    return (
        <div id="team" className="section teamSection">
            <Container className="teamContainer"
                style={{ marginTop: "0px" }}>
                <Grid stackable textAlign="center" columns='3' container>
                    <Grid.Row>
                        <Grid.Column largeScreen="16" mobile='16' tablet='12' computer='10' >
                            <Header className='teamHeader' as='h2'>Who are we?</Header>
                            <Header.Content className='teamMainContent'>
                                <span className="teamMainPersonName">Patrick Geudens;</span> Instructor and much more..</Header.Content>
                            <Header.Content className='teamMainContent'>
                                <span className="teamMainPersonName">Mustafa Genc;</span> Junior Java Developer </Header.Content>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column tablet="8">
                            <Image size="large" circular centered src={teamImage} />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Grid verticalAlign="middle" columns="2">
                                <Grid.Column tablet="16" computer="8">
                                    <Image circular spaced src={myTeach} />
                                </Grid.Column>
                                <Grid.Column tablet="16" computer="8">
                                    <Header dividing className="teamPersonHeader" content="Patrick Geudens" />
                                    <Item className="teamPersonContent" meta="Instructor and much more.." />
                                    <Divider />
                                    <Menu compact secondary widths="5">
                                        <Menu.Item href="" target="_blank">
                                            <Icon circular inverted link name="instagram" />
                                        </Menu.Item>
                                        <Menu.Item href="" target="_blank">
                                            <Icon circular inverted link name="linkedin" />
                                        </Menu.Item>
                                        <Menu.Item href="https://github.com/patrick-intec" target="_blank">
                                            <Icon circular inverted link name="github" />
                                        </Menu.Item>
                                    </Menu>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>

                        <Grid.Column>
                            <Grid verticalAlign="middle" columns="2">
                                <Grid.Column tablet="16" computer="8">
                                    <Image circular spaced src={myImage} />
                                </Grid.Column>
                                <Grid.Column tablet="16" computer="8" >
                                    <Header dividing className="teamPersonHeader" content="Mustafa Genc" />
                                    <Item className="teamPersonContent" meta="Developer" />
                                    <Divider />
                                    <Menu compact secondary widths="5">
                                        <Menu.Item href="" target="_blank">
                                            <Icon circular inverted link name="instagram" />
                                        </Menu.Item>
                                        <Menu.Item href="https://www.linkedin.com/in/mustafa-genc-ab1964174/" target="_blank">
                                            <Icon circular inverted link name="linkedin" />
                                        </Menu.Item>
                                        <Menu.Item href="https://github.com/mustafagenc20" target="_blank">
                                            <Icon circular inverted link name="github" />
                                        </Menu.Item>
                                    </Menu>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}
