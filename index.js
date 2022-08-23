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