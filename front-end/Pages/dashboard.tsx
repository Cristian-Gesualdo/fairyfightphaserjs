import baseClasses from '@components/Themes/layout.module.scss'
import estilomodulescss from 'dist/css/estilo.module.scss'
import Phaser from 'phaser'
import React, { FunctionComponent } from 'react'

import Presentacion from './Scenes/Presentacion'

import Escenaforest from './Scenes/Escenaforest'

import Container from '@mui/material/Container'
import Nivel2 from './Scenes/Nivel2'

const Dashboard: FunctionComponent = (props: any) => {
  const {
    history: navigation,
    match: { params },
  } = props
  const classes = baseClasses
  const [lang, setlang] = React.useState<any>('en')
  const theme = { ...baseClasses, ...estilomodulescss }
  const config_TkUhoter: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'TkUhoter',

    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },

    width: 960,
    height: 540,

    scene: [new Presentacion(), new Escenaforest(), new Nivel2()],

    physics: {
      default: 'arcade',
      arcade: {
        debug: false,

        gravity: { x: 0, y: 350 },
      },
    },
    dom: {
      createContainer: true,
    },
  }
  React.useEffect(() => {
    new Phaser.Game(config_TkUhoter)
  }, [])

  // Theme selection

  React.useEffect(() => {
    if (typeof langStrings !== 'undefined') {
      setlang(langStrings[localStorage.getItem('aptugolang') || 'en'])
    }
  }, [])

  return (
    <React.Fragment>
      <div className={theme.pages}>
        <Container className={theme.Container} maxWidth="lg">
          <div id="TkUhoter" className={theme.Phaser}></div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
