import React from 'react';
import Blob from './Blob/Blob';

export const Blobs = (Array: Array<string>) => (
  <div>
    {Array.map((x: string, y: number) => (
      <Blob key={y}>{x}</Blob>
    ))}
  </div>
);

export const Pairs = (arr: Array<Array<string>>) => (
  <div
    style={{
      flexDirection: 'column',
      alignItems: 'flex-start',
      fontSize: '0.7em',
    }}
  >
    {arr.map((x: Array<string>, y: number) => (
      <p style={{ lineHeight: '0px' }} key={y}>
        <span style={{ marginRight: '10px' }}>{x[1]}</span>
        <span style={{ color: 'grey', fontSize: '0.7em' }}>{x[0]}</span>
      </p>
    ))}
  </div>
);

export const List = (arr: Array<string>) => (
  <div
    style={{
      flexDirection: 'column',
      alignItems: 'flex-start',
      fontSize: '0.4em',
    }}
  >
    {arr.map((x: string, y: number) => (
      <p style={{ lineHeight: '0px' }} key={y}>
        <span style={{ marginRight: '10px' }}>{x}</span>
      </p>
    ))}
  </div>
);

export const Gender = (rate: number) => (
  <p style={{ fontSize: '0.8em' }}>
    <span style={{ color: 'blue' }}>{100 - rate * 12.5}%</span>
    {' / '}
    <span style={{ color: 'pink' }}>{rate * 12.5}%</span>
  </p>
);

export const StepCalc = (cycles: number) => (
  <p style={{ fontSize: '0.8em' }}>
    <span>{cycles}</span>
    <span style={{ fontSize: '0.8em', color: 'grey' }}>
      {' '}
      ({cycles * 244}-{cycles * 256} steps)
    </span>
  </p>
);

const statColour = (value: number) => {
  if (value <= 50) {
    return 'orange';
  } else if (value <= 75) {
    return 'yellow';
  } else if (value <= 100) {
    return 'rgb(151, 224, 49)';
  } else if (value <= 125) {
    return 'rgb(4, 198, 90)';
  } else {
    return '#33C0FD';
  }
};

export const Stats = (value: number) => (
  <div style={{ justifyContent: 'space-between', alignItems: 'center' }}>
    <div style={{ width: '75%' }}>
      <div
        style={{
          height: '20px',
          borderRadius: '10px',
          width: '100%',
          backgroundColor: statColour(value),
        }}
      />
    </div>
    <p>{value}</p>
  </div>
);
