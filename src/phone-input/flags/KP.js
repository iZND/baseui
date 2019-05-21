/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagKP(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="KPa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="KPb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1461B6" />
          <stop offset="100%" stopColor="#0B52A1" />
        </linearGradient>
        <linearGradient id="KPc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F53846" />
          <stop offset="100%" stopColor="#EB2130" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#KPa)" d="M0 0h21v15H0z" />
        <path fill="url(#KPb)" d="M0 0h21v3H0zM0 12h21v3H0z" />
        <path fill="url(#KPa)" d="M0 3h21v9H0z" />
        <path fill="url(#KPc)" d="M0 4h21v7H0z" />
        <path
          fill="url(#KPa)"
          d="M7.5 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1.497l1.47 1.02-.516-1.713 1.424-1.083-1.788-.039L7.5 5l-.59 1.688-1.788.04L6.546 7.81 6.03 9.523 7.5 8.503z"
        />
      </g>
    </svg>
  );
}
