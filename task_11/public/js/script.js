var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
// interface TargetEl extends Element, EventTarget{}
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.add-user__btn').addEventListener('click', addUser);
    document.querySelector('.change-user__btn').addEventListener('click', changeUser);
    document.querySelector('.get-all__btn').addEventListener('click', getAllUser);
    document.querySelector('.delete-user__btn').addEventListener('click', deleteUser);
    function addUser(e) {
        return __awaiter(this, void 0, void 0, function* () {
            let target = e.target, input = target.closest('.create__form').querySelector('.text-input'), newUserName = input.value;
            if (newUserName) {
                let res = yield request('/add', 'POST', { name: newUserName });
                console.log(res);
                if (res.success) {
                    inputSignal(input, res.text, 'success');
                    updateUserList();
                }
                else
                    inputSignal(input, res.error, 'error');
            }
            else
                inputSignal(input, 'Имя не может быть пустым', 'error');
        });
    }
    function changeUser(e) {
        return __awaiter(this, void 0, void 0, function* () {
            let target = e.target, inputName = target.closest('.change__form').querySelector('.change__input-name'), inputId = target.closest('.change__form').querySelector('.change__input-id'), userId = +inputId.value, newUserName = inputName.value;
            if (newUserName && !isNaN(userId)) {
                let res = yield request('/change_user', 'PUT', { id: userId, name: newUserName });
                console.log(res);
                if (res.success) {
                    inputSignal(inputName, res.text, 'success');
                    inputId.value = '';
                    updateUserList();
                }
                else {
                    inputSignal(inputName, res.error, 'error');
                }
            }
            else {
                if (!newUserName)
                    inputSignal(inputName, 'Имя не может быть пустым', 'error');
                else
                    inputSignal(inputId, 'Неверный ID', 'error');
            }
        });
    }
    function deleteUser(e) {
        return __awaiter(this, void 0, void 0, function* () {
            let target = e.target, input = target.closest('.delete__form').querySelector('.text-input'), deleteId = +input.value;
            if (deleteId) {
                if (isNaN(deleteId)) {
                    inputSignal(input, 'Неверный ID', 'error');
                    return;
                }
                let res = yield request('/delete_user', 'DELETE', { id: deleteId });
                console.log(res);
                if (res.success) {
                    inputSignal(input, res.text, 'success');
                    updateUserList();
                }
                else
                    inputSignal(input, res.error, 'error');
            }
            else
                inputSignal(input, 'ID не может быть пустым', 'error');
        });
    }
    function deleteUserEl(e) {
        return __awaiter(this, void 0, void 0, function* () {
            let target = e.target, el = target.closest('.user__list-el'), id = +el.dataset.id;
            let res = yield request('/delete_user', 'DELETE', { id: id });
            if (res.success) {
                updateUserList();
            }
            else {
                let oldContent = el.textContent;
                el.classList.add('error');
                el.textContent = 'Ошибка удаления =(';
                setTimeout(() => {
                    el.classList.remove('error');
                    el.textContent = oldContent;
                }, 1500);
            }
        });
    }
    function getAllUser(e) {
        return __awaiter(this, void 0, void 0, function* () {
            let target = e.target, res = yield request('/all_users');
            console.log(res);
            let resArr = res.resArr.sort((a, b) => a.id - b.id);
            let html = resArr.reduce((prev, current) => {
                prev += `
            <li class="user__list-el" data-id="${current.id}">
                ID: ${current.id} | Name: ${current.name}
                <div class="delete-user-el__btn">&#x2716;</div>
            </li>`;
                return prev;
            }, '');
            target.closest('.get-all__form').querySelector('.user__list').innerHTML = html;
            document.querySelectorAll('.delete-user-el__btn').forEach(item => item.addEventListener('click', deleteUserEl));
        });
    }
    function updateUserList() {
        let e = new Event('click');
        document.querySelector('.get-all__btn').dispatchEvent(e);
    }
    function request(url, method = 'GET', data = null) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = {};
                let body;
                if (data) {
                    headers['Content-Type'] = 'application/json';
                    body = JSON.stringify(data);
                }
                const response = yield fetch(url, {
                    method,
                    headers,
                    body
                });
                return response.json();
            }
            catch (e) {
                console.warn('Error ', e.message);
            }
        });
    }
    function inputSignal(input, text, classCustom) {
        let oldValue = input.value;
        input.classList.add(classCustom);
        input.value = text;
        setTimeout(() => {
            input.value = classCustom == 'success' ? '' : oldValue;
            input.classList.remove(classCustom);
        }, 1500);
    }
});
