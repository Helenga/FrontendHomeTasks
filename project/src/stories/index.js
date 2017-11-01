import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import PlaceBetButton from './PlaceBetButton';
import Lot from './lot';
import LotList from './lotList';
import NavBar from './navBar';
import SearchBar from './SearchBar';
import SetBetForm from './setBetForm';

storiesOf('PlaceBetButton').add('simple button', () => <PlaceBetButton />);
storiesOf('Lot').add('simple lot', () => <Lot />);
storiesOf('LotList').add('simple list', () => <LotList />);
storiesOf('NavBar').add('simple navigation bar', () => <NavBar />);
storiesOf('SearchBar').add('simple search bar', () => <SearchBar />);
storiesOf('SetBetForm').add('simple form for setting bet', () => <SetBetForm />);


/*
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
*/