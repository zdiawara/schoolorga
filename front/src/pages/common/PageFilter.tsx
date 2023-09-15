import { FC, ReactNode, useState } from "react";
import { Button, Card, Form, InputGroup, Row } from "react-bootstrap";

type PageFilterProps = {
  children?: ReactNode;
};

const Container: FC<PageFilterProps> = ({ children }) => {
  return (
    <Card>
      <Card.Body>
        <Row>{children}</Row>
      </Card.Body>
    </Card>
  );
};

type SearchProps = {
  initialValue: string | null;
  onChange: (value: string) => void;
};
const Search: FC<SearchProps> = ({ initialValue, onChange }) => {
  const [search, setSearch] = useState<string>(initialValue || "");
  const handleChange = (e: React.ChangeEvent<any>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    onChange(search);
  };

  return (
    <InputGroup>
      <Form.Control
        className="text-black"
        placeholder="Rechercher ..."
        onChange={handleChange}
        value={search}
      />
      <Button variant="secondary" onClick={onSubmit}>
        Rechercher
      </Button>
    </InputGroup>
  );
};

export const PageFilter = {
  Container,
  Search,
};
