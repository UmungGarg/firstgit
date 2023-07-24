function q(event){
    event.preventDefault()
    const fname = event.target.amount.value
    const lname = event.target.des.value
    const mobile = event.target.catg.value

    const obj = {
        fname,
        lname,
        mobile
    } 

    localStorage.setItem(obj.lname,JSON.stringify(obj))
    showuseronscreen (obj)

}


function showuseronscreen (obj){
    const parentelem = document.getElementById("ulul")
    const childelem = document.createElement("li")
    childelem.textContent = obj.fname + ' - ' + obj.lname+' - ' + obj.mobile

    const deletebutton = document.createElement("input")
    deletebutton.type = "button"
    deletebutton.value = "Delete Expense"

    deletebutton.onclick = () => {
        localStorage.removeItem(obj.lname)
        parentelem.removeChild(childelem)
    }


    const editbutton = document.createElement("input")
    editbutton.type ="button"
    editbutton.value = "Edit Expense"

    editbutton.onclick = () => {
        localStorage.removeItem(obj.lname)
        parentelem.removeChild(childelem)
        document.getElementById("fname").value = obj.fname
        document.getElementById("lname").value = obj.lname
        document.getElementById("mobile").value = obj.mobile

    }
    childelem.appendChild(deletebutton)
    childelem.appendChild(editbutton)

    parentelem.appendChild(childelem)
} 



