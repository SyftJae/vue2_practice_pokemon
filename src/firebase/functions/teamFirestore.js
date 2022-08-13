import { db } from '../index.js'
import { collection, query, getDocs, deleteDoc, doc, setDoc } from 'firebase/firestore'

const teamFirestore = {
  teamRef: collection(db, 'team'),

  addPokemonToTeam: async function(pokemon) {
    let docRef = doc(this.teamRef)
    let relevantData = {
      docId: docRef.id,
      id: pokemon.id,
      name: pokemon.name,
      nickname: "",
      types: pokemon.types,
      sprites: pokemon.sprites
    }
    let doc = await setDoc(docRef, { ...relevantData })
    return {
      ...relevantData,
      "docId": doc.id
    }
  },

  removePokemonFromTeam: async function(pokemon) {
    const pokeRef = doc(this.teamRef, pokemon.docId)
    await deleteDoc(pokeRef)
  },     

  getTeam: async function() {
    let q = query(this.teamRef)
    return await getDocs(q)
  }, 
}

export default teamFirestore