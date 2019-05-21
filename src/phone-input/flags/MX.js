/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagMX(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="MXa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="MXb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E3283E" />
          <stop offset="100%" stopColor="#CC162C" />
        </linearGradient>
        <linearGradient id="MXc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#128A60" />
          <stop offset="100%" stopColor="#0B6848" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#MXa)" d="M0 0h21v15H0z" />
        <path fill="url(#MXb)" d="M10 0h11v15H10z" />
        <path fill="url(#MXc)" d="M0 0h7v15H0z" />
        <path fill="url(#MXa)" d="M7 0h7v15H7z" />
        <path
          fill="#8C9157"
          fillRule="nonzero"
          d="M8 7c0 .901.482 1.72 1.247 2.164a.5.5 0 0 0 .502-.865A1.499 1.499 0 0 1 9 7a.5.5 0 0 0-1 0zm3.846 2.107A2.498 2.498 0 0 0 13 7a.5.5 0 1 0-1 0c0 .518-.264.99-.693 1.265a.5.5 0 1 0 .539.842z"
        />
        <ellipse cx="10.5" cy="6.5" fill="#C59262" rx="1" ry="1.5" />
      </g>
    </svg>
  );
}
