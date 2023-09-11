export function initFooter(){ 
    document.querySelector('.footer__blocks-block.expand').addEventListener('click', (el) =>{
        document.querySelectorAll('.footer__blocks-block.close').forEach((elem) =>{
            elem.classList.replace('close', 'open')
            document.querySelector('.footer__blocks-block.expand').style.display = "none"
        })
    })
    document.querySelector('.footer__blocks-block.collapse').addEventListener('click', (el) =>{
        document.querySelectorAll('.footer__blocks-block.open').forEach((elem) =>{
            elem.classList.replace('open', 'close')
            document.querySelector('.footer__blocks-block.expand').style.display = "flex"
        })
    })
}