class Menu {

    status = false

    constructor(fid, did) {
        this.field = document.getElementById(fid);
        this.dialog = document.getElementById(did);
        console.log(this.field, this.dialog);

        this.field.addEventListener('click', () => {
            this.toggleDialog();
        })

    }

    show() {
        this.dialog.style.display = 'block';
        this.status = true;
    }

    hide() {
        this.dialog.style.display = 'none';
        this.status = false;
    }

    toggleDialog() {
        if(this.status == false){
            this.show();
            console.log(this.status);
        }
        else {
            this.hide();
            console.log(this.status);
        }
    }

}

let a = new Menu('field', 'dialog');
a.show()

let b = new Menu('field1', 'dialog1');
