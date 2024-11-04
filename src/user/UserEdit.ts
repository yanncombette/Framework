import { view } from "../framework/views/view";
import { User, UserProps } from "./User";
import { UserForm } from "./UserForm";
import { UserList } from "./UserList";
import { UserShow } from "./UserShow";

export class UserEdit extends view<User, UserProps> {
    regionsMap(): { [key: string]: string; } {
        return {
            userShow: '.user-show',
            userForm: '.user-form'
        }
    }
    template(): string {
        return `
            <div>
                <div class="user-list"></div>
                <div class="user-show"></div>
                <div class="user-form"></div>
            </div>
        `
    }

    onRender(): void {
        new UserList(this.regions.userList, this.model).render()
        new UserShow(this.regions.userShow, this.model).render()
        new UserForm(this.regions.userForm, this.model).render()
    }
}