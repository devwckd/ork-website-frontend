import type {NavigationGuardNext, NavigationGuardWithThis, RouteLocationNormalized} from "vue-router";
import axios from "axios";
import {useUser} from "@/features/auth/stores/user.store";

export const authGuard: NavigationGuardWithThis<undefined> = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (to.meta.auth == "none") return next()

    return axios.get("http://localhost:8080/auth/me", {
        withCredentials: true,
    }).then(res => {
            if (res.status == 200) {
                let { setName, setEmail, setRole } = useUser()
                setName(res.data.name)
                setEmail(res.data.email)
                setRole(res.data.role)

                if (to.meta.auth == "onlyAuthenticated") {
                    return next()
                } else {
                    return next("/")
                }
            } else {
                console.error("bug")
            }
        }
    ).catch(err => {
        if(err.response) {
            if ((err.response.status == 401 || err.response.status == 403) && to.meta.auth == "notAuthenticated") {
                return next()
            } else {
                return next("/auth")
            }
        } else {
            console.error("bug")
        }
    })
}
