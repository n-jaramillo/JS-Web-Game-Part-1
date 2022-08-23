function newImage(imgSrc, leftPosition, bottomPosition, z) {
    let image = document.createElement('img')
    image.src = 'assets/' + imgSrc
    image.style.position = 'fixed'
    image.style.left = leftPosition + 'px'
    image.style.bottom = bottomPosition + 'px'
    image.style.zIndex = z
    document.body.append(image)    
    return image
}

let greenCharacter = newImage('green-character.gif', 100, 100, 1)
let pineTree = newImage('pine-tree.png', 450, 200, 1)
let tree = newImage('tree.png', 200, 300, 1)
let pillar = newImage('pillar.png', 350, 100, 1)
let crate = newImage('crate.png', 150, 200, 1)
let well = newImage('well.png', 500, 425, 1)

function newItem(imgSrc, leftPosition, bottomPosition, z) {
    let item = newImage(imgSrc, leftPosition, bottomPosition, z)

    item.addEventListener('dblclick', function() {
        item.remove()
    })
}

let sword = newItem('sword.png', 500, 405, 1)
let shield = newItem('shield.png', 165, 185, 1)
let staff = newItem('staff.png', 600, 100, 1)


function newBackdrop(imgSrc, leftPosition, bottomPosition, width, height, z){
    for (let h = 0; h < height ; h++) {
        for (let w = 0; w < width; w++) {
            newImage(imgSrc, leftPosition + w * 100, bottomPosition + h * 100, z)
        }
    }
}

let grass = newBackdrop('grass.png', 0, 0, window.innerWidth / 100, (window.innerHeight / 100)/2, 0)
// let sky = newBackdrop('sky.png', 0, 0, window.innerWidth / 100, window.innerHeight / 100)