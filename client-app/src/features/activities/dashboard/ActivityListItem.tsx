import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Link } from "react-router-dom";
import { format } from "date-fns";

interface Props {
  activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {

  

  return (
    <Segment.Group>
        <Segment>
            <Item.Group>
            <Item>
                <Item.Image
                size="tiny"
                circular
                src="/assets/user.png"
                style={{ marginBottom: 3 }}
                />
                <Item.Content>
                <Item.Header as={Link} to={`/activities/${activity.id}`}>
                    {activity.title}
                </Item.Header>
                <Item.Description>Hosted by Bob</Item.Description>
                {/* {activity.isHost && (
                    <Item.Description>
                    <Label basic color="orange">
                        You are hosting this activity
                    </Label>
                    </Item.Description>
                )}
                {activity.isGoing && !activity.isHost && (
                    <Item.Description>
                    <Label basic color="green">
                        You are going to this activity
                    </Label>
                    </Item.Description>
                )} */}
                </Item.Content>
            </Item>
            </Item.Group>
        </Segment>
        <Segment>
            <span>
            <Icon name="clock" /> {format(activity.date!, "dd MMM yyyy h:mm aa")}
            <Icon name="marker" /> {activity.venue}
            </span>
        </Segment>
        <Segment secondary>Attendees go here</Segment>
        <Segment clearing>
            <span>{activity.description}</span>
            <Button
            as={Link}
            to={`/activities/${activity.id}`}
            color="teal"
            floated="right"
            content="View"
            />
        </Segment>
    </Segment.Group>
  );
}
