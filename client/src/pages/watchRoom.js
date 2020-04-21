import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { submitMessage } from '../actions/chatActions';

const WatchRoom = ({ chat, submitMessage }) => {
    return (
        <div>
            <Link to="/">
                <button>Home</button>
            </Link>

            <button onClick={() => submitMessage({name: "mario", msg: "Hi, my name is Mario!"})}>
                New Message
            </button>

            {chat.map(ch => (
                <div key={ch.msg}>
                    <p>{ch.name}</p>
                    <p>{ch.msg}</p>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    chat: state.chat.messages
})

export default connect(mapStateToProps, {submitMessage})(WatchRoom)
