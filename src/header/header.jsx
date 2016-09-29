import { observer } from 'mobx-react'
import React from 'react'
import Tooltip from '@cypress/react-tooltip'

import events from '../lib/events'

import Controls from './controls'
import Stats from './stats'

const Header = observer(({ appState, events, statsStore }) => (
  <header>
    <Tooltip placement='bottom' title='View All Tests'>
      <button className='focus-tests' onClick={() => events.emit('focus:tests')}>
        <i className='fa fa-chevron-left'></i>
        <span>Tests</span>
      </button>
    </Tooltip>
    <Stats stats={statsStore} />
    <Controls appState={appState} />
  </header>
))

Header.defaultProps = {
  events,
}

export default Header
