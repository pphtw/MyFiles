
function isImageFileExtension(fileName){
    if (fileName === undefined || fileName === null){
        return false
    }

    //includes
    const png = '.png'
    const jpg = '.jpg'
    const jpeg = '.jpeg'
    const gif = '.gif'
    const svg = '.svg'

    // return (fileName.includes(png) || fileName.includes(jpg) || fileName.includes(jpeg) || fileName.includes(gif) || fileName.includes(svg))? true : false

    //endWith

    return fileName.endsWith(png) || fileName.endsWith(jpg) || fileName.endsWith(jpeg) || fileName.endsWith(gif) || fileName.endsWith(svg)



}





console.log(isImageFileExtension('sample.jpeg'))
console.log(isImageFileExtension('myPic.jpg'))
console.log(isImageFileExtension('product.gif'))
console.log(isImageFileExtension('img.svg'))
console.log(isImageFileExtension('student.png'))
console.log(isImageFileExtension('x.doc'))
console.log(isImageFileExtension('y.pdf'))
console.log(isImageFileExtension(null))
console.log(isImageFileExtension(undefined))