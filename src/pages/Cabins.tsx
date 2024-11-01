import Row from '../components/ui/Row';
import Heading from '../components/ui/Heading';
import CabinTable from '../features/cabins/CabinTable';
import { useState } from 'react';
import CreateCabinForm from '../features/cabins/CreateCabinForm';

const Cabins = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h2">All cabins</Heading>
      </Row>
      <Row>
        <CabinTable />
        <button onClick={() => setShowForm(!showForm)}>Add new cabin</button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
};

export default Cabins;
