function StudentCard (props) {
  return (
    <>
    <h2>{props.name}</h2>
    <p>Age: {props.age}</p>
    <p>Class: {props.Class}</p>
    </>
  );
}

export default StudentCard;