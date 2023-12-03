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
            112.79610000000001]
   // let lat = [ -7.289123,
   //            -7.289123]
   //  let lon = [ 112.796941,
   //             112.796901
   //      ]

  for (let i = 0; i < lat.length; i++) {
        let latitude = lat[i];
        let longitude = lon[i];
        console.log(latitude);
        console.log(longitude);
        let model = document.createElement('a-entity');
        model.setAttribute('gps-new-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        // model.setAttribute('material', { color: 'blue' } );
        model.setAttribute('look-at', '[gps-new-camera]');
        // let id = 'target'+i;
        // let target = '#target'+(i-1);
        // model.setAttribute('id', id);
        // if (i != 0) {
        //     model.setAttribute('look-at', target);
        //     console.log(id);
        //     console.log(target);
        // } 
        model.setAttribute('gltf-model', '#animated-asset');
        model.setAttribute('animation-mixer', 'loop: repeat');
        model.setAttribute('scale', '0.6633601288757837 0.6633601288757837 0.6633601288757837');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });
        scene.appendChild(model);
    }
}
