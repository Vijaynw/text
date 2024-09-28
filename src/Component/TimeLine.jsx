import React from 'react';
import {CheckCircleOutlined} from '@ant-design/icons';
import { Timeline } from 'antd';
const TimelineContainer = () => (
    <Timeline
        items={[
            {
                color: 'green',
                children: (
                    <>
                        <h1>Qualys</h1>
                        <Timeline
                            items={[
                                {
                                    color: "green",
                                    children: (
                                        <div className='mt-4'>
                                            FrontEnd Developer
                                        </div>
                                    )
                                }
                            ]}
                        />
                    </>
                )
            },
            {
                color: 'green',
                dot: <CheckCircleOutlined />,
                children: (
                    <div>
                        <h2>FIS Global</h2>
                        <Timeline
                            items={[
                                {
                                    color: 'green',
                                    children: (
                                        <div className='mt-4'>
                                            Senior Analyst
                                        </div>
                                    ),
                                },
                                {
                                    color: 'green',
                                    children: (
                                        <div>
                                            Analyst
                                        </div>
                                    ),
                                },
                                {
                                    color: 'green',
                                    children: (
                                        <div>
                                            IT Trainee
                                        </div>
                                    ),
                                },
                            ]}
                        />
                    </div>
                ),
            }
        ]}
    />
);
export default TimelineContainer;