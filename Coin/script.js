document.getElementById('list').addEventListener('click', function(){
    document.getElementById('list-dropdown').classList.toggle("hidden")
});


const buttonScroll = document.getElementById('buttonScroll');

buttonScroll.addEventListener('click', function(){
    // window.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior: "smooth"
    // });

    window.scrollTo(0, 0);
});


