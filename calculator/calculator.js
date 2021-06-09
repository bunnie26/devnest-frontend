class calculator{
    constructor (previouselement,currentelement){
        this.previouselement = previouselement
        this.currentelement = currentelement
        this.clear()
    }

    clear(){
        this.current = ""
        this.previous = ""
        this.operation = undefined
    }
    delete(){

    }
    append(){

    }
    chooseopr(){

    }
    compute(){

    }
    updatedisplay(){

    }
}


const numberbuttons = document.querySelectorAll('[data-number]')
const operationbuttons = document.querySelectorAll('[data-operation]')
const allclearbutton = document.querySelector('[data-all-clear]')
const deletebutton = document.querySelector('[data-delete]')
const equalsbutton = document.querySelector('[data-equals]')
const previouselement = document.querySelector('[data-previous]')
const currentelement = document.querySelector('[data-current]')


const Calc = new calculator(previouselement,currentelement)

