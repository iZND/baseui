/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagDJ(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="DJa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="DJb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1DC837" />
          <stop offset="100%" stopColor="#13AD2B" />
        </linearGradient>
        <linearGradient id="DJc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#82C5F5" />
          <stop offset="100%" stopColor="#6AB3E8" />
        </linearGradient>
        <linearGradient id="DJd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E21C21" />
          <stop offset="100%" stopColor="#D7151A" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#DJa)" d="M0 0h21v15H0z" />
        <path fill="url(#DJb)" d="M0 7h21v8H0z" />
        <path fill="url(#DJc)" d="M0 0h21v7H0z" />
        <path fill="url(#DJa)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#DJd)"
          d="M3.5 8.475L2.03 9.523 2.574 7.8l-1.45-1.074 1.804-.016L3.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z"
        />
      </g>
    </svg>
  );
}
