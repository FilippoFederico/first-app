//new york = 280
//los angeles = 281
//Las Vegas = 282
//Washington DC = 283
//miami = 291
//document.querySelector('.home_page').style.display ='none';
document.querySelector('.main_home').style.display ='block';
document.querySelector('.main_home').style.height ='667px';
document.querySelector('.body_page').style.display ='block';
document.querySelector('.map_page').style.display ='block';

console.log('start')
function imageSection(data) {

    var restaurantS = data.restaurants;
    console.log(restaurantS)



    var imgHome = document.querySelector('.show_img');
    imgHome.innerHTML = ''

    for (i = 0; i < restaurantS.length; i++) {


        //        console.log(imgHome)
        var restaurantData = restaurantS[i].restaurant;

        var restaurantsId = restaurantS[i].restaurant.id;
        //        console.log(restaurantsId)

        var immLink = restaurantS[i].restaurant.featured_image;
        //        console.log(immLink)

        var restaurantName = restaurantData.name;




        var imgDiv = document.createElement('div');
        imgDiv.setAttribute('class', 'boxes_img card text-white');
//        console.log(imgDiv);
        imgDiv.addEventListener('click', function () {
            fetchRestaurant(event.target.id);
            hideShowDetailPage()
        });

        var linkImg = document.createElement('img');
        //    console.log(linkImg);

        linkImg.setAttribute('class', 'imgs_class');

        linkImg.setAttribute('src', immLink);

        var divTextImg = document.createElement('div');

        divTextImg.setAttribute('class', 'card-img-overlay');
        divTextImg.setAttribute('id', restaurantsId);

        var textImg = document.createElement('p');
        textImg.setAttribute('class', 'card-text rest_name');


        textImg.innerHTML = restaurantName;

        divTextImg.appendChild(textImg);


        imgDiv.appendChild(divTextImg);

        imgDiv.appendChild(linkImg);


        imgHome.appendChild(imgDiv);
        //        console.log(imgDiv)

    }
//    hideHomePage()


}



var filterSelect = document.querySelector('#select_city');
//console.log(filterSelect)
filterSelect.addEventListener('change', function (event) {
    //    console.log('in onchange')

    var options = filterSelect.querySelector('option');
    //    var count = options.length;




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
        var imgHome = document.querySelector('.show_img');
        imgHome
    }
})



function fetchData(id) {
    const url = 'https://developers.zomato.com/api/v2.1/search?entity_id=' + id + '&entity_type=city&count=6';
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

//var clickOnImg = document.querySelector('.btn_on_image');
//console.log(clickOnImg)
//clickOnImg.innerHTML = 'ciao'
//clickOnImg.addEventListener('click', displayInfo());
//
//
//function displayInfo() {
//  document.querySelector('.btn_on_image').innerHTML = 'ciaociao';
//}

function hideShowMenu() {

    var x = document.querySelector('.dropdown-menu');
    if (x.style.display === "none") {
        x.style.display = "block";
        
    } else {
        x.style.display = "none";
    }

}

hideShowMenu()

function hideShowDetailPage() {

    var homePage = document.querySelector('.home_page');
    var restPageDetail = document.querySelector('.restaurant_page');
    var detailPage = document.querySelector('.body_page');
    var mapPage = document.querySelector('.map_page');
    //  console.log(homePage.style)
    
    if (detailPage.style.display === "none"){
        
        document.querySelector('.main_home').style.height ='';
        homePage.style.display === "none";
        detailPage.style.display = "block";
        
        
        console.log('block')
    }
//    else {
//        homePage.style.display === "block";
//        
//        console.log('none2')
//    }
}
    
function hideShowMapBtn() {

    var btnMap = document.querySelector('.map_info');
    console.log(btnMap);
    var detailPage = document.querySelector('.body_page');
    var mapPage = document.querySelector('.map_page');
    if (mapPage.style.display === "none") {
        
        mapPage.style.display === "block";
        
    } else {
        mapPage.style.display = "none";
    }

}


//    if (detailPage.style.display === "none") {
//        detailPage.style.display = "block";
//        
//    } else {
//        detailPage.style.display = "none";
//    }




//function hideHomePage() {
//
//    var x = document.querySelector('.show_img');
//    if (x.style.display === "none") {
//        x.style.display = "block";
//    } else {
//        x.style.display = "none";
//    }
//
//}





//
//function clickForInfo(event) {
//    console.log(event)
//    //    var imgsClick = document.querySelector('.boxes_img');
//    //    console.log(imgsClick)
//    //    var idImages = imgsClick.id;
//    //    //    console.log(data.restaurants[0].restaurant.id)
//    //
//    //    var iD = data.restaurants[0].restaurant.id
//    //    //    if(idImages === iD){
//    //    //        var nameDetail = document.querySelector('name_detail');
//    //    //        nameDetail.appendChild(iD)
//    //    //}
//    //
//fetchRestaurant(event.target.id)
//
//}



function fetchRestaurant(id) {

    const urlRest = 'https://developers.zomato.com/api/v2.1/restaurant?res_id=' + id;
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'

    fetch(proxyUrl + urlRest, {

            headers: {
                'user-key': '8b84ccd1a11a50818a61688023d29f49',

            }
        }) // Call the fetch function passing the url of the API as a parameter
        .then(function (response) {
            console.log(response)
            return response.json();
            // Your code for handling the data you get from the API

console.log(urlRest);

        })
        .then(function (data) {
                        console.log(data);
            
var nameDetail = document.querySelector('.name_detail');
        nameDetail.innerHTML = data.name;
//        console.log(nameDetail)
        
        var cuisineDetail = document.querySelector('.cuisines_detail');
        cuisineDetail.innerHTML = 'Cuisine: ' + data.cuisines.italics().bold();
        
        var localityDetail = document.querySelector('.locality_detail');
        localityDetail.innerHTML = 'Locality: ' + data.location.locality_verbose.italics().bold();
        
        var rateDetail = document.querySelector('.rate_detail');
        rateDetail.innerHTML = 'Rate: ' + data.user_rating.aggregate_rating.italics().bold();
        
        var textDetail = document.querySelector('.text_detail');
        textDetail.innerHTML = 'About us: ' + data.user_rating.rating_text.italics().bold();
        
        var imgDetail = document.querySelector('.img_detail');
        imgDetail.setAttribute('src', data.featured_image);

        var addressDetail = document.querySelector('.address_detail');
        addressDetail.innerHTML = 'Our address: ' + data.location.address.italics().bold();
        
        var localityDetail2 = document.querySelector('.local_detail');
        localityDetail2.innerHTML = 'Locality: ' + data.location.locality_verbose.italics().bold();
        
        var nameDetail2 = document.querySelector('.name_d');
        nameDetail2.innerHTML = data.name;

        })
        .catch(err => console.log(err));

}








