import { Collection } from "../framework/Collection";
import { View } from "../framework/views/view";
import { ViewCollection } from "../framework/views/ViewCollection";
import { User, UserProps } from "./User";
import { UserForm } from "./UserForm";
import { UserList } from "./UserList";
import { UserShow } from "./UserShow";

export class UserEdit extends View<User, UserProps> {
    private collection: Collection<User, UserProps>;
    constructor(parent: Element, model: User, collection: Collection<User, UserProps>) {
        super(parent, model)
        this.collection = collection
    }


    regionsMap(): { [key: string]: string; } {
        return {
            userList: '.user-list',
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
        const userList = new UserList(this.regions.userList, this.collection)

        userList.onUserSelect = async (userId: string) => {
            const user = User.build({ id: userId })
            await user.fetch();
            this.model = user
            new UserShow(this.regions.userShow, this.model).render();
        }
        userList.render()

        new UserShow(this.regions.userShow, this.model).render()
        new UserForm(this.regions.userForm, this.model).render()
    }

    onUserSelect = async (userId: string) => {
        const user = User.build({ id: userId })
        user.fetch()
        this.model = user
        new UserShow(this.regions.userShow, this.model).render()
    };

}