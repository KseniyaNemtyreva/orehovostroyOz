

export function mask(){
    IMask(
        document.getElementById('callback-form__form-phone'),
        {
          mask: '+{7}(000)000-00-00'
        }
    ),

    IMask(
        document.getElementById('question-form__form-phone'),
        {
          mask: '+{7}(000)000-00-00'
        }
    )

    IMask(
        document.getElementById('calculation-form__form-phone'),
        {
          mask: '+{7}(000)000-00-00'
        }
    )

    IMask(
        document.getElementById('application-form__form-phone'),
        {
          mask: '+{7}(000)000-00-00'
        }
    )
}