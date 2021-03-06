import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Journal from '../public/src/components/journal/journal.jsx';

// import App from '../public/src/components/app.jsx';
import '../public/styles/styles.css';
import '../public/src/components/app.css';
// import '../public/styles/entry-styles.css';

// activity feed entries
// import PulseCheckEntry from '../public/src/components/entries/pulse-check-entry.jsx';
// import SleepEntry from '../public/src/components/entries/sleep-entry.jsx';
// import ExerciseEntry from '../public/src/components/entries/exercise-entry.jsx';
// import MealEntry from '../public/src/components/entries/meal-entry.jsx';
// import WaterEntry from '../public/src/components/entries/water-entry.jsx';
// import EntryList from '../public/src/components/entries/entry-list.jsx';

// chart modules
// import PieReport from '../public/src/components/reports/pie-report';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Journal', module)
  .add('basic', () => (
    <div>
      <Journal />
    </div>
  ));


// storiesOf('App', module)
//   .add('basic', () => <App />);

// storiesOf('Entries', module)
//   .add('basic', () => (
//     <div className="flex flex-center">
//       <div className="report-tile">
//         <EntryList />
//       </div>
//     </div>
//   )
//   );

// storiesOf('PieReport', module)
//   .add('basic', () => (
//     <div className="flex flex-center">
//       <div className="report-tile">
//         <PieReport type="Meal" />
//       </div>
//     </div>
//   ));
