

export default function makeid(length) {
    var resulte = ''
    var characters = 'AABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length;
    for(var i = 0; i < length;i++){
        resulte+= characters.charAt(Math.floor(Math.random()*charactersLength))
    }
    return resulte
}
