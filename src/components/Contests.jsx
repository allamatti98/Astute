import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;
const Conto = () => (
    <Card
        hoverable
        style={{
            width: 240,
        }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <Meta title="Math Contest" description="20th November" />
    </Card>
);
export default Conto;