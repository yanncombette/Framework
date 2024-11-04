import { Collection } from "./framework/Collection";
import { User, UserProps } from "./user/User";
import { UserEdit } from "./user/UserEdit";
import { UserForm } from "./user/UserForm";
import { UserShow } from "./user/UserShow";

// const collection = User.buildCollection()
// collection.on("change", () => console.log(collection.models))
// collection.fetch()

const jhon = User.build({id: "fd5e"})
jhon.fetch()


const rootElement = document.getElementById('root')
const alex = User.build({name: 'alex', age: 30})


if (rootElement){
    // const userShow = new UserShow(rootElement, alex)
    // userShow.render()

    // const userForm = new UserForm(rootElement, alex)
    // userForm.render()

    // rootElement.addEventListener('click', (event) => {})
    const userEdit = new UserEdit(rootElement, alex)
    userEdit.render()
    console.log(userEdit)

}