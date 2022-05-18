import axios from 'axios'
import { API } from '../../../../config'

export const SignInAPI = (data) => {
    return axios({
        method: "POST",
        url: `${API}/user/signin`,
        data: data,
    }).then((res) => {
        console.log(res);
        return res;
    }).catch((err) => {
        console.log(err);
        return err;
    })
}