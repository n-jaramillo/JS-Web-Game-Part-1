function newImage(imgSrc, leftPosition, bottomPosition) {
    let image = document.createElement('img')
    image.src = 'assets/' + imgSrc
    image.style.position = 'fixed'
    image.style.left = leftPosition + 'px'
    image.style.bottom = bottomPosition + 'px'
    document.body.append(image)    
    return image
}

let greenCharacter = newImage('green-character.gif', 100, 100)
let pineTree = newImage('pine-tree.png', 450, 200)
let tree = newImage('tree.png', 200, 300)
let pillar = newImage('pillar.png', 350, 100)
let crate = newImage('crate.png', 150, 200)
let well = newImage('well.png', 500, 425)


function newItem(imgSrc, leftPosition, bottomPosition) {
    let item = newImage(imgSrc, leftPosition, bottomPosition)

    item.addEventListener('click', function() {
        item.remove()
    })
}

let sword = newItem('sword.png', 500, 405)