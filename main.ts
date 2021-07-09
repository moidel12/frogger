namespace SpriteKind {
    export const log = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    if (!(duck.overlapsWith(log_1))) {
        tiles.placeOnTile(duck, tiles.getTileLocation(7, 15))
        music.powerUp.playUntilDone()
        info.changeScoreBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.log, function (sprite, otherSprite) {
    duck.x = otherSprite.x
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanSand14, function (sprite, location) {
    if (!(duck.overlapsWith(log_1) || (duck.overlapsWith(log_2) || duck.overlapsWith(log_3)) || duck.overlapsWith(log_4))) {
        tiles.placeOnTile(duck, tiles.getTileLocation(7, 15))
        music.bigCrash.playUntilDone()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnTile(duck, tiles.getTileLocation(7, 15))
    music.bigCrash.playUntilDone()
})
let duck: Sprite = null
let log_4: Sprite = null
let log_3: Sprite = null
let log_2: Sprite = null
let log_1: Sprite = null
tiles.setTilemap(tilemap`level1`)
let car = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 9 6 6 6 6 6 6 c 6 . . . 
    . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
    . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
    . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
    . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
    . 6 8 b b b 8 b b b b 8 6 6 6 6 
    . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
    . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
    . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
    . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
    . 8 f f f f 8 8 8 8 f f f 8 8 8 
    . . f f f f f 8 8 f f f f f 8 . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let car_2 = sprites.create(img`
    . . . . . . . e e e e e . . . . 
    . . . . . e e 2 2 2 2 2 e . . . 
    . . . . e e 2 2 2 2 2 2 2 e . . 
    . . . . e 9 4 2 2 2 4 4 4 b e . 
    . . e e 9 9 4 2 2 2 4 4 4 9 b e 
    . e 2 2 9 9 4 4 2 2 2 4 4 9 9 e 
    e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
    e 2 2 2 9 9 e e e e e e e 9 9 e 
    e 2 2 2 9 b e b b b e b e b 9 e 
    e 2 e e e e b b b b e b b e b e 
    e e 3 3 e e 2 2 2 2 e 2 2 e e e 
    e 3 3 e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e f f f e e e e f f f e e 
    . e e f c b b f e e f c b b f . 
    . . . . f f f . . . . f f f . . 
    `, SpriteKind.Enemy)
let car_3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 9 6 6 6 6 6 6 c 6 . . . 
    . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
    . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
    . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
    . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
    . 6 8 b b b 8 b b b b 8 6 6 6 6 
    . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
    . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
    . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
    . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
    . 8 f f f f 8 8 8 8 f f f 8 8 8 
    . . f f f f f 8 8 f f f f f 8 . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(car, tiles.getTileLocation(0, 13))
tiles.placeOnTile(car_2, tiles.getTileLocation(15, 12))
tiles.placeOnTile(car_3, tiles.getTileLocation(0, 11))
car.vx = 100
car_2.vx = -100
car_3.vx = 100
log_1 = sprites.create(img`
    ................................................................
    ................................................................
    ...6............6............6............6.....................
    ..676..........676..........676..........676....................
    ..6776.........6776.........6776.........6776...................
    ..86776........86776........86776........86776.cfcceeeccbb......
    cccc67ffffffcccce67eeeeeeeeeee77ffcceeeeee877ffceeeeefbdddb.....
    cccc66cccccceeeee66eeeeeeeeeee66eeeeeeeeeee66ceeeeeefbdbbbdb....
    67777ccccccce67776eeeecccf67766eeeeeeee67766eeeeeeeefdbbdbbdb...
    c7776cccceceee7776eeeeeeeee7776eeeeeeeee7776eeeeeeefbdbdbdbdb...
    cc67cccceeeeeee67eeeeeeeeeee67eeeeeeeeeee67eeeeeeeefdbdbdbdbdb..
    cc87cccceeeeeee87eeeeeeeeeee87eeeeeeeeeee86eeeeeeeecdbdbdbdbdb..
    cc87cccecceeeee87eeeeeeeeeee87eeeeeeeeeee86eeeeeeeecdbdbdbdbdb..
    cc67ccccccceeee67eeeeeeeeeee67eeeeeeeeeee67eeeeeeeecdbdbdbdbdb..
    c6776cceeeeeee6776eeeeeeeee6776eeeeeeeee7776eeeeeeecbdbdbdbdb...
    67777ccecccce67777eeeeeeee67776eeeeeeee67776eeeeeeeecdbbdbbdb...
    cc866cccccceeee866eccfffccce866eeeeeeeeee866eeeeeeeecbdbbbdb....
    ff8666fccceeeee8666eeeeeeeee8676fffcceeec8666eeeeeeeecbdddb.....
    ..67776........67776........67776effffffe67776......eeccbb......
    ..6776.........6776.........6776........e6776...................
    ..676..........676..........676..........676....................
    ...6............6............6............6.....................
    ................................................................
    ................................................................
    `, SpriteKind.log)
log_2 = sprites.create(img`
    ................................................................
    ................................................................
    .....................6............6............6............6...
    ....................676..........676..........676..........676..
    ...................6776e........6776.........6776.........6776..
    ......bbccee......67776effffffe67776........67776........67776..
    .....bdddbceeeeeeee6668ceeeccfff6768eeeeeeeee6668eeeeecccf6668ff
    ....bdbbbdbceeeeeeee668eeeeeeeeee668ecccfffcce668eeeecccccc668cc
    ...bdbbdbbdceeeeeeee67776eeeeeeee67776eeeeeeee77776eccccecc77776
    ...bdbdbdbdbceeeeeee6777eeeeeeeee6776eeeeeeeee6776eeeeeeecc6776c
    ..bdbdbdbdbdceeeeeeee76eeeeeeeeeee76eeeeeeeeeee76eeeeccccccc76cc
    ..bdbdbdbdbdceeeeeeee68eeeeeeeeeee78eeeeeeeeeee78eeeeecceccc78cc
    ..bdbdbdbdbdceeeeeeee68eeeeeeeeeee78eeeeeeeeeee78eeeeeeecccc78cc
    ..bdbdbdbdbdfeeeeeeee76eeeeeeeeeee76eeeeeeeeeee76eeeeeeecccc76cc
    ...bdbdbdbdbfeeeeeee6777eeeeeeeee6777eeeeeeeee6777eeececccc6777c
    ...bdbbdbbdfeeeeeeee66776eeeeeeee66776fccceeee67776eccccccc77776
    ....bdbbbdbfeeeeeec66eeeeeeeeeee66eeeeeeeeeee66eeeeecccccc66cccc
    .....bdddbfeeeeecff778eeeeeeccff77eeeeeeeeeee76eccccffffff76cccc
    ......bbcceeeccfc.67768........67768........67768........67768..
    ...................6776.........6776.........6776.........6776..
    ....................676..........676..........676..........676..
    .....................6............6............6............6...
    ................................................................
    ................................................................
    `, SpriteKind.log)
log_3 = sprites.create(img`
    ................................................................
    ................................................................
    ...6............6............6............6.....................
    ..676..........676..........676..........676....................
    ..6776.........6776.........6776.........6776...................
    ..86776........86776........86776........86776.cfcceeeccbb......
    cccc67ffffffcccce67eeeeeeeeeee77ffcceeeeee877ffceeeeefbdddb.....
    cccc66cccccceeeee66eeeeeeeeeee66eeeeeeeeeee66ceeeeeefbdbbbdb....
    67777ccccccce67776eeeecccf67766eeeeeeee67766eeeeeeeefdbbdbbdb...
    c7776cccceceee7776eeeeeeeee7776eeeeeeeee7776eeeeeeefbdbdbdbdb...
    cc67cccceeeeeee67eeeeeeeeeee67eeeeeeeeeee67eeeeeeeefdbdbdbdbdb..
    cc87cccceeeeeee87eeeeeeeeeee87eeeeeeeeeee86eeeeeeeecdbdbdbdbdb..
    cc87cccecceeeee87eeeeeeeeeee87eeeeeeeeeee86eeeeeeeecdbdbdbdbdb..
    cc67ccccccceeee67eeeeeeeeeee67eeeeeeeeeee67eeeeeeeecdbdbdbdbdb..
    c6776cceeeeeee6776eeeeeeeee6776eeeeeeeee7776eeeeeeecbdbdbdbdb...
    67777ccecccce67777eeeeeeee67776eeeeeeee67776eeeeeeeecdbbdbbdb...
    cc866cccccceeee866eccfffccce866eeeeeeeeee866eeeeeeeecbdbbbdb....
    ff8666fccceeeee8666eeeeeeeee8676fffcceeec8666eeeeeeeecbdddb.....
    ..67776........67776........67776effffffe67776......eeccbb......
    ..6776.........6776.........6776........e6776...................
    ..676..........676..........676..........676....................
    ...6............6............6............6.....................
    ................................................................
    ................................................................
    `, SpriteKind.log)
log_4 = sprites.create(img`
    ................................................................
    ................................................................
    .....................6............6............6............6...
    ....................676..........676..........676..........676..
    ...................6776e........6776.........6776.........6776..
    ......bbccee......67776effffffe67776........67776........67776..
    .....bdddbceeeeeeee6668ceeeccfff6768eeeeeeeee6668eeeeecccf6668ff
    ....bdbbbdbceeeeeeee668eeeeeeeeee668ecccfffcce668eeeecccccc668cc
    ...bdbbdbbdceeeeeeee67776eeeeeeee67776eeeeeeee77776eccccecc77776
    ...bdbdbdbdbceeeeeee6777eeeeeeeee6776eeeeeeeee6776eeeeeeecc6776c
    ..bdbdbdbdbdceeeeeeee76eeeeeeeeeee76eeeeeeeeeee76eeeeccccccc76cc
    ..bdbdbdbdbdceeeeeeee68eeeeeeeeeee78eeeeeeeeeee78eeeeecceccc78cc
    ..bdbdbdbdbdceeeeeeee68eeeeeeeeeee78eeeeeeeeeee78eeeeeeecccc78cc
    ..bdbdbdbdbdfeeeeeeee76eeeeeeeeeee76eeeeeeeeeee76eeeeeeecccc76cc
    ...bdbdbdbdbfeeeeeee6777eeeeeeeee6777eeeeeeeee6777eeececccc6777c
    ...bdbbdbbdfeeeeeeee66776eeeeeeee66776fccceeee67776eccccccc77776
    ....bdbbbdbfeeeeeec66eeeeeeeeeee66eeeeeeeeeee66eeeeecccccc66cccc
    .....bdddbfeeeeecff778eeeeeeccff77eeeeeeeeeee76eccccffffff76cccc
    ......bbcceeeccfc.67768........67768........67768........67768..
    ...................6776.........6776.........6776.........6776..
    ....................676..........676..........676..........676..
    .....................6............6............6............6...
    ................................................................
    ................................................................
    `, SpriteKind.log)
tiles.placeOnTile(log_1, tiles.getTileLocation(0, 3))
tiles.placeOnTile(log_2, tiles.getTileLocation(15, 4))
tiles.placeOnTile(log_3, tiles.getTileLocation(0, 5))
tiles.placeOnTile(log_4, tiles.getTileLocation(15, 6))
log_1.vx = 50
log_2.vx = -50
log_3.vx = 50
log_4.vx = -50
duck = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(duck)
scene.cameraFollowSprite(duck)
tiles.placeOnTile(duck, tiles.getTileLocation(7, 15))
forever(function () {
    if (car.x > scene.screenWidth() + 85) {
        tiles.placeOnTile(car, tiles.getTileLocation(0, 13))
    }
    if (car_2.x < 15) {
        tiles.placeOnTile(car_2, tiles.getTileLocation(15, 12))
    }
    if (car_3.x > scene.screenWidth() + 85) {
        tiles.placeOnTile(car_3, tiles.getTileLocation(0, 11))
    }
    log_1.setBounceOnWall(true)
    log_2.setBounceOnWall(true)
    log_3.setBounceOnWall(true)
    log_4.setBounceOnWall(true)
})
