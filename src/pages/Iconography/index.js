import * as React from 'react';
import { View } from 'react-sketchapp';
import styled from 'styled-components/primitives';

import { H1, H2 } from '../../components/Headings';
import Specimen from '../../components/Specimen';

import Account from './Account';
import Appearhere from './Appearhere';
import AppearhereBrackets from './AppearhereBrackets';
import Arrow from './Arrow';
import AutomaticPayments from './AutomaticPayments';
import Bogroll from './Bogroll';
import Book from './Book';
import Calendar from './Calendar';
import CalendarInsight from './CalendarInsight';
import CardList from './CardList';
import Camera from './Camera';
import ChartArrow from './ChartArrow';
import Chatting from './Chatting';
import Chevron from './Chevron';
import ChevronRight from './ChevronRight';
import Clock from './Clock';
import Comment from './Comment';
import Cross from './Cross';
import Dollar from './Dollar';
import Download from './Download';
import Facebook from './Facebook';
import Filter from './Filter';
import Globe from './Globe';
import Heart from './Heart';
import Location from './Location';
import Manage from './Manage';
import Map from './Map';
import Menu from './Menu';
import Minus from './Minus';
import Notification from './Notification';
import Percentage from './Percentage';
import Pintrest from './Pintrest';
import Play from './Play';
import PlayC from './PlayC';
import Plus from './Plus';
import Radio from './Radio';
import Search from './Search';
import Shield from './Shield';
import Signature from './Signature';
import Star from './Star';
import Store from './Store';
import Teamwork from './Teamwork';
import Tick from './Tick';
import TickC from './TickC';
import Ticket from './Ticket';
import TickStarred from './TickStarred';
import TravelIdea from './TravelIdea';

import { sizeLgVii } from '../../styles/modifiers';

const Body = styled.View`
  max-width: ${sizeLgVii * 5};
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const Iconography = () => (
  <View>
    <H1>Iconography</H1>
    <Body>
      <H2>UI Icons</H2>
      <Container>
        <Account />
        <Appearhere />
        <AppearhereBrackets />
        <Arrow />
        <AutomaticPayments />
        <Bogroll />
        <Book />
        <Calendar />
        <CalendarInsight />
        <CardList />
        <Camera />
        <ChartArrow />
        <Chatting />
        <Chevron />
        <ChevronRight />
        <Clock />
        <Comment />
        <Cross />
        <Dollar />
        <Download />
        <Facebook />
        <Filter />
        <Globe />
        <Heart />
        <Location />
        <Manage />
        <Map />
        <Menu />
        <Minus />
        <Notification />
        <Percentage />
        <Pintrest />
        <Play />
        <PlayC />
        <Plus />
        <Radio />
        <Search />
        <Shield />
        <Signature />
        <Star />
        <Store />
        <Teamwork />
        <Tick />
        <TickC />
        <Ticket />
        <TickStarred />
        <TravelIdea />
      </Container>

      <H2>Brand Icons</H2>
      <Container />

      <H2>Value Icons</H2>
      <Container />

      <H2>Space Type Icons</H2>
      <Container />
    </Body>
  </View>
);

export default Iconography;
