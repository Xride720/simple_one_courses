

type UserEl = {
    id: number,
    name: string
};
type RequestData = {
    id? : number,
    name?: string
};
type MyHeaders = {
    [key: string] : string
};

interface CustomResponse {
    success: boolean,
    text? : string,
    error? : string,
    resArr? : UserEl[],
};
// interface TargetEl extends Element, EventTarget{}
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector('.add-user__btn').addEventListener('click', addUser);
    document.querySelector('.change-user__btn').addEventListener('click', changeUser);
    document.querySelector('.get-all__btn').addEventListener('click', getAllUser);
    document.querySelector('.delete-user__btn').addEventListener('click', deleteUser);


    async function addUser(e : Event): Promise<void> {
        let target = e.target as Element,
            input : HTMLInputElement = target.closest('.create__form').querySelector('.text-input'),
            newUserName: string = input.value;
        if (newUserName) {
            let res : CustomResponse = await request('/add', 'POST', {name: newUserName});
            console.log(res);

            if (res.success) {
                inputSignal(input, res.text, 'success');
                updateUserList();
            }
            else inputSignal(input, res.error, 'error');

        } else inputSignal(input, 'Имя не может быть пустым', 'error');

    }

    async function changeUser(e : Event): Promise<void> {
        let target = e.target as Element,
            inputName : HTMLInputElement = target.closest('.change__form').querySelector('.change__input-name'),
            inputId : HTMLInputElement = target.closest('.change__form').querySelector('.change__input-id'),
            userId : number = +inputId.value,
            newUserName : string = inputName.value;
        if (newUserName && !isNaN(userId)) {
            let res : CustomResponse = await request('/change_user', 'PUT', {id: userId, name: newUserName});
            console.log(res);

            if (res.success) {
                inputSignal(inputName, res.text, 'success');
                inputId.value = '';
                updateUserList();
            }
            else {
                inputSignal(inputName, res.error, 'error');
            }

        } else {
            if (!newUserName) inputSignal(inputName, 'Имя не может быть пустым', 'error');
            else inputSignal(inputId, 'Неверный ID', 'error');
        }

    }

    async function deleteUser(e : Event): Promise<void> {
        let target = e.target as Element,
            input : HTMLInputElement = target.closest('.delete__form').querySelector('.text-input'),
            deleteId : number = +input.value;
        if (!isNaN(deleteId) && input.value != '') {
            
            let res : CustomResponse = await request('/delete_user', 'DELETE', {id: deleteId});
            console.log(res);

            if (res.success) {
                inputSignal(input, res.text, 'success');
                updateUserList();
            }
            else inputSignal(input, res.error, 'error');

        } else inputSignal(input, 'Неверный ID', 'error');

    }

    async function deleteUserEl(e : Event): Promise<void> {
        let target = e.target as Element,
            el : HTMLDivElement = target.closest('.user__list-el'),
            id = +el.dataset.id;
            let res : CustomResponse = await request('/delete_user', 'DELETE', {id: id});

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

    }

    async function getAllUser(e : Event): Promise<void> {
        let target = e.target as Element,
            res : CustomResponse = await request('/all_users');
        console.log(res);

        let resArr: UserEl[] = res.resArr.sort((a,b) => a.id - b.id);
        let html: string = resArr.reduce((prev, current) => {
            prev += `
            <li class="user__list-el" data-id="${current.id}">
                ID: ${current.id} | Name: ${current.name}
                <div class="delete-user-el__btn">&#x2716;</div>
            </li>`;
            return prev;
        }, '');
        target.closest('.get-all__form').querySelector('.user__list').innerHTML = html;
        document.querySelectorAll('.delete-user-el__btn').forEach(item => item.addEventListener('click', deleteUserEl));

    }

    function updateUserList(): void {
        let e: Event = new Event('click');
        document.querySelector('.get-all__btn').dispatchEvent(e);
    }

    async function request(url : string, method : string = 'GET', data : RequestData | null  = null): Promise<CustomResponse> {
        try {
            const headers : MyHeaders = {};
            let body : string;
            if (data) {
                headers['Content-Type'] = 'application/json';
                body = JSON.stringify(data);
            }
            const response = await fetch(url, {
                method,
                headers,
                body
            });
            return response.json();
        } catch (e) {
            console.warn('Error ', e.message);
        }
    }

    function inputSignal(input : HTMLInputElement, text : string, classCustom : string): void {
        let oldValue : string = input.value;
        input.classList.add(classCustom);
        input.value = text;
        setTimeout(() => {
            input.value = classCustom == 'success' ? '' : oldValue;
            input.classList.remove(classCustom);
        }, 1500);
    }
});
