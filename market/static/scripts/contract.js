$(function () {
    $('.js-contract').click(function () {
        var $this = $(this);
        var pid = $this.data('pid');

        $.post('/api/contract/positionpid', {pid:pid}).then(function (result) {
            console.log(result);
        })
    })
});