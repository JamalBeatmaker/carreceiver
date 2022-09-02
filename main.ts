function right () {
    hackbitmotors.MotorRunDual(
    hackbitmotors.Motors.M1A,
    30,
    hackbitmotors.Motors.M1B,
    150
    )
}
function back () {
    hackbitmotors.MotorRunDual(
    hackbitmotors.Motors.M1A,
    -150,
    hackbitmotors.Motors.M1B,
    -150
    )
}
function front () {
    hackbitmotors.MotorRunDual(
    hackbitmotors.Motors.M1A,
    150,
    hackbitmotors.Motors.M1B,
    150
    )
}
function left () {
    hackbitmotors.MotorRunDual(
    hackbitmotors.Motors.M1A,
    150,
    hackbitmotors.Motors.M1B,
    30
    )
}
radio.onReceivedValue(function (name, value) {
    if (name == "U") {
        vU = value
        if (vU == 0) {
            front()
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
    } else if (name == "D") {
        vD = value
        if (vD == 0) {
            back()
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        }
    } else if (name == "L") {
        vL = value
        if (vL == 0) {
            left()
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        }
    } else if (name == "R") {
        vR = value
        if (vR == 0) {
            right()
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        }
    } else if (name == "M") {
        vM = value
        if (vM == 0) {
            hackbitmotors.MotorStopAll()
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . .
                `)
        }
    }
})
let vM = 0
let vR = 0
let vL = 0
let vD = 0
let vU = 0
radio.setGroup(101)
radio.setTransmitPower(6)
led.enable(true)
basic.clearScreen()
