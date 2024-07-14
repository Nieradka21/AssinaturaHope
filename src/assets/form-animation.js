$(document).ready(function() {
    $('.form-control').on('input', function() {
        var $input = $(this);
        var $line = $input.next('.line');

        if ($input.val().trim() !== '') {
            $line.addClass('bold-animation');
        } else {
            $line.removeClass('bold-animation');
        }
    });
});
