import React from 'react'
import { Container, Mycharts, MyPiechart, Statistik, StatistikCard } from './style'
import { BsArrowUpRightCircle } from "react-icons/bs";
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge, LineChart } from '@mui/x-charts';
function AdminHome() {
    return (
        <Container>
            <Statistik>
                <StatistikCard data-aos='zoom-in' data-aos-duration='100'>
                    <div>
                        <p>Uquvchilar soni</p>
                        <Gauge
                            value={1750}
                            height={100}
                            width={100}
                            startAngle={0}
                            endAngle={360}
                            innerRadius="80%"
                            outerRadius="100%"
                        // ...
                        />
                    </div>
                    <BsArrowUpRightCircle className='icon' />
                </StatistikCard>
                <StatistikCard data-aos='zoom-in' data-aos-duration='100'>
                    <div>
                        <p>Ustozlar soni</p>
                        <Gauge
                            value={35}
                            height={100}
                            width={100}
                            startAngle={0}
                            endAngle={360}
                            innerRadius="80%"
                            outerRadius="100%"
                        // ...
                        />
                    </div>
                    <BsArrowUpRightCircle className='icon' />
                </StatistikCard>

                {/* <StatistikCard>
                    <h3>1900</h3>
                    <p>Uquvchilar</p>
                </StatistikCard>
                <StatistikCard>
                    <h3>1900</h3>
                    <p>Uquvchilar</p>
                </StatistikCard> */}
            </Statistik>
            <Mycharts>
                <MyPiechart >
                    <h4>Bu oy qo'shilganlar o'quvchilar</h4>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 133, label: 'Qizlar' },
                                    { id: 1, value: 21, label: 'Bollar' },
                                ],
                            },
                        ]}
                        width={300}
                        height={300}

                    />
                </MyPiechart>

                <MyPiechart style={{ flex: '1' }}>
                    <LineChart
                        xAxis={[
                            {
                                scaleType: 'point',
                                data: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', "Sentabr", "Oktabr", "Noyabr", "Dekabr"],
                            },
                        ]}
                        series={[
                            {
                                label: 'Yillik qabul',
                                data: [11, 2, 12, 10, 100, 23, 66, 129, 30, 77, 14, 151],
                            },
                        ]}
                        height={300}
                    />
                </MyPiechart>

            </Mycharts>
        </Container>
    )
}

export default AdminHome