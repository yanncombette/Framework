import { view } from "../framework/views/view";
import { User, UserProps } from "./User";

export class UserList extends view<User, UserProps> {
    template() {
        return `
            <div>
                <h1>User List</h1>
                
            </div>
        `
    }
}