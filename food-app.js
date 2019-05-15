//new york = 280
//los angeles = 281
//Las Vegas = 282
//Washington DC = 283
//miami = 291

function imageSection(data) {

    var restaurantS = data.restaurants;
    console.log(restaurantS)



    var imgHome = document.querySelector('.show_img');
    imgHome.innerHTML = ''

    for (i = 0; i < restaurantS.length; i++) {

        
        //        console.log(imgHome)
        var restaurantData = restaurantS[i].restaurant;
        //    console.log(restaurantData)
        var immLink = restaurantS[i].restaurant.featured_image;

        var restaurantName = restaurantData.name;
        console.log(restaurantName)


        
        var imgDiv = document.createElement('div');
        imgDiv.setAttribute('class', 'boxes_img card text-white');
        
        var linkImg = document.createElement('img');
        //    console.log(linkImg);
        
        linkImg.setAttribute('class', 'imgs_class');

        linkImg.setAttribute('src', immLink);
        
        var divTextImg = document.createElement('div');
        
        divTextImg.setAttribute('class', 'card-img-overlay');
        
        var textImg = document.createElement('p');
        textImg.setAttribute('class', 'card-text rest_name');
        
        textImg.innerHTML = restaurantName;
        
        divTextImg.appendChild(textImg);
        
        
        imgDiv.appendChild(divTextImg);
        
        imgDiv.appendChild(linkImg);

        
        imgHome.appendChild(imgDiv);

        console.log();
    }
}



var filterSelect = document.querySelector('.select_city');
console.log(filterSelect)
filterSelect.addEventListener('change', function () {
    //    console.log('in onchange')

    var options = filterSelect.querySelector('option');
    //    var count = options.length;
    //    console.log(options)


    if (filterSelect.value == 'new_york') {
        fetchData('280')


    } else if (filterSelect.value == 'los_angeles') {
        fetchData('281')
    } else if (filterSelect.value == 'miami') {
        fetchData('291')
    } else if (filterSelect.value == 'las_vegas') {
        fetchData('282')
    } else if (filterSelect.value == 'washington') {
        fetchData('283')
    } else if (filterSelect.value == 'select') {
        
    
        
    }
})



function fetchData(id) {
    const url = 'https://developers.zomato.com/api/v2.1/search?entity_id=' + id + '&entity_type=city&count=50';
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'

    fetch(proxyUrl + url, {

            headers: {
                'user-key': '8b84ccd1a11a50818a61688023d29f49',

            }
        }) // Call the fetch function passing the url of the API as a parameter
        .then(function (response) {
            console.log(response)
            return response.json();
            // Your code for handling the data you get from the API
            showImages(data)


        })
        .then(function (data) {
            console.log(data.restaurants[0]);

            imageSection(data)


        })
        .catch(err => console.log(err));

}
