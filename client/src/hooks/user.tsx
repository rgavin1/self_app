import { useState } from 'react'

const useUser = () => {
    const [user, setUser] = useState<any>();
    return { user, setUser }
}

export default useUser