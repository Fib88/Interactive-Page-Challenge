(function (){
   /******PHOTO SLIDER******/
   let imageSources = [
       'pics/1.jpg',
       'pics/2.jpg',
       'pics/3.jpg',
       'pics/4.jpeg',
       'pics/5.jpeg'
   ];

    document.getElementById('next').addEventListener('click', ()=>{
        let imagePosition = findImagePosition(imageSources);
        let nextPosition;
        if(imagePosition === imageSources.length - 1){
            nextPosition = 0;
        } else {
            nextPosition = imagePosition + 1;
        }
        document.getElementById('picture').src = imageSources[nextPosition];
    })

    document.getElementById('previous').addEventListener('click', ()=>{
        let imagePosition = findImagePosition(imageSources);
        let prevPosition;
        if(imagePosition === 0){
            prevPosition = imageSources.length - 1;
        } else {
            prevPosition = imagePosition-1;
        }

        document.getElementById('picture').src = imageSources[prevPosition];
    })


    /****** TABS ******/
    const titleTabs = document.querySelectorAll('.tablinks');
    const contentTabs = document.querySelectorAll('.tabcontent');
    contentTabs.forEach(content => {
        content.style.display = 'none';
    })
    titleTabs.forEach((title, index) => {
        title.addEventListener('click', ()=>{
            contentTabs.forEach(content => {
                content.style.display = 'none';
            })
            contentTabs[index].style.display = 'block';
        })
    })

})()

function findImagePosition(imageSources)
{
    let pos = 0;

    imageSources.forEach((src,index) => {
        if(document.getElementById('picture').getAttribute('src') === src){
            pos = index;
        }
    })

    return pos;
}