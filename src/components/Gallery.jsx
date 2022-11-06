import { Image, Col, Row } from 'antd';
import React from 'react';
const MultipleImages = () => (
    <div>
        <Row gutter={16}>
            <Col span={8}>
                <img width={200} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
            </Col>
        </Row>
        <Col span={8}>
            <img
                width={200}
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            />
        </Col>
    </div>
);
export default MultipleImages;