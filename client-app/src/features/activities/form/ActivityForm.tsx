import React, { useEffect, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import {v4 as uuid} from 'uuid';


export default observer( function ActivityForm() {
    const {activityStore} = useStore();

    const {createActivity, updateActivity, loading, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();
    const navigate = useNavigate();

    const [activityForm, setActivityForm] = useState({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivityForm(activity!));
    }, [id, loadActivity]);


    function handleSubmit() {
        if(!activityForm.id) {
            activityForm.id = uuid();
            createActivity(activityForm).then(() => navigate(`/activities/${activityForm.id}`));
        }else {
            updateActivity(activityForm).then(() => navigate(`/activities/${activityForm.id}`));
        }
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivityForm({...activityForm, [name]: value});
    }

    if (loadingInitial) return <LoadingComponent content='Loading activity...'/>

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activityForm.title} name='title' onChange={handleInputChange}/>
                <Form.TextArea placeholder='Description' value={activityForm.description} name='description' onChange={handleInputChange}/>
                <Form.Input placeholder='Category' value={activityForm.category} name='category' onChange={handleInputChange}/>
                <Form.Input type='date' placeholder='Date' value={activityForm.date} name='date' onChange={handleInputChange}/>
                <Form.Input placeholder='City' value={activityForm.city} name='city' onChange={handleInputChange}/>
                <Form.Input placeholder='Venue' value={activityForm.venue} name='venue' onChange={handleInputChange}/>
                <Button loading={loading}  floated='right' positive type='submit' content='Submit'/>
                <Button as={Link} to='/activities' floated='right' type='button' content='Cancel'/>
            </Form>
        </Segment>
    );
    })