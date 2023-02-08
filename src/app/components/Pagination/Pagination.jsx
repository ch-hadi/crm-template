import Pagination from 'react-bootstrap/Pagination';

function CPagination() {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default CPagination;