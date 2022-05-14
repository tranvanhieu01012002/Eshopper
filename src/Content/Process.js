import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

var clickNe = (text)=>{
    // alert("chao mừng bạn " + text)
    withReactContent(Swal)
  Swal.fire(
      'Thank you for your submit!',
      text,
      'success'
    )   
}

export {clickNe}