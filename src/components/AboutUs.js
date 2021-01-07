import React, { Component } from "react";
import { Typography, Divider } from 'antd';

const { Title } = Typography;

class AboutUs extends Component {
    render() {
        return (
            <>
                <Title>За нас</Title>
                <Divider></Divider>
                <p>
                    Целта на тази лотария е да упражнявам уменията си с React!
                    <br /> 
                    Както и с другите външни библиотеки, които са включени.
                    <br />
                    <b>Ant Design</b> - дизайна на лотарията и менюто.
                    <br />
                    <b>React router dom</b> - рутация на линковете в менюто.
                </p>
            </>
        )
    }
}

export default AboutUs;