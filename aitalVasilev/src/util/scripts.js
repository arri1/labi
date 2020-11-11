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
        '/360/740?grayscale'
    )
}

export { randomImage }
