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
import Morph from 'art/morph/path';
import { ART, Dimensions } from 'react-native';
import { pie as d3Pie, arc as d3Arc } from 'd3-shape';
import { range, pairs } from 'd3-array';
const {
  Surface,
  Group,
  Rectangle,
  Shape,
  Text: ShapeText
} = ART;


import { scaleSequential, scaleOrdinal } from 'd3-scale';
import { interpolateRdYlGn } from 'd3-scale-chromatic';
import styles from "./styles";

const { height, width } = Dimensions.get('window');

const color = scaleSequential(interpolateRdYlGn)
  .domain([0, 2 * Math.PI]);

const radius = width/2 - 40; // 20 padding on both sides
const center = [width/2, height/2];

const outerRadius = radius;
const innerRadius = radius - 40;

const arc = d3Arc()
  .outerRadius(outerRadius - 3)
  .innerRadius(innerRadius + 3);

const fullCircle = d3Arc()({
  innerRadius,
  outerRadius,
  startAngle: 0,
  endAngle: 2 * Math.PI
});

class Dashboard extends Component {
  static get defaultProps() {
    return {
      data: {
        total : 300,
        earned: 200
      }
    }
  }
  constructor(){
    super();
    this.state = {
      progressPath: arc({
        startAngle: 0,
        endAngle: 0.02
      }),
      fillColor: 'rgb(64, 79, 112)'
    }
  }

  componentDidMount() {
    const dataset = this.props.data;

    const ratio = dataset.earned/dataset.total * 100;

    const arcs = d3Pie()([ ratio, 100 - ratio ]);
    const { startAngle: valueStartAngle, endAngle: valueEndAnge} = arcs[0];
    const fillColor = color(valueEndAnge);
    this.setState({
      fillColor
    });
    const startPath = arc({
      startAngle: 0,
      endAngle: 0
    });

    const fragments = pairs(range(0, valueEndAnge, 0.1));
    let start = null;
    let currentIndex = 0;

    function step(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;

      let [startAngle, endAngle] = fragments[currentIndex];

      this.setState({
        progressPath: arc({
          startAngle: 0,
          endAngle
        })
      });

      currentIndex++;

      if (currentIndex < fragments.length) {
        window.requestAnimationFrame(step.bind(this));
      }
    }

    requestAnimationFrame(step.bind(this));
  }

  render() {
    const { earned, total } = this.props.data;
    const pointToFull = total - earned;
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
          <Surface width={width} height={height}>
            <Group x={center[0]} y={radius + 20}>
              <Shape
                d={fullCircle}
                fill={'rgb(64, 79, 112)'}/>

              <Shape
                style={styles.progressPath}
                d={this.state.progressPath}
                fill={'#7FFF00'}/>

                <ShapeText
                  y={-30}
                  font={`bold 30px "Helvetica Neue", "Helvetica", Arial`}
                  fill = "#000000"
                  alignment = "center"
                >
                  { pointToFull + ' Points'}
                </ShapeText>

                <ShapeText
                  font={`16px "Helvetica Neue", "Helvetica", Arial`}
                  fill = "#000000"
                  alignment = "center"
                >
                  To A Free Service
                </ShapeText>
            </Group>
          </Surface>
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
