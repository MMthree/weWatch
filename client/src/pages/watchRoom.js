import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../shared'
import { submitMessage } from '../actions/chatActions';
import { switchTheme } from '../actions/themeActions';

const WatchRoom = ({ chat, submitMessage, switchTheme }) => {
    return (
        <div>
            <Link to="/">
                <Button secondary>Home</Button>
            </Link>

            <Button dark onClick={() => submitMessage({name: "mario", msg: "Hi, my name is Mario!"})}>
                New Message
            </Button>

            <Button onClick={() => switchTheme("light")}>
                light Theme
            </Button>

            <Button secondary onClick={() => switchTheme("dark")}>
                Dark Theme
            </Button>

            {chat.map((ch, i) => (
                <div key={i}>
                    <p>{ch.name}</p>
                    <p>{ch.msg}</p>
                </div>
            ))}
        </div>
    )
}

const mapActionsToProps = {
    submitMessage,
    switchTheme
};

const mapStateToProps = state => ({
    chat: state.chat.messages
})

export default connect(mapStateToProps, mapActionsToProps)(WatchRoom)
