import axios from "axios"
import { API } from "../../../../config"

export const SignUpAPI = (data) => {
    return axios({
        method: "POST",
        url: `${API}/user/signup`,
        data: data
    }).then((res) => {
        console.log(res);
        return res;
    }).catch((err) => {
        console.log(err);
        return err;
    })
}