import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";
import { ART, Dimensions } from 'react-native';
import { pie as d3Pie, arc as d3Arc } from 'd3-shape';
const {
  Surface,
  Group,
  Rectangle,
  Shape,
} = ART;
import { scaleLinear, scaleOrdinal } from 'd3-scale';
import { interpolateRdYlGn } from 'd3-scale-chromatic';

const { height, width } = Dimensions.get('window');

const dataset = [
  { name: 'Success', count: 546 },
  { name: 'Error', count: 155 }
];

let total = 0;
dataset.forEach(function(d){
  total+= d.count;
});

const ratio=dataset[0].count/total;


const pie = d3Pie()
  .value(function(d){return d.count})
  .sort(null);

const color = scaleOrdinal()
  .range(['#67BAF5','#F17F4D']);

import styles from "./styles";
const radius = width/2 - 40; // 20 padding on both sides
const center = [width/2, height/2];

const innerRadius = radius;
const outerRadius = radius - 30;

// const arc = d3Arc()
//   .innerRadius(innerRadius)
//   .outerRadius(outerRadius);
//
// const arcLine = d3Arc()
//   .innerRadius(innerRadius-13)
//   .outerRadius(innerRadius-10)
//   .startAngle(0);

const data = [200];
const arcs = d3Pie()(data);

const colorScale = scaleLinear()
  .domain([0, 300])
  .range([0, 1]);

const arc = d3Arc()
  .outerRadius(radius - 0)
  .innerRadius(radius - 30)
  .padAngle(0.03);

class Dashboard extends Component {
  render() {

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Dashboard</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>
            <Surface width={width} height={height}>
              <Group x={center[0]} y={radius + 20}>
                {/*pie(dataset).map((item, i) => {
                  return (<Shape
                    key={`arc${i}`}
                    d={arc(item)}
                    fill={color(item.data.name)}
                    stroke={"#2ca02c"}
                    strokeWidth={1}/>)
                })*/}

                {/*<Shape
                  d={arcLine({endAngle: 0})}
                  fill={color('Success')}
                  stroke={"#2ca02c"}
                  strokeWidth={1}/>*/}

                {arcs.map((item, i) => {
                  return (<Shape
                    key={`arc${i}`}
                    d={arc(item)}
                    fill={interpolateRdYlGn(colorScale(item.value))}
                    stroke={"#2ca02c"}
                    strokeWidth={1}/>)
                })}

              </Group>
            </Surface>
          </Text>
        </Content>

        <Footer>
          <FooterTab>
            <Button active full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Dashboard;
