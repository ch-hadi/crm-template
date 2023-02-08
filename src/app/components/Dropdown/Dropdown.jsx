import Dropdown from 'react-bootstrap/Dropdown';

function CDropdown({heading, list,text,boldHeading}) {
  return (
    <Dropdown>
      <div>
      <Dropdown.Toggle variant="outlined" id="dropdown-basic">
       {heading}
      </Dropdown.Toggle>

      <Dropdown.Menu>
       {list?.map(element =><Dropdown.Item>{element}</Dropdown.Item>
       )}
      </Dropdown.Menu>
      </div>
      <p style={{fontSize:12 , margin:4}}><span className='filter-para'>{boldHeading}</span>{text}</p>
    </Dropdown>
  );
}

export default CDropdown;