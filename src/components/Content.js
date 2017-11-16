import React from 'react'
import PropTypes from 'prop-types'
import { PieChart } from './Chart'
import {CrashGroups } from './Crashgroups'
import { CrashReasons } from './Crashreason'

export const Content = (props) =>  (
    <div>
        <p>App Id: {(props.match.params.appid) ? props.match.params.appid : 'not loaded'}</p>
        <PieChart />
        <CrashGroups />
        <CrashReasons />
    </div>
)

