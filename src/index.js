import "./css/style.css"; //importing css

const modal = document.querySelector(".modal");
const close = document.querySelector('.close');

const Promise = async () =>{
    setTimeout(() => {
        modal.style.display = 'block';
        close.style.cursor = 'pointer';
    }, 2000);
    close.onclick = () => {
        modal.style.display = 'none';
    }
}

Promise()