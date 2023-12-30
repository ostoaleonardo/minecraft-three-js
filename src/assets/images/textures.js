import { dirtImg, glassImg, grassImg, logImg, woodImg } from './images.js'
import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

const dirtTexture = new TextureLoader().load(dirtImg)
const glassTexture = new TextureLoader().load(glassImg)
const grassTexture = new TextureLoader().load(grassImg)
const logTexture = new TextureLoader().load(logImg)
const woodTexture = new TextureLoader().load(woodImg)

grassTexture.wrapS = RepeatWrapping
grassTexture.wrapT = RepeatWrapping

dirtTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter

export {
    dirtTexture,
    glassTexture,
    grassTexture,
    logTexture,
    woodTexture
}
