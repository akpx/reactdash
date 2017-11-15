import { PieChart } from './Chart'
import {CrashGroups } from './Crashgroups'
import { CrashReasons } from './Crashreason'

export const Content = () =>  (
    <div>
        <PieChart />
        <CrashGroups />
        <CrashReasons />
    </div>
)