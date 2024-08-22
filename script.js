

document.querySelectorAll('.images-container img').forEach(photo =>
{
    photo.onclick = () =>
    {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = photo.getAttribute('src') 
    }
});

document.querySelector('.popup-image span').onclick = ()=>{
    document.querySelector('.popup-image').style.display = 'none';
}