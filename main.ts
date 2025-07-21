/**
 * Create 12 mole hole positions
 */
// Function to move mole to a random hole
function moveMole () {
    posx = molePositions[Random_Number]
    posy = molePositions[Random_Number + 1]
    mole.setPosition(posx, posy)
}
// Score point when hammer hits mole
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    moveMole()
})
let Random_Number = 0
let molePositions: number[] = []
let y = 0
let x = 0
let mole: Sprite = null
let posy = 0
let posx = 0
posx = 0
posy = 0
let list: number[] = []
// Setup hammer (enemy)
let hammer = sprites.create(img`
    . . . . . f f f f f . . . . . 
    . . . f f e e e e f f . . . . 
    . . f f e e e e e e f f . . . 
    . f f f f f f f f e e f . . . 
    . f f f f f f f f e e f . . . 
    . . f f f b b f f f f f . . . 
    . . . f b b b f f f f f . . . 
    . . . f b b b f f f f f . . . 
    . . . f b b b f f f f f . . . 
    . . . . f f f f f f f . . . . 
    . . . . . f f f f f . . . . . 
    . . . . . . f f f . . . . . . 
    . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
// Hammer follows mouse or D-pad
controller.moveSprite(hammer)
hammer.setFlag(SpriteFlag.StayInScreen, true)
// Setup mole (player)
mole = sprites.create(img`
    . . . . . . b b b b . . . . . 
    . . . . b b d d d d b b . . . 
    . . . b d d d d d d d d b . . 
    . . b d d d d d d d d d d b . 
    . b d d f d d d d f d d d b . 
    . b d d d d d d d d d d d b . 
    . b d d d d d d d d d d d b . 
    . . b d d d d d d d d d b . . 
    . . . b d d d d d d d b . . . 
    . . . . b b d d d b b . . . . 
    . . . . . . b b b . . . . . . 
    `, SpriteKind.Enemy)
let gridCols = 4
let gridRows = 3
for (let row = 0; row <= gridRows - 1; row++) {
    for (let col = 0; col <= gridCols - 1; col++) {
        x = 30 + col * 40
        y = 40 + row * 40
        molePositions.push(x)
        molePositions.push(y)
    }
}
// Setup game
scene.setBackgroundColor(12)
info.setScore(0)
// Mole moves every 0.8 seconds
game.onUpdateInterval(2000, function () {
    Random_Number = randint(0, molePositions.length - 1)
    if (Random_Number % 1 == 0) {
        Random_Number += -1
    }
    moveMole()
})
