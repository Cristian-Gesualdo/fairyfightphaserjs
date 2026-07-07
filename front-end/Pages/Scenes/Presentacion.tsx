import Phaser from 'phaser'

export default class Presentacion extends Phaser.Scene {
  fallingLeaves: any

  constructor() {
    super({ key: 'Presentacion' })
  }

  preload() {
    this.load.image('Imageninicial', '/img/FONDOINICIO.png')

    this.load.image('botonstart', '/img/BOTON.png')

    this.load.spritesheet('fallingLeaves', '/img/fallingLeaves.png', { frameWidth: 400, frameHeight: 250 })
  }
  create() {
    this.add.image(480, 270, 'Imageninicial').setDisplaySize(960, 540)

    this.fallingLeaves = this.physics.add
      .sprite(480, 270, 'fallingLeaves')
      .setCollideWorldBounds(true)

      .setPushable(false)

      .setName('SceneSprite')

    this.fallingLeaves.body.setAllowGravity(false)

    this.fallingLeaves.setDisplaySize(960, 540)

    this.anims.create({
      key: 'infinite', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('fallingLeaves', {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
      }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 10, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: -1, // Utiliza la repetición proporcionada por el usuario
    })

    this.fallingLeaves.anims.play('infinite', true)

    this.add
      .image(485, 400, 'botonstart')
      .setDisplaySize(329, 113)
      .setScale(0.5, 0.5)
      .setInteractive()
      .on('pointerdown', (e) => {
        this.scene.start('Escenaforest')
      })
  }
}
