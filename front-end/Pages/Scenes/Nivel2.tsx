import Phaser from 'phaser'

export default class Nivel2 extends Phaser.Scene {
  constructor() {
    super({ key: 'Nivel2' })
  }

  preload() {
    this.load.image('fondo2', '/img/mapafinalfinal2.png')
  }
  create() {
    this.add.image(400, 300, 'mapafinalfinal2').setDisplaySize(800, 600)
  }
  update() {}
}
