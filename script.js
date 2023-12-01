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
   let lat = [ -7.289123,
              -7.289123]
    let lon = [ 112.796941,
               112.796901
        ]

   
    // let latitude = lat[i];
    // let longitude = lon[i];

    let model = document.createElement('a-entity');
    model.setAttribute('gps-new-entity-place', `latitude: -7.289123; longitude: 112.796941;`);
    // model.setAttribute('material', { color: 'blue' } );
    model.setAttribute('id', 'target')
    model.setAttribute('look-at', '[gps-new-camera]')
    model.setAttribute('gltf-model', '#animated-asset');
    model.setAttribute('animation-mixer', 'loop: repeat');
    model.setAttribute('scale', '0.5 0.5 0.5');

    model.addEventListener('loaded', () => {
        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
    });

    scene.appendChild(model);

    let model = document.createElement('a-entity');
    model.setAttribute('gps-new-entity-place', `latitude: -7.289123; longitude: 112.796901;`);
    // model.setAttribute('material', { color: 'blue' } );
    model.setAttribute('id', 'target1')
    model.setAttribute('look-at', '#target')
    model.setAttribute('gltf-model', '#animated-asset');
    model.setAttribute('animation-mixer', 'loop: repeat');
    model.setAttribute('scale', '0.5 0.5 0.5');

    model.addEventListener('loaded', () => {
        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
    });

    scene.appendChild(model);
   
}
