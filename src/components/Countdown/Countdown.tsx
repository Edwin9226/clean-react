import React from "react";

export type CountdownProps = {
  seconds: number | null;
  minutes: number | null;
  message: string | null;
};

const Countdown: React.FC<CountdownProps> = ({ seconds, minutes, message }) => {
  return <div>Countdown</div>;
};

export default Countdown;
