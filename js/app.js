$(document).ready(function(){
    // toggle between para and picha //
    $('#design').click(function(){
        $('#designPara').toggle()
        $('#designPicha').toggle()
    })
    $('#development').click(function(){
      $('#developmentPara').toggle()
      $('#developmentPicha').toggle()
    })
    $('#projectManagement').click(function(){
      $('#projectPara').toggle()
      $('#projectPicha').toggle()
    })
    // toggle between para and picha //

    // css //
    $('#aboutusHeader').css('font-weight', 'bold');
    $('#whatTitle').css('font-weight', 'bold');
    $('#contactTitle').css('font-weight', 'bold');
    $('#contactTitle').css('color', 'white');
    $('#portfolioHeader').css('font-weight', 'bold');
    $('#serviceHeader').css('font-weight', 'bold'); 
    $('#contactTitle').css('padding-top', 40);
    // css //

    // hover effect //
    $('#hoverPara').hover(function() {
        $(this).animate({opacity: '1'})
    },
    function(){
        $(this).animate({opacity:'0'})
    })
    // hover effect //
    

    // js function for validation // 
    $('#target').submit(function(event){
        event.preventDefault();
        var name = $('input#name').val();
        var email = $('input#email').val();
        var message = $('textarea#messageArea').val();
        if ($('input#name').val() && $('input#email').val()){
            alert (name + ", we have received your message. Thank your for reaching to us.");                
        }
        else {
            alert('Please enter your name and email please!');
        }
    })
    // js function for validation //
})