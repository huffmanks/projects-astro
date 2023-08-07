import { useSAAS } from '../../../context/SAASContext'

const PageContainer = ({ children }) => {
    const { sideBarExpanded } = useSAAS()

    const styles = {
        padding: sideBarExpanded ? 'sm:pl-72' : 'pl-16 sm:pl-20',
    }

    return <div className={`w-full flex flex-col transition-all ease-linear duration-150  ${styles.padding}`}>{children}</div>
}

export default PageContainer
