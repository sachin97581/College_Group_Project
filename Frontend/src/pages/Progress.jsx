
import React from 'react';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { BarChart } from '@mui/x-charts/BarChart';
import ProgressData from '../pages/ProgressData';
import '../style/Progress.css'

// ✅ Sample dataset (Replace with your real data if needed)
const dataset = [
  { month: 'Jan', seoul: 50 },
  { month: 'Feb', seoul: 80 },
  { month: 'Mar', seoul: 65 },
  { month: 'Apr', seoul: 100},
  { month: 'May', seoul: 75 },
  { month: 'Jun', seoul: 120},
];

const valueFormatter = (value) => `${value} mm`;

function TickParamsSelector({
  tickPlacement,
  tickLabelPlacement,
  setTickPlacement,
  setTickLabelPlacement,
}) {
  return (
    <Stack direction="column" spacing={2} sx={{ width: '100%', marginBottom: '20px' }}>
      <FormControl>
        <FormLabel>Tick Placement</FormLabel>
        <RadioGroup
          row
          value={tickPlacement}
          onChange={(event) => setTickPlacement(event.target.value)}
        >
          <FormControlLabel value="start" control={<Radio />} label="Start" />
          <FormControlLabel value="end" control={<Radio />} label="End" />
          <FormControlLabel value="middle" control={<Radio />} label="Middle" />
          <FormControlLabel value="extremities" control={<Radio />} label="Extremities" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Label Placement</FormLabel>
        <RadioGroup
          row
          value={tickLabelPlacement}
          onChange={(event) => setTickLabelPlacement(event.target.value)}
        >
          <FormControlLabel value="tick" control={<Radio />} label="Tick" />
          <FormControlLabel value="middle" control={<Radio />} label="Middle" />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}

const chartSetting = {
  yAxis: [
    {
      label: 'Rainfall (mm)',
      width: 60,
    },
  ],
  series: [{ dataKey: 'seoul', label: 'Seoul Rainfall', valueFormatter }],
  height: 300,
  margin: { left: 70 },
};

const Progress = () => {
  const [tickPlacement, setTickPlacement] = React.useState('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');

  return (      // backgroundColor:'purple' add here 4
    <div style={{ width: '80%', margin: 'auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Progress</h1>

      <TickParamsSelector
        tickPlacement={tickPlacement}
        tickLabelPlacement={tickLabelPlacement}
        setTickPlacement={setTickPlacement}
        setTickLabelPlacement={setTickLabelPlacement}
      />

      <BarChart
        dataset={dataset}
        xAxis={[{ dataKey: 'month', tickPlacement, tickLabelPlacement }]}
        {...chartSetting}
      />
        <ProgressData />
    </div>
  );
};

export default Progress;


