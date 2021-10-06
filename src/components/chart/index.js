import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const datam = [
  {
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const temp = [
  {
    name: 'Product',
    values: [
      'Diskette',
      'Memory Card',
      'HDTV Tuner',
      'Flat Panel Graphics Monitor',
      'Digital Camera',
      'Minitower Speaker',
      'Extension Cable',
      'Y Box',
    ],
  },
  {
    name: 'Cost',
    values: [333.08, 7.07, 10.77, 194.76, 13.18, 143.3, 20.2, 405],
  },
  {
    name: 'Revenue',
    values: [400, 17.07, 120.77, 19.76, 123.18, 1432.3, 220.2, 4025],
  },
];
let u = ['uv', 'pv', 'amt'];
const reduced = temp.reduce((acc, curr) => {
  let arr = curr.values.map((item) => {
    return {
      [`${curr.name}`]: item,
    };
  });
  acc.push(arr);
  return acc;
}, []);
const [...t] = reduced;
console.log(t);
function Chart() {
  return (
    <LineChart
      width={1000}
      height={800}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="6 6" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {u.map((item, index) => (
        <Line
          type="monotone"
          dataKey={item}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          legendType="pipeline"
        />
      ))}
      {/* <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        legendType="pipeline"
      />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="#82ca9d"
        legendType="pipeline"
      />
      <Line
        type="monotone"
        dataKey="amt"
        stroke="#82ca9d"
        legendType="pipeline"
      /> */}
    </LineChart>
  );
}
export default Chart;
