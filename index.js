
import admin from "firebase-admin";

//hay que agregar el assert para que acepte el archivo json
import serviceAccount from "./llave.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const main = async () => {
    const db = admin.firestore()

    User = db.collection('users')
    Product = db.collection('products')

    try{
        //CREATE
        const newUser = User.doc() //esto genera un id automatico
        await newUser.create({nombre: 'Brian', apellido: 'Kavinoff'})

        const newUser2 = User.doc() //esto genera un id automatico
        await newUser2.create({nombre: 'Pepe', apellido: 'Rodriguez'})

        const newUser3 = User.doc() //esto genera un id automatico
        await newUser3.create({nombre: 'Martina', apellido: 'Perez'})

        const newProduct = Product.doc() //esto genera un id automatico
        await newProduct.create({nombre: 'Lapiz', precio: 150, stock: 200})

    } catch(ex) {
        console.log(ex)
    }

    try{
        //READ ALL Y POR ID
        const userSnapshot = await User.get()
        const userDoc = userSnapshot.docs

        const response = userDoc.map(user => ({
            id: user.id,
            nombre: user.data().nombre,
            apellido: user.data().apellido
        }))

        console.log(response)

        //const josefina = User.doc('ulVE9zLe5NYND8BKbUjs')
        //const josefinaDoc = await josefina.get()
        //const responseJose = josefinaDoc.data()

        //console.log(responseJose)
    } catch(ex) {
        console.log(ex)
    }

    try{
        //UPDATE
        //const pepito = User.doc('PIGJRqi1jO4fPvmR69Fh')
        //const pepitoUpdated = await pepito.update({ nombre: 'Juan' })

        //console.log('pepitoUpdated', pepitoUpdated)
    } catch(ex) {
        console.log(ex)
    }

    try{
        //DELETE
        //const martina = User.doc('E5LhswxcVU7ZhFrUj0sZ')
        //const deletedMartina = await martina.delete()

        //console.log('Usuario borrado de la DB', deletedMartina)
    } catch(ex) {
        console.log(ex)
    }
}

main()
