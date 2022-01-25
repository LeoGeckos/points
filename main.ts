input.onButtonPressed(Button.A, function () {
    Figur.move(1)
    Figur_Zähler = 1
    basic.pause(500)
    Figur.move(-1)
    Figur_Zähler = 0
})
input.onButtonPressed(Button.B, function () {
    Figur.move(1)
    basic.pause(100)
    Figur.move(1)
    Figur_Zähler = 2
    basic.pause(400)
    Figur.move(-1)
    basic.pause(100)
    Figur.move(-1)
    Figur_Zähler = 0
})
let Punkt: game.LedSprite = null
let Hindernis: game.LedSprite = null
let Figur_Zähler = 0
let Figur: game.LedSprite = null
Figur = game.createSprite(0, 4)
let Änderung = randint(1, 6)
Figur.turn(Direction.Left, 90)
basic.forever(function () {
    if (Änderung == 1) {
        Hindernis = game.createSprite(4, 4)
    } else if (Änderung == 2) {
        Hindernis = game.createSprite(4, 3)
    } else if (Änderung == 3) {
        Hindernis = game.createSprite(4, 2)
    } else if (Änderung == 4) {
        Punkt = game.createSprite(4, 4)
    } else if (Änderung == 5) {
        Punkt = game.createSprite(4, 3)
    } else if (Änderung == 6) {
        Punkt = game.createSprite(4, 2)
    }
    if (Änderung <= 3) {
        for (let index = 0; index < 5; index++) {
            Hindernis.set(LedSpriteProperty.Brightness, 10)
            basic.pause(300)
            Hindernis.move(-1)
            if (Figur.isTouching(Hindernis)) {
                game.gameOver()
            }
        }
        Hindernis.delete()
    }
    if (Änderung > 3) {
        for (let index = 0; index < 5; index++) {
            basic.pause(300)
            Punkt.move(-1)
            if (Figur.isTouching(Punkt)) {
                game.addScore(1)
            }
        }
        Punkt.delete()
    }
    Änderung = randint(1, 6)
})
