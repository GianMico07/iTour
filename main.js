const panoImage = document.querySelector('.con');

const panorama = new PANOLENS.ImagePanorama('/r.jpeg');
const viewer = new PANOLENS.Viewer({
    container: panoImage,
    autoRotate: true,
    autoRotateSpeed: 0.3

});

viewer.add( panorama );