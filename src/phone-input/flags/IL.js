/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagIL(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="ILa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="ILb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0E46D4" />
          <stop offset="100%" stopColor="#0538B9" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ILa)" d="M0 0h21v15H0z" />
        <path fill="url(#ILb)" d="M0 0h21v3H0zM0 12h21v3H0z" />
        <path fill="url(#ILa)" d="M0 3h21v9H0z" />
        <path
          stroke="#093EC5"
          strokeWidth=".5"
          d="M7.575 9.25L10.5 3.985l2.925 5.265h-5.85z"
        />
        <path
          stroke="#093EC5"
          strokeWidth=".5"
          d="M7.575 5.75l2.925 5.265 2.925-5.265h-5.85z"
        />
      </g>
    </svg>
  );
}
