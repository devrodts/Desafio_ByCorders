import { Dashboard } from "../../components/pages/dashboard/Dashboard";
import Styles from './dashboard.module.css'

const DashboardPage = () => {
    return (
        <div className={Styles.container}>
            <Dashboard />
        </div>
    )
}

export default DashboardPage;