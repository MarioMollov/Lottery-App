import React, { Component } from 'react';
import { getRandomColor } from '../helper/utils';
import { Button, Card } from 'antd';

class Final extends Component {

    isWinning() {
        const { tickets, winningNumber } = this.props;

        for(const ticket of tickets) {
            if(ticket.number === winningNumber) {
                return true;
            }
        }
        return false;
    }

    renderWinning() {
        return (
            <>
                <h2>Честито!!!</h2>
                <h3>Ти спечели 1 000 000 лв.</h3>
                <p>Твоето печелившо число беше: <b>{this.props.winningNumber}</b></p>
            </>
        )
    }

    renderTryAgain() {
        return (
            <>
                <h2>Опитай пак!</h2>
                <p>Печелившото число беше: <b>{this.props.winningNumber}</b></p>
            </>
        )
    }

    render() {
        return (
            <Card 
                style = {{backgroundColor: getRandomColor()}}
                title ={ this.isWinning() ? this.renderWinning() : this.renderTryAgain() }     
            >
                <Button type='primary' onClick={this.props.actions.reset}>Ново теглене</Button>
            </Card>
        );
    }
}

export default Final;