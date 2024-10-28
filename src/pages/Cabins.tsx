import Row from "../components/ui/Row";
import Heading from "../components/ui/Heading";
import CabinTable from "../features/cabins/CabinTable";

const Cabins = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h2">All cabins</Heading>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
};

export default Cabins;
