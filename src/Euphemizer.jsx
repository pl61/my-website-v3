import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Slot from './Slot.jsx';

const Euphemizer = () => {
  const [currentEuphemism, setCurrentEuphemism] = useState(0);

  const euphemisms = [
    ['  unemployed'],
    [' researching', ' the job market'],
    ['  funemployed'],
    [' seeking new', ' opportunities'],
    [' volunteering', ' professionally'],
    ['  freelancing'],
    ['in-between work'],
    [' in transition'],
    [' self-employed'],
    [' underemployed'],
    ['  on an unpaid', '  sabbatical'],
    ['on a journey of', 'self-discovery'],
    ['  doing free', '  consulting'],
    ['  at liberty'],
    [' restructuring'],
  ];

  const len = euphemisms.length;
  const euphemismsTotal = Array(len - 1).fill(0).map((e, i) => e + i + 1);

  const [euphemismsAvailable, setEuphemismsAvailable] = useState(euphemismsTotal);

  const letterToOffset = {
    ' ': 0,
    '-': 1,
    a: 2,
    b: 3,
    c: 4,
    d: 5,
    e: 6,
    f: 7,
    g: 8,
    h: 9,
    i: 10,
    j: 11,
    k: 12,
    l: 13,
    m: 14,
    n: 15,
    o: 16,
    p: 17,
    q: 18,
    r: 19,
    s: 20,
    t: 21,
    u: 22,
    v: 23,
    w: 24,
    x: 25,
    y: 26,
    z: 27,
  };

  const genSlots = (num, start = 0) => {
    const arr = Array(num).fill(0);
    return arr.map((e, i) => <Slot key={i + start}/>);
  };

  const strToOffset = (arr) => {
    const offset = [Array(15).fill(0), Array(15).fill(0)];

    for (let i = 0; i < arr.length; i += 1) {
      const len2 = arr[i].length;
      for (let j = 0; j < len2; j += 1) {
        offset[i][j] = letterToOffset[arr[i][j]];
      }
    }

    return offset;
  };

  const getNewEuphemism = (index) => {
    let newIndex = currentEuphemism;

    if (typeof index !== 'number') {
      let availableIndex;

      while (newIndex === currentEuphemism) {
        availableIndex = Math.floor(Math.random() * euphemismsAvailable.length);
        newIndex = euphemismsAvailable[availableIndex];
      }

      if (euphemismsAvailable.length === 1) {
        setEuphemismsAvailable(euphemismsTotal);
      } else {
        setEuphemismsAvailable(euphemismsAvailable.slice(0, availableIndex).concat(euphemismsAvailable.slice(availableIndex + 1)));
      }
    } else {
      newIndex = index;
    }

    setCurrentEuphemism(newIndex);
    const newEuphemism = euphemisms[newIndex];
    const offset = strToOffset(newEuphemism);

    $('.slots-row').each(function (i) {
      if (euphemisms[newIndex].length === 1) {
        $(this).css('top', '0.5rem');
      } else {
        $(this).css('top', '0');
      }

      $(this).children().each(function (j) {
        $(this).css('top', `-${offset[i][j] * 1.5}rem`);
      });
    });
  };

  useEffect(() => {
    getNewEuphemism(0);
  }, []);

  return (
    <div>
      <div id="first" className="section">
        <p>I am a software engineer who is currently:</p>
      </div>
      <div className="section">
        <div id="euphemizer">
        <div>
          <div className="slots-row">
            {genSlots(15)}
          </div>
          <div className="slots-row">
            {genSlots(15, 15)}
          </div>
        </div>
        <div className="button-euphemizer" onClick={() => getNewEuphemism()}>Euphemize</div>
      </div>
      </div>
      <div className="section">
        <p>But together, we can change that</p>
      </div>
    </div>
  );
};

export default Euphemizer;
