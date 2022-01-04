let score = document.querySelector(".score")
let stratScreen = document.querySelector(".startScreen")
let gameArea = document.querySelector(".gameArea ")

stratScreen.addEventListener('click',start)
document.addEventListener('keydown',pressOn)
document.addEventListener('keyup',pressOff)

const keys={ArrowUp:false,
            ArrowDown:false,
            ArrowLeft:false,
            ArrowRight:false}
let player ={speed:5}    


function movelines(){
    let lines = document.querySelectorAll(".line")
    lines.forEach(function(item){
        // console.log(item.y)
        if(item.y>=800){
            item.y = -800
        }
        item.y += player.speed;
        item.style.top = item.y + "px"

    })
}

function enemyMoves(){
    let ene = document.querySelectorAll(".enemy")
    ene.forEach(function(item){
        if(item.y>=1000){
            item.y = -500
        }
        item.y += player.speed;
        item.style.top = item.y + "px"
        
    })

}







function playGame(){
    // console.log("lets play")
    movelines()
    enemyMoves()
    let road = gameArea.getBoundingClientRect()
    let car = document.querySelector(".car")
    // con    // console.log(road)
// sole.log(road)
    if(player.start){
        if(keys.ArrowUp && player.y>road.top){
            player.y -= player.speed
        }
        if(keys.ArrowDown && player.y<road.bottom){
            player.y +=player.speed
        }
        if(keys.ArrowLeft && player.x > 0){
            player.x -=player.speed
        }
        if(keys.ArrowRight && player.x<road.width-55){
            player.x +=player.speed
        }
        car.style.left = player.x + 'px'
        car.style.top = player.y + 'px'

    window.requestAnimationFrame(playGame)
    }
}

function pressOn(e){
    // console.log(e.key + " is pressed")
    keys[e.key]=true
    // console.log(keys)
}
function pressOff(e){
    // console.log(e.key + " is released")
    keys[e.key]=false
    // console.log(keys)
}
function start(){
    stratScreen.classList.add("hide")
    gameArea.classList.remove("hide")
    // console.log("start")
    player.start=true
    //diplay the lines on road
    for(let i=0;i<5;i++){
        let div = document.createElement("div")
        div.setAttribute("class","line")
        div.style.top= i*150 + "px"
        div.style.left="240px"
        gameArea.appendChild(div)


    }
    window.requestAnimationFrame(playGame)
    let car = document.createElement("div")
    car.setAttribute("class","car")
    car.innerText="car"
    gameArea.appendChild(car)
    player.x = car.offsetLeft
    player.y = car.offsetTop
    // console.log(player)

    for(i=0;i<3;i++){
        let enemy = document.createElement("div")
        enemy.setAttribute("class","enemy")
        enemy.y =(i+1)*800*-1
        enemy.style.top = enemy.y + "px"
        enemy.style.left = Math.floor(Math.random()*300) +" px"
        enemy.style.backgroundColor="blue"
        gameArea.appendChild(enemy)

        
    }

}