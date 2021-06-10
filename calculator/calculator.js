class calculator{
    constructor (previouselement,currentelement){
        this.previouselement = previouselement
        this.currentelement = currentelement
        this.clear()
    }

    clear(){
        this.current = ''
        this.previous = ''
        this.operation = undefined
    }
    delete(){
        this.current = this.current.toString().slice(0,-1)
    }
    append(number){
        if (number === "." && this.current.includes(".")) return 
        this.current = this.current.toString() + number.toString()
    }
    chooseopr(operation){
        if(this.current === "")return
        if(this.previous != ""){
            this.compute()
        }
        this.operation = operation
        this.previous = this.current
        this.current = ""
    }
    compute(){
        let computation
        const prev  = parseFloat(this.previous)
        const cur = parseFloat(this.current)
        if (isNaN(prev) || isNaN(cur))return
        switch (this.operation){
            case "+":
                computation = prev + cur
                break
            case "-":
                computation = prev - cur
                break
            case "÷":
                computation = prev / cur
                break
            case "*":
                computation = prev * cur
                break
            default:
                return
        }
        this.current = computation
        this.operation = undefined
        this.previous = ""
    }
    getdisplay(number){
        const stringnum = number.toString()
        const integerdigit = parseFloat(stringnum.split('.')[0])
        const decimaldigit = stringnum.split('.')[1]
        let integerdisplay 
        if(isNaN(integerdigit)){
            integerdisplay = ''
        } else{
            integerdisplay = integerdigit.toLocaleString('en',{
                maximumFractionDigits:0
            })
        }
        if(decimaldigit!=null){
            return `${integerdisplay}.${decimaldigit}`
        }else{
            return integerdisplay
        }
    }
    updatedisplay(){
        this.currentelement.innerText = this.getdisplay(this.current)
        if(this.operation!= null){
            this.previouselement.innerText = `${this.getdisplay(this.previous)} ${this.operation}`
        }
        else{
            this.previouselement.innerText = ''
        }


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

numberbuttons.forEach(button => {
    button.addEventListener('click',() => {
        Calc.append(button.innerText)
        Calc.updatedisplay()
    })
})
operationbuttons.forEach(button => {
    button.addEventListener('click',() => {
        Calc.chooseopr(button.innerText)
        Calc.updatedisplay()
    })
})
equalsbutton.addEventListener('click', button => {
    Calc.compute()
    Calc.updatedisplay()
})
allclearbutton.addEventListener('click', button => {
    Calc.clear()
    Calc.updatedisplay()
})
deletebutton.addEventListener('click', button => {
    Calc.delete()
    Calc.updatedisplay()
})