// Primon Proto 
// Headless WebSocket, type-safe Whatsapp Bot
// 
// Primon, lisanced under GNU GENERAL PUBLIC LICENSE. May cause some warranity problems, within Priomon.
// Multi-Device Lightweight ES5 Module (can usable with mjs)
//
// Phaticusthiccy - 2022


const fs = require("fs")
require('util').inspect.defaultOptions.depth = null
var shell = require("shelljs")
async function save2() {
  var sn = ""
  var name = Buffer.from(process.env.SESSION5, "base64").toString()
  var sn3 = name.split("&&&&&&&")
  var sn4 = []
  sn3.map((Element) => {
    if (Element !== "" || Element !== " ") {
      sn4.push(Element)
    } 
  })
  console.log(sn4)
  var sayac = 0
  sn = Buffer.from(process.env.SESSION + process.env.SESSION2 + process.env.SESSION3 + process.env.SESSION4, "base64").toString()
  var sn2 = sn.split("&&&&&&&")
  console.log(sn2)
  sn2.forEach((Element) => {
    if (Element !== "" || Element !== " ") {
      // fs.writeFileSync("session/" + sn4[sayac], Element)
      shell.exec('cd session && echo ' + Element + ' > ' + sn4[sayac])
    }
    sayac = sayac + 1
  })
  console.log("Primon Session Updated!")
  try {
    fs.unlinkSync("./session/test.txt")
  } catch {}
  return true
}
save2()