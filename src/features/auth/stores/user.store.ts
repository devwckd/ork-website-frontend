import {defineStore} from "pinia";
import {ref} from "vue";

export const useUser = defineStore('user', () => {
    const name = ref<string>("")
    const email = ref<string>("")
    const role = ref<number>(-1)

    function setName(newName: string) {
        name.value = newName;
    }

    function setEmail(newEmail: string) {
        email.value = newEmail;
    }

    function setRole(newRole: number) {
        role.value = newRole;
    }

    return {
        name,
        email,
        role,
        setName,
        setEmail,
        setRole
    }
})