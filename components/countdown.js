// components/CountdownCircles.js

import { useState, useEffect } from 'react';
import moment from 'moment';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border 2px double #ff6347; /* Border around all circles */
  border-radius: 15px;
  background: radial-gradient(circle, rgba(1, 121, 111, 0.7), rgba(1, 121, 111, 0.7)); /* Gradient background */
  max-width: fit-content;
  margin: 0 auto;
`;

const Spacer = styled.div`
  height: 1rem;  /* Specify the height of the gap */
  width: 100%;   /* Ensure it spans the full width */
  background-color: transparent;  /* Make it transparent */
`;

const Box = styled.div`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #FFFDD0; /* Box background color */
`;

const Title = styled.h2`
  margin-bottom: 0.1rem;
  font-size: 1.5rem;
  color: #333;
  font-family: 'M PLUS Rounded 1c', sans-serif; /* Apply the imported font */
  font-weight: 700; /* Set the font weight to bold */
`;

const Container = styled.div`
  display: flex;
  flex-direction: row; /* Default layout */
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap; /* Allow wrapping */
  
  @media (max-width: 600px) { /* Adjust this breakpoint as needed */
    flex-direction: column; /* Stack vertically on small screens */
  }
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #d4f1f4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const CountdownCirclesComponent = () => {
  const targetDate = moment('05/20/2025', 'MM/DD/YYYY');
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const targetDate = moment('05/20/2025', 'MM/DD/YYYY');
    setTimeLeft(getTimeLeft(targetDate))

    const interval = setInterval(() => {
    setTimeLeft(getTimeLeft(targetDate));
  }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  function getTimeLeft(targetDate) {
    const now = moment();
    const duration = moment.duration(targetDate.diff(now));
    return{
        days: Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
    }
  }

  if (!timeLeft) {
    return <div>Loading...</div>
  }

  return (
    <Wrapper>
        <Box>
            <Title>Countdown to the End of Spring ‘25.</Title>
        </Box>
        <Spacer />
        <Container>
            <Circle>{timeLeft.days}d</Circle>
            <Circle>{timeLeft.hours}h</Circle>
            <Circle>{timeLeft.minutes}m</Circle>
            <Circle>{timeLeft.seconds}s</Circle>
        </Container>
    </Wrapper>
  );
};

// Disable SSR for this component by using dynamic
const CountdownCircles = dynamic(() => Promise.resolve(CountdownCirclesComponent), {
    ssr: false,
  });

export default CountdownCircles;
