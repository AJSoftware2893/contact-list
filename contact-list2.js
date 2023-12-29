let contact = [
    {
      nombre: 'jhon',
      apellido: 'caicedo',
      telefono: 31154565,
      ubicaciones: { ciudad: 'florencia', direccion: ' cra 17 # 10-36' },
    },
    {
      nombre: 'pepe',
      apellido: 'perez',
      telefono: 31154565,
      ubicaciones: { ciudad: 'florencia', direccion: ' cra 17 # 10-36' },
    },
    {
      nombre: 'julio',
      apellido: 'acevedo',
      telefono: 31154565,
      ubicaciones: { ciudad: 'florencia', direccion: ' cra 17 # 10-36' },
    },
    {
      nombre: 'cesar',
      apellido: 'marin',
      telefono: 31154565,
      ubicaciones: { ciudad: 'florencia', direccion: ' cra 17 # 10-36' },
    },
  ]
  
  const addContact = (newContact) => {
    contact.push(newContact)
  }
  
  const deleteContact = (contactDelete) => {
    let newContact = contact.filter((e) => {
      return e.nombre !== contactDelete
    })
    contact = newContact
  }
  
  const updateContact = (nombre, newContact) => {
    contact.map((e, i) => {
      if (e.nombre === nombre) {
        contact[i] = newContact
      }
    })
  }
  
  const viewCotact = () => {
    contact.map((e) => {
      console.log(e)
    })
  }
  
  viewCotact()
  
  addContact({
    nombre: 'julian',
    apellido: 'careño',
    telefono: 31154565,
    ubicaciones: { ciudad: 'florencia', direccion: ' cra 17 # 10-36' },
  })
  
  viewCotact()
  
  updateContact('jhon', {
    nombre: 'jualian',
    apellido: 'balanta',
    telefono: 31154565,
    ubicaciones: { ciudad: 'santamarta', direccion: ' cra 17 # 10-36' },
  })
  
  viewCotact()