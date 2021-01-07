import React, { Component } from 'react';
import { Button, Card, Typography } from 'antd';

const { Title } = Typography;

class LotteryTicket extends Component {
    render() {

        const { actions, index, color, number } = this.props;

        return(
            <Card 
                style   = {{ backgroundColor: color, marginLeft: '35%', marginBottom: 25, width: '30%',  }}
                size    = 'small'
                title   = 'Билетче'
            >
                <b><Title level = {3}>{number}</Title></b>
                <Button 
                    type = 'danger' block
                    onClick = { () => {actions.removeTicket(index)} }
                >
                Изтрий билетчето!
                </Button>
            </Card>
        );
    }
}

export default LotteryTicket;