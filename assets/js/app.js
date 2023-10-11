
const cl = console.log;

$(document).ready(function(){
    const bgColor1$ = $('#bgColor1');

    bgColor1$.on('change', function(){
        $('.all').hide()

        let selectedVal = $(this).val();
        cl(selectedVal)

        $('.'+selectedVal).fadeIn(1000)
    })
})