export function faq(){ 
    //FAQ
    document.querySelectorAll('.questions__question-title').forEach((elem) =>{
        elem.addEventListener('click', async() =>{
            let question = elem.parentElement.querySelector('.questions__question-content')
            let sign = elem.querySelector('.questions__question-sign')
            if(question.classList.contains('inactive')){
                elem.parentElement.parentElement.querySelectorAll('.questions__question-content.active').forEach((button)=>{
                    button.classList.replace("active", "inactive"); 
                    button.parentElement.querySelector('.questions__question-sign').innerHTML = "+"                                   
                })
                
                question.classList.replace('inactive', 'active')
                sign.innerHTML = "-"
            }
            else{    
                question.classList.replace('active', 'inactive')
                sign.innerHTML = "+"
            }
        
        })
    })
}