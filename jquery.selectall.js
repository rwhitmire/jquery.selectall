var $ = require('jquery');

$(document).on('click', '[data-js=selectAll]', e => {
    $('[name=selected]').prop('checked', e.target.checked);
    $('[name=selected]').trigger('change');
});

$(document).on('click', '[name=selected]', e => {
    var count = $('[name=selected]').length;
    var checked = $('[name=selected]:checked').length;

    if (checked === 0) {
        $('[data-js=selectAll]').prop('indeterminate', false);
        $('[data-js=selectAll]').prop('checked', false);
        return;
    }

    if (checked === count) {
        $('[data-js=selectAll]').prop('indeterminate', false);
        $('[data-js=selectAll]').prop('checked', true);
        return;
    }

    $('[data-js=selectAll]').prop('checked', false);
    $('[data-js=selectAll]').prop('indeterminate', true);
});
