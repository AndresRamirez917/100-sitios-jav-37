async function getData(){
    const result = await fetch('https://randomuser.me/api?results=3');
    const fakeUser = await result.json()
    console.log(fakeUser)
    const arr = [1,2,3,4]
    fakeUser.results.forEach(element => {
        for(i = 0; i < 1; i++){
            //for(j = 1; j < arr.length; j++){
                const box = document.createRange().createContextualFragment(`
                    
                <div class="box box-${i}">
                    <img src="${element.picture.large}" alt="">
                    <h3>${element.name.first} ${element.name.last}</h3>
                    <h3>Age: ${element.dob.age}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea ducimus impedit provident, ad
                        dolorum totam. Iure, nisi veniam? Et adipisci itaque perferendis optio officiis reprehenderit.
                    </p>
                </div>
                                  
                    `)
                    const services_row = document.querySelector('.services-row');
                    services_row.append(box)
            //}
        }
    });
}

const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
    e.preventDefault()
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    const messageArr = ["Nombre", "Email", "Mensaje"];
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${messageArr[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false;
        }
    }
    if(!emailValido(email)){
        swal({
            title: `El campo ${messageArr[1]} no tiene el formato correcto`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
         nombre.value = "";
         email.value = "";
         mensaje.value = "";
         return true;
         
        }
        const emailValido = (email) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
        }

getData()