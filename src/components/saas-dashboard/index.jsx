import Buckets from "./Buckets";
import SAASContextProvider from "./SAASContext";
import Layout from "./layout";

const SAASDashboard = () => {
  return (
    <SAASContextProvider>
      <Layout>
        <Buckets />
      </Layout>
    </SAASContextProvider>
  );
};

export default SAASDashboard;
