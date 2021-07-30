maqueen.IR_callbackUser(function (message) {
    if (message == 64) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
    if (message == 25) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    }
    if (message == 9) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
    if (message == 7) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    }
    if (message == 21) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (message == 12) {
        strip.showColor(neopixel.rgb(240, 0, 0))
    }
    if (message == 24) {
        strip.showColor(neopixel.rgb(255, 111, 0))
    }
    if (message == 94) {
        strip.showColor(neopixel.rgb(115, 200, 0))
    }
    if (message == 8) {
        strip.showColor(neopixel.rgb(0, 255, 0))
    }
    if (message == 28) {
        strip.showColor(neopixel.rgb(0, 255, 50))
    }
    if (message == 90) {
        strip.showColor(neopixel.rgb(0, 0, 139))
    }
    if (message == 66) {
        strip.showColor(neopixel.rgb(111, 0, 166))
    }
    if (message == 82) {
        strip.showColor(neopixel.rgb(255, 0, 162))
    }
    if (message == 74) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
    if (message == 22) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
