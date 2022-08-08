input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(1)
    basic.showNumber(2)
    basic.showNumber(3)
    basic.clearScreen()
    running = false
    false_start = false
    basic.pause(1000 + randint(0, 2000))
    if (false_start) {
        start = input.runningTime()
        running = true
        led.stopAnimation()
        basic.clearScreen()
        led.plot(randint(0, 4), randint(0, 4))
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (running) {
        running = false
        end = input.runningTime()
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
        basic.pause(1000)
        basic.showNumber(end - start)
    } else {
        false_start = true
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . # . .
                . . # # .
                . . # # #
                . . # # .
                . . # . .
                `)
            music.playMelody("C D - - - - - - ", 500)
            basic.clearScreen()
            basic.pause(500)
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (running) {
        running = false
        end = input.runningTime()
        basic.showLeds(`
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.pause(1000)
        basic.showNumber(end - start)
    } else {
        false_start = true
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # . .
                . # # . .
                . . # . .
                `)
            music.playMelody("C5 B - - - - - - ", 500)
            basic.clearScreen()
            basic.pause(500)
        }
    }
})
let end = 0
let start = 0
let false_start = false
let running = false
running = false
false_start = false
start = 0
end = 0
