

export function mask(){
  if(document.getElementById('callback-form__form-phone')){
    IMask(
        document.getElementById('callback-form__form-phone'),
        {
          mask: '+{7}(000)000-00-00'
        }
    )
  }
  if(document.getElementById('question-form__form-phone')){
    IMask(
        document.getElementById('question-form__form-phone'),
        {
          mask: '+{7}(000)000-00-00'
        }
    )
  }
  if(document.getElementById('calculation-form__form-phone')){
    IMask(
        document.getElementById('calculation-form__form-phone'),
        {
          mask: '+{7}(000)000-00-00'
        }
    )
  }
  if(document.getElementById('application-form__form-phone')){
    IMask(
        document.getElementById('application-form__form-phone'),
        {
          mask: '+{7}(000)000-00-00'
        }
    )
  }
}