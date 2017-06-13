var map;
$(document).ready(function(){

    map = new GMaps({
        div: '#map',
        lat: 33.765523,
        lng: -84.371926,
    });
    map.addMarker({
        lat: 33.770678,
        lng: -84.365817,
        title: 'Address',
        infoWindow: {
            content: '<h5 class="title">Tetu Security</h5><p><span class="region">Address line goes here</span><br><span class="postal-code">Postcode</span><br><span class="country-name">Country</span></p>'
        }

    });

});
