import Phaser from 'phaser'

export default class Escenaforest extends Phaser.Scene {
  variablemapa: any

  tileset: any

  mapacolisiones: any

  keys: any

  Win: Boolean

  spellOscuroATK: Boolean

  spellOscuro: any

  tornadoATK: Boolean

  tornados: any

  tornadoDosATK: Boolean

  tornadosDos: any

  spellPinkATK: Boolean

  spellPink: any

  fairyPinkDead: Boolean

  fairyPinkATK: Boolean

  fairyPink: any

  fairyDarkDead: Boolean

  fairyDarkATK: Boolean

  fairyDark: any

  constructor() {
    super({ key: 'Escenaforest' })
  }

  preload() {
    this.load.image('mapa', '/img/japan_tileset_colores.png')

    this.load.tilemapTiledJSON('jsonmapa', '/TripleMapFinalColision-modified.json')

    this.load.image('FONDO', '/img/TripleMapFinal.png')

    this.load.spritesheet('fairyDark', '/img/fairyDark.png', { frameWidth: 64, frameHeight: 64 })

    this.load.spritesheet('fairyPink', '/img/fairyPink.png', { frameWidth: 64, frameHeight: 64 })

    this.load.image('spellOscuro', '/img/SpellOscuro.png')

    this.load.spritesheet('tornado', '/img/Tornado.png', { frameWidth: 64, frameHeight: 64 })
  }
  create() {
    this.add.image(480, 270, 'FONDO').setDisplaySize(960, 540)

    this.variablemapa = this.make.tilemap({ key: 'jsonmapa' })

    this.tileset = this.variablemapa.addTilesetImage('japan', 'mapa')

    // Verifica que los nombres de las capas coincidan con los del JSON
    this.mapacolisiones = this.variablemapa.createLayer('Capa de patrones 10', this.tileset, 0, 0)

    // Configura la colisión en la capa de suelo
    this.mapacolisiones.setCollisionByProperty({ colision: true })

    this.keys = this.input.keyboard.addKeys('a,d,w,g,h,right,left,up,o,p')

    this.Win = false

    this.spellOscuroATK = false

    this.spellOscuro = this.physics.add
      .sprite(50, 50, 'spellOscuro')

      .setPushable(false)

      .setBodySize(32, 32)
      .setScale(0.75, 0.75)

      .setName('SceneSprite')

    this.spellOscuro.body.enable = false

    this.spellOscuro.body.setAllowGravity(false)

    this.spellOscuro.setVisible(false)

    this.tornadoATK = false

    this.tornados = this.physics.add.group()

    this.tornadoDosATK = false

    this.tornadosDos = this.physics.add.group()

    this.spellPinkATK = false

    this.spellPink = this.physics.add
      .sprite(50, 50, 'spellOscuro')

      .setPushable(false)

      .setBodySize(32, 32)
      .setScale(0.75, 0.75)

      .setName('SceneSprite')

    this.spellPink.body.enable = false

    this.spellPink.body.setAllowGravity(false)

    this.spellPink.setVisible(false)

    this.fairyPinkDead = false

    this.fairyPinkATK = false

    this.fairyPink = this.physics.add
      .sprite(760, 465, 'fairyPink')
      .setCollideWorldBounds(true)

      .setPushable(false)

      .setBodySize(30, 50)

      .setOffset(17, 12)

      .setName('SceneSprite fairyDark')

    if (this.fairyPink.flipX) {
      // Verifica si flipX es true, entonces ajusta la posición del jugador
      this.fairyPink.x = this.fairyPink.x - 0
    }

    this.fairyPink.flipX = true

    this.fairyPink.setDepth(1)

    this.fairyDarkDead = false

    this.fairyDarkATK = false

    this.fairyDark = this.physics.add
      .sprite(200, 465, 'fairyDark')
      .setCollideWorldBounds(true)

      .setPushable(false)

      .setBodySize(30, 50)

      .setOffset(17, 12)

      .setName('SceneSprite fairyDark')

    if (this.fairyDark.flipX) {
      // Verifica si flipX es true, entonces ajusta la posición del jugador
      this.fairyDark.x = this.fairyDark.x + 0
    }

    this.fairyDark.flipX = false

    this.fairyDark.setDepth(1)

    this.anims.create({
      key: 'IdlefairyPink', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('fairyPink', { frames: [0] }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 5, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: -1, // Utiliza la repetición proporcionada por el usuario
    })

    this.anims.create({
      key: 'RunfairyPink', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('fairyPink', { frames: [1, 2, 3, 4, 5, 6, 7, 8] }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 7, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: -1, // Utiliza la repetición proporcionada por el usuario
    })

    this.anims.create({
      key: 'JumpfairyPink', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('fairyPink', { frames: [9, 9, 10, 10, 10, 10, 11, 11] }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 7, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: 0, // Utiliza la repetición proporcionada por el usuario
    })

    this.anims.create({
      key: 'JumpEndfairyPink', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('fairyPink', { frames: [11] }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 7, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: -1, // Utiliza la repetición proporcionada por el usuario
    })

    this.anims.create({
      key: 'AtkfairyPink', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('fairyPink', { frames: [12, 13, 14, 15, 15, 15, 16, 16, 15, 14, 13] }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 12, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: 0, // Utiliza la repetición proporcionada por el usuario
    })

    this.anims.create({
      key: 'Atk2fairyPink', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('fairyPink', { frames: [17, 18, 19, 19, 20, 20, 20, 21, 22] }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 12, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: 0, // Utiliza la repetición proporcionada por el usuario
    })

    this.anims.create({
      key: 'DEADfairyPink', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('fairyPink', { frames: [23, 24, 25, 26, 27, 28] }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 10, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: 0, // Utiliza la repetición proporcionada por el usuario
    })

    this.anims.create({
      key: 'fairyPinkWin', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('fairyPink', { frames: [29, 30, 31, 32] }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 10, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: 0, // Utiliza la repetición proporcionada por el usuario
    })

    this.anims.create({
      key: 'IdlefairyDark', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('fairyDark', { frames: [0] }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 5, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: -1, // Utiliza la repetición proporcionada por el usuario
    })

    this.anims.create({
      key: 'RunfairyDark', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('fairyDark', { frames: [1, 2, 3, 4, 5, 6, 7, 8] }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 7, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: -1, // Utiliza la repetición proporcionada por el usuario
    })

    this.anims.create({
      key: 'JumpfairyDark', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('fairyDark', { frames: [9, 9, 10, 10, 10, 10, 11, 11] }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 7, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: 0, // Utiliza la repetición proporcionada por el usuario
    })

    this.anims.create({
      key: 'JumpEndfairyDark', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('fairyDark', { frames: [11] }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 7, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: -1, // Utiliza la repetición proporcionada por el usuario
    })

    this.anims.create({
      key: 'AtkfairyDark', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('fairyDark', { frames: [12, 13, 14, 15, 15, 15, 16, 16, 15, 14, 13] }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 12, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: 0, // Utiliza la repetición proporcionada por el usuario
    })

    this.anims.create({
      key: 'Atk2fairyDark', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('fairyDark', { frames: [17, 18, 19, 19, 20, 20, 20, 21, 22] }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 12, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: 0, // Utiliza la repetición proporcionada por el usuario
    })

    this.anims.create({
      key: 'DEADfairyDark', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('fairyDark', { frames: [23, 24, 25, 26, 27, 28] }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 10, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: 0, // Utiliza la repetición proporcionada por el usuario
    })

    this.anims.create({
      key: 'fairyDarkWin', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('fairyDark', { frames: [29, 30, 31, 32] }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 10, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: 0, // Utiliza la repetición proporcionada por el usuario
    })

    this.anims.create({
      key: 'tornadoAttack', // Utiliza el valor de la clave de animación proporcionada por el usuario
      frames: this.anims.generateFrameNumbers('tornado', { frames: [0, 1, 2, 1] }), // Utiliza el rango de fotogramas proporcionado por el usuario
      frameRate: 10, // Utiliza la velocidad de fotogramas proporcionada por el usuario
      repeat: -1, // Utiliza la repetición proporcionada por el usuario
    })

    this.physics.add.collider(this.mapacolisiones, this.fairyPink, null, null, this)
    this.physics.add.collider(this.mapacolisiones, this.fairyDark, null, null, this)
    this.physics.add.overlap(this.spellPink, this.fairyDark, this.fairyDarkDeadFunction, null, this)
    this.physics.add.overlap(this.spellOscuro, this.fairyPink, this.fairyPinkDeadFunction, null, this)
    this.physics.add.overlap(this.tornados, this.fairyPink, this.fairyPinkDeadFunction, null, this)
    this.physics.add.overlap(this.tornadosDos, this.fairyDark, this.fairyDarkDeadFunction, null, this)
  }
  update() {
    if (!this.Win) {
      if (Phaser.Input.Keyboard.JustDown(this.keys.g) && this.fairyDark.body.onFloor() && !this.tornadoATK && !this.fairyDarkDead) {
        this.fairyDarkATK = true

        this.tornadoATK = true
        if (this.fairyDarkATK) {
          this.fairyDark.setVelocity(0)

          if (this.fairyDark.body.onFloor()) {
            this.fairyDark.anims.play('AtkfairyDark', true)

            if (this.fairyDark.flipX) {
              setTimeout(() => {
                const tornado = this.tornados
                  .create(this.fairyDark.body.left - 12, this.fairyDark.y + 6, 'tornado')
                  .setScale(0.75, 0.75)
                  .setData('id', 1)

                  .setPushable(false)

                tornado.setBodySize(40, 54)

                tornado.setOffset(13, 10)

                tornado.body.setAllowGravity(false)

                tornado.setVelocityX(-175)

                tornado.anims.play('tornadoAttack', true)

                setTimeout(() => {
                  tornado.destroy()
                }, 2500)
              }, 400)
            }

            if (!this.fairyDark.flipX) {
              setTimeout(() => {
                const tornado = this.tornados
                  .create(this.fairyDark.body.right + 12, this.fairyDark.y + 6, 'tornado')
                  .setScale(0.75, 0.75)
                  .setData('id', 1)

                  .setPushable(false)

                tornado.setBodySize(40, 54)

                tornado.setOffset(13, 10)

                tornado.body.setAllowGravity(false)

                tornado.setVelocityX(175)

                tornado.anims.play('tornadoAttack', true)

                setTimeout(() => {
                  tornado.destroy()
                }, 2500)
              }, 400)
            }

            this.fairyDark.on('animationcomplete', (anim, frame) => {
              if (anim.key === 'AtkfairyDark') {
                this.fairyDarkATK = false
              }
            })

            setTimeout(() => {
              this.tornadoATK = false
            }, 1500)
          }
        }
      }

      if (Phaser.Input.Keyboard.JustDown(this.keys.h) && this.fairyDark.body.onFloor() && !this.spellOscuroATK && !this.fairyDarkDead) {
        this.fairyDarkATK = true

        this.spellOscuroATK = true
        if (this.fairyDarkATK) {
          this.fairyDark.setVelocity(0)

          if (this.fairyDark.body.onFloor()) {
            this.fairyDark.anims.play('Atk2fairyDark', true)

            if (!this.fairyDark.flipX) {
              setTimeout(() => {
                this.spellOscuro.body.enable = true

                this.spellOscuro.setVisible(true)

                this.spellOscuro.x = this.fairyDark.body.right + 12

                this.spellOscuro.y = this.fairyDark.y

                this.spellOscuro.setVelocity(300, 0)

                this.spellOscuro.setAngularVelocity(600)
              }, 400)
            }

            if (this.fairyDark.flipX) {
              setTimeout(() => {
                this.spellOscuro.body.enable = true

                this.spellOscuro.setVisible(true)

                this.spellOscuro.x = this.fairyDark.body.left - 12

                this.spellOscuro.y = this.fairyDark.y

                this.spellOscuro.setVelocity(-300, 0)

                this.spellOscuro.setAngularVelocity(-600)
              }, 400)
            }

            this.fairyDark.on('animationcomplete', (anim, frame) => {
              if (anim.key === 'Atk2fairyDark') {
                this.fairyDarkATK = false
              }
            })

            setTimeout(() => {
              this.spellOscuro.body.enable = false

              this.spellOscuro.setVisible(false)

              this.spellOscuro.setVelocity(0)

              this.spellOscuro.setAngularVelocity(0)

              this.spellOscuroATK = false
            }, 1500)
          }
        }
      }

      if (!this.fairyDarkATK && !this.fairyDarkDead) {
        if (this.keys.a.isDown) {
          if (this.fairyDark.flipX) {
            // Verifica si flipX es true, entonces ajusta la posición del jugador
            this.fairyDark.x = this.fairyDark.x - 0
          }

          this.fairyDark.flipX = true
          if (this.fairyDark.body.onFloor()) {
            this.fairyDark.anims.play('RunfairyDark', true)
          }

          this.fairyDark.setVelocityX(-175)

          if (this.keys.w.isDown && this.fairyDark.body.onFloor()) {
            this.fairyDark.setVelocity(-175, -250)

            this.fairyDark.anims.play('JumpfairyDark', true)
          }
        } else if (this.keys.d.isDown) {
          if (this.fairyDark.flipX) {
            // Verifica si flipX es true, entonces ajusta la posición del jugador
            this.fairyDark.x = this.fairyDark.x + 0
          }

          this.fairyDark.flipX = false
          if (this.fairyDark.body.onFloor()) {
            this.fairyDark.anims.play('RunfairyDark', true)
          }

          this.fairyDark.setVelocityX(175)

          if (this.keys.w.isDown && this.fairyDark.body.onFloor()) {
            this.fairyDark.anims.play('JumpfairyDark', true)

            this.fairyDark.setVelocity(175, -250)
          }
        } else if (this.keys.w.isDown) {
          if (this.fairyDark.body.onFloor()) {
            this.fairyDark.setVelocityY(-280)

            this.fairyDark.anims.play('JumpfairyDark', true)
          }
        } else {
          if (!this.fairyDark.body.onFloor()) {
            this.fairyDark.anims.play('JumpEndfairyDark', true)
          }

          if (this.fairyDark.body.onFloor()) {
            this.fairyDark.setVelocity(0)

            this.fairyDark.anims.play('IdlefairyDark', true)
          }
        }
      }

      if (Phaser.Input.Keyboard.JustDown(this.keys.o) && this.fairyPink.body.onFloor() && !this.tornadoDosATK && !this.fairyPinkDead) {
        this.fairyPinkATK = true

        this.tornadoDosATK = true
        if (this.fairyPinkATK) {
          this.fairyPink.setVelocity(0)

          if (this.fairyPink.body.onFloor()) {
            this.fairyPink.anims.play('AtkfairyPink', true)

            if (this.fairyPink.flipX) {
              setTimeout(() => {
                const tornadoDos = this.tornadosDos
                  .create(this.fairyPink.body.left - 12, this.fairyPink.y + 6, 'tornado')
                  .setScale(0.75, 0.75)
                  .setData('id', 1)

                  .setPushable(false)

                tornadoDos.setBodySize(40, 54)

                tornadoDos.setOffset(13, 10)

                tornadoDos.body.setAllowGravity(false)

                tornadoDos.setVelocityX(-175)

                tornadoDos.anims.play('tornadoAttack', true)

                setTimeout(() => {
                  tornadoDos.destroy()
                }, 2500)
              }, 400)
            }

            if (!this.fairyPink.flipX) {
              setTimeout(() => {
                const tornadoDos = this.tornadosDos
                  .create(this.fairyPink.body.right + 12, this.fairyPink.y + 6, 'tornado')
                  .setScale(0.75, 0.75)
                  .setData('id', 1)

                  .setPushable(false)

                tornadoDos.setBodySize(40, 54)

                tornadoDos.setOffset(13, 10)

                tornadoDos.body.setAllowGravity(false)

                tornadoDos.setVelocityX(175)

                tornadoDos.anims.play('tornadoAttack', true)

                setTimeout(() => {
                  tornadoDos.destroy()
                }, 2500)
              }, 400)
            }

            this.fairyPink.on('animationcomplete', (anim, frame) => {
              if (anim.key === 'AtkfairyPink') {
                this.fairyPinkATK = false
              }
            })

            setTimeout(() => {
              this.tornadoDosATK = false
            }, 1500)
          }
        }
      }

      if (Phaser.Input.Keyboard.JustDown(this.keys.p) && this.fairyPink.body.onFloor() && !this.spellPinkATK && !this.fairyPinkDead) {
        this.fairyPinkATK = true

        this.spellPinkATK = true
        if (this.fairyPinkATK) {
          this.fairyPink.setVelocity(0)

          if (this.fairyPink.body.onFloor()) {
            this.fairyPink.anims.play('Atk2fairyPink', true)

            if (!this.fairyPink.flipX) {
              setTimeout(() => {
                this.spellPink.body.enable = true

                this.spellPink.setVisible(true)

                this.spellPink.x = this.fairyPink.body.right + 12

                this.spellPink.y = this.fairyPink.y

                this.spellPink.setVelocity(300, 0)

                this.spellPink.setAngularVelocity(600)
              }, 400)
            }

            if (this.fairyPink.flipX) {
              setTimeout(() => {
                this.spellPink.body.enable = true

                this.spellPink.setVisible(true)

                this.spellPink.x = this.fairyPink.body.left - 12

                this.spellPink.y = this.fairyPink.y

                this.spellPink.setVelocity(-300, 0)

                this.spellPink.setAngularVelocity(-600)
              }, 400)
            }

            this.fairyPink.on('animationcomplete', (anim, frame) => {
              if (anim.key === 'Atk2fairyPink') {
                this.fairyPinkATK = false
              }
            })

            setTimeout(() => {
              this.spellPink.body.enable = false

              this.spellPink.setVisible(false)

              this.spellPink.setVelocity(0)

              this.spellPink.setAngularVelocity(0)

              this.spellPinkATK = false
            }, 1500)
          }
        }
      }

      if (!this.fairyPinkATK && !this.fairyPinkDead) {
        if (this.keys.left.isDown) {
          if (this.fairyPink.flipX) {
            // Verifica si flipX es true, entonces ajusta la posición del jugador
            this.fairyPink.x = this.fairyPink.x - 0
          }

          this.fairyPink.flipX = true
          if (this.fairyPink.body.onFloor()) {
            this.fairyPink.anims.play('RunfairyPink', true)
          }

          this.fairyPink.setVelocityX(-175)

          if (this.keys.up.isDown && this.fairyPink.body.onFloor()) {
            this.fairyPink.setVelocity(-175, -250)

            this.fairyPink.anims.play('JumpfairyPink', true)
          }
        } else if (this.keys.right.isDown) {
          if (this.fairyPink.flipX) {
            // Verifica si flipX es true, entonces ajusta la posición del jugador
            this.fairyPink.x = this.fairyPink.x + 0
          }

          this.fairyPink.flipX = false
          if (this.fairyPink.body.onFloor()) {
            this.fairyPink.anims.play('RunfairyPink', true)
          }

          this.fairyPink.setVelocityX(175)

          if (this.keys.up.isDown && this.fairyPink.body.onFloor()) {
            this.fairyPink.anims.play('JumpfairyPink', true)

            this.fairyPink.setVelocity(175, -250)
          }
        } else if (this.keys.up.isDown) {
          if (this.fairyPink.body.onFloor()) {
            this.fairyPink.setVelocityY(-280)

            this.fairyPink.anims.play('JumpfairyPink', true)
          }
        } else {
          if (!this.fairyPink.body.onFloor()) {
            this.fairyPink.anims.play('JumpEndfairyPink', true)
          }

          if (this.fairyPink.body.onFloor()) {
            this.fairyPink.setVelocity(0)

            this.fairyPink.anims.play('IdlefairyPink', true)
          }
        }
      }
    }
  }

  fairyDarkDeadFunction() {
    this.Win = true

    this.fairyDarkDead = true
    this.spellOscuro.setVisible(false)
    this.spellOscuro.body.enable = false

    this.spellPink.setVisible(false)
    this.spellPink.body.enable = false

    this.tornados.clear(true, true)
    this.tornadosDos.clear(true, true)

    this.fairyDark.setVelocityX(0)

    this.fairyPink.setVelocityX(0)

    this.fairyDark.anims.play('DEADfairyDark', true)

    setTimeout(() => {
      this.fairyPink.anims.play('fairyPinkWin', true)
    }, 100)
    setTimeout(() => {
      this.scene.start('Presentacion')
    }, 2500)
  }
  fairyPinkDeadFunction() {
    this.Win = true

    this.fairyPinkDead = true
    this.spellOscuro.setVisible(false)
    this.spellOscuro.body.enable = false

    this.spellPink.setVisible(false)
    this.spellPink.body.enable = false

    this.tornados.clear(true, true)
    this.tornadosDos.clear(true, true)

    this.fairyPink.setVelocityX(0)

    this.fairyDark.setVelocityX(0)

    this.fairyPink.anims.play('DEADfairyPink', true)

    setTimeout(() => {
      this.fairyDark.anims.play('fairyDarkWin', true)
    }, 100)
    setTimeout(() => {
      this.scene.start('Presentacion')
    }, 2500)
  }
}
