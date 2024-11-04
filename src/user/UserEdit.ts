import { Collection } from "../framework/Collection";
import { ViewCollection } from "../framework/views/ViewCollection";
import { User, UserProps } from "./User";
import { UserList } from "./UserList";
import { UserShow } from "./UserShow";
import { UserForm } from "./UserForm";

export class UserEdit extends ViewCollection<Collection<User, UserProps>, UserProps> {
    private selectedUser: User | null = null;

    regionsMap(): { [key: string]: string } {
        return {
            userList: '.user-list',
            userShow: '.user-show',
            userForm: '.user-form'
        };
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
        new UserList(this.regions.userList, this.collection).render();
        this.renderSelectedUser();
        this.renderUserForm();
    }

    private renderSelectedUser() {
        if (this.selectedUser) {
            new UserShow(this.regions.userShow, this.selectedUser).render();
        } else {
            this.regions.userShow.innerHTML = 'Select a user to view details.';
        }
    }

    private renderUserForm() {
        if (this.selectedUser) {
            new UserForm(this.regions.userForm, this.selectedUser).render();
        } else {
            this.regions.userForm.innerHTML = 'No user selected.';
        }
    }

    bindEvents(fragment: DocumentFragment) {
        super.bindEvents(fragment);

        const userListSelect = fragment.querySelector('.user-list select');


        if (userListSelect) {
            userListSelect.addEventListener('change', () => {
                const selectedUserId = userListSelect;
                
                console.log(selectedUserId);

                if (selectedUserId) {
                    
                    // this.selectedUser = User.build({ id: selectedUserId });
                    // this.selectedUser.fetch().then(() => {
                    //     this.render(); 
                    // });
                } else {
                    this.selectedUser = null; 
                    this.render();
                }
            });
        }
    }
}
