import { Badge, Calendar } from 'antd';
import React from 'react';
const getListData = (value) => {
    let listData;
    switch (value.date()) {
        case 5:
            listData = [
                {
                    type: 'warning',
                    content: 'Biology Progressive Test in Room 5A.',
                },
            ];
            break;
        case 6:
            listData = [
                {
                    type: 'warning',
                    content: 'Chemistry Progressive Test in Room 3C.',
                },
            ];
            break;
        case 8:
            listData = [
                {
                    type: 'warning',
                    content: 'ICT Progressive Test in Room 2D.',
                },
            ];
            break;
        case 9:
            listData = [
                {
                    type: 'warning',
                    content: 'Physics Progressive Test in Room 5A.',
                },
            ];
            break;

        case 10:
            listData = [
                {
                    type: 'warning',
                    content: 'Math Progressive Test in Room 5A.',
                },
            ];
            break;
        case 18:
            listData = [
                {
                    type: 'error',
                    content: 'Maths Assesment Examination in Room 1A.',
                },
            ];
            break;
        case 19:
            listData = [
                {
                    type: 'error',
                    content: 'Biology Assesment Examination in Room 1A.',
                },
            ];
            break;
        case 20:
            listData = [
                {
                    type: 'error',
                    content: 'Physics Assesment Examination in Room 1A.',
                },
            ];
            break;
        case 21:
            listData = [
                {
                    type: 'error',
                    content: 'Chemistry Assesment Examination in Room 1A.',
                },
            ];
            break;
        case 23:
            listData = [
                {
                    type: 'success',
                    content: 'Maths Contest National Library.',
                },
            ];
            break;
        case 23:
            listData = [
                {
                    type: 'success',
                    content: 'Science Fair Inc New Showgrounds.',
                },
            ];
            break;
        default:
    }
    return listData || [];
};
const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};
const ProgramCalendar = () => {
    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };
    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };
    return <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />;
};
export default ProgramCalendar;