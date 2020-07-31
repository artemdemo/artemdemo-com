import 'bootstrap/dist/css/bootstrap.css';
import './src/styles/general.css';
import { showUpdateReadyInfo } from './src/components/UpdateReadyInfo/UpdateReadyInfo';

export const onServiceWorkerUpdateReady = () => {
    showUpdateReadyInfo();
}
