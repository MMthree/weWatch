import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../shared'
import { submitMessage } from '../actions/chatActions';
import { enableLightTheme, enableDarkTheme, toggleTheme } from '../actions/themeActions';

const WatchRoom = ({ chat, submitMessage, lightTheme, darkTheme }) => {
    return (
        <div>
            <Link to="/">
                <Button secondary>Home</Button>
            </Link>

            <Button dark onClick={() => submitMessage({name: "mario", msg: "Hi, my name is Mario!"})}>
                New Message
            </Button>

            <Button onClick={() => lightTheme()}>
                light Theme
            </Button>

            <Button secondary onClick={() => darkTheme()}>
                Dark Theme
            </Button>

            {chat.map(ch => (
                <div key={ch.msg}>
                    <p>{ch.name}</p>
                    <p>{ch.msg}</p>
                </div>
            ))}
        </div>
    )
}

const mapActionsToProps = {
    toggleTheme,
    submitMessage,
    lightTheme: enableLightTheme,
    darkTheme: enableDarkTheme
};

const mapStateToProps = state => ({
    chat: state.chat.messages
})

export default connect(mapStateToProps, mapActionsToProps)(WatchRoom)
