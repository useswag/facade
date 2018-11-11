import React from 'react';
import styled from 'react-emotion';
import { COLORS } from '../style/constants';

const ChatList = styled('ul')({
    listStyle: 'none',
    fontSize: 28
});

const ChatInput = styled('input')({
    padding: 20,
    fontSize: 30,
});

const RobBubble = styled('li')({
    background: COLORS.AccentBlue,
    color: 'white',
    textAlign: 'left',
    display: 'inline-block',
    padding: '10px',
    borderRadius: '5px',
});


const UserBubble = styled('ul')({
    color: COLORS.AccentBlue,
    background: 'white',
    textAlign: 'right',
    display: 'inline-block',
    padding: '10px',
    borderRadius: '5px',
});

export class RobChat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            log: [], 
        }

        this.handleChatEnter = this.handleChatEnter.bind(this);
        this.handleChatInput = this.handleChatInput.bind(this);
    }

    handleChatInput(event) {
        this.setState({ input: event.target.value });
    }

    handleChatEnter() {
        

        fetch(`https://b0ac2360.ngrok.io/rob/${this.state.input}`)
        .then(res => res.text())
        .then(data => {
            this.setState(state => ({ log: [{ from: 'rob', body: data }, ...state.log, ]}));
        })

        this.setState(state => ({ log: [{ from: 'user', body: state.input }, ...state.log, ]}));

        this.setState({ input: '' });
    }

    render() {
        return (
            <div>
                <form  onSubmit={this.handleChatEnter}>
                    <ChatInput type="text" value={this.state.input} placeholder="Chat to Rob" onChange={this.handleChatInput} />
                </form>
                <ChatList>
                    {this.state.log.map(message => <div>{message.from === 'user' ? <UserBubble>{message.body}</UserBubble> : <RobBubble>{message.body}</RobBubble>}</div>)}
                </ChatList>
            </div>
        );
    }
}