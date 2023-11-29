window.onload = () => {
    // let places = staticLoadPlaces();
    renderPlaces();
};

// function staticLoadPlaces() {
//    return [
//        {
//            name: 'Magnemite',
//            location: {
//                lat: -7.289254,
//                lng: 112.796860,
//            }
//        },
//    ];
// }

function renderPlaces() {
   let scene = document.querySelector('a-scene');
   let lat = [-7.289210000000001,
            -7.289070000000001,
            -7.2889800000000005,
            -7.2889800000000005,
            -7.289020000000001,
            -7.289040000000001,
            -7.289090000000001,
            -7.289650000000001,
            -7.28997]
    let lon = [112.79693,
            112.79690000000001,
            112.79687000000001,
            112.79683000000001,
            112.79648,
            112.79631,
            112.79598000000001,
            112.79606000000001,
            112.79610000000001
        ]

   for (let i = 0; i < lat.length; i++) {
    const element = array[i];
    let latitude = lat[i];
    let longitude = lon[i];

    let model = document.createElement('a-box');
    model.setAttribute('gps-new-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
    model.setAttribute('material', { color: 'blue' } );
    model.setAttribute('scale', '0.5 0.5 0.5');

    model.addEventListener('loaded', () => {
        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
    });

    scene.appendChild(model);
   }
}
