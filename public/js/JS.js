let myid
        async function getuser(){
            try {
                    const response = await fetch('/user')
                    if (response.status == 200) {
                        const data = await response.json()//convert to text
                        myid = data.userID
                        

                    }
                    
                    else if (response.status == 500) {
                        const data = await response.text()//convert to text
                        alert(data)
                    }
                    
                } catch (error) {
                    alert(error.message)
                }
        }
        getuser()

function logout(){
    location.replace('/logout')
}
