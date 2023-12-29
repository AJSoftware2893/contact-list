const contact = ['jhon caicedo', 'pepe pérez', 'juan bautidta', 'karen zapata ']

const addContact = (newContact) => {
  contact.push(newContact)
}

const deleteContact = (contactDelete) => {
  contact.filter((e) => e === contactDelete)
}

const viewCotact = () => {
  contact.map((e) => {
    console.log(e)
  })
}
