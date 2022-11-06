import { Collapse } from 'antd';
import React from 'react';
const { Panel } = Collapse;

const FrequentQuestions = () => (
    <Collapse defaultActiveKey={['1']} ghost>
        <Panel header="How can I reset my password" key="1">
            <p>Well, you can request the H.O.D for assistance. Or email the Systems Administrator on joseph19@gmail.com</p>
        </Panel>
        <Panel header="What are the perks of participating in Contests?" key="2">
            <p>Participating in contests earns you badges and connections.</p>
        </Panel>
        <Panel header="I can't see assignments set by the teachers?" key="3">
            <p>Please contact the systems administrator as soon as you can.</p>
        </Panel>
        <Panel header="Is there a way I can contribute to the community database?" key="4">
            <p>That is very possible, everyone is welcome to contribute to the community.</p>
        </Panel>
        <Panel header="What are the perks of participating in Contests" key="5">
            <p>Participating in contests earns you badges and connections</p>
        </Panel>
        <Panel header="I can't see assignments set by the teachers" key="6">
            <p>Please contact the systems administrator as soon as you can.</p>
        </Panel>
    </Collapse>
);
export default FrequentQuestions;