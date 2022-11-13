import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from 'src/boot/axios';

export const useUserStore = defineStore('user', () => {
    
    const token = ref(null);
    const expiresIn = ref(null);

    const access = async () => {
        try {
          console.log('me diste click')
          const res = await api.post('/auth/login', {
            email: "    pr1sd23@admin.cl",
            password: "123asd13"
          })
          console.log(res.data);
          token.value = res.data.token;
          expiresIn.value = res.data.expiresIn;
          sessionStorage.setItem('user', true);
          setTime();
        } catch(error) { 
          console.log(error) 
        }  
      }

      const logout = async() => {
        try {
            await api.get('/auth/logout')
        } catch (error) {
            console.log(error)
        } finally {
            resetStore()
            sessionStorage.removeItem('user')
        }
      }

      const setTime = () => {
        setTimeout(() => {
          refreshToken()
        }, expiresIn.value * 1000 - 6000)
      }
      
      const refreshToken = async() => {
        try {
          const res = await api.get('/auth/refresh');
          console.log(res.data);
          token.value = res.data.token;
          expiresIn.value = res.data.expiresIn;
          sessionStorage.setItem('user', true);
          setTime();
        } catch(error) {
          
          console.log(error)
          sessionStorage.removeItem('user')
        }
      
      }
      
      const resetStore = () => {
        token.value = null;
        expiresIn.value = null;
      }

    return { token, expiresIn, refreshToken, setTime, logout, access}
});
