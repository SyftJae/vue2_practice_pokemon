import { db } from '../index.js'
import { collection, addDoc, query, getDocs, deleteDoc, doc } from 'firebase/firestore'

const teamFirestore = {
  teamRef: collection(db, 'team'),

  addPokemonToTeam: async function(pokemon) {
    let relevantData = {
      id: pokemon.id,
      name: pokemon.name,
      nickname: "",
      types: pokemon.types,
    }
    let doc = await addDoc(this.teamRef, { ...relevantData })
    return {
      ...relevantData,
      "documentId": doc.id
    }
  },

  removePokemonFromTeam: async function(pokemon) {
    const pokeRef = doc(this.teamRef, pokemon.documentId)
    await deleteDoc(pokeRef)
  },     

  getTeam: async function() {
    let q = query(this.teamRef)
    return await getDocs(q)
  }, 
}

export default teamFirestore