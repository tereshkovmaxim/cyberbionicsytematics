window.onload = function () {
    let button = document.getElementById('send');
    let searchForm = document.getElementsByName('form-search')[0];
    button.onclick = function () {
        let request;
        let select = searchForm.querySelector('select');
        request = select.options[select.options.selectedIndex].value;
        request += searchForm.querySelector('input').value;
        window.open(request);
    };
};
//# sourceMappingURL=homework-2.js.map