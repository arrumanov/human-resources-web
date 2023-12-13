
import { Modal, Skeleton } from 'antd';
import AppBody from './AppBody';
import { useKeycloak } from '@react-keycloak/web'

//modify default ant behaviour
Modal.defaultProps = { ...Modal.defaultProps, maskClosable: false };

function App() {
  const {keycloak, initialized} = useKeycloak();

  return (
    <>
      {!initialized ? (
        <Skeleton></Skeleton>
      ) : (
        keycloak?.authenticated ? (
          <>
            <AppBody />
          </>
        ) : (
          keycloak.login()
        )
      )}
    </>
  );
}

export default App;