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
