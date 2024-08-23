console.log('Spice is the mover')



let spice = 0;
let vacuumSquad = 0;
let tank = 0;



let clickUpgrades = [
  {
    name: 'Vacuum Squad',
    price: 10,
    quantity: 0,
    bonus: 1
  },
  {
    name: 'Vacuum Tank',
    price: 20,
    quantity: 0,
    bonus: 3

  }
];

let automaticUpgrades = [
  {
    name: 'Spice Enhancement',
    price: 40,
    quantity: 0,
    bonus: 6
  },
  {
    name: 'Autonomous Drone Tractor Section',
    price: 100,
    quantity: 0,
    bonus: 10

  }
];


drawUpgradeBonus()


function mine() {
  let bonus = calculateClickBonus()
  let autoBonus = calculateAutoUpgradeBonus()
  spice++
  spice += bonus + autoBonus

  drawSpice()
  console.log(`bonus`, bonus)
  console.log('autobonus', autoBonus)
  // if (clickUpgrades[0].quantity == '1') {
  //   console.log(clickUpgrades[0])
  //   spice
  // }
  // if (clickUpgrades[1].quantity == '1') {
  //   console.log(clickUpgrades[1])
  //   spice
  // }
  // console.log(spice)
}

function drawSpice() {
  let spiceElem = document.getElementById('spiceCollected')
  spiceElem.innerText = `Spice Collected: ${spice}`
  console.log('spice collected', spice)

}



function calculateClickBonus() {
  let clickBonus = 0
  for (let i = 0; i < clickUpgrades.length; i++) {
    let bonus = clickUpgrades[i].bonus
    let quantity = clickUpgrades[i].quantity
    let name = clickUpgrades[i].name
    console.log(name, bonus, quantity);

    clickBonus += bonus * quantity
  }
  console.log(clickBonus)
  // spice += clickBonus
  return clickBonus

}

function calculateAutoUpgradeBonus() {
  let autoBonus = 0
  for (let i = 0; i < automaticUpgrades.length; i++) {
    let bonus = automaticUpgrades[i].bonus
    let quantity = automaticUpgrades[i].quantity
    let name = automaticUpgrades[i].name
    console.log(name, bonus, quantity)

    autoBonus += bonus * quantity
  }
  console.log(autoBonus)
  return autoBonus
}



function buyVacuumSquad() {
  if (spice >= 10) {
    clickUpgrades[0].quantity += 1
    spice -= 10

  }
  console.log('vacuum squad deployed')
  drawSpice()
  drawUpgradeBonus()
}



function buyVacuumTank() {
  if (spice >= 20) {
    clickUpgrades[1].quantity += 1
    spice -= 20
  }
  console.log('vacuum tank deployed')
  drawSpice()
  drawUpgradeBonus()
}


function buySpiceEnhancement() {
  if (spice >= 40) {
    automaticUpgrades[0].quantity += 1
    spice -= 40

  }
  console.log(`spice enhancement activated`)
  drawSpice()
  drawAutoUpgrades()
}

function buyTractorSection() {
  if (spice >= 100) {
    automaticUpgrades[1].quantity += 1
    spice -= 100

  }
  console.log(`autonomous tractors deployed`)
  drawSpice()
  drawAutoUpgrades()
}




function drawUpgradeBonus() {
  let clickBonus = calculateClickBonus()
  let bonus = document.getElementById('upgradeBonus')
  bonus.innerHTML = `+ ${clickBonus}`


}

function drawAutoUpgrades() {
  let autoUpgrades = collectAutoUpgrades()
  let autoBonus = document.getElementById('autoUpgradeCounter')
  autoBonus.innerHTML = `+ ${autoUpgrades}`
}


// setInterval(collectAutoUpgrades, 3000);