const randomString = (length) => {
    var result = ''
    var characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(
                Math.random() * charactersLength
            )
        )
    }
    return result
}

const randomImage = (length) => {
    return (
        'https://picsum.photos/seed/' +
        randomString(length) +
        '/360/740?grayscale&blur=2'
    )
}

const getFirstLetter = (text) => {
    if (text) return text[0]
}

const numberFromString = (text) => {
    var sum = 0
    for (var i = 0; i < text.length; i++) {
        sum += text.charCodeAt(i)
    }
    return sum
}

const randomColor = (seed) => {
    if (seed) {
        var colorHex

        colorHex =
            '#' +
            Math.floor(
                Math.abs(
                    Math.sin(
                        numberFromString(seed) +
                            21
                    ) * 16777215
                ) % 16777215
            ).toString(16)
        if (colorHex.length === 7) return colorHex
        else return '#000000'
    }
}

export {
    randomImage,
    getFirstLetter,
    randomColor
}
