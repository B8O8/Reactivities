import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";



export default observer( function ActivityForm() {
    const {activityStore} = useStore();

    const {selectedActivity , closeForm, createActivity, updateActivity, loading} = activityStore;

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activityForm, setActivityForm] = React.useState(initialState);

    function handleSubmit() {
        activityForm.id ? updateActivity(activityForm) : createActivity(activityForm);
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivityForm({...activityForm, [name]: value});
    }

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
                <Button onClick={closeForm} floated='right' type='button' content='Cancel'/>
            </Form>
        </Segment>
    );
    })