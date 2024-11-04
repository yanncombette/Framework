import { view } from "../framework/views/view";
import { User, UserProps } from "./User";

export class UserList extends view<User, UserProps> {
    template() {
        return `
            <div>
                <h1>User Detail</h1>
                <div>User Name: ${this.model.get('name')}</div>
                <div>User Age: ${this.model.get('age')}</div>
            </div>
        `
    }
}