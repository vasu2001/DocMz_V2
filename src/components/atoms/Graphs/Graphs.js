import React from 'react';
import {LineChart, YAxis, Grid, XAxis} from 'react-native-svg-charts';
import {View} from 'react-native';
import GraphBackground from '../../../assets/svg/graph.svg';
import {G, Line} from 'react-native-svg';

export default function Graph({data, hasAxis = true}) {
  const dataval = [50, 10, 40, 95, -4, -24, 35, 53, -53, 24, 50, -20, -80];

  const contentInset = {top: 20, bottom: 20};
  const CustomGrid = ({x, y, data, ticks}) => {
    console.log(data);
    return (
      <G>
        {
          // Horizontal grid
          ticks.map((tick) => (
            <Line
              key={tick}
              x1={'0%'}
              x2={'100%'}
              y1={y(tick)}
              y2={y(tick)}
              stroke={'#96CDE1'}
            />
          ))
        }
        {
          // Vertical grid
          data[0].data != undefined
            ? data[0].data.map((_, index) => (
                <Line
                  key={index}
                  y1={'10%'}
                  y2={'90%'}
                  x1={x(index)}
                  x2={x(index)}
                  stroke={'#96CDE1'}
                />
              ))
            : data.map((_, index) => (
                <Line
                  key={index}
                  y1={'10%'}
                  y2={'90%'}
                  x1={x(index)}
                  x2={x(index)}
                  stroke={'#96CDE1'}
                />
              ))
        }
      </G>
    );
  };
  return (
    <View style={{height: 120, flexDirection: 'row', width: '90%'}}>
      {hasAxis ? (
        <YAxis
          data={data[0].data != undefined ? data[0].data : data}
          contentInset={contentInset}
          style={{marginLeft: 10}}
          svg={{
            fill: 'grey',
            fontSize: 10,
          }}
          numberOfTicks={10}
        />
      ) : null}

      <LineChart
        style={{
          flex: 1,
          paddingHorizontal: 10,
          zIndex: 1,
          width: 150,
          marginLeft: hasAxis ? 0 : 20,
        }}
        data={data ? data : dataval}
        svg={{stroke: '#007E96', strokeWidth: 3}}
        contentInset={contentInset}>
        <CustomGrid belowChart={true} />
      </LineChart>
    </View>
  );
}
