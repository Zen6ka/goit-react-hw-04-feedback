import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';

import { Main } from './Layout';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

export const App = () => {
	const [good, setGood] = useState (0);
	const [neutral, setNeutral] = useState (0);
	const [bad, setBad] = useState (0);

		const leaveFeedback = evt => {
			const feedbackTypes = {
				good: setGood,
				neutral: setNeutral,
				bad: setBad,
		};
	
			const setFeedback = feedbackTypes[evt];
	
			if (setFeedback) {
				setFeedback(prevState => prevState + 1);
		}
		};
	
		const countTotalFeedback = () => good + neutral + bad;
	
		const countPositiveFeedbackPercentage = () =>
			Math.round((good * 100) / countTotalFeedback());
	
		return (
			<Main>
				<Section title="Please leave feedback">
					<FeedbackOptions
						options={['good', 'neutral', 'bad']}
						onLeaveFeedback={leaveFeedback}
					/>
				</Section>
				<Section title="Statistics">
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={countTotalFeedback()}
						positivePercentage={countPositiveFeedbackPercentage()}
					></Statistics>
				</Section>
				<GlobalStyle />
			</Main>
		);
	};