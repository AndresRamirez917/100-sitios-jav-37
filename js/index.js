async function getData(){
    const result = await fetch('https://randomuser.me/api?results=3');
    const fakeUser = await result.json()
    console.log(fakeUser)
    fakeUser.results.forEach(element => {
        for(i = 0; i < 1; i++){
            if(element.id = "ella.kurpita@example.com"){
                const box = document.createRange().createContextualFragment(`
                    
                <div class="box box-1">
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
            }
        }
    });
}
getData()