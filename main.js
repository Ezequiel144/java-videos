const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const video = document.querySelector(".video");
const title = document.querySelector(".title");
const text = document.querySelector(".text");

let cont = 0;

const lugares = [
    {
        title : "Argentina",
        dir : "production ID_4911890.mp4",
    },
    {
        title : "Canada",
        dir : "pexels-morteza-khaleghi-6431722.mp4",
    },
    {
        title : "Tokio",
        dir : "production ID_3942468.mp4",
    },
    {
        title : "Noruega",
        dir : "pexels-nicolas-becker-5700949.mp4",
    },
]


previous.addEventListener("click",()=>{
    if(cont < 1){
        cont = 3;
    }
    else{
        cont--;
    }
    video.src = "./videos/" + lugares[cont].dir;
    title.textContent = lugares[cont].title;
    text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in dolorem at aperiam quam cumque consequatur quas incidunt sunt autem excepturi corrupti, quo tenetur error numquam labore adipisci hic vero!';
})

next.addEventListener("click",()=>{
    if(cont > 2){
        cont = 0;
    }
    else{
        cont++;
    }
    video.src = "./videos/" + lugares[cont].dir;
    title.textContent = lugares[cont].title;
    text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in dolorem at aperiam quam cumque consequatur quas incidunt sunt autem excepturi corrupti, quo tenetur error numquam labore adipisci hic vero!';
})