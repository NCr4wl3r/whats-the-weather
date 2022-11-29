class InputView {
    _parentEl = document.querySelector(".form-getPosition");
    getCity() {
        const inputEl = this._parentEl.querySelector(".form-getPosition_input");
        const city = inputEl.value;
        console.log(city);
        this._clearInput();
        return city;
    }
    _clearInput() {
        this._parentEl.querySelector(".form-getPosition_input").value = "";
    }
    addHandlerGetCity(handler) {
        this._parentEl.addEventListener("submit", function (e) {
            e.preventDefault();
            handler();
        });
    }
}

export default new InputView();