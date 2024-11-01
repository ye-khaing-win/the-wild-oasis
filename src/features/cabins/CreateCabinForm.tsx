import { Form } from 'react-router-dom';
import FormRow from '../../components/form/FormRow';
import Label from '../../components/form/Label';
import Input from '../../components/form/Input';
import Textarea from '../../components/form/Textarea';
import FileInput from '../../components/form/FileInput';

const CreateCabinForm = () => {
  return (
    <Form>
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input type="text" id="name" />
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input type="text" id="maxCapacity" />
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input type="number" id="regularPrice" />
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input type="number" id="discount" defaultValue={0} />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea type="number" id="description" defaultValue="" />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" accept="image/*" type="file" />
      </FormRow>
    </Form>
  );
};

export default CreateCabinForm;
