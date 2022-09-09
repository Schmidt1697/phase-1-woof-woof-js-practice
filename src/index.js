
//get dog info from API
fetch('http://localhost:3000/pups')
.then(res => res.json())
.then(dogArr => {
    console.log(dogArr)
    dogArr.forEach(renderDogSpan);
});

//PATCH request
const updateIsGoodDog = (url, body) => {
    return fetch(url, {
        method: 'PATCH',
         headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
}

//create elements to go inside dog info container
const dogImg = document.createElement('img');
const h2 = document.createElement('h2');
const btn = document.createElement('button'); 



//add dog span to top dog-bar
const renderDogSpan = (dog) => {
    const dogBar = document.querySelector("#dog-bar")
    const dogSpan = document.createElement('span');

    //assign name from API dog obj.
    dogSpan.textContent = dog.name

    //add to DOM
    dogBar.append(dogSpan)

    //Event Listeners 
    dogSpan.addEventListener('click', (e) =>{
        const dogInfoContainer = document.querySelector("#dog-info");

        //assign previously created elements to have specific info from object
        dogImg.src = dog.image;
        h2.textContent = dog.name;
        
        //determine if good or bad dog before changing btn

        if(dog.isGoodDog){
            btn.textContent = "Good Dog!";
        }else {
            btn.textContent = "Bad Dog!";
        }

        //add new elements to dom
        dogInfoContainer.append(dogImg, h2, btn)

        //Add event listner to good/bad btn for each specific dog

        btn.addEventListener('click', () => {
            if(dog.isGoodDog){
                btn.textContent = "Bad Dog!";
                dog.isGoodDog = false;
                  
            }else if (dog.isGoodDog != true){
                btn.textContent = "Good Dog!";
                dog.isGoodDog = true;
            }
    
            updateIsGoodDog(`http://localhost:3000/pups/${dog.id}`, {isGoodDog: dog.isGoodDog})
            
         })

    })

    


}

//User clicks good/bad btn **
    //btn changes to opposite good or bad **
    //patch req to update dom that isGoodDog is changed to new value

    




