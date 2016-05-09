import React, { Component } from "react";
import { Heading } from "spectacle";
import Rx from "rx";

const Wrapper = ({time, textColor}) => (
  <Heading textColor={textColor}>{time}ms </Heading>
);

export default class TimeDifference extends Component {

  constructor () {
    super();
    this.state = { time: 0 };
  }

  logic$ () {
    return Rx.Observable.fromEvent(document, 'click')
      .map(() => Date.now())
      .pairwise()
      .map(([before, after]) => (after - before));
  }

  componentDidMount () {
    this.subscribtion = this.logic$().subscribe(time => this.setState({ time }));
  }

  componentWillUnmount () {
    this.subscribtion.dispose();
  }

  render () {
    return (
      <Wrapper {...this.state} {...this.props}></Wrapper>
    );
  }
}

