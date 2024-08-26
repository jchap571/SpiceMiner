console.log('Spice is the mover')

let spice = 0;


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
  // NOTE IDK WHAT I WAS DOING HERE
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

    clickBonus += (bonus * quantity)
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


// function to buy an on click bonus to mine
function buyVacuumSquad() {
  if (spice >= 10) {
    clickUpgrades[0].quantity += 1
    spice -= 10
    clickUpgrades[0].price += 5
    console.log('vacuum squad deployed')
    drawSpice()
    drawUpgradeBonus()
  }

}




// function to buy an on click bonus to mine
function buyVacuumTank() {
  if (spice >= 20) {
    clickUpgrades[1].quantity += 1
    spice -= 20
    clickUpgrades[1].price += 10
    console.log('vacuum tank deployed')
    drawSpice()
    drawUpgradeBonus()
  }

}

// function to buy auto enhancement for auto mining on interval
function buySpiceEnhancement() {
  if (spice >= 40) {
    automaticUpgrades[0].quantity += 1
    spice -= 40

  }
  automaticUpgrades[0].price += 20
  console.log(`spice enhancement activated`)
  drawSpice()
  drawAutoUpgrades()
}

// function to buy autonomous enhancement for auto mining on interval
function buyTractorSection() {
  if (spice >= 100) {
    automaticUpgrades[1].quantity += 1
    spice -= 100

  }
  automaticUpgrades[1].price += 150

  console.log(`autonomous tractors deployed`)
  drawSpice()
  drawAutoUpgrades()
}

// draws click upgrades purchased to the document in the counter, to let you know click bonus
function drawUpgradeBonus() {

  let clickBonus = calculateClickBonus()
  console.log(clickBonus)
  let bonus = document.getElementById('upgradeBonus')
  bonus.innerHTML = `+ ${clickBonus + 1}`
  let clickUp = null
  let clickUpQuantity = null
  let clickUpBonus = null


  // add draw to click stats section of the document
  let clickUpGradesSquadQuan = clickUpgrades[0].quantity
  let clickUpGradesSquadBon = clickUpgrades[0].bonus
  let clickUpgradeQuanBon = clickUpGradesSquadBon * clickUpGradesSquadQuan
  console.log(clickUpGradesSquadBon, clickUpGradesSquadQuan)
  let clickUpgradesTankQuan = clickUpgrades[1].quantity
  let clickUpgradesTankBon = clickUpgrades[1].bonus
  let clickUpgradesTanQuanBon = clickUpgradesTankQuan * clickUpgradesTankBon


  let clickStatsSquad = document.getElementById('click-stats-vacuum')
  clickStatsSquad.innerText = `+ ${clickUpGradesSquadQuan} Squads +${clickUpgradeQuanBon} Bonus`
  let clickStatsTank = document.getElementById('click-stats-tank')
  clickStatsTank.innerText = `+ ${clickUpgradesTankQuan} Tanks + ${clickUpgradesTankQuan} Bonus`
}


// draws auto upgrades purchased to the document in the counter, to let you know auto bonus on interval
function drawAutoUpgrades() {
  let autoUpgrades = calculateAutoUpgradeBonus()
  let autoBonus = document.getElementById('autoUpgradeCounter')
  autoBonus.innerHTML = `+ ${autoUpgrades}`
  // NOTE DID SOMETHING WRONG HERE WITH VARIABLES THAT AREN'T BEING USED

  //   let currentAutoUpgrades = automaticUpgrades[i]
  // //   let currentAutoUpgradesQuantity = currentAutoUpgrades.quantity
  // //   let currentAutoUpgradesBonus = currentAutoUpgrades.bonus

  // }
  // // add draw to auto stats section of document
  // let  = document.getElementById('click-stats-tank')
  // .innerText = `+ ${currentAutoUpgradesQuantity} Squads +${currentAutoUpgradesBonus} Bonus`
}


// applies 
function collectAutoUpgrades() {
  for (let i = 0; i < automaticUpgrades.length; i++) {
    let currentAutoUpgrades = automaticUpgrades[i]
    let currentAutoUpgradesQuantity = currentAutoUpgrades.quantity
    let currentAutoUpgradesBonus = currentAutoUpgrades.bonus
    spice += currentAutoUpgradesQuantity * currentAutoUpgradesBonus
  }

  drawAutoUpgrades()
  drawSpice()
}

setInterval(collectAutoUpgrades, 3000);