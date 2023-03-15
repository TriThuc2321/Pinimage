import { Home } from './pages';
import { useEffect } from 'react';
import { getUserByEmail } from './services/user';

function App() {
    useEffect(() => {
        const getUser = async () => {
            const getUser = await getUserByEmail('1');
            console.log(getUser);
        };
        getUser();
    }, []);

    return (
        <div>
            <Home />
        </div>
    );
}

export default App;
