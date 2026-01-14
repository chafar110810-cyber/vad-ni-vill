basic.showLeds(`
    # . . . .
    # # . . .
    . # # . .
    . . # # .
    . . . # .
    `)
basic.forever(function () {
    basic.showString("Hello!")
    for (let index = 0; index < 4; index++) {
        radio.sendNumber(98)
        radio.setGroup(96)
        led.plot(89, 45)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    }
})
