var $ = require('jquery');

var setSelectAll = function () {
    var total = $('[name=selected]').length;
    var checked = $('[name=selected]:checked').length;

    if (checked === 0) {
        $('[data-js=selectAll]').prop('indeterminate', false);
        $('[data-js=selectAll]').prop('checked', false);
    }
    else if (checked === total) {
        $('[data-js=selectAll]').prop('indeterminate', false);
        $('[data-js=selectAll]').prop('checked', true);
    }
    else {
        $('[data-js=selectAll]').prop('checked', false);
        $('[data-js=selectAll]').prop('indeterminate', true);
    }

    $(document).trigger('selectall:changed', { checked: checked, total: total });
}

$(document).on('click', '[data-js=selectAll]', e => {
    $('[name=selected]').prop('checked', e.target.checked);
    setSelectAll();
});

$(document).on('click', '[name=selected]', e => {
    setSelectAll();
});
