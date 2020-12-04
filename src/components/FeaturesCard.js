import React from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

const Card = styled.div`
  .subtitle {
    line-height: 30px;
  }
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const FeaturesCard = ({ title, subtitle, image }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <div className="column">
      <animated.div
        class="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <Card className="card p-6">
          <div className="card-image is-flex is-justify-content-center mb-5">
            <figure className="image is-96x96">
              <img src={image} alt="painting Images" />
            </figure>
          </div>
          <h3 className="title has-text-centered is-size-4 mb-5 is-spaced">
            {title}
          </h3>
          <p className="subtitle has-text-centered is-size-6">{subtitle}</p>
        </Card>
      </animated.div>
    </div>
  );
};
export default FeaturesCard;
